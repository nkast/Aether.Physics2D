/*******************************************************************************
 * Original Java code:
 * Copyright (c) 2013, Daniel Murphy
 * All rights reserved.
 ******************************************************************************/

using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Xna.Framework;
using Microsoft.Xna.Framework.Graphics;
using Microsoft.Xna.Framework.Input;
using nkast.Aether.Physics2D.Collision;
using nkast.Aether.Physics2D.Dynamics;
using nkast.Aether.Physics2D.Common;
using nkast.Aether.Physics2D.Collision.Shapes;

namespace FluidPort
{
    public class FluidSimulation
    {
        public const bool DRAW_CELLS = false;
        public const int MAX_PARTICLES = 20000;
        public const int MAX_NEIGHBORS = 75;
        public const float CELL_SIZE = 0.6f;
        public const float RADIUS = 0.9f;
        public const float VISCOSITY = 0.004f;
        public const float IDEAL_RADIUS = 50f;
        public const float IDEAL_RADIUS_SQ = IDEAL_RADIUS * IDEAL_RADIUS;
        public const float MULTIPLIER = IDEAL_RADIUS / RADIUS;
        public const float DT = 1f / 60f;
        private int _numActiveParticles = 0;
        private Particle[] _liquid;
        private List<int> _activeParticles;
        private Vector2[] _delta;
        private Vector2[] _scaledPositions;
        private Vector2[] _scaledVelocities;
        private Dictionary<int, Dictionary<int, List<int>>> _grid;
        private World _world;
        private SpriteBatch _spriteBatch;
        private Texture2D _pixel;
        private SpriteFont _font;
        private Vector2 _mouse;
        private Random _random;
        private object _calculateForcesLock = new object();
        private AABB _simulationAABB;
        private Vector2 _gravity = new Vector2(0, 9.8f) / 3000;
        private Vector2 _halfScreen;

        private int getGridX(float x) { return (int)Math.Floor(x / CELL_SIZE); }
        private int getGridY(float y) { return (int)Math.Floor(y / CELL_SIZE); }

        public FluidSimulation(World world, SpriteBatch spriteBatch, SpriteFont font)
        {
            _world = world;
            _spriteBatch = spriteBatch;
            _font = font;
            _activeParticles = new List<int>(MAX_PARTICLES);
            _liquid = new Particle[MAX_PARTICLES];
            for (int i = 0; i < MAX_PARTICLES; i++)
            {
                _liquid[i] = new Particle(Vector2.Zero, Vector2.Zero, false);
                _liquid[i].index = i;
            }

            _delta = new Vector2[MAX_PARTICLES];
            _scaledPositions = new Vector2[MAX_PARTICLES];
            _scaledVelocities = new Vector2[MAX_PARTICLES];

            _grid = new Dictionary<int, Dictionary<int, List<int>>>();

            _pixel = new Texture2D(_spriteBatch.GraphicsDevice, 1, 1);
            _pixel.SetData<Color>(new[] { Color.White });

            _random = new Random();

            _halfScreen = new Vector2(
                _spriteBatch.GraphicsDevice.Viewport.Width,
                _spriteBatch.GraphicsDevice.Viewport.Height) / 2f;
            _simulationAABB.LowerBound.X = -(_halfScreen.X + 100f);
            _simulationAABB.LowerBound.Y = -(_halfScreen.Y + 100f);
            _simulationAABB.UpperBound.X = _halfScreen.X + 100f;
            _simulationAABB.UpperBound.Y = _halfScreen.Y + 100f;
        }

        private void findNeighbors(Particle particle)
        {
            particle.neighborCount = 0;
            Dictionary<int, List<int>> gridX;
            List<int> gridY;

            for (int nx = -1; nx < 2; nx++)
            {
                for (int ny = -1; ny < 2; ny++)
                {
                    int x = particle.ci + nx;
                    int y = particle.cj + ny;
                    if (_grid.TryGetValue(x, out gridX) && gridX.TryGetValue(y, out gridY))
                    {

                        for (int a = 0; a < gridY.Count; a++)
                        {
                            if (gridY[a] != particle.index)
                            {
                                particle.neighbors[particle.neighborCount] = gridY[a];
                                particle.neighborCount++;

                                if (particle.neighborCount >= MAX_NEIGHBORS)
                                    return;
                            }
                        }
                    }
                }
            }
        }

