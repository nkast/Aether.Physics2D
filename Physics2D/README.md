# Aether.Physics2D

Aether.Physics2D is a 2D collision detection system.

Documentation: https://nkast.github.io/Aether.Physics2D/

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


## Sponsors ❤️

While Aether.Physics2D is free and open-source, maintaining and expanding the library requires ongoing effort and resources. We rely on the support of our community to continue delivering top-notch updates, features, and support.
By [becoming a Sponsor](https://github.com/sponsors/nkast), you can directly contribute to the growth and sustainability of Aether.Physics2D. 
