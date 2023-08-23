/* Original source Farseer Physics Engine:
 * Copyright (c) 2014 Ian Qvist, http://farseerphysics.codeplex.com
 * Microsoft Permissive License (Ms-PL) v1.1
 */

using System.Collections.Generic;
using Microsoft.Xna.Framework;
using nkast.Aether.Physics2D.Common;

namespace nkast.Aether.Content.Pipeline
{
    public struct PolygonContent
    {
        public Vertices Vertices;
        public bool Closed;

        public PolygonContent(Vertices v, bool closed)
        {
            Vertices = v;
            Closed = closed;
        }
    }
}