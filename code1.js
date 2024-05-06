gdjs.mcislandCode = {};
gdjs.mcislandCode.GDwalls_9595of_9595the_9595mazeObjects1= [];
gdjs.mcislandCode.GDwalls_9595of_9595the_9595mazeObjects2= [];
gdjs.mcislandCode.GDNewTiledSpriteObjects1= [];
gdjs.mcislandCode.GDNewTiledSpriteObjects2= [];
gdjs.mcislandCode.GDNewSpriteObjects1= [];
gdjs.mcislandCode.GDNewSpriteObjects2= [];
gdjs.mcislandCode.GDCMCObjects1= [];
gdjs.mcislandCode.GDCMCObjects2= [];
gdjs.mcislandCode.GDNewTiledSprite2Objects1= [];
gdjs.mcislandCode.GDNewTiledSprite2Objects2= [];
gdjs.mcislandCode.GDNewSprite2Objects1= [];
gdjs.mcislandCode.GDNewSprite2Objects2= [];
gdjs.mcislandCode.GDNewSprite3Objects1= [];
gdjs.mcislandCode.GDNewSprite3Objects2= [];
gdjs.mcislandCode.GDfade_9595outObjects1= [];
gdjs.mcislandCode.GDfade_9595outObjects2= [];
gdjs.mcislandCode.GDending_9595screenObjects1= [];
gdjs.mcislandCode.GDending_9595screenObjects2= [];


