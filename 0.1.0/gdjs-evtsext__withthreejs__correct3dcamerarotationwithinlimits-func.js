
if (typeof gdjs.evtsExt__WithThreeJS__Correct3DCameraRotationWithinLimits !== "undefined") {
  gdjs.evtsExt__WithThreeJS__Correct3DCameraRotationWithinLimits.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__WithThreeJS__Correct3DCameraRotationWithinLimits = {};


gdjs.evtsExt__WithThreeJS__Correct3DCameraRotationWithinLimits.userFunc0xfb99e8 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
if (!gdjs.__WithThreeJS.has("Renderer")) {
    console.warn("!");
    return;
}
// const Camera = gdjs.__WithThreeJS.get("Camera");
const Id = eventsFunctionContext.getArgument("Id");
const Camera = gdjs.__WithThreeJS.get("GetCamera")(Id);
const Rad3 = gdjs.__WithThreeJS.get("GetSingleRadian3")(Camera);
const Axis = eventsFunctionContext.getArgument("Axis");
const MinAngle = gdjs.toRad(eventsFunctionContext.getArgument("MinAngle"));
const MaxAngle = gdjs.toRad(eventsFunctionContext.getArgument("MaxAngle"));
//
if (Axis == "X") {
    if (Rad3.x < MinAngle) {
        Camera.rotateX(MinAngle - Rad3.x);
    }
    if (Rad3.x > MaxAngle) {
        Camera.rotateX(MaxAngle - Rad3.x);
    }
} else if (Axis == "Y") {
    if (Rad3.y < MinAngle) {
        Camera.rotateOnWorldAxis(new THREE.Vector3(0, 1, 0), MinAngle - Rad3.y);
    }
    if (Rad3.y > MaxAngle) {
        Camera.rotateOnWorldAxis(new THREE.Vector3(0, 1, 0), MaxAngle - Rad3.y);
    }
} else {
    if (Rad3.z < MinAngle) {
        Camera.rotateZ(MinAngle - Rad3.z);
    }
    if (Rad3.z > MaxAngle) {
        Camera.rotateZ(MaxAngle - Rad3.z);
    }
}


};
gdjs.evtsExt__WithThreeJS__Correct3DCameraRotationWithinLimits.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__WithThreeJS__Correct3DCameraRotationWithinLimits.userFunc0xfb99e8(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__WithThreeJS__Correct3DCameraRotationWithinLimits.func = function(runtimeScene, Id, Axis, MinAngle, MaxAngle, parentEventsFunctionContext) {
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
if (argName === "Axis") return Axis;
if (argName === "MinAngle") return MinAngle;
if (argName === "MaxAngle") return MaxAngle;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__WithThreeJS__Correct3DCameraRotationWithinLimits.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__WithThreeJS__Correct3DCameraRotationWithinLimits.registeredGdjsCallbacks = [];