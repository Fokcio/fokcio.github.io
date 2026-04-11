gdjs.LobbyCode = {};
gdjs.LobbyCode.localVariables = [];
gdjs.LobbyCode.idToCallbackMap = new Map();
gdjs.LobbyCode.GDCarObjects1= [];
gdjs.LobbyCode.GDCarObjects2= [];
gdjs.LobbyCode.GDCarObjects3= [];
gdjs.LobbyCode.GDCarObjects4= [];
gdjs.LobbyCode.GDroadObjects1= [];
gdjs.LobbyCode.GDroadObjects2= [];
gdjs.LobbyCode.GDroadObjects3= [];
gdjs.LobbyCode.GDroadObjects4= [];
gdjs.LobbyCode.GDTPUPObjects1= [];
gdjs.LobbyCode.GDTPUPObjects2= [];
gdjs.LobbyCode.GDTPUPObjects3= [];
gdjs.LobbyCode.GDTPUPObjects4= [];
gdjs.LobbyCode.GDEasyObjects1= [];
gdjs.LobbyCode.GDEasyObjects2= [];
gdjs.LobbyCode.GDEasyObjects3= [];
gdjs.LobbyCode.GDEasyObjects4= [];
gdjs.LobbyCode.GDNormalObjects1= [];
gdjs.LobbyCode.GDNormalObjects2= [];
gdjs.LobbyCode.GDNormalObjects3= [];
gdjs.LobbyCode.GDNormalObjects4= [];
gdjs.LobbyCode.GDHardObjects1= [];
gdjs.LobbyCode.GDHardObjects2= [];
gdjs.LobbyCode.GDHardObjects3= [];
gdjs.LobbyCode.GDHardObjects4= [];
gdjs.LobbyCode.GDCrash_9595Objects1= [];
gdjs.LobbyCode.GDCrash_9595Objects2= [];
gdjs.LobbyCode.GDCrash_9595Objects3= [];
gdjs.LobbyCode.GDCrash_9595Objects4= [];


gdjs.LobbyCode.mapOfGDgdjs_9546LobbyCode_9546GDroadObjects1Objects = Hashtable.newFrom({"road": gdjs.LobbyCode.GDroadObjects1});
gdjs.LobbyCode.mapOfGDgdjs_9546LobbyCode_9546GDTPUPObjects1Objects = Hashtable.newFrom({"TPUP": gdjs.LobbyCode.GDTPUPObjects1});
gdjs.LobbyCode.asyncCallback16457236 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.LobbyCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("road"), gdjs.LobbyCode.GDroadObjects2);
{for(var i = 0, len = gdjs.LobbyCode.GDroadObjects2.length ;i < len;++i) {
    gdjs.LobbyCode.GDroadObjects2[i].setY(gdjs.LobbyCode.GDroadObjects2[i].getY() + (6));
}
}
gdjs.LobbyCode.localVariables.length = 0;
}
gdjs.LobbyCode.idToCallbackMap.set(16457236, gdjs.LobbyCode.asyncCallback16457236);
gdjs.LobbyCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.LobbyCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.01), (runtimeScene) => (gdjs.LobbyCode.asyncCallback16457236(runtimeScene, asyncObjectsList)), 16457236, asyncObjectsList);
}
}

}


};gdjs.LobbyCode.asyncCallback16463356 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.LobbyCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GameEasy", false);
}
gdjs.LobbyCode.localVariables.length = 0;
}
gdjs.LobbyCode.idToCallbackMap.set(16463356, gdjs.LobbyCode.asyncCallback16463356);
gdjs.LobbyCode.eventsList1 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.LobbyCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.8), (runtimeScene) => (gdjs.LobbyCode.asyncCallback16463356(runtimeScene, asyncObjectsList)), 16463356, asyncObjectsList);
}
}

}


};gdjs.LobbyCode.asyncCallback16462908 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.LobbyCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Car"), gdjs.LobbyCode.GDCarObjects3);

{for(var i = 0, len = gdjs.LobbyCode.GDCarObjects3.length ;i < len;++i) {
    gdjs.LobbyCode.GDCarObjects3[i].getBehavior("Tween").addObjectPositionYTween2("up", -(300), "linear", 0.8, true);
}
}

