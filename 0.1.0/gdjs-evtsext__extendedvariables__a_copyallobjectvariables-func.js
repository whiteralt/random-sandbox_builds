
if (typeof gdjs.evtsExt__ExtendedVariables__A_CopyAllObjectVariables !== "undefined") {
  gdjs.evtsExt__ExtendedVariables__A_CopyAllObjectVariables.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__ExtendedVariables__A_CopyAllObjectVariables = {};
gdjs.evtsExt__ExtendedVariables__A_CopyAllObjectVariables.GDSourceObjectObjects1= [];
gdjs.evtsExt__ExtendedVariables__A_CopyAllObjectVariables.GDSourceObjectObjects2= [];
gdjs.evtsExt__ExtendedVariables__A_CopyAllObjectVariables.GDTargetObjectObjects1= [];
gdjs.evtsExt__ExtendedVariables__A_CopyAllObjectVariables.GDTargetObjectObjects2= [];


gdjs.evtsExt__ExtendedVariables__A_CopyAllObjectVariables.mapOfGDgdjs_9546evtsExt_9595_9595ExtendedVariables_9595_9595A_9595CopyAllObjectVariables_9546GDSourceObjectObjects1Objects = Hashtable.newFrom({"SourceObject": gdjs.evtsExt__ExtendedVariables__A_CopyAllObjectVariables.GDSourceObjectObjects1});
gdjs.evtsExt__ExtendedVariables__A_CopyAllObjectVariables.mapOfGDgdjs_9546evtsExt_9595_9595ExtendedVariables_9595_9595A_9595CopyAllObjectVariables_9546GDTargetObjectObjects1Objects = Hashtable.newFrom({"TargetObject": gdjs.evtsExt__ExtendedVariables__A_CopyAllObjectVariables.GDTargetObjectObjects1});
gdjs.evtsExt__ExtendedVariables__A_CopyAllObjectVariables.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("SourceObject"), gdjs.evtsExt__ExtendedVariables__A_CopyAllObjectVariables.GDSourceObjectObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("TargetObject"), gdjs.evtsExt__ExtendedVariables__A_CopyAllObjectVariables.GDTargetObjectObjects1);
{gdjs.evtsExt__ExtendedVariables__CopyAllObjectVariables.func(runtimeScene, gdjs.evtsExt__ExtendedVariables__A_CopyAllObjectVariables.mapOfGDgdjs_9546evtsExt_9595_9595ExtendedVariables_9595_9595A_9595CopyAllObjectVariables_9546GDSourceObjectObjects1Objects, gdjs.evtsExt__ExtendedVariables__A_CopyAllObjectVariables.mapOfGDgdjs_9546evtsExt_9595_9595ExtendedVariables_9595_9595A_9595CopyAllObjectVariables_9546GDTargetObjectObjects1Objects, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


};

gdjs.evtsExt__ExtendedVariables__A_CopyAllObjectVariables.func = function(runtimeScene, SourceObject, TargetObject, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"SourceObject": SourceObject
, "TargetObject": TargetObject
},
  _objectArraysMap: {
"SourceObject": gdjs.objectsListsToArray(SourceObject)
, "TargetObject": gdjs.objectsListsToArray(TargetObject)
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

gdjs.evtsExt__ExtendedVariables__A_CopyAllObjectVariables.GDSourceObjectObjects1.length = 0;
gdjs.evtsExt__ExtendedVariables__A_CopyAllObjectVariables.GDSourceObjectObjects2.length = 0;
gdjs.evtsExt__ExtendedVariables__A_CopyAllObjectVariables.GDTargetObjectObjects1.length = 0;
gdjs.evtsExt__ExtendedVariables__A_CopyAllObjectVariables.GDTargetObjectObjects2.length = 0;

gdjs.evtsExt__ExtendedVariables__A_CopyAllObjectVariables.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__ExtendedVariables__A_CopyAllObjectVariables.registeredGdjsCallbacks = [];