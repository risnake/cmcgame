gdjs.countxalbertCode = {};
gdjs.countxalbertCode.GDCMCObjects1= [];
gdjs.countxalbertCode.GDCMCObjects2= [];
gdjs.countxalbertCode.GDCMCObjects3= [];
gdjs.countxalbertCode.GDCMCObjects4= [];
gdjs.countxalbertCode.GDCMCObjects5= [];
gdjs.countxalbertCode.GDCMCObjects6= [];
gdjs.countxalbertCode.GDMaleCharacter7Objects1= [];
gdjs.countxalbertCode.GDMaleCharacter7Objects2= [];
gdjs.countxalbertCode.GDMaleCharacter7Objects3= [];
gdjs.countxalbertCode.GDMaleCharacter7Objects4= [];
gdjs.countxalbertCode.GDMaleCharacter7Objects5= [];
gdjs.countxalbertCode.GDMaleCharacter7Objects6= [];
gdjs.countxalbertCode.GDNewBitmapTextObjects1= [];
gdjs.countxalbertCode.GDNewBitmapTextObjects2= [];
gdjs.countxalbertCode.GDNewBitmapTextObjects3= [];
gdjs.countxalbertCode.GDNewBitmapTextObjects4= [];
gdjs.countxalbertCode.GDNewBitmapTextObjects5= [];
gdjs.countxalbertCode.GDNewBitmapTextObjects6= [];
gdjs.countxalbertCode.GDNewBitmapText2Objects1= [];
gdjs.countxalbertCode.GDNewBitmapText2Objects2= [];
gdjs.countxalbertCode.GDNewBitmapText2Objects3= [];
gdjs.countxalbertCode.GDNewBitmapText2Objects4= [];
gdjs.countxalbertCode.GDNewBitmapText2Objects5= [];
gdjs.countxalbertCode.GDNewBitmapText2Objects6= [];
gdjs.countxalbertCode.GDdantes_9595textObjects1= [];
gdjs.countxalbertCode.GDdantes_9595textObjects2= [];
gdjs.countxalbertCode.GDdantes_9595textObjects3= [];
gdjs.countxalbertCode.GDdantes_9595textObjects4= [];
gdjs.countxalbertCode.GDdantes_9595textObjects5= [];
gdjs.countxalbertCode.GDdantes_9595textObjects6= [];
gdjs.countxalbertCode.GDalbert_9595textObjects1= [];
gdjs.countxalbertCode.GDalbert_9595textObjects2= [];
gdjs.countxalbertCode.GDalbert_9595textObjects3= [];
gdjs.countxalbertCode.GDalbert_9595textObjects4= [];
gdjs.countxalbertCode.GDalbert_9595textObjects5= [];
gdjs.countxalbertCode.GDalbert_9595textObjects6= [];
gdjs.countxalbertCode.GDNewTiledSpriteObjects1= [];
gdjs.countxalbertCode.GDNewTiledSpriteObjects2= [];
gdjs.countxalbertCode.GDNewTiledSpriteObjects3= [];
gdjs.countxalbertCode.GDNewTiledSpriteObjects4= [];
gdjs.countxalbertCode.GDNewTiledSpriteObjects5= [];
gdjs.countxalbertCode.GDNewTiledSpriteObjects6= [];
gdjs.countxalbertCode.GDNewBitmapText3Objects1= [];
gdjs.countxalbertCode.GDNewBitmapText3Objects2= [];
gdjs.countxalbertCode.GDNewBitmapText3Objects3= [];
gdjs.countxalbertCode.GDNewBitmapText3Objects4= [];
gdjs.countxalbertCode.GDNewBitmapText3Objects5= [];
gdjs.countxalbertCode.GDNewBitmapText3Objects6= [];
gdjs.countxalbertCode.GDNewTiledSprite2Objects1= [];
gdjs.countxalbertCode.GDNewTiledSprite2Objects2= [];
gdjs.countxalbertCode.GDNewTiledSprite2Objects3= [];
gdjs.countxalbertCode.GDNewTiledSprite2Objects4= [];
gdjs.countxalbertCode.GDNewTiledSprite2Objects5= [];
gdjs.countxalbertCode.GDNewTiledSprite2Objects6= [];
gdjs.countxalbertCode.GDending_9595creditsObjects1= [];
gdjs.countxalbertCode.GDending_9595creditsObjects2= [];
gdjs.countxalbertCode.GDending_9595creditsObjects3= [];
gdjs.countxalbertCode.GDending_9595creditsObjects4= [];
gdjs.countxalbertCode.GDending_9595creditsObjects5= [];
gdjs.countxalbertCode.GDending_9595creditsObjects6= [];


