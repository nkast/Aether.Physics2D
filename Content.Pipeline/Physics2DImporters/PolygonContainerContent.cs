/* Original source Farseer Physics Engine:
 * Copyright (c) 2014 Ian Qvist, http://farseerphysics.codeplex.com
 * Microsoft Permissive License (Ms-PL) v1.1
 */

using System.Collections.Generic;
using Microsoft.Xna.Framework;
using nkast.Aether.Physics2D.Common;
using nkast.Aether.Physics2D.Common.Decomposition;

namespace nkast.Aether.Content.Pipeline
{
    public class PolygonContainerContent : Dictionary<string, PolygonContent>
    {
        public bool IsDecomposed { get; private set; }

        public void Decompose()
        {
            Dictionary<string, PolygonContent> containerCopy = new Dictionary<string, PolygonContent>(this);
            foreach (string key in containerCopy.Keys)
            {
                if (containerCopy[key].Closed)
                {
                    List<Vertices> partition = Triangulate.ConvexPartition(containerCopy[key].Vertices, TriangulationAlgorithm.Bayazit);
                    if (partition.Count > 1)
                    {
                        this.Remove(key);
                        for (int i = 0; i < partition.Count; i++)
                        {
                            this[key + "_" + i] = new PolygonContent(partition[i], true);
                        }
                    }
                    IsDecomposed = true;
                }
            }
        }

    }
}