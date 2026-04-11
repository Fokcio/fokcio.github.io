gdjs.GameHardCode = {};
gdjs.GameHardCode.localVariables = [];
gdjs.GameHardCode.idToCallbackMap = new Map();
gdjs.GameHardCode.GDCarObjects1= [];
gdjs.GameHardCode.GDCarObjects2= [];
gdjs.GameHardCode.GDCarObjects3= [];
gdjs.GameHardCode.GDCarObjects4= [];
gdjs.GameHardCode.GDRoadObjects1= [];
gdjs.GameHardCode.GDRoadObjects2= [];
gdjs.GameHardCode.GDRoadObjects3= [];
gdjs.GameHardCode.GDRoadObjects4= [];
gdjs.GameHardCode.GDTpUpObjects1= [];
gdjs.GameHardCode.GDTpUpObjects2= [];
gdjs.GameHardCode.GDTpUpObjects3= [];
gdjs.GameHardCode.GDTpUpObjects4= [];
gdjs.GameHardCode.GDRampObjects1= [];
gdjs.GameHardCode.GDRampObjects2= [];
gdjs.GameHardCode.GDRampObjects3= [];
gdjs.GameHardCode.GDRampObjects4= [];
gdjs.GameHardCode.GDCarEnemyObjects1= [];
gdjs.GameHardCode.GDCarEnemyObjects2= [];
gdjs.GameHardCode.GDCarEnemyObjects3= [];
gdjs.GameHardCode.GDCarEnemyObjects4= [];
gdjs.GameHardCode.GDSkullGameOverDialogObjects1= [];
gdjs.GameHardCode.GDSkullGameOverDialogObjects2= [];
gdjs.GameHardCode.GDSkullGameOverDialogObjects3= [];
gdjs.GameHardCode.GDSkullGameOverDialogObjects4= [];
gdjs.GameHardCode.GDAddPointObjects1= [];
gdjs.GameHardCode.GDAddPointObjects2= [];
gdjs.GameHardCode.GDAddPointObjects3= [];
gdjs.GameHardCode.GDAddPointObjects4= [];
gdjs.GameHardCode.GDFlatHeartBarObjects1= [];
gdjs.GameHardCode.GDFlatHeartBarObjects2= [];
gdjs.GameHardCode.GDFlatHeartBarObjects3= [];
gdjs.GameHardCode.GDFlatHeartBarObjects4= [];
gdjs.GameHardCode.GDShieldObjects1= [];
gdjs.GameHardCode.GDShieldObjects2= [];
gdjs.GameHardCode.GDShieldObjects3= [];
gdjs.GameHardCode.GDShieldObjects4= [];
gdjs.GameHardCode.GDShieldItemObjects1= [];
gdjs.GameHardCode.GDShieldItemObjects2= [];
gdjs.GameHardCode.GDShieldItemObjects3= [];
gdjs.GameHardCode.GDShieldItemObjects4= [];
gdjs.GameHardCode.GDBananaObjects1= [];
gdjs.GameHardCode.GDBananaObjects2= [];
gdjs.GameHardCode.GDBananaObjects3= [];
gdjs.GameHardCode.GDBananaObjects4= [];
gdjs.GameHardCode.GDLeft_9595arrow_9595round_9595buttonObjects1= [];
gdjs.GameHardCode.GDLeft_9595arrow_9595round_9595buttonObjects2= [];
gdjs.GameHardCode.GDLeft_9595arrow_9595round_9595buttonObjects3= [];
gdjs.GameHardCode.GDLeft_9595arrow_9595round_9595buttonObjects4= [];
gdjs.GameHardCode.GDRight_9595arrow_9595round_9595buttonObjects1= [];
gdjs.GameHardCode.GDRight_9595arrow_9595round_9595buttonObjects2= [];
gdjs.GameHardCode.GDRight_9595arrow_9595round_9595buttonObjects3= [];
gdjs.GameHardCode.GDRight_9595arrow_9595round_9595buttonObjects4= [];
gdjs.GameHardCode.GDNewTextObjects1= [];
gdjs.GameHardCode.GDNewTextObjects2= [];
gdjs.GameHardCode.GDNewTextObjects3= [];
gdjs.GameHardCode.GDNewTextObjects4= [];
gdjs.GameHardCode.GDRemote_9595BackObjects1= [];
gdjs.GameHardCode.GDRemote_9595BackObjects2= [];
gdjs.GameHardCode.GDRemote_9595BackObjects3= [];
gdjs.GameHardCode.GDRemote_9595BackObjects4= [];


