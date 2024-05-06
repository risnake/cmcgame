gdjs.cul_32de_32sacCode = {};
gdjs.cul_32de_32sacCode.GDNewTiledSpriteObjects1= [];
gdjs.cul_32de_32sacCode.GDNewTiledSpriteObjects2= [];
gdjs.cul_32de_32sacCode.GDNewSpriteObjects1= [];
gdjs.cul_32de_32sacCode.GDNewSpriteObjects2= [];
gdjs.cul_32de_32sacCode.GDcurvedcornerObjects1= [];
gdjs.cul_32de_32sacCode.GDcurvedcornerObjects2= [];
gdjs.cul_32de_32sacCode.GDCMCObjects1= [];
gdjs.cul_32de_32sacCode.GDCMCObjects2= [];
gdjs.cul_32de_32sacCode.GDfade_9595outObjects1= [];
gdjs.cul_32de_32sacCode.GDfade_9595outObjects2= [];
gdjs.cul_32de_32sacCode.GDending_9595screenObjects1= [];
gdjs.cul_32de_32sacCode.GDending_9595screenObjects2= [];
gdjs.cul_32de_32sacCode.GDGreenHouseSmall2Objects1= [];
gdjs.cul_32de_32sacCode.GDGreenHouseSmall2Objects2= [];
gdjs.cul_32de_32sacCode.GDRedHouse2Objects1= [];
gdjs.cul_32de_32sacCode.GDRedHouse2Objects2= [];
gdjs.cul_32de_32sacCode.GDGreenHouse2Objects1= [];
gdjs.cul_32de_32sacCode.GDGreenHouse2Objects2= [];
gdjs.cul_32de_32sacCode.GDRedHouse1Objects1= [];
gdjs.cul_32de_32sacCode.GDRedHouse1Objects2= [];


