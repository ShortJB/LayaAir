import { IResourceLoader, ILoadTask, Loader, ILoadURL } from "../../net/Loader";
import { URL } from "../../net/URL";
import { Shader3D } from "../../RenderEngine/RenderShader/Shader3D";
import { AssetDb } from "../../resource/AssetDb";
import { Material } from "../core/material/Material";
import { MaterialParser } from "./MaterialParser";

class MaterialLoader implements IResourceLoader {
    load(task: ILoadTask) {
        return task.loader.fetch(task.url, "json", task.progress.createCallback(0.3), task.options).then(data => {
            if (!data)
                return null;

            let basePath = URL.getPath(task.url);
            let urls: Array<ILoadURL | string> = MaterialParser.collectLinks(data, basePath);

            if (data.version === "LAYAMATERIAL:04") {
                let shaderName = data.props.type;
                if (!Shader3D.find(shaderName)) {
                    let url = AssetDb.inst.shaderName_to_URL(shaderName);
                    if (url)
                        urls.push(url);
                    else {
                        let promise = AssetDb.inst.shaderName_to_URL_async(shaderName);
                        if (promise) {
                            return promise.then(url => {
                                if (url)
                                    urls.push(url);
                                return this.load2(task, data, urls);
                            });
                        }
                        else if (data.props.shaderPath) {
                            urls.push(URL.join(basePath, data.props.shaderPath));
                        }
                    }
                }
            }

            return this.load2(task, data, urls);
        });
    }

    private load2(task: ILoadTask, data: any, urls: Array<any>): Promise<any> {
        if (urls.length == 0) {
            let mat = MaterialParser.parse(data);
            let obsoluteInst = <Material>task.obsoluteInst;
            if (obsoluteInst)
                mat = this.move(obsoluteInst, mat);
            return Promise.resolve(mat);
        }

        return task.loader.load(urls, task.options, task.progress.createCallback()).then(() => {
            let mat = MaterialParser.parse(data);

            let obsoluteInst = <Material>task.obsoluteInst;
            if (task.obsoluteInst)
                mat = this.move(obsoluteInst, mat);
            return mat;
        });
    }

    private move(obsoluteInst: Material, mat: Material) {
        obsoluteInst._shaderValues.reset();
        obsoluteInst.setShaderName(mat._shader.name);
        mat._shaderValues.cloneTo(obsoluteInst._shaderValues);
        obsoluteInst.renderQueue = mat.renderQueue;
        obsoluteInst.obsolute = false;
        mat.destroy();
        return obsoluteInst;
    }
}

Loader.registerLoader(["lmat"], MaterialLoader, Loader.MATERIAL);