﻿/* Original source Farseer Physics Engine:
 * Copyright (c) 2014 Ian Qvist, http://farseerphysics.codeplex.com
 * Microsoft Permissive License (Ms-PL) v1.1
 */

using System.Text;
using nkast.Aether.Physics2D.Dynamics;
using nkast.Aether.Physics2D.Samples.Demos.Prefabs;
using nkast.Aether.Physics2D.Samples.ScreenSystem;
using Microsoft.Xna.Framework;
using Microsoft.Xna.Framework.Graphics;

namespace nkast.Aether.Physics2D.Samples.Demos
{
    internal class D05_CollisionCategories : PhysicsDemoScreen
    {
        private Agent _agent;
        private Border _border;
        private Objects _circles;
        private Objects _gears;
        private Objects _rectangles;
        private Objects _stars;

        #region Demo description
        public override string GetTitle()
        {
            return "Collision categories";
        }

        public override string GetDetails()
        {
            StringBuilder sb = new StringBuilder();
            sb.AppendLine("This demo shows how to setup complex collision scenarios.");
            sb.AppendLine("In this demo:");
            sb.AppendLine("  - Circles and rectangles are set to only collide with themselves.");
            sb.AppendLine("  - Stars are set to collide with gears.");
            sb.AppendLine("  - Gears are set to collide with stars.");
            sb.AppendLine("  - The agent is set to collide with everything but stars.");
            sb.AppendLine();
            sb.AppendLine("GamePad:");
            sb.AppendLine("  - Rotate object: Left and right trigger");
            sb.AppendLine("  - Move object: Right thumbstick");
            sb.AppendLine("  - Move cursor: Left thumbstick");
            sb.AppendLine("  - Grab object (beneath cursor): A button");
            sb.AppendLine("  - Drag grabbed object: Left thumbstick");
            sb.Append("  - Exit to demo selection: Back button");
#if WINDOWS
            sb.AppendLine();
            sb.AppendLine();
            sb.AppendLine("Keyboard:");
            sb.AppendLine("  - Rotate object: Q, E");
            sb.AppendLine("  - Move object: W, S, A, D");
            sb.AppendLine("  - Exit to demo selection: Escape");
            sb.AppendLine();
            sb.AppendLine("Mouse");
            sb.AppendLine("  - Grab object (beneath cursor): Left click");
            sb.Append("  - Drag grabbed object: Move mouse");
#endif
            return sb.ToString();
        }
        #endregion

        public override void LoadContent()
        {
            base.LoadContent();

            World.Gravity = Vector2.Zero;

            _border = new Border(World, LineBatch, Framework.GraphicsDevice);

            // Cat1=Circles, Cat2=Rectangles, Cat3=Gears, Cat4=Stars
            _agent = new Agent(World, Vector2.Zero);

            // Collide with all but stars
            _agent.CollisionCategories = Category.All & ~Category.Cat4;
            _agent.CollidesWith = Category.All & ~Category.Cat4;

            Vector2 startPosition = new Vector2(-20f, 11f);
            Vector2 endPosition = new Vector2(20, 11f);
            _circles = new Objects(World, startPosition, endPosition, 15, 0.6f, ObjectType.Circle);

            // Collide with itself only
            _circles.SetCollisionCategories(Category.Cat1);
            _circles.SetCollidesWith(Category.Cat1);

            startPosition = new Vector2(-20, -11f);
            endPosition = new Vector2(20, -11f);
            _rectangles = new Objects(World, startPosition, endPosition, 15, 1.2f, ObjectType.Rectangle);

            // Collides with itself only
            _rectangles.SetCollisionCategories(Category.Cat2);
            _rectangles.SetCollidesWith(Category.Cat2);

            startPosition = new Vector2(-20, -7);
            endPosition = new Vector2(-20, 7);
            _gears = new Objects(World, startPosition, endPosition, 5, 0.6f, ObjectType.Gear);

            // Collides with stars
            _gears.SetCollisionCategories(Category.Cat3);
            _gears.SetCollidesWith(Category.Cat3 | Category.Cat4);

            startPosition = new Vector2(20, -7);
            endPosition = new Vector2(20, 7);
            _stars = new Objects(World, startPosition, endPosition, 5, 0.6f, ObjectType.Star);

            // Collides with gears
            _stars.SetCollisionCategories(Category.Cat4);
            _stars.SetCollidesWith(Category.Cat3 | Category.Cat4);

            SetUserAgent(_agent.Body, 1000f, 400f);
        }

        public override void Draw(GameTime gameTime)
        {
            BatchEffect.View = Camera.View;
            BatchEffect.Projection = Camera.Projection;
            SpriteBatch.Begin(SpriteSortMode.Deferred, null, null, null, RasterizerState.CullNone, BatchEffect);
            _agent.Draw(SpriteBatch);
            _circles.Draw(SpriteBatch);
            _rectangles.Draw(SpriteBatch);
            _stars.Draw(SpriteBatch);
            _gears.Draw(SpriteBatch);
            SpriteBatch.End();

            _border.Draw(Camera.Projection, Camera.View);

            base.Draw(gameTime);
        }
    }
}