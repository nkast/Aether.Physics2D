/* Original source Farseer Physics Engine:
 * Copyright (c) 2014 Ian Qvist, http://farseerphysics.codeplex.com
 * Microsoft Permissive License (Ms-PL) v1.1
 */

using System.Collections.Generic;
using nkast.Aether.Physics2D.Common;
using nkast.Aether.Physics2D.Common.Decomposition;

namespace nkast.Aether.Physics2D.Content
{
    public class PolygonContainer : Dictionary<string, Polygon>
    {
        public bool IsDecomposed
        {
            get { return _decomposed; }
        }

        private bool _decomposed;

        public void Decompose()
        {
            Dictionary<string, Polygon> containerCopy = new Dictionary<string, Polygon>(this);
            foreach (string key in containerCopy.Keys)
            {
                if (containerCopy[key].Closed)
                {
                    List<Vertices> partition = Triangulate.ConvexPartition(containerCopy[key].Vertices, TriangulationAlgorithm.Bayazit);
                    if (partition.Count > 1)
                    {
                        Remove(key);
                        for (int i = 0; i < partition.Count; i++)
                        {
                            this[key + "_" + i.ToString()] = new Polygon(partition[i], true);
                        }
                    }
                    _decomposed = true;
                }
            }
        }
    }
}