gdjs.countxalbertCode.asyncCallback9080252 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("NewTiledSprite"), gdjs.countxalbertCode.GDNewTiledSpriteObjects6);

{for(var i = 0, len = gdjs.countxalbertCode.GDNewTiledSpriteObjects6.length ;i < len;++i) {
    gdjs.countxalbertCode.GDNewTiledSpriteObjects6[i].getBehavior("Opacity").setOpacity(gdjs.countxalbertCode.GDNewTiledSpriteObjects6[i].getBehavior("Opacity").getOpacity() + (gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) + 5));
}
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(1), true);
}}
gdjs.countxalbertCode.eventsList0 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
/* Don't save NewTiledSprite as it will be provided by the parent asyncObjectsList. */
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(5), (runtimeScene) => (gdjs.countxalbertCode.asyncCallback9080252(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.countxalbertCode.asyncCallback11602548 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("dantes_text"), gdjs.countxalbertCode.GDdantes_9595textObjects5);

{for(var i = 0, len = gdjs.countxalbertCode.GDdantes_9595textObjects5.length ;i < len;++i) {
    gdjs.countxalbertCode.GDdantes_9595textObjects5[i].getBehavior("Text").setText(("Ok Albert, just letting you know I've never lost a match"));
}
}
{ //Subevents
gdjs.countxalbertCode.eventsList0(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.countxalbertCode.eventsList1 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
/* Don't save NewTiledSprite as it will be provided by the parent asyncObjectsList. */
/* Don't save dantes_text as it will be provided by the parent asyncObjectsList. */
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(5), (runtimeScene) => (gdjs.countxalbertCode.asyncCallback11602548(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.countxalbertCode.asyncCallback14498276 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("albert_text"), gdjs.countxalbertCode.GDalbert_9595textObjects4);

{for(var i = 0, len = gdjs.countxalbertCode.GDalbert_9595textObjects4.length ;i < len;++i) {
    gdjs.countxalbertCode.GDalbert_9595textObjects4[i].getBehavior("Text").setText(("HOW DARE YOU, I CHALLENGE YOU TO A PISTOL DUEL TOMMOROW SAME PLACE SAME TIME!!"));
}
}
{ //Subevents
gdjs.countxalbertCode.eventsList1(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.countxalbertCode.eventsList2 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
/* Don't save NewTiledSprite as it will be provided by the parent asyncObjectsList. */
/* Don't save albert_text as it will be provided by the parent asyncObjectsList. */
for (const obj of gdjs.countxalbertCode.GDdantes_9595textObjects3) asyncObjectsList.addObject("dantes_text", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.countxalbertCode.asyncCallback14498276(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.countxalbertCode.asyncCallback12526964 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("dantes_text"), gdjs.countxalbertCode.GDdantes_9595textObjects3);

{for(var i = 0, len = gdjs.countxalbertCode.GDdantes_9595textObjects3.length ;i < len;++i) {
    gdjs.countxalbertCode.GDdantes_9595textObjects3[i].getBehavior("Text").setText(("It's an old fued don't worry about it Albert"));
}
}
{ //Subevents
gdjs.countxalbertCode.eventsList2(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.countxalbertCode.eventsList3 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
/* Don't save NewTiledSprite as it will be provided by the parent asyncObjectsList. */
for (const obj of gdjs.countxalbertCode.GDalbert_9595textObjects2) asyncObjectsList.addObject("albert_text", obj);
/* Don't save dantes_text as it will be provided by the parent asyncObjectsList. */
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.countxalbertCode.asyncCallback12526964(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.countxalbertCode.asyncCallback11481204 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("albert_text"), gdjs.countxalbertCode.GDalbert_9595textObjects2);

{for(var i = 0, len = gdjs.countxalbertCode.GDalbert_9595textObjects2.length ;i < len;++i) {
    gdjs.countxalbertCode.GDalbert_9595textObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.countxalbertCode.GDalbert_9595textObjects2.length ;i < len;++i) {
    gdjs.countxalbertCode.GDalbert_9595textObjects2[i].getBehavior("BitmapText_AutoTyping").StartAtBeginning((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.countxalbertCode.eventsList3(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.countxalbertCode.eventsList4 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.countxalbertCode.GDNewTiledSpriteObjects1) asyncObjectsList.addObject("NewTiledSprite", obj);
for (const obj of gdjs.countxalbertCode.GDalbert_9595textObjects1) asyncObjectsList.addObject("albert_text", obj);
for (const obj of gdjs.countxalbertCode.GDdantes_9595textObjects1) asyncObjectsList.addObject("dantes_text", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.countxalbertCode.asyncCallback11481204(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.countxalbertCode.asyncCallback9118220 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(0), true);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(1), false);
}}
gdjs.countxalbertCode.eventsList5 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.countxalbertCode.asyncCallback9118220(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.countxalbertCode.asyncCallback9118020 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("NewBitmapText3"), gdjs.countxalbertCode.GDNewBitmapText3Objects2);

gdjs.copyArray(asyncObjectsList.getObjects("NewTiledSprite"), gdjs.countxalbertCode.GDNewTiledSpriteObjects2);

{for(var i = 0, len = gdjs.countxalbertCode.GDNewBitmapText3Objects2.length ;i < len;++i) {
    gdjs.countxalbertCode.GDNewBitmapText3Objects2[i].hide();
}
}{for(var i = 0, len = gdjs.countxalbertCode.GDNewTiledSpriteObjects2.length ;i < len;++i) {
    gdjs.countxalbertCode.GDNewTiledSpriteObjects2[i].getBehavior("Opacity").setOpacity(gdjs.countxalbertCode.GDNewTiledSpriteObjects2[i].getBehavior("Opacity").getOpacity() - (gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) + 5));
}
}
{ //Subevents
gdjs.countxalbertCode.eventsList5(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.countxalbertCode.eventsList6 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.countxalbertCode.GDNewBitmapText3Objects1) asyncObjectsList.addObject("NewBitmapText3", obj);
for (const obj of gdjs.countxalbertCode.GDNewTiledSpriteObjects1) asyncObjectsList.addObject("NewTiledSprite", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(4), (runtimeScene) => (gdjs.countxalbertCode.asyncCallback9118020(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.countxalbertCode.asyncCallback9120004 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(2), true);
}}
gdjs.countxalbertCode.eventsList7 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(10), (runtimeScene) => (gdjs.countxalbertCode.asyncCallback9120004(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.countxalbertCode.asyncCallback14498372 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(runtimeScene.getObjects("NewTiledSprite2"), gdjs.countxalbertCode.GDNewTiledSprite2Objects2);
gdjs.copyArray(runtimeScene.getObjects("ending_credits"), gdjs.countxalbertCode.GDending_9595creditsObjects2);
{for(var i = 0, len = gdjs.countxalbertCode.GDNewTiledSprite2Objects2.length ;i < len;++i) {
    gdjs.countxalbertCode.GDNewTiledSprite2Objects2[i].getBehavior("Opacity").setOpacity(gdjs.countxalbertCode.GDNewTiledSprite2Objects2[i].getBehavior("Opacity").getOpacity() + (gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) + 5));
}
}{for(var i = 0, len = gdjs.countxalbertCode.GDending_9595creditsObjects2.length ;i < len;++i) {
    gdjs.countxalbertCode.GDending_9595creditsObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.countxalbertCode.GDending_9595creditsObjects2.length ;i < len;++i) {
    gdjs.countxalbertCode.GDending_9595creditsObjects2[i].addForce(0, -(1), 1);
}
}}
gdjs.countxalbertCode.eventsList8 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(4), (runtimeScene) => (gdjs.countxalbertCode.asyncCallback14498372(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.countxalbertCode.eventsList9 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewTiledSprite"), gdjs.countxalbertCode.GDNewTiledSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewTiledSprite2"), gdjs.countxalbertCode.GDNewTiledSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("albert_text"), gdjs.countxalbertCode.GDalbert_9595textObjects1);
gdjs.copyArray(runtimeScene.getObjects("dantes_text"), gdjs.countxalbertCode.GDdantes_9595textObjects1);
gdjs.copyArray(runtimeScene.getObjects("ending_credits"), gdjs.countxalbertCode.GDending_9595creditsObjects1);
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(2), false);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(0), false);
}{for(var i = 0, len = gdjs.countxalbertCode.GDNewTiledSpriteObjects1.length ;i < len;++i) {
    gdjs.countxalbertCode.GDNewTiledSpriteObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}{for(var i = 0, len = gdjs.countxalbertCode.GDNewTiledSprite2Objects1.length ;i < len;++i) {
    gdjs.countxalbertCode.GDNewTiledSprite2Objects1[i].getBehavior("Opacity").setOpacity(0);
}
}{for(var i = 0, len = gdjs.countxalbertCode.GDalbert_9595textObjects1.length ;i < len;++i) {
    gdjs.countxalbertCode.GDalbert_9595textObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.countxalbertCode.GDending_9595creditsObjects1.length ;i < len;++i) {
    gdjs.countxalbertCode.GDending_9595creditsObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.countxalbertCode.GDdantes_9595textObjects1.length ;i < len;++i) {
    gdjs.countxalbertCode.GDdantes_9595textObjects1[i].getBehavior("BitmapText_AutoTyping").StartAtBeginning((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.countxalbertCode.eventsList4(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(1), true);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewTiledSprite"), gdjs.countxalbertCode.GDNewTiledSpriteObjects1);
{for(var i = 0, len = gdjs.countxalbertCode.GDNewTiledSpriteObjects1.length ;i < len;++i) {
    gdjs.countxalbertCode.GDNewTiledSpriteObjects1[i].getBehavior("Opacity").setOpacity(gdjs.countxalbertCode.GDNewTiledSpriteObjects1[i].getBehavior("Opacity").getOpacity() + (gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) + 5));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewTiledSprite"), gdjs.countxalbertCode.GDNewTiledSpriteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.countxalbertCode.GDNewTiledSpriteObjects1.length;i<l;++i) {
    if ( gdjs.countxalbertCode.GDNewTiledSpriteObjects1[i].getBehavior("Opacity").getOpacity() > 25 ) {
        isConditionTrue_0 = true;
        gdjs.countxalbertCode.GDNewTiledSpriteObjects1[k] = gdjs.countxalbertCode.GDNewTiledSpriteObjects1[i];
        ++k;
    }
}
gdjs.countxalbertCode.GDNewTiledSpriteObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewBitmapText3"), gdjs.countxalbertCode.GDNewBitmapText3Objects1);
{for(var i = 0, len = gdjs.countxalbertCode.GDNewBitmapText3Objects1.length ;i < len;++i) {
    gdjs.countxalbertCode.GDNewBitmapText3Objects1[i].addForceTowardPosition(-(263), 356, 10, 1);
}
}
{ //Subevents
gdjs.countxalbertCode.eventsList6(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(0), true);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewTiledSprite"), gdjs.countxalbertCode.GDNewTiledSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("albert_text"), gdjs.countxalbertCode.GDalbert_9595textObjects1);
gdjs.copyArray(runtimeScene.getObjects("dantes_text"), gdjs.countxalbertCode.GDdantes_9595textObjects1);
{for(var i = 0, len = gdjs.countxalbertCode.GDNewTiledSpriteObjects1.length ;i < len;++i) {
    gdjs.countxalbertCode.GDNewTiledSpriteObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}{for(var i = 0, len = gdjs.countxalbertCode.GDalbert_9595textObjects1.length ;i < len;++i) {
    gdjs.countxalbertCode.GDalbert_9595textObjects1[i].getBehavior("Text").setText(("So...about that duel... I now know that you are after Fernand Mondego and not the Count of Morcerf (figurtively) so like... can we call of that duel??"));
}
}{for(var i = 0, len = gdjs.countxalbertCode.GDdantes_9595textObjects1.length ;i < len;++i) {
    gdjs.countxalbertCode.GDdantes_9595textObjects1[i].hide();
}
}
{ //Subevents
gdjs.countxalbertCode.eventsList7(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(2), true);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("dantes_text"), gdjs.countxalbertCode.GDdantes_9595textObjects1);
{for(var i = 0, len = gdjs.countxalbertCode.GDdantes_9595textObjects1.length ;i < len;++i) {
    gdjs.countxalbertCode.GDdantes_9595textObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.countxalbertCode.GDdantes_9595textObjects1.length ;i < len;++i) {
    gdjs.countxalbertCode.GDdantes_9595textObjects1[i].getBehavior("Text").setText(("Sure, fine by me I guess"));
}
}
{ //Subevents
gdjs.countxalbertCode.eventsList8(runtimeScene);} //End of subevents
}

}


};

gdjs.countxalbertCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.countxalbertCode.GDCMCObjects1.length = 0;
gdjs.countxalbertCode.GDCMCObjects2.length = 0;
gdjs.countxalbertCode.GDCMCObjects3.length = 0;
gdjs.countxalbertCode.GDCMCObjects4.length = 0;
gdjs.countxalbertCode.GDCMCObjects5.length = 0;
gdjs.countxalbertCode.GDCMCObjects6.length = 0;
gdjs.countxalbertCode.GDMaleCharacter7Objects1.length = 0;
gdjs.countxalbertCode.GDMaleCharacter7Objects2.length = 0;
gdjs.countxalbertCode.GDMaleCharacter7Objects3.length = 0;
gdjs.countxalbertCode.GDMaleCharacter7Objects4.length = 0;
gdjs.countxalbertCode.GDMaleCharacter7Objects5.length = 0;
gdjs.countxalbertCode.GDMaleCharacter7Objects6.length = 0;
gdjs.countxalbertCode.GDNewBitmapTextObjects1.length = 0;
gdjs.countxalbertCode.GDNewBitmapTextObjects2.length = 0;
gdjs.countxalbertCode.GDNewBitmapTextObjects3.length = 0;
gdjs.countxalbertCode.GDNewBitmapTextObjects4.length = 0;
gdjs.countxalbertCode.GDNewBitmapTextObjects5.length = 0;
gdjs.countxalbertCode.GDNewBitmapTextObjects6.length = 0;
gdjs.countxalbertCode.GDNewBitmapText2Objects1.length = 0;
gdjs.countxalbertCode.GDNewBitmapText2Objects2.length = 0;
gdjs.countxalbertCode.GDNewBitmapText2Objects3.length = 0;
gdjs.countxalbertCode.GDNewBitmapText2Objects4.length = 0;
gdjs.countxalbertCode.GDNewBitmapText2Objects5.length = 0;
gdjs.countxalbertCode.GDNewBitmapText2Objects6.length = 0;
gdjs.countxalbertCode.GDdantes_9595textObjects1.length = 0;
gdjs.countxalbertCode.GDdantes_9595textObjects2.length = 0;
gdjs.countxalbertCode.GDdantes_9595textObjects3.length = 0;
gdjs.countxalbertCode.GDdantes_9595textObjects4.length = 0;
gdjs.countxalbertCode.GDdantes_9595textObjects5.length = 0;
gdjs.countxalbertCode.GDdantes_9595textObjects6.length = 0;
gdjs.countxalbertCode.GDalbert_9595textObjects1.length = 0;
gdjs.countxalbertCode.GDalbert_9595textObjects2.length = 0;
gdjs.countxalbertCode.GDalbert_9595textObjects3.length = 0;
gdjs.countxalbertCode.GDalbert_9595textObjects4.length = 0;
gdjs.countxalbertCode.GDalbert_9595textObjects5.length = 0;
gdjs.countxalbertCode.GDalbert_9595textObjects6.length = 0;
gdjs.countxalbertCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.countxalbertCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.countxalbertCode.GDNewTiledSpriteObjects3.length = 0;
gdjs.countxalbertCode.GDNewTiledSpriteObjects4.length = 0;
gdjs.countxalbertCode.GDNewTiledSpriteObjects5.length = 0;
gdjs.countxalbertCode.GDNewTiledSpriteObjects6.length = 0;
gdjs.countxalbertCode.GDNewBitmapText3Objects1.length = 0;
gdjs.countxalbertCode.GDNewBitmapText3Objects2.length = 0;
gdjs.countxalbertCode.GDNewBitmapText3Objects3.length = 0;
gdjs.countxalbertCode.GDNewBitmapText3Objects4.length = 0;
gdjs.countxalbertCode.GDNewBitmapText3Objects5.length = 0;
gdjs.countxalbertCode.GDNewBitmapText3Objects6.length = 0;
gdjs.countxalbertCode.GDNewTiledSprite2Objects1.length = 0;
gdjs.countxalbertCode.GDNewTiledSprite2Objects2.length = 0;
gdjs.countxalbertCode.GDNewTiledSprite2Objects3.length = 0;
gdjs.countxalbertCode.GDNewTiledSprite2Objects4.length = 0;
gdjs.countxalbertCode.GDNewTiledSprite2Objects5.length = 0;
gdjs.countxalbertCode.GDNewTiledSprite2Objects6.length = 0;
gdjs.countxalbertCode.GDending_9595creditsObjects1.length = 0;
gdjs.countxalbertCode.GDending_9595creditsObjects2.length = 0;
gdjs.countxalbertCode.GDending_9595creditsObjects3.length = 0;
gdjs.countxalbertCode.GDending_9595creditsObjects4.length = 0;
gdjs.countxalbertCode.GDending_9595creditsObjects5.length = 0;
gdjs.countxalbertCode.GDending_9595creditsObjects6.length = 0;

gdjs.countxalbertCode.eventsList9(runtimeScene);

return;

}

gdjs['countxalbertCode'] = gdjs.countxalbertCode;
