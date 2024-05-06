gdjs.danglarhouseCode = {};
gdjs.danglarhouseCode.GDNewTiledSpriteObjects1= [];
gdjs.danglarhouseCode.GDNewTiledSpriteObjects2= [];
gdjs.danglarhouseCode.GDNewTiledSpriteObjects3= [];
gdjs.danglarhouseCode.GDNewTiledSpriteObjects4= [];
gdjs.danglarhouseCode.GDCMCObjects1= [];
gdjs.danglarhouseCode.GDCMCObjects2= [];
gdjs.danglarhouseCode.GDCMCObjects3= [];
gdjs.danglarhouseCode.GDCMCObjects4= [];
gdjs.danglarhouseCode.GDfade_9595outObjects1= [];
gdjs.danglarhouseCode.GDfade_9595outObjects2= [];
gdjs.danglarhouseCode.GDfade_9595outObjects3= [];
gdjs.danglarhouseCode.GDfade_9595outObjects4= [];
gdjs.danglarhouseCode.GDwallsObjects1= [];
gdjs.danglarhouseCode.GDwallsObjects2= [];
gdjs.danglarhouseCode.GDwallsObjects3= [];
gdjs.danglarhouseCode.GDwallsObjects4= [];
gdjs.danglarhouseCode.GDNewSpriteObjects1= [];
gdjs.danglarhouseCode.GDNewSpriteObjects2= [];
gdjs.danglarhouseCode.GDNewSpriteObjects3= [];
gdjs.danglarhouseCode.GDNewSpriteObjects4= [];
gdjs.danglarhouseCode.GDNewSprite2Objects1= [];
gdjs.danglarhouseCode.GDNewSprite2Objects2= [];
gdjs.danglarhouseCode.GDNewSprite2Objects3= [];
gdjs.danglarhouseCode.GDNewSprite2Objects4= [];
gdjs.danglarhouseCode.GDMaleCharacter12Objects1= [];
gdjs.danglarhouseCode.GDMaleCharacter12Objects2= [];
gdjs.danglarhouseCode.GDMaleCharacter12Objects3= [];
gdjs.danglarhouseCode.GDMaleCharacter12Objects4= [];
gdjs.danglarhouseCode.GDdanglar_9595speechObjects1= [];
gdjs.danglarhouseCode.GDdanglar_9595speechObjects2= [];
gdjs.danglarhouseCode.GDdanglar_9595speechObjects3= [];
gdjs.danglarhouseCode.GDdanglar_9595speechObjects4= [];
gdjs.danglarhouseCode.GDCMC_9595speechObjects1= [];
gdjs.danglarhouseCode.GDCMC_9595speechObjects2= [];
gdjs.danglarhouseCode.GDCMC_9595speechObjects3= [];
gdjs.danglarhouseCode.GDCMC_9595speechObjects4= [];
gdjs.danglarhouseCode.GDdsdObjects1= [];
gdjs.danglarhouseCode.GDdsdObjects2= [];
gdjs.danglarhouseCode.GDdsdObjects3= [];
gdjs.danglarhouseCode.GDdsdObjects4= [];


gdjs.danglarhouseCode.mapOfGDgdjs_9546danglarhouseCode_9546GDNewSprite2Objects1Objects = Hashtable.newFrom({"NewSprite2": gdjs.danglarhouseCode.GDNewSprite2Objects1});
gdjs.danglarhouseCode.mapOfGDgdjs_9546danglarhouseCode_9546GDCMCObjects1Objects = Hashtable.newFrom({"CMC": gdjs.danglarhouseCode.GDCMCObjects1});
gdjs.danglarhouseCode.asyncCallback8804740 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("danglar_speech"), gdjs.danglarhouseCode.GDdanglar_9595speechObjects4);

