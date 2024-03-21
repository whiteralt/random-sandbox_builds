
if (typeof gdjs.evtsExt__YGameSDK__LoadLeaderboardByName !== "undefined") {
  gdjs.evtsExt__YGameSDK__LoadLeaderboardByName.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__YGameSDK__LoadLeaderboardByName = {};


gdjs.evtsExt__YGameSDK__LoadLeaderboardByName.userFunc0x169fe20 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
var isInitVar = runtimeScene.getGame().getVariables().get("YGSDK_IsInit_Leaderboard");
isInitVar.setBoolean(false);

var variableName = runtimeScene.getGame().getVariables().get(eventsFunctionContext.getArgument("VariableName"));
var tableName = runtimeScene.getGame().getVariables().get(eventsFunctionContext.getArgument("TableName"))

try {
window.ysdk.getLeaderboards()
  .then(lb => {
    lb.getLeaderboardEntries(tableName, { quantityTop: 10, includeUser: true, quantityAround: 3 })
        .then(res => {
        var arr = res.entries;
        var table = "";
        arr.forEach(function(item, i, arr) {
        table += item.rank+". "+item.player.publicName + " - "+ item.score+" очков !\n";      
}
);
variableName.setString(table);
isInitVar.setBoolean(true);
console.warn('liderboards load');
      });
  });
 } catch (err) {
    console.warn(err);
};

};
gdjs.evtsExt__YGameSDK__LoadLeaderboardByName.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__YGameSDK__LoadLeaderboardByName.userFunc0x169fe20(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__YGameSDK__LoadLeaderboardByName.func = function(runtimeScene, TableName, VariableName, parentEventsFunctionContext) {
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
if (argName === "TableName") return TableName;
if (argName === "VariableName") return VariableName;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__YGameSDK__LoadLeaderboardByName.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__YGameSDK__LoadLeaderboardByName.registeredGdjsCallbacks = [];