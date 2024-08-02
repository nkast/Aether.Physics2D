window.nkCanvasGLContext =
{
    Enable: function (uid, d)
    {
        var gc  = nkJSObject.GetObject(uid);
        var cp = Blazor.platform.readInt32Field(d, 0);
        gc.enable(cp);
    },

    Disable: function (uid, d)
    {
        var gc  = nkJSObject.GetObject(uid);
        var cp = Blazor.platform.readInt32Field(d, 0);
        gc.disable(cp);
    },

    BlendEquationSeparate: function (uid, d)
    {
        var gc = nkJSObject.GetObject(uid);
        var cr = Blazor.platform.readInt32Field(d, 0);
        var aa = Blazor.platform.readInt32Field(d, 4);
        gc.blendEquationSeparate(cr, aa);
    },

    BlendFuncSeparate: function (uid, d)
    {
        var gc = nkJSObject.GetObject(uid);
        var sc = Blazor.platform.readInt32Field(d, 0);
        var dc = Blazor.platform.readInt32Field(d, 4);
        var sa = Blazor.platform.readInt32Field(d, 8);
        var da = Blazor.platform.readInt32Field(d, 12);
        gc.blendFuncSeparate(sc, dc, sa, da);
    },

    BlendColor: function (uid, d)
    {
        var gc = nkJSObject.GetObject(uid);
        var r = Blazor.platform.readFloatField(d,  0);
        var g = Blazor.platform.readFloatField(d,  4);
        var b = Blazor.platform.readFloatField(d,  8);
        var a = Blazor.platform.readFloatField(d, 12);
        gc.blendColor(r, g, b, a);
    },

    ColorMask: function (uid, d)
    {
        var gc = nkJSObject.GetObject(uid);
        var r = Blazor.platform.readInt32Field(d,  0) !== 0;
        var g = Blazor.platform.readInt32Field(d,  4) !== 0;
        var b = Blazor.platform.readInt32Field(d,  8) !== 0;
        var a = Blazor.platform.readInt32Field(d, 12) !== 0;
        gc.colorMask(r, g, b, a);
    },

    CullFace: function (uid, d)
    {
        var gc = nkJSObject.GetObject(uid);
        var cm = Blazor.platform.readInt32Field(d, 0);
        gc.cullFace(cm);
    },

    FrontFace: function (uid, d)
    {
        var gc = nkJSObject.GetObject(uid);
        var wd = Blazor.platform.readInt32Field(d, 0);
        gc.frontFace(wd);
    },

    PolygonOffset: function (uid, d)
    {
        var gc = nkJSObject.GetObject(uid);
        var fr = Blazor.platform.readFloatField(d, 0);
        var us = Blazor.platform.readFloatField(d, 4);
        gc.polygonOffset(fr, us);
    },

    DepthMask: function (uid, d)
    {
        var gc = nkJSObject.GetObject(uid);
        var en = Blazor.platform.readInt32Field(d, 0) !== 0;
        gc.depthMask(en);
    },

    StencilMask: function (uid, d)
    {
        var gc = nkJSObject.GetObject(uid);
        var ms = Blazor.platform.readInt32Field(d, 0);
        gc.stencilMask(ms);
    },

    DepthFunc: function (uid, d)
    {
        var gc = nkJSObject.GetObject(uid);
        var fc = Blazor.platform.readInt32Field(d, 0);
        gc.depthFunc(fc);
    },

    StencilFunc: function (uid, d)
    {
        var gc = nkJSObject.GetObject(uid);
        var fc = Blazor.platform.readInt32Field(d, 0);
        var rf = Blazor.platform.readInt32Field(d, 4);
        var mk = Blazor.platform.readInt32Field(d, 8);

        gc.stencilFunc(fc, rf, mk);
    },

    StencilOp: function (uid, d)
    {
        var gc = nkJSObject.GetObject(uid);
        var fl = Blazor.platform.readInt32Field(d, 0);
        var zf = Blazor.platform.readInt32Field(d, 4);
        var zp = Blazor.platform.readInt32Field(d, 8);

        gc.stencilOp(fl, zf, zp);
    },

    Viewport: function (uid, d)
    {
        var gc = nkJSObject.GetObject(uid);
        var x = Blazor.platform.readInt32Field(d, 0);
        var y = Blazor.platform.readInt32Field(d, 4);
        var w = Blazor.platform.readInt32Field(d, 8);
        var h = Blazor.platform.readInt32Field(d, 12);
        gc.viewport(x, y, w, h);
    },
    
    DepthRange: function (uid, d)
    {
        var gc = nkJSObject.GetObject(uid);
        var zn = Blazor.platform.readFloatField(d, 0);
        var zf = Blazor.platform.readFloatField(d, 4);
        gc.depthRange(zn, zf);
    },

    Scissor: function (uid, d)
    {
        var gc = nkJSObject.GetObject(uid);
        var x = Blazor.platform.readInt32Field(d, 0);
        var y = Blazor.platform.readInt32Field(d, 4);
        var w = Blazor.platform.readInt32Field(d, 8);
        var h = Blazor.platform.readInt32Field(d, 12);
        gc.scissor(x, y, w, h);
    },

    ClearColor: function(uid,d)
    {
        var gc = nkJSObject.GetObject(uid);
        var r = Blazor.platform.readFloatField(d,  0);
        var g = Blazor.platform.readFloatField(d,  4);
        var b = Blazor.platform.readFloatField(d,  8);
        var a = Blazor.platform.readFloatField(d, 12);
        gc.clearColor(r, g, b, a);
    },
    ClearDepth: function (uid, d)
    {
        var gc = nkJSObject.GetObject(uid);
        var d = Blazor.platform.readFloatField(d, 0);
        gc.clearDepth(d);
    },
    ClearStencil: function (uid, d)
    {
        var gc = nkJSObject.GetObject(uid);
        var s = Blazor.platform.readInt32Field(d, 0);
        gc.clearStencil(s);
    },
    Clear: function(uid,d)
    {
        var gc = nkJSObject.GetObject(uid);
        var bb = Blazor.platform.readInt32Field(d,  0);
        gc.clear(bb);
    },

    CreateTexture: function (uid, d)
    {
        var gc = nkJSObject.GetObject(uid);
        var tx = gc.createTexture();
        return nkJSObject.RegisterObject(tx);
    },

    DeleteTexture: function (uid, d)
    {
        var gc = nkJSObject.GetObject(uid);
        var txuid = Blazor.platform.readInt32Field(d, 0);
        var tx = nkJSObject.GetObject(txuid);
        gc.deleteTexture(tx);
    },

    CreateShader: function (uid, d)
    {
        var gc = nkJSObject.GetObject(uid);
        var st = Blazor.platform.readInt32Field(d, 0);
        var sh = gc.createShader(st);
        return nkJSObject.RegisterObject(sh);
    },

    DeleteShader: function (uid, d)
    {
        var gc = nkJSObject.GetObject(uid);
        var bfuid = Blazor.platform.readInt32Field(d, 0);
        var bf = nkJSObject.GetObject(bfuid);
        gc.deleteShader(bf);
    },

    CreateProgram: function (uid, d)
    {
        var gc = nkJSObject.GetObject(uid);
        var pg = gc.createProgram();
        return nkJSObject.RegisterObject(pg);
    },

    DeleteProgram: function (uid, d)
    {
        var gc = nkJSObject.GetObject(uid);
        var pguid = Blazor.platform.readInt32Field(d, 0);
        var pg = nkJSObject.GetObject(pguid);
        gc.deleteProgram(pg);
    },

    CreateBuffer: function (uid, d)
    {
        var gc = nkJSObject.GetObject(uid);
        var bf = gc.createBuffer();
        return nkJSObject.RegisterObject(bf);
    },

    DeleteBuffer: function (uid, d)
    {
        var gc = nkJSObject.GetObject(uid);
        var bfuid = Blazor.platform.readInt32Field(d, 0);
        var bf = nkJSObject.GetObject(bfuid);
        gc.deleteBuffer(bf);
    },

    CreateFramebuffer: function (uid, d)
    {
        var gc = nkJSObject.GetObject(uid);
        var bf = gc.createFramebuffer();
        return nkJSObject.RegisterObject(bf);
    },

    DeleteFramebuffer: function (uid, d)
    {
        var gc = nkJSObject.GetObject(uid);
        var bfuid = Blazor.platform.readInt32Field(d, 0);
        var bf = nkJSObject.GetObject(bfuid);
        gc.deleteFramebuffer(bf);
    },
    
    CreateRenderbuffer: function (uid, d)
    {
        var gc = nkJSObject.GetObject(uid);
        var bf = gc.createRenderbuffer();
        return nkJSObject.RegisterObject(bf);
    },

    DeleteRenderbuffer: function (uid, d)
    {
        var gc = nkJSObject.GetObject(uid);
        var bfuid = Blazor.platform.readInt32Field(d, 0);
        var bf = nkJSObject.GetObject(bfuid);
        gc.deleteRenderbuffer(bf);
    },

    ShaderSource: function (uid, d)
    {
        var gc = nkJSObject.GetObject(uid);
        var shuid = Blazor.platform.readInt32Field(d, 0);
        var sr = Blazor.platform.readStringField(d, 4);

        var sh = nkJSObject.GetObject(shuid);
        gc.shaderSource(sh, sr);
    },

    GetAttribLocation: function (uid, d)
    {
        var gc = nkJSObject.GetObject(uid);
        var pguid = Blazor.platform.readInt32Field(d, 0);
        var nm = Blazor.platform.readStringField(d, 4);

        var pg = nkJSObject.GetObject(pguid);
        return gc.getAttribLocation(pg, nm);
    },

    GetUniformLocation: function (uid, d)
    {
        var gc = nkJSObject.GetObject(uid);
        var pguid = Blazor.platform.readInt32Field(d, 0);
        var nm = Blazor.platform.readStringField(d, 4);

        var pg = nkJSObject.GetObject(pguid);
        var ul = gc.getUniformLocation(pg, nm);
        return nkJSObject.RegisterObject(ul);
    },

    Uniform1i: function (uid, d)
    {
        var gc = nkJSObject.GetObject(uid);
        var uluid = Blazor.platform.readInt32Field(d, 0);
        var v0 = Blazor.platform.readInt32Field(d,  4);

        var ul = nkJSObject.GetObject(uluid);
        gc.uniform1i(ul, v0);
    },

    Uniform2i: function (uid, d)
    {
        var gc = nkJSObject.GetObject(uid);
        var uluid = Blazor.platform.readInt32Field(d, 0);
        var v0 = Blazor.platform.readInt32Field(d,  4);
        var v1 = Blazor.platform.readInt32Field(d,  8);
        
        var ul = nkJSObject.GetObject(uluid);
        gc.uniform2i(ul, v0, v1);
    },

    Uniform3i: function (uid, d)
    {
        var gc = nkJSObject.GetObject(uid);
        var uluid = Blazor.platform.readInt32Field(d, 0);
        var v0 = Blazor.platform.readInt32Field(d,  4);
        var v1 = Blazor.platform.readInt32Field(d,  8);
        var v2 = Blazor.platform.readInt32Field(d, 12);
        
        var ul = nkJSObject.GetObject(uluid);
        gc.uniform3i(ul, v0, v1, v2);
    },

    Uniform4i: function (uid, d)
    {
        var gc = nkJSObject.GetObject(uid);
        var uluid = Blazor.platform.readInt32Field(d, 0);
        var v0 = Blazor.platform.readInt32Field(d,  4);
        var v1 = Blazor.platform.readInt32Field(d,  8);
        var v2 = Blazor.platform.readInt32Field(d, 12);
        var v3 = Blazor.platform.readInt32Field(d, 16);

        var ul = nkJSObject.GetObject(uluid);
        gc.uniform4i(ul, v0, v1, v2, v3);
    },

    Uniform1f: function (uid, d)
    {
        var gc = nkJSObject.GetObject(uid);
        var uluid = Blazor.platform.readInt32Field(d, 0);
        var v0 = Blazor.platform.readFloatField(d,  4);

        var ul = nkJSObject.GetObject(uluid);
        gc.uniform1f(ul, v0);
    },

    Uniform2f: function (uid, d)
    {
        var gc = nkJSObject.GetObject(uid);
        var uluid = Blazor.platform.readInt32Field(d, 0);
        var v0 = Blazor.platform.readFloatField(d,  4);
        var v1 = Blazor.platform.readFloatField(d,  8);

        var ul = nkJSObject.GetObject(uluid);
        gc.uniform2f(ul, v0, v1);
    },

    Uniform3f: function (uid, d)
    {
        var gc = nkJSObject.GetObject(uid);
        var uluid = Blazor.platform.readInt32Field(d, 0);
        var v0 = Blazor.platform.readFloatField(d,  4);
        var v1 = Blazor.platform.readFloatField(d,  8);
        var v2 = Blazor.platform.readFloatField(d, 12);

        var ul = nkJSObject.GetObject(uluid);
        gc.uniform3f(ul, v0, v1, v2);
    },

    Uniform4f: function (uid, d)
    {
        var gc = nkJSObject.GetObject(uid);
        var uluid = Blazor.platform.readInt32Field(d, 0);
        var v0 = Blazor.platform.readFloatField(d,  4);
        var v1 = Blazor.platform.readFloatField(d,  8);
        var v2 = Blazor.platform.readFloatField(d, 12);
        var v3 = Blazor.platform.readFloatField(d, 16);

        var ul = nkJSObject.GetObject(uluid);
        gc.uniform4f(ul, v0, v1, v2, v3);
    },

    Uniform1iv: function (uid, d)
    {
        var gc = nkJSObject.GetObject(uid);
        var uluid = Blazor.platform.readInt32Field(d, 0);
        var st    = Blazor.platform.readInt32Field(d, 4);
        var arr   = Blazor.platform.readInt32Field(d, 8);

        var arrPtr = Blazor.platform.getArrayEntryPtr(arr, 0, 4);
        var arrLen = Blazor.platform.getArrayLength(arr);
        var dt = new Int32Array(Module.HEAPU8.buffer, arrPtr, arrLen * st / 4);

        var ul = nkJSObject.GetObject(uluid);
        gc.uniform1iv(ul, dt);
    },
    Uniform2iv: function (uid, d)
    {
        var gc = nkJSObject.GetObject(uid);
        var uluid = Blazor.platform.readInt32Field(d, 0);
        var st    = Blazor.platform.readInt32Field(d, 4);
        var arr   = Blazor.platform.readInt32Field(d, 8);

        var arrPtr = Blazor.platform.getArrayEntryPtr(arr, 0, 4);
        var arrLen = Blazor.platform.getArrayLength(arr);
        var dt = new Int32Array(Module.HEAPU8.buffer, arrPtr, arrLen * st / 4);

        var ul = nkJSObject.GetObject(uluid);
        gc.uniform2iv(ul, dt);
    },
    Uniform3iv: function (uid, d)
    {
        var gc = nkJSObject.GetObject(uid);
        var uluid = Blazor.platform.readInt32Field(d, 0);
        var st    = Blazor.platform.readInt32Field(d, 4);
        var arr   = Blazor.platform.readInt32Field(d, 8);

        var arrPtr = Blazor.platform.getArrayEntryPtr(arr, 0, 4);
        var arrLen = Blazor.platform.getArrayLength(arr);
        var dt = new Int32Array(Module.HEAPU8.buffer, arrPtr, arrLen * st / 4);

        var ul = nkJSObject.GetObject(uluid);
        gc.uniform3iv(ul, dt);
    },
    Uniform4iv: function (uid, d)
    {
        var gc = nkJSObject.GetObject(uid);
        var uluid = Blazor.platform.readInt32Field(d, 0);
        var st    = Blazor.platform.readInt32Field(d, 4);
        var arr   = Blazor.platform.readInt32Field(d, 8);

        var arrPtr = Blazor.platform.getArrayEntryPtr(arr, 0, 4);
        var arrLen = Blazor.platform.getArrayLength(arr);
        var dt = new Int32Array(Module.HEAPU8.buffer, arrPtr, arrLen * st / 4);

        var ul = nkJSObject.GetObject(uluid);
        gc.uniform4iv(ul, dt);
    },

    Uniform1fv: function (uid, d)
    {
        var gc = nkJSObject.GetObject(uid);
        var uluid = Blazor.platform.readInt32Field(d, 0);
        var st    = Blazor.platform.readInt32Field(d, 4);
        var arr   = Blazor.platform.readInt32Field(d, 8);

        var arrPtr = Blazor.platform.getArrayEntryPtr(arr, 0, 4);
        var arrLen = Blazor.platform.getArrayLength(arr);
        var dt = new Float32Array(Module.HEAPU8.buffer, arrPtr, arrLen * st / 4);

        var ul = nkJSObject.GetObject(uluid);
        gc.uniform1fv(ul, dt);
    },
    Uniform2fv: function (uid, d)
    {
        var gc = nkJSObject.GetObject(uid);
        var uluid = Blazor.platform.readInt32Field(d, 0);
        var st    = Blazor.platform.readInt32Field(d, 4);
        var arr   = Blazor.platform.readInt32Field(d, 8);

        var arrPtr = Blazor.platform.getArrayEntryPtr(arr, 0, 4);
        var arrLen = Blazor.platform.getArrayLength(arr);
        var dt = new Float32Array(Module.HEAPU8.buffer, arrPtr, arrLen * st / 4);

        var ul = nkJSObject.GetObject(uluid);
        gc.uniform2fv(ul, dt);
    },
    Uniform3fv: function (uid, d)
    {
        var gc = nkJSObject.GetObject(uid);
        var uluid = Blazor.platform.readInt32Field(d, 0);
        var st    = Blazor.platform.readInt32Field(d, 4);
        var arr   = Blazor.platform.readInt32Field(d, 8);

        var arrPtr = Blazor.platform.getArrayEntryPtr(arr, 0, 4);
        var arrLen = Blazor.platform.getArrayLength(arr);
        var dt = new Float32Array(Module.HEAPU8.buffer, arrPtr, arrLen * st / 4);

        var ul = nkJSObject.GetObject(uluid);
        gc.uniform3fv(ul, dt);
    },
    Uniform4fv: function (uid, d)
    {
        var gc = nkJSObject.GetObject(uid);
        var uluid = Blazor.platform.readInt32Field(d, 0);
        var st    = Blazor.platform.readInt32Field(d, 4);
        var arr   = Blazor.platform.readInt32Field(d, 8);

        var arrPtr = Blazor.platform.getArrayEntryPtr(arr, 0, 4);
        var arrLen = Blazor.platform.getArrayLength(arr);
        var dt = new Float32Array(Module.HEAPU8.buffer, arrPtr, arrLen * st / 4);

        var ul = nkJSObject.GetObject(uluid);
        gc.uniform4fv(ul, dt);
    },

    UniformMatrix2fv: function (uid, d)
    {
        var gc = nkJSObject.GetObject(uid);
        var uluid = Blazor.platform.readInt32Field(d, 0);
        var st = Blazor.platform.readInt32Field(d, 4);
        var arr = Blazor.platform.readInt32Field(d, 8);

        var arrPtr = Blazor.platform.getArrayEntryPtr(arr, 0, 4);
        var arrLen = Blazor.platform.getArrayLength(arr);
        var dt = new Float32Array(Module.HEAPU8.buffer, arrPtr, arrLen * st / 4);

        var ul = nkJSObject.GetObject(uluid);
        gc.uniformMatrix2fv(ul, dt);
    },
    UniformMatrix3fv: function (uid, d)
    {
        var gc = nkJSObject.GetObject(uid);
        var uluid = Blazor.platform.readInt32Field(d, 0);
        var st = Blazor.platform.readInt32Field(d, 4);
        var arr = Blazor.platform.readInt32Field(d, 8);

        var arrPtr = Blazor.platform.getArrayEntryPtr(arr, 0, 4);
        var arrLen = Blazor.platform.getArrayLength(arr);
        var dt = new Float32Array(Module.HEAPU8.buffer, arrPtr, arrLen * st / 4);

        var ul = nkJSObject.GetObject(uluid);
        gc.uniformMatrix3fv(ul, dt);
    },
    UniformMatrix4fv: function (uid, d)
    {
        var gc = nkJSObject.GetObject(uid);
        var uluid = Blazor.platform.readInt32Field(d, 0);
        var st = Blazor.platform.readInt32Field(d, 4);
        var arr = Blazor.platform.readInt32Field(d, 8);

        var arrPtr = Blazor.platform.getArrayEntryPtr(arr, 0, 4);
        var arrLen = Blazor.platform.getArrayLength(arr);
        var dt = new Float32Array(Module.HEAPU8.buffer, arrPtr, arrLen * st / 4);

        var ul = nkJSObject.GetObject(uluid);
        gc.uniformMatrix4fv(ul, dt);
    },
    
    CompileShader: function (uid, d)
    {
        var gc = nkJSObject.GetObject(uid);
        var shuid = Blazor.platform.readInt32Field(d, 0);
        var sh = nkJSObject.GetObject(shuid);
        gc.compileShader(sh);
    },

    GetShaderParameter: function (uid, d)
    {
        var gc = nkJSObject.GetObject(uid);
        var shuid = Blazor.platform.readInt32Field(d, 0);
        var pn = Blazor.platform.readInt32Field(d, 4);

        var sh = nkJSObject.GetObject(shuid);
        return gc.getShaderParameter(sh, pn);
    },

    GetProgramParameter: function (uid, d)
    {
        var gc = nkJSObject.GetObject(uid);
        var pguid = Blazor.platform.readInt32Field(d, 0);
        var pn = Blazor.platform.readInt32Field(d, 4);

        var pg = nkJSObject.GetObject(pguid);
        return gc.getProgramParameter(pg, pn);
    },

    TexImage2D: function (uid, d)
    {
        var gc = nkJSObject.GetObject(uid);
        var tg = Blazor.platform.readInt32Field(d,  0);
        var lv = Blazor.platform.readInt32Field(d,  4);
        var it = Blazor.platform.readInt32Field(d,  8);
        var wh = Blazor.platform.readInt32Field(d, 12);
        var ht = Blazor.platform.readInt32Field(d, 16);
        var ft = Blazor.platform.readInt32Field(d, 20);
        var tp = Blazor.platform.readInt32Field(d, 24);

        gc.texImage2D(tg, lv, it, wh, ht, 0, ft, tp, null);
    },

    TexImage2D1: function (uid, d)
    {
        var gc = nkJSObject.GetObject(uid);
        var tg = Blazor.platform.readInt32Field(d, 0);
        var lv = Blazor.platform.readInt32Field(d, 4);
        var it = Blazor.platform.readInt32Field(d, 8);
        var wh = Blazor.platform.readInt32Field(d, 12);
        var ht = Blazor.platform.readInt32Field(d, 16);
        var ft = Blazor.platform.readInt32Field(d, 20);
        var tp = Blazor.platform.readInt32Field(d, 24);
        var st = Blazor.platform.readInt32Field(d, 28);
        var arr = Blazor.platform.readInt32Field(d, 32);

        var arrPtr = Blazor.platform.getArrayEntryPtr(arr, 0, 4);
        var arrLen = Blazor.platform.getArrayLength(arr);
        var dt = new Uint8Array(Module.HEAPU8.buffer, arrPtr, arrLen * st);

        gc.texImage2D(tg, lv, it, wh, ht, 0, ft, tp, dt);
    },

    TexImage2D2: function (uid, d)
    {
        var gc = nkJSObject.GetObject(uid);
        var tg = Blazor.platform.readInt32Field(d, 0);
        var lv = Blazor.platform.readInt32Field(d, 4);
        var it = Blazor.platform.readInt32Field(d, 8);
        var ft = Blazor.platform.readInt32Field(d, 12);
        var tp = Blazor.platform.readInt32Field(d, 16);

        var vid= Blazor.platform.readInt32Field(d, 20);
        var vi = nkJSObject.GetObject(vid);

        gc.texImage2D(tg, lv, it, ft, tp, vi);
    },

    TexSubImage2D1: function (uid, d)
    {
        var gc = nkJSObject.GetObject(uid);
        var tg = Blazor.platform.readInt32Field(d,  0);
        var lv = Blazor.platform.readInt32Field(d,  4);
        var xo = Blazor.platform.readInt32Field(d,  8);
        var yo = Blazor.platform.readInt32Field(d, 12);
        var wh = Blazor.platform.readInt32Field(d, 16);
        var ht = Blazor.platform.readInt32Field(d, 20);
        var ft = Blazor.platform.readInt32Field(d, 24);
        var tp = Blazor.platform.readInt32Field(d, 28);
        var st = Blazor.platform.readInt32Field(d, 32);
        var arr = Blazor.platform.readInt32Field(d,36);

        var arrPtr = Blazor.platform.getArrayEntryPtr(arr, 0, 4);
        var arrLen = Blazor.platform.getArrayLength(arr);
        var dt = new Uint8Array(Module.HEAPU8.buffer, arrPtr, arrLen * st);

        gc.texSubImage2D(tg, lv, xo, yo, wh, ht, ft, tp, dt);
    },
  
    CompressedTexImage2D: function (uid, d)
    {
        var gc = nkJSObject.GetObject(uid);
        var tg = Blazor.platform.readInt32Field(d, 0);
        var lv = Blazor.platform.readInt32Field(d, 4);
        var it = Blazor.platform.readInt32Field(d, 8);
        var wh = Blazor.platform.readInt32Field(d, 12);
        var ht = Blazor.platform.readInt32Field(d, 16);
        var st = Blazor.platform.readInt32Field(d, 20);
        var arr = Blazor.platform.readInt32Field(d, 24);

        var arrPtr = Blazor.platform.getArrayEntryPtr(arr, 0, 4);
        var arrLen = Blazor.platform.getArrayLength(arr);
        var dt = new Uint8Array(Module.HEAPU8.buffer, arrPtr, arrLen * st);

        gc.compressedTexImage2D(tg, lv, it, wh, ht, 0, dt);
    },

    CompressedTexImage2D1: function (uid, d)
    {
        var gc = nkJSObject.GetObject(uid);
        var tg = Blazor.platform.readInt32Field(d, 0);
        var lv = Blazor.platform.readInt32Field(d, 4);
        var it = Blazor.platform.readInt32Field(d, 8);
        var wh = Blazor.platform.readInt32Field(d, 12);
        var ht = Blazor.platform.readInt32Field(d, 16);
        var st = Blazor.platform.readInt32Field(d, 20);
        var arr = Blazor.platform.readInt32Field(d, 24);
        var ix = Blazor.platform.readInt32Field(d, 28);
        var ot = Blazor.platform.readInt32Field(d, 32);

        var arrPtr = Blazor.platform.getArrayEntryPtr(arr, 0, 4);
        //var arrLen = Blazor.platform.getArrayLength(arr);
        var dt = new Uint8Array(Module.HEAPU8.buffer, arrPtr + ix * st, ot * st);

        gc.compressedTexImage2D(tg, lv, it, wh, ht, 0, dt);
    },

    ReadPixels: function (uid, d)
    {
        var gc = nkJSObject.GetObject(uid);
        var x  = Blazor.platform.readInt32Field(d,  0);
        var y  = Blazor.platform.readInt32Field(d,  4);
        var w  = Blazor.platform.readInt32Field(d,  8);
        var h  = Blazor.platform.readInt32Field(d, 12);
        var ft = Blazor.platform.readInt32Field(d, 16);
        var tp = Blazor.platform.readInt32Field(d, 20);
        var st = Blazor.platform.readInt32Field(d, 24);
        var arr = Blazor.platform.readInt32Field(d, 28);

        var arrPtr = Blazor.platform.getArrayEntryPtr(arr, 0, 4);
        var arrLen = Blazor.platform.getArrayLength(arr);
        var dt = new Uint8Array(Module.HEAPU8.buffer, arrPtr, arrLen * st);

        gc.readPixels(x, y, w, h, ft, tp, dt);
    },

    ReadPixels1: function (uid, d)
    {
        var gc = nkJSObject.GetObject(uid);
        var x = Blazor.platform.readInt32Field(d, 0);
        var y = Blazor.platform.readInt32Field(d, 4);
        var w = Blazor.platform.readInt32Field(d, 8);
        var h = Blazor.platform.readInt32Field(d, 12);
        var ft = Blazor.platform.readInt32Field(d, 16);
        var tp = Blazor.platform.readInt32Field(d, 20);
        var st = Blazor.platform.readInt32Field(d, 24);
        var arr = Blazor.platform.readInt32Field(d, 28);
        var ix = Blazor.platform.readInt32Field(d, 32);
        var ot = Blazor.platform.readInt32Field(d, 36);

        var arrPtr = Blazor.platform.getArrayEntryPtr(arr, 0, 4);
        //var arrLen = Blazor.platform.getArrayLength(arr);
        var dt = new Uint8Array(Module.HEAPU8.buffer, arrPtr + ix * st, ot * st);

        gc.readPixels(x, y, w, h, ft, tp, dt);
    },

    TexParameteri: function (uid, d)
    {
        var gc = nkJSObject.GetObject(uid);
        var tg = Blazor.platform.readInt32Field(d, 0);
        var pn = Blazor.platform.readInt32Field(d, 4);
        var pm = Blazor.platform.readInt32Field(d, 8);
        gc.texParameteri(tg, pn, pm);
    },

    PixelStorei: function (uid, d)
    {
        var gc = nkJSObject.GetObject(uid);
        var pn = Blazor.platform.readInt32Field(d, 0);
        var pm = Blazor.platform.readInt32Field(d, 4);
        gc.pixelStorei(pn, pm);
    },

    BindTexture: function (uid, d)
    {
        var gc = nkJSObject.GetObject(uid);
        var tg = Blazor.platform.readInt32Field(d, 0);
        var txuid = Blazor.platform.readInt32Field(d, 4);
        var tx = (txuid != -1) ? nkJSObject.GetObject(txuid) : null;
        gc.bindTexture(tg, tx);
    },

    BindBuffer: function (uid, d)
    {
        var gc = nkJSObject.GetObject(uid);
        var bt = Blazor.platform.readInt32Field(d, 0);
        var bfuid = Blazor.platform.readInt32Field(d, 4);
        var bf = nkJSObject.GetObject(bfuid);
        gc.bindBuffer(bt, bf);
    },
    
    BindFramebuffer: function (uid, d)
    {
        var gc = nkJSObject.GetObject(uid);
        var bt = Blazor.platform.readInt32Field(d, 0);
        var bfuid = Blazor.platform.readInt32Field(d, 4);
        var bf = (bfuid != -1) ? nkJSObject.GetObject(bfuid) : null;
        gc.bindFramebuffer(bt, bf);
    },

    BindRenderbuffer: function (uid, d)
    {
        var gc = nkJSObject.GetObject(uid);
        var bt = Blazor.platform.readInt32Field(d, 0);
        var bfuid = Blazor.platform.readInt32Field(d, 4);
        var bf = nkJSObject.GetObject(bfuid);
        gc.bindRenderbuffer(bt, bf);
    },
 
    FramebufferRenderbuffer: function (uid, d)
    {
        var gc = nkJSObject.GetObject(uid);
        var ft = Blazor.platform.readInt32Field(d, 0);
        var ap = Blazor.platform.readInt32Field(d, 4);
        var rt = Blazor.platform.readInt32Field(d, 8);
        var rbuid = Blazor.platform.readInt32Field(d, 12);
        var rb =  (rbuid != -1) ? nkJSObject.GetObject(rbuid) : null;
        gc.framebufferRenderbuffer(ft, ap, rt, rb);
    },
 
    FramebufferTexture2D: function (uid, d)
    {
        var gc = nkJSObject.GetObject(uid);
        var ft = Blazor.platform.readInt32Field(d, 0);
        var ap = Blazor.platform.readInt32Field(d, 4);
        var tt = Blazor.platform.readInt32Field(d, 8);
        var tbuid = Blazor.platform.readInt32Field(d, 12);
        var tb = nkJSObject.GetObject(tbuid);
        var lv = 0;
        gc.framebufferTexture2D(ft, ap, tt, tb, lv);
    },

    RenderbufferStorage: function (uid, d)
    {
        var gc = nkJSObject.GetObject(uid);
        var bt = Blazor.platform.readInt32Field(d,  0);
        var fm = Blazor.platform.readInt32Field(d,  4);
        var w  = Blazor.platform.readInt32Field(d,  8);
        var h  = Blazor.platform.readInt32Field(d, 12);
        gc.renderbufferStorage(bt, fm, w, h);
    },

    CheckFramebufferStatus: function (uid, d)
    {
        var gc = nkJSObject.GetObject(uid);
        var ft = Blazor.platform.readInt32Field(d, 0);
        return gc.checkFramebufferStatus(ft);
    },

    GenerateMipmap: function (uid, d)
    {
        var gc = nkJSObject.GetObject(uid);
        var tg = Blazor.platform.readInt32Field(d, 0);
        gc.generateMipmap(tg);
    },

    AttachShader: function (uid, d)
    {
        var gc = nkJSObject.GetObject(uid);
        var pguid = Blazor.platform.readInt32Field(d, 0);
        var shuid = Blazor.platform.readInt32Field(d, 4);
        var pg = nkJSObject.GetObject(pguid);
        var sh = nkJSObject.GetObject(shuid);
        gc.attachShader(pg, sh);
    },

    GetProgramInfoLog: function (uid, d)
    {        
        var gc = nkJSObject.GetObject(uid);
        var pguid = Blazor.platform.readInt32Field(d, 0);
        var pg = nkJSObject.GetObject(pguid);
        var nf = gc.getProgramInfoLog(pg);
        return BINDING.js_to_mono_obj(nf);
    },

    GetShaderInfoLog: function (uid, d)
    {
        var gc = nkJSObject.GetObject(uid);
        var shuid = Blazor.platform.readInt32Field(d, 0);
        var sh = nkJSObject.GetObject(shuid);
        var nf = gc.getShaderInfoLog(sh);
        return BINDING.js_to_mono_obj(nf);
    },

    LinkProgram: function (uid, d)
    {
        var gc = nkJSObject.GetObject(uid);
        var pguid = Blazor.platform.readInt32Field(d, 0);
        var pg = nkJSObject.GetObject(pguid);
        gc.linkProgram(pg);
    },

    BufferData: function (uid, d)
    {
        var gc = nkJSObject.GetObject(uid);
        var bt = Blazor.platform.readInt32Field(d, 0);
        var sz = Blazor.platform.readInt32Field(d, 4);
        var us = Blazor.platform.readInt32Field(d, 8);
        gc.bufferData(bt, sz, us);
    },

    BufferData1: function (uid, d)
    {
        var gc = nkJSObject.GetObject(uid);
        var bt = Blazor.platform.readInt32Field(d, 0);
        var us = Blazor.platform.readInt32Field(d, 4);
        var st = Blazor.platform.readInt32Field(d, 8);
        var arr = Blazor.platform.readInt32Field(d, 12);

        var arrPtr = Blazor.platform.getArrayEntryPtr(arr, 0, 4);
        var arrLen = Blazor.platform.getArrayLength(arr);
        var dt = new Float32Array(Module.HEAPU8.buffer, arrPtr, arrLen * st);

        gc.bufferData(bt, dt, us);
    },

    BufferSubData: function (uid, d)
    {
        var gc = nkJSObject.GetObject(uid);
        var bt = Blazor.platform.readInt32Field(d, 0);
        var of = Blazor.platform.readInt32Field(d, 4);
        var ln = Blazor.platform.readInt32Field(d, 8);
        var st = Blazor.platform.readInt32Field(d, 12);
        var arr = Blazor.platform.readInt32Field(d, 16);

        var arrPtr = Blazor.platform.getArrayEntryPtr(arr, 0, 4);
        //var arrLen = Blazor.platform.getArrayLength(arr);
        var dt = new Uint8Array(Module.HEAPU8.buffer, arrPtr, ln * st);

        gc.bufferSubData(bt, of, dt);
    },

    BufferSubData1: function (uid, d)
    {
        var gc = nkJSObject.GetObject(uid);
        var bt = Blazor.platform.readInt32Field(d, 0);
        var of = Blazor.platform.readInt32Field(d, 4);
        var si = Blazor.platform.readInt32Field(d, 8);
        var ln = Blazor.platform.readInt32Field(d, 12);
        var st = Blazor.platform.readInt32Field(d, 16);
        var arr = Blazor.platform.readInt32Field(d, 20);

        var arrPtr = Blazor.platform.getArrayEntryPtr(arr, 0, 4);
        //var arrLen = Blazor.platform.getArrayLength(arr);
        var dt = new Uint8Array(Module.HEAPU8.buffer, arrPtr + si * st, ln * st);

        gc.bufferSubData(bt, of, dt);
    },

    VertexAttribPointer: function (uid, d)
    {
        var gc = nkJSObject.GetObject(uid);
        var ix = Blazor.platform.readInt32Field(d, 0);
        var sz = Blazor.platform.readInt32Field(d, 4);
        var tp = Blazor.platform.readInt32Field(d, 8);
        var nr = Blazor.platform.readInt32Field(d, 12) !== 0;
        var st = Blazor.platform.readInt32Field(d, 16);
        var of = Blazor.platform.readInt32Field(d, 20);
        gc.vertexAttribPointer(ix, sz, tp, nr, st, of);
    },

    EnableVertexAttribArray: function (uid, d)
    {
        var gc = nkJSObject.GetObject(uid);
        var ix = Blazor.platform.readInt32Field(d, 0);
        gc.enableVertexAttribArray(ix);
    },

    DisableVertexAttribArray: function (uid, d)
    {
        var gc = nkJSObject.GetObject(uid);
        var ix = Blazor.platform.readInt32Field(d, 0);
        gc.disableVertexAttribArray(ix);
    },

    UseProgram: function (uid, d)
    {
        var gc = nkJSObject.GetObject(uid);
        var pguid = Blazor.platform.readInt32Field(d, 0);
        var pg = nkJSObject.GetObject(pguid);
        gc.useProgram(pg);
    },

    DrawArrays: function (uid, d)
    {
        var gc = nkJSObject.GetObject(uid);
        var md = Blazor.platform.readInt32Field(d,  0);
        var of = Blazor.platform.readInt32Field(d,  4);
        var ct = Blazor.platform.readInt32Field(d,  8);

        gc.drawArrays(md, of, ct);
    },

    DrawElements: function (uid, d)
    {
        var gc = nkJSObject.GetObject(uid);
        var md = Blazor.platform.readInt32Field(d,  0);
        var ct = Blazor.platform.readInt32Field(d,  4);
        var tp = Blazor.platform.readInt32Field(d,  8);
        var of = Blazor.platform.readInt32Field(d, 12);

        gc.drawElements(md, ct, tp, of);
    },

    ActiveTexture: function (uid, d)
    {
        var gc = nkJSObject.GetObject(uid);
        var tu = Blazor.platform.readInt32Field(d, 0);
        
        gc.activeTexture(tu);
    },

    Flush: function (uid, d)
    {
        var gc = nkJSObject.GetObject(uid);
        gc.flush();
    },
    Finish: function (uid, d)
    {
        var gc = nkJSObject.GetObject(uid);
        gc.finish();
    },

    GetExtension: function (uid, d)
    {
        var gc = nkJSObject.GetObject(uid);
        var nm = Blazor.platform.readStringField(d, 0);

        return gc.getExtension(nm) !== null;
    },

    GetError: function (uid, d)
    {
        var gc = nkJSObject.GetObject(uid);
        return gc.getError();
    },

};

window.nkCanvasGL2Context =
{
    DrawRangeElements: function (uid, d)
    {
        var gc = nkJSObject.GetObject(uid);
        var md = Blazor.platform.readInt32Field(d, 0);
        var st = Blazor.platform.readInt32Field(d, 4);
        var en = Blazor.platform.readInt32Field(d, 8);
        var ct = Blazor.platform.readInt32Field(d, 12);
        var tp = Blazor.platform.readInt32Field(d, 16);
        var of = Blazor.platform.readInt32Field(d, 20);

        gc.drawRangeElements(md, st, en, ct, tp, of);
    },
};
