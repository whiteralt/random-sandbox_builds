
if (typeof gdjs.evtsExt__YGameSDK__SetScoreLeaderboard !== "undefined") {
  gdjs.evtsExt__YGameSDK__SetScoreLeaderboard.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__YGameSDK__SetScoreLeaderboard = {};


gdjs.evtsExt__YGameSDK__SetScoreLeaderboard.userFunc0x13ed0b0 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
var variableName = runtimeScene.getGame().getVariables().get(eventsFunctionContext.getArgument("VariableName"));
var tableName = runtimeScene.getGame().getVariables().get(eventsFunctionContext.getArgument("TableName"))
function setScore() {
window.ysdk.getLeaderboards()
  .then(lb => {
    lb.setLeaderboardScore(tableName, variableName);
    console.warn('score save');
  });
}
setScore();

};
gdjs.evtsExt__YGameSDK__SetScoreLeaderboard.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__YGameSDK__SetScoreLeaderboard.userFunc0x13ed0b0(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__YGameSDK__SetScoreLeaderboard.func = function(runtimeScene, VariableName, TableName, parentEventsFunctionContext) {
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
if (argName === "VariableName") return VariableName;
if (argName === "TableName") return TableName;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__YGameSDK__SetScoreLeaderboard.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__YGameSDK__SetScoreLeaderboard.registeredGdjsCallbacks = [];