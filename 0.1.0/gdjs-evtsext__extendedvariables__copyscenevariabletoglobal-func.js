
if (typeof gdjs.evtsExt__ExtendedVariables__CopySceneVariableToGlobal !== "undefined") {
  gdjs.evtsExt__ExtendedVariables__CopySceneVariableToGlobal.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__ExtendedVariables__CopySceneVariableToGlobal = {};


gdjs.evtsExt__ExtendedVariables__CopySceneVariableToGlobal.userFunc0x171a448 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const sceneVariable = runtimeScene.getVariables().get(eventsFunctionContext.getArgument("sceneVariableName"));
const globalVariable = runtimeScene.getGame().getVariables().get(eventsFunctionContext.getArgument("globalVariableName"));
const isExactCopy = eventsFunctionContext.getArgument("isExactCopy");

gdjs.Variable.copy(sceneVariable, globalVariable, isExactCopy);
};
gdjs.evtsExt__ExtendedVariables__CopySceneVariableToGlobal.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__ExtendedVariables__CopySceneVariableToGlobal.userFunc0x171a448(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__ExtendedVariables__CopySceneVariableToGlobal.func = function(runtimeScene, sceneVariableName, globalVariableName, isExactCopy, parentEventsFunctionContext) {
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
if (argName === "sceneVariableName") return sceneVariableName;
if (argName === "globalVariableName") return globalVariableName;
if (argName === "isExactCopy") return isExactCopy;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__ExtendedVariables__CopySceneVariableToGlobal.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__ExtendedVariables__CopySceneVariableToGlobal.registeredGdjsCallbacks = [];