gdjs.cul_32de_32sacCode.mapOfGDgdjs_9546cul_959532de_959532sacCode_9546GDCMCObjects1Objects = Hashtable.newFrom({"CMC": gdjs.cul_32de_32sacCode.GDCMCObjects1});
gdjs.cul_32de_32sacCode.mapOfGDgdjs_9546cul_959532de_959532sacCode_9546GDRedHouse2Objects1Objects = Hashtable.newFrom({"RedHouse2": gdjs.cul_32de_32sacCode.GDRedHouse2Objects1});
gdjs.cul_32de_32sacCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("CMC"), gdjs.cul_32de_32sacCode.GDCMCObjects1);
gdjs.copyArray(runtimeScene.getObjects("ending_screen"), gdjs.cul_32de_32sacCode.GDending_9595screenObjects1);
gdjs.copyArray(runtimeScene.getObjects("fade_out"), gdjs.cul_32de_32sacCode.GDfade_9595outObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.cul_32de_32sacCode.GDCMCObjects1.length !== 0 ? gdjs.cul_32de_32sacCode.GDCMCObjects1[0] : null), true, "", 0);
}{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 4, "", 0);
}{for(var i = 0, len = gdjs.cul_32de_32sacCode.GDCMCObjects1.length ;i < len;++i) {
    gdjs.cul_32de_32sacCode.GDCMCObjects1[i].getBehavior("Animation").pauseAnimation();
}
}{for(var i = 0, len = gdjs.cul_32de_32sacCode.GDfade_9595outObjects1.length ;i < len;++i) {
    gdjs.cul_32de_32sacCode.GDfade_9595outObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.cul_32de_32sacCode.GDending_9595screenObjects1.length ;i < len;++i) {
    gdjs.cul_32de_32sacCode.GDending_9595screenObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.cul_32de_32sacCode.GDfade_9595outObjects1.length ;i < len;++i) {
    gdjs.cul_32de_32sacCode.GDfade_9595outObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}{for(var i = 0, len = gdjs.cul_32de_32sacCode.GDending_9595screenObjects1.length ;i < len;++i) {
    gdjs.cul_32de_32sacCode.GDending_9595screenObjects1[i].getBehavior("BitmapText_AutoTyping").StartAtBeginning((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("CMC"), gdjs.cul_32de_32sacCode.GDCMCObjects1);
{for(var i = 0, len = gdjs.cul_32de_32sacCode.GDCMCObjects1.length ;i < len;++i) {
    gdjs.cul_32de_32sacCode.GDCMCObjects1[i].getBehavior("Animation").setAnimationName("Walking Left");
}
}{for(var i = 0, len = gdjs.cul_32de_32sacCode.GDCMCObjects1.length ;i < len;++i) {
    gdjs.cul_32de_32sacCode.GDCMCObjects1[i].getBehavior("Animation").resumeAnimation();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("CMC"), gdjs.cul_32de_32sacCode.GDCMCObjects1);
{for(var i = 0, len = gdjs.cul_32de_32sacCode.GDCMCObjects1.length ;i < len;++i) {
    gdjs.cul_32de_32sacCode.GDCMCObjects1[i].getBehavior("Animation").setAnimationName("Walking Right");
}
}{for(var i = 0, len = gdjs.cul_32de_32sacCode.GDCMCObjects1.length ;i < len;++i) {
    gdjs.cul_32de_32sacCode.GDCMCObjects1[i].getBehavior("Animation").resumeAnimation();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("CMC"), gdjs.cul_32de_32sacCode.GDCMCObjects1);
{for(var i = 0, len = gdjs.cul_32de_32sacCode.GDCMCObjects1.length ;i < len;++i) {
    gdjs.cul_32de_32sacCode.GDCMCObjects1[i].getBehavior("Animation").setAnimationName("Walking Up");
}
}{for(var i = 0, len = gdjs.cul_32de_32sacCode.GDCMCObjects1.length ;i < len;++i) {
    gdjs.cul_32de_32sacCode.GDCMCObjects1[i].setY(gdjs.cul_32de_32sacCode.GDCMCObjects1[i].getY() - (1.1));
}
}{for(var i = 0, len = gdjs.cul_32de_32sacCode.GDCMCObjects1.length ;i < len;++i) {
    gdjs.cul_32de_32sacCode.GDCMCObjects1[i].getBehavior("Animation").resumeAnimation();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("CMC"), gdjs.cul_32de_32sacCode.GDCMCObjects1);
{for(var i = 0, len = gdjs.cul_32de_32sacCode.GDCMCObjects1.length ;i < len;++i) {
    gdjs.cul_32de_32sacCode.GDCMCObjects1[i].getBehavior("Animation").setAnimationName("Walking Down");
}
}{for(var i = 0, len = gdjs.cul_32de_32sacCode.GDCMCObjects1.length ;i < len;++i) {
    gdjs.cul_32de_32sacCode.GDCMCObjects1[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.cul_32de_32sacCode.GDCMCObjects1.length ;i < len;++i) {
    gdjs.cul_32de_32sacCode.GDCMCObjects1[i].setY(gdjs.cul_32de_32sacCode.GDCMCObjects1[i].getY() + (1.1));
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("CMC"), gdjs.cul_32de_32sacCode.GDCMCObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.cul_32de_32sacCode.GDCMCObjects1.length !== 0 ? gdjs.cul_32de_32sacCode.GDCMCObjects1[0] : null), true, "", 0);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.anyKeyReleased(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("CMC"), gdjs.cul_32de_32sacCode.GDCMCObjects1);
{for(var i = 0, len = gdjs.cul_32de_32sacCode.GDCMCObjects1.length ;i < len;++i) {
    gdjs.cul_32de_32sacCode.GDCMCObjects1[i].getBehavior("Animation").pauseAnimation();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("CMC"), gdjs.cul_32de_32sacCode.GDCMCObjects1);
gdjs.copyArray(runtimeScene.getObjects("RedHouse2"), gdjs.cul_32de_32sacCode.GDRedHouse2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.cul_32de_32sacCode.mapOfGDgdjs_9546cul_959532de_959532sacCode_9546GDCMCObjects1Objects, gdjs.cul_32de_32sacCode.mapOfGDgdjs_9546cul_959532de_959532sacCode_9546GDRedHouse2Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Return");
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("fade_out"), gdjs.cul_32de_32sacCode.GDfade_9595outObjects1);
{for(var i = 0, len = gdjs.cul_32de_32sacCode.GDfade_9595outObjects1.length ;i < len;++i) {
    gdjs.cul_32de_32sacCode.GDfade_9595outObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.cul_32de_32sacCode.GDfade_9595outObjects1.length ;i < len;++i) {
    gdjs.cul_32de_32sacCode.GDfade_9595outObjects1[i].getBehavior("Opacity").setOpacity(gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) + 5);
}
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0), false);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "danglarhouse", false);
}}

}


};

gdjs.cul_32de_32sacCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.cul_32de_32sacCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.cul_32de_32sacCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.cul_32de_32sacCode.GDNewSpriteObjects1.length = 0;
gdjs.cul_32de_32sacCode.GDNewSpriteObjects2.length = 0;
gdjs.cul_32de_32sacCode.GDcurvedcornerObjects1.length = 0;
gdjs.cul_32de_32sacCode.GDcurvedcornerObjects2.length = 0;
gdjs.cul_32de_32sacCode.GDCMCObjects1.length = 0;
gdjs.cul_32de_32sacCode.GDCMCObjects2.length = 0;
gdjs.cul_32de_32sacCode.GDfade_9595outObjects1.length = 0;
gdjs.cul_32de_32sacCode.GDfade_9595outObjects2.length = 0;
gdjs.cul_32de_32sacCode.GDending_9595screenObjects1.length = 0;
gdjs.cul_32de_32sacCode.GDending_9595screenObjects2.length = 0;
gdjs.cul_32de_32sacCode.GDGreenHouseSmall2Objects1.length = 0;
gdjs.cul_32de_32sacCode.GDGreenHouseSmall2Objects2.length = 0;
gdjs.cul_32de_32sacCode.GDRedHouse2Objects1.length = 0;
gdjs.cul_32de_32sacCode.GDRedHouse2Objects2.length = 0;
gdjs.cul_32de_32sacCode.GDGreenHouse2Objects1.length = 0;
gdjs.cul_32de_32sacCode.GDGreenHouse2Objects2.length = 0;
gdjs.cul_32de_32sacCode.GDRedHouse1Objects1.length = 0;
gdjs.cul_32de_32sacCode.GDRedHouse1Objects2.length = 0;

gdjs.cul_32de_32sacCode.eventsList0(runtimeScene);

return;

}

gdjs['cul_32de_32sacCode'] = gdjs.cul_32de_32sacCode;
