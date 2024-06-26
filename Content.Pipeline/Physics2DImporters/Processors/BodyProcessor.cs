﻿/* Original source Farseer Physics Engine:
 * Copyright (c) 2014 Ian Qvist, http://farseerphysics.codeplex.com
 * Microsoft Permissive License (Ms-PL) v1.1
 */

using System;
using System.Collections.Generic;
using System.ComponentModel;
using Microsoft.Xna.Framework;
using Microsoft.Xna.Framework.Content.Pipeline;
using nkast.Aether.Physics2D.Collision.Shapes;
using nkast.Aether.Physics2D.Common;
using nkast.Aether.Physics2D.Common.Decomposition;

namespace nkast.Aether.Content.Pipeline
{
    [ContentProcessor(DisplayName = "Physics2D Body Processor")]
    class BodyProcessor : ContentProcessor<List<RawBodyTemplateContent>, BodyContainerContent>
    {
        private float _scaleFactor = 1f;
        private int _bezierIterations = 3;

        [DisplayName("Pixel to meter ratio")]
        [Description("The length of one physics simulation unit in pixels.")]
        [DefaultValue(1)]
        public int ScaleFactor
        {
            get { return (int)(1f / _scaleFactor); }
            set { _scaleFactor = 1f / value; }
        }

        [DisplayName("Cubic bézier iterations")]
        [Description("Amount of subdivisions for decomposing cubic bézier curves into line segments.")]
        [DefaultValue(3)]
        public int BezierIterations
        {
            get { return _bezierIterations; }
            set { _bezierIterations = value; }
        }

        public override BodyContainerContent Process(List<RawBodyTemplateContent> input, ContentProcessorContext context)
        {
            if (ScaleFactor < 1)
                throw new Exception("Pixel to meter ratio must be greater than zero.");

            if (BezierIterations < 1)
                throw new Exception("Cubic bézier iterations must be greater than zero.");

            Matrix matScale = Matrix.CreateScale(_scaleFactor, _scaleFactor, 1f);
            SVGPathParser parser = new SVGPathParser(_bezierIterations);
            BodyContainerContent bodies = new BodyContainerContent();

            foreach (RawBodyTemplateContent rawBody in input)
            {
                if (rawBody.Name == "importer_default_path_container")
                    continue;

                BodyTemplateContent currentBody = new BodyTemplateContent();
                currentBody.Mass = rawBody.Mass;
                currentBody.BodyType = rawBody.BodyType;
                foreach (RawFixtureTemplateContent rawFixture in rawBody.Fixtures)
                {
                    List<PolygonContent> paths = parser.ParseSVGPath(rawFixture.Path, rawFixture.Transformation * matScale);
                    for (int i = 0; i < paths.Count; i++)
                    {
                        if (paths[i].Closed)
                        {
                            List<Vertices> partition = Triangulate.ConvexPartition(paths[i].Vertices, TriangulationAlgorithm.Bayazit);
                            foreach (Vertices v in partition)
                            {
                                currentBody.Fixtures.Add(new FixtureTemplateContent()
                                {
                                    Shape = new PolygonShape(v, rawFixture.Density),
                                    Restitution = rawFixture.Restitution,
                                    Friction = rawFixture.Friction,
                                    Name = rawFixture.Name
                                });
                            }
                        }
                        else
                        {
                            Shape shape;
                            if (paths[i].Vertices.Count > 2)
                            {
                                shape = new ChainShape(paths[i].Vertices);
                            }
                            else
                            {
                                shape = new EdgeShape(paths[i].Vertices[0], paths[i].Vertices[1]);
                            }
                            currentBody.Fixtures.Add(new FixtureTemplateContent()
                            {
                                Shape = shape,
                                Restitution = rawFixture.Restitution,
                                Friction = rawFixture.Friction,
                                Name = rawFixture.Name
                            });
                        }
                    }
                }
                if (currentBody.Fixtures.Count > 0)
                {
                    bodies[rawBody.Name] = currentBody;
                    currentBody = null;
                }
            }
            return bodies;
        }
    }
}