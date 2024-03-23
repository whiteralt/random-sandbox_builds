gdjs.sceneCode = {};
gdjs.sceneCode.GDtilePlatformObjects1= [];
gdjs.sceneCode.GDtilePlatformObjects2= [];
gdjs.sceneCode.GDOGtileObjects1= [];
gdjs.sceneCode.GDOGtileObjects2= [];
gdjs.sceneCode.GDtabButtonObjects1= [];
gdjs.sceneCode.GDtabButtonObjects2= [];
gdjs.sceneCode.GDtranshalfTabObjects1= [];
gdjs.sceneCode.GDtranshalfTabObjects2= [];
gdjs.sceneCode.GDfpsObjects1= [];
gdjs.sceneCode.GDfpsObjects2= [];
gdjs.sceneCode.GDstaticTileADDbuttonObjects1= [];
gdjs.sceneCode.GDstaticTileADDbuttonObjects2= [];
gdjs.sceneCode.GDdynamicTileADDbuttonObjects1= [];
gdjs.sceneCode.GDdynamicTileADDbuttonObjects2= [];
gdjs.sceneCode.GDtileSIZEbuttonObjects1= [];
gdjs.sceneCode.GDtileSIZEbuttonObjects2= [];
gdjs.sceneCode.GDstaticTileDELbuttonObjects1= [];
gdjs.sceneCode.GDstaticTileDELbuttonObjects2= [];
gdjs.sceneCode.GDdynamicTileDELbuttonObjects1= [];
gdjs.sceneCode.GDdynamicTileDELbuttonObjects2= [];
gdjs.sceneCode.GDtileObjects1= [];
gdjs.sceneCode.GDtileObjects2= [];


