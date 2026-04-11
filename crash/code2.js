gdjs.GameNormalCode = {};
gdjs.GameNormalCode.localVariables = [];
gdjs.GameNormalCode.idToCallbackMap = new Map();
gdjs.GameNormalCode.GDCarObjects1= [];
gdjs.GameNormalCode.GDCarObjects2= [];
gdjs.GameNormalCode.GDCarObjects3= [];
gdjs.GameNormalCode.GDCarObjects4= [];
gdjs.GameNormalCode.GDRoadObjects1= [];
gdjs.GameNormalCode.GDRoadObjects2= [];
gdjs.GameNormalCode.GDRoadObjects3= [];
gdjs.GameNormalCode.GDRoadObjects4= [];
gdjs.GameNormalCode.GDTpUpObjects1= [];
gdjs.GameNormalCode.GDTpUpObjects2= [];
gdjs.GameNormalCode.GDTpUpObjects3= [];
gdjs.GameNormalCode.GDTpUpObjects4= [];
gdjs.GameNormalCode.GDRampObjects1= [];
gdjs.GameNormalCode.GDRampObjects2= [];
gdjs.GameNormalCode.GDRampObjects3= [];
gdjs.GameNormalCode.GDRampObjects4= [];
gdjs.GameNormalCode.GDCarEnemyObjects1= [];
gdjs.GameNormalCode.GDCarEnemyObjects2= [];
gdjs.GameNormalCode.GDCarEnemyObjects3= [];
gdjs.GameNormalCode.GDCarEnemyObjects4= [];
gdjs.GameNormalCode.GDwarnObjects1= [];
gdjs.GameNormalCode.GDwarnObjects2= [];
gdjs.GameNormalCode.GDwarnObjects3= [];
gdjs.GameNormalCode.GDwarnObjects4= [];
gdjs.GameNormalCode.GDSkullGameOverDialogObjects1= [];
gdjs.GameNormalCode.GDSkullGameOverDialogObjects2= [];
gdjs.GameNormalCode.GDSkullGameOverDialogObjects3= [];
gdjs.GameNormalCode.GDSkullGameOverDialogObjects4= [];
gdjs.GameNormalCode.GDAddPointObjects1= [];
gdjs.GameNormalCode.GDAddPointObjects2= [];
gdjs.GameNormalCode.GDAddPointObjects3= [];
gdjs.GameNormalCode.GDAddPointObjects4= [];
gdjs.GameNormalCode.GDFlatHeartBarObjects1= [];
gdjs.GameNormalCode.GDFlatHeartBarObjects2= [];
gdjs.GameNormalCode.GDFlatHeartBarObjects3= [];
gdjs.GameNormalCode.GDFlatHeartBarObjects4= [];
gdjs.GameNormalCode.GDShieldObjects1= [];
gdjs.GameNormalCode.GDShieldObjects2= [];
gdjs.GameNormalCode.GDShieldObjects3= [];
gdjs.GameNormalCode.GDShieldObjects4= [];
gdjs.GameNormalCode.GDShieldItemObjects1= [];
gdjs.GameNormalCode.GDShieldItemObjects2= [];
gdjs.GameNormalCode.GDShieldItemObjects3= [];
gdjs.GameNormalCode.GDShieldItemObjects4= [];
gdjs.GameNormalCode.GDBananaObjects1= [];
gdjs.GameNormalCode.GDBananaObjects2= [];
gdjs.GameNormalCode.GDBananaObjects3= [];
gdjs.GameNormalCode.GDBananaObjects4= [];
gdjs.GameNormalCode.GDLeft_9595arrow_9595round_9595buttonObjects1= [];
gdjs.GameNormalCode.GDLeft_9595arrow_9595round_9595buttonObjects2= [];
gdjs.GameNormalCode.GDLeft_9595arrow_9595round_9595buttonObjects3= [];
gdjs.GameNormalCode.GDLeft_9595arrow_9595round_9595buttonObjects4= [];
gdjs.GameNormalCode.GDRight_9595arrow_9595round_9595buttonObjects1= [];
gdjs.GameNormalCode.GDRight_9595arrow_9595round_9595buttonObjects2= [];
gdjs.GameNormalCode.GDRight_9595arrow_9595round_9595buttonObjects3= [];
gdjs.GameNormalCode.GDRight_9595arrow_9595round_9595buttonObjects4= [];
gdjs.GameNormalCode.GDNewTextObjects1= [];
gdjs.GameNormalCode.GDNewTextObjects2= [];
gdjs.GameNormalCode.GDNewTextObjects3= [];
gdjs.GameNormalCode.GDNewTextObjects4= [];
gdjs.GameNormalCode.GDRemote_9595BackObjects1= [];
gdjs.GameNormalCode.GDRemote_9595BackObjects2= [];
gdjs.GameNormalCode.GDRemote_9595BackObjects3= [];
gdjs.GameNormalCode.GDRemote_9595BackObjects4= [];


