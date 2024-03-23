
if (typeof gdjs.evtsExt__YGameSDK__InitPlayer !== "undefined") {
  gdjs.evtsExt__YGameSDK__InitPlayer.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__YGameSDK__InitPlayer = {};


gdjs.evtsExt__YGameSDK__InitPlayer.userFunc0x17e03a8 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
var isInitPlayer = runtimeScene.getGame().getVariables().get("YGSDK_Player_IsInit");
var player;
function initPlayer() {
    return window.ysdk.getPlayer().then(_player => {
            window.player_ysdk = _player;
            isInitPlayer.setBoolean(true);
            console.warn('init user');
        });
}
initPlayer().catch(err => {
        window.ysdk.auth.openAuthDialog().then(() => {

                initPlayer();
            }).catch(() => {
                isInitPlayer.setBoolean(false);
                console.warn('no init user');

            });
});


};
gdjs.evtsExt__YGameSDK__InitPlayer.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__YGameSDK__InitPlayer.userFunc0x17e03a8(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__YGameSDK__InitPlayer.func = function(runtimeScene, parentEventsFunctionContext) {
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


gdjs.evtsExt__YGameSDK__InitPlayer.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__YGameSDK__InitPlayer.registeredGdjsCallbacks = [];