        // prepareSimulation
        private void prepareSimulation(int index)
        {
            Particle particle = _liquid[index];

            // Find neighbors
            findNeighbors(particle);

            // Scale positions and velocities
            _scaledPositions[index] = particle.position * MULTIPLIER;
            _scaledVelocities[index] = particle.velocity * MULTIPLIER;

            // Reset collision information
            particle.numFixturesToTest = 0;

            // Reset deltas
            _delta[index] = Vector2.Zero;

            // Reset pressures
            _liquid[index].p = 0;
            _liquid[index].pnear = 0;

            // Store old position
            particle.oldPosition = particle.position;
        }

        // prepareCollisions
        private void prepareCollisions()
        {
            Dictionary<int, List<int>> collisionGridX;
            List<int> collisionGridY;

            // Query the world using the screen's AABB
            _world.QueryAABB((Fixture fixture) =>
                {
                    AABB aabb;
                    Transform transform;
                    fixture.Body.GetTransform(out transform);
                    fixture.Shape.ComputeAABB(out aabb, ref transform, 0);

                    // Get the top left corner of the AABB in grid coordinates
                    int Ax = getGridX(aabb.LowerBound.X);
                    int Ay = getGridY(aabb.LowerBound.Y);

                    // Get the bottom right corner of the AABB in grid coordinates
                    int Bx = getGridX(aabb.UpperBound.X) + 1;
                    int By = getGridY(aabb.UpperBound.Y) + 1;

                    // Loop through all the grid cells in the fixture's AABB
                    for (int i = Ax; i < Bx; i++)
                    {
                        for (int j = Ay; j < By; j++)
                        {
                            if (_grid.TryGetValue(i, out collisionGridX) && collisionGridX.TryGetValue(j, out collisionGridY))
                            {
                                // Tell any particles we find that this fixture should be tested
                                for (int k = 0; k < collisionGridY.Count; k++)
                                {
                                    Particle particle = _liquid[collisionGridY[k]];
                                    if (particle.numFixturesToTest < Particle.MAX_FIXTURES_TO_TEST)
                                    {
                                        particle.fixturesToTest[particle.numFixturesToTest] = fixture;
                                        particle.numFixturesToTest++;
                                    }
                                }
                            }
                        }
                    }

                    return true;
                },
                ref _simulationAABB);
        }

        // calculatePressure
        private void calculatePressure(int index)
        {
            Particle particle = _liquid[index];

            for (int a = 0; a < particle.neighborCount; a++)
            {
                Vector2 relativePosition = _scaledPositions[particle.neighbors[a]] - _scaledPositions[index];
                float distanceSq = relativePosition.LengthSquared();

                //within idealRad check
                if (distanceSq < IDEAL_RADIUS_SQ)
                {
                    particle.distances[a] = (float)Math.Sqrt(distanceSq);
                    //if (particle.distances[a] < Settings.EPSILON) particle.distances[a] = IDEAL_RADIUS - .01f;
                    float oneminusq = 1.0f - (particle.distances[a] / IDEAL_RADIUS);
                    particle.p = (particle.p + oneminusq * oneminusq);
                    particle.pnear = (particle.pnear + oneminusq * oneminusq * oneminusq);
                }
                else
                {
                    particle.distances[a] = float.MaxValue;
                }
            }
        }

        // calculateForce
        private Vector2[] calculateForce(int index, Vector2[] accumulatedDelta)
        {
            Particle particle = _liquid[index];

            // Calculate forces
            float pressure = (particle.p - 5f) / 2.0f; //normal pressure term
            float presnear = particle.pnear / 2.0f; //near particles term
            Vector2 change = Vector2.Zero;
            for (int a = 0; a < particle.neighborCount; a++)
            {
                Vector2 relativePosition = _scaledPositions[particle.neighbors[a]] - _scaledPositions[index];

                if (particle.distances[a] < IDEAL_RADIUS)
                {
                    float q = particle.distances[a] / IDEAL_RADIUS;
                    float oneminusq = 1.0f - q;
                    float factor = oneminusq * (pressure + presnear * oneminusq) / (2.0F * particle.distances[a]);
                    Vector2 d = relativePosition * factor;
                    Vector2 relativeVelocity = _scaledVelocities[particle.neighbors[a]] - _scaledVelocities[index];

                    factor = VISCOSITY * oneminusq * DT;
                    d -= relativeVelocity * factor;
                    accumulatedDelta[particle.neighbors[a]] += d;
                    change -= d;
                }
            }
            accumulatedDelta[index] += change;

            // Apply gravitational force
            particle.velocity += _gravity;

            return accumulatedDelta;
        }