gdjs.GameNormalCode.mapOfGDgdjs_9546GameNormalCode_9546GDCarObjects1Objects = Hashtable.newFrom({"Car": gdjs.GameNormalCode.GDCarObjects1});
gdjs.GameNormalCode.mapOfGDgdjs_9546GameNormalCode_9546GDAddPointObjects1Objects = Hashtable.newFrom({"AddPoint": gdjs.GameNormalCode.GDAddPointObjects1});
gdjs.GameNormalCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Left_arrow_round_button"), gdjs.GameNormalCode.GDLeft_9595arrow_9595round_9595buttonObjects2);
gdjs.copyArray(runtimeScene.getObjects("Right_arrow_round_button"), gdjs.GameNormalCode.GDRight_9595arrow_9595round_9595buttonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameNormalCode.GDRight_9595arrow_9595round_9595buttonObjects2.length;i<l;++i) {
    if ( !(gdjs.GameNormalCode.GDRight_9595arrow_9595round_9595buttonObjects2[i].getBehavior("ButtonFSM").IsPressed(null)) ) {
        isConditionTrue_0 = true;
        gdjs.GameNormalCode.GDRight_9595arrow_9595round_9595buttonObjects2[k] = gdjs.GameNormalCode.GDRight_9595arrow_9595round_9595buttonObjects2[i];
        ++k;
    }
}
gdjs.GameNormalCode.GDRight_9595arrow_9595round_9595buttonObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameNormalCode.GDLeft_9595arrow_9595round_9595buttonObjects2.length;i<l;++i) {
    if ( !(gdjs.GameNormalCode.GDLeft_9595arrow_9595round_9595buttonObjects2[i].getBehavior("ButtonFSM").IsPressed(null)) ) {
        isConditionTrue_0 = true;
        gdjs.GameNormalCode.GDLeft_9595arrow_9595round_9595buttonObjects2[k] = gdjs.GameNormalCode.GDLeft_9595arrow_9595round_9595buttonObjects2[i];
        ++k;
    }
}
gdjs.GameNormalCode.GDLeft_9595arrow_9595round_9595buttonObjects2.length = k;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Car"), gdjs.GameNormalCode.GDCarObjects2);
{for(var i = 0, len = gdjs.GameNormalCode.GDCarObjects2.length ;i < len;++i) {
    gdjs.GameNormalCode.GDCarObjects2[i].setAngle(0);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Left_arrow_round_button"), gdjs.GameNormalCode.GDLeft_9595arrow_9595round_9595buttonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameNormalCode.GDLeft_9595arrow_9595round_9595buttonObjects2.length;i<l;++i) {
    if ( gdjs.GameNormalCode.GDLeft_9595arrow_9595round_9595buttonObjects2[i].getBehavior("ButtonFSM").IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.GameNormalCode.GDLeft_9595arrow_9595round_9595buttonObjects2[k] = gdjs.GameNormalCode.GDLeft_9595arrow_9595round_9595buttonObjects2[i];
        ++k;
    }
}
gdjs.GameNormalCode.GDLeft_9595arrow_9595round_9595buttonObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Car"), gdjs.GameNormalCode.GDCarObjects2);
{for(var i = 0, len = gdjs.GameNormalCode.GDCarObjects2.length ;i < len;++i) {
    gdjs.GameNormalCode.GDCarObjects2[i].setX(gdjs.GameNormalCode.GDCarObjects2[i].getX() - (6));
}
}
{for(var i = 0, len = gdjs.GameNormalCode.GDCarObjects2.length ;i < len;++i) {
    gdjs.GameNormalCode.GDCarObjects2[i].setAngle(-(22));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Right_arrow_round_button"), gdjs.GameNormalCode.GDRight_9595arrow_9595round_9595buttonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameNormalCode.GDRight_9595arrow_9595round_9595buttonObjects2.length;i<l;++i) {
    if ( gdjs.GameNormalCode.GDRight_9595arrow_9595round_9595buttonObjects2[i].getBehavior("ButtonFSM").IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.GameNormalCode.GDRight_9595arrow_9595round_9595buttonObjects2[k] = gdjs.GameNormalCode.GDRight_9595arrow_9595round_9595buttonObjects2[i];
        ++k;
    }
}
gdjs.GameNormalCode.GDRight_9595arrow_9595round_9595buttonObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Car"), gdjs.GameNormalCode.GDCarObjects2);
{for(var i = 0, len = gdjs.GameNormalCode.GDCarObjects2.length ;i < len;++i) {
    gdjs.GameNormalCode.GDCarObjects2[i].setX(gdjs.GameNormalCode.GDCarObjects2[i].getX() + (6));
}
}
{for(var i = 0, len = gdjs.GameNormalCode.GDCarObjects2.length ;i < len;++i) {
    gdjs.GameNormalCode.GDCarObjects2[i].setAngle(22);
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Car"), gdjs.GameNormalCode.GDCarObjects2);
{for(var i = 0, len = gdjs.GameNormalCode.GDCarObjects2.length ;i < len;++i) {
    gdjs.GameNormalCode.GDCarObjects2[i].setY(400);
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Car"), gdjs.GameNormalCode.GDCarObjects2);
{for(var i = 0, len = gdjs.GameNormalCode.GDCarObjects2.length ;i < len;++i) {
    gdjs.GameNormalCode.GDCarObjects2[i].setX(gdjs.evtTools.common.clamp((gdjs.GameNormalCode.GDCarObjects2[i].getPointX("")), 160, 800));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("AddPoint"), gdjs.GameNormalCode.GDAddPointObjects1);
gdjs.copyArray(runtimeScene.getObjects("Car"), gdjs.GameNormalCode.GDCarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameNormalCode.mapOfGDgdjs_9546GameNormalCode_9546GDCarObjects1Objects, gdjs.GameNormalCode.mapOfGDgdjs_9546GameNormalCode_9546GDAddPointObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16606508);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameNormalCode.GDAddPointObjects1 */
gdjs.copyArray(runtimeScene.getObjects("SkullGameOverDialog"), gdjs.GameNormalCode.GDSkullGameOverDialogObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(1).add(1);
}
{for(var i = 0, len = gdjs.GameNormalCode.GDSkullGameOverDialogObjects1.length ;i < len;++i) {
    gdjs.GameNormalCode.GDSkullGameOverDialogObjects1[i].SetScore(runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber(), null);
}
}
{for(var i = 0, len = gdjs.GameNormalCode.GDAddPointObjects1.length ;i < len;++i) {
    gdjs.GameNormalCode.GDAddPointObjects1[i].deleteFromScene(runtimeScene);
}
}
}

}


};gdjs.GameNormalCode.asyncCallback16608124 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.GameNormalCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("CarEnemy"), gdjs.GameNormalCode.GDCarEnemyObjects3);
gdjs.copyArray(runtimeScene.getObjects("Ramp"), gdjs.GameNormalCode.GDRampObjects3);
gdjs.copyArray(runtimeScene.getObjects("Road"), gdjs.GameNormalCode.GDRoadObjects3);
gdjs.copyArray(runtimeScene.getObjects("ShieldItem"), gdjs.GameNormalCode.GDShieldItemObjects3);
{for(var i = 0, len = gdjs.GameNormalCode.GDRoadObjects3.length ;i < len;++i) {
    gdjs.GameNormalCode.GDRoadObjects3[i].setY(gdjs.GameNormalCode.GDRoadObjects3[i].getY() + (10));
}
}
{for(var i = 0, len = gdjs.GameNormalCode.GDRampObjects3.length ;i < len;++i) {
    gdjs.GameNormalCode.GDRampObjects3[i].setY(gdjs.GameNormalCode.GDRampObjects3[i].getY() + (10));
}
}
{for(var i = 0, len = gdjs.GameNormalCode.GDCarEnemyObjects3.length ;i < len;++i) {
    gdjs.GameNormalCode.GDCarEnemyObjects3[i].setY(gdjs.GameNormalCode.GDCarEnemyObjects3[i].getY() + (10));
}
}
{for(var i = 0, len = gdjs.GameNormalCode.GDShieldItemObjects3.length ;i < len;++i) {
    gdjs.GameNormalCode.GDShieldItemObjects3[i].setY(gdjs.GameNormalCode.GDShieldItemObjects3[i].getY() + (10));
}
}
gdjs.GameNormalCode.localVariables.length = 0;
}
gdjs.GameNormalCode.idToCallbackMap.set(16608124, gdjs.GameNormalCode.asyncCallback16608124);
gdjs.GameNormalCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.GameNormalCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.01), (runtimeScene) => (gdjs.GameNormalCode.asyncCallback16608124(runtimeScene, asyncObjectsList)), 16608124, asyncObjectsList);
}
}

}


};gdjs.GameNormalCode.mapOfGDgdjs_9546GameNormalCode_9546GDRoadObjects2Objects = Hashtable.newFrom({"Road": gdjs.GameNormalCode.GDRoadObjects2});
gdjs.GameNormalCode.mapOfGDgdjs_9546GameNormalCode_9546GDTpUpObjects2Objects = Hashtable.newFrom({"TpUp": gdjs.GameNormalCode.GDTpUpObjects2});
gdjs.GameNormalCode.mapOfGDgdjs_9546GameNormalCode_9546GDCarEnemyObjects2Objects = Hashtable.newFrom({"CarEnemy": gdjs.GameNormalCode.GDCarEnemyObjects2});
gdjs.GameNormalCode.mapOfGDgdjs_9546GameNormalCode_9546GDTpUpObjects2Objects = Hashtable.newFrom({"TpUp": gdjs.GameNormalCode.GDTpUpObjects2});
gdjs.GameNormalCode.mapOfGDgdjs_9546GameNormalCode_9546GDAddPointObjects2Objects = Hashtable.newFrom({"AddPoint": gdjs.GameNormalCode.GDAddPointObjects2});
gdjs.GameNormalCode.mapOfGDgdjs_9546GameNormalCode_9546GDTpUpObjects2Objects = Hashtable.newFrom({"TpUp": gdjs.GameNormalCode.GDTpUpObjects2});
gdjs.GameNormalCode.mapOfGDgdjs_9546GameNormalCode_9546GDShieldItemObjects2Objects = Hashtable.newFrom({"ShieldItem": gdjs.GameNormalCode.GDShieldItemObjects2});
gdjs.GameNormalCode.mapOfGDgdjs_9546GameNormalCode_9546GDTpUpObjects2Objects = Hashtable.newFrom({"TpUp": gdjs.GameNormalCode.GDTpUpObjects2});
gdjs.GameNormalCode.mapOfGDgdjs_9546GameNormalCode_9546GDCarObjects1Objects = Hashtable.newFrom({"Car": gdjs.GameNormalCode.GDCarObjects1});
gdjs.GameNormalCode.mapOfGDgdjs_9546GameNormalCode_9546GDRampObjects1Objects = Hashtable.newFrom({"Ramp": gdjs.GameNormalCode.GDRampObjects1});
gdjs.GameNormalCode.asyncCallback16612492 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.GameNormalCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Car"), gdjs.GameNormalCode.GDCarObjects3);

