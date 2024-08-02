window.nkCanvas =
{
    GetWidth: function(uid)
    {
        var c = nkJSObject.GetObject(uid);
        return c.width;
    },
    SetWidth: function(uid,d)
    {
        var c = nkJSObject.GetObject(uid);
        c.width = Blazor.platform.readInt32Field(d, 0);
    },
    GetHeight: function (uid)
    {
        var c = nkJSObject.GetObject(uid);
        return c.height;
    },
    SetHeight: function(uid,d)
    {
        var c = nkJSObject.GetObject(uid);
        c.height = Blazor.platform.readInt32Field(d, 0);
    },
    Create2DContext: function (uid)
    {
        var c = nkJSObject.GetObject(uid);
        var cx = c.getContext("2d");
        return nkJSObject.RegisterObject(cx);
    },
    Create2DContext1: function (uid, d)
    {
        var c = nkJSObject.GetObject(uid);
        var bi = Blazor.platform.readInt32Field(d, 0);

        var al = (bi >>  0) & 3;
        var de = (bi >>  2) & 3;

        var attribs = {};
        if (al !== 3)
            attribs.alpha = al !== 0;
        if (de !== 3)
            attribs.desynchronized = de !== 0;

        var cx = c.getContext("2d", attribs);
        return nkJSObject.RegisterObject(cx);
    },
    CreateWebGLContext: function (uid)
    {
        var c = nkJSObject.GetObject(uid);
        var glx = c.getContext("webgl");
        return nkJSObject.RegisterObject(glx);
    },
    CreateWebGLContext1: function (uid, d)
    {
        var c = nkJSObject.GetObject(uid);
        var bi = Blazor.platform.readInt32Field(d, 0);

        var al = (bi >>  0) & 3;
        var de = (bi >>  2) & 3;
        var dp = (bi >>  4) & 3;
        var st = (bi >>  6) & 3;
        var aa = (bi >>  8) & 3;
        var pa = (bi >> 10) & 3;
        var pb = (bi >> 12) & 3;
        var xr = (bi >> 14) & 3;
        var pp = (bi >> 16) & 3;

        var attribs = {};
        if (al != 3)
            attribs.alpha = al !== 0;
        if (de != 3)
            attribs.desynchronized = de !== 0;
        if (dp != 3)
            attribs.depth = dp !== 0;
        if (st != 3)
            attribs.stencil = st !== 0;
        if (aa != 3)
            attribs.antialias = aa !== 0;
        if (pa != 3)
            attribs.premultipliedAlpha = pa !== 0;
        if (pb != 3)
            attribs.preserveDrawingBuffer = pb !== 0;
        if (xr != 3)
            attribs.xrCompatible = xr !== 0;
        if (pp != 3)
            attribs.PowerPreference = (pp === 1) ? 'high-performance'
                                    : (pp === 2) ? 'low-power'
                                    : 'default'
                                    ;

        var glx = c.getContext("webgl", attribs);
        return nkJSObject.RegisterObject(glx);
    },
    CreateWebGL2Context: function (uid)
    {
        var c = nkJSObject.GetObject(uid);
        var glx = c.getContext("webgl2");
        if (glx == null)
            return 0;
        return nkJSObject.RegisterObject(glx);
    },
    CreateWebGL2Context1: function (uid, d)
    {
        var c = nkJSObject.GetObject(uid);
        var bi = Blazor.platform.readInt32Field(d, 0);

        var al = (bi >>  0) & 3;
        var de = (bi >>  2) & 3;
        var dp = (bi >>  4) & 3;
        var st = (bi >>  6) & 3;
        var aa = (bi >>  8) & 3;
        var pa = (bi >> 10) & 3;
        var pb = (bi >> 12) & 3;
        var xr = (bi >> 14) & 3;
        var pp = (bi >> 16) & 3;

        var attribs = {};
        if (al != 3)
            attribs.alpha = al !== 0;
        if (de != 3)
            attribs.desynchronized = de !== 0;
        if (dp != 3)
            attribs.depth = dp !== 0;
        if (st != 3)
            attribs.stencil = st !== 0;
        if (aa != 3)
            attribs.antialias = aa !== 0;
        if (pa != 3)
            attribs.premultipliedAlpha = pa !== 0;
        if (pb != 3)
            attribs.preserveDrawingBuffer = pb !== 0;
        if (xr != 3)
            attribs.xrCompatible = xr !== 0;
        if (pp != 3)
            attribs.PowerPreference = (pp === 1) ? 'high-performance'
                                    : (pp === 2) ? 'low-power'
                                    : 'default'
                                    ;

        var glx = c.getContext("webgl2", attribs);
        if (glx == null)
            return 0;
        return nkJSObject.RegisterObject(glx);
    },
};

