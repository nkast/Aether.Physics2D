window.nkAudioContext =
{
    Create: function()
    {
        var ac = new AudioContext();         
        return nkJSObject.RegisterObject(ac);
    },
    
    Close: function(uid,d)
    {
        var ac = nkJSObject.GetObject(uid);
        ac.close();
    }    
};

window.nkAudioBaseContext =
{
    GetSampleRate: function (uid, d)
    {
        var ac = nkJSObject.GetObject(uid);
        var sr = ac.sampleRate;
        return sr;
    },
    GetDestination: function (uid, d)
    {
        var ac = nkJSObject.GetObject(uid);
        var ds = ac.destination;        
        return  nkJSObject.RegisterObject(ds);
    },
    GetListener: function (uid, d)
    {
        var ac = nkJSObject.GetObject(uid);
        var lr = ac.listener;
        return  nkJSObject.RegisterObject(lr);
    },
    
    GetState: function (uid)
    {
        var ac = nkJSObject.GetObject(uid);
        return BINDING.js_to_mono_obj(ac.state);
    },
    SetState: function (uid, d)
    {
        var ac = nkJSObject.GetObject(uid);
        ac.state = Blazor.platform.readStringField(d, 0);
    },

    CreateBuffer: function (uid, d)
    {
        var ac = nkJSObject.GetObject(uid);
        var nc = Blazor.platform.readInt32Field(d, 0);
        var le = Blazor.platform.readInt32Field(d, 4);
        var sr = Blazor.platform.readInt32Field(d, 8);
        var ab = ac.createBuffer(nc, le, sr);
        return  nkJSObject.RegisterObject(ab);
    },
    CreateBufferSource: function (uid, d)
    {
        var ac = nkJSObject.GetObject(uid);
        var bs = ac.createBufferSource();
        return nkJSObject.RegisterObject(bs);
    },
    CreateOscillator: function (uid, d)
    {
        var ac = nkJSObject.GetObject(uid);
        var os = ac.createOscillator();
        return nkJSObject.RegisterObject(os);
    },
    CreateGain: function (uid, d)
    {
        var ac = nkJSObject.GetObject(uid);
        var gn = ac.createGain();         
        return nkJSObject.RegisterObject(gn);
    },
    CreateStereoPanner: function (uid, d)
    {
        var ac = nkJSObject.GetObject(uid);
        var sp = ac.createStereoPanner();
        return nkJSObject.RegisterObject(sp);
    },
    CreateMediaElementSource: function (uid, d)
    {
        var ac = nkJSObject.GetObject(uid);
        var mid= Blazor.platform.readInt32Field(d, 0);
        var me = nkJSObject.GetObject(mid);
        var ms = ac.createMediaElementSource(me);
        return nkJSObject.RegisterObject(ms);
    }
};

window.nkAudioBuffer =
{
    CopyToChannel: function (uid, d)
    {
        var ab = nkJSObject.GetObject(uid);
        var cn = Blazor.platform.readInt32Field(d, 0);
        var arr = Blazor.platform.readInt32Field(d, 4);

        var arrPtr = Blazor.platform.getArrayEntryPtr(arr, 0, 4);
        var arrLen = Blazor.platform.getArrayLength(arr);
        var sr = new Float32Array(Module.HEAPU8.buffer, arrPtr, arrLen);

        ab.copyToChannel(sr, cn);
    },    
    GetSampleRate: function (uid, d)
    {
        var ab = nkJSObject.GetObject(uid);
        var sr = ab.sampleRate;
        return sr;
    },
    GetLength: function (uid, d)
    {
        var ab = nkJSObject.GetObject(uid);
        var ln = ab.length;
        return ln;
    },
    GetNumberOfChannels: function (uid, d)
    {
        var ab = nkJSObject.GetObject(uid);
        var nc = ab.numberOfChannels;
        return nc;
    }
};

window.nkAudioListener =
{
    SetPositionX: function (uid, d)
    {
        var lr = nkJSObject.GetObject(uid);
        var px = Blazor.platform.readInt32Field(d, 0);
        lr.positionX = px;
    },
    SetPositionY: function (uid, d)
    {
        var lr = nkJSObject.GetObject(uid);
        var py = Blazor.platform.readInt32Field(d, 0);
        lr.positionY = py;
    },
    SetPositionZ: function (uid, d)
    {
        var lr = nkJSObject.GetObject(uid);
        var pz = Blazor.platform.readInt32Field(d, 0);
        lr.positionZ = pz;
    },

    SetForwardX: function (uid, d)
    {
        var lr = nkJSObject.GetObject(uid);
        var fx = Blazor.platform.readInt32Field(d, 0);
        lr.forwardX = fx;
    },
    SetForwardY: function (uid, d)
    {
        var lr = nkJSObject.GetObject(uid);
        var fy = Blazor.platform.readInt32Field(d, 0);
        lr.forwardY = fy;
    },
    SetForwardZ: function (uid, d)
    {
        var lr = nkJSObject.GetObject(uid);
        var fz = Blazor.platform.readInt32Field(d, 0);
        lr.forwardZ = fz;
    },

    SetUpX: function (uid, d)
    {
        var lr = nkJSObject.GetObject(uid);
        var ux = Blazor.platform.readInt32Field(d, 0);
        lr.upX = ux;
    },
    SetUpY: function (uid, d)
    {
        var lr = nkJSObject.GetObject(uid);
        var uy = Blazor.platform.readInt32Field(d, 0);
        lr.upY = uy;
    },
    SetUpZ: function (uid, d)
    {
        var lr = nkJSObject.GetObject(uid);
        var uz = Blazor.platform.readInt32Field(d, 0);
        lr.upZ = uz;
    }
};