{for(var i = 0, len = gdjs.GameNormalCode.GDCarObjects3.length ;i < len;++i) {
    gdjs.GameNormalCode.GDCarObjects3[i].getBehavior("Tween").addObjectScaleTween3("ramp", 1, "linear", 1, false, true);
}
}
gdjs.GameNormalCode.localVariables.length = 0;
}
gdjs.GameNormalCode.idToCallbackMap.set(16612492, gdjs.GameNormalCode.asyncCallback16612492);
gdjs.GameNormalCode.eventsList2 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.GameNormalCode.localVariables);
for (const obj of gdjs.GameNormalCode.GDCarObjects2) asyncObjectsList.addObject("Car", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.GameNormalCode.asyncCallback16612492(runtimeScene, asyncObjectsList)), 16612492, asyncObjectsList);
}
}

}


};gdjs.GameNormalCode.asyncCallback16612068 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.GameNormalCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Car"), gdjs.GameNormalCode.GDCarObjects2);

{for(var i = 0, len = gdjs.GameNormalCode.GDCarObjects2.length ;i < len;++i) {
    gdjs.GameNormalCode.GDCarObjects2[i].getBehavior("Tween").addObjectScaleTween3("ramp", 1.5, "linear", 1, false, true);
}
}

{ //Subevents
gdjs.GameNormalCode.eventsList2(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.GameNormalCode.localVariables.length = 0;
}
gdjs.GameNormalCode.idToCallbackMap.set(16612068, gdjs.GameNormalCode.asyncCallback16612068);
gdjs.GameNormalCode.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.GameNormalCode.localVariables);
for (const obj of gdjs.GameNormalCode.GDCarObjects1) asyncObjectsList.addObject("Car", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs.GameNormalCode.asyncCallback16612068(runtimeScene, asyncObjectsList)), 16612068, asyncObjectsList);
}
}

}


};gdjs.GameNormalCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.GameNormalCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Road"), gdjs.GameNormalCode.GDRoadObjects2);
gdjs.copyArray(runtimeScene.getObjects("TpUp"), gdjs.GameNormalCode.GDTpUpObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameNormalCode.mapOfGDgdjs_9546GameNormalCode_9546GDRoadObjects2Objects, gdjs.GameNormalCode.mapOfGDgdjs_9546GameNormalCode_9546GDTpUpObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.GameNormalCode.GDRoadObjects2 */
{for(var i = 0, len = gdjs.GameNormalCode.GDRoadObjects2.length ;i < len;++i) {
    gdjs.GameNormalCode.GDRoadObjects2[i].setY(-(1000));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("CarEnemy"), gdjs.GameNormalCode.GDCarEnemyObjects2);
gdjs.copyArray(runtimeScene.getObjects("TpUp"), gdjs.GameNormalCode.GDTpUpObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameNormalCode.mapOfGDgdjs_9546GameNormalCode_9546GDCarEnemyObjects2Objects, gdjs.GameNormalCode.mapOfGDgdjs_9546GameNormalCode_9546GDTpUpObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.GameNormalCode.GDCarEnemyObjects2 */
{for(var i = 0, len = gdjs.GameNormalCode.GDCarEnemyObjects2.length ;i < len;++i) {
    gdjs.GameNormalCode.GDCarEnemyObjects2[i].deleteFromScene(runtimeScene);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("AddPoint"), gdjs.GameNormalCode.GDAddPointObjects2);
gdjs.copyArray(runtimeScene.getObjects("TpUp"), gdjs.GameNormalCode.GDTpUpObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameNormalCode.mapOfGDgdjs_9546GameNormalCode_9546GDAddPointObjects2Objects, gdjs.GameNormalCode.mapOfGDgdjs_9546GameNormalCode_9546GDTpUpObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.GameNormalCode.GDAddPointObjects2 */
{for(var i = 0, len = gdjs.GameNormalCode.GDAddPointObjects2.length ;i < len;++i) {
    gdjs.GameNormalCode.GDAddPointObjects2[i].deleteFromScene(runtimeScene);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ShieldItem"), gdjs.GameNormalCode.GDShieldItemObjects2);
gdjs.copyArray(runtimeScene.getObjects("TpUp"), gdjs.GameNormalCode.GDTpUpObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameNormalCode.mapOfGDgdjs_9546GameNormalCode_9546GDShieldItemObjects2Objects, gdjs.GameNormalCode.mapOfGDgdjs_9546GameNormalCode_9546GDTpUpObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.GameNormalCode.GDShieldItemObjects2 */
{for(var i = 0, len = gdjs.GameNormalCode.GDShieldItemObjects2.length ;i < len;++i) {
    gdjs.GameNormalCode.GDShieldItemObjects2[i].deleteFromScene(runtimeScene);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Car"), gdjs.GameNormalCode.GDCarObjects1);
gdjs.copyArray(runtimeScene.getObjects("Ramp"), gdjs.GameNormalCode.GDRampObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameNormalCode.mapOfGDgdjs_9546GameNormalCode_9546GDCarObjects1Objects, gdjs.GameNormalCode.mapOfGDgdjs_9546GameNormalCode_9546GDRampObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16611948);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameNormalCode.eventsList3(runtimeScene);} //End of subevents
}

}


};gdjs.GameNormalCode.asyncCallback16613404 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.GameNormalCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(gdjs.randomInRange(1, 3));
}
gdjs.GameNormalCode.localVariables.length = 0;
}
gdjs.GameNormalCode.idToCallbackMap.set(16613404, gdjs.GameNormalCode.asyncCallback16613404);
gdjs.GameNormalCode.eventsList5 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.GameNormalCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.GameNormalCode.asyncCallback16613404(runtimeScene, asyncObjectsList)), 16613404, asyncObjectsList);
}
}

}


};gdjs.GameNormalCode.mapOfGDgdjs_9546GameNormalCode_9546GDwarnObjects2Objects = Hashtable.newFrom({"warn": gdjs.GameNormalCode.GDwarnObjects2});
gdjs.GameNormalCode.mapOfGDgdjs_9546GameNormalCode_9546GDwarnObjects2Objects = Hashtable.newFrom({"warn": gdjs.GameNormalCode.GDwarnObjects2});
gdjs.GameNormalCode.mapOfGDgdjs_9546GameNormalCode_9546GDwarnObjects2Objects = Hashtable.newFrom({"warn": gdjs.GameNormalCode.GDwarnObjects2});
gdjs.GameNormalCode.mapOfGDgdjs_9546GameNormalCode_9546GDCarEnemyObjects2Objects = Hashtable.newFrom({"CarEnemy": gdjs.GameNormalCode.GDCarEnemyObjects2});
gdjs.GameNormalCode.mapOfGDgdjs_9546GameNormalCode_9546GDAddPointObjects2Objects = Hashtable.newFrom({"AddPoint": gdjs.GameNormalCode.GDAddPointObjects2});
gdjs.GameNormalCode.mapOfGDgdjs_9546GameNormalCode_9546GDCarEnemyObjects2Objects = Hashtable.newFrom({"CarEnemy": gdjs.GameNormalCode.GDCarEnemyObjects2});
gdjs.GameNormalCode.mapOfGDgdjs_9546GameNormalCode_9546GDwarnObjects2Objects = Hashtable.newFrom({"warn": gdjs.GameNormalCode.GDwarnObjects2});
gdjs.GameNormalCode.mapOfGDgdjs_9546GameNormalCode_9546GDwarnObjects2Objects = Hashtable.newFrom({"warn": gdjs.GameNormalCode.GDwarnObjects2});
gdjs.GameNormalCode.mapOfGDgdjs_9546GameNormalCode_9546GDwarnObjects2Objects = Hashtable.newFrom({"warn": gdjs.GameNormalCode.GDwarnObjects2});
gdjs.GameNormalCode.mapOfGDgdjs_9546GameNormalCode_9546GDCarEnemyObjects2Objects = Hashtable.newFrom({"CarEnemy": gdjs.GameNormalCode.GDCarEnemyObjects2});
gdjs.GameNormalCode.mapOfGDgdjs_9546GameNormalCode_9546GDAddPointObjects2Objects = Hashtable.newFrom({"AddPoint": gdjs.GameNormalCode.GDAddPointObjects2});
gdjs.GameNormalCode.mapOfGDgdjs_9546GameNormalCode_9546GDCarEnemyObjects2Objects = Hashtable.newFrom({"CarEnemy": gdjs.GameNormalCode.GDCarEnemyObjects2});
gdjs.GameNormalCode.mapOfGDgdjs_9546GameNormalCode_9546GDwarnObjects2Objects = Hashtable.newFrom({"warn": gdjs.GameNormalCode.GDwarnObjects2});
gdjs.GameNormalCode.mapOfGDgdjs_9546GameNormalCode_9546GDwarnObjects2Objects = Hashtable.newFrom({"warn": gdjs.GameNormalCode.GDwarnObjects2});
gdjs.GameNormalCode.mapOfGDgdjs_9546GameNormalCode_9546GDwarnObjects2Objects = Hashtable.newFrom({"warn": gdjs.GameNormalCode.GDwarnObjects2});
gdjs.GameNormalCode.mapOfGDgdjs_9546GameNormalCode_9546GDCarEnemyObjects2Objects = Hashtable.newFrom({"CarEnemy": gdjs.GameNormalCode.GDCarEnemyObjects2});
gdjs.GameNormalCode.mapOfGDgdjs_9546GameNormalCode_9546GDAddPointObjects2Objects = Hashtable.newFrom({"AddPoint": gdjs.GameNormalCode.GDAddPointObjects2});
gdjs.GameNormalCode.mapOfGDgdjs_9546GameNormalCode_9546GDCarEnemyObjects2Objects = Hashtable.newFrom({"CarEnemy": gdjs.GameNormalCode.GDCarEnemyObjects2});
gdjs.GameNormalCode.mapOfGDgdjs_9546GameNormalCode_9546GDCarEnemyObjects1Objects = Hashtable.newFrom({"CarEnemy": gdjs.GameNormalCode.GDCarEnemyObjects1});
gdjs.GameNormalCode.mapOfGDgdjs_9546GameNormalCode_9546GDwarnObjects1Objects = Hashtable.newFrom({"warn": gdjs.GameNormalCode.GDwarnObjects1});
gdjs.GameNormalCode.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16613508);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameNormalCode.eventsList5(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 2);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16614724);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("warn"), gdjs.GameNormalCode.GDwarnObjects2);
gdjs.GameNormalCode.GDAddPointObjects2.length = 0;

