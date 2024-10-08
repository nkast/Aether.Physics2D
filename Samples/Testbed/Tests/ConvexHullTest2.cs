/* Original source Farseer Physics Engine:
 * Copyright (c) 2014 Ian Qvist, http://farseerphysics.codeplex.com
 * Microsoft Permissive License (Ms-PL) v1.1
 */

using nkast.Aether.Physics2D.Common;
using nkast.Aether.Physics2D.Common.ConvexHull;
using nkast.Aether.Physics2D.Samples.Testbed.Framework;
using Microsoft.Xna.Framework;

namespace nkast.Aether.Physics2D.Samples.Testbed.Tests
{
    public class ConvexHullTest2 : Test
    {
        private const int PointCount = 32;

        private Vertices _chainHull;
        private Vertices _giftWrap;
        private Vertices _melkman;
        private Vertices _pointCloud1;
        private Vertices _pointCloud2;
        private Vertices _pointCloud3;

        public ConvexHullTest2()
        {
            _pointCloud1 = new Vertices(PointCount);

            for (int i = 0; i < PointCount; i++)
            {
                float x = Rand.RandomFloat(-10, 10);
                float y = Rand.RandomFloat(-10, 10);

                _pointCloud1.Add(new Vector2(x, y));
            }

            _pointCloud2 = new Vertices(_pointCloud1);
            _pointCloud3 = new Vertices(_pointCloud1);

            //Melkman DOES NOT work on point clouds. It only works on simple polygons.
            _pointCloud1.Translate(new Vector2(-20, 30));
            _melkman = Melkman.GetConvexHull(_pointCloud1);

            //Giftwrap works on point clouds
            _pointCloud2.Translate(new Vector2(20, 30));
            _giftWrap = GiftWrap.GetConvexHull(_pointCloud2);

            //Chain hull also works on point clouds
            _pointCloud3.Translate(new Vector2(20, 10));
            _chainHull = ChainHull.GetConvexHull(_pointCloud3);
        }

        public override void Update(GameSettings settings, GameTime gameTime)
        {
            DrawString("Melkman: Red");
            DrawString("Giftwrap: Green");
            DrawString("ChainHull: Blue");
            
            DebugView.BeginCustomDraw(ref GameInstance.Projection, ref GameInstance.View);
            for (int i = 0; i < PointCount; i++)
            {
                DebugView.DrawPoint(_pointCloud1[i], 0.1f, Color.Yellow);
                DebugView.DrawPoint(_pointCloud2[i], 0.1f, Color.Yellow);
                DebugView.DrawPoint(_pointCloud3[i], 0.1f, Color.Yellow);
            }

            DebugView.DrawPolygon(_melkman.ToArray(), _melkman.Count, Color.Red);
            DebugView.DrawPolygon(_giftWrap.ToArray(), _giftWrap.Count, Color.Green);
            DebugView.DrawPolygon(_chainHull.ToArray(), _chainHull.Count, Color.Blue);
            DebugView.EndCustomDraw();

            base.Update(settings, gameTime);
        }

    }
}