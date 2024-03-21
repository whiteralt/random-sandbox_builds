
if (typeof gdjs.evtsExt__YGameSDK__ShowBanner !== "undefined") {
  gdjs.evtsExt__YGameSDK__ShowBanner.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__YGameSDK__ShowBanner = {};


gdjs.evtsExt__YGameSDK__ShowBanner.userFunc0x169fe20 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";

try {
   window.ysdk.adv.showFullscreenAdv({
        callbacks: {
            onOpen: function () {
                console.warn("show a fullscreen ad");
            },
            onClose: function (wasShown) {
                console.warn("close a fullscreen");
            },
            onError: function (err) {
                console.warn("Error trying to show a fullscreen ad", err);
            },
            onOffline: function () {
                console.warn("offline");
            }
        }
    });
} catch (err) {
       console.warn(err);
};

};
gdjs.evtsExt__YGameSDK__ShowBanner.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__YGameSDK__ShowBanner.userFunc0x169fe20(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};gdjs.evtsExt__YGameSDK__ShowBanner.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__YGameSDK__IsInit.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__YGameSDK__ShowBanner.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.evtsExt__YGameSDK__ShowBanner.func = function(runtimeScene, parentEventsFunctionContext) {
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


gdjs.evtsExt__YGameSDK__ShowBanner.eventsList1(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__YGameSDK__ShowBanner.registeredGdjsCallbacks = [];