gdjs.GameHardCode.mapOfGDgdjs_9546GameHardCode_9546GDCarObjects1Objects = Hashtable.newFrom({"Car": gdjs.GameHardCode.GDCarObjects1});
gdjs.GameHardCode.mapOfGDgdjs_9546GameHardCode_9546GDAddPointObjects1Objects = Hashtable.newFrom({"AddPoint": gdjs.GameHardCode.GDAddPointObjects1});
gdjs.GameHardCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Left_arrow_round_button"), gdjs.GameHardCode.GDLeft_9595arrow_9595round_9595buttonObjects2);
gdjs.copyArray(runtimeScene.getObjects("Right_arrow_round_button"), gdjs.GameHardCode.GDRight_9595arrow_9595round_9595buttonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameHardCode.GDRight_9595arrow_9595round_9595buttonObjects2.length;i<l;++i) {
    if ( !(gdjs.GameHardCode.GDRight_9595arrow_9595round_9595buttonObjects2[i].getBehavior("ButtonFSM").IsPressed(null)) ) {
        isConditionTrue_0 = true;
        gdjs.GameHardCode.GDRight_9595arrow_9595round_9595buttonObjects2[k] = gdjs.GameHardCode.GDRight_9595arrow_9595round_9595buttonObjects2[i];
        ++k;
    }
}
gdjs.GameHardCode.GDRight_9595arrow_9595round_9595buttonObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameHardCode.GDLeft_9595arrow_9595round_9595buttonObjects2.length;i<l;++i) {
    if ( !(gdjs.GameHardCode.GDLeft_9595arrow_9595round_9595buttonObjects2[i].getBehavior("ButtonFSM").IsPressed(null)) ) {
        isConditionTrue_0 = true;
        gdjs.GameHardCode.GDLeft_9595arrow_9595round_9595buttonObjects2[k] = gdjs.GameHardCode.GDLeft_9595arrow_9595round_9595buttonObjects2[i];
        ++k;
    }
}
gdjs.GameHardCode.GDLeft_9595arrow_9595round_9595buttonObjects2.length = k;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Car"), gdjs.GameHardCode.GDCarObjects2);
{for(var i = 0, len = gdjs.GameHardCode.GDCarObjects2.length ;i < len;++i) {
    gdjs.GameHardCode.GDCarObjects2[i].setAngle(0);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Left_arrow_round_button"), gdjs.GameHardCode.GDLeft_9595arrow_9595round_9595buttonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameHardCode.GDLeft_9595arrow_9595round_9595buttonObjects2.length;i<l;++i) {
    if ( gdjs.GameHardCode.GDLeft_9595arrow_9595round_9595buttonObjects2[i].getBehavior("ButtonFSM").IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.GameHardCode.GDLeft_9595arrow_9595round_9595buttonObjects2[k] = gdjs.GameHardCode.GDLeft_9595arrow_9595round_9595buttonObjects2[i];
        ++k;
    }
}
gdjs.GameHardCode.GDLeft_9595arrow_9595round_9595buttonObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Car"), gdjs.GameHardCode.GDCarObjects2);
{for(var i = 0, len = gdjs.GameHardCode.GDCarObjects2.length ;i < len;++i) {
    gdjs.GameHardCode.GDCarObjects2[i].setX(gdjs.GameHardCode.GDCarObjects2[i].getX() - (15));
}
}
{for(var i = 0, len = gdjs.GameHardCode.GDCarObjects2.length ;i < len;++i) {
    gdjs.GameHardCode.GDCarObjects2[i].setAngle(-(22));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Right_arrow_round_button"), gdjs.GameHardCode.GDRight_9595arrow_9595round_9595buttonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameHardCode.GDRight_9595arrow_9595round_9595buttonObjects2.length;i<l;++i) {
    if ( gdjs.GameHardCode.GDRight_9595arrow_9595round_9595buttonObjects2[i].getBehavior("ButtonFSM").IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.GameHardCode.GDRight_9595arrow_9595round_9595buttonObjects2[k] = gdjs.GameHardCode.GDRight_9595arrow_9595round_9595buttonObjects2[i];
        ++k;
    }
}
gdjs.GameHardCode.GDRight_9595arrow_9595round_9595buttonObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Car"), gdjs.GameHardCode.GDCarObjects2);
{for(var i = 0, len = gdjs.GameHardCode.GDCarObjects2.length ;i < len;++i) {
    gdjs.GameHardCode.GDCarObjects2[i].setX(gdjs.GameHardCode.GDCarObjects2[i].getX() + (15));
}
}
{for(var i = 0, len = gdjs.GameHardCode.GDCarObjects2.length ;i < len;++i) {
    gdjs.GameHardCode.GDCarObjects2[i].setAngle(22);
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Car"), gdjs.GameHardCode.GDCarObjects2);
{for(var i = 0, len = gdjs.GameHardCode.GDCarObjects2.length ;i < len;++i) {
    gdjs.GameHardCode.GDCarObjects2[i].setY(400);
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Car"), gdjs.GameHardCode.GDCarObjects2);
{for(var i = 0, len = gdjs.GameHardCode.GDCarObjects2.length ;i < len;++i) {
    gdjs.GameHardCode.GDCarObjects2[i].setX(gdjs.evtTools.common.clamp((gdjs.GameHardCode.GDCarObjects2[i].getPointX("")), 160, 800));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("AddPoint"), gdjs.GameHardCode.GDAddPointObjects1);
gdjs.copyArray(runtimeScene.getObjects("Car"), gdjs.GameHardCode.GDCarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameHardCode.mapOfGDgdjs_9546GameHardCode_9546GDCarObjects1Objects, gdjs.GameHardCode.mapOfGDgdjs_9546GameHardCode_9546GDAddPointObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16709404);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameHardCode.GDAddPointObjects1 */
gdjs.copyArray(runtimeScene.getObjects("SkullGameOverDialog"), gdjs.GameHardCode.GDSkullGameOverDialogObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(1).add(1);
}
{for(var i = 0, len = gdjs.GameHardCode.GDSkullGameOverDialogObjects1.length ;i < len;++i) {
    gdjs.GameHardCode.GDSkullGameOverDialogObjects1[i].SetScore(runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber(), null);
}
}
{for(var i = 0, len = gdjs.GameHardCode.GDAddPointObjects1.length ;i < len;++i) {
    gdjs.GameHardCode.GDAddPointObjects1[i].deleteFromScene(runtimeScene);
}
}
}

}


};gdjs.GameHardCode.asyncCallback16711020 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.GameHardCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("CarEnemy"), gdjs.GameHardCode.GDCarEnemyObjects3);
gdjs.copyArray(runtimeScene.getObjects("Ramp"), gdjs.GameHardCode.GDRampObjects3);
gdjs.copyArray(runtimeScene.getObjects("Road"), gdjs.GameHardCode.GDRoadObjects3);
gdjs.copyArray(runtimeScene.getObjects("ShieldItem"), gdjs.GameHardCode.GDShieldItemObjects3);
{for(var i = 0, len = gdjs.GameHardCode.GDRoadObjects3.length ;i < len;++i) {
    gdjs.GameHardCode.GDRoadObjects3[i].setY(gdjs.GameHardCode.GDRoadObjects3[i].getY() + (8));
}
}
{for(var i = 0, len = gdjs.GameHardCode.GDRampObjects3.length ;i < len;++i) {
    gdjs.GameHardCode.GDRampObjects3[i].setY(gdjs.GameHardCode.GDRampObjects3[i].getY() + (8));
}
}
{for(var i = 0, len = gdjs.GameHardCode.GDCarEnemyObjects3.length ;i < len;++i) {
    gdjs.GameHardCode.GDCarEnemyObjects3[i].setY(gdjs.GameHardCode.GDCarEnemyObjects3[i].getY() + (8));
}
}
{for(var i = 0, len = gdjs.GameHardCode.GDShieldItemObjects3.length ;i < len;++i) {
    gdjs.GameHardCode.GDShieldItemObjects3[i].setY(gdjs.GameHardCode.GDShieldItemObjects3[i].getY() + (8));
}
}
gdjs.GameHardCode.localVariables.length = 0;
}
gdjs.GameHardCode.idToCallbackMap.set(16711020, gdjs.GameHardCode.asyncCallback16711020);
gdjs.GameHardCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.GameHardCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.01), (runtimeScene) => (gdjs.GameHardCode.asyncCallback16711020(runtimeScene, asyncObjectsList)), 16711020, asyncObjectsList);
}
}

}


};gdjs.GameHardCode.mapOfGDgdjs_9546GameHardCode_9546GDRoadObjects2Objects = Hashtable.newFrom({"Road": gdjs.GameHardCode.GDRoadObjects2});
gdjs.GameHardCode.mapOfGDgdjs_9546GameHardCode_9546GDTpUpObjects2Objects = Hashtable.newFrom({"TpUp": gdjs.GameHardCode.GDTpUpObjects2});
gdjs.GameHardCode.mapOfGDgdjs_9546GameHardCode_9546GDCarEnemyObjects2Objects = Hashtable.newFrom({"CarEnemy": gdjs.GameHardCode.GDCarEnemyObjects2});
gdjs.GameHardCode.mapOfGDgdjs_9546GameHardCode_9546GDTpUpObjects2Objects = Hashtable.newFrom({"TpUp": gdjs.GameHardCode.GDTpUpObjects2});
gdjs.GameHardCode.mapOfGDgdjs_9546GameHardCode_9546GDAddPointObjects2Objects = Hashtable.newFrom({"AddPoint": gdjs.GameHardCode.GDAddPointObjects2});
gdjs.GameHardCode.mapOfGDgdjs_9546GameHardCode_9546GDTpUpObjects2Objects = Hashtable.newFrom({"TpUp": gdjs.GameHardCode.GDTpUpObjects2});
gdjs.GameHardCode.mapOfGDgdjs_9546GameHardCode_9546GDShieldItemObjects2Objects = Hashtable.newFrom({"ShieldItem": gdjs.GameHardCode.GDShieldItemObjects2});
gdjs.GameHardCode.mapOfGDgdjs_9546GameHardCode_9546GDTpUpObjects2Objects = Hashtable.newFrom({"TpUp": gdjs.GameHardCode.GDTpUpObjects2});
gdjs.GameHardCode.mapOfGDgdjs_9546GameHardCode_9546GDCarObjects1Objects = Hashtable.newFrom({"Car": gdjs.GameHardCode.GDCarObjects1});
gdjs.GameHardCode.mapOfGDgdjs_9546GameHardCode_9546GDRampObjects1Objects = Hashtable.newFrom({"Ramp": gdjs.GameHardCode.GDRampObjects1});
gdjs.GameHardCode.asyncCallback16715388 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.GameHardCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Car"), gdjs.GameHardCode.GDCarObjects3);

