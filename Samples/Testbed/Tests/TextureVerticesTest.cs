﻿/* Original source Farseer Physics Engine:
 * Copyright (c) 2014 Ian Qvist, http://farseerphysics.codeplex.com
 * Microsoft Permissive License (Ms-PL) v1.1
 */

using System.Diagnostics;
using nkast.Aether.Physics2D.Common;
using nkast.Aether.Physics2D.Common.Decomposition;
using nkast.Aether.Physics2D.Dynamics;
using nkast.Aether.Physics2D.Samples.Testbed.Framework;
using Microsoft.Xna.Framework;
using Microsoft.Xna.Framework.Graphics;

namespace nkast.Aether.Physics2D.Samples.Testbed.Tests
{
    public class TextureVerticesTest : Test
    {
        private Stopwatch _sw = new Stopwatch();

        public TextureVerticesTest()
        {

        }

        public override void Initialize()
        {
            base.Initialize();

            //Ground
            World.CreateEdge(new Vector2(-40.0f, 0.0f), new Vector2(40.0f, 0.0f));

            //Load texture that will represent the physics body
            Texture2D polygonTexture = GameInstance.Content.Load<Texture2D>("Texture");

            //Create an array to hold the data from the texture
            uint[] data = new uint[polygonTexture.Width * polygonTexture.Height];

            //Transfer the texture data to the array
            polygonTexture.GetData(data);

            //Find the vertices that makes up the outline of the shape in the texture
            Vertices verts = PolygonTools.CreatePolygon(data, polygonTexture.Width);

            //For now we need to scale the vertices (result is in pixels, we use meters)
            Vector2 scale = new Vector2(0.07f, -0.07f);
            verts.Scale(ref scale);

            //We also need to move the polygon so that (0,0) is the center of the polygon.
            Vector2 centroid = -verts.GetCentroid();
            verts.Translate(ref centroid);

            _sw.Start();
            //Create a single body with multiple fixtures
            Body compund = World.CreateCompoundPolygon(Triangulate.ConvexPartition(verts, TriangulationAlgorithm.Earclip), 1);
            compund.BodyType = BodyType.Dynamic;
            compund.Position = new Vector2(0, 20);
            _sw.Stop();
        }

        public override void Update(GameSettings settings, GameTime gameTime)
        {
            DrawString("Triangulation took " + _sw.ElapsedMilliseconds + " ms");
            

            base.Update(settings, gameTime);
        }

    }
}