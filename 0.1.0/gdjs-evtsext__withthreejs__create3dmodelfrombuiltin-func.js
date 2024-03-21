
if (typeof gdjs.evtsExt__WithThreeJS__Create3DModelFromBuiltIn !== "undefined") {
  gdjs.evtsExt__WithThreeJS__Create3DModelFromBuiltIn.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__WithThreeJS__Create3DModelFromBuiltIn = {};
gdjs.evtsExt__WithThreeJS__Create3DModelFromBuiltIn.GDModelObjectObjects1= [];


gdjs.evtsExt__WithThreeJS__Create3DModelFromBuiltIn.userFunc0xa55bf8 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
if (!gdjs.__WithThreeJS.has("Renderer")) {
    console.warn("!");
    return;
}
if (!gdjs.__WithThreeJS.get("BuiltIn3D")) {
    console.warn("!");
    return;
}
if (!gdjs.__WithThreeJS.has("Models")) {
    gdjs.__WithThreeJS.set("Models", new Map());
}
const Models = gdjs.__WithThreeJS.get("Models");
const Scene = gdjs.__WithThreeJS.get("Scene");
//
const ModelObject = eventsFunctionContext.getObjectsLists("ModelObject");
const ModelObjectName = ModelObject.firstKey();
const ModelResourceName = runtimeScene._objects.get(ModelObjectName).content.modelResourceName;
const Id = eventsFunctionContext.getArgument("Id");
const X = eventsFunctionContext.getArgument("X");
const Y = eventsFunctionContext.getArgument("Y");
const Z = eventsFunctionContext.getArgument("Z");
const AngleX = eventsFunctionContext.getArgument("AngleX");
const AngleY = eventsFunctionContext.getArgument("AngleY");
const AngleZ = eventsFunctionContext.getArgument("AngleZ");
const Scale = eventsFunctionContext.getArgument("Scale");
//
if (!Models.has(ModelResourceName)) {
    const ResourceModel = runtimeScene.getGame().getModel3DManager().getModel(ModelResourceName).scene;
    const ResourceAnimations = runtimeScene.getGame().getModel3DManager().getModel(ModelResourceName).animations;
    ResourceModel.animations = ResourceAnimations;
    const Mats = new Map();
    gdjs.__WithThreeJS.get("GetAllMaterials")(ResourceModel, Mats);
    // MeshStandardMaterial から指定のマテリアルへ変換
    for (const [K, V] of Mats) {
        // const BasicMaterial = new THREE.MeshBasicMaterial();
        const LambertMaterial = new THREE.MeshLambertMaterial();
        for(const KK of Object.keys(V)) {
            if (KK === "isMaterial") {
                continue;
            }
            if (KK === "uuid") {
                continue;
            }
            if (KK === "type") {
                continue;
            }
            if (LambertMaterial[KK] !== undefined) {
                LambertMaterial[KK] = V[KK];
            }
            //console.log(`V.${KK} = ${V[KK]}`);
        }
        LambertMaterial.side = THREE.FrontSide;
        V.dispose();// ここで実行して意味ある？
        Mats.set(K, LambertMaterial);
    }
    gdjs.__WithThreeJS.get("ReplaceMaterial")(ResourceModel, Mats);
    Models.set(ModelResourceName, ResourceModel);
    // console.log(ResourceModel, ResourceAnimations);
}
// const Model = Models.get(ModelResourceName).clone();// これだとボーンが機能しなくなる
const Model = THREE_ADDONS.SkeletonUtils.clone(Models.get(ModelResourceName));
//
const Mats = new Map();
gdjs.__WithThreeJS.get("GetAllMaterials")(Model, Mats);
for (const [K, V] of Mats) {
    const CloneMaterial = V.clone();
    Mats.set(K, CloneMaterial);
}
gdjs.__WithThreeJS.get("ReplaceMaterial")(Model, Mats);
//
Model.position.set(X, Y, Z);
Model.rotation.set(gdjs.toRad(AngleX), gdjs.toRad(AngleY), gdjs.toRad(AngleZ));
Model.name = Id;
Model.scale.setScalar(Scale);
Scene.add(Model);


};
gdjs.evtsExt__WithThreeJS__Create3DModelFromBuiltIn.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__WithThreeJS__Create3DModelFromBuiltIn.userFunc0xa55bf8(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__WithThreeJS__Create3DModelFromBuiltIn.func = function(runtimeScene, ModelObject, Id, X, Y, Z, AngleX, AngleY, AngleZ, Scale, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"ModelObject": ModelObject
},
  _objectArraysMap: {
"ModelObject": gdjs.objectsListsToArray(ModelObject)
},
  _behaviorNamesMap: {
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Id") return Id;
if (argName === "X") return X;
if (argName === "Y") return Y;
if (argName === "Z") return Z;
if (argName === "AngleX") return AngleX;
if (argName === "AngleY") return AngleY;
if (argName === "AngleZ") return AngleZ;
if (argName === "Scale") return Scale;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__WithThreeJS__Create3DModelFromBuiltIn.GDModelObjectObjects1.length = 0;

gdjs.evtsExt__WithThreeJS__Create3DModelFromBuiltIn.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__WithThreeJS__Create3DModelFromBuiltIn.registeredGdjsCallbacks = [];