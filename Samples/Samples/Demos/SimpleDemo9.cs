﻿/* Original source Farseer Physics Engine:
 * Copyright (c) 2014 Ian Qvist, http://farseerphysics.codeplex.com
 * Microsoft Permissive License (Ms-PL) v1.1
 */

using System.Collections.Generic;
using System.Text;
using nkast.Aether.Physics2D.Dynamics;
using nkast.Aether.Physics2D.Samples.Demos.Prefabs;
using nkast.Aether.Physics2D.Samples.DrawingSystem;
using nkast.Aether.Physics2D.Samples.ScreenSystem;
using Microsoft.Xna.Framework;
using Microsoft.Xna.Framework.Graphics;

namespace nkast.Aether.Physics2D.Samples.Demos
{
    internal class SimpleDemo9 : PhysicsGameScreen, IDemoScreen
    {
        private Border _border;
        private List<Body> _ramps;
        private Body[] _rectangle = new Body[5];
        private Sprite _rectangleSprite;

        #region IDemoScreen Members

        public string GetTitle()
        {
            return "Friction";
        }

        public string GetDetails()
        {
            StringBuilder sb = new StringBuilder();
            sb.AppendLine("This demo shows several bodys with varying friction.");
            sb.AppendLine(string.Empty);
            sb.AppendLine("GamePad:");
            sb.AppendLine("  - Move cursor: left thumbstick");
            sb.AppendLine("  - Grab object (beneath cursor): A button");
            sb.AppendLine("  - Drag grabbed object: left thumbstick");
            sb.AppendLine("  - Exit to menu: Back button");
            sb.AppendLine(string.Empty);
            sb.AppendLine("Keyboard:");
            sb.AppendLine("  - Exit to menu: Escape");
            sb.AppendLine(string.Empty);
            sb.AppendLine("Mouse / Touchscreen");
            sb.AppendLine("  - Grab object (beneath cursor): Left click");
            sb.AppendLine("  - Drag grabbed object: move mouse / finger");
            return sb.ToString();
        }

        #endregion

        public override void LoadContent()
        {
            base.LoadContent();

            World.Gravity = new Vector2(0f, -20f);

            _border = new Border(World, ScreenManager, Camera);

            _ramps = new List<Body>();
            _ramps.Add(World.CreateEdge(new Vector2(-20f, 11.2f), new Vector2(10f, 3.8f)));
            _ramps.Add(World.CreateEdge(new Vector2(12f, 5.6f), new Vector2(12f, 3.2f)));
            _ramps.Add(World.CreateEdge(new Vector2(-10f, -4.4f), new Vector2(20f, 1.4f)));
            _ramps.Add(World.CreateEdge(new Vector2(-12f, -2.6f), new Vector2(-12f, -5f)));
            _ramps.Add(World.CreateEdge(new Vector2(-20f, -6.8f), new Vector2(10f, -11.5f)));

            float[] friction = { 0.75f, 0.45f, 0.28f, 0.17f, 0.0f };
            for (int i = 0; i < 5; ++i)
            {
                _rectangle[i] = World.CreateBody(new Vector2(-18f + 5.2f * i, 13.0f - 1.282f * i), 0, BodyType.Dynamic);
                var rfixture = _rectangle[i].CreateRectangle(1.5f, 1.5f, 1f, Vector2.Zero);
                rfixture.Friction= friction[i];
            }

            // Create sprite based on body
            _rectangleSprite = new Sprite(ScreenManager.Assets.TextureFromShape(_rectangle[0].FixtureList[0].Shape, MaterialType.Squares, Color.ForestGreen, 0.8f));
        }

        public override void Draw(GameTime gameTime)
        {
            ScreenManager.BatchEffect.View = Camera.View;
            ScreenManager.BatchEffect.Projection = Camera.Projection;
            ScreenManager.SpriteBatch.Begin(SpriteSortMode.Deferred, null, null, null, RasterizerState.CullNone, ScreenManager.BatchEffect);
            for (int i = 0; i < 5; ++i)
            {
                ScreenManager.SpriteBatch.Draw(_rectangleSprite.Texture, _rectangle[i].Position, null, Color.White, _rectangle[i].Rotation, _rectangleSprite.Origin, new Vector2(1.5f, 1.5f) * _rectangleSprite.TexelSize, SpriteEffects.FlipVertically, 0f);
            }
            ScreenManager.SpriteBatch.End();
            
            ScreenManager.LineBatch.Begin(Camera.Projection, Camera.View);
            for (int i = 0; i < _ramps.Count; ++i)
            {
                foreach (Fixture fixture in _ramps[i].FixtureList)
                {
                    ScreenManager.LineBatch.DrawLineShape(fixture.Shape, Color.Black);
                }
            }
            ScreenManager.LineBatch.End();

            _border.Draw();
            base.Draw(gameTime);
        }
    }
}