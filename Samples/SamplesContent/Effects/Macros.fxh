//-----------------------------------------------------------------------------
// Macros.fxh
//
// Microsoft XNA Community Game Platform
// Copyright (C) Microsoft Corporation. All rights reserved.
//-----------------------------------------------------------------------------


#ifdef MGFX  // Macros for targetting HLSL 4.0

#define TECHNIQUE(name, vsname, psname ) \
	technique name { pass { VertexShader = compile vs_4_0_level_9_1 vsname (); PixelShader = compile ps_4_0_level_9_1 psname(); } }

#else  // Macros for targetting shader model 2.0 (XNA)

#define TECHNIQUE(name, vsname, psname ) \
	technique name { pass { VertexShader = compile vs_2_0 vsname (); PixelShader = compile ps_2_0 psname(); } }

#endif


#ifdef SM4  // Macros for targetting HLSL 4.0


#define BEGIN_CONSTANTS     cbuffer Parameters : register(b0) {
#define MATRIX_CONSTANTS
#define END_CONSTANTS       };

#define _vs(r)
#define _ps(r)
#define _cb(r)

#define DECLARE_TEXTURE(Name, index) \
    Texture2D<float4> Name : register(t##index); \
    sampler Name##Sampler : register(s##index)

#define DECLARE_CUBEMAP(Name, index) \
    TextureCube<float4> Name : register(t##index); \
    sampler Name##Sampler : register(s##index)

#define SAMPLE_TEXTURE(Name, texCoord)  Name.Sample(Name##Sampler, texCoord)
#define SAMPLE_CUBEMAP(Name, texCoord)  Name.Sample(Name##Sampler, texCoord)


#else  // Macros for targetting shader model 2.0 (XNA & MojoShader)


#define BEGIN_CONSTANTS
#define MATRIX_CONSTANTS
#define END_CONSTANTS

#define _vs(r)  : register(vs, r)
#define _ps(r)  : register(ps, r)
#define _cb(r)

#define DECLARE_TEXTURE(Name, index) \
    texture2D Name : register(t##index); \
    sampler Name##Sampler : register(s##index) 

#define DECLARE_CUBEMAP(Name, index) \
    textureCUBE Name : register(t##index); \
    sampler Name##Sampler : register(s##index) 

#define SAMPLE_TEXTURE(Name, texCoord)  tex2D(Name##Sampler, texCoord)
#define SAMPLE_CUBEMAP(Name, texCoord)  texCUBE(Name##Sampler, texCoord)


#endif
