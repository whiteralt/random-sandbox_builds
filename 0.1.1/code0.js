gdjs.menuCode = {};
gdjs.menuCode.GDtitleObjects1= [];
gdjs.menuCode.GDtitleObjects2= [];
gdjs.menuCode.GDprototype_9595playButtonObjects1= [];
gdjs.menuCode.GDprototype_9595playButtonObjects2= [];


gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDprototype_95959595playButtonObjects1Objects = Hashtable.newFrom({"prototype_playButton": gdjs.menuCode.GDprototype_9595playButtonObjects1});
gdjs.menuCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("prototype_playButton"), gdjs.menuCode.GDprototype_9595playButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDprototype_95959595playButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "scene", false);
}}

}


};

gdjs.menuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.menuCode.GDtitleObjects1.length = 0;
gdjs.menuCode.GDtitleObjects2.length = 0;
gdjs.menuCode.GDprototype_9595playButtonObjects1.length = 0;
gdjs.menuCode.GDprototype_9595playButtonObjects2.length = 0;

gdjs.menuCode.eventsList0(runtimeScene);

return;

}

gdjs['menuCode'] = gdjs.menuCode;
