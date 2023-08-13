#include "Macros.fxh"

matrix WorldViewProjection;
float2 LightPosition;
float  LightRadius;
float  ShadowMapTexelSize;

DECLARE_TEXTURE(Texture, 0) = sampler_state { Texture = <Texture>; };

DECLARE_TEXTURE(ShadowMapU, 1) = sampler_state
{ 
    Texture = <ShadowMapU>;
    Filter = Point;
    AddressU = Clamp;
    AddressV = Clamp;
};
DECLARE_TEXTURE(ShadowMapR, 2) = sampler_state 
{
    Texture = <ShadowMapR>;
    Filter = Point;
    AddressU = Clamp;
    AddressV = Clamp;
};
DECLARE_TEXTURE(ShadowMapD, 3) = sampler_state 
{ 
    Texture = <ShadowMapD>;
    Filter = Point;
    AddressU = Clamp;
    AddressV = Clamp;
};
DECLARE_TEXTURE(ShadowMapL, 4) = sampler_state 
{ 
    Texture = <ShadowMapL>;
    Filter = Point;
    AddressU = Clamp;
    AddressV = Clamp;
};



struct LightVertexShaderInput
{
	float4 Position : POSITION0;
    float4 Color : COLOR0;
    float2 TexCoord : TEXCOORD0;
};

struct LightVertexShaderOutput
{
	float4 Position : POSITION0;
    float2 PositionWS : TEXCOORD0;
    float2 TexCoord : TEXCOORD1;
    float4 Color : COLOR0;
};

LightVertexShaderOutput LightVS(in LightVertexShaderInput input)
{
    LightVertexShaderOutput output = (LightVertexShaderOutput) 0;

	output.Position = mul(input.Position, WorldViewProjection);
    output.PositionWS = input.Position.xy;
	output.Color = input.Color;
    output.TexCoord = input.TexCoord;

	return output;
}

float4 LightPS(LightVertexShaderOutput input) : COLOR
{
    float4 texColor = SAMPLE_TEXTURE(Texture, input.TexCoord) * input.Color;
    
    float2 lightDirection = input.PositionWS - LightPosition;
    float2 lightDirectionAbs = abs(lightDirection);
    float2 mapCoord = lightDirection.xy / lightDirection.yx;
    mapCoord = (mapCoord * 0.5) + 0.5;
     
    float normalizedShadowDistance = 0;
    float normalizedLightDistance = 1;

	float v = 0.0;

    if (lightDirection.y >= lightDirectionAbs.x) //up
    {
        normalizedShadowDistance = SAMPLE_TEXTURE(ShadowMapU, float2(mapCoord.x, v)).r;
        normalizedLightDistance = lightDirectionAbs.y / LightRadius;
    }
    else if (lightDirection.x >= lightDirectionAbs.y) //right
    {
        normalizedShadowDistance = SAMPLE_TEXTURE(ShadowMapR, float2(1 - mapCoord.y, v)).r;
        normalizedLightDistance = lightDirectionAbs.x / LightRadius;
    }
    else if (lightDirection.y <= -lightDirectionAbs.x) //down
    {
        normalizedShadowDistance = SAMPLE_TEXTURE(ShadowMapD, float2(mapCoord.x, v)).r;
        normalizedLightDistance = lightDirectionAbs.y / LightRadius;
    }
    else // if (lightDirection.x <= -lightDirectionAbs.y) //left
    {
        normalizedShadowDistance = SAMPLE_TEXTURE(ShadowMapL, float2(1 - mapCoord.y, v)).r;
        normalizedLightDistance = lightDirectionAbs.x / LightRadius;
    }
        
    float lightIndensity = lightIndensity = clamp(1 - (normalizedLightDistance), v, 1);
    if ((normalizedShadowDistance - lightIndensity) > 0)
    {
        lightIndensity = 0;
    }
    else
    {
        float normalizedLightDistance2 = length(lightDirection) / LightRadius;
        lightIndensity = clamp(1 - (normalizedLightDistance2), 0, 1);
    }
    
    return texColor * lightIndensity;
}

TECHNIQUE(LightDrawing, LightVS, LightPS);