{for(var i = 0, len = gdjs.danglarhouseCode.GDdanglar_9595speechObjects4.length ;i < len;++i) {
    gdjs.danglarhouseCode.GDdanglar_9595speechObjects4[i].hide();
}
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(0), true);
}}
gdjs.danglarhouseCode.eventsList0 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
for (const obj of gdjs.danglarhouseCode.GDdanglar_9595speechObjects3) asyncObjectsList.addObject("danglar_speech", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.danglarhouseCode.asyncCallback8804740(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.danglarhouseCode.asyncCallback12613252 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("CMC_speech"), gdjs.danglarhouseCode.GDCMC_9595speechObjects3);

gdjs.copyArray(asyncObjectsList.getObjects("danglar_speech"), gdjs.danglarhouseCode.GDdanglar_9595speechObjects3);

{for(var i = 0, len = gdjs.danglarhouseCode.GDCMC_9595speechObjects3.length ;i < len;++i) {
    gdjs.danglarhouseCode.GDCMC_9595speechObjects3[i].hide();
}
}{for(var i = 0, len = gdjs.danglarhouseCode.GDdanglar_9595speechObjects3.length ;i < len;++i) {
    gdjs.danglarhouseCode.GDdanglar_9595speechObjects3[i].getBehavior("Text").setText(("Ok sure!"));
}
}
{ //Subevents
gdjs.danglarhouseCode.eventsList0(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.danglarhouseCode.eventsList1 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
for (const obj of gdjs.danglarhouseCode.GDCMC_9595speechObjects2) asyncObjectsList.addObject("CMC_speech", obj);
/* Don't save danglar_speech as it will be provided by the parent asyncObjectsList. */
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(5), (runtimeScene) => (gdjs.danglarhouseCode.asyncCallback12613252(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.danglarhouseCode.asyncCallback11032732 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(runtimeScene.getObjects("CMC_speech"), gdjs.danglarhouseCode.GDCMC_9595speechObjects2);
{for(var i = 0, len = gdjs.danglarhouseCode.GDCMC_9595speechObjects2.length ;i < len;++i) {
    gdjs.danglarhouseCode.GDCMC_9595speechObjects2[i].hide(false);
}
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0), true);
}{for(var i = 0, len = gdjs.danglarhouseCode.GDCMC_9595speechObjects2.length ;i < len;++i) {
    gdjs.danglarhouseCode.GDCMC_9595speechObjects2[i].getBehavior("BitmapText_AutoTyping").StartAtBeginning((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.danglarhouseCode.eventsList1(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.danglarhouseCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.danglarhouseCode.GDdanglar_9595speechObjects1) asyncObjectsList.addObject("danglar_speech", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.danglarhouseCode.asyncCallback11032732(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.danglarhouseCode.asyncCallback10481156 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "court", false);
}}
gdjs.danglarhouseCode.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.danglarhouseCode.asyncCallback10481156(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.danglarhouseCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("CMC"), gdjs.danglarhouseCode.GDCMCObjects1);
gdjs.copyArray(runtimeScene.getObjects("CMC_speech"), gdjs.danglarhouseCode.GDCMC_9595speechObjects1);
gdjs.copyArray(runtimeScene.getObjects("MaleCharacter12"), gdjs.danglarhouseCode.GDMaleCharacter12Objects1);
gdjs.copyArray(runtimeScene.getObjects("danglar_speech"), gdjs.danglarhouseCode.GDdanglar_9595speechObjects1);
gdjs.copyArray(runtimeScene.getObjects("fade_out"), gdjs.danglarhouseCode.GDfade_9595outObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.danglarhouseCode.GDCMCObjects1.length !== 0 ? gdjs.danglarhouseCode.GDCMCObjects1[0] : null), true, "", 0);
}{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 2, "", 0);
}{for(var i = 0, len = gdjs.danglarhouseCode.GDCMCObjects1.length ;i < len;++i) {
    gdjs.danglarhouseCode.GDCMCObjects1[i].getBehavior("Animation").pauseAnimation();
}
}{for(var i = 0, len = gdjs.danglarhouseCode.GDMaleCharacter12Objects1.length ;i < len;++i) {
    gdjs.danglarhouseCode.GDMaleCharacter12Objects1[i].getBehavior("Animation").pauseAnimation();
}
}{for(var i = 0, len = gdjs.danglarhouseCode.GDfade_9595outObjects1.length ;i < len;++i) {
    gdjs.danglarhouseCode.GDfade_9595outObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.danglarhouseCode.GDfade_9595outObjects1.length ;i < len;++i) {
    gdjs.danglarhouseCode.GDfade_9595outObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}{for(var i = 0, len = gdjs.danglarhouseCode.GDdanglar_9595speechObjects1.length ;i < len;++i) {
    gdjs.danglarhouseCode.GDdanglar_9595speechObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.danglarhouseCode.GDCMC_9595speechObjects1.length ;i < len;++i) {
    gdjs.danglarhouseCode.GDCMC_9595speechObjects1[i].hide();
}
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(0), false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("CMC"), gdjs.danglarhouseCode.GDCMCObjects1);
{for(var i = 0, len = gdjs.danglarhouseCode.GDCMCObjects1.length ;i < len;++i) {
    gdjs.danglarhouseCode.GDCMCObjects1[i].getBehavior("Animation").setAnimationName("Walking Left");
}
}{for(var i = 0, len = gdjs.danglarhouseCode.GDCMCObjects1.length ;i < len;++i) {
    gdjs.danglarhouseCode.GDCMCObjects1[i].getBehavior("Animation").resumeAnimation();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("CMC"), gdjs.danglarhouseCode.GDCMCObjects1);
{for(var i = 0, len = gdjs.danglarhouseCode.GDCMCObjects1.length ;i < len;++i) {
    gdjs.danglarhouseCode.GDCMCObjects1[i].getBehavior("Animation").setAnimationName("Walking Right");
}
}{for(var i = 0, len = gdjs.danglarhouseCode.GDCMCObjects1.length ;i < len;++i) {
    gdjs.danglarhouseCode.GDCMCObjects1[i].getBehavior("Animation").resumeAnimation();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("CMC"), gdjs.danglarhouseCode.GDCMCObjects1);
{for(var i = 0, len = gdjs.danglarhouseCode.GDCMCObjects1.length ;i < len;++i) {
    gdjs.danglarhouseCode.GDCMCObjects1[i].getBehavior("Animation").setAnimationName("Walking Up");
}
}{for(var i = 0, len = gdjs.danglarhouseCode.GDCMCObjects1.length ;i < len;++i) {
    gdjs.danglarhouseCode.GDCMCObjects1[i].setY(gdjs.danglarhouseCode.GDCMCObjects1[i].getY() - (1.1));
}
}{for(var i = 0, len = gdjs.danglarhouseCode.GDCMCObjects1.length ;i < len;++i) {
    gdjs.danglarhouseCode.GDCMCObjects1[i].getBehavior("Animation").resumeAnimation();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("CMC"), gdjs.danglarhouseCode.GDCMCObjects1);
{for(var i = 0, len = gdjs.danglarhouseCode.GDCMCObjects1.length ;i < len;++i) {
    gdjs.danglarhouseCode.GDCMCObjects1[i].getBehavior("Animation").setAnimationName("Walking Down");
}
}{for(var i = 0, len = gdjs.danglarhouseCode.GDCMCObjects1.length ;i < len;++i) {
    gdjs.danglarhouseCode.GDCMCObjects1[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.danglarhouseCode.GDCMCObjects1.length ;i < len;++i) {
    gdjs.danglarhouseCode.GDCMCObjects1[i].setY(gdjs.danglarhouseCode.GDCMCObjects1[i].getY() + (1.1));
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("CMC"), gdjs.danglarhouseCode.GDCMCObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.danglarhouseCode.GDCMCObjects1.length !== 0 ? gdjs.danglarhouseCode.GDCMCObjects1[0] : null), true, "", 0);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.anyKeyReleased(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("CMC"), gdjs.danglarhouseCode.GDCMCObjects1);
{for(var i = 0, len = gdjs.danglarhouseCode.GDCMCObjects1.length ;i < len;++i) {
    gdjs.danglarhouseCode.GDCMCObjects1[i].getBehavior("Animation").pauseAnimation();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("CMC"), gdjs.danglarhouseCode.GDCMCObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.danglarhouseCode.GDNewSprite2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Return");
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.danglarhouseCode.mapOfGDgdjs_9546danglarhouseCode_9546GDNewSprite2Objects1Objects, gdjs.danglarhouseCode.mapOfGDgdjs_9546danglarhouseCode_9546GDCMCObjects1Objects, false, runtimeScene, false);
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("danglar_speech"), gdjs.danglarhouseCode.GDdanglar_9595speechObjects1);
{for(var i = 0, len = gdjs.danglarhouseCode.GDdanglar_9595speechObjects1.length ;i < len;++i) {
    gdjs.danglarhouseCode.GDdanglar_9595speechObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.danglarhouseCode.GDdanglar_9595speechObjects1.length ;i < len;++i) {
    gdjs.danglarhouseCode.GDdanglar_9595speechObjects1[i].getBehavior("BitmapText_AutoTyping").StartAtBeginning((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.danglarhouseCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(0), true);
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("fade_out"), gdjs.danglarhouseCode.GDfade_9595outObjects1);
{for(var i = 0, len = gdjs.danglarhouseCode.GDfade_9595outObjects1.length ;i < len;++i) {
    gdjs.danglarhouseCode.GDfade_9595outObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.danglarhouseCode.GDfade_9595outObjects1.length ;i < len;++i) {
    gdjs.danglarhouseCode.GDfade_9595outObjects1[i].getBehavior("Opacity").setOpacity(gdjs.danglarhouseCode.GDfade_9595outObjects1[i].getBehavior("Opacity").getOpacity() + (gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) + 5));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("fade_out"), gdjs.danglarhouseCode.GDfade_9595outObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.danglarhouseCode.GDfade_9595outObjects1.length;i<l;++i) {
    if ( gdjs.danglarhouseCode.GDfade_9595outObjects1[i].getBehavior("Opacity").getOpacity() > 50 ) {
        isConditionTrue_1 = true;
        gdjs.danglarhouseCode.GDfade_9595outObjects1[k] = gdjs.danglarhouseCode.GDfade_9595outObjects1[i];
        ++k;
    }
}
gdjs.danglarhouseCode.GDfade_9595outObjects1.length = k;
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.danglarhouseCode.eventsList3(runtimeScene);} //End of subevents
}

}


};

gdjs.danglarhouseCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.danglarhouseCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.danglarhouseCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.danglarhouseCode.GDNewTiledSpriteObjects3.length = 0;
gdjs.danglarhouseCode.GDNewTiledSpriteObjects4.length = 0;
gdjs.danglarhouseCode.GDCMCObjects1.length = 0;
gdjs.danglarhouseCode.GDCMCObjects2.length = 0;
gdjs.danglarhouseCode.GDCMCObjects3.length = 0;
gdjs.danglarhouseCode.GDCMCObjects4.length = 0;
gdjs.danglarhouseCode.GDfade_9595outObjects1.length = 0;
gdjs.danglarhouseCode.GDfade_9595outObjects2.length = 0;
gdjs.danglarhouseCode.GDfade_9595outObjects3.length = 0;
gdjs.danglarhouseCode.GDfade_9595outObjects4.length = 0;
gdjs.danglarhouseCode.GDwallsObjects1.length = 0;
gdjs.danglarhouseCode.GDwallsObjects2.length = 0;
gdjs.danglarhouseCode.GDwallsObjects3.length = 0;
gdjs.danglarhouseCode.GDwallsObjects4.length = 0;
gdjs.danglarhouseCode.GDNewSpriteObjects1.length = 0;
gdjs.danglarhouseCode.GDNewSpriteObjects2.length = 0;
gdjs.danglarhouseCode.GDNewSpriteObjects3.length = 0;
gdjs.danglarhouseCode.GDNewSpriteObjects4.length = 0;
gdjs.danglarhouseCode.GDNewSprite2Objects1.length = 0;
gdjs.danglarhouseCode.GDNewSprite2Objects2.length = 0;
gdjs.danglarhouseCode.GDNewSprite2Objects3.length = 0;
gdjs.danglarhouseCode.GDNewSprite2Objects4.length = 0;
gdjs.danglarhouseCode.GDMaleCharacter12Objects1.length = 0;
gdjs.danglarhouseCode.GDMaleCharacter12Objects2.length = 0;
gdjs.danglarhouseCode.GDMaleCharacter12Objects3.length = 0;
gdjs.danglarhouseCode.GDMaleCharacter12Objects4.length = 0;
gdjs.danglarhouseCode.GDdanglar_9595speechObjects1.length = 0;
gdjs.danglarhouseCode.GDdanglar_9595speechObjects2.length = 0;
gdjs.danglarhouseCode.GDdanglar_9595speechObjects3.length = 0;
gdjs.danglarhouseCode.GDdanglar_9595speechObjects4.length = 0;
gdjs.danglarhouseCode.GDCMC_9595speechObjects1.length = 0;
gdjs.danglarhouseCode.GDCMC_9595speechObjects2.length = 0;
gdjs.danglarhouseCode.GDCMC_9595speechObjects3.length = 0;
gdjs.danglarhouseCode.GDCMC_9595speechObjects4.length = 0;
gdjs.danglarhouseCode.GDdsdObjects1.length = 0;
gdjs.danglarhouseCode.GDdsdObjects2.length = 0;
gdjs.danglarhouseCode.GDdsdObjects3.length = 0;
gdjs.danglarhouseCode.GDdsdObjects4.length = 0;

gdjs.danglarhouseCode.eventsList4(runtimeScene);

return;

}

gdjs['danglarhouseCode'] = gdjs.danglarhouseCode;
