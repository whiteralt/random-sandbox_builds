
if (typeof gdjs.evtsExt__WithThreeJS__CheckAll3DAnimationsAreStopped !== "undefined") {
  gdjs.evtsExt__WithThreeJS__CheckAll3DAnimationsAreStopped.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__WithThreeJS__CheckAll3DAnimationsAreStopped = {};


gdjs.evtsExt__WithThreeJS__CheckAll3DAnimationsAreStopped.userFunc0xca9d58 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
if (!gdjs.__WithThreeJS.has("Renderer")) {
    console.warn("!");
    return;
}
const Scene = gdjs.__WithThreeJS.get("Scene");
const AnimationMixer = gdjs.__WithThreeJS.get("AnimationMixer");
const AnimationActions = gdjs.__WithThreeJS.get("AnimationActions");
const Id = eventsFunctionContext.getArgument("Id");
eventsFunctionContext.returnValue = true;
//
const Obj = Scene.getObjectByName(Id);
if (!Obj) {
    console.warn("3D Object not found: " + Id);
    return;
}
//
const OBJ_UUID = Obj.uuid;
if (AnimationActions.has(OBJ_UUID)) {
    for (const [K, V] of AnimationActions.get(OBJ_UUID)) {
        if (V.isRunning()) {
            eventsFunctionContext.returnValue = false;
            break;
        }
    }
}


};
gdjs.evtsExt__WithThreeJS__CheckAll3DAnimationsAreStopped.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__WithThreeJS__CheckAll3DAnimationsAreStopped.userFunc0xca9d58(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__WithThreeJS__CheckAll3DAnimationsAreStopped.func = function(runtimeScene, Id, parentEventsFunctionContext) {
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
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__WithThreeJS__CheckAll3DAnimationsAreStopped.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}

gdjs.evtsExt__WithThreeJS__CheckAll3DAnimationsAreStopped.registeredGdjsCallbacks = [];