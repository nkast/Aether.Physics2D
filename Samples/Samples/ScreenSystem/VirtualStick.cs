﻿/* Original source Farseer Physics Engine:
 * Copyright (c) 2014 Ian Qvist, http://farseerphysics.codeplex.com
 * Microsoft Permissive License (Ms-PL) v1.1
 */

using nkast.Aether.Physics2D.Samples.DrawingSystem;
using Microsoft.Xna.Framework;
using Microsoft.Xna.Framework.Graphics;
using Microsoft.Xna.Framework.Input.Touch;

namespace nkast.Aether.Physics2D.Samples.ScreenSystem
{
    public sealed class VirtualStick
    {
        private Sprite _socketSprite;
        private Sprite _stickSprite;
        private int _picked;
        private Vector2 _position;
        private Vector2 _center;

        public Vector2 StickPosition;

        public VirtualStick(Texture2D socket, Texture2D stick, Vector2 position)
        {
            _socketSprite = new Sprite(socket);
            _stickSprite = new Sprite(stick);
            _picked = -1;
            _center = position;
            _position = position;
            StickPosition = Vector2.Zero;
        }

        public void Update(TouchLocation touchLocation)
        {
            if (touchLocation.State == TouchLocationState.Pressed && _picked < 0)
            {
                Vector2 delta = touchLocation.Position - _position;
                if (delta.LengthSquared() <= 2025f)
                    _picked = touchLocation.Id;
            }

            if ((touchLocation.State == TouchLocationState.Pressed || touchLocation.State == TouchLocationState.Moved) && touchLocation.Id == _picked)
            {
                Vector2 delta = touchLocation.Position - _center;
                if (delta != Vector2.Zero)
                {
                    float length = delta.Length();

                    if (length > 25f)
                        delta *= (25f / length);

                    StickPosition = delta / 25f;
                    StickPosition.Y *= -1f;
                    _position = _center + delta;
                }
            }
            if (touchLocation.State == TouchLocationState.Released && touchLocation.Id == _picked)
            {
                _picked = -1;
                _position = _center;
                StickPosition = Vector2.Zero;
            }
        }

        public void Draw(SpriteBatch batch)
        {
            batch.Draw(_socketSprite.Texture, _center, null, Color.White, 0f, _socketSprite.Origin, 1f, SpriteEffects.None, 0f);
            batch.Draw(_stickSprite.Texture, _position, null, Color.White, 0f, _stickSprite.Origin, 1f, SpriteEffects.None, 0f);
        }
    }
}