gdjs.GameNormalCode.GDCarEnemyObjects2.length = 0;

{gdjs.evtTools.object.pickAllObjects(runtimeScene, gdjs.GameNormalCode.mapOfGDgdjs_9546GameNormalCode_9546GDwarnObjects2Objects);
}
{for(var i = 0, len = gdjs.GameNormalCode.GDwarnObjects2.length ;i < len;++i) {
    gdjs.GameNormalCode.GDwarnObjects2[i].deleteFromScene(runtimeScene);
}
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameNormalCode.mapOfGDgdjs_9546GameNormalCode_9546GDwarnObjects2Objects, 608, 0, "Warn");
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameNormalCode.mapOfGDgdjs_9546GameNormalCode_9546GDwarnObjects2Objects, 288, 0, "Warn");
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(0);
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameNormalCode.mapOfGDgdjs_9546GameNormalCode_9546GDCarEnemyObjects2Objects, 160, -(1020), "");
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameNormalCode.mapOfGDgdjs_9546GameNormalCode_9546GDAddPointObjects2Objects, 800, -(1020), "");
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameNormalCode.mapOfGDgdjs_9546GameNormalCode_9546GDCarEnemyObjects2Objects, 480, -(1020), "");
}
{for(var i = 0, len = gdjs.GameNormalCode.GDCarEnemyObjects2.length ;i < len;++i) {
    gdjs.GameNormalCode.GDCarEnemyObjects2[i].getBehavior("Animation").setAnimationIndex(gdjs.randomInRange(1, 6));
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16616556);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("warn"), gdjs.GameNormalCode.GDwarnObjects2);
gdjs.GameNormalCode.GDAddPointObjects2.length = 0;

gdjs.GameNormalCode.GDCarEnemyObjects2.length = 0;

{gdjs.evtTools.object.pickAllObjects(runtimeScene, gdjs.GameNormalCode.mapOfGDgdjs_9546GameNormalCode_9546GDwarnObjects2Objects);
}
{for(var i = 0, len = gdjs.GameNormalCode.GDwarnObjects2.length ;i < len;++i) {
    gdjs.GameNormalCode.GDwarnObjects2[i].deleteFromScene(runtimeScene);
}
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameNormalCode.mapOfGDgdjs_9546GameNormalCode_9546GDwarnObjects2Objects, 288, 0, "Warn");
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameNormalCode.mapOfGDgdjs_9546GameNormalCode_9546GDwarnObjects2Objects, 930, 0, "Warn");
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(0);
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameNormalCode.mapOfGDgdjs_9546GameNormalCode_9546GDCarEnemyObjects2Objects, 160, -(1020), "");
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameNormalCode.mapOfGDgdjs_9546GameNormalCode_9546GDAddPointObjects2Objects, 480, -(1020), "");
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameNormalCode.mapOfGDgdjs_9546GameNormalCode_9546GDCarEnemyObjects2Objects, 800, -(1020), "");
}
{for(var i = 0, len = gdjs.GameNormalCode.GDCarEnemyObjects2.length ;i < len;++i) {
    gdjs.GameNormalCode.GDCarEnemyObjects2[i].getBehavior("Animation").setAnimationIndex(gdjs.randomInRange(1, 6));
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16618812);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("warn"), gdjs.GameNormalCode.GDwarnObjects2);
gdjs.GameNormalCode.GDAddPointObjects2.length = 0;

gdjs.GameNormalCode.GDCarEnemyObjects2.length = 0;