{for(var i = 0, len = gdjs.GameHardCode.GDCarObjects3.length ;i < len;++i) {
    gdjs.GameHardCode.GDCarObjects3[i].getBehavior("Tween").addObjectScaleTween3("ramp", 1, "linear", 1, false, true);
}
}
gdjs.GameHardCode.localVariables.length = 0;
}
gdjs.GameHardCode.idToCallbackMap.set(16715388, gdjs.GameHardCode.asyncCallback16715388);
gdjs.GameHardCode.eventsList2 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.GameHardCode.localVariables);
for (const obj of gdjs.GameHardCode.GDCarObjects2) asyncObjectsList.addObject("Car", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.GameHardCode.asyncCallback16715388(runtimeScene, asyncObjectsList)), 16715388, asyncObjectsList);
}
}

}


};gdjs.GameHardCode.asyncCallback16714964 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.GameHardCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Car"), gdjs.GameHardCode.GDCarObjects2);

{for(var i = 0, len = gdjs.GameHardCode.GDCarObjects2.length ;i < len;++i) {
    gdjs.GameHardCode.GDCarObjects2[i].getBehavior("Tween").addObjectScaleTween3("ramp", 1.5, "linear", 1, false, true);
}
}

{ //Subevents
gdjs.GameHardCode.eventsList2(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.GameHardCode.localVariables.length = 0;
}
gdjs.GameHardCode.idToCallbackMap.set(16714964, gdjs.GameHardCode.asyncCallback16714964);
gdjs.GameHardCode.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.GameHardCode.localVariables);
for (const obj of gdjs.GameHardCode.GDCarObjects1) asyncObjectsList.addObject("Car", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs.GameHardCode.asyncCallback16714964(runtimeScene, asyncObjectsList)), 16714964, asyncObjectsList);
}
}

}


};gdjs.GameHardCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.GameHardCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Road"), gdjs.GameHardCode.GDRoadObjects2);
gdjs.copyArray(runtimeScene.getObjects("TpUp"), gdjs.GameHardCode.GDTpUpObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameHardCode.mapOfGDgdjs_9546GameHardCode_9546GDRoadObjects2Objects, gdjs.GameHardCode.mapOfGDgdjs_9546GameHardCode_9546GDTpUpObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.GameHardCode.GDRoadObjects2 */
{for(var i = 0, len = gdjs.GameHardCode.GDRoadObjects2.length ;i < len;++i) {
    gdjs.GameHardCode.GDRoadObjects2[i].setY(-(1000));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("CarEnemy"), gdjs.GameHardCode.GDCarEnemyObjects2);
gdjs.copyArray(runtimeScene.getObjects("TpUp"), gdjs.GameHardCode.GDTpUpObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameHardCode.mapOfGDgdjs_9546GameHardCode_9546GDCarEnemyObjects2Objects, gdjs.GameHardCode.mapOfGDgdjs_9546GameHardCode_9546GDTpUpObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.GameHardCode.GDCarEnemyObjects2 */
{for(var i = 0, len = gdjs.GameHardCode.GDCarEnemyObjects2.length ;i < len;++i) {
    gdjs.GameHardCode.GDCarEnemyObjects2[i].deleteFromScene(runtimeScene);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("AddPoint"), gdjs.GameHardCode.GDAddPointObjects2);
gdjs.copyArray(runtimeScene.getObjects("TpUp"), gdjs.GameHardCode.GDTpUpObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameHardCode.mapOfGDgdjs_9546GameHardCode_9546GDAddPointObjects2Objects, gdjs.GameHardCode.mapOfGDgdjs_9546GameHardCode_9546GDTpUpObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.GameHardCode.GDAddPointObjects2 */
{for(var i = 0, len = gdjs.GameHardCode.GDAddPointObjects2.length ;i < len;++i) {
    gdjs.GameHardCode.GDAddPointObjects2[i].deleteFromScene(runtimeScene);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ShieldItem"), gdjs.GameHardCode.GDShieldItemObjects2);
gdjs.copyArray(runtimeScene.getObjects("TpUp"), gdjs.GameHardCode.GDTpUpObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameHardCode.mapOfGDgdjs_9546GameHardCode_9546GDShieldItemObjects2Objects, gdjs.GameHardCode.mapOfGDgdjs_9546GameHardCode_9546GDTpUpObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.GameHardCode.GDShieldItemObjects2 */
{for(var i = 0, len = gdjs.GameHardCode.GDShieldItemObjects2.length ;i < len;++i) {
    gdjs.GameHardCode.GDShieldItemObjects2[i].deleteFromScene(runtimeScene);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Car"), gdjs.GameHardCode.GDCarObjects1);
gdjs.copyArray(runtimeScene.getObjects("Ramp"), gdjs.GameHardCode.GDRampObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameHardCode.mapOfGDgdjs_9546GameHardCode_9546GDCarObjects1Objects, gdjs.GameHardCode.mapOfGDgdjs_9546GameHardCode_9546GDRampObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16714844);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameHardCode.eventsList3(runtimeScene);} //End of subevents
}

}


};gdjs.GameHardCode.asyncCallback16716300 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.GameHardCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(gdjs.randomInRange(1, 3));
}
gdjs.GameHardCode.localVariables.length = 0;
}
gdjs.GameHardCode.idToCallbackMap.set(16716300, gdjs.GameHardCode.asyncCallback16716300);
gdjs.GameHardCode.eventsList5 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.GameHardCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.GameHardCode.asyncCallback16716300(runtimeScene, asyncObjectsList)), 16716300, asyncObjectsList);
}
}

}


};gdjs.GameHardCode.mapOfGDgdjs_9546GameHardCode_9546GDCarEnemyObjects2Objects = Hashtable.newFrom({"CarEnemy": gdjs.GameHardCode.GDCarEnemyObjects2});
gdjs.GameHardCode.mapOfGDgdjs_9546GameHardCode_9546GDAddPointObjects2Objects = Hashtable.newFrom({"AddPoint": gdjs.GameHardCode.GDAddPointObjects2});
gdjs.GameHardCode.mapOfGDgdjs_9546GameHardCode_9546GDCarEnemyObjects2Objects = Hashtable.newFrom({"CarEnemy": gdjs.GameHardCode.GDCarEnemyObjects2});
gdjs.GameHardCode.mapOfGDgdjs_9546GameHardCode_9546GDCarEnemyObjects2Objects = Hashtable.newFrom({"CarEnemy": gdjs.GameHardCode.GDCarEnemyObjects2});
gdjs.GameHardCode.mapOfGDgdjs_9546GameHardCode_9546GDAddPointObjects2Objects = Hashtable.newFrom({"AddPoint": gdjs.GameHardCode.GDAddPointObjects2});
gdjs.GameHardCode.mapOfGDgdjs_9546GameHardCode_9546GDCarEnemyObjects2Objects = Hashtable.newFrom({"CarEnemy": gdjs.GameHardCode.GDCarEnemyObjects2});
gdjs.GameHardCode.mapOfGDgdjs_9546GameHardCode_9546GDCarEnemyObjects1Objects = Hashtable.newFrom({"CarEnemy": gdjs.GameHardCode.GDCarEnemyObjects1});
gdjs.GameHardCode.mapOfGDgdjs_9546GameHardCode_9546GDAddPointObjects1Objects = Hashtable.newFrom({"AddPoint": gdjs.GameHardCode.GDAddPointObjects1});
gdjs.GameHardCode.mapOfGDgdjs_9546GameHardCode_9546GDCarEnemyObjects1Objects = Hashtable.newFrom({"CarEnemy": gdjs.GameHardCode.GDCarEnemyObjects1});
gdjs.GameHardCode.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16716404);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameHardCode.eventsList5(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 2);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16717620);
}
}
if (isConditionTrue_0) {
gdjs.GameHardCode.GDAddPointObjects2.length = 0;

gdjs.GameHardCode.GDCarEnemyObjects2.length = 0;

{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(0);
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameHardCode.mapOfGDgdjs_9546GameHardCode_9546GDCarEnemyObjects2Objects, 160, -(1020), "");
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameHardCode.mapOfGDgdjs_9546GameHardCode_9546GDAddPointObjects2Objects, 800, -(1020), "");
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameHardCode.mapOfGDgdjs_9546GameHardCode_9546GDCarEnemyObjects2Objects, 480, -(1020), "");
}
{for(var i = 0, len = gdjs.GameHardCode.GDCarEnemyObjects2.length ;i < len;++i) {
    gdjs.GameHardCode.GDCarEnemyObjects2[i].getBehavior("Animation").setAnimationIndex(gdjs.randomInRange(1, 6));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16718180);
}
}
if (isConditionTrue_0) {
gdjs.GameHardCode.GDAddPointObjects2.length = 0;

gdjs.GameHardCode.GDCarEnemyObjects2.length = 0;

{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(0);
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameHardCode.mapOfGDgdjs_9546GameHardCode_9546GDCarEnemyObjects2Objects, 160, -(1020), "");
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameHardCode.mapOfGDgdjs_9546GameHardCode_9546GDAddPointObjects2Objects, 480, -(1020), "");
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameHardCode.mapOfGDgdjs_9546GameHardCode_9546GDCarEnemyObjects2Objects, 800, -(1020), "");
}
{for(var i = 0, len = gdjs.GameHardCode.GDCarEnemyObjects2.length ;i < len;++i) {
    gdjs.GameHardCode.GDCarEnemyObjects2[i].getBehavior("Animation").setAnimationIndex(gdjs.randomInRange(1, 6));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 3);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16720980);
}
}
if (isConditionTrue_0) {
gdjs.GameHardCode.GDAddPointObjects1.length = 0;

gdjs.GameHardCode.GDCarEnemyObjects1.length = 0;

{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(0);
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameHardCode.mapOfGDgdjs_9546GameHardCode_9546GDCarEnemyObjects1Objects, 480, -(1020), "");
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameHardCode.mapOfGDgdjs_9546GameHardCode_9546GDAddPointObjects1Objects, 160, -(1020), "");
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameHardCode.mapOfGDgdjs_9546GameHardCode_9546GDCarEnemyObjects1Objects, 800, -(1020), "");
}
{for(var i = 0, len = gdjs.GameHardCode.GDCarEnemyObjects1.length ;i < len;++i) {
    gdjs.GameHardCode.GDCarEnemyObjects1[i].getBehavior("Animation").setAnimationIndex(gdjs.randomInRange(1, 6));
}
}
}

}


};gdjs.GameHardCode.mapOfGDgdjs_9546GameHardCode_9546GDCarObjects2Objects = Hashtable.newFrom({"Car": gdjs.GameHardCode.GDCarObjects2});
gdjs.GameHardCode.mapOfGDgdjs_9546GameHardCode_9546GDCarEnemyObjects2Objects = Hashtable.newFrom({"CarEnemy": gdjs.GameHardCode.GDCarEnemyObjects2});
gdjs.GameHardCode.mapOfGDgdjs_9546GameHardCode_9546GDCarObjects2Objects = Hashtable.newFrom({"Car": gdjs.GameHardCode.GDCarObjects2});
gdjs.GameHardCode.mapOfGDgdjs_9546GameHardCode_9546GDCarEnemyObjects2Objects = Hashtable.newFrom({"CarEnemy": gdjs.GameHardCode.GDCarEnemyObjects2});
gdjs.GameHardCode.eventsList7 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Car"), gdjs.GameHardCode.GDCarObjects2);
gdjs.copyArray(runtimeScene.getObjects("CarEnemy"), gdjs.GameHardCode.GDCarEnemyObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameHardCode.mapOfGDgdjs_9546GameHardCode_9546GDCarObjects2Objects, gdjs.GameHardCode.mapOfGDgdjs_9546GameHardCode_9546GDCarEnemyObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getScene().getVariables().getFromIndex(3).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16723996);
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(2).sub(1);
}
{gdjs.evtTools.sound.playSound(runtimeScene, "explode1_5uz7VYc.mp3", false, 100, 2);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Car"), gdjs.GameHardCode.GDCarObjects2);
gdjs.copyArray(runtimeScene.getObjects("CarEnemy"), gdjs.GameHardCode.GDCarEnemyObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameHardCode.mapOfGDgdjs_9546GameHardCode_9546GDCarObjects2Objects, gdjs.GameHardCode.mapOfGDgdjs_9546GameHardCode_9546GDCarEnemyObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16724908);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameHardCode.GDCarEnemyObjects2 */
{for(var i = 0, len = gdjs.GameHardCode.GDCarEnemyObjects2.length ;i < len;++i) {
    gdjs.GameHardCode.GDCarEnemyObjects2[i].deleteFromScene(runtimeScene);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16725636);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.setTimeScale(runtimeScene, 0);
}
{gdjs.evtTools.camera.hideLayer(runtimeScene, "UI");
}
{gdjs.evtTools.camera.showLayer(runtimeScene, "GO");
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("FlatHeartBar"), gdjs.GameHardCode.GDFlatHeartBarObjects2);
{for(var i = 0, len = gdjs.GameHardCode.GDFlatHeartBarObjects2.length ;i < len;++i) {
    gdjs.GameHardCode.GDFlatHeartBarObjects2[i].SetValue(runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber(), null);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() == 3);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Car"), gdjs.GameHardCode.GDCarObjects2);
{for(var i = 0, len = gdjs.GameHardCode.GDCarObjects2.length ;i < len;++i) {
    gdjs.GameHardCode.GDCarObjects2[i].getBehavior("Animation").setAnimationName("CarRedUp");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() == 2);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Car"), gdjs.GameHardCode.GDCarObjects2);
{for(var i = 0, len = gdjs.GameHardCode.GDCarObjects2.length ;i < len;++i) {
    gdjs.GameHardCode.GDCarObjects2[i].getBehavior("Animation").setAnimationName("2hp RedCar");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Car"), gdjs.GameHardCode.GDCarObjects2);
{for(var i = 0, len = gdjs.GameHardCode.GDCarObjects2.length ;i < len;++i) {
    gdjs.GameHardCode.GDCarObjects2[i].getBehavior("Animation").setAnimationName("1hp RedCar");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() == 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Car"), gdjs.GameHardCode.GDCarObjects1);
{for(var i = 0, len = gdjs.GameHardCode.GDCarObjects1.length ;i < len;++i) {
    gdjs.GameHardCode.GDCarObjects1[i].getBehavior("Animation").setAnimationName("0hp RedCar");
}
}
}

}


};gdjs.GameHardCode.mapOfGDgdjs_9546GameHardCode_9546GDShieldObjects2Objects = Hashtable.newFrom({"Shield": gdjs.GameHardCode.GDShieldObjects2});
gdjs.GameHardCode.asyncCallback16730668 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.GameHardCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Shield"), gdjs.GameHardCode.GDShieldObjects3);

{for(var i = 0, len = gdjs.GameHardCode.GDShieldObjects3.length ;i < len;++i) {
    gdjs.GameHardCode.GDShieldObjects3[i].getBehavior("Animation").setAnimationName("Hide");
}
}
gdjs.GameHardCode.localVariables.length = 0;
}
gdjs.GameHardCode.idToCallbackMap.set(16730668, gdjs.GameHardCode.asyncCallback16730668);
gdjs.GameHardCode.eventsList8 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.GameHardCode.localVariables);
for (const obj of gdjs.GameHardCode.GDShieldObjects2) asyncObjectsList.addObject("Shield", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(10), (runtimeScene) => (gdjs.GameHardCode.asyncCallback16730668(runtimeScene, asyncObjectsList)), 16730668, asyncObjectsList);
}
}

}


};gdjs.GameHardCode.mapOfGDgdjs_9546GameHardCode_9546GDCarObjects2Objects = Hashtable.newFrom({"Car": gdjs.GameHardCode.GDCarObjects2});
gdjs.GameHardCode.mapOfGDgdjs_9546GameHardCode_9546GDShieldItemObjects2Objects = Hashtable.newFrom({"ShieldItem": gdjs.GameHardCode.GDShieldItemObjects2});
gdjs.GameHardCode.asyncCallback16734748 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.GameHardCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(4).setNumber(gdjs.randomInRange(1, 3));
}
gdjs.GameHardCode.localVariables.length = 0;
}
gdjs.GameHardCode.idToCallbackMap.set(16734748, gdjs.GameHardCode.asyncCallback16734748);
gdjs.GameHardCode.eventsList9 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.GameHardCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(45), (runtimeScene) => (gdjs.GameHardCode.asyncCallback16734748(runtimeScene, asyncObjectsList)), 16734748, asyncObjectsList);
}
}

}


};gdjs.GameHardCode.mapOfGDgdjs_9546GameHardCode_9546GDShieldItemObjects2Objects = Hashtable.newFrom({"ShieldItem": gdjs.GameHardCode.GDShieldItemObjects2});
gdjs.GameHardCode.mapOfGDgdjs_9546GameHardCode_9546GDShieldItemObjects2Objects = Hashtable.newFrom({"ShieldItem": gdjs.GameHardCode.GDShieldItemObjects2});
gdjs.GameHardCode.mapOfGDgdjs_9546GameHardCode_9546GDShieldItemObjects1Objects = Hashtable.newFrom({"ShieldItem": gdjs.GameHardCode.GDShieldItemObjects1});
gdjs.GameHardCode.eventsList10 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(3).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16730164);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Car"), gdjs.GameHardCode.GDCarObjects2);
gdjs.GameHardCode.GDShieldObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameHardCode.mapOfGDgdjs_9546GameHardCode_9546GDShieldObjects2Objects, (( gdjs.GameHardCode.GDCarObjects2.length === 0 ) ? 0 :gdjs.GameHardCode.GDCarObjects2[0].getPointX("")), (( gdjs.GameHardCode.GDCarObjects2.length === 0 ) ? 0 :gdjs.GameHardCode.GDCarObjects2[0].getPointY("")), "");
}
{for(var i = 0, len = gdjs.GameHardCode.GDShieldObjects2.length ;i < len;++i) {
    gdjs.GameHardCode.GDShieldObjects2[i].setCenterPositionInScene((( gdjs.GameHardCode.GDCarObjects2.length === 0 ) ? 0 :gdjs.GameHardCode.GDCarObjects2[0].getCenterXInScene()),(( gdjs.GameHardCode.GDCarObjects2.length === 0 ) ? 0 :gdjs.GameHardCode.GDCarObjects2[0].getCenterYInScene()));
}
}