        // resolveCollisions
        private void resolveCollision(int index)
        {
            Particle particle = _liquid[index];

            // Test all fixtures stored in this particle
            for (int i = 0; i < particle.numFixturesToTest; i++)
            {
                Fixture fixture = particle.fixturesToTest[i];

                // Determine where the particle will be after being moved
                Vector2 newPosition = particle.position + particle.velocity + _delta[index];

                // Test to see if the new particle position is inside the fixture
                if (fixture.TestPoint(ref newPosition))
                {
                    Body body = fixture.Body;
                    Vector2 closestPoint = Vector2.Zero;
                    Vector2 normal = Vector2.Zero;

                    // Resolve collisions differently based on what type of shape they are
                    if (fixture.Shape is PolygonShape shape)
                    {
                        Transform collisionXF;
                        body.GetTransform(out collisionXF);

                        for (int v = 0; v < shape.Vertices.Count; v++)
                        {
                            // Transform the shape's vertices from local space to world space
                            particle.collisionVertices[v] = Transform.Multiply(shape.Vertices[v], ref collisionXF);

                            // Transform the shape's normals using the rotation (Complex) part of the transform
                            particle.collisionNormals[v] = nkast.Aether.Physics2D.Common.Complex.Multiply(shape.Normals[v], ref collisionXF.q);
                        }

                        // Find closest edge
                        float shortestDistance = 9999999f;
                        for (int v = 0; v < shape.Vertices.Count; v++)
                        {
                            // Project the vertex position relative to the particle position onto the edge's normal to find the distance
                            float distance = Vector2.Dot(particle.collisionNormals[v], particle.collisionVertices[v] - particle.position);
                            if (distance < shortestDistance)
                            {
                                // Store the shortest distance
                                shortestDistance = distance;

                                // Push the particle out of the shape in the direction of the closest edge's normal
                                closestPoint = particle.collisionNormals[v] * (distance) + particle.position;
                                normal = particle.collisionNormals[v];
                            }
                        }
                        particle.position = closestPoint + 0.05f * normal;
                    }
                    else if (fixture.Shape is CircleShape circle)
                    {
                        // Push the particle out of the circle by normalizing the circle's center relative to the particle position,
                        // and pushing the particle out in the direction of the normal
                        Vector2 center = circle.Position + body.Position;
                        Vector2 difference = particle.position - center;
                        normal = difference;
                        normal.Normalize();
                        closestPoint = center + difference * (circle.Radius / difference.Length());
                        particle.position = closestPoint + 0.05f * normal;
                    }

                    // Update velocity
                    particle.velocity = (particle.velocity - 1.2f * Vector2.Dot(particle.velocity, normal) * normal) * 0.85f;

                    // Reset delta
                    _delta[index] = Vector2.Zero;
                }
            }
        }

        // moveParticle
        private void moveParticle(int index)
        {
            Particle particle = _liquid[index];
            int x = getGridX(particle.position.X);
            int y = getGridY(particle.position.Y);

            // Update velocity
            particle.velocity += _delta[index];

            // Update position
            particle.position += _delta[index];
            particle.position += particle.velocity;

            // Update particle cell
            if (particle.ci == x && particle.cj == y)
                return;
            else
            {
                _grid[particle.ci][particle.cj].Remove(index);

                if (_grid[particle.ci][particle.cj].Count == 0)
                {
                    _grid[particle.ci].Remove(particle.cj);

                    if (_grid[particle.ci].Count == 0)
                    {
                        _grid.Remove(particle.ci);
                    }
                }

                if (!_grid.ContainsKey(x))
                    _grid[x] = new Dictionary<int, List<int>>();
                if (!_grid[x].ContainsKey(y))
                    _grid[x][y] = new List<int>(20);

                _grid[x][y].Add(index);
                particle.ci = x;
                particle.cj = y;
            }
        }

