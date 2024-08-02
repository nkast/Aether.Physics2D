window.nkNavigator =
{
    gamepadMap: [],

    GetUserAgent: function (uid)
    {
        var nv = nkJSObject.GetObject(uid);
        return BINDING.js_to_mono_obj(nv.userAgent);
    },
    GetMaxTouchPoints: function (uid)
    {
        var nv = nkJSObject.GetObject(uid);
        return nv.maxTouchPoints;
    },
    GetGamepads: function(uid)
    {
        var nv = nkJSObject.GetObject(uid);
        var gps = nv.getGamepads();
        var uids = [];
        for (var i = 0; i < gps.length; i++)
        {
            var gp = gps[i];
            if (gp === null || gp === undefined)
            {
                nkNavigator.gamepadMap[i] = 0;
                uids[i] = 0;
            }
            else
            {
                var prevgp = null;
                if (nkNavigator.gamepadMap[i] !== 0 && nkNavigator.gamepadMap[i] !== undefined)
                    prevgp = nkJSObject.GetObject(nkNavigator.gamepadMap[i]);

                if (gp !== prevgp)
                    nkNavigator.gamepadMap[i] = nkJSObject.RegisterObject(gp);

                uids[i] = nkNavigator.gamepadMap[i];
            }
        }
        return BINDING.js_to_mono_obj(uids.toString());
    }
};
