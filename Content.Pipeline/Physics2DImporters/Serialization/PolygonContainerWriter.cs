/* Original source Farseer Physics Engine:
 * Copyright (c) 2014 Ian Qvist, http://farseerphysics.codeplex.com
 * Microsoft Permissive License (Ms-PL) v1.1
 */

using System.Collections.Generic;
using Microsoft.Xna.Framework;
using Microsoft.Xna.Framework.Content.Pipeline;
using Microsoft.Xna.Framework.Content.Pipeline.Serialization.Compiler;

namespace nkast.Aether.Content.Pipeline
{
    [ContentTypeWriter]
    public class PolygonContainerWriter : ContentTypeWriter<PolygonContainerContent>
    {
        protected override void Write(ContentWriter output, PolygonContainerContent container)
        {
            output.Write(container.Count);
            foreach (KeyValuePair<string, PolygonContent> p in container)
            {
                output.Write(p.Key);
                output.Write(p.Value.Closed);
                output.Write(p.Value.Vertices.Count);
                foreach (Vector2 vec in p.Value.Vertices)
                {
                    output.Write(vec);
                }
            }
        }

        public override string GetRuntimeReader(TargetPlatform targetPlatform)
        {
            return "nkast.Aether.Physics2D.Content.PolygonContainerReader, Aether.Physics2D";
        }
    }
}
