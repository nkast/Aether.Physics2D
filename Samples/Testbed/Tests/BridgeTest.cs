/* Original source Farseer Physics Engine:
 * Copyright (c) 2014 Ian Qvist, http://farseerphysics.codeplex.com
 * Microsoft Permissive License (Ms-PL) v1.1
 */

/*
* Farseer Physics Engine:
* Copyright (c) 2012 Ian Qvist
* 
* Original source Box2D:
* Copyright (c) 2006-2011 Erin Catto http://www.box2d.org 
* 
* This software is provided 'as-is', without any express or implied 
* warranty.  In no event will the authors be held liable for any damages 
* arising from the use of this software. 
* Permission is granted to anyone to use this software for any purpose, 
* including commercial applications, and to alter it and redistribute it 
* freely, subject to the following restrictions: 
* 1. The origin of this software must not be misrepresented; you must not 
* claim that you wrote the original software. If you use this software 
* in a product, an acknowledgment in the product documentation would be 
* appreciated but is not required. 
* 2. Altered source versions must be plainly marked as such, and must not be 
* misrepresented as being the original software. 
* 3. This notice may not be removed or altered from any source distribution. 
*/

using nkast.Aether.Physics2D.Collision.Shapes;
using nkast.Aether.Physics2D.Common;
using nkast.Aether.Physics2D.Dynamics;
using nkast.Aether.Physics2D.Dynamics.Joints;
using nkast.Aether.Physics2D.Samples.Testbed.Framework;
using Microsoft.Xna.Framework;

namespace nkast.Aether.Physics2D.Samples.Testbed.Tests
{
    public class BridgeTest : Test
    {
        private const int Count = 30;

        public BridgeTest()
        {
            Body ground;
            {
                ground = World.CreateBody();

                EdgeShape shape = new EdgeShape(new Vector2(-40.0f, 0.0f), new Vector2(40.0f, 0.0f));
                ground.CreateFixture(shape);
            }
            {
                Vertices box = PolygonTools.CreateRectangle(0.5f, 0.125f);
                PolygonShape shape = new PolygonShape(box, 20);

                Body prevBody = ground;
                for (int i = 0; i < Count; ++i)
                {
                    Body body = World.CreateBody();
                    body.BodyType = BodyType.Dynamic;
                    body.Position = new Vector2(-14.5f + 1.0f * i, 5.0f);

                    Fixture fixture = body.CreateFixture(shape);
                    fixture.Friction = 0.2f;

                    Vector2 anchor = new Vector2(-15f + 1.0f * i, 5.0f);
                    RevoluteJoint jd = new RevoluteJoint(prevBody, body, anchor, true);
                    World.Add(jd);

                    prevBody = body;
                }

                Vector2 anchor2 = new Vector2(-15.0f + 1.0f * Count, 5.0f);
                RevoluteJoint jd2 = new RevoluteJoint(ground, prevBody, anchor2, true);
                World.Add(jd2);
            }

            Vertices vertices = new Vertices(3);
            vertices.Add(new Vector2(-0.5f, 0.0f));
            vertices.Add(new Vector2(0.5f, 0.0f));
            vertices.Add(new Vector2(0.0f, 1.5f));

            for (int i = 0; i < 2; ++i)
            {
                PolygonShape shape = new PolygonShape(vertices, 1);

                Body body = World.CreateBody();
                body.BodyType = BodyType.Dynamic;
                body.Position = new Vector2(-8.0f + 8.0f * i, 12.0f);

                body.CreateFixture(shape);
            }

            for (int i = 0; i < 3; ++i)
            {
                CircleShape shape = new CircleShape(0.5f, 1);

                Body body = World.CreateBody();
                body.BodyType = BodyType.Dynamic;
                body.Position = new Vector2(-6.0f + 6.0f * i, 10.0f);

                body.CreateFixture(shape);
            }
        }

    }
}