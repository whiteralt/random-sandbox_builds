
if (typeof gdjs.evtsExt__SecretCode__StringToStringListObjectVar !== "undefined") {
  gdjs.evtsExt__SecretCode__StringToStringListObjectVar.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__SecretCode__StringToStringListObjectVar = {};
gdjs.evtsExt__SecretCode__StringToStringListObjectVar.GDobjectParamObjects1= [];
gdjs.evtsExt__SecretCode__StringToStringListObjectVar.GDobjectParamObjects2= [];


gdjs.evtsExt__SecretCode__StringToStringListObjectVar.userFunc0x17ea9a0 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const inputString = eventsFunctionContext.getArgument("inputString");
const delimiter = eventsFunctionContext.getArgument("delimiter");
const varName = eventsFunctionContext.getArgument("varName");
let objectParam = eventsFunctionContext.getObjects("objectParam")[0];

const stringArray = inputString.split(delimiter);
let variable = objectParam.getVariables().get(varName);

// https://forum.gdevelop.io/t/store-a-javascript-array/25104/2
// For saving the array;
for (let i = 0; i < stringArray.length; i++) {
    variable.getChild(i).setString(stringArray[i]); // Assuming you store strings. 
                                              // If you store an object you will have to make it a String using JSON. 
                                              // If you want to store numbers use setNumber.
}
};
gdjs.evtsExt__SecretCode__StringToStringListObjectVar.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
}

}


{


gdjs.evtsExt__SecretCode__StringToStringListObjectVar.userFunc0x17ea9a0(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__SecretCode__StringToStringListObjectVar.func = function(runtimeScene, inputString, delimiter, varName, objectParam, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"objectParam": objectParam
},
  _objectArraysMap: {
"objectParam": gdjs.objectsListsToArray(objectParam)
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
if (argName === "inputString") return inputString;
if (argName === "delimiter") return delimiter;
if (argName === "varName") return varName;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__SecretCode__StringToStringListObjectVar.GDobjectParamObjects1.length = 0;
gdjs.evtsExt__SecretCode__StringToStringListObjectVar.GDobjectParamObjects2.length = 0;

gdjs.evtsExt__SecretCode__StringToStringListObjectVar.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__SecretCode__StringToStringListObjectVar.registeredGdjsCallbacks = [];