{ //Subevents
gdjs.LobbyCode.eventsList1(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.LobbyCode.localVariables.length = 0;
}
gdjs.LobbyCode.idToCallbackMap.set(16462908, gdjs.LobbyCode.asyncCallback16462908);
gdjs.LobbyCode.eventsList2 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.LobbyCode.localVariables);
for (const obj of gdjs.LobbyCode.GDCarObjects2) asyncObjectsList.addObject("Car", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.3), (runtimeScene) => (gdjs.LobbyCode.asyncCallback16462908(runtimeScene, asyncObjectsList)), 16462908, asyncObjectsList);
}
}

}


};gdjs.LobbyCode.asyncCallback16462540 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.LobbyCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Car"), gdjs.LobbyCode.GDCarObjects2);

{for(var i = 0, len = gdjs.LobbyCode.GDCarObjects2.length ;i < len;++i) {
    gdjs.LobbyCode.GDCarObjects2[i].setAngle(0);
}
}

{ //Subevents
gdjs.LobbyCode.eventsList2(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.LobbyCode.localVariables.length = 0;
}
gdjs.LobbyCode.idToCallbackMap.set(16462540, gdjs.LobbyCode.asyncCallback16462540);
gdjs.LobbyCode.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.LobbyCode.localVariables);
for (const obj of gdjs.LobbyCode.GDCarObjects1) asyncObjectsList.addObject("Car", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.LobbyCode.asyncCallback16462540(runtimeScene, asyncObjectsList)), 16462540, asyncObjectsList);
}
}

}


};gdjs.LobbyCode.asyncCallback16464420 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.LobbyCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GameNormal", false);
}
gdjs.LobbyCode.localVariables.length = 0;
}
gdjs.LobbyCode.idToCallbackMap.set(16464420, gdjs.LobbyCode.asyncCallback16464420);
gdjs.LobbyCode.eventsList4 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.LobbyCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.8), (runtimeScene) => (gdjs.LobbyCode.asyncCallback16464420(runtimeScene, asyncObjectsList)), 16464420, asyncObjectsList);
}
}

}


};gdjs.LobbyCode.asyncCallback16466476 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.LobbyCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GameHard", false);
}
gdjs.LobbyCode.localVariables.length = 0;
}
gdjs.LobbyCode.idToCallbackMap.set(16466476, gdjs.LobbyCode.asyncCallback16466476);
gdjs.LobbyCode.eventsList5 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.LobbyCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.8), (runtimeScene) => (gdjs.LobbyCode.asyncCallback16466476(runtimeScene, asyncObjectsList)), 16466476, asyncObjectsList);
}
}

}


};gdjs.LobbyCode.asyncCallback16466028 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.LobbyCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Car"), gdjs.LobbyCode.GDCarObjects3);

{for(var i = 0, len = gdjs.LobbyCode.GDCarObjects3.length ;i < len;++i) {
    gdjs.LobbyCode.GDCarObjects3[i].getBehavior("Tween").addObjectPositionYTween2("up", -(300), "linear", 0.8, true);
}
}

{ //Subevents
gdjs.LobbyCode.eventsList5(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.LobbyCode.localVariables.length = 0;
}
gdjs.LobbyCode.idToCallbackMap.set(16466028, gdjs.LobbyCode.asyncCallback16466028);
gdjs.LobbyCode.eventsList6 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.LobbyCode.localVariables);
for (const obj of gdjs.LobbyCode.GDCarObjects2) asyncObjectsList.addObject("Car", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.3), (runtimeScene) => (gdjs.LobbyCode.asyncCallback16466028(runtimeScene, asyncObjectsList)), 16466028, asyncObjectsList);
}
}

}


};gdjs.LobbyCode.asyncCallback16465660 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.LobbyCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Car"), gdjs.LobbyCode.GDCarObjects2);

{for(var i = 0, len = gdjs.LobbyCode.GDCarObjects2.length ;i < len;++i) {
    gdjs.LobbyCode.GDCarObjects2[i].setAngle(0);
}
}

