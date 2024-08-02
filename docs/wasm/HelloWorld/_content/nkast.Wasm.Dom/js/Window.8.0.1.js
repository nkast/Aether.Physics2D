window.nkWindow =
{
    GetDocument: function(uid)
    {
        var w = nkJSObject.GetObject(uid);
        var d = w.document;
        return nkJSObject.RegisterObject(d);
    },
    GetNavigator: function(uid)
    {
        var w = nkJSObject.GetObject(uid);
        var n = w.navigator;
        return nkJSObject.RegisterObject(n);
    },
    GetInnerWidth: function(uid)
    {
        var w = nkJSObject.GetObject(uid);
        return w.innerWidth;
    },
    GetInnerHeight: function(uid)
    {
        var w = nkJSObject.GetObject(uid);
        return w.innerHeight;
    },
    GetIsSecureContext: function (uid)
    {
        var w = nkJSObject.GetObject(uid);
        return w.isSecureContext;
    },
    RegisterEvents: function(uid)
    {
        var w = nkJSObject.GetObject(uid);

        window.onresize = function(event)
        {
            DotNet.invokeMethod('nkast.Wasm.Dom', 'JsWindowOnResize', uid);
        };
        window.onfocus = function(event)
        {
            DotNet.invokeMethod('nkast.Wasm.Dom', 'JsWindowOnFocus', uid);
        };
        window.onblur = function(event)
        {
            DotNet.invokeMethod('nkast.Wasm.Dom', 'JsWindowOnBlur', uid);
        };
        window.onmousemove = function(event)
        {
            DotNet.invokeMethod('nkast.Wasm.Dom', 'JsWindowOnMouseMove', uid,
                event.clientX, event.clientY);
        };
        window.onmousedown = function(event)
        {
            DotNet.invokeMethod('nkast.Wasm.Dom', 'JsWindowOnMouseDown', uid,
                event.clientX, event.clientY, event.buttons);
        };
        window.onmouseup = function(event)
        {
            DotNet.invokeMethod('nkast.Wasm.Dom', 'JsWindowOnMouseUp', uid,
                event.clientX, event.clientY, event.buttons);
        };
        window.onmousewheel = function(event)
        {
            DotNet.invokeMethod('nkast.Wasm.Dom', 'JsWindowOnMouseWheel', uid,
                event.deltaX, event.deltaY, event.deltaZ,  event.deltaMode);
        };
        window.onkeydown = function(event)
        {
            DotNet.invokeMethod('nkast.Wasm.Dom', 'JsWindowOnKeyDown', uid,
                event.key.charCodeAt(0), event.keyCode, event.location);
        };
        window.onkeyup = function(event)
        {
            DotNet.invokeMethod('nkast.Wasm.Dom', 'JsWindowOnKeyUp', uid,
                event.key.charCodeAt(0), event.keyCode, event.location);
        };

        if ('ontouchstart' in window)
        {
            window.ontouchstart = function (event)
            {
                event.preventDefault();
                for (var i = 0; i < event.changedTouches.length; i++)
                {
                    var touch = event.changedTouches[i];
                    DotNet.invokeMethod('nkast.Wasm.Dom', 'JsWindowOnTouchStart', uid,
                        touch.clientX, touch.clientY, touch.identifier);
                }
            };
            window.ontouchmove = function (event)
            {
                event.preventDefault();
                for (var i = 0; i < event.changedTouches.length; i++)
                {
                    var touch = event.changedTouches[i];
                    DotNet.invokeMethod('nkast.Wasm.Dom', 'JsWindowOnTouchMove', uid,
                        touch.clientX, touch.clientY, touch.identifier);
                }
            };
            window.ontouchend = function (event)
            {
                event.preventDefault();
                for (var i = 0; i < event.changedTouches.length; i++)
                {
                    var touch = event.changedTouches[i];
                    DotNet.invokeMethod('nkast.Wasm.Dom', 'JsWindowOnTouchEnd', uid,
                        touch.clientX, touch.clientY, touch.identifier);
                }
            };
            window.ontouchcancel = function (event)
            {
                DotNet.invokeMethod('nkast.Wasm.Dom', 'JsWindowOnTouchCancel', uid);
            };
        }

        window.addEventListener("gamepadconnected", (event) =>
        {
            DotNet.invokeMethod('nkast.Wasm.Dom', 'JsWindowGamepadConnected', uid,
                event.gamepad.index);
        });
        window.addEventListener("gamepaddisconnected", (event) =>
        {
            DotNet.invokeMethod('nkast.Wasm.Dom', 'JsWindowGamepadDisconnected', uid,
                event.gamepad.index);
        });
        
    }
};
