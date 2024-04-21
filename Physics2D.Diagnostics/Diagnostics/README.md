# Aether.Physics2D.Diagnostics

Aether.Physics2D.Diagnostics is a debug redering for Aether.Physics2D worlds.

Documentation: https://nkast.github.io/Aether.Physics2D/

Web Demos:
 - [Samples](https://nkast.github.io/Aether.Physics2D/wasm/Samples/)
 (press (F2) to Show/Hide the Debug layer)
 
## Usage

    private DebugView _debugView;
    
    // create the DebugView
    _debugView = new DebugView(_world);
    _debugView.AppendFlags(DebugViewFlags.Shape);
    _debugView.AppendFlags(DebugViewFlags.Joint);
    _debugView.AppendFlags(DebugViewFlags.ContactPoints);
    _debugView.AppendFlags(DebugViewFlags.AABB);
    
    // draw shapes, joints, contact points and broadphase AABBs
    _debugView.RenderDebugData(projection, view, world);
    

## Sponsors ❤️

While Aether.Physics2D is free and open-source, maintaining and expanding the library requires ongoing effort and resources. We rely on the support of our community to continue delivering top-notch updates, features, and support.
By [becoming a Sponsor](https://github.com/sponsors/nkast), you can directly contribute to the growth and sustainability of Aether.Physics2D. 
