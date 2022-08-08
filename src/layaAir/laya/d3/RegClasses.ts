import { ClassUtils } from "../utils/ClassUtils";
import { AnimationClip } from "./animation/AnimationClip";
import { Animator } from "./component/Animator";
import { AnimatorControllerLayer } from "./component/AnimatorControllerLayer";
import { AnimatorState } from "./component/AnimatorState";
import { AvatarMask } from "./component/AvatarMask";
import { Sprite3D } from "./core/Sprite3D";
import { Camera } from "./core/Camera";
import { Gradient } from "./core/Gradient";
import { DirectionLight } from "./core/light/DirectionLight";
import { LightSprite } from "./core/light/LightSprite";
import { PointLight } from "./core/light/PointLight";
import { SpotLight } from "./core/light/SpotLight";
import { BlinnPhongMaterial } from "./core/material/BlinnPhongMaterial";
import { EffectMaterial } from "./core/material/EffectMaterial";
import { ExtendTerrainMaterial } from "./core/material/ExtendTerrainMaterial";
import { Material } from "./core/material/Material";
import { PBRSpecularMaterial } from "./core/material/PBRSpecularMaterial";
import { PBRStandardMaterial } from "./core/material/PBRStandardMaterial";
import { SkyBoxMaterial } from "./core/material/SkyBoxMaterial";
import { SkyPanoramicMaterial } from "./core/material/SkyPanoramicMaterial";
import { SkyProceduralMaterial } from "./core/material/SkyProceduralMaterial";
import { UnlitMaterial } from "./core/material/UnlitMaterial";
import { WaterPrimaryMaterial } from "./core/material/WaterPrimaryMaterial";
import { MeshFilter } from "./core/MeshFilter";
import { MeshRenderer } from "./core/MeshRenderer";
import { MeshSprite3D } from "./core/MeshSprite3D";
import { Burst } from "./core/particleShuriKen/module/Burst";
import { ColorOverLifetime } from "./core/particleShuriKen/module/ColorOverLifetime";
import { Emission } from "./core/particleShuriKen/module/Emission";
import { FrameOverTime } from "./core/particleShuriKen/module/FrameOverTime";
import { GradientAngularVelocity } from "./core/particleShuriKen/module/GradientAngularVelocity";
import { GradientColor } from "./core/particleShuriKen/module/GradientColor";
import { GradientDataInt } from "./core/particleShuriKen/module/GradientDataInt";
import { GradientDataNumber } from "./core/particleShuriKen/module/GradientDataNumber";
import { GradientSize } from "./core/particleShuriKen/module/GradientSize";
import { GradientVelocity } from "./core/particleShuriKen/module/GradientVelocity";
import { RotationOverLifetime } from "./core/particleShuriKen/module/RotationOverLifetime";
import { BaseShape } from "./core/particleShuriKen/module/shape/BaseShape";
import { BoxShape } from "./core/particleShuriKen/module/shape/BoxShape";
import { CircleShape } from "./core/particleShuriKen/module/shape/CircleShape";
import { ConeShape } from "./core/particleShuriKen/module/shape/ConeShape";
import { HemisphereShape } from "./core/particleShuriKen/module/shape/HemisphereShape";
import { SphereShape } from "./core/particleShuriKen/module/shape/SphereShape";
import { SizeOverLifetime } from "./core/particleShuriKen/module/SizeOverLifetime";
import { StartFrame } from "./core/particleShuriKen/module/StartFrame";
import { TextureSheetAnimation } from "./core/particleShuriKen/module/TextureSheetAnimation";
import { VelocityOverLifetime } from "./core/particleShuriKen/module/VelocityOverLifetime";
import { ShuriKenParticle3D } from "./core/particleShuriKen/ShuriKenParticle3D";
import { ShurikenParticleMaterial } from "./core/particleShuriKen/ShurikenParticleMaterial";
import { ShurikenParticleRenderer } from "./core/particleShuriKen/ShurikenParticleRenderer";
import { ShurikenParticleSystem } from "./core/particleShuriKen/ShurikenParticleSystem";
import { ReflectionProbe } from "./core/reflectionProbe/ReflectionProbe";
import { BaseRender } from "./core/render/BaseRender";
import { RenderableSprite3D } from "./core/RenderableSprite3D";
import { Lightmap } from "./core/scene/Lightmap";
import { Scene3D } from "./core/scene/Scene3D";
import { SimpleSkinnedMeshRenderer } from "./core/SimpleSkinnedMeshRenderer";
import { SimpleSkinnedMeshSprite3D } from "./core/SimpleSkinnedMeshSprite3D";
import { SkinnedMeshRenderer } from "./core/SkinnedMeshRenderer";
import { SkinnedMeshSprite3D } from "./core/SkinnedMeshSprite3D";
import { TrailFilter } from "./core/trail/TrailFilter";
import { TrailMaterial } from "./core/trail/TrailMaterial";
import { TrailRenderer } from "./core/trail/TrailRenderer";
import { TrailSprite3D } from "./core/trail/TrailSprite3D";
import { Transform3D } from "./core/Transform3D";
import { SphericalHarmonicsL2 } from "./graphics/SphericalHarmonicsL2";
import { BoundBox } from "./math/BoundBox";
import { Color } from "./math/Color";
import { Quaternion } from "./math/Quaternion";
import { Vector2 } from "./math/Vector2";
import { Vector3 } from "./math/Vector3";
import { Vector4 } from "./math/Vector4";
import { Viewport } from "./math/Viewport";
import { Mesh } from "./resource/models/Mesh";
import { SkyRenderer } from "./resource/models/SkyRenderer";
import { TextureCube } from "./resource/TextureCube";
import { DirectionLightCom } from "./core/light/DirectionLightCom";
import { PointLightCom } from "./core/light/PointLightCom";
import { SpotLightCom } from "./core/light/SpotLightCom";