{ //Subevents
gdjs.GameHardCode.eventsList8(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Shield"), gdjs.GameHardCode.GDShieldObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameHardCode.GDShieldObjects2.length;i<l;++i) {
    if ( gdjs.GameHardCode.GDShieldObjects2[i].getBehavior("Animation").getAnimationName() == "Hide" ) {
        isConditionTrue_0 = true;
        gdjs.GameHardCode.GDShieldObjects2[k] = gdjs.GameHardCode.GDShieldObjects2[i];
        ++k;
    }
}
gdjs.GameHardCode.GDShieldObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameHardCode.GDShieldObjects2.length;i<l;++i) {
    if ( gdjs.GameHardCode.GDShieldObjects2[i].getBehavior("Animation").hasAnimationEnded() ) {
        isConditionTrue_0 = true;
        gdjs.GameHardCode.GDShieldObjects2[k] = gdjs.GameHardCode.GDShieldObjects2[i];
        ++k;
    }
}
gdjs.GameHardCode.GDShieldObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameHardCode.GDShieldObjects2 */
{for(var i = 0, len = gdjs.GameHardCode.GDShieldObjects2.length ;i < len;++i) {
    gdjs.GameHardCode.GDShieldObjects2[i].deleteFromScene(runtimeScene);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(3).setBoolean(false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(3).getAsBoolean();
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Car"), gdjs.GameHardCode.GDCarObjects2);
gdjs.copyArray(runtimeScene.getObjects("Shield"), gdjs.GameHardCode.GDShieldObjects2);
{for(var i = 0, len = gdjs.GameHardCode.GDShieldObjects2.length ;i < len;++i) {
    gdjs.GameHardCode.GDShieldObjects2[i].setCenterPositionInScene((( gdjs.GameHardCode.GDCarObjects2.length === 0 ) ? 0 :gdjs.GameHardCode.GDCarObjects2[0].getCenterXInScene()),(( gdjs.GameHardCode.GDCarObjects2.length === 0 ) ? 0 :gdjs.GameHardCode.GDCarObjects2[0].getCenterYInScene()));
}
}
{for(var i = 0, len = gdjs.GameHardCode.GDShieldObjects2.length ;i < len;++i) {
    gdjs.GameHardCode.GDShieldObjects2[i].getBehavior("Opacity").setOpacity(130);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Car"), gdjs.GameHardCode.GDCarObjects2);
gdjs.copyArray(runtimeScene.getObjects("ShieldItem"), gdjs.GameHardCode.GDShieldItemObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameHardCode.mapOfGDgdjs_9546GameHardCode_9546GDCarObjects2Objects, gdjs.GameHardCode.mapOfGDgdjs_9546GameHardCode_9546GDShieldItemObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.GameHardCode.GDShieldItemObjects2 */
{for(var i = 0, len = gdjs.GameHardCode.GDShieldItemObjects2.length ;i < len;++i) {
    gdjs.GameHardCode.GDShieldItemObjects2[i].deleteFromScene(runtimeScene);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(3).setBoolean(true);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16734956);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameHardCode.eventsList9(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16735732);
}
}
if (isConditionTrue_0) {
gdjs.GameHardCode.GDShieldItemObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameHardCode.mapOfGDgdjs_9546GameHardCode_9546GDShieldItemObjects2Objects, 290, -(350), "");
}
{runtimeScene.getScene().getVariables().getFromIndex(4).setNumber(0);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() == 2);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16737028);
}
}
if (isConditionTrue_0) {
gdjs.GameHardCode.GDShieldItemObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameHardCode.mapOfGDgdjs_9546GameHardCode_9546GDShieldItemObjects2Objects, 610, -(350), "");
}
{runtimeScene.getScene().getVariables().getFromIndex(4).setNumber(0);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() == 3);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16738116);
}
}
if (isConditionTrue_0) {
gdjs.GameHardCode.GDShieldItemObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameHardCode.mapOfGDgdjs_9546GameHardCode_9546GDShieldItemObjects1Objects, 930, -(350), "");
}
{runtimeScene.getScene().getVariables().getFromIndex(4).setNumber(0);
}
}

}


};gdjs.GameHardCode.mapOfGDgdjs_9546GameHardCode_9546GDNewTextObjects1Objects = Hashtable.newFrom({"NewText": gdjs.GameHardCode.GDNewTextObjects1});
gdjs.GameHardCode.asyncCallback16740660 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.GameHardCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("NewText"), gdjs.GameHardCode.GDNewTextObjects4);

