
#define SHADER_NAME UNLITFS

#include "Color.glsl";

#include "Scene.glsl";
#include "SceneFog.glsl";

varying vec4 v_Color;
varying vec2 v_Texcoord0;

void main()
{
    vec2 uv = v_Texcoord0;

    vec3 color = u_AlbedoColor.rgb;
    float alpha = u_AlbedoColor.a;
#ifdef ALBEDOTEXTURE
    vec4 albedoSampler = texture2D(u_AlbedoTexture, uv);

    #ifdef Gamma_u_AlbedoTexture
    albedoSampler = gammaToLinear(albedoSampler);
    #endif // Gamma_u_AlbedoTexture

    color *= albedoSampler.rgb;
    alpha *= albedoSampler.a;
#endif // ALBEDOTEXTURE

#if defined(COLOR) && defined(ENABLEVERTEXCOLOR)
    vec4 vertexColor = v_Color;
    color *= vertexColor.rgb;
    alpha *= vertexColor.a;
#endif

#ifdef ALPHATEST
    if (alpha < u_AlphaTestValue)
	discard;
#endif // ALPHATEST

#ifdef FOG
    color = scenUnlitFog(color);
#endif // FOG

    gl_FragColor = vec4(color, alpha);
}