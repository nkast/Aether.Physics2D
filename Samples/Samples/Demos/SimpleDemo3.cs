﻿/* Original source Farseer Physics Engine:
 * Copyright (c) 2014 Ian Qvist, http://farseerphysics.codeplex.com
 * Microsoft Permissive License (Ms-PL) v1.1
 */

using System.Text;
using nkast.Aether.Physics2D.Dynamics;
using nkast.Aether.Physics2D.Samples.Demos.Prefabs;
using nkast.Aether.Physics2D.Samples.DrawingSystem;
using nkast.Aether.Physics2D.Samples.ScreenSystem;
using Microsoft.Xna.Framework;
using Microsoft.Xna.Framework.Graphics;

namespace nkast.Aether.Physics2D.Samples.Demos
{
    internal class SimpleDemo3 : PhysicsGameScreen, IDemoScreen
    {
        private Agent _agent;
        private Border _border;
        private Sprite _obstacle;
        private Body[] _obstacles = new Body[5];

        #region IDemoScreen Members

        public string GetTitle()
        {
            return "Multiple fixtures and static bodies";
        }

        public string GetDetails()
        {
            StringBuilder sb = new StringBuilder();
            sb.AppendLine("This demo shows a single body with multiple shapes attached.");
            sb.AppendLine(string.Empty);
            sb.AppendLine("This demo also shows the use of static bodies.");
            sb.AppendLine(string.Empty);
            sb.AppendLine("GamePad:");
            sb.AppendLine("  - Rotate agent: left and right triggers");
            sb.AppendLine("  - Move agent: right thumbstick");
            sb.AppendLine("  - Move cursor: left thumbstick");
            sb.AppendLine("  - Grab object (beneath cursor): A button");
            sb.AppendLine("  - Drag grabbed object: left thumbstick");
            sb.AppendLine("  - Exit to menu: Back button");
            sb.AppendLine(string.Empty);
            sb.AppendLine("Keyboard:");
            sb.AppendLine("  - Rotate agent: left and right arrows");
            sb.AppendLine("  - Move agent: A,S,D,W");
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

            _agent = new Agent(World, ScreenManager, new Vector2(-6.9f, 11f));

            LoadObstacles();

            SetUserAgent(_agent.Body, 1000f, 400f);
        }

        private void LoadObstacles()
        {
            for (int i = 0; i < 5; ++i)
            {
                _obstacles[i] = World.CreateBody(Vector2.Zero, 0, BodyType.Static);
                var rfixture = _obstacles[i].CreateRectangle(5f, 1f, 1f, Vector2.Zero);
                rfixture.Restitution = 0.2f;
                rfixture.Friction = 0.2f;
            }

            _obstacles[0].Position = new Vector2(-5f, -9f);
            _obstacles[1].Position = new Vector2(15f, -6f);
            _obstacles[2].Position = new Vector2(10f, 3f);
            _obstacles[3].Position = new Vector2(-10f, 9f);
            _obstacles[4].Position = new Vector2(-17f, 0f);

            // create sprite based on body
            _obstacle = new Sprite(ScreenManager.Assets.TextureFromShape(_obstacles[0].FixtureList[0].Shape,
                                                                         MaterialType.Dots,
                                                                         Color.SandyBrown, 0.8f));
        }

        public override void Draw(GameTime gameTime)
        {
            ScreenManager.BatchEffect.View = Camera.View;
            ScreenManager.BatchEffect.Projection = Camera.Projection;
            ScreenManager.SpriteBatch.Begin(SpriteSortMode.Deferred, null, null, null, RasterizerState.CullNone, ScreenManager.BatchEffect);
            for (int i = 0; i < 5; ++i)
            {
                ScreenManager.SpriteBatch.Draw(_obstacle.Texture, _obstacles[i].Position,
                                               null,
                                               Color.White, _obstacles[i].Rotation, _obstacle.Origin, new Vector2(5f, 1f) * _obstacle.TexelSize,
                                               SpriteEffects.FlipVertically, 0f);
            }
            _agent.Draw();
            ScreenManager.SpriteBatch.End();
            _border.Draw();
            base.Draw(gameTime);
        }
    }
}