window.nkAudioBufferSourceNode =
{
    SetBuffer: function (uid, d)
    {
        var bs = nkJSObject.GetObject(uid);
        var bid= Blazor.platform.readInt32Field(d, 0);
        var ab = nkJSObject.GetObject(bid);
        bs.buffer = ab;
    },

    GetLoop: function (uid, d)
    {
        var bs = nkJSObject.GetObject(uid);
        return bs.loop;
    },
    SetLoop: function (uid, d)
    {
        var bs = nkJSObject.GetObject(uid);
        var lp = Blazor.platform.readInt32Field(d, 0);
        bs.loop = lp !== 0;
    }
};

window.nkAudioScheduledSourceNode =
{
    Start: function (uid, d)
    {
        var bs = nkJSObject.GetObject(uid);
        bs.start();
    },
    Stop: function (uid, d)
    {
        var bs = nkJSObject.GetObject(uid);
        bs.stop();
    },
    
    RegisterEvents: function (uid)
    {
        var bs = nkJSObject.GetObject(uid);

        bs.onended = function(event)
        {
            DotNet.invokeMethod('nkast.Wasm.Audio', 'JsAudioScheduledSourceNodeOnEnded', uid);
        };
    },    
    UnregisterEvents: function (uid)
    {
        var bs = nkJSObject.GetObject(uid);
        bs.onended = null;
    }
};

window.nkAudioDestinationNode =
{
    GetMaxChannelCount: function (uid, d)
    {
        var gn = nkJSObject.GetObject(uid);
        return gn.maxChannelCount;
    }
};

window.nkAudioNode =
{    
    Connect: function (uid, d)
    {
        var an = nkJSObject.GetObject(uid);
        var did= Blazor.platform.readInt32Field(d, 0);
        var ds = nkJSObject.GetObject(did);
        an.connect(ds);
    },
    Disconnect: function (uid, d)
    {
        var an = nkJSObject.GetObject(uid);
        var did = Blazor.platform.readInt32Field(d, 0);
        var ds = nkJSObject.GetObject(did);
        an.disconnect(ds);
    },
};

window.nkAudioOscillatorNode =
{
    GetFrequency: function (uid, d)
    {
        var os = nkJSObject.GetObject(uid);
        var ap = os.frequency;
        return  nkJSObject.RegisterObject(ap);
    },

    GetType: function (uid)
    {
        var os = nkJSObject.GetObject(uid);
        return BINDING.js_to_mono_obj(os.type);
    },
    SetType: function (uid, d)
    {
        var os = nkJSObject.GetObject(uid);
        os.type = Blazor.platform.readStringField(d, 0);
    }
};

window.nkAudioGainNode =
{
    GetGain: function (uid, d)
    {
        var gn = nkJSObject.GetObject(uid);
        var ap = gn.gain;
        return nkJSObject.RegisterObject(ap);
    }
};

window.nkAudioStereoPannerNode =
{
    GetPan: function (uid, d)
    {
        var sp = nkJSObject.GetObject(uid);
        var ap = sp.pan;
        return nkJSObject.RegisterObject(ap);
    }
};

window.nkAudioParam =
{  
    SetValue: function (uid, d)
    {
        var ap = nkJSObject.GetObject(uid);
        var vl = Blazor.platform.readFloatField(d, 0);
        ap.value = vl;
    },
    
    SetValueAtTime: function (uid, d)
    {
        var ap = nkJSObject.GetObject(uid);
        var vl = Blazor.platform.readFloatField(d, 0);
        var st = Blazor.platform.readFloatField(d, 4);
        ap.setValueAtTime(vl, st);
    },
    LinearRampToValueAtTime: function (uid, d)
    {
        var ap = nkJSObject.GetObject(uid);
        var vl = Blazor.platform.readFloatField(d, 0);
        var et = Blazor.platform.readFloatField(d, 4);
        ap.linearRampToValueAtTime(vl, et);
    },
    ExponentialRampToValueAtTime: function (uid, d)
    {
        var ap = nkJSObject.GetObject(uid);
        var vl = Blazor.platform.readFloatField(d, 0);
        var et = Blazor.platform.readFloatField(d, 4);
        ap.exponentialRampToValueAtTime(vl, et);
    },
    SetTargetAtTime: function (uid, d)
    {
        var ap = nkJSObject.GetObject(uid);
        var tg = Blazor.platform.readFloatField(d, 0);
        var st = Blazor.platform.readFloatField(d, 4);
        var tc = Blazor.platform.readFloatField(d, 8);
        ap.setTargetAtTime(tg, st, tc);
    },
    SetValueCurveAtTime: function (uid, d)
    {
        var ap = nkJSObject.GetObject(uid);
        var st = Blazor.platform.readFloatField(d, 0);
        var dt = Blazor.platform.readFloatField(d, 4);
        var arr = Blazor.platform.readInt32Field(d, 8);

        var arrPtr = Blazor.platform.getArrayEntryPtr(arr, 0, 4);
        var arrLen = Blazor.platform.getArrayLength(arr);
        var vs = new Float32Array(Module.HEAPU8.buffer, arrPtr, arrLen);

        ap.setValueCurveAtTime(vs, st, dt);
    },

    CancelScheduledValues: function (uid, d)
    {
        var ap = nkJSObject.GetObject(uid);
        var st = Blazor.platform.readFloatField(d, 0);
        ap.cancelScheduledValues(st);
    }
};

