/* Original source Farseer Physics Engine:
 * Copyright (c) 2014 Ian Qvist, http://farseerphysics.codeplex.com
 * Microsoft Permissive License (Ms-PL) v1.1
 */

using nkast.Aether.Physics2D.Common;
using nkast.Aether.Physics2D.Dynamics;
using nkast.Aether.Physics2D.Samples.DrawingSystem;
using nkast.Aether.Physics2D.Samples.ScreenSystem;
using Microsoft.Xna.Framework;
using Microsoft.Xna.Framework.Graphics;

namespace nkast.Aether.Physics2D.Samples.Demos.Prefabs
{
    public class Border
    {
        private Body _anchor;

        private BasicEffect _basicEffect;
        private VertexPositionColorTexture[] _borderVerts;
        private Camera2D _camera;
        private ScreenManager _screenManager;

        public Body Anchor { get { return _anchor; } }


        public Border(World world, ScreenManager screenManager, Camera2D camera)
        {
            _screenManager = screenManager;
            _camera = camera;

            var vp = screenManager.GraphicsDevice.Viewport;
            float height = 30f; // 30 meters height
            float width = height * vp.AspectRatio;
            width -= 1.5f; // 1.5 meters border
            height -= 1.5f;
            float halfWidth = width / 2f;
            float halfHeight = height / 2f;

            Vertices borders = new Vertices(4);
            borders.Add(new Vector2(-halfWidth, halfHeight));
            borders.Add(new Vector2(halfWidth, halfHeight));
            borders.Add(new Vector2(halfWidth, -halfHeight));
            borders.Add(new Vector2(-halfWidth, -halfHeight));

            _anchor = world.CreateLoopShape(borders);
            foreach (Fixture fixture in _anchor.FixtureList)
            {
                fixture.CollisionCategories = Category.All;
                fixture.CollidesWith = Category.All;
            }

            _basicEffect = new BasicEffect(screenManager.GraphicsDevice);
            _basicEffect.VertexColorEnabled = true;
            _basicEffect.TextureEnabled = true;
            _basicEffect.Texture = screenManager.Content.Load<Texture2D>("Materials/pavement");

            VertexPositionColorTexture[] vertice = new VertexPositionColorTexture[8];
            vertice[0] = new VertexPositionColorTexture(new Vector3(-halfWidth, -halfHeight, 0f), Color.LightGray, new Vector2(-halfWidth, -halfHeight) / 5.25f);
            vertice[1] = new VertexPositionColorTexture(new Vector3(halfWidth, -halfHeight, 0f), Color.LightGray, new Vector2(halfWidth, -halfHeight) / 5.25f);
            vertice[2] = new VertexPositionColorTexture(new Vector3(halfWidth, halfHeight, 0f), Color.LightGray, new Vector2(halfWidth, halfHeight) / 5.25f);
            vertice[3] = new VertexPositionColorTexture(new Vector3(-halfWidth, halfHeight, 0f), Color.LightGray, new Vector2(-halfWidth, halfHeight) / 5.25f);
            vertice[4] = new VertexPositionColorTexture(new Vector3(-halfWidth - 2f, -halfHeight - 2f, 0f), Color.LightGray, new Vector2(-halfWidth - 2f, -halfHeight - 2f) / 5.25f);
            vertice[5] = new VertexPositionColorTexture(new Vector3(halfWidth + 2f, -halfHeight - 2f, 0f), Color.LightGray, new Vector2(halfWidth + 2f, -halfHeight - 2f) / 5.25f);
            vertice[6] = new VertexPositionColorTexture(new Vector3(halfWidth + 2f, halfHeight + 2f, 0f), Color.LightGray, new Vector2(halfWidth + 2f, halfHeight + 2f) / 5.25f);
            vertice[7] = new VertexPositionColorTexture(new Vector3(-halfWidth - 2f, halfHeight + 2f, 0f), Color.LightGray, new Vector2(-halfWidth - 2f, halfHeight + 2f) / 5.25f);

            _borderVerts = new VertexPositionColorTexture[24];
            _borderVerts[0] = vertice[0];
            _borderVerts[1] = vertice[5];
            _borderVerts[2] = vertice[4];
            _borderVerts[3] = vertice[0];
            _borderVerts[4] = vertice[1];
            _borderVerts[5] = vertice[5];
            _borderVerts[6] = vertice[1];
            _borderVerts[7] = vertice[6];
            _borderVerts[8] = vertice[5];
            _borderVerts[9] = vertice[1];
            _borderVerts[10] = vertice[2];
            _borderVerts[11] = vertice[6];
            _borderVerts[12] = vertice[2];
            _borderVerts[13] = vertice[7];
            _borderVerts[14] = vertice[6];
            _borderVerts[15] = vertice[2];
            _borderVerts[16] = vertice[3];
            _borderVerts[17] = vertice[7];
            _borderVerts[18] = vertice[3];
            _borderVerts[19] = vertice[4];
            _borderVerts[20] = vertice[7];
            _borderVerts[21] = vertice[3];
            _borderVerts[22] = vertice[0];
            _borderVerts[23] = vertice[4];
        }

        public void Draw()
        {
            GraphicsDevice device = _screenManager.GraphicsDevice;
            LineBatch batch = _screenManager.LineBatch;

            device.SamplerStates[0] = SamplerState.AnisotropicWrap;
            device.RasterizerState = RasterizerState.CullNone;
            _basicEffect.Projection = _camera.Projection;
            _basicEffect.View = _camera.View;
            _basicEffect.CurrentTechnique.Passes[0].Apply();

            device.DrawUserPrimitives(PrimitiveType.TriangleList, _borderVerts, 0, 8);

            batch.Begin(_camera.Projection, _camera.View);
            foreach (Fixture fixture in _anchor.FixtureList)
                batch.DrawLineShape(fixture.Shape);
            batch.End();
        }
    }
}