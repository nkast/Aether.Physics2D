window.nkCanvas2dContext =
{
    GetFillStyle: function(uid)
    {
        var dc = nkJSObject.GetObject(uid);
        return BINDING.js_to_mono_obj(dc.fillStyle);
    },
    SetFillStyle: function(uid,d)
    {
        var dc = nkJSObject.GetObject(uid);
        dc.fillStyle = Blazor.platform.readStringField(d, 0);
    },

    GetStrokeStyle: function(uid)
    {
        var dc = nkJSObject.GetObject(uid);
        return BINDING.js_to_mono_obj(dc.strokeStyle);
    },
    SetStrokeStyle: function(uid,d)
    {
        var dc = nkJSObject.GetObject(uid);
        dc.strokeStyle = Blazor.platform.readStringField(d, 0);
    },

    GetFont: function(uid)
    {
        var dc = nkJSObject.GetObject(uid);
        return BINDING.js_to_mono_obj(dc.font);
    },
    SetFont: function (uid,d)
    {
        var dc = nkJSObject.GetObject(uid);
        dc.font = Blazor.platform.readStringField(d, 0);
    },

    GetTextAlign: function(uid)
    {
        var dc = nkJSObject.GetObject(uid);
        return BINDING.js_to_mono_obj(dc.textAlign);
    },
    SetTextAlign: function(uid,d)
    {
        var dc = nkJSObject.GetObject(uid);
        dc.textAlign = Blazor.platform.readStringField(d, 0);
    },

    GetTextBaseline: function(uid)
    {
        var dc = nkJSObject.GetObject(uid);
        return BINDING.js_to_mono_obj(dc.textBaseline);
    },
    SetTextBaseline: function(uid,d)
    {
        var dc = nkJSObject.GetObject(uid);
        dc.textBaseline = Blazor.platform.readStringField(d, 0);
    },

    GetLineWidth: function(uid)
    {
        var dc = nkJSObject.GetObject(uid);
        return BINDING.js_to_mono_obj(dc.lineWidth.toString());
    },
    SetLineWidth: function (uid,d)
    {
        var dc = nkJSObject.GetObject(uid);
        dc.lineWidth = Blazor.platform.readFloatField(d, 0);
    },

    GetLineCap: function(uid)
    {
        var dc = nkJSObject.GetObject(uid);
        return BINDING.js_to_mono_obj(dc.lineCap);
    },
    SetLineCap: function(uid,d)
    {
        var dc = nkJSObject.GetObject(uid);
        dc.lineCap = Blazor.platform.readStringField(d, 0);
    },

    GetMiterLimit: function(uid)
    {
        var dc = nkJSObject.GetObject(uid);
        return BINDING.js_to_mono_obj(dc.miterLimit.toString());
    },
    SetMiterLimit: function(uid,d)
    {
        var dc = nkJSObject.GetObject(uid);
        dc.miterLimit = Blazor.platform.readFloatField(d, 0);
    },

    GetGlobalAlpha: function(uid)
    {
        var dc = nkJSObject.GetObject(uid);
        return BINDING.js_to_mono_obj(dc.globalAlpha.toString());
    },
    SetGlobalAlpha: function(uid,d)
    {
        var dc = nkJSObject.GetObject(uid);
        dc.globalAlpha = Blazor.platform.readFloatField(d, 0);
    },

    GetGlobalCompositeOperation: function(uid)
    {
        var dc = nkJSObject.GetObject(uid);
        return BINDING.js_to_mono_obj(dc.globalCompositeOperation);
    },
    SetGlobalCompositeOperation: function (uid,d)
    {
        var dc = nkJSObject.GetObject(uid);
        dc.globalCompositeOperation = Blazor.platform.readStringField(d, 0);
    },

    GetImageSmoothingEnabled: function(uid)
    {
        var dc = nkJSObject.GetObject(uid);
        return dc.imageSmoothingEnabled;
    },
    SetImageSmoothingEnabled: function (uid,d)
    {
        var dc = nkJSObject.GetObject(uid);
        var s = Blazor.platform.readInt32Field(d, 0);
        dc.imageSmoothingEnabled = s !== 0;
    },

    GetShadowBlur: function(uid)
    {
        var dc = nkJSObject.GetObject(uid);
        return BINDING.js_to_mono_obj(dc.shadowBlur.toString());
    },
    SetShadowBlur: function (uid,d)
    {
        var dc = nkJSObject.GetObject(uid);
        dc.shadowBlur = Blazor.platform.readFloatField(d, 0);
    },

    GetShadowColor: function(uid)
    {
        var dc = nkJSObject.GetObject(uid);
        return BINDING.js_to_mono_obj(dc.shadowColor);
    },
    SetShadowColor: function (uid,d)
    {
        var dc = nkJSObject.GetObject(uid);
        dc.shadowColor = Blazor.platform.readStringField(d, 0);
    },

    GetShadowOffsetX: function(uid)
    {
        var dc = nkJSObject.GetObject(uid);
        return BINDING.js_to_mono_obj(dc.shadowOffsetX.toString());
    },
    SetShadowOffsetX: function (uid,d)
    {
        var dc = nkJSObject.GetObject(uid);
        dc.shadowOffsetX = Blazor.platform.readFloatField(d, 0);
    },

    GetShadowOffsetY: function(uid)
    {
        var dc = nkJSObject.GetObject(uid);
        return BINDING.js_to_mono_obj(dc.shadowOffsetY.toString());
    },
    SetShadowOffsetY: function (uid,d)
    {
        var dc = nkJSObject.GetObject(uid);
        dc.shadowOffsetY = Blazor.platform.readFloatField(d, 0);
    },

    ClearRect: function(uid,d)
    {
        var dc = nkJSObject.GetObject(uid);
        var x = Blazor.platform.readFloatField(d,  0);
        var y = Blazor.platform.readFloatField(d,  4);
        var w = Blazor.platform.readFloatField(d,  8);
        var h = Blazor.platform.readFloatField(d, 12);
        dc.clearRect(x, y, w, h);
    },
    FillRect: function(uid,d)
    {
        var dc = nkJSObject.GetObject(uid);
        var x = Blazor.platform.readFloatField(d,  0);
        var y = Blazor.platform.readFloatField(d,  4);
        var w = Blazor.platform.readFloatField(d,  8);
        var h = Blazor.platform.readFloatField(d, 12);
        dc.fillRect(x, y, w, h);
    },
    StrokeRect: function(uid,d)
    {
        var dc = nkJSObject.GetObject(uid);
        var x = Blazor.platform.readFloatField(d,  0);
        var y = Blazor.platform.readFloatField(d,  4);
        var w = Blazor.platform.readFloatField(d,  8);
        var h = Blazor.platform.readFloatField(d, 12);
        dc.strokeRect(x, y, w, h);
    },

    DrawImage: function(uid,d)
    {
        var dc = nkJSObject.GetObject(uid);
        var id = Blazor.platform.readStringField(d, 0);
        var dx = Blazor.platform.readFloatField(d,  4);
        var dy = Blazor.platform.readFloatField(d,  8);
        var img = document.getElementById(id);
        dc.drawImage(img, dx, dy);
    },

    DrawImage1: function(uid,d)
    {
        var dc = nkJSObject.GetObject(uid);
        var id = Blazor.platform.readStringField(d, 0);
        var dx = Blazor.platform.readFloatField(d,  4);
        var dy = Blazor.platform.readFloatField(d,  8);
        var dw = Blazor.platform.readFloatField(d, 12);
        var dh = Blazor.platform.readFloatField(d, 16);
        var img = document.getElementById(id);
        dc.drawImage(img, dx, dy, dw, dh);
    },

    DrawImage2: function(uid,d)
    {
        var dc = nkJSObject.GetObject(uid);
        var id = Blazor.platform.readStringField(d, 0);
        var sx = Blazor.platform.readFloatField(d,  4);
        var sy = Blazor.platform.readFloatField(d,  8);
        var sw = Blazor.platform.readFloatField(d, 12);
        var sh = Blazor.platform.readFloatField(d, 16);
        var dx = Blazor.platform.readFloatField(d, 20);
        var dy = Blazor.platform.readFloatField(d, 24);
        var dw = Blazor.platform.readFloatField(d, 28);
        var dh = Blazor.platform.readFloatField(d, 32);
        var img = document.getElementById(id);
        dc.drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh);
    },

    FillText: function(uid,d)
    {
        var dc = nkJSObject.GetObject(uid);
        var t = Blazor.platform.readStringField(d, 0);
        var x = Blazor.platform.readFloatField(d,  4);
        var y = Blazor.platform.readFloatField(d,  8);
        dc.fillText(t, x, y);
    },
    FillText1: function (uid,d)
    {
        var dc = nkJSObject.GetObject(uid);
        var t = Blazor.platform.readStringField(d, 0);
        var x = Blazor.platform.readFloatField(d,  4);
        var y = Blazor.platform.readFloatField(d,  8);
        var w = Blazor.platform.readFloatField(d, 12);
        dc.fillText(t, x, y, w);
    },
    StrokeText: function(uid,d)
    {
        var dc = nkJSObject.GetObject(uid);
        var t = Blazor.platform.readStringField(d, 0);
        var x = Blazor.platform.readFloatField(d,  4);
        var y = Blazor.platform.readFloatField(d,  8);
        dc.strokeText(t, x, y);
    },
    StrokeText1: function (uid,d)
    {
        var dc = nkJSObject.GetObject(uid);
        var t = Blazor.platform.readStringField(d, 0);
        var x = Blazor.platform.readFloatField(d,  4);
        var y = Blazor.platform.readFloatField(d,  8);
        var w = Blazor.platform.readFloatField(d, 12);
        dc.strokeText(t, x, y, w);
    },
    MeasureText: function (uid,d)
    {
        var dc = nkJSObject.GetObject(uid);
        var t = Blazor.platform.readStringField(d, 0);
        var m = dc.measureText(t);
        return BINDING.js_to_mono_obj(m.width.toString());
    },

    GetLineDash: function(uid)
    {
        var dc = nkJSObject.GetObject(uid);
        var ds = dc.getLineDash();
        return BINDING.js_to_mono_obj(ds.toString());
    },
    SetLineDash: function(uid,d)
    {
        var dc = nkJSObject.GetObject(uid);
        var a = Blazor.platform.readObject(d, 0);
        var cnt = Blazor.platform.getArrayLength(a);
        var ja = [];
        for (var ind = 0; ind < cnt; ind++)
        {
            var pai = Blazor.platform.getArrayEntryPtr(a, ind, 4);
            var aiv = Blazor.platform.readFloatField(pai, 0);
            ja.push(aiv);
        }
        dc.setLineDash(ja);
    },

    BeginPath: function(uid)
    {
        var dc = nkJSObject.GetObject(uid);
        dc.beginPath();
    },
    ClosePath: function(uid)
    {
        var dc = nkJSObject.GetObject(uid);
        dc.closePath();
    },

    IsPointInPath: function(uid,d)
    {
        var dc = nkJSObject.GetObject(uid);
        var x = Blazor.platform.readFloatField(d, 0);
        var y = Blazor.platform.readFloatField(d, 4);
        var e = Blazor.platform.readInt32Field(d, 8);
        return dc.isPointInPath(x, y, e === 0 ? "nonzero" : "evenodd");
    },
    IsPointInStroke: function(uid,d)
    {
        var dc = nkJSObject.GetObject(uid);
        var x = Blazor.platform.readFloatField(d, 0);
        var y = Blazor.platform.readFloatField(d, 4);
        return dc.isPointInStroke(x, y);
    },

    MoveTo: function(uid,d)
    {
        var dc = nkJSObject.GetObject(uid);
        var x = Blazor.platform.readFloatField(d, 0);
        var y = Blazor.platform.readFloatField(d, 4);
        dc.moveTo(x, y);
    },
    LineTo: function(uid,d)
    {
        var dc = nkJSObject.GetObject(uid);
        var x = Blazor.platform.readFloatField(d, 0);
        var y = Blazor.platform.readFloatField(d, 4);
        dc.lineTo(x, y);
    },
    BezierCurveTo: function(uid,d)
    {
        var dc = nkJSObject.GetObject(uid);
        var cp1X = Blazor.platform.readFloatField(d,  0);
        var cp1Y = Blazor.platform.readFloatField(d,  4);
        var cp2X = Blazor.platform.readFloatField(d,  8);
        var cp2Y = Blazor.platform.readFloatField(d, 12);
        var x    = Blazor.platform.readFloatField(d, 16);
        var y    = Blazor.platform.readFloatField(d, 20);
        dc.bezierCurveTo(cp1X, cp1Y, cp2X, cp2Y, x, y);
    },
    QuadraticCurveTo: function (uid,d)
    {
        var dc = nkJSObject.GetObject(uid);
        var cpX = Blazor.platform.readFloatField(d,0);
        var cpY = Blazor.platform.readFloatField(d,4);
        var x = Blazor.platform.readFloatField(d,  8);
        var y = Blazor.platform.readFloatField(d, 12);
        dc.quadraticCurveTo(cpX, cpY, x, y);
    },
    Arc: function(uid,d)
    {
        var dc = nkJSObject.GetObject(uid);
        var x = Blazor.platform.readFloatField(d,  0);
        var y = Blazor.platform.readFloatField(d,  4);
        var r = Blazor.platform.readFloatField(d,  8);
        var s = Blazor.platform.readFloatField(d, 12);
        var e = Blazor.platform.readFloatField(d, 16);
        var a = Blazor.platform.readInt32Field(d, 20);
        dc.arc(x, y, r, s, e, a !== 0);
    },
    ArcTo: function(uid,d)
    {
        var dc = nkJSObject.GetObject(uid);
        var x1 = Blazor.platform.readFloatField(d,  0);
        var y1 = Blazor.platform.readFloatField(d,  4);
        var x2 = Blazor.platform.readFloatField(d,  8);
        var y2 = Blazor.platform.readFloatField(d, 12);
        var r  = Blazor.platform.readFloatField(d, 16);
        dc.arcTo(x1, y1, x2, y2, r);
    },
    Rect: function (uid,d)
    {
        var dc = nkJSObject.GetObject(uid);
        var x = Blazor.platform.readFloatField(d,  0);
        var y = Blazor.platform.readFloatField(d,  4);
        var w = Blazor.platform.readFloatField(d,  8);
        var h = Blazor.platform.readFloatField(d, 12);
        dc.rect(x, y, w, h);
    },
    Ellipse: function(uid,d)
    {
        var dc = nkJSObject.GetObject(uid);
        var x  = Blazor.platform.readFloatField(d,  0);
        var y  = Blazor.platform.readFloatField(d,  4);
        var rx = Blazor.platform.readFloatField(d,  8);
        var ry = Blazor.platform.readFloatField(d, 12);
        var ro = Blazor.platform.readFloatField(d, 16);
        var s  = Blazor.platform.readFloatField(d, 20);
        var e  = Blazor.platform.readFloatField(d, 24);
        var a  = Blazor.platform.readInt32Field(d, 28);
        dc.ellipse(x, y, rx, ry, ro, s, e, a !== 0);
    },

    Fill: function(uid)
    {
        var dc = nkJSObject.GetObject(uid);
        dc.fill();
    },
    Stroke: function(uid)
    {
        var dc = nkJSObject.GetObject(uid);
        dc.stroke();
    },
    Clip: function(uid)
    {
        var dc = nkJSObject.GetObject(uid);
        dc.clip();
    },

    Rotate: function(uid,d)
    {
        var dc = nkJSObject.GetObject(uid);
        dc.rotate(Blazor.platform.readFloatField(d, 0));
    },
    Scale: function(uid,d)
    {
        var dc = nkJSObject.GetObject(uid);
        var x = Blazor.platform.readFloatField(d, 0);
        var y = Blazor.platform.readFloatField(d, 4);
        dc.scale(x, y);
    },
    Translate: function(uid,d)
    {
        var dc = nkJSObject.GetObject(uid);
        var x = Blazor.platform.readFloatField(d, 0);
        var y = Blazor.platform.readFloatField(d, 4);
        dc.translate(x, y);
    },
    Transform: function(uid,d)
    {
        var dc = nkJSObject.GetObject(uid);
        var m11 = Blazor.platform.readFloatField(d,  0);
        var m12 = Blazor.platform.readFloatField(d,  4);
        var m21 = Blazor.platform.readFloatField(d,  8);
        var m22 = Blazor.platform.readFloatField(d, 12);
        var dx  = Blazor.platform.readFloatField(d, 16);
        var dy  = Blazor.platform.readFloatField(d, 20);
        dc.transform(m11, m12, m21, m22, dx, dy);
    },
    SetTransform: function(uid,d)
    {
        var dc = nkJSObject.GetObject(uid);
        var m11 = Blazor.platform.readFloatField(d,  0);
        var m12 = Blazor.platform.readFloatField(d,  4);
        var m21 = Blazor.platform.readFloatField(d,  8);
        var m22 = Blazor.platform.readFloatField(d, 12);
        var dx  = Blazor.platform.readFloatField(d, 16);
        var dy  = Blazor.platform.readFloatField(d, 20);
        dc.setTransform(m11, m12, m21, m22, dx, dy);
    },
    GetTransform: function(uid)
    {
        var dc = nkJSObject.GetObject(uid);
        var mx = dc.getTransform();
        var mxf32arr = mx.toFloat32Array();
        var mxf32str = mxf32arr.toString();
        return BINDING.js_to_mono_obj(mxf32str);
    },

    Save: function(uid)
    {
        var dc = nkJSObject.GetObject(uid);
        dc.save();
    },
    Restore: function(uid)
    {
        var dc = nkJSObject.GetObject(uid);
        dc.restore();
    }
};