{gdjs.evtTools.object.pickAllObjects(runtimeScene, gdjs.GameNormalCode.mapOfGDgdjs_9546GameNormalCode_9546GDwarnObjects2Objects);
}
{for(var i = 0, len = gdjs.GameNormalCode.GDwarnObjects2.length ;i < len;++i) {
    gdjs.GameNormalCode.GDwarnObjects2[i].deleteFromScene(runtimeScene);
}
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameNormalCode.mapOfGDgdjs_9546GameNormalCode_9546GDwarnObjects2Objects, 930, 0, "Warn");
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameNormalCode.mapOfGDgdjs_9546GameNormalCode_9546GDwarnObjects2Objects, 608, 0, "Warn");
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(0);
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameNormalCode.mapOfGDgdjs_9546GameNormalCode_9546GDCarEnemyObjects2Objects, 480, -(1020), "");
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameNormalCode.mapOfGDgdjs_9546GameNormalCode_9546GDAddPointObjects2Objects, 160, -(1020), "");
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameNormalCode.mapOfGDgdjs_9546GameNormalCode_9546GDCarEnemyObjects2Objects, 800, -(1020), "");
}
{for(var i = 0, len = gdjs.GameNormalCode.GDCarEnemyObjects2.length ;i < len;++i) {
    gdjs.GameNormalCode.GDCarEnemyObjects2[i].getBehavior("Animation").setAnimationIndex(gdjs.randomInRange(1, 6));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("CarEnemy"), gdjs.GameNormalCode.GDCarEnemyObjects1);
gdjs.copyArray(runtimeScene.getObjects("warn"), gdjs.GameNormalCode.GDwarnObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameNormalCode.mapOfGDgdjs_9546GameNormalCode_9546GDCarEnemyObjects1Objects, gdjs.GameNormalCode.mapOfGDgdjs_9546GameNormalCode_9546GDwarnObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.GameNormalCode.GDwarnObjects1 */
{for(var i = 0, len = gdjs.GameNormalCode.GDwarnObjects1.length ;i < len;++i) {
    gdjs.GameNormalCode.GDwarnObjects1[i].deleteFromScene(runtimeScene);
}
}
}

}


};gdjs.GameNormalCode.mapOfGDgdjs_9546GameNormalCode_9546GDCarObjects2Objects = Hashtable.newFrom({"Car": gdjs.GameNormalCode.GDCarObjects2});
gdjs.GameNormalCode.mapOfGDgdjs_9546GameNormalCode_9546GDCarEnemyObjects2Objects = Hashtable.newFrom({"CarEnemy": gdjs.GameNormalCode.GDCarEnemyObjects2});
gdjs.GameNormalCode.mapOfGDgdjs_9546GameNormalCode_9546GDCarObjects2Objects = Hashtable.newFrom({"Car": gdjs.GameNormalCode.GDCarObjects2});
gdjs.GameNormalCode.mapOfGDgdjs_9546GameNormalCode_9546GDCarEnemyObjects2Objects = Hashtable.newFrom({"CarEnemy": gdjs.GameNormalCode.GDCarEnemyObjects2});
gdjs.GameNormalCode.eventsList7 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Car"), gdjs.GameNormalCode.GDCarObjects2);
gdjs.copyArray(runtimeScene.getObjects("CarEnemy"), gdjs.GameNormalCode.GDCarEnemyObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameNormalCode.mapOfGDgdjs_9546GameNormalCode_9546GDCarObjects2Objects, gdjs.GameNormalCode.mapOfGDgdjs_9546GameNormalCode_9546GDCarEnemyObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getScene().getVariables().getFromIndex(3).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16623756);
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

gdjs.copyArray(runtimeScene.getObjects("Car"), gdjs.GameNormalCode.GDCarObjects2);
gdjs.copyArray(runtimeScene.getObjects("CarEnemy"), gdjs.GameNormalCode.GDCarEnemyObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameNormalCode.mapOfGDgdjs_9546GameNormalCode_9546GDCarObjects2Objects, gdjs.GameNormalCode.mapOfGDgdjs_9546GameNormalCode_9546GDCarEnemyObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16624788);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameNormalCode.GDCarEnemyObjects2 */
{for(var i = 0, len = gdjs.GameNormalCode.GDCarEnemyObjects2.length ;i < len;++i) {
    gdjs.GameNormalCode.GDCarEnemyObjects2[i].deleteFromScene(runtimeScene);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16625356);
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
gdjs.copyArray(runtimeScene.getObjects("FlatHeartBar"), gdjs.GameNormalCode.GDFlatHeartBarObjects2);
{for(var i = 0, len = gdjs.GameNormalCode.GDFlatHeartBarObjects2.length ;i < len;++i) {
    gdjs.GameNormalCode.GDFlatHeartBarObjects2[i].SetValue(runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber(), null);
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
gdjs.copyArray(runtimeScene.getObjects("Car"), gdjs.GameNormalCode.GDCarObjects2);
{for(var i = 0, len = gdjs.GameNormalCode.GDCarObjects2.length ;i < len;++i) {
    gdjs.GameNormalCode.GDCarObjects2[i].getBehavior("Animation").setAnimationName("CarRedUp");
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
gdjs.copyArray(runtimeScene.getObjects("Car"), gdjs.GameNormalCode.GDCarObjects2);
{for(var i = 0, len = gdjs.GameNormalCode.GDCarObjects2.length ;i < len;++i) {
    gdjs.GameNormalCode.GDCarObjects2[i].getBehavior("Animation").setAnimationName("2hp RedCar");
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
gdjs.copyArray(runtimeScene.getObjects("Car"), gdjs.GameNormalCode.GDCarObjects2);
{for(var i = 0, len = gdjs.GameNormalCode.GDCarObjects2.length ;i < len;++i) {
    gdjs.GameNormalCode.GDCarObjects2[i].getBehavior("Animation").setAnimationName("1hp RedCar");
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
gdjs.copyArray(runtimeScene.getObjects("Car"), gdjs.GameNormalCode.GDCarObjects1);
{for(var i = 0, len = gdjs.GameNormalCode.GDCarObjects1.length ;i < len;++i) {
    gdjs.GameNormalCode.GDCarObjects1[i].getBehavior("Animation").setAnimationName("0hp RedCar");
}
}
}

}


};gdjs.GameNormalCode.mapOfGDgdjs_9546GameNormalCode_9546GDShieldObjects2Objects = Hashtable.newFrom({"Shield": gdjs.GameNormalCode.GDShieldObjects2});
gdjs.GameNormalCode.asyncCallback16631052 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.GameNormalCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Shield"), gdjs.GameNormalCode.GDShieldObjects3);

{for(var i = 0, len = gdjs.GameNormalCode.GDShieldObjects3.length ;i < len;++i) {
    gdjs.GameNormalCode.GDShieldObjects3[i].getBehavior("Animation").setAnimationName("Hide");
}
}
gdjs.GameNormalCode.localVariables.length = 0;
}
gdjs.GameNormalCode.idToCallbackMap.set(16631052, gdjs.GameNormalCode.asyncCallback16631052);
gdjs.GameNormalCode.eventsList8 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.GameNormalCode.localVariables);
for (const obj of gdjs.GameNormalCode.GDShieldObjects2) asyncObjectsList.addObject("Shield", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(10), (runtimeScene) => (gdjs.GameNormalCode.asyncCallback16631052(runtimeScene, asyncObjectsList)), 16631052, asyncObjectsList);
}
}

}


};gdjs.GameNormalCode.mapOfGDgdjs_9546GameNormalCode_9546GDCarObjects2Objects = Hashtable.newFrom({"Car": gdjs.GameNormalCode.GDCarObjects2});
gdjs.GameNormalCode.mapOfGDgdjs_9546GameNormalCode_9546GDShieldItemObjects2Objects = Hashtable.newFrom({"ShieldItem": gdjs.GameNormalCode.GDShieldItemObjects2});
gdjs.GameNormalCode.asyncCallback16634668 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.GameNormalCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(4).setNumber(gdjs.randomInRange(1, 3));
}
gdjs.GameNormalCode.localVariables.length = 0;
}
gdjs.GameNormalCode.idToCallbackMap.set(16634668, gdjs.GameNormalCode.asyncCallback16634668);
gdjs.GameNormalCode.eventsList9 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.GameNormalCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(45), (runtimeScene) => (gdjs.GameNormalCode.asyncCallback16634668(runtimeScene, asyncObjectsList)), 16634668, asyncObjectsList);
}
}

}


};gdjs.GameNormalCode.mapOfGDgdjs_9546GameNormalCode_9546GDShieldItemObjects2Objects = Hashtable.newFrom({"ShieldItem": gdjs.GameNormalCode.GDShieldItemObjects2});
gdjs.GameNormalCode.mapOfGDgdjs_9546GameNormalCode_9546GDShieldItemObjects2Objects = Hashtable.newFrom({"ShieldItem": gdjs.GameNormalCode.GDShieldItemObjects2});
gdjs.GameNormalCode.mapOfGDgdjs_9546GameNormalCode_9546GDShieldItemObjects1Objects = Hashtable.newFrom({"ShieldItem": gdjs.GameNormalCode.GDShieldItemObjects1});
gdjs.GameNormalCode.eventsList10 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(3).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16630212);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Car"), gdjs.GameNormalCode.GDCarObjects2);
gdjs.GameNormalCode.GDShieldObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameNormalCode.mapOfGDgdjs_9546GameNormalCode_9546GDShieldObjects2Objects, (( gdjs.GameNormalCode.GDCarObjects2.length === 0 ) ? 0 :gdjs.GameNormalCode.GDCarObjects2[0].getPointX("")), (( gdjs.GameNormalCode.GDCarObjects2.length === 0 ) ? 0 :gdjs.GameNormalCode.GDCarObjects2[0].getPointY("")), "");
}
{for(var i = 0, len = gdjs.GameNormalCode.GDShieldObjects2.length ;i < len;++i) {
    gdjs.GameNormalCode.GDShieldObjects2[i].setCenterPositionInScene((( gdjs.GameNormalCode.GDCarObjects2.length === 0 ) ? 0 :gdjs.GameNormalCode.GDCarObjects2[0].getCenterXInScene()),(( gdjs.GameNormalCode.GDCarObjects2.length === 0 ) ? 0 :gdjs.GameNormalCode.GDCarObjects2[0].getCenterYInScene()));
}
}

