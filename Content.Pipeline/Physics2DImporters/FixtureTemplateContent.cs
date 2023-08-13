/* Original source Farseer Physics Engine:
 * Copyright (c) 2014 Ian Qvist, http://farseerphysics.codeplex.com
 * Microsoft Permissive License (Ms-PL) v1.1
 */

using System.Collections.Generic;
using Microsoft.Xna.Framework;
using nkast.Aether.Physics2D.Collision.Shapes;
using nkast.Aether.Physics2D.Dynamics;

namespace nkast.Aether.Content.Pipeline
{
    public class FixtureTemplateContent
    {
        public Shape Shape;
        public float Restitution;
        public float Friction;
        public string Name;
    }

}
