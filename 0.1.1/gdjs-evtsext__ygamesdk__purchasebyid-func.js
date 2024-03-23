
if (typeof gdjs.evtsExt__YGameSDK__PurchaseByID !== "undefined") {
  gdjs.evtsExt__YGameSDK__PurchaseByID.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__YGameSDK__PurchaseByID = {};


gdjs.evtsExt__YGameSDK__PurchaseByID.userFunc0x13ed0b0 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
var purchaseID = eventsFunctionContext.getArgument("PurchaseID");
var resultVariableName = eventsFunctionContext.getArgument("ResultVariableName");

var isresultVariableName = runtimeScene.getGame().getVariables().get(resultVariableName);

window.payments_ysdk.purchase({ id: purchaseID }).then(purchase => {
        isresultVariableName.setBoolean(true);
        console.warn('purchase ok');
    }).catch(err => {
        console.warn(err);
        isresultVariableName.setBoolean(false);
})

};
gdjs.evtsExt__YGameSDK__PurchaseByID.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__YGameSDK__PurchaseByID.userFunc0x13ed0b0(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__YGameSDK__PurchaseByID.func = function(runtimeScene, ID, ResultVariableName, parentEventsFunctionContext) {
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
if (argName === "ID") return ID;
if (argName === "ResultVariableName") return ResultVariableName;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__YGameSDK__PurchaseByID.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__YGameSDK__PurchaseByID.registeredGdjsCallbacks = [];