{ //Subevents
gdjs.LobbyCode.eventsList6(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.LobbyCode.localVariables.length = 0;
}
gdjs.LobbyCode.idToCallbackMap.set(16465660, gdjs.LobbyCode.asyncCallback16465660);
gdjs.LobbyCode.eventsList7 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.LobbyCode.localVariables);
for (const obj of gdjs.LobbyCode.GDCarObjects1) asyncObjectsList.addObject("Car", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.LobbyCode.asyncCallback16465660(runtimeScene, asyncObjectsList)), 16465660, asyncObjectsList);
}
}

}


};gdjs.LobbyCode.eventsList8 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("TPUP"), gdjs.LobbyCode.GDTPUPObjects1);
gdjs.copyArray(runtimeScene.getObjects("road"), gdjs.LobbyCode.GDroadObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.LobbyCode.mapOfGDgdjs_9546LobbyCode_9546GDroadObjects1Objects, gdjs.LobbyCode.mapOfGDgdjs_9546LobbyCode_9546GDTPUPObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.LobbyCode.GDroadObjects1 */
{for(var i = 0, len = gdjs.LobbyCode.GDroadObjects1.length ;i < len;++i) {
    gdjs.LobbyCode.GDroadObjects1[i].setY(-(1000));
}
}
}

}


