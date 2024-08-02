window.nkJSObject =
{
    objectMap: [],
    emptySlots: [],
    RegisterObject: function(obj)
    {
        if (obj == null)
            return -1;
        if (nkJSObject.objectMap.indexOf(obj) != -1)
            throw "object already registered";

        if (nkJSObject.emptySlots.length == 0)
        {
            nkJSObject.objectMap.push(obj);
            var uid = nkJSObject.objectMap.lastIndexOf(obj);
            uid++;
            return uid;
        }
        else
        {
            var uid = nkJSObject.emptySlots.pop();
            nkJSObject.objectMap[uid] = obj;
            uid++;
            return uid;
        }
    },
    GetObject: function(uid)
    {
        uid--;
        return nkJSObject.objectMap[uid];
    },
    DisposeObject: function(uid)
    {
        uid--;
        delete nkJSObject.objectMap[uid];
        nkJSObject.emptySlots.push(uid);
    },
    GetWindow: function()
    {
        return nkJSObject.RegisterObject(window);
    }
}
