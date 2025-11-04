using System;
using System.Collections.Generic;
using Microsoft.Xna.Framework;
using nkast.Aether.Physics2D.Dynamics;
using nkast.Aether.Physics2D;

namespace FluidPort
{
    public class Particle
    {
        public const int MAX_FIXTURES_TO_TEST = 20;
        public Vector2 position;
        public Vector2 velocity;
        public bool alive;
        public float[] distances;
        public int[] neighbors;
        public int neighborCount;
        public int ci;
        public int cj;
        public int index;
        public float p;
        public float pnear;
        public Fixture[] fixturesToTest;
        public int numFixturesToTest;
        public Vector2 oldPosition;
        public Vector2[] collisionVertices;
        public Vector2[] collisionNormals;

        public Particle(Vector2 position, Vector2 velocity, bool alive)
        {
            this.position = position;
            this.velocity = velocity;
            this.alive = alive;

            distances = new float[FluidSimulation.MAX_NEIGHBORS];
            neighbors = new int[FluidSimulation.MAX_NEIGHBORS];
            fixturesToTest = new Fixture[MAX_FIXTURES_TO_TEST];
            collisionVertices = new Vector2[Settings.MaxPolygonVertices];
            collisionNormals = new Vector2[Settings.MaxPolygonVertices];
        }
    }
}