gdjs.mcislandCode.mapOfGDgdjs_9546mcislandCode_9546GDNewSprite2Objects1Objects = Hashtable.newFrom({"NewSprite2": gdjs.mcislandCode.GDNewSprite2Objects1});
gdjs.mcislandCode.mapOfGDgdjs_9546mcislandCode_9546GDCMCObjects1Objects = Hashtable.newFrom({"CMC": gdjs.mcislandCode.GDCMCObjects1});
gdjs.mcislandCode.asyncCallback14150364 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "cul de sac", false);
}}
gdjs.mcislandCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(9), (runtimeScene) => (gdjs.mcislandCode.asyncCallback14150364(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.mcislandCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("CMC"), gdjs.mcislandCode.GDCMCObjects1);
gdjs.copyArray(runtimeScene.getObjects("ending_screen"), gdjs.mcislandCode.GDending_9595screenObjects1);
gdjs.copyArray(runtimeScene.getObjects("fade_out"), gdjs.mcislandCode.GDfade_9595outObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.mcislandCode.GDCMCObjects1.length !== 0 ? gdjs.mcislandCode.GDCMCObjects1[0] : null), true, "", 0);
}{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 4, "", 0);
}{for(var i = 0, len = gdjs.mcislandCode.GDCMCObjects1.length ;i < len;++i) {
    gdjs.mcislandCode.GDCMCObjects1[i].getBehavior("Animation").pauseAnimation();
}
}{for(var i = 0, len = gdjs.mcislandCode.GDfade_9595outObjects1.length ;i < len;++i) {
    gdjs.mcislandCode.GDfade_9595outObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.mcislandCode.GDending_9595screenObjects1.length ;i < len;++i) {
    gdjs.mcislandCode.GDending_9595screenObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.mcislandCode.GDfade_9595outObjects1.length ;i < len;++i) {
    gdjs.mcislandCode.GDfade_9595outObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}{for(var i = 0, len = gdjs.mcislandCode.GDending_9595screenObjects1.length ;i < len;++i) {
    gdjs.mcislandCode.GDending_9595screenObjects1[i].getBehavior("BitmapText_AutoTyping").StartAtBeginning((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("CMC"), gdjs.mcislandCode.GDCMCObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.mcislandCode.GDNewSprite3Objects1);
{gdjs.evtTools.camera.setCameraY(runtimeScene, (( gdjs.mcislandCode.GDCMCObjects1.length === 0 ) ? 0 :gdjs.mcislandCode.GDCMCObjects1[0].getCenterYInScene()), "", 0);
}{gdjs.evtTools.camera.setCameraX(runtimeScene, (( gdjs.mcislandCode.GDCMCObjects1.length === 0 ) ? 0 :gdjs.mcislandCode.GDCMCObjects1[0].getCenterXInScene()), "", 0);
}{for(var i = 0, len = gdjs.mcislandCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.mcislandCode.GDNewSprite3Objects1[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.mcislandCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.mcislandCode.GDNewSprite3Objects1[i].getBehavior("Animation").setAnimationName("aa");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("CMC"), gdjs.mcislandCode.GDCMCObjects1);
{for(var i = 0, len = gdjs.mcislandCode.GDCMCObjects1.length ;i < len;++i) {
    gdjs.mcislandCode.GDCMCObjects1[i].getBehavior("Animation").setAnimationName("Walking Left");
}
}{for(var i = 0, len = gdjs.mcislandCode.GDCMCObjects1.length ;i < len;++i) {
    gdjs.mcislandCode.GDCMCObjects1[i].getBehavior("Animation").resumeAnimation();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("CMC"), gdjs.mcislandCode.GDCMCObjects1);
{for(var i = 0, len = gdjs.mcislandCode.GDCMCObjects1.length ;i < len;++i) {
    gdjs.mcislandCode.GDCMCObjects1[i].getBehavior("Animation").setAnimationName("Walking Right");
}
}{for(var i = 0, len = gdjs.mcislandCode.GDCMCObjects1.length ;i < len;++i) {
    gdjs.mcislandCode.GDCMCObjects1[i].getBehavior("Animation").resumeAnimation();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("CMC"), gdjs.mcislandCode.GDCMCObjects1);
{for(var i = 0, len = gdjs.mcislandCode.GDCMCObjects1.length ;i < len;++i) {
    gdjs.mcislandCode.GDCMCObjects1[i].getBehavior("Animation").setAnimationName("Walking Up");
}
}{for(var i = 0, len = gdjs.mcislandCode.GDCMCObjects1.length ;i < len;++i) {
    gdjs.mcislandCode.GDCMCObjects1[i].setY(gdjs.mcislandCode.GDCMCObjects1[i].getY() - (1.1));
}
}{for(var i = 0, len = gdjs.mcislandCode.GDCMCObjects1.length ;i < len;++i) {
    gdjs.mcislandCode.GDCMCObjects1[i].getBehavior("Animation").resumeAnimation();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("CMC"), gdjs.mcislandCode.GDCMCObjects1);
{for(var i = 0, len = gdjs.mcislandCode.GDCMCObjects1.length ;i < len;++i) {
    gdjs.mcislandCode.GDCMCObjects1[i].getBehavior("Animation").setAnimationName("Walking Down");
}
}{for(var i = 0, len = gdjs.mcislandCode.GDCMCObjects1.length ;i < len;++i) {
    gdjs.mcislandCode.GDCMCObjects1[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.mcislandCode.GDCMCObjects1.length ;i < len;++i) {
    gdjs.mcislandCode.GDCMCObjects1[i].setY(gdjs.mcislandCode.GDCMCObjects1[i].getY() + (1.1));
}
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.anyKeyReleased(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("CMC"), gdjs.mcislandCode.GDCMCObjects1);
{for(var i = 0, len = gdjs.mcislandCode.GDCMCObjects1.length ;i < len;++i) {
    gdjs.mcislandCode.GDCMCObjects1[i].getBehavior("Animation").pauseAnimation();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("CMC"), gdjs.mcislandCode.GDCMCObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.mcislandCode.GDNewSprite2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.mcislandCode.mapOfGDgdjs_9546mcislandCode_9546GDNewSprite2Objects1Objects, gdjs.mcislandCode.mapOfGDgdjs_9546mcislandCode_9546GDCMCObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("fade_out"), gdjs.mcislandCode.GDfade_9595outObjects1);
{for(var i = 0, len = gdjs.mcislandCode.GDfade_9595outObjects1.length ;i < len;++i) {
    gdjs.mcislandCode.GDfade_9595outObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.mcislandCode.GDfade_9595outObjects1.length ;i < len;++i) {
    gdjs.mcislandCode.GDfade_9595outObjects1[i].getBehavior("Opacity").setOpacity(gdjs.mcislandCode.GDfade_9595outObjects1[i].getBehavior("Opacity").getOpacity() + (gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) + 5));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("fade_out"), gdjs.mcislandCode.GDfade_9595outObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.mcislandCode.GDfade_9595outObjects1.length;i<l;++i) {
    if ( gdjs.mcislandCode.GDfade_9595outObjects1[i].getBehavior("Opacity").getOpacity() > 50 ) {
        isConditionTrue_1 = true;
        gdjs.mcislandCode.GDfade_9595outObjects1[k] = gdjs.mcislandCode.GDfade_9595outObjects1[i];
        ++k;
    }
}
gdjs.mcislandCode.GDfade_9595outObjects1.length = k;
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ending_screen"), gdjs.mcislandCode.GDending_9595screenObjects1);
{for(var i = 0, len = gdjs.mcislandCode.GDending_9595screenObjects1.length ;i < len;++i) {
    gdjs.mcislandCode.GDending_9595screenObjects1[i].hide(false);
}
}
{ //Subevents
gdjs.mcislandCode.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.mcislandCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.mcislandCode.GDwalls_9595of_9595the_9595mazeObjects1.length = 0;
gdjs.mcislandCode.GDwalls_9595of_9595the_9595mazeObjects2.length = 0;
gdjs.mcislandCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.mcislandCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.mcislandCode.GDNewSpriteObjects1.length = 0;
gdjs.mcislandCode.GDNewSpriteObjects2.length = 0;
gdjs.mcislandCode.GDCMCObjects1.length = 0;
gdjs.mcislandCode.GDCMCObjects2.length = 0;
gdjs.mcislandCode.GDNewTiledSprite2Objects1.length = 0;
gdjs.mcislandCode.GDNewTiledSprite2Objects2.length = 0;
gdjs.mcislandCode.GDNewSprite2Objects1.length = 0;
gdjs.mcislandCode.GDNewSprite2Objects2.length = 0;
gdjs.mcislandCode.GDNewSprite3Objects1.length = 0;
gdjs.mcislandCode.GDNewSprite3Objects2.length = 0;
gdjs.mcislandCode.GDfade_9595outObjects1.length = 0;
gdjs.mcislandCode.GDfade_9595outObjects2.length = 0;
gdjs.mcislandCode.GDending_9595screenObjects1.length = 0;
gdjs.mcislandCode.GDending_9595screenObjects2.length = 0;

gdjs.mcislandCode.eventsList1(runtimeScene);

return;

}

gdjs['mcislandCode'] = gdjs.mcislandCode;