{for(var i = 0, len = gdjs.GameHardCode.GDNewTextObjects4.length ;i < len;++i) {
    gdjs.GameHardCode.GDNewTextObjects4[i].deleteFromScene(runtimeScene);
}
}
{gdjs.evtTools.runtimeScene.setTimeScale(runtimeScene, 1);
}
gdjs.GameHardCode.localVariables.length = 0;
}
gdjs.GameHardCode.idToCallbackMap.set(16740660, gdjs.GameHardCode.asyncCallback16740660);
gdjs.GameHardCode.eventsList11 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.GameHardCode.localVariables);
for (const obj of gdjs.GameHardCode.GDNewTextObjects3) asyncObjectsList.addObject("NewText", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.GameHardCode.asyncCallback16740660(runtimeScene, asyncObjectsList)), 16740660, asyncObjectsList);
}
}

}


};gdjs.GameHardCode.asyncCallback16740412 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.GameHardCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("NewText"), gdjs.GameHardCode.GDNewTextObjects3);

{for(var i = 0, len = gdjs.GameHardCode.GDNewTextObjects3.length ;i < len;++i) {
    gdjs.GameHardCode.GDNewTextObjects3[i].getBehavior("Text").setText("1");
}
}

{ //Subevents
gdjs.GameHardCode.eventsList11(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.GameHardCode.localVariables.length = 0;
}
gdjs.GameHardCode.idToCallbackMap.set(16740412, gdjs.GameHardCode.asyncCallback16740412);
gdjs.GameHardCode.eventsList12 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.GameHardCode.localVariables);
for (const obj of gdjs.GameHardCode.GDNewTextObjects2) asyncObjectsList.addObject("NewText", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.GameHardCode.asyncCallback16740412(runtimeScene, asyncObjectsList)), 16740412, asyncObjectsList);
}
}

}


};gdjs.GameHardCode.asyncCallback16740004 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.GameHardCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("NewText"), gdjs.GameHardCode.GDNewTextObjects2);