{ //Subevents
gdjs.GameNormalCode.eventsList8(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Shield"), gdjs.GameNormalCode.GDShieldObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameNormalCode.GDShieldObjects2.length;i<l;++i) {
    if ( gdjs.GameNormalCode.GDShieldObjects2[i].getBehavior("Animation").getAnimationName() == "Hide" ) {
        isConditionTrue_0 = true;
        gdjs.GameNormalCode.GDShieldObjects2[k] = gdjs.GameNormalCode.GDShieldObjects2[i];
        ++k;
    }
}
gdjs.GameNormalCode.GDShieldObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameNormalCode.GDShieldObjects2.length;i<l;++i) {
    if ( gdjs.GameNormalCode.GDShieldObjects2[i].getBehavior("Animation").hasAnimationEnded() ) {
        isConditionTrue_0 = true;
        gdjs.GameNormalCode.GDShieldObjects2[k] = gdjs.GameNormalCode.GDShieldObjects2[i];
        ++k;
    }
}
gdjs.GameNormalCode.GDShieldObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameNormalCode.GDShieldObjects2 */
{for(var i = 0, len = gdjs.GameNormalCode.GDShieldObjects2.length ;i < len;++i) {
    gdjs.GameNormalCode.GDShieldObjects2[i].deleteFromScene(runtimeScene);
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
gdjs.copyArray(runtimeScene.getObjects("Car"), gdjs.GameNormalCode.GDCarObjects2);
gdjs.copyArray(runtimeScene.getObjects("Shield"), gdjs.GameNormalCode.GDShieldObjects2);
{for(var i = 0, len = gdjs.GameNormalCode.GDShieldObjects2.length ;i < len;++i) {
    gdjs.GameNormalCode.GDShieldObjects2[i].setCenterPositionInScene((( gdjs.GameNormalCode.GDCarObjects2.length === 0 ) ? 0 :gdjs.GameNormalCode.GDCarObjects2[0].getCenterXInScene()),(( gdjs.GameNormalCode.GDCarObjects2.length === 0 ) ? 0 :gdjs.GameNormalCode.GDCarObjects2[0].getCenterYInScene()));
}
}
{for(var i = 0, len = gdjs.GameNormalCode.GDShieldObjects2.length ;i < len;++i) {
    gdjs.GameNormalCode.GDShieldObjects2[i].getBehavior("Opacity").setOpacity(130);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Car"), gdjs.GameNormalCode.GDCarObjects2);
gdjs.copyArray(runtimeScene.getObjects("ShieldItem"), gdjs.GameNormalCode.GDShieldItemObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameNormalCode.mapOfGDgdjs_9546GameNormalCode_9546GDCarObjects2Objects, gdjs.GameNormalCode.mapOfGDgdjs_9546GameNormalCode_9546GDShieldItemObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.GameNormalCode.GDShieldItemObjects2 */
{for(var i = 0, len = gdjs.GameNormalCode.GDShieldItemObjects2.length ;i < len;++i) {
    gdjs.GameNormalCode.GDShieldItemObjects2[i].deleteFromScene(runtimeScene);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16634876);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameNormalCode.eventsList9(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16635652);
}
}
if (isConditionTrue_0) {
gdjs.GameNormalCode.GDShieldItemObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameNormalCode.mapOfGDgdjs_9546GameNormalCode_9546GDShieldItemObjects2Objects, 290, -(350), "");
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16636948);
}
}
if (isConditionTrue_0) {
gdjs.GameNormalCode.GDShieldItemObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameNormalCode.mapOfGDgdjs_9546GameNormalCode_9546GDShieldItemObjects2Objects, 610, -(350), "");
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16638036);
}
}
if (isConditionTrue_0) {
gdjs.GameNormalCode.GDShieldItemObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameNormalCode.mapOfGDgdjs_9546GameNormalCode_9546GDShieldItemObjects1Objects, 930, -(350), "");
}
{runtimeScene.getScene().getVariables().getFromIndex(4).setNumber(0);
}
}

}


};gdjs.GameNormalCode.mapOfGDgdjs_9546GameNormalCode_9546GDNewTextObjects1Objects = Hashtable.newFrom({"NewText": gdjs.GameNormalCode.GDNewTextObjects1});
gdjs.GameNormalCode.asyncCallback16639884 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.GameNormalCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("NewText"), gdjs.GameNormalCode.GDNewTextObjects4);

