window.nkGamepad =
{

    GetId: function (uid)
    {
        var gp = nkJSObject.GetObject(uid);
        return BINDING.js_to_mono_obj(gp.id);
    },
    GetIndex: function (uid, d)
    {
        var gp = nkJSObject.GetObject(uid);
        return gp.index;
    },
    GetConnected: function (uid, d)
    {
        var gp = nkJSObject.GetObject(uid);
        return gp.connected;
    },
    GetMapping: function (uid, d)
    {
        var gp = nkJSObject.GetObject(uid);
        return BINDING.js_to_mono_obj(gp.mapping);
    },
    GetTimestamp: function (uid, d)
    {
        var gp = nkJSObject.GetObject(uid);
        return Math.floor(gp.timestamp*1000);
    },
    GetButtons: function (uid, d)
    {
        var gp = nkJSObject.GetObject(uid);
        var buttons = gp.buttons;
        var btns = [];
        for (var i = 0; i < buttons.length; i++)
        {
            btns[i*3+0] = buttons[i].value;
            btns[i*3+1] = (buttons[i].pressed) ? 1 : 0;
            if (buttons[i].touched2 == undefined)
                btns[i*3+2] = 0;
            else
                btns[i*3+2] = (buttons[i].touched) ? 1 : 0;
        }
        var str = btns.toString();

        return BINDING.js_to_mono_obj(str);
    },
    GetAxes: function (uid, d)
    {
        var gp = nkJSObject.GetObject(uid);
        var axes = gp.axes;
        var str = axes.toString();

        return BINDING.js_to_mono_obj(str);
    }
};


