/* Original source Farseer Physics Engine:
 * Copyright (c) 2014 Ian Qvist, http://farseerphysics.codeplex.com
 * Microsoft Permissive License (Ms-PL) v1.1
 */

using System;
using System.Collections.Generic;
using Microsoft.Xna.Framework;
using Microsoft.Xna.Framework.Content.Pipeline;
using Microsoft.Xna.Framework.Content.Pipeline.Serialization.Compiler;
using nkast.Aether.Physics2D.Collision.Shapes;

namespace nkast.Aether.Content.Pipeline
{
    [ContentTypeWriter]
    public class BodyContainerWriter : ContentTypeWriter<BodyContainerContent>
    {
        protected override void Write(ContentWriter output, BodyContainerContent container)
        {
            output.Write(container.Count);
            foreach (KeyValuePair<string, BodyTemplateContent> p in container)
            {
                output.Write(p.Key);
                output.Write(p.Value.Mass);
                output.Write((int)p.Value.BodyType);
                output.Write(p.Value.Fixtures.Count);
                foreach (FixtureTemplateContent f in p.Value.Fixtures)
                {
                    output.Write(f.Name);
                    output.Write(f.Restitution);
                    output.Write(f.Friction);
                    output.Write((int)f.Shape.ShapeType);
                    switch (f.Shape.ShapeType)
                    {
                        case ShapeType.Circle:
                            {
                                CircleShape circle = (CircleShape)f.Shape;
                                output.Write(circle.Density);
                                output.Write(circle.Radius);
                                output.Write(circle.Position);
                            } break;
                        case ShapeType.Polygon:
                            {
                                PolygonShape poly = (PolygonShape)f.Shape;
                                output.Write(poly.Density);
                                output.Write(poly.Vertices.Count);
                                foreach (Vector2 v in poly.Vertices)
                                {
                                    output.Write(v);
                                }
                                output.Write(poly.MassData.Centroid);
                            } break;
                        case ShapeType.Edge:
                            {
                                EdgeShape edge = (EdgeShape)f.Shape;
                                output.Write(edge.Vertex1);
                                output.Write(edge.Vertex2);
                                output.Write(edge.HasVertex0);
                                if (edge.HasVertex0)
                                {
                                    output.Write(edge.Vertex0);
                                }
                                output.Write(edge.HasVertex3);
                                if (edge.HasVertex3)
                                {
                                    output.Write(edge.Vertex3);
                                }
                            } break;
                        case ShapeType.Chain:
                            {
                                ChainShape chain = (ChainShape)f.Shape;
                                output.Write(chain.Vertices.Count);
                                foreach (Vector2 v in chain.Vertices)
                                {
                                    output.Write(v);
                                }
                            } break;
                        default:
                            throw new Exception("Shape type not supported!");
                    }
                }
            }
        }

        public override string GetRuntimeReader(TargetPlatform targetPlatform)
        {
            return "nkast.Aether.Physics2D.Content.BodyContainerReader, Aether.Physics2D.Content";
        }
    }
}