{for(var i = 0, len = gdjs.GameHardCode.GDNewTextObjects2.length ;i < len;++i) {
    gdjs.GameHardCode.GDNewTextObjects2[i].getBehavior("Text").setText("2");
}
}

{ //Subevents
gdjs.GameHardCode.eventsList12(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.GameHardCode.localVariables.length = 0;
}
gdjs.GameHardCode.idToCallbackMap.set(16740004, gdjs.GameHardCode.asyncCallback16740004);
gdjs.GameHardCode.eventsList13 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.GameHardCode.localVariables);
for (const obj of gdjs.GameHardCode.GDNewTextObjects1) asyncObjectsList.addObject("NewText", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.GameHardCode.asyncCallback16740004(runtimeScene, asyncObjectsList)), 16740004, asyncObjectsList);
}
}

}


};gdjs.GameHardCode.eventsList14 = function(runtimeScene) {

{


gdjs.GameHardCode.eventsList0(runtimeScene);
}


{


gdjs.GameHardCode.eventsList4(runtimeScene);
}


{


gdjs.GameHardCode.eventsList6(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("SkullGameOverDialog"), gdjs.GameHardCode.GDSkullGameOverDialogObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameHardCode.GDSkullGameOverDialogObjects1.length;i<l;++i) {
    if ( gdjs.GameHardCode.GDSkullGameOverDialogObjects1[i].IsRestartClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.GameHardCode.GDSkullGameOverDialogObjects1[k] = gdjs.GameHardCode.GDSkullGameOverDialogObjects1[i];
        ++k;
    }
}
gdjs.GameHardCode.GDSkullGameOverDialogObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GameNormal", false);
}
}

}


