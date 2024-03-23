
if (typeof gdjs.evtsExt__YGameSDK__ShowVideo !== "undefined") {
  gdjs.evtsExt__YGameSDK__ShowVideo.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__YGameSDK__ShowVideo = {};


gdjs.evtsExt__YGameSDK__ShowVideo.userFunc0x13ed0b0 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
var vid = runtimeScene.getGame().getVariables().get("YGameSDK_RewardedVideoResult"); 

vid.setString("start");
try {
    window.ysdk.adv.showRewardedVideo({
        callbacks: {
            onOpen: function () {
                vid.setString("open");
                console.warn("video open");
            },
            onRewarded: function () {
                vid.setString("rewarded");
                console.warn("video rewarded");
            },
            onClose: function () {
                vid.setString("closed");
                console.warn("video closed");
            },
            onError: function (err) {
                vid.setString("error");
                console.warn(err);
            }
        }
    });
} catch (err) {
    vid.setString("error");
    console.warn("Error while showing a rewarded video", err);
};

};
gdjs.evtsExt__YGameSDK__ShowVideo.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__YGameSDK__ShowVideo.userFunc0x13ed0b0(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};gdjs.evtsExt__YGameSDK__ShowVideo.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__YGameSDK__IsInit.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__YGameSDK__ShowVideo.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.evtsExt__YGameSDK__ShowVideo.func = function(runtimeScene, parentEventsFunctionContext) {
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


gdjs.evtsExt__YGameSDK__ShowVideo.eventsList1(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__YGameSDK__ShowVideo.registeredGdjsCallbacks = [];