{for(var i = 0, len = gdjs.GameNormalCode.GDNewTextObjects4.length ;i < len;++i) {
    gdjs.GameNormalCode.GDNewTextObjects4[i].deleteFromScene(runtimeScene);
}
}
{gdjs.evtTools.runtimeScene.setTimeScale(runtimeScene, 1);
}
gdjs.GameNormalCode.localVariables.length = 0;
}
gdjs.GameNormalCode.idToCallbackMap.set(16639884, gdjs.GameNormalCode.asyncCallback16639884);
gdjs.GameNormalCode.eventsList11 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.GameNormalCode.localVariables);
for (const obj of gdjs.GameNormalCode.GDNewTextObjects3) asyncObjectsList.addObject("NewText", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.GameNormalCode.asyncCallback16639884(runtimeScene, asyncObjectsList)), 16639884, asyncObjectsList);
}
}

}


};gdjs.GameNormalCode.asyncCallback16639636 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.GameNormalCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("NewText"), gdjs.GameNormalCode.GDNewTextObjects3);

{for(var i = 0, len = gdjs.GameNormalCode.GDNewTextObjects3.length ;i < len;++i) {
    gdjs.GameNormalCode.GDNewTextObjects3[i].getBehavior("Text").setText("1");
}
}

{ //Subevents
gdjs.GameNormalCode.eventsList11(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.GameNormalCode.localVariables.length = 0;
}
gdjs.GameNormalCode.idToCallbackMap.set(16639636, gdjs.GameNormalCode.asyncCallback16639636);
gdjs.GameNormalCode.eventsList12 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.GameNormalCode.localVariables);
for (const obj of gdjs.GameNormalCode.GDNewTextObjects2) asyncObjectsList.addObject("NewText", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.GameNormalCode.asyncCallback16639636(runtimeScene, asyncObjectsList)), 16639636, asyncObjectsList);
}
}

}


};gdjs.GameNormalCode.asyncCallback16639228 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.GameNormalCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("NewText"), gdjs.GameNormalCode.GDNewTextObjects2);

{for(var i = 0, len = gdjs.GameNormalCode.GDNewTextObjects2.length ;i < len;++i) {
    gdjs.GameNormalCode.GDNewTextObjects2[i].getBehavior("Text").setText("2");
}
}

{ //Subevents
gdjs.GameNormalCode.eventsList12(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.GameNormalCode.localVariables.length = 0;
}
gdjs.GameNormalCode.idToCallbackMap.set(16639228, gdjs.GameNormalCode.asyncCallback16639228);
gdjs.GameNormalCode.eventsList13 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.GameNormalCode.localVariables);
for (const obj of gdjs.GameNormalCode.GDNewTextObjects1) asyncObjectsList.addObject("NewText", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.GameNormalCode.asyncCallback16639228(runtimeScene, asyncObjectsList)), 16639228, asyncObjectsList);
}
}

}


};gdjs.GameNormalCode.eventsList14 = function(runtimeScene) {

{


gdjs.GameNormalCode.eventsList0(runtimeScene);
}


{


gdjs.GameNormalCode.eventsList4(runtimeScene);
}


{


gdjs.GameNormalCode.eventsList6(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("SkullGameOverDialog"), gdjs.GameNormalCode.GDSkullGameOverDialogObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameNormalCode.GDSkullGameOverDialogObjects1.length;i<l;++i) {
    if ( gdjs.GameNormalCode.GDSkullGameOverDialogObjects1[i].IsRestartClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.GameNormalCode.GDSkullGameOverDialogObjects1[k] = gdjs.GameNormalCode.GDSkullGameOverDialogObjects1[i];
        ++k;
    }
}
gdjs.GameNormalCode.GDSkullGameOverDialogObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GameNormal", false);
}
}

}


{


gdjs.GameNormalCode.eventsList7(runtimeScene);
}


{


gdjs.GameNormalCode.eventsList10(runtimeScene);
}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16638924);
}
}
if (isConditionTrue_0) {
gdjs.GameNormalCode.GDNewTextObjects1.length = 0;

{gdjs.evtTools.runtimeScene.setTimeScale(runtimeScene, 0);
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameNormalCode.mapOfGDgdjs_9546GameNormalCode_9546GDNewTextObjects1Objects, 590, 200, "");
}

{ //Subevents
gdjs.GameNormalCode.eventsList13(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Remote_Back"), gdjs.GameNormalCode.GDRemote_9595BackObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameNormalCode.GDRemote_9595BackObjects1.length;i<l;++i) {
    if ( gdjs.GameNormalCode.GDRemote_9595BackObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.GameNormalCode.GDRemote_9595BackObjects1[k] = gdjs.GameNormalCode.GDRemote_9595BackObjects1[i];
        ++k;
    }
}
gdjs.GameNormalCode.GDRemote_9595BackObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Lobby", false);
}
}

}


};

gdjs.GameNormalCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameNormalCode.GDCarObjects1.length = 0;
gdjs.GameNormalCode.GDCarObjects2.length = 0;
gdjs.GameNormalCode.GDCarObjects3.length = 0;
gdjs.GameNormalCode.GDCarObjects4.length = 0;
gdjs.GameNormalCode.GDRoadObjects1.length = 0;
gdjs.GameNormalCode.GDRoadObjects2.length = 0;
gdjs.GameNormalCode.GDRoadObjects3.length = 0;
gdjs.GameNormalCode.GDRoadObjects4.length = 0;
gdjs.GameNormalCode.GDTpUpObjects1.length = 0;
gdjs.GameNormalCode.GDTpUpObjects2.length = 0;
gdjs.GameNormalCode.GDTpUpObjects3.length = 0;
gdjs.GameNormalCode.GDTpUpObjects4.length = 0;
gdjs.GameNormalCode.GDRampObjects1.length = 0;
gdjs.GameNormalCode.GDRampObjects2.length = 0;
gdjs.GameNormalCode.GDRampObjects3.length = 0;
gdjs.GameNormalCode.GDRampObjects4.length = 0;
gdjs.GameNormalCode.GDCarEnemyObjects1.length = 0;
gdjs.GameNormalCode.GDCarEnemyObjects2.length = 0;
gdjs.GameNormalCode.GDCarEnemyObjects3.length = 0;
gdjs.GameNormalCode.GDCarEnemyObjects4.length = 0;
gdjs.GameNormalCode.GDwarnObjects1.length = 0;
gdjs.GameNormalCode.GDwarnObjects2.length = 0;
gdjs.GameNormalCode.GDwarnObjects3.length = 0;
gdjs.GameNormalCode.GDwarnObjects4.length = 0;
gdjs.GameNormalCode.GDSkullGameOverDialogObjects1.length = 0;
gdjs.GameNormalCode.GDSkullGameOverDialogObjects2.length = 0;
gdjs.GameNormalCode.GDSkullGameOverDialogObjects3.length = 0;
gdjs.GameNormalCode.GDSkullGameOverDialogObjects4.length = 0;
gdjs.GameNormalCode.GDAddPointObjects1.length = 0;
gdjs.GameNormalCode.GDAddPointObjects2.length = 0;
gdjs.GameNormalCode.GDAddPointObjects3.length = 0;
gdjs.GameNormalCode.GDAddPointObjects4.length = 0;
gdjs.GameNormalCode.GDFlatHeartBarObjects1.length = 0;
gdjs.GameNormalCode.GDFlatHeartBarObjects2.length = 0;
gdjs.GameNormalCode.GDFlatHeartBarObjects3.length = 0;
gdjs.GameNormalCode.GDFlatHeartBarObjects4.length = 0;
gdjs.GameNormalCode.GDShieldObjects1.length = 0;
gdjs.GameNormalCode.GDShieldObjects2.length = 0;
gdjs.GameNormalCode.GDShieldObjects3.length = 0;
gdjs.GameNormalCode.GDShieldObjects4.length = 0;
gdjs.GameNormalCode.GDShieldItemObjects1.length = 0;
gdjs.GameNormalCode.GDShieldItemObjects2.length = 0;
gdjs.GameNormalCode.GDShieldItemObjects3.length = 0;
gdjs.GameNormalCode.GDShieldItemObjects4.length = 0;
gdjs.GameNormalCode.GDBananaObjects1.length = 0;
gdjs.GameNormalCode.GDBananaObjects2.length = 0;
gdjs.GameNormalCode.GDBananaObjects3.length = 0;
gdjs.GameNormalCode.GDBananaObjects4.length = 0;
gdjs.GameNormalCode.GDLeft_9595arrow_9595round_9595buttonObjects1.length = 0;
gdjs.GameNormalCode.GDLeft_9595arrow_9595round_9595buttonObjects2.length = 0;
gdjs.GameNormalCode.GDLeft_9595arrow_9595round_9595buttonObjects3.length = 0;
gdjs.GameNormalCode.GDLeft_9595arrow_9595round_9595buttonObjects4.length = 0;
gdjs.GameNormalCode.GDRight_9595arrow_9595round_9595buttonObjects1.length = 0;
gdjs.GameNormalCode.GDRight_9595arrow_9595round_9595buttonObjects2.length = 0;
gdjs.GameNormalCode.GDRight_9595arrow_9595round_9595buttonObjects3.length = 0;
gdjs.GameNormalCode.GDRight_9595arrow_9595round_9595buttonObjects4.length = 0;
gdjs.GameNormalCode.GDNewTextObjects1.length = 0;
gdjs.GameNormalCode.GDNewTextObjects2.length = 0;
gdjs.GameNormalCode.GDNewTextObjects3.length = 0;
gdjs.GameNormalCode.GDNewTextObjects4.length = 0;
gdjs.GameNormalCode.GDRemote_9595BackObjects1.length = 0;
gdjs.GameNormalCode.GDRemote_9595BackObjects2.length = 0;
gdjs.GameNormalCode.GDRemote_9595BackObjects3.length = 0;
gdjs.GameNormalCode.GDRemote_9595BackObjects4.length = 0;