        public void createParticle(int numParticlesToSpawn = 4)
        {
            IEnumerable<Particle> inactiveParticles = from particle in _liquid
                                                        where particle.alive == false
                                                        select particle;
            inactiveParticles = inactiveParticles.Take(numParticlesToSpawn);

            foreach (Particle particle in inactiveParticles)
            {
                if (_numActiveParticles < MAX_PARTICLES)
                {
                    Vector2 jitter = new Vector2((float)(_random.NextDouble() * 2 - 1), (float)(_random.NextDouble()) - 0.5f);

                    particle.position = _mouse + jitter;
                    particle.velocity = Vector2.Zero;
                    particle.alive = true;
                    particle.ci = getGridX(particle.position.X);
                    particle.cj = getGridY(particle.position.Y);

                    // Create grid cell if necessary
                    if (!_grid.ContainsKey(particle.ci))
                        _grid[particle.ci] = new Dictionary<int, List<int>>();
                    if (!_grid[particle.ci].ContainsKey(particle.cj))
                        _grid[particle.ci][particle.cj] = new List<int>();
                    _grid[particle.ci][particle.cj].Add(particle.index);

                    _activeParticles.Add(particle.index);
                    _numActiveParticles++;
                }
            }
        }

        public void update()
        {
            MouseState mouseState = Mouse.GetState();

            _halfScreen = new Vector2(
                _spriteBatch.GraphicsDevice.Viewport.Width,
                _spriteBatch.GraphicsDevice.Viewport.Height) / 2f;
            _mouse = (new Vector2(mouseState.X, mouseState.Y) - _halfScreen) / Game1.SCALE;

            if (mouseState.LeftButton == ButtonState.Pressed)
                createParticle();

            // Prepare simulation
            Parallel.For(0, _numActiveParticles, i => { prepareSimulation(_activeParticles[i]); });

            // Prepare collisions
            prepareCollisions();

            // Calculate pressures
            Parallel.For(0, _numActiveParticles, i => { calculatePressure(_activeParticles[i]); });

            // Calculate forces
            Parallel.For(
                0,
                _numActiveParticles,
                () => new Vector2[MAX_PARTICLES],
                (i, state, accumulatedDelta) => calculateForce(_activeParticles[i], accumulatedDelta),
                (accumulatedDelta) =>
                {
                    lock (_calculateForcesLock)
                    {
                        for (int i = _numActiveParticles - 1; i >= 0; i--)
                        {
                            int index = _activeParticles[i];
                            _delta[index] += accumulatedDelta[index] / MULTIPLIER;
                        }
                    }
                }
            );

            // Resolve collisions
            Parallel.For(0, _numActiveParticles, i => resolveCollision(_activeParticles[i]));

            // Update particle cells
            for (int i = 0; i < _numActiveParticles; i++)
                moveParticle(_activeParticles[i]);
        }

        public void draw()
        {
            _spriteBatch.Begin();

            // Draw cells
            if (DRAW_CELLS)
            {
                int gridSize = (int)(CELL_SIZE * (float)Game1.SCALE) - 1;

                foreach (KeyValuePair<int, Dictionary<int, List<int>>> row1 in _grid)
                {
                    foreach (KeyValuePair<int, List<int>> row2 in row1.Value)
                    {
                        _spriteBatch.Draw(_pixel, (new Vector2((float)row1.Key * CELL_SIZE, (float)row2.Key * CELL_SIZE) * Game1.SCALE) + _halfScreen, new Rectangle(0, 0, gridSize, gridSize), Color.DarkBlue);
                    }
                }
            }

            // Draw particles
            for (int i = 0; i < _numActiveParticles; i++)
            {
                Particle particle = _liquid[_activeParticles[i]];

                _spriteBatch.Draw(_pixel, (particle.position * Game1.SCALE) + _halfScreen, new Rectangle(0, 0, 2, 2), Color.LightBlue, 0f, new Vector2(1, 1), 1f, SpriteEffects.None, 0f);
            }

            string text = String.Format("MAX_PARTICLES: {0} \nnumActiveParticles: {1}", MAX_PARTICLES, _numActiveParticles);
            _spriteBatch.DrawString(_font, text, new Vector2(8, 8), Color.White);

            _spriteBatch.End();
        }
    }
}