gdjs.sceneCode.mapOfGDgdjs_9546sceneCode_9546GDfpsObjects1Objects = Hashtable.newFrom({"fps": gdjs.sceneCode.GDfpsObjects1});
gdjs.sceneCode.mapOfGDgdjs_9546sceneCode_9546GDtileObjects1Objects = Hashtable.newFrom({"tile": gdjs.sceneCode.GDtileObjects1});
gdjs.sceneCode.mapOfGDgdjs_9546sceneCode_9546GDOGtileObjects1Objects = Hashtable.newFrom({"OGtile": gdjs.sceneCode.GDOGtileObjects1});
gdjs.sceneCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.sceneCode.GDfpsObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.sceneCode.mapOfGDgdjs_9546sceneCode_9546GDfpsObjects1Objects, gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 25, gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 25, "");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("staticTileADDbutton"), gdjs.sceneCode.GDstaticTileADDbuttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.sceneCode.GDstaticTileADDbuttonObjects1.length;i<l;++i) {
    if ( gdjs.sceneCode.GDstaticTileADDbuttonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.sceneCode.GDstaticTileADDbuttonObjects1[k] = gdjs.sceneCode.GDstaticTileADDbuttonObjects1[i];
        ++k;
    }
}
gdjs.sceneCode.GDstaticTileADDbuttonObjects1.length = k;
if (isConditionTrue_0) {
gdjs.sceneCode.GDtileObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.sceneCode.mapOfGDgdjs_9546sceneCode_9546GDtileObjects1Objects, gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2, gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2, "");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("dynamicTileADDbutton"), gdjs.sceneCode.GDdynamicTileADDbuttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.sceneCode.GDdynamicTileADDbuttonObjects1.length;i<l;++i) {
    if ( gdjs.sceneCode.GDdynamicTileADDbuttonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.sceneCode.GDdynamicTileADDbuttonObjects1[k] = gdjs.sceneCode.GDdynamicTileADDbuttonObjects1[i];
        ++k;
    }
}
gdjs.sceneCode.GDdynamicTileADDbuttonObjects1.length = k;
if (isConditionTrue_0) {
gdjs.sceneCode.GDOGtileObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.sceneCode.mapOfGDgdjs_9546sceneCode_9546GDOGtileObjects1Objects, gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2, gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2, "");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("staticTileDELbutton"), gdjs.sceneCode.GDstaticTileDELbuttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.sceneCode.GDstaticTileDELbuttonObjects1.length;i<l;++i) {
    if ( gdjs.sceneCode.GDstaticTileDELbuttonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.sceneCode.GDstaticTileDELbuttonObjects1[k] = gdjs.sceneCode.GDstaticTileDELbuttonObjects1[i];
        ++k;
    }
}
gdjs.sceneCode.GDstaticTileDELbuttonObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("tile"), gdjs.sceneCode.GDtileObjects1);
{for(var i = 0, len = gdjs.sceneCode.GDtileObjects1.length ;i < len;++i) {
    gdjs.sceneCode.GDtileObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("dynamicTileDELbutton"), gdjs.sceneCode.GDdynamicTileDELbuttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.sceneCode.GDdynamicTileDELbuttonObjects1.length;i<l;++i) {
    if ( gdjs.sceneCode.GDdynamicTileDELbuttonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.sceneCode.GDdynamicTileDELbuttonObjects1[k] = gdjs.sceneCode.GDdynamicTileDELbuttonObjects1[i];
        ++k;
    }
}
gdjs.sceneCode.GDdynamicTileDELbuttonObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("OGtile"), gdjs.sceneCode.GDOGtileObjects1);
{for(var i = 0, len = gdjs.sceneCode.GDOGtileObjects1.length ;i < len;++i) {
    gdjs.sceneCode.GDOGtileObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("tileSIZEbutton"), gdjs.sceneCode.GDtileSIZEbuttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.sceneCode.GDtileSIZEbuttonObjects1.length;i<l;++i) {
    if ( gdjs.sceneCode.GDtileSIZEbuttonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.sceneCode.GDtileSIZEbuttonObjects1[k] = gdjs.sceneCode.GDtileSIZEbuttonObjects1[i];
        ++k;
    }
}
gdjs.sceneCode.GDtileSIZEbuttonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtsExt__PopUp__Prompt.func(runtimeScene, "set size for spawning tiles", "95", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


};

gdjs.sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.sceneCode.GDtilePlatformObjects1.length = 0;
gdjs.sceneCode.GDtilePlatformObjects2.length = 0;
gdjs.sceneCode.GDOGtileObjects1.length = 0;
gdjs.sceneCode.GDOGtileObjects2.length = 0;
gdjs.sceneCode.GDtabButtonObjects1.length = 0;
gdjs.sceneCode.GDtabButtonObjects2.length = 0;
gdjs.sceneCode.GDtranshalfTabObjects1.length = 0;
gdjs.sceneCode.GDtranshalfTabObjects2.length = 0;
gdjs.sceneCode.GDfpsObjects1.length = 0;
gdjs.sceneCode.GDfpsObjects2.length = 0;
gdjs.sceneCode.GDstaticTileADDbuttonObjects1.length = 0;
gdjs.sceneCode.GDstaticTileADDbuttonObjects2.length = 0;
gdjs.sceneCode.GDdynamicTileADDbuttonObjects1.length = 0;
gdjs.sceneCode.GDdynamicTileADDbuttonObjects2.length = 0;
gdjs.sceneCode.GDtileSIZEbuttonObjects1.length = 0;
gdjs.sceneCode.GDtileSIZEbuttonObjects2.length = 0;
gdjs.sceneCode.GDstaticTileDELbuttonObjects1.length = 0;
gdjs.sceneCode.GDstaticTileDELbuttonObjects2.length = 0;
gdjs.sceneCode.GDdynamicTileDELbuttonObjects1.length = 0;
gdjs.sceneCode.GDdynamicTileDELbuttonObjects2.length = 0;
gdjs.sceneCode.GDtileObjects1.length = 0;
gdjs.sceneCode.GDtileObjects2.length = 0;

gdjs.sceneCode.eventsList0(runtimeScene);

return;

}

gdjs['sceneCode'] = gdjs.sceneCode;
