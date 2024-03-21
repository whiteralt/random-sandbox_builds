
if (typeof gdjs.evtsExt__YGameSDK__InitSDK !== "undefined") {
  gdjs.evtsExt__YGameSDK__InitSDK.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__YGameSDK__InitSDK = {};


gdjs.evtsExt__YGameSDK__InitSDK.userFunc0x169fe20 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
var isInitVar = runtimeScene.getGame().getVariables().get("YGSDK_IsInit");
isInitVar.setBoolean(false);

var options = {
    fullscreen: eventsFunctionContext.getArgument("fullscreen"),
    orientation: {
        value: eventsFunctionContext.getArgument("orientation") || "portrait",
        lock: eventsFunctionContext.getArgument("lock")
    }
};

(function(d) {
        var t = d.getElementsByTagName('script')[0];
        var s = d.createElement('script');
        s.src = 'https://yandex.ru/games/sdk/v2';
        s.async = true;
        t.parentNode.insertBefore(s, t);
        s.onload = function () {
            YaGames
    .init(options)
    .then(ysdk => {
        window.ysdk = ysdk;
        isInitVar.setBoolean(true);
         console.warn('Yandex SDK initialized');
    });
    };
    })(document);
};
gdjs.evtsExt__YGameSDK__InitSDK.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__YGameSDK__InitSDK.userFunc0x169fe20(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__YGameSDK__InitSDK.func = function(runtimeScene, fullscreen, orientation, lock, parentEventsFunctionContext) {
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
if (argName === "fullscreen") return fullscreen;
if (argName === "orientation") return orientation;
if (argName === "lock") return lock;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__YGameSDK__InitSDK.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__YGameSDK__InitSDK.registeredGdjsCallbacks = [];