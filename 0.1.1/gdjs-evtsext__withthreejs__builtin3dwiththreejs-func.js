
if (typeof gdjs.evtsExt__WithThreeJS__BuiltIn3dWithThreeJS !== "undefined") {
  gdjs.evtsExt__WithThreeJS__BuiltIn3dWithThreeJS.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__WithThreeJS__BuiltIn3dWithThreeJS = {};


gdjs.evtsExt__WithThreeJS__BuiltIn3dWithThreeJS.userFunc0x10846d0 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
// console.log("Three.js create scene");
/*
影響範囲
onScenePostEvents
onSceneUnloading
BuiltIn3dWithThreeJS
ビヘイビアとカスタムオブジェクトのViewModeまわり
LinkedCameraでBuiltIn3dCameraを参照
*/
// v5.1.162 以上で Built-In 3D がゲームに含まれている
const BuiltIn3D = gdjs.__WithThreeJS.get("BuiltIn3D");
if (BuiltIn3D) {
  console.log("[WithThreeJS] Built-in 3D is enabled. Built-In 3D WithThreeJS is now enabled.");
  gdjs.__WithThreeJS.set("BuiltIn3DWithThreeJS", true);
  gdjs.__WithThreeJS.set("Scene", runtimeScene.getLayer("").getRenderer().getThreeScene());
  gdjs.__WithThreeJS.set("BuiltIn3dCamera", runtimeScene.getLayer("").getRenderer().getThreeCamera());
  gdjs.__WithThreeJS.set("BuiltIn3dRenderer", runtimeScene.getRenderer()._threeRenderer);
} else {
  console.warn("[WithThreeJS] Built-in 3D is disabled. Could not enable Built-In 3D WithThreeJS!");
  return;
}
//
gdjs.__WithThreeJS.set("ProjectionScale", 1);
gdjs.__WithThreeJS.set("ViewMode", "Built-In 3D");
//
// 以下、互換のために必要
//
gdjs.__WithThreeJS.set("SceneIsReady", true);
const Canvas2D = document.getElementsByTagName("canvas")[0];
gdjs.__WithThreeJS.set("Canvas2D", Canvas2D);
const Rect = Canvas2D.getBoundingClientRect();
//
// 複数カメラ（未使用・共用・再利用）
let AllCams, Camera1, Camera2, Camera3, Camera4;
if (gdjs.__WithThreeJS.has("AllCams")) {
  AllCams = gdjs.__WithThreeJS.get("AllCams");
  Camera1 = AllCams.get("Camera1");
  Camera2 = AllCams.get("Camera2");
  Camera3 = AllCams.get("Camera3");
  Camera4 = AllCams.get("Camera4");
} else {
  AllCams = new Map();
  Camera1 = new THREE.PerspectiveCamera();
  Camera2 = new THREE.PerspectiveCamera();
  Camera3 = new THREE.PerspectiveCamera();
  Camera4 = new THREE.PerspectiveCamera();
  AllCams.set("Camera1", Camera1);
  AllCams.set("Camera2", Camera2);
  AllCams.set("Camera3", Camera3);
  AllCams.set("Camera4", Camera4);
  gdjs.__WithThreeJS.set("AllCams", AllCams);
}
for (const [K, V] of AllCams) {
  V.name = K;
  V.fov = 50;
  V.aspect = Rect.width / Rect.height;
  V.near = 0.1;
  V.far = 10000;
  V.position.set(0, 0, 0);
  V.rotation.set(0, 0, 0);
  V.updateProjectionMatrix();//必須
  V.userData.CameraStatus = {};
  V.userData.CameraStatus.Active = false;
  V.userData.CameraStatus.T = 1;
  V.userData.CameraStatus.B = 0;
  V.userData.CameraStatus.L = 0;
  V.userData.CameraStatus.R = 1;
  V.userData.CameraStatus.X = 0;
  V.userData.CameraStatus.Y = 0;
  V.userData.CameraStatus.W = Rect.width;
  V.userData.CameraStatus.H = Rect.height;
}
//
// リスナー（共用しない・遷移時破棄）
const Listener = new THREE.AudioListener();
gdjs.__WithThreeJS.set("Listener", Listener);
Listener.name ="Listener";
gdjs.__WithThreeJS.get("BuiltIn3dCamera").add(Listener);
//
// レンダラーとキャンバス（未使用・共用・再利用）
if (!gdjs.__WithThreeJS.has("Renderer")) {
  const Renderer = new THREE.WebGLRenderer();
  document.body.appendChild( Renderer.domElement );
  gdjs.__WithThreeJS.set("Renderer", Renderer);
  Renderer.domElement.id = "WithThreeJS_Canvas";
}


};
gdjs.evtsExt__WithThreeJS__BuiltIn3dWithThreeJS.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__WithThreeJS__BuiltIn3dWithThreeJS.userFunc0x10846d0(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__WithThreeJS__BuiltIn3dWithThreeJS.func = function(runtimeScene, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
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
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__WithThreeJS__BuiltIn3dWithThreeJS.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__WithThreeJS__BuiltIn3dWithThreeJS.registeredGdjsCallbacks = [];