window.nkOffscreenCanvas =
{
    Create: function(width, height)
    {
        var oc = new OffscreenCanvas(width, height);
        return nkJSObject.RegisterObject(oc);
    },

    GetWidth: function(uid)
    {
        var c = nkJSObject.GetObject(uid);
        return c.width;
    },
    SetWidth: function(uid,d)
    {
        var c = nkJSObject.GetObject(uid);
        c.width = Blazor.platform.readInt32Field(d, 0);
    },
    GetHeight: function (uid)
    {
        var c = nkJSObject.GetObject(uid);
        return c.height;
    },
    SetHeight: function(uid,d)
    {
        var c = nkJSObject.GetObject(uid);
        c.height = Blazor.platform.readInt32Field(d, 0);
    },
    Create2DContext: function (uid)
    {
        var c = nkJSObject.GetObject(uid);
        var cx = c.getContext("2d");
        return nkJSObject.RegisterObject(cx);
    },
    Create2DContext1: function (uid, d)
    {
        var c = nkJSObject.GetObject(uid);
        var bi = Blazor.platform.readInt32Field(d, 0);

        var al = (bi >>  0) & 3;
        var de = (bi >>  2) & 3;

        var attribs = {};
        if (al !== 3)
            attribs.alpha = al !== 0;
        if (de !== 3)
            attribs.desynchronized = de !== 0;

        var cx = c.getContext("2d", attribs);
        return nkJSObject.RegisterObject(cx);
    },
    CreateWebGLContext: function (uid)
    {
        var c = nkJSObject.GetObject(uid);
        var glx = c.getContext("webgl");
        return nkJSObject.RegisterObject(glx);
    },
    CreateWebGLContext1: function (uid, d)
    {
        var c = nkJSObject.GetObject(uid);
        var bi = Blazor.platform.readInt32Field(d, 0);

        var al = (bi >>  0) & 3;
        var de = (bi >>  2) & 3;
        var dp = (bi >>  4) & 3;
        var st = (bi >>  6) & 3;
        var aa = (bi >>  8) & 3;
        var pa = (bi >> 10) & 3;
        var pb = (bi >> 12) & 3;
        var xr = (bi >> 14) & 3;
        var pp = (bi >> 16) & 3;

        var attribs = {};
        if (al != 3)
            attribs.alpha = al !== 0;
        if (de != 3)
            attribs.desynchronized = de !== 0;
        if (dp != 3)
            attribs.depth = dp !== 0;
        if (st != 3)
            attribs.stencil = st !== 0;
        if (aa != 3)
            attribs.antialias = aa !== 0;
        if (pa != 3)
            attribs.premultipliedAlpha = pa !== 0;
        if (pb != 3)
            attribs.preserveDrawingBuffer = pb !== 0;
        if (xr != 3)
            attribs.xrCompatible = xr !== 0;
        if (pp != 3)
            attribs.PowerPreference = (pp === 1) ? 'high-performance'
                                    : (pp === 2) ? 'low-power'
                                    : 'default'
                                    ;

        var glx = c.getContext("webgl", attribs);
        return nkJSObject.RegisterObject(glx);
    },
    CreateWebGL2Context: function (uid)
    {
        var c = nkJSObject.GetObject(uid);
        var glx = c.getContext("webgl2");
        if (glx == null)
            return 0;
        return nkJSObject.RegisterObject(glx);
    },
    CreateWebGL2Context1: function (uid, d)
    {
        var c = nkJSObject.GetObject(uid);
        var bi = Blazor.platform.readInt32Field(d, 0);

        var al = (bi >>  0) & 3;
        var de = (bi >>  2) & 3;
        var dp = (bi >>  4) & 3;
        var st = (bi >>  6) & 3;
        var aa = (bi >>  8) & 3;
        var pa = (bi >> 10) & 3;
        var pb = (bi >> 12) & 3;
        var xr = (bi >> 14) & 3;
        var pp = (bi >> 16) & 3;

        var attribs = {};
        if (al != 3)
            attribs.alpha = al !== 0;
        if (de != 3)
            attribs.desynchronized = de !== 0;
        if (dp != 3)
            attribs.depth = dp !== 0;
        if (st != 3)
            attribs.stencil = st !== 0;
        if (aa != 3)
            attribs.antialias = aa !== 0;
        if (pa != 3)
            attribs.premultipliedAlpha = pa !== 0;
        if (pb != 3)
            attribs.preserveDrawingBuffer = pb !== 0;
        if (xr != 3)
            attribs.xrCompatible = xr !== 0;
        if (pp != 3)
            attribs.PowerPreference = (pp === 1) ? 'high-performance'
                                    : (pp === 2) ? 'low-power'
                                    : 'default'
                                    ;

        var glx = c.getContext("webgl2", attribs);
        if (glx == null)
            return 0;
        return nkJSObject.RegisterObject(glx);
    },
};