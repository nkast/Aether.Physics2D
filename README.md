# Aether.Physics2D

Aether.Physics2D is a 2D collision detection system.

[![Discord](https://img.shields.io/discord/780484381961093172?style=flat)](https://discord.gg/95nPEjZ6mu)

Documentation: https://nkast.github.io/Aether.Physics2D/

![3DCameraDemo](Documentation//Images/3DCameraDemo.png)

Web Demos:
 - [HelloWorld](https://nkast.github.io/Aether.Physics2D/wasm/HelloWorld/)
 - [Samples](https://nkast.github.io/Aether.Physics2D/wasm/Samples/)

## Features

- Continuous collision detection (with time of impact solver)
- Contact callbacks: begin, end, pre-solve, post-solve
- Convex and concave polyons and circles.
- Multiple shapes per body
- Dynamic tree and quad tree broadphase
- Fast broadphase AABB queries and raycasts
- Collision groups and categories
- Sleep management
- Friction and restitution
- Stable stacking with a linear-time solver
- Revolute, prismatic, distance, pulley, gear, mouse joint, and other joint types
- Joint limits and joint motors
- Controllers (gravity, force generators)
- Tools to decompose concave polygons, find convex hulls and boolean operations
- Factories to simplify the creation of bodies

## Usage

    private World _world;
    private Body _playerBody;
    private Body _groundBody;
    private float _playerBodyRadius = 1.5f / 2f; // player diameter is 1.5 meters
    private Vector2 _groundBodySize = new Vector2(8f, 1f); // ground is 8x1 meters

    //Create a world
    _world = new World();

    // Create the player
    Vector2 playerPosition = new Vector2(0, _playerBodyRadius);
    _playerBody = _world.CreateBody(playerPosition, 0, BodyType.Dynamic);
    Fixture pfixture = _playerBody.CreateCircle(_playerBodyRadius, 1f);
    // Give it some bounce and friction
    pfixture.Restitution = 0.3f;
    pfixture.Friction = 0.5f;
    
    // Create the ground
    Vector2 groundPosition = new Vector2(0, -(_groundBodySize.Y / 2f));
    _groundBody = _world.CreateBody(groundPosition, 0, BodyType.Static);
    Fixture gfixture = _groundBody.CreateRectangle(_groundBodySize.X, _groundBodySize.Y, 1f, Vector2.Zero);
    gfixture.Restitution = 0.3f;
    gfixture.Friction = 0.5f;
    
    // Update the world
    float dt = 1f/60f;
    _world.Step(dt);


## Downloads

https://www.nuget.org/packages/Aether.Physics2D

https://www.nuget.org/packages/Aether.Physics2D.KNI

https://www.nuget.org/packages/Aether.Physics2D.Diagnostics.KNI

https://www.nuget.org/packages/Aether.Physics2D.MG

https://www.nuget.org/packages/Aether.Physics2D.Diagnostics.MG


https://github.com/nkast/Aether.Physics2D/releases/tag/v2.1

![LightAndShadowsDemo](Documentation//Images/LightAndShadowsDemo.png)

## Sponsors ❤️

While Aether.Physics2D is free and open-source, maintaining and expanding the library requires ongoing effort and resources. We rely on the support of our community to continue delivering top-notch updates, features, and support.
By [becoming a Sponsor](https://github.com/sponsors/nkast), you can directly contribute to the growth and sustainability of Aether.Physics2D. 

<!-- sponsors --><a href="https://github.com/damian-666"><img src="https:&#x2F;&#x2F;avatars.githubusercontent.com&#x2F;u&#x2F;16763801?u&#x3D;7b05802d512ef2a85331500cc2471dbac4f8ad28&amp;v&#x3D;4" width="60px" alt="Damian" /></a><a href="https://github.com/KeithRiskey"><img src="https:&#x2F;&#x2F;avatars.githubusercontent.com&#x2F;u&#x2F;1427153?v&#x3D;4" width="60px" alt="Keith Riskey" /></a><a href="https://github.com/MutsiMutsi"><img src="https:&#x2F;&#x2F;avatars.githubusercontent.com&#x2F;u&#x2F;25252600?u&#x3D;9e4a3365f227cea165e84797b7cee4c19f7cbc5b&amp;v&#x3D;4" width="60px" alt="Mitchel Disveld" /></a><!-- sponsors -->
