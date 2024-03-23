
if (typeof gdjs.evtsExt__WithThreeJS__LookAt3DCamera !== "undefined") {
  gdjs.evtsExt__WithThreeJS__LookAt3DCamera.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__WithThreeJS__LookAt3DCamera = {};


gdjs.evtsExt__WithThreeJS__LookAt3DCamera.userFunc0xd595a0 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
if (!gdjs.__WithThreeJS.has("Renderer")) {
    console.warn("!");
    return;
}
const Scene = gdjs.__WithThreeJS.get("Scene");
const Id = eventsFunctionContext.getArgument("Id");
// const Camera = gdjs.__WithThreeJS.get("Camera");
const CameraId = eventsFunctionContext.getArgument("CameraId");
const Camera = gdjs.__WithThreeJS.get("GetCamera")(CameraId);
//
const Obj = Scene.getObjectByName(Id);
if (!Obj) {
    console.warn("3D Object not found: " + Id);
    return;
}
//
Obj.lookAt(Camera.position);


};
gdjs.evtsExt__WithThreeJS__LookAt3DCamera.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__WithThreeJS__LookAt3DCamera.userFunc0xd595a0(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__WithThreeJS__LookAt3DCamera.func = function(runtimeScene, Id, CameraId, parentEventsFunctionContext) {
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
if (argName === "Id") return Id;
if (argName === "CameraId") return CameraId;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__WithThreeJS__LookAt3DCamera.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__WithThreeJS__LookAt3DCamera.registeredGdjsCallbacks = [];