import "./loaders/AnimationClipLoader";
import "./loaders/CubemapLoader";
import "./loaders/MaterialLoader";
import "./loaders/MeshLoader";
import "./loaders/SimpleAnimatorTextureLoader";
import "./loaders/HierarchyParserV2";
import "./loaders/AvatarMaskLoader";
import { Bounds } from "./math/Bounds";

let c = ClassUtils.regClass;
c("Laya.Sprite3D", Sprite3D);
c("Laya.Scene3D", Scene3D);
c("Laya.Camera", Camera);
c("Laya.LightSprite", LightSprite);
c("Laya.DirectionLight", DirectionLight);
c("Laya.PointLight", PointLight);
c("Laya.SpotLight", SpotLight);
c("Laya.DirectionLightCom", DirectionLightCom);
c("Laya.PointLightCom", PointLightCom);
c("Laya.SpotLightCom", SpotLightCom);
c("Laya.RenderableSprite3D", RenderableSprite3D);
c("Laya.MeshSprite3D", MeshSprite3D);
c("Laya.MeshFilter", MeshFilter);
c("Laya.BaseRender", BaseRender);
c("Laya.MeshRenderer", MeshRenderer);
c("Laya.SimpleSkinnedMeshSprite3D", SimpleSkinnedMeshSprite3D);
c("Laya.SkinnedMeshSprite3D", SkinnedMeshSprite3D);
c("Laya.SkinnedMeshRenderer", SkinnedMeshRenderer);
c("Laya.SimpleSkinnedMeshRenderer", SimpleSkinnedMeshRenderer);
c("Laya.SkyRenderer", SkyRenderer);
c("Laya.TrailSprite3D", TrailSprite3D);
c("Laya.TrailFilter", TrailFilter);
c("Laya.TrailRenderer", TrailRenderer);
c("Laya.Gradient", Gradient);
c("Laya.Transform3D", Transform3D);
c("Laya.Lightmap", Lightmap);
c("Laya.ReflectionProbe", ReflectionProbe);
c("Laya.SphericalHarmonicsL2", SphericalHarmonicsL2);
c("Laya.Vector2", Vector2);
c("Laya.Vector3", Vector3);
c("Laya.Vector4", Vector4);
c("Laya.Quaternion", Quaternion);
c("Laya.Color", Color);
c("Laya.Viewport", Viewport);
c("Laya.Bounds", Bounds);
c("Laya.BoundBox", BoundBox);
c("Laya.TextureCube", TextureCube);
c("Laya.Mesh", Mesh);

c("Laya.Animator", Animator);
c("Laya.AnimatorControllerLayer", AnimatorControllerLayer);
c("Laya.AnimatorState", AnimatorState);
c("Laya.AnimationClip", AnimationClip);
c("Laya.AvatarMask", AvatarMask);

c("Laya.Material", Material);
c("Laya.BlinnPhongMaterial", BlinnPhongMaterial);
c("Laya.EffectMaterial", EffectMaterial);
c("Laya.ExtendTerrainMaterial", ExtendTerrainMaterial);
c("Laya.PBRSpecularMaterial", PBRSpecularMaterial);
c("Laya.PBRStandardMaterial", PBRStandardMaterial);
c("Laya.SkyBoxMaterial", SkyBoxMaterial);
c("Laya.SkyPanoramicMaterial", SkyPanoramicMaterial);
c("Laya.SkyProceduralMaterial", SkyProceduralMaterial);
c("Laya.UnlitMaterial", UnlitMaterial);
c("Laya.WaterPrimaryMaterial", WaterPrimaryMaterial);
c("Laya.ShurikenParticleMaterial", ShurikenParticleMaterial);
c("Laya.TrailMaterial", TrailMaterial);

c("Laya.ShuriKenParticle3D", ShuriKenParticle3D);
c("Laya.ShurikenParticleRenderer", ShurikenParticleRenderer);
c("Laya.ShurikenParticleSystem", ShurikenParticleSystem);
c("Laya.Burst", Burst);
c("Laya.Emission", Emission);
c("Laya.BaseShape", BaseShape);
c("Laya.BoxShape", BoxShape);
c("Laya.CircleShape", CircleShape);
c("Laya.ConeShape", ConeShape);
c("Laya.HemisphereShape", HemisphereShape);
c("Laya.SphereShape", SphereShape);
c("Laya.FrameOverTime", FrameOverTime);
c("Laya.GradientAngularVelocity", GradientAngularVelocity);
c("Laya.GradientColor", GradientColor);
c("Laya.GradientDataInt", GradientDataInt);
c("Laya.GradientDataNumber", GradientDataNumber);
c("Laya.GradientSize", GradientSize);
c("Laya.GradientVelocity", GradientVelocity);
c("Laya.StartFrame", StartFrame);
c("Laya.TextureSheetAnimation", TextureSheetAnimation);
c("Laya.ColorOverLifetime", ColorOverLifetime);
c("Laya.RotationOverLifetime", RotationOverLifetime);
c("Laya.SizeOverLifetime", SizeOverLifetime);
c("Laya.VelocityOverLifetime", VelocityOverLifetime);