{


let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.LobbyCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Hard"), gdjs.LobbyCode.GDHardObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LobbyCode.GDHardObjects1.length;i<l;++i) {
    if ( gdjs.LobbyCode.GDHardObjects1[i].getBehavior("ButtonFSM").IsHovered(null) ) {
        isConditionTrue_0 = true;
        gdjs.LobbyCode.GDHardObjects1[k] = gdjs.LobbyCode.GDHardObjects1[i];
        ++k;
    }
}
gdjs.LobbyCode.GDHardObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.LobbyCode.GDHardObjects1 */
{for(var i = 0, len = gdjs.LobbyCode.GDHardObjects1.length ;i < len;++i) {
    gdjs.LobbyCode.GDHardObjects1[i].setOutlineEnabled(true);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Normal"), gdjs.LobbyCode.GDNormalObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LobbyCode.GDNormalObjects1.length;i<l;++i) {
    if ( gdjs.LobbyCode.GDNormalObjects1[i].getBehavior("ButtonFSM").IsHovered(null) ) {
        isConditionTrue_0 = true;
        gdjs.LobbyCode.GDNormalObjects1[k] = gdjs.LobbyCode.GDNormalObjects1[i];
        ++k;
    }
}
gdjs.LobbyCode.GDNormalObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.LobbyCode.GDNormalObjects1 */
{for(var i = 0, len = gdjs.LobbyCode.GDNormalObjects1.length ;i < len;++i) {
    gdjs.LobbyCode.GDNormalObjects1[i].setOutlineEnabled(true);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Easy"), gdjs.LobbyCode.GDEasyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LobbyCode.GDEasyObjects1.length;i<l;++i) {
    if ( gdjs.LobbyCode.GDEasyObjects1[i].getBehavior("ButtonFSM").IsHovered(null) ) {
        isConditionTrue_0 = true;
        gdjs.LobbyCode.GDEasyObjects1[k] = gdjs.LobbyCode.GDEasyObjects1[i];
        ++k;
    }
}
gdjs.LobbyCode.GDEasyObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.LobbyCode.GDEasyObjects1 */
{for(var i = 0, len = gdjs.LobbyCode.GDEasyObjects1.length ;i < len;++i) {
    gdjs.LobbyCode.GDEasyObjects1[i].setOutlineEnabled(true);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Easy"), gdjs.LobbyCode.GDEasyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LobbyCode.GDEasyObjects1.length;i<l;++i) {
    if ( !(gdjs.LobbyCode.GDEasyObjects1[i].getBehavior("ButtonFSM").IsHovered(null)) ) {
        isConditionTrue_0 = true;
        gdjs.LobbyCode.GDEasyObjects1[k] = gdjs.LobbyCode.GDEasyObjects1[i];
        ++k;
    }
}
gdjs.LobbyCode.GDEasyObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.LobbyCode.GDEasyObjects1 */
{for(var i = 0, len = gdjs.LobbyCode.GDEasyObjects1.length ;i < len;++i) {
    gdjs.LobbyCode.GDEasyObjects1[i].setOutlineEnabled(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Normal"), gdjs.LobbyCode.GDNormalObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LobbyCode.GDNormalObjects1.length;i<l;++i) {
    if ( !(gdjs.LobbyCode.GDNormalObjects1[i].getBehavior("ButtonFSM").IsHovered(null)) ) {
        isConditionTrue_0 = true;
        gdjs.LobbyCode.GDNormalObjects1[k] = gdjs.LobbyCode.GDNormalObjects1[i];
        ++k;
    }
}
gdjs.LobbyCode.GDNormalObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.LobbyCode.GDNormalObjects1 */
{for(var i = 0, len = gdjs.LobbyCode.GDNormalObjects1.length ;i < len;++i) {
    gdjs.LobbyCode.GDNormalObjects1[i].setOutlineEnabled(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Hard"), gdjs.LobbyCode.GDHardObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LobbyCode.GDHardObjects1.length;i<l;++i) {
    if ( !(gdjs.LobbyCode.GDHardObjects1[i].getBehavior("ButtonFSM").IsHovered(null)) ) {
        isConditionTrue_0 = true;
        gdjs.LobbyCode.GDHardObjects1[k] = gdjs.LobbyCode.GDHardObjects1[i];
        ++k;
    }
}
gdjs.LobbyCode.GDHardObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.LobbyCode.GDHardObjects1 */
{for(var i = 0, len = gdjs.LobbyCode.GDHardObjects1.length ;i < len;++i) {
    gdjs.LobbyCode.GDHardObjects1[i].setOutlineEnabled(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Easy"), gdjs.LobbyCode.GDEasyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LobbyCode.GDEasyObjects1.length;i<l;++i) {
    if ( gdjs.LobbyCode.GDEasyObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.LobbyCode.GDEasyObjects1[k] = gdjs.LobbyCode.GDEasyObjects1[i];
        ++k;
    }
}
gdjs.LobbyCode.GDEasyObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Car"), gdjs.LobbyCode.GDCarObjects1);
{for(var i = 0, len = gdjs.LobbyCode.GDCarObjects1.length ;i < len;++i) {
    gdjs.LobbyCode.GDCarObjects1[i].setAngle(-(22));
}
}
{for(var i = 0, len = gdjs.LobbyCode.GDCarObjects1.length ;i < len;++i) {
    gdjs.LobbyCode.GDCarObjects1[i].getBehavior("Tween").addObjectPositionXTween2("easy", 160, "linear", 0.5, false);
}
}

{ //Subevents
gdjs.LobbyCode.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Normal"), gdjs.LobbyCode.GDNormalObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LobbyCode.GDNormalObjects1.length;i<l;++i) {
    if ( gdjs.LobbyCode.GDNormalObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.LobbyCode.GDNormalObjects1[k] = gdjs.LobbyCode.GDNormalObjects1[i];
        ++k;
    }
}
gdjs.LobbyCode.GDNormalObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Car"), gdjs.LobbyCode.GDCarObjects1);
{for(var i = 0, len = gdjs.LobbyCode.GDCarObjects1.length ;i < len;++i) {
    gdjs.LobbyCode.GDCarObjects1[i].setAngle(0);
}
}
{for(var i = 0, len = gdjs.LobbyCode.GDCarObjects1.length ;i < len;++i) {
    gdjs.LobbyCode.GDCarObjects1[i].getBehavior("Tween").addObjectPositionYTween2("up", -(300), "linear", 0.8, true);
}
}

{ //Subevents
gdjs.LobbyCode.eventsList4(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Hard"), gdjs.LobbyCode.GDHardObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LobbyCode.GDHardObjects1.length;i<l;++i) {
    if ( gdjs.LobbyCode.GDHardObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.LobbyCode.GDHardObjects1[k] = gdjs.LobbyCode.GDHardObjects1[i];
        ++k;
    }
}
gdjs.LobbyCode.GDHardObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Car"), gdjs.LobbyCode.GDCarObjects1);
{for(var i = 0, len = gdjs.LobbyCode.GDCarObjects1.length ;i < len;++i) {
    gdjs.LobbyCode.GDCarObjects1[i].setAngle(22);
}
}
{for(var i = 0, len = gdjs.LobbyCode.GDCarObjects1.length ;i < len;++i) {
    gdjs.LobbyCode.GDCarObjects1[i].getBehavior("Tween").addObjectPositionXTween2("hard", 800, "linear", 0.5, false);
}
}

{ //Subevents
gdjs.LobbyCode.eventsList7(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.LobbyCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LobbyCode.GDCarObjects1.length = 0;
gdjs.LobbyCode.GDCarObjects2.length = 0;
gdjs.LobbyCode.GDCarObjects3.length = 0;
gdjs.LobbyCode.GDCarObjects4.length = 0;
gdjs.LobbyCode.GDroadObjects1.length = 0;
gdjs.LobbyCode.GDroadObjects2.length = 0;
gdjs.LobbyCode.GDroadObjects3.length = 0;
gdjs.LobbyCode.GDroadObjects4.length = 0;
gdjs.LobbyCode.GDTPUPObjects1.length = 0;
gdjs.LobbyCode.GDTPUPObjects2.length = 0;
gdjs.LobbyCode.GDTPUPObjects3.length = 0;
gdjs.LobbyCode.GDTPUPObjects4.length = 0;
gdjs.LobbyCode.GDEasyObjects1.length = 0;
gdjs.LobbyCode.GDEasyObjects2.length = 0;
gdjs.LobbyCode.GDEasyObjects3.length = 0;
gdjs.LobbyCode.GDEasyObjects4.length = 0;
gdjs.LobbyCode.GDNormalObjects1.length = 0;
gdjs.LobbyCode.GDNormalObjects2.length = 0;
gdjs.LobbyCode.GDNormalObjects3.length = 0;
gdjs.LobbyCode.GDNormalObjects4.length = 0;
gdjs.LobbyCode.GDHardObjects1.length = 0;
gdjs.LobbyCode.GDHardObjects2.length = 0;
gdjs.LobbyCode.GDHardObjects3.length = 0;
gdjs.LobbyCode.GDHardObjects4.length = 0;
gdjs.LobbyCode.GDCrash_9595Objects1.length = 0;
gdjs.LobbyCode.GDCrash_9595Objects2.length = 0;
gdjs.LobbyCode.GDCrash_9595Objects3.length = 0;
gdjs.LobbyCode.GDCrash_9595Objects4.length = 0;

gdjs.LobbyCode.eventsList8(runtimeScene);
gdjs.LobbyCode.GDCarObjects1.length = 0;
gdjs.LobbyCode.GDCarObjects2.length = 0;
gdjs.LobbyCode.GDCarObjects3.length = 0;
gdjs.LobbyCode.GDCarObjects4.length = 0;
gdjs.LobbyCode.GDroadObjects1.length = 0;
gdjs.LobbyCode.GDroadObjects2.length = 0;
gdjs.LobbyCode.GDroadObjects3.length = 0;
gdjs.LobbyCode.GDroadObjects4.length = 0;
gdjs.LobbyCode.GDTPUPObjects1.length = 0;
gdjs.LobbyCode.GDTPUPObjects2.length = 0;
gdjs.LobbyCode.GDTPUPObjects3.length = 0;
gdjs.LobbyCode.GDTPUPObjects4.length = 0;
gdjs.LobbyCode.GDEasyObjects1.length = 0;
gdjs.LobbyCode.GDEasyObjects2.length = 0;
gdjs.LobbyCode.GDEasyObjects3.length = 0;
gdjs.LobbyCode.GDEasyObjects4.length = 0;
gdjs.LobbyCode.GDNormalObjects1.length = 0;
gdjs.LobbyCode.GDNormalObjects2.length = 0;
gdjs.LobbyCode.GDNormalObjects3.length = 0;
gdjs.LobbyCode.GDNormalObjects4.length = 0;
gdjs.LobbyCode.GDHardObjects1.length = 0;
gdjs.LobbyCode.GDHardObjects2.length = 0;
gdjs.LobbyCode.GDHardObjects3.length = 0;
gdjs.LobbyCode.GDHardObjects4.length = 0;
gdjs.LobbyCode.GDCrash_9595Objects1.length = 0;
gdjs.LobbyCode.GDCrash_9595Objects2.length = 0;
gdjs.LobbyCode.GDCrash_9595Objects3.length = 0;
gdjs.LobbyCode.GDCrash_9595Objects4.length = 0;


return;

}

gdjs['LobbyCode'] = gdjs.LobbyCode;