{


gdjs.GameHardCode.eventsList7(runtimeScene);
}


{


gdjs.GameHardCode.eventsList10(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("Remote_Back"), gdjs.GameHardCode.GDRemote_9595BackObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameHardCode.GDRemote_9595BackObjects1.length;i<l;++i) {
    if ( gdjs.GameHardCode.GDRemote_9595BackObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.GameHardCode.GDRemote_9595BackObjects1[k] = gdjs.GameHardCode.GDRemote_9595BackObjects1[i];
        ++k;
    }
}
gdjs.GameHardCode.GDRemote_9595BackObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Lobby", false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16739676);
}
}
if (isConditionTrue_0) {
gdjs.GameHardCode.GDNewTextObjects1.length = 0;

{gdjs.evtTools.runtimeScene.setTimeScale(runtimeScene, 0);
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameHardCode.mapOfGDgdjs_9546GameHardCode_9546GDNewTextObjects1Objects, 590, 200, "");
}

{ //Subevents
gdjs.GameHardCode.eventsList13(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.GameHardCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameHardCode.GDCarObjects1.length = 0;
gdjs.GameHardCode.GDCarObjects2.length = 0;
gdjs.GameHardCode.GDCarObjects3.length = 0;
gdjs.GameHardCode.GDCarObjects4.length = 0;
gdjs.GameHardCode.GDRoadObjects1.length = 0;
gdjs.GameHardCode.GDRoadObjects2.length = 0;
gdjs.GameHardCode.GDRoadObjects3.length = 0;
gdjs.GameHardCode.GDRoadObjects4.length = 0;
gdjs.GameHardCode.GDTpUpObjects1.length = 0;
gdjs.GameHardCode.GDTpUpObjects2.length = 0;
gdjs.GameHardCode.GDTpUpObjects3.length = 0;
gdjs.GameHardCode.GDTpUpObjects4.length = 0;
gdjs.GameHardCode.GDRampObjects1.length = 0;
gdjs.GameHardCode.GDRampObjects2.length = 0;
gdjs.GameHardCode.GDRampObjects3.length = 0;
gdjs.GameHardCode.GDRampObjects4.length = 0;
gdjs.GameHardCode.GDCarEnemyObjects1.length = 0;
gdjs.GameHardCode.GDCarEnemyObjects2.length = 0;
gdjs.GameHardCode.GDCarEnemyObjects3.length = 0;
gdjs.GameHardCode.GDCarEnemyObjects4.length = 0;
gdjs.GameHardCode.GDSkullGameOverDialogObjects1.length = 0;
gdjs.GameHardCode.GDSkullGameOverDialogObjects2.length = 0;
gdjs.GameHardCode.GDSkullGameOverDialogObjects3.length = 0;
gdjs.GameHardCode.GDSkullGameOverDialogObjects4.length = 0;
gdjs.GameHardCode.GDAddPointObjects1.length = 0;
gdjs.GameHardCode.GDAddPointObjects2.length = 0;
gdjs.GameHardCode.GDAddPointObjects3.length = 0;
gdjs.GameHardCode.GDAddPointObjects4.length = 0;
gdjs.GameHardCode.GDFlatHeartBarObjects1.length = 0;
gdjs.GameHardCode.GDFlatHeartBarObjects2.length = 0;
gdjs.GameHardCode.GDFlatHeartBarObjects3.length = 0;
gdjs.GameHardCode.GDFlatHeartBarObjects4.length = 0;
gdjs.GameHardCode.GDShieldObjects1.length = 0;
gdjs.GameHardCode.GDShieldObjects2.length = 0;
gdjs.GameHardCode.GDShieldObjects3.length = 0;
gdjs.GameHardCode.GDShieldObjects4.length = 0;
gdjs.GameHardCode.GDShieldItemObjects1.length = 0;
gdjs.GameHardCode.GDShieldItemObjects2.length = 0;
gdjs.GameHardCode.GDShieldItemObjects3.length = 0;
gdjs.GameHardCode.GDShieldItemObjects4.length = 0;
gdjs.GameHardCode.GDBananaObjects1.length = 0;
gdjs.GameHardCode.GDBananaObjects2.length = 0;
gdjs.GameHardCode.GDBananaObjects3.length = 0;
gdjs.GameHardCode.GDBananaObjects4.length = 0;
gdjs.GameHardCode.GDLeft_9595arrow_9595round_9595buttonObjects1.length = 0;
gdjs.GameHardCode.GDLeft_9595arrow_9595round_9595buttonObjects2.length = 0;
gdjs.GameHardCode.GDLeft_9595arrow_9595round_9595buttonObjects3.length = 0;
gdjs.GameHardCode.GDLeft_9595arrow_9595round_9595buttonObjects4.length = 0;
gdjs.GameHardCode.GDRight_9595arrow_9595round_9595buttonObjects1.length = 0;
gdjs.GameHardCode.GDRight_9595arrow_9595round_9595buttonObjects2.length = 0;
gdjs.GameHardCode.GDRight_9595arrow_9595round_9595buttonObjects3.length = 0;
gdjs.GameHardCode.GDRight_9595arrow_9595round_9595buttonObjects4.length = 0;
gdjs.GameHardCode.GDNewTextObjects1.length = 0;
gdjs.GameHardCode.GDNewTextObjects2.length = 0;
gdjs.GameHardCode.GDNewTextObjects3.length = 0;
gdjs.GameHardCode.GDNewTextObjects4.length = 0;
gdjs.GameHardCode.GDRemote_9595BackObjects1.length = 0;
gdjs.GameHardCode.GDRemote_9595BackObjects2.length = 0;
gdjs.GameHardCode.GDRemote_9595BackObjects3.length = 0;
gdjs.GameHardCode.GDRemote_9595BackObjects4.length = 0;

gdjs.GameHardCode.eventsList14(runtimeScene);
gdjs.GameHardCode.GDCarObjects1.length = 0;
gdjs.GameHardCode.GDCarObjects2.length = 0;
gdjs.GameHardCode.GDCarObjects3.length = 0;
gdjs.GameHardCode.GDCarObjects4.length = 0;
gdjs.GameHardCode.GDRoadObjects1.length = 0;
gdjs.GameHardCode.GDRoadObjects2.length = 0;
gdjs.GameHardCode.GDRoadObjects3.length = 0;
gdjs.GameHardCode.GDRoadObjects4.length = 0;
gdjs.GameHardCode.GDTpUpObjects1.length = 0;
gdjs.GameHardCode.GDTpUpObjects2.length = 0;
gdjs.GameHardCode.GDTpUpObjects3.length = 0;
gdjs.GameHardCode.GDTpUpObjects4.length = 0;
gdjs.GameHardCode.GDRampObjects1.length = 0;
gdjs.GameHardCode.GDRampObjects2.length = 0;
gdjs.GameHardCode.GDRampObjects3.length = 0;
gdjs.GameHardCode.GDRampObjects4.length = 0;
gdjs.GameHardCode.GDCarEnemyObjects1.length = 0;
gdjs.GameHardCode.GDCarEnemyObjects2.length = 0;
gdjs.GameHardCode.GDCarEnemyObjects3.length = 0;
gdjs.GameHardCode.GDCarEnemyObjects4.length = 0;
gdjs.GameHardCode.GDSkullGameOverDialogObjects1.length = 0;
gdjs.GameHardCode.GDSkullGameOverDialogObjects2.length = 0;
gdjs.GameHardCode.GDSkullGameOverDialogObjects3.length = 0;
gdjs.GameHardCode.GDSkullGameOverDialogObjects4.length = 0;
gdjs.GameHardCode.GDAddPointObjects1.length = 0;
gdjs.GameHardCode.GDAddPointObjects2.length = 0;
gdjs.GameHardCode.GDAddPointObjects3.length = 0;
gdjs.GameHardCode.GDAddPointObjects4.length = 0;
gdjs.GameHardCode.GDFlatHeartBarObjects1.length = 0;
gdjs.GameHardCode.GDFlatHeartBarObjects2.length = 0;
gdjs.GameHardCode.GDFlatHeartBarObjects3.length = 0;
gdjs.GameHardCode.GDFlatHeartBarObjects4.length = 0;
gdjs.GameHardCode.GDShieldObjects1.length = 0;
gdjs.GameHardCode.GDShieldObjects2.length = 0;
gdjs.GameHardCode.GDShieldObjects3.length = 0;
gdjs.GameHardCode.GDShieldObjects4.length = 0;
gdjs.GameHardCode.GDShieldItemObjects1.length = 0;
gdjs.GameHardCode.GDShieldItemObjects2.length = 0;
gdjs.GameHardCode.GDShieldItemObjects3.length = 0;
gdjs.GameHardCode.GDShieldItemObjects4.length = 0;
gdjs.GameHardCode.GDBananaObjects1.length = 0;
gdjs.GameHardCode.GDBananaObjects2.length = 0;
gdjs.GameHardCode.GDBananaObjects3.length = 0;
gdjs.GameHardCode.GDBananaObjects4.length = 0;
gdjs.GameHardCode.GDLeft_9595arrow_9595round_9595buttonObjects1.length = 0;
gdjs.GameHardCode.GDLeft_9595arrow_9595round_9595buttonObjects2.length = 0;
gdjs.GameHardCode.GDLeft_9595arrow_9595round_9595buttonObjects3.length = 0;
gdjs.GameHardCode.GDLeft_9595arrow_9595round_9595buttonObjects4.length = 0;
gdjs.GameHardCode.GDRight_9595arrow_9595round_9595buttonObjects1.length = 0;
gdjs.GameHardCode.GDRight_9595arrow_9595round_9595buttonObjects2.length = 0;
gdjs.GameHardCode.GDRight_9595arrow_9595round_9595buttonObjects3.length = 0;
gdjs.GameHardCode.GDRight_9595arrow_9595round_9595buttonObjects4.length = 0;
gdjs.GameHardCode.GDNewTextObjects1.length = 0;
gdjs.GameHardCode.GDNewTextObjects2.length = 0;
gdjs.GameHardCode.GDNewTextObjects3.length = 0;
gdjs.GameHardCode.GDNewTextObjects4.length = 0;
gdjs.GameHardCode.GDRemote_9595BackObjects1.length = 0;
gdjs.GameHardCode.GDRemote_9595BackObjects2.length = 0;
gdjs.GameHardCode.GDRemote_9595BackObjects3.length = 0;
gdjs.GameHardCode.GDRemote_9595BackObjects4.length = 0;


return;

}

gdjs['GameHardCode'] = gdjs.GameHardCode;
