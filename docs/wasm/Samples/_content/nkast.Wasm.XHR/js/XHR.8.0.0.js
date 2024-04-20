window.nkXHR =
{
    Create: function()
    {
        var xhr = new XMLHttpRequest();
        return nkJSObject.RegisterObject(xhr);
    },

    Open: function(uid,d)
    {
        var xhr = nkJSObject.GetObject(uid);
        var md = Blazor.platform.readStringField(d, 0);
        var ul = Blazor.platform.readStringField(d, 4);
        var ac = Blazor.platform.readInt32Field(d, 8) !== 0;
        xhr.open(md,ul,ac);
    },
    OverrideMimeType: function(uid,d)
    {
        var xhr = nkJSObject.GetObject(uid);
        var mt = Blazor.platform.readStringField(d, 0);
        xhr.overrideMimeType(mt);
    },
    Send: function (uid, d)
    {
        var xhr = nkJSObject.GetObject(uid);
        xhr.send(null);
    },
    GetStatus: function(uid,d)
    {
        var xhr = nkJSObject.GetObject(uid);
        var status = xhr.status;
        return status;
    },
    GetResponseText: function(uid,d)
    {
        var xhr = nkJSObject.GetObject(uid);
        var responseText = xhr.responseText;
        return BINDING.js_to_mono_obj(responseText);
    },
};