gdjs.GameNormalCode.eventsList14(runtimeScene);
gdjs.GameNormalCode.GDCarObjects1.length = 0;
gdjs.GameNormalCode.GDCarObjects2.length = 0;
gdjs.GameNormalCode.GDCarObjects3.length = 0;
gdjs.GameNormalCode.GDCarObjects4.length = 0;
gdjs.GameNormalCode.GDRoadObjects1.length = 0;
gdjs.GameNormalCode.GDRoadObjects2.length = 0;
gdjs.GameNormalCode.GDRoadObjects3.length = 0;
gdjs.GameNormalCode.GDRoadObjects4.length = 0;
gdjs.GameNormalCode.GDTpUpObjects1.length = 0;
gdjs.GameNormalCode.GDTpUpObjects2.length = 0;
gdjs.GameNormalCode.GDTpUpObjects3.length = 0;
gdjs.GameNormalCode.GDTpUpObjects4.length = 0;
gdjs.GameNormalCode.GDRampObjects1.length = 0;
gdjs.GameNormalCode.GDRampObjects2.length = 0;
gdjs.GameNormalCode.GDRampObjects3.length = 0;
gdjs.GameNormalCode.GDRampObjects4.length = 0;
gdjs.GameNormalCode.GDCarEnemyObjects1.length = 0;
gdjs.GameNormalCode.GDCarEnemyObjects2.length = 0;
gdjs.GameNormalCode.GDCarEnemyObjects3.length = 0;
gdjs.GameNormalCode.GDCarEnemyObjects4.length = 0;
gdjs.GameNormalCode.GDwarnObjects1.length = 0;
gdjs.GameNormalCode.GDwarnObjects2.length = 0;
gdjs.GameNormalCode.GDwarnObjects3.length = 0;
gdjs.GameNormalCode.GDwarnObjects4.length = 0;
gdjs.GameNormalCode.GDSkullGameOverDialogObjects1.length = 0;
gdjs.GameNormalCode.GDSkullGameOverDialogObjects2.length = 0;
gdjs.GameNormalCode.GDSkullGameOverDialogObjects3.length = 0;
gdjs.GameNormalCode.GDSkullGameOverDialogObjects4.length = 0;
gdjs.GameNormalCode.GDAddPointObjects1.length = 0;
gdjs.GameNormalCode.GDAddPointObjects2.length = 0;
gdjs.GameNormalCode.GDAddPointObjects3.length = 0;
gdjs.GameNormalCode.GDAddPointObjects4.length = 0;
gdjs.GameNormalCode.GDFlatHeartBarObjects1.length = 0;
gdjs.GameNormalCode.GDFlatHeartBarObjects2.length = 0;
gdjs.GameNormalCode.GDFlatHeartBarObjects3.length = 0;
gdjs.GameNormalCode.GDFlatHeartBarObjects4.length = 0;
gdjs.GameNormalCode.GDShieldObjects1.length = 0;
gdjs.GameNormalCode.GDShieldObjects2.length = 0;
gdjs.GameNormalCode.GDShieldObjects3.length = 0;
gdjs.GameNormalCode.GDShieldObjects4.length = 0;
gdjs.GameNormalCode.GDShieldItemObjects1.length = 0;
gdjs.GameNormalCode.GDShieldItemObjects2.length = 0;
gdjs.GameNormalCode.GDShieldItemObjects3.length = 0;
gdjs.GameNormalCode.GDShieldItemObjects4.length = 0;
gdjs.GameNormalCode.GDBananaObjects1.length = 0;
gdjs.GameNormalCode.GDBananaObjects2.length = 0;
gdjs.GameNormalCode.GDBananaObjects3.length = 0;
gdjs.GameNormalCode.GDBananaObjects4.length = 0;
gdjs.GameNormalCode.GDLeft_9595arrow_9595round_9595buttonObjects1.length = 0;
gdjs.GameNormalCode.GDLeft_9595arrow_9595round_9595buttonObjects2.length = 0;
gdjs.GameNormalCode.GDLeft_9595arrow_9595round_9595buttonObjects3.length = 0;
gdjs.GameNormalCode.GDLeft_9595arrow_9595round_9595buttonObjects4.length = 0;
gdjs.GameNormalCode.GDRight_9595arrow_9595round_9595buttonObjects1.length = 0;
gdjs.GameNormalCode.GDRight_9595arrow_9595round_9595buttonObjects2.length = 0;
gdjs.GameNormalCode.GDRight_9595arrow_9595round_9595buttonObjects3.length = 0;
gdjs.GameNormalCode.GDRight_9595arrow_9595round_9595buttonObjects4.length = 0;
gdjs.GameNormalCode.GDNewTextObjects1.length = 0;
gdjs.GameNormalCode.GDNewTextObjects2.length = 0;
gdjs.GameNormalCode.GDNewTextObjects3.length = 0;
gdjs.GameNormalCode.GDNewTextObjects4.length = 0;
gdjs.GameNormalCode.GDRemote_9595BackObjects1.length = 0;
gdjs.GameNormalCode.GDRemote_9595BackObjects2.length = 0;
gdjs.GameNormalCode.GDRemote_9595BackObjects3.length = 0;
gdjs.GameNormalCode.GDRemote_9595BackObjects4.length = 0;


return;

}

gdjs['GameNormalCode'] = gdjs.GameNormalCode;
