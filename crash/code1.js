gdjs.GameEasyCode = {};
gdjs.GameEasyCode.localVariables = [];
gdjs.GameEasyCode.idToCallbackMap = new Map();
gdjs.GameEasyCode.GDCarObjects1= [];
gdjs.GameEasyCode.GDCarObjects2= [];
gdjs.GameEasyCode.GDCarObjects3= [];
gdjs.GameEasyCode.GDCarObjects4= [];
gdjs.GameEasyCode.GDRoadObjects1= [];
gdjs.GameEasyCode.GDRoadObjects2= [];
gdjs.GameEasyCode.GDRoadObjects3= [];
gdjs.GameEasyCode.GDRoadObjects4= [];
gdjs.GameEasyCode.GDTpUpObjects1= [];
gdjs.GameEasyCode.GDTpUpObjects2= [];
gdjs.GameEasyCode.GDTpUpObjects3= [];
gdjs.GameEasyCode.GDTpUpObjects4= [];
gdjs.GameEasyCode.GDRampObjects1= [];
gdjs.GameEasyCode.GDRampObjects2= [];
gdjs.GameEasyCode.GDRampObjects3= [];
gdjs.GameEasyCode.GDRampObjects4= [];
gdjs.GameEasyCode.GDCarEnemyObjects1= [];
gdjs.GameEasyCode.GDCarEnemyObjects2= [];
gdjs.GameEasyCode.GDCarEnemyObjects3= [];
gdjs.GameEasyCode.GDCarEnemyObjects4= [];
gdjs.GameEasyCode.GDwarnObjects1= [];
gdjs.GameEasyCode.GDwarnObjects2= [];
gdjs.GameEasyCode.GDwarnObjects3= [];
gdjs.GameEasyCode.GDwarnObjects4= [];
gdjs.GameEasyCode.GDSkullGameOverDialogObjects1= [];
gdjs.GameEasyCode.GDSkullGameOverDialogObjects2= [];
gdjs.GameEasyCode.GDSkullGameOverDialogObjects3= [];
gdjs.GameEasyCode.GDSkullGameOverDialogObjects4= [];
gdjs.GameEasyCode.GDAddPointObjects1= [];
gdjs.GameEasyCode.GDAddPointObjects2= [];
gdjs.GameEasyCode.GDAddPointObjects3= [];
gdjs.GameEasyCode.GDAddPointObjects4= [];
gdjs.GameEasyCode.GDFlatHeartBarObjects1= [];
gdjs.GameEasyCode.GDFlatHeartBarObjects2= [];
gdjs.GameEasyCode.GDFlatHeartBarObjects3= [];
gdjs.GameEasyCode.GDFlatHeartBarObjects4= [];
gdjs.GameEasyCode.GDShieldObjects1= [];
gdjs.GameEasyCode.GDShieldObjects2= [];
gdjs.GameEasyCode.GDShieldObjects3= [];
gdjs.GameEasyCode.GDShieldObjects4= [];
gdjs.GameEasyCode.GDShieldItemObjects1= [];
gdjs.GameEasyCode.GDShieldItemObjects2= [];
gdjs.GameEasyCode.GDShieldItemObjects3= [];
gdjs.GameEasyCode.GDShieldItemObjects4= [];
gdjs.GameEasyCode.GDBananaObjects1= [];
gdjs.GameEasyCode.GDBananaObjects2= [];
gdjs.GameEasyCode.GDBananaObjects3= [];
gdjs.GameEasyCode.GDBananaObjects4= [];
gdjs.GameEasyCode.GDLeft_9595arrow_9595round_9595buttonObjects1= [];
gdjs.GameEasyCode.GDLeft_9595arrow_9595round_9595buttonObjects2= [];
gdjs.GameEasyCode.GDLeft_9595arrow_9595round_9595buttonObjects3= [];
gdjs.GameEasyCode.GDLeft_9595arrow_9595round_9595buttonObjects4= [];
gdjs.GameEasyCode.GDRight_9595arrow_9595round_9595buttonObjects1= [];
gdjs.GameEasyCode.GDRight_9595arrow_9595round_9595buttonObjects2= [];
gdjs.GameEasyCode.GDRight_9595arrow_9595round_9595buttonObjects3= [];
gdjs.GameEasyCode.GDRight_9595arrow_9595round_9595buttonObjects4= [];
gdjs.GameEasyCode.GDNewTextObjects1= [];
gdjs.GameEasyCode.GDNewTextObjects2= [];
gdjs.GameEasyCode.GDNewTextObjects3= [];
gdjs.GameEasyCode.GDNewTextObjects4= [];
gdjs.GameEasyCode.GDRemote_9595BackObjects1= [];
gdjs.GameEasyCode.GDRemote_9595BackObjects2= [];
gdjs.GameEasyCode.GDRemote_9595BackObjects3= [];
gdjs.GameEasyCode.GDRemote_9595BackObjects4= [];


gdjs.GameEasyCode.mapOfGDgdjs_9546GameEasyCode_9546GDCarObjects1Objects = Hashtable.newFrom({"Car": gdjs.GameEasyCode.GDCarObjects1});
gdjs.GameEasyCode.mapOfGDgdjs_9546GameEasyCode_9546GDAddPointObjects1Objects = Hashtable.newFrom({"AddPoint": gdjs.GameEasyCode.GDAddPointObjects1});
gdjs.GameEasyCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Left_arrow_round_button"), gdjs.GameEasyCode.GDLeft_9595arrow_9595round_9595buttonObjects2);
gdjs.copyArray(runtimeScene.getObjects("Right_arrow_round_button"), gdjs.GameEasyCode.GDRight_9595arrow_9595round_9595buttonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameEasyCode.GDRight_9595arrow_9595round_9595buttonObjects2.length;i<l;++i) {
    if ( !(gdjs.GameEasyCode.GDRight_9595arrow_9595round_9595buttonObjects2[i].getBehavior("ButtonFSM").IsPressed(null)) ) {
        isConditionTrue_0 = true;
        gdjs.GameEasyCode.GDRight_9595arrow_9595round_9595buttonObjects2[k] = gdjs.GameEasyCode.GDRight_9595arrow_9595round_9595buttonObjects2[i];
        ++k;
    }
}
gdjs.GameEasyCode.GDRight_9595arrow_9595round_9595buttonObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameEasyCode.GDLeft_9595arrow_9595round_9595buttonObjects2.length;i<l;++i) {
    if ( !(gdjs.GameEasyCode.GDLeft_9595arrow_9595round_9595buttonObjects2[i].getBehavior("ButtonFSM").IsPressed(null)) ) {
        isConditionTrue_0 = true;
        gdjs.GameEasyCode.GDLeft_9595arrow_9595round_9595buttonObjects2[k] = gdjs.GameEasyCode.GDLeft_9595arrow_9595round_9595buttonObjects2[i];
        ++k;
    }
}
gdjs.GameEasyCode.GDLeft_9595arrow_9595round_9595buttonObjects2.length = k;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Car"), gdjs.GameEasyCode.GDCarObjects2);
{for(var i = 0, len = gdjs.GameEasyCode.GDCarObjects2.length ;i < len;++i) {
    gdjs.GameEasyCode.GDCarObjects2[i].setAngle(0);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Left_arrow_round_button"), gdjs.GameEasyCode.GDLeft_9595arrow_9595round_9595buttonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameEasyCode.GDLeft_9595arrow_9595round_9595buttonObjects2.length;i<l;++i) {
    if ( gdjs.GameEasyCode.GDLeft_9595arrow_9595round_9595buttonObjects2[i].getBehavior("ButtonFSM").IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.GameEasyCode.GDLeft_9595arrow_9595round_9595buttonObjects2[k] = gdjs.GameEasyCode.GDLeft_9595arrow_9595round_9595buttonObjects2[i];
        ++k;
    }
}
gdjs.GameEasyCode.GDLeft_9595arrow_9595round_9595buttonObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Car"), gdjs.GameEasyCode.GDCarObjects2);
{for(var i = 0, len = gdjs.GameEasyCode.GDCarObjects2.length ;i < len;++i) {
    gdjs.GameEasyCode.GDCarObjects2[i].setX(gdjs.GameEasyCode.GDCarObjects2[i].getX() - (6));
}
}
{for(var i = 0, len = gdjs.GameEasyCode.GDCarObjects2.length ;i < len;++i) {
    gdjs.GameEasyCode.GDCarObjects2[i].setAngle(-(22));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Right_arrow_round_button"), gdjs.GameEasyCode.GDRight_9595arrow_9595round_9595buttonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameEasyCode.GDRight_9595arrow_9595round_9595buttonObjects2.length;i<l;++i) {
    if ( gdjs.GameEasyCode.GDRight_9595arrow_9595round_9595buttonObjects2[i].getBehavior("ButtonFSM").IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.GameEasyCode.GDRight_9595arrow_9595round_9595buttonObjects2[k] = gdjs.GameEasyCode.GDRight_9595arrow_9595round_9595buttonObjects2[i];
        ++k;
    }
}
gdjs.GameEasyCode.GDRight_9595arrow_9595round_9595buttonObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Car"), gdjs.GameEasyCode.GDCarObjects2);
{for(var i = 0, len = gdjs.GameEasyCode.GDCarObjects2.length ;i < len;++i) {
    gdjs.GameEasyCode.GDCarObjects2[i].setX(gdjs.GameEasyCode.GDCarObjects2[i].getX() + (6));
}
}
{for(var i = 0, len = gdjs.GameEasyCode.GDCarObjects2.length ;i < len;++i) {
    gdjs.GameEasyCode.GDCarObjects2[i].setAngle(22);
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Car"), gdjs.GameEasyCode.GDCarObjects2);
{for(var i = 0, len = gdjs.GameEasyCode.GDCarObjects2.length ;i < len;++i) {
    gdjs.GameEasyCode.GDCarObjects2[i].setY(400);
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Car"), gdjs.GameEasyCode.GDCarObjects2);
{for(var i = 0, len = gdjs.GameEasyCode.GDCarObjects2.length ;i < len;++i) {
    gdjs.GameEasyCode.GDCarObjects2[i].setX(gdjs.evtTools.common.clamp((gdjs.GameEasyCode.GDCarObjects2[i].getPointX("")), 160, 800));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("AddPoint"), gdjs.GameEasyCode.GDAddPointObjects1);
gdjs.copyArray(runtimeScene.getObjects("Car"), gdjs.GameEasyCode.GDCarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameEasyCode.mapOfGDgdjs_9546GameEasyCode_9546GDCarObjects1Objects, gdjs.GameEasyCode.mapOfGDgdjs_9546GameEasyCode_9546GDAddPointObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16503276);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameEasyCode.GDAddPointObjects1 */
gdjs.copyArray(runtimeScene.getObjects("SkullGameOverDialog"), gdjs.GameEasyCode.GDSkullGameOverDialogObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(1).add(1);
}
{for(var i = 0, len = gdjs.GameEasyCode.GDSkullGameOverDialogObjects1.length ;i < len;++i) {
    gdjs.GameEasyCode.GDSkullGameOverDialogObjects1[i].SetScore(runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber(), null);
}
}
{for(var i = 0, len = gdjs.GameEasyCode.GDAddPointObjects1.length ;i < len;++i) {
    gdjs.GameEasyCode.GDAddPointObjects1[i].deleteFromScene(runtimeScene);
}
}
}

}


};gdjs.GameEasyCode.asyncCallback16504892 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.GameEasyCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("CarEnemy"), gdjs.GameEasyCode.GDCarEnemyObjects3);
gdjs.copyArray(runtimeScene.getObjects("Ramp"), gdjs.GameEasyCode.GDRampObjects3);
gdjs.copyArray(runtimeScene.getObjects("Road"), gdjs.GameEasyCode.GDRoadObjects3);
gdjs.copyArray(runtimeScene.getObjects("ShieldItem"), gdjs.GameEasyCode.GDShieldItemObjects3);
{for(var i = 0, len = gdjs.GameEasyCode.GDRoadObjects3.length ;i < len;++i) {
    gdjs.GameEasyCode.GDRoadObjects3[i].setY(gdjs.GameEasyCode.GDRoadObjects3[i].getY() + (6));
}
}
{for(var i = 0, len = gdjs.GameEasyCode.GDRampObjects3.length ;i < len;++i) {
    gdjs.GameEasyCode.GDRampObjects3[i].setY(gdjs.GameEasyCode.GDRampObjects3[i].getY() + (6));
}
}
{for(var i = 0, len = gdjs.GameEasyCode.GDCarEnemyObjects3.length ;i < len;++i) {
    gdjs.GameEasyCode.GDCarEnemyObjects3[i].setY(gdjs.GameEasyCode.GDCarEnemyObjects3[i].getY() + (6));
}
}
{for(var i = 0, len = gdjs.GameEasyCode.GDShieldItemObjects3.length ;i < len;++i) {
    gdjs.GameEasyCode.GDShieldItemObjects3[i].setY(gdjs.GameEasyCode.GDShieldItemObjects3[i].getY() + (6));
}
}
gdjs.GameEasyCode.localVariables.length = 0;
}
gdjs.GameEasyCode.idToCallbackMap.set(16504892, gdjs.GameEasyCode.asyncCallback16504892);
gdjs.GameEasyCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.GameEasyCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.01), (runtimeScene) => (gdjs.GameEasyCode.asyncCallback16504892(runtimeScene, asyncObjectsList)), 16504892, asyncObjectsList);
}
}

}


};gdjs.GameEasyCode.mapOfGDgdjs_9546GameEasyCode_9546GDRoadObjects2Objects = Hashtable.newFrom({"Road": gdjs.GameEasyCode.GDRoadObjects2});
gdjs.GameEasyCode.mapOfGDgdjs_9546GameEasyCode_9546GDTpUpObjects2Objects = Hashtable.newFrom({"TpUp": gdjs.GameEasyCode.GDTpUpObjects2});
gdjs.GameEasyCode.mapOfGDgdjs_9546GameEasyCode_9546GDCarEnemyObjects2Objects = Hashtable.newFrom({"CarEnemy": gdjs.GameEasyCode.GDCarEnemyObjects2});
gdjs.GameEasyCode.mapOfGDgdjs_9546GameEasyCode_9546GDTpUpObjects2Objects = Hashtable.newFrom({"TpUp": gdjs.GameEasyCode.GDTpUpObjects2});
gdjs.GameEasyCode.mapOfGDgdjs_9546GameEasyCode_9546GDAddPointObjects2Objects = Hashtable.newFrom({"AddPoint": gdjs.GameEasyCode.GDAddPointObjects2});
gdjs.GameEasyCode.mapOfGDgdjs_9546GameEasyCode_9546GDTpUpObjects2Objects = Hashtable.newFrom({"TpUp": gdjs.GameEasyCode.GDTpUpObjects2});
gdjs.GameEasyCode.mapOfGDgdjs_9546GameEasyCode_9546GDShieldItemObjects2Objects = Hashtable.newFrom({"ShieldItem": gdjs.GameEasyCode.GDShieldItemObjects2});
gdjs.GameEasyCode.mapOfGDgdjs_9546GameEasyCode_9546GDTpUpObjects2Objects = Hashtable.newFrom({"TpUp": gdjs.GameEasyCode.GDTpUpObjects2});
gdjs.GameEasyCode.mapOfGDgdjs_9546GameEasyCode_9546GDCarObjects1Objects = Hashtable.newFrom({"Car": gdjs.GameEasyCode.GDCarObjects1});
gdjs.GameEasyCode.mapOfGDgdjs_9546GameEasyCode_9546GDRampObjects1Objects = Hashtable.newFrom({"Ramp": gdjs.GameEasyCode.GDRampObjects1});
gdjs.GameEasyCode.asyncCallback16509260 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.GameEasyCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Car"), gdjs.GameEasyCode.GDCarObjects3);

{for(var i = 0, len = gdjs.GameEasyCode.GDCarObjects3.length ;i < len;++i) {
    gdjs.GameEasyCode.GDCarObjects3[i].getBehavior("Tween").addObjectScaleTween3("ramp", 1, "linear", 1, false, true);
}
}
gdjs.GameEasyCode.localVariables.length = 0;
}
gdjs.GameEasyCode.idToCallbackMap.set(16509260, gdjs.GameEasyCode.asyncCallback16509260);
gdjs.GameEasyCode.eventsList2 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.GameEasyCode.localVariables);
for (const obj of gdjs.GameEasyCode.GDCarObjects2) asyncObjectsList.addObject("Car", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.GameEasyCode.asyncCallback16509260(runtimeScene, asyncObjectsList)), 16509260, asyncObjectsList);
}
}

}


};gdjs.GameEasyCode.asyncCallback16508836 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.GameEasyCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Car"), gdjs.GameEasyCode.GDCarObjects2);

{for(var i = 0, len = gdjs.GameEasyCode.GDCarObjects2.length ;i < len;++i) {
    gdjs.GameEasyCode.GDCarObjects2[i].getBehavior("Tween").addObjectScaleTween3("ramp", 1.5, "linear", 1, false, true);
}
}

{ //Subevents
gdjs.GameEasyCode.eventsList2(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.GameEasyCode.localVariables.length = 0;
}
gdjs.GameEasyCode.idToCallbackMap.set(16508836, gdjs.GameEasyCode.asyncCallback16508836);
gdjs.GameEasyCode.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.GameEasyCode.localVariables);
for (const obj of gdjs.GameEasyCode.GDCarObjects1) asyncObjectsList.addObject("Car", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs.GameEasyCode.asyncCallback16508836(runtimeScene, asyncObjectsList)), 16508836, asyncObjectsList);
}
}

}


};gdjs.GameEasyCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.GameEasyCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Road"), gdjs.GameEasyCode.GDRoadObjects2);
gdjs.copyArray(runtimeScene.getObjects("TpUp"), gdjs.GameEasyCode.GDTpUpObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameEasyCode.mapOfGDgdjs_9546GameEasyCode_9546GDRoadObjects2Objects, gdjs.GameEasyCode.mapOfGDgdjs_9546GameEasyCode_9546GDTpUpObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.GameEasyCode.GDRoadObjects2 */
{for(var i = 0, len = gdjs.GameEasyCode.GDRoadObjects2.length ;i < len;++i) {
    gdjs.GameEasyCode.GDRoadObjects2[i].setY(-(1000));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("CarEnemy"), gdjs.GameEasyCode.GDCarEnemyObjects2);
gdjs.copyArray(runtimeScene.getObjects("TpUp"), gdjs.GameEasyCode.GDTpUpObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameEasyCode.mapOfGDgdjs_9546GameEasyCode_9546GDCarEnemyObjects2Objects, gdjs.GameEasyCode.mapOfGDgdjs_9546GameEasyCode_9546GDTpUpObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.GameEasyCode.GDCarEnemyObjects2 */
{for(var i = 0, len = gdjs.GameEasyCode.GDCarEnemyObjects2.length ;i < len;++i) {
    gdjs.GameEasyCode.GDCarEnemyObjects2[i].deleteFromScene(runtimeScene);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("AddPoint"), gdjs.GameEasyCode.GDAddPointObjects2);
gdjs.copyArray(runtimeScene.getObjects("TpUp"), gdjs.GameEasyCode.GDTpUpObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameEasyCode.mapOfGDgdjs_9546GameEasyCode_9546GDAddPointObjects2Objects, gdjs.GameEasyCode.mapOfGDgdjs_9546GameEasyCode_9546GDTpUpObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.GameEasyCode.GDAddPointObjects2 */
{for(var i = 0, len = gdjs.GameEasyCode.GDAddPointObjects2.length ;i < len;++i) {
    gdjs.GameEasyCode.GDAddPointObjects2[i].deleteFromScene(runtimeScene);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ShieldItem"), gdjs.GameEasyCode.GDShieldItemObjects2);
gdjs.copyArray(runtimeScene.getObjects("TpUp"), gdjs.GameEasyCode.GDTpUpObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameEasyCode.mapOfGDgdjs_9546GameEasyCode_9546GDShieldItemObjects2Objects, gdjs.GameEasyCode.mapOfGDgdjs_9546GameEasyCode_9546GDTpUpObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.GameEasyCode.GDShieldItemObjects2 */
{for(var i = 0, len = gdjs.GameEasyCode.GDShieldItemObjects2.length ;i < len;++i) {
    gdjs.GameEasyCode.GDShieldItemObjects2[i].deleteFromScene(runtimeScene);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Car"), gdjs.GameEasyCode.GDCarObjects1);
gdjs.copyArray(runtimeScene.getObjects("Ramp"), gdjs.GameEasyCode.GDRampObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameEasyCode.mapOfGDgdjs_9546GameEasyCode_9546GDCarObjects1Objects, gdjs.GameEasyCode.mapOfGDgdjs_9546GameEasyCode_9546GDRampObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16508716);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameEasyCode.eventsList3(runtimeScene);} //End of subevents
}

}


};gdjs.GameEasyCode.asyncCallback16510172 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.GameEasyCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(gdjs.randomInRange(1, 3));
}
gdjs.GameEasyCode.localVariables.length = 0;
}
gdjs.GameEasyCode.idToCallbackMap.set(16510172, gdjs.GameEasyCode.asyncCallback16510172);
gdjs.GameEasyCode.eventsList5 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.GameEasyCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(4.5), (runtimeScene) => (gdjs.GameEasyCode.asyncCallback16510172(runtimeScene, asyncObjectsList)), 16510172, asyncObjectsList);
}
}

}


};gdjs.GameEasyCode.mapOfGDgdjs_9546GameEasyCode_9546GDwarnObjects2Objects = Hashtable.newFrom({"warn": gdjs.GameEasyCode.GDwarnObjects2});
gdjs.GameEasyCode.mapOfGDgdjs_9546GameEasyCode_9546GDwarnObjects2Objects = Hashtable.newFrom({"warn": gdjs.GameEasyCode.GDwarnObjects2});
gdjs.GameEasyCode.mapOfGDgdjs_9546GameEasyCode_9546GDwarnObjects2Objects = Hashtable.newFrom({"warn": gdjs.GameEasyCode.GDwarnObjects2});
gdjs.GameEasyCode.mapOfGDgdjs_9546GameEasyCode_9546GDCarEnemyObjects2Objects = Hashtable.newFrom({"CarEnemy": gdjs.GameEasyCode.GDCarEnemyObjects2});
gdjs.GameEasyCode.mapOfGDgdjs_9546GameEasyCode_9546GDAddPointObjects2Objects = Hashtable.newFrom({"AddPoint": gdjs.GameEasyCode.GDAddPointObjects2});
gdjs.GameEasyCode.mapOfGDgdjs_9546GameEasyCode_9546GDCarEnemyObjects2Objects = Hashtable.newFrom({"CarEnemy": gdjs.GameEasyCode.GDCarEnemyObjects2});
gdjs.GameEasyCode.mapOfGDgdjs_9546GameEasyCode_9546GDwarnObjects2Objects = Hashtable.newFrom({"warn": gdjs.GameEasyCode.GDwarnObjects2});
gdjs.GameEasyCode.mapOfGDgdjs_9546GameEasyCode_9546GDwarnObjects2Objects = Hashtable.newFrom({"warn": gdjs.GameEasyCode.GDwarnObjects2});
gdjs.GameEasyCode.mapOfGDgdjs_9546GameEasyCode_9546GDwarnObjects2Objects = Hashtable.newFrom({"warn": gdjs.GameEasyCode.GDwarnObjects2});
gdjs.GameEasyCode.mapOfGDgdjs_9546GameEasyCode_9546GDCarEnemyObjects2Objects = Hashtable.newFrom({"CarEnemy": gdjs.GameEasyCode.GDCarEnemyObjects2});
gdjs.GameEasyCode.mapOfGDgdjs_9546GameEasyCode_9546GDAddPointObjects2Objects = Hashtable.newFrom({"AddPoint": gdjs.GameEasyCode.GDAddPointObjects2});
gdjs.GameEasyCode.mapOfGDgdjs_9546GameEasyCode_9546GDCarEnemyObjects2Objects = Hashtable.newFrom({"CarEnemy": gdjs.GameEasyCode.GDCarEnemyObjects2});
gdjs.GameEasyCode.mapOfGDgdjs_9546GameEasyCode_9546GDwarnObjects2Objects = Hashtable.newFrom({"warn": gdjs.GameEasyCode.GDwarnObjects2});
gdjs.GameEasyCode.mapOfGDgdjs_9546GameEasyCode_9546GDwarnObjects2Objects = Hashtable.newFrom({"warn": gdjs.GameEasyCode.GDwarnObjects2});
gdjs.GameEasyCode.mapOfGDgdjs_9546GameEasyCode_9546GDwarnObjects2Objects = Hashtable.newFrom({"warn": gdjs.GameEasyCode.GDwarnObjects2});
gdjs.GameEasyCode.mapOfGDgdjs_9546GameEasyCode_9546GDCarEnemyObjects2Objects = Hashtable.newFrom({"CarEnemy": gdjs.GameEasyCode.GDCarEnemyObjects2});
gdjs.GameEasyCode.mapOfGDgdjs_9546GameEasyCode_9546GDAddPointObjects2Objects = Hashtable.newFrom({"AddPoint": gdjs.GameEasyCode.GDAddPointObjects2});
gdjs.GameEasyCode.mapOfGDgdjs_9546GameEasyCode_9546GDCarEnemyObjects2Objects = Hashtable.newFrom({"CarEnemy": gdjs.GameEasyCode.GDCarEnemyObjects2});
gdjs.GameEasyCode.mapOfGDgdjs_9546GameEasyCode_9546GDCarEnemyObjects1Objects = Hashtable.newFrom({"CarEnemy": gdjs.GameEasyCode.GDCarEnemyObjects1});
gdjs.GameEasyCode.mapOfGDgdjs_9546GameEasyCode_9546GDwarnObjects1Objects = Hashtable.newFrom({"warn": gdjs.GameEasyCode.GDwarnObjects1});
gdjs.GameEasyCode.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16510276);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameEasyCode.eventsList5(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 2);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16511492);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("warn"), gdjs.GameEasyCode.GDwarnObjects2);
gdjs.GameEasyCode.GDAddPointObjects2.length = 0;

gdjs.GameEasyCode.GDCarEnemyObjects2.length = 0;

{gdjs.evtTools.object.pickAllObjects(runtimeScene, gdjs.GameEasyCode.mapOfGDgdjs_9546GameEasyCode_9546GDwarnObjects2Objects);
}
{for(var i = 0, len = gdjs.GameEasyCode.GDwarnObjects2.length ;i < len;++i) {
    gdjs.GameEasyCode.GDwarnObjects2[i].deleteFromScene(runtimeScene);
}
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameEasyCode.mapOfGDgdjs_9546GameEasyCode_9546GDwarnObjects2Objects, 608, 0, "Warn");
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameEasyCode.mapOfGDgdjs_9546GameEasyCode_9546GDwarnObjects2Objects, 288, 0, "Warn");
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(0);
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameEasyCode.mapOfGDgdjs_9546GameEasyCode_9546GDCarEnemyObjects2Objects, 160, -(1020), "");
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameEasyCode.mapOfGDgdjs_9546GameEasyCode_9546GDAddPointObjects2Objects, 800, -(1020), "");
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameEasyCode.mapOfGDgdjs_9546GameEasyCode_9546GDCarEnemyObjects2Objects, 480, -(1020), "");
}
{for(var i = 0, len = gdjs.GameEasyCode.GDCarEnemyObjects2.length ;i < len;++i) {
    gdjs.GameEasyCode.GDCarEnemyObjects2[i].getBehavior("Animation").setAnimationIndex(gdjs.randomInRange(1, 6));
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16513324);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("warn"), gdjs.GameEasyCode.GDwarnObjects2);
gdjs.GameEasyCode.GDAddPointObjects2.length = 0;

gdjs.GameEasyCode.GDCarEnemyObjects2.length = 0;

{gdjs.evtTools.object.pickAllObjects(runtimeScene, gdjs.GameEasyCode.mapOfGDgdjs_9546GameEasyCode_9546GDwarnObjects2Objects);
}
{for(var i = 0, len = gdjs.GameEasyCode.GDwarnObjects2.length ;i < len;++i) {
    gdjs.GameEasyCode.GDwarnObjects2[i].deleteFromScene(runtimeScene);
}
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameEasyCode.mapOfGDgdjs_9546GameEasyCode_9546GDwarnObjects2Objects, 288, 0, "Warn");
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameEasyCode.mapOfGDgdjs_9546GameEasyCode_9546GDwarnObjects2Objects, 930, 0, "Warn");
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(0);
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameEasyCode.mapOfGDgdjs_9546GameEasyCode_9546GDCarEnemyObjects2Objects, 160, -(1020), "");
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameEasyCode.mapOfGDgdjs_9546GameEasyCode_9546GDAddPointObjects2Objects, 480, -(1020), "");
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameEasyCode.mapOfGDgdjs_9546GameEasyCode_9546GDCarEnemyObjects2Objects, 800, -(1020), "");
}
{for(var i = 0, len = gdjs.GameEasyCode.GDCarEnemyObjects2.length ;i < len;++i) {
    gdjs.GameEasyCode.GDCarEnemyObjects2[i].getBehavior("Animation").setAnimationIndex(gdjs.randomInRange(1, 6));
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16515580);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("warn"), gdjs.GameEasyCode.GDwarnObjects2);
gdjs.GameEasyCode.GDAddPointObjects2.length = 0;

gdjs.GameEasyCode.GDCarEnemyObjects2.length = 0;

{gdjs.evtTools.object.pickAllObjects(runtimeScene, gdjs.GameEasyCode.mapOfGDgdjs_9546GameEasyCode_9546GDwarnObjects2Objects);
}
{for(var i = 0, len = gdjs.GameEasyCode.GDwarnObjects2.length ;i < len;++i) {
    gdjs.GameEasyCode.GDwarnObjects2[i].deleteFromScene(runtimeScene);
}
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameEasyCode.mapOfGDgdjs_9546GameEasyCode_9546GDwarnObjects2Objects, 930, 0, "Warn");
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameEasyCode.mapOfGDgdjs_9546GameEasyCode_9546GDwarnObjects2Objects, 608, 0, "Warn");
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(0);
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameEasyCode.mapOfGDgdjs_9546GameEasyCode_9546GDCarEnemyObjects2Objects, 480, -(1020), "");
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameEasyCode.mapOfGDgdjs_9546GameEasyCode_9546GDAddPointObjects2Objects, 160, -(1020), "");
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameEasyCode.mapOfGDgdjs_9546GameEasyCode_9546GDCarEnemyObjects2Objects, 800, -(1020), "");
}
{for(var i = 0, len = gdjs.GameEasyCode.GDCarEnemyObjects2.length ;i < len;++i) {
    gdjs.GameEasyCode.GDCarEnemyObjects2[i].getBehavior("Animation").setAnimationIndex(gdjs.randomInRange(1, 6));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("CarEnemy"), gdjs.GameEasyCode.GDCarEnemyObjects1);
gdjs.copyArray(runtimeScene.getObjects("warn"), gdjs.GameEasyCode.GDwarnObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameEasyCode.mapOfGDgdjs_9546GameEasyCode_9546GDCarEnemyObjects1Objects, gdjs.GameEasyCode.mapOfGDgdjs_9546GameEasyCode_9546GDwarnObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.GameEasyCode.GDwarnObjects1 */
{for(var i = 0, len = gdjs.GameEasyCode.GDwarnObjects1.length ;i < len;++i) {
    gdjs.GameEasyCode.GDwarnObjects1[i].deleteFromScene(runtimeScene);
}
}
}

}


};gdjs.GameEasyCode.mapOfGDgdjs_9546GameEasyCode_9546GDCarObjects2Objects = Hashtable.newFrom({"Car": gdjs.GameEasyCode.GDCarObjects2});
gdjs.GameEasyCode.mapOfGDgdjs_9546GameEasyCode_9546GDCarEnemyObjects2Objects = Hashtable.newFrom({"CarEnemy": gdjs.GameEasyCode.GDCarEnemyObjects2});
gdjs.GameEasyCode.mapOfGDgdjs_9546GameEasyCode_9546GDCarObjects2Objects = Hashtable.newFrom({"Car": gdjs.GameEasyCode.GDCarObjects2});
gdjs.GameEasyCode.mapOfGDgdjs_9546GameEasyCode_9546GDCarEnemyObjects2Objects = Hashtable.newFrom({"CarEnemy": gdjs.GameEasyCode.GDCarEnemyObjects2});
gdjs.GameEasyCode.eventsList7 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Car"), gdjs.GameEasyCode.GDCarObjects2);
gdjs.copyArray(runtimeScene.getObjects("CarEnemy"), gdjs.GameEasyCode.GDCarEnemyObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameEasyCode.mapOfGDgdjs_9546GameEasyCode_9546GDCarObjects2Objects, gdjs.GameEasyCode.mapOfGDgdjs_9546GameEasyCode_9546GDCarEnemyObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getScene().getVariables().getFromIndex(3).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16520548);
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

gdjs.copyArray(runtimeScene.getObjects("Car"), gdjs.GameEasyCode.GDCarObjects2);
gdjs.copyArray(runtimeScene.getObjects("CarEnemy"), gdjs.GameEasyCode.GDCarEnemyObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameEasyCode.mapOfGDgdjs_9546GameEasyCode_9546GDCarObjects2Objects, gdjs.GameEasyCode.mapOfGDgdjs_9546GameEasyCode_9546GDCarEnemyObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16521460);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameEasyCode.GDCarEnemyObjects2 */
{for(var i = 0, len = gdjs.GameEasyCode.GDCarEnemyObjects2.length ;i < len;++i) {
    gdjs.GameEasyCode.GDCarEnemyObjects2[i].deleteFromScene(runtimeScene);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16522188);
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
gdjs.copyArray(runtimeScene.getObjects("FlatHeartBar"), gdjs.GameEasyCode.GDFlatHeartBarObjects2);
{for(var i = 0, len = gdjs.GameEasyCode.GDFlatHeartBarObjects2.length ;i < len;++i) {
    gdjs.GameEasyCode.GDFlatHeartBarObjects2[i].SetValue(runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber(), null);
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
gdjs.copyArray(runtimeScene.getObjects("Car"), gdjs.GameEasyCode.GDCarObjects2);
{for(var i = 0, len = gdjs.GameEasyCode.GDCarObjects2.length ;i < len;++i) {
    gdjs.GameEasyCode.GDCarObjects2[i].getBehavior("Animation").setAnimationName("CarRedUp");
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
gdjs.copyArray(runtimeScene.getObjects("Car"), gdjs.GameEasyCode.GDCarObjects2);
{for(var i = 0, len = gdjs.GameEasyCode.GDCarObjects2.length ;i < len;++i) {
    gdjs.GameEasyCode.GDCarObjects2[i].getBehavior("Animation").setAnimationName("2hp RedCar");
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
gdjs.copyArray(runtimeScene.getObjects("Car"), gdjs.GameEasyCode.GDCarObjects2);
{for(var i = 0, len = gdjs.GameEasyCode.GDCarObjects2.length ;i < len;++i) {
    gdjs.GameEasyCode.GDCarObjects2[i].getBehavior("Animation").setAnimationName("1hp RedCar");
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
gdjs.copyArray(runtimeScene.getObjects("Car"), gdjs.GameEasyCode.GDCarObjects1);
{for(var i = 0, len = gdjs.GameEasyCode.GDCarObjects1.length ;i < len;++i) {
    gdjs.GameEasyCode.GDCarObjects1[i].getBehavior("Animation").setAnimationName("0hp RedCar");
}
}
}

}


};gdjs.GameEasyCode.mapOfGDgdjs_9546GameEasyCode_9546GDShieldObjects2Objects = Hashtable.newFrom({"Shield": gdjs.GameEasyCode.GDShieldObjects2});
gdjs.GameEasyCode.asyncCallback16527220 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.GameEasyCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Shield"), gdjs.GameEasyCode.GDShieldObjects3);

{for(var i = 0, len = gdjs.GameEasyCode.GDShieldObjects3.length ;i < len;++i) {
    gdjs.GameEasyCode.GDShieldObjects3[i].getBehavior("Animation").setAnimationName("Hide");
}
}
gdjs.GameEasyCode.localVariables.length = 0;
}
gdjs.GameEasyCode.idToCallbackMap.set(16527220, gdjs.GameEasyCode.asyncCallback16527220);
gdjs.GameEasyCode.eventsList8 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.GameEasyCode.localVariables);
for (const obj of gdjs.GameEasyCode.GDShieldObjects2) asyncObjectsList.addObject("Shield", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(10), (runtimeScene) => (gdjs.GameEasyCode.asyncCallback16527220(runtimeScene, asyncObjectsList)), 16527220, asyncObjectsList);
}
}

}


};gdjs.GameEasyCode.mapOfGDgdjs_9546GameEasyCode_9546GDCarObjects2Objects = Hashtable.newFrom({"Car": gdjs.GameEasyCode.GDCarObjects2});
gdjs.GameEasyCode.mapOfGDgdjs_9546GameEasyCode_9546GDShieldItemObjects2Objects = Hashtable.newFrom({"ShieldItem": gdjs.GameEasyCode.GDShieldItemObjects2});
gdjs.GameEasyCode.asyncCallback16531300 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.GameEasyCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(4).setNumber(gdjs.randomInRange(1, 3));
}
gdjs.GameEasyCode.localVariables.length = 0;
}
gdjs.GameEasyCode.idToCallbackMap.set(16531300, gdjs.GameEasyCode.asyncCallback16531300);
gdjs.GameEasyCode.eventsList9 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.GameEasyCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(45), (runtimeScene) => (gdjs.GameEasyCode.asyncCallback16531300(runtimeScene, asyncObjectsList)), 16531300, asyncObjectsList);
}
}

}


};gdjs.GameEasyCode.mapOfGDgdjs_9546GameEasyCode_9546GDShieldItemObjects2Objects = Hashtable.newFrom({"ShieldItem": gdjs.GameEasyCode.GDShieldItemObjects2});
gdjs.GameEasyCode.mapOfGDgdjs_9546GameEasyCode_9546GDShieldItemObjects2Objects = Hashtable.newFrom({"ShieldItem": gdjs.GameEasyCode.GDShieldItemObjects2});
gdjs.GameEasyCode.mapOfGDgdjs_9546GameEasyCode_9546GDShieldItemObjects1Objects = Hashtable.newFrom({"ShieldItem": gdjs.GameEasyCode.GDShieldItemObjects1});
gdjs.GameEasyCode.eventsList10 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(3).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16526716);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Car"), gdjs.GameEasyCode.GDCarObjects2);
gdjs.GameEasyCode.GDShieldObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameEasyCode.mapOfGDgdjs_9546GameEasyCode_9546GDShieldObjects2Objects, (( gdjs.GameEasyCode.GDCarObjects2.length === 0 ) ? 0 :gdjs.GameEasyCode.GDCarObjects2[0].getPointX("")), (( gdjs.GameEasyCode.GDCarObjects2.length === 0 ) ? 0 :gdjs.GameEasyCode.GDCarObjects2[0].getPointY("")), "");
}
{for(var i = 0, len = gdjs.GameEasyCode.GDShieldObjects2.length ;i < len;++i) {
    gdjs.GameEasyCode.GDShieldObjects2[i].setCenterPositionInScene((( gdjs.GameEasyCode.GDCarObjects2.length === 0 ) ? 0 :gdjs.GameEasyCode.GDCarObjects2[0].getCenterXInScene()),(( gdjs.GameEasyCode.GDCarObjects2.length === 0 ) ? 0 :gdjs.GameEasyCode.GDCarObjects2[0].getCenterYInScene()));
}
}

{ //Subevents
gdjs.GameEasyCode.eventsList8(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Shield"), gdjs.GameEasyCode.GDShieldObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameEasyCode.GDShieldObjects2.length;i<l;++i) {
    if ( gdjs.GameEasyCode.GDShieldObjects2[i].getBehavior("Animation").getAnimationName() == "Hide" ) {
        isConditionTrue_0 = true;
        gdjs.GameEasyCode.GDShieldObjects2[k] = gdjs.GameEasyCode.GDShieldObjects2[i];
        ++k;
    }
}
gdjs.GameEasyCode.GDShieldObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameEasyCode.GDShieldObjects2.length;i<l;++i) {
    if ( gdjs.GameEasyCode.GDShieldObjects2[i].getBehavior("Animation").hasAnimationEnded() ) {
        isConditionTrue_0 = true;
        gdjs.GameEasyCode.GDShieldObjects2[k] = gdjs.GameEasyCode.GDShieldObjects2[i];
        ++k;
    }
}
gdjs.GameEasyCode.GDShieldObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameEasyCode.GDShieldObjects2 */
{for(var i = 0, len = gdjs.GameEasyCode.GDShieldObjects2.length ;i < len;++i) {
    gdjs.GameEasyCode.GDShieldObjects2[i].deleteFromScene(runtimeScene);
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
gdjs.copyArray(runtimeScene.getObjects("Car"), gdjs.GameEasyCode.GDCarObjects2);
gdjs.copyArray(runtimeScene.getObjects("Shield"), gdjs.GameEasyCode.GDShieldObjects2);
{for(var i = 0, len = gdjs.GameEasyCode.GDShieldObjects2.length ;i < len;++i) {
    gdjs.GameEasyCode.GDShieldObjects2[i].setCenterPositionInScene((( gdjs.GameEasyCode.GDCarObjects2.length === 0 ) ? 0 :gdjs.GameEasyCode.GDCarObjects2[0].getCenterXInScene()),(( gdjs.GameEasyCode.GDCarObjects2.length === 0 ) ? 0 :gdjs.GameEasyCode.GDCarObjects2[0].getCenterYInScene()));
}
}
{for(var i = 0, len = gdjs.GameEasyCode.GDShieldObjects2.length ;i < len;++i) {
    gdjs.GameEasyCode.GDShieldObjects2[i].getBehavior("Opacity").setOpacity(130);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Car"), gdjs.GameEasyCode.GDCarObjects2);
gdjs.copyArray(runtimeScene.getObjects("ShieldItem"), gdjs.GameEasyCode.GDShieldItemObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameEasyCode.mapOfGDgdjs_9546GameEasyCode_9546GDCarObjects2Objects, gdjs.GameEasyCode.mapOfGDgdjs_9546GameEasyCode_9546GDShieldItemObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.GameEasyCode.GDShieldItemObjects2 */
{for(var i = 0, len = gdjs.GameEasyCode.GDShieldItemObjects2.length ;i < len;++i) {
    gdjs.GameEasyCode.GDShieldItemObjects2[i].deleteFromScene(runtimeScene);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16531508);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameEasyCode.eventsList9(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16532284);
}
}
if (isConditionTrue_0) {
gdjs.GameEasyCode.GDShieldItemObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameEasyCode.mapOfGDgdjs_9546GameEasyCode_9546GDShieldItemObjects2Objects, 290, -(350), "");
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16533580);
}
}
if (isConditionTrue_0) {
gdjs.GameEasyCode.GDShieldItemObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameEasyCode.mapOfGDgdjs_9546GameEasyCode_9546GDShieldItemObjects2Objects, 610, -(350), "");
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16534668);
}
}
if (isConditionTrue_0) {
gdjs.GameEasyCode.GDShieldItemObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameEasyCode.mapOfGDgdjs_9546GameEasyCode_9546GDShieldItemObjects1Objects, 930, -(350), "");
}
{runtimeScene.getScene().getVariables().getFromIndex(4).setNumber(0);
}
}

}


};gdjs.GameEasyCode.mapOfGDgdjs_9546GameEasyCode_9546GDNewTextObjects1Objects = Hashtable.newFrom({"NewText": gdjs.GameEasyCode.GDNewTextObjects1});
gdjs.GameEasyCode.asyncCallback16537212 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.GameEasyCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("NewText"), gdjs.GameEasyCode.GDNewTextObjects4);

{for(var i = 0, len = gdjs.GameEasyCode.GDNewTextObjects4.length ;i < len;++i) {
    gdjs.GameEasyCode.GDNewTextObjects4[i].deleteFromScene(runtimeScene);
}
}
{gdjs.evtTools.runtimeScene.setTimeScale(runtimeScene, 1);
}
gdjs.GameEasyCode.localVariables.length = 0;
}
gdjs.GameEasyCode.idToCallbackMap.set(16537212, gdjs.GameEasyCode.asyncCallback16537212);
gdjs.GameEasyCode.eventsList11 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.GameEasyCode.localVariables);
for (const obj of gdjs.GameEasyCode.GDNewTextObjects3) asyncObjectsList.addObject("NewText", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.GameEasyCode.asyncCallback16537212(runtimeScene, asyncObjectsList)), 16537212, asyncObjectsList);
}
}

}


};gdjs.GameEasyCode.asyncCallback16536964 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.GameEasyCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("NewText"), gdjs.GameEasyCode.GDNewTextObjects3);

{for(var i = 0, len = gdjs.GameEasyCode.GDNewTextObjects3.length ;i < len;++i) {
    gdjs.GameEasyCode.GDNewTextObjects3[i].getBehavior("Text").setText("1");
}
}

{ //Subevents
gdjs.GameEasyCode.eventsList11(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.GameEasyCode.localVariables.length = 0;
}
gdjs.GameEasyCode.idToCallbackMap.set(16536964, gdjs.GameEasyCode.asyncCallback16536964);
gdjs.GameEasyCode.eventsList12 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.GameEasyCode.localVariables);
for (const obj of gdjs.GameEasyCode.GDNewTextObjects2) asyncObjectsList.addObject("NewText", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.GameEasyCode.asyncCallback16536964(runtimeScene, asyncObjectsList)), 16536964, asyncObjectsList);
}
}

}


};gdjs.GameEasyCode.asyncCallback16536556 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.GameEasyCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("NewText"), gdjs.GameEasyCode.GDNewTextObjects2);

{for(var i = 0, len = gdjs.GameEasyCode.GDNewTextObjects2.length ;i < len;++i) {
    gdjs.GameEasyCode.GDNewTextObjects2[i].getBehavior("Text").setText("2");
}
}

{ //Subevents
gdjs.GameEasyCode.eventsList12(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.GameEasyCode.localVariables.length = 0;
}
gdjs.GameEasyCode.idToCallbackMap.set(16536556, gdjs.GameEasyCode.asyncCallback16536556);
gdjs.GameEasyCode.eventsList13 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.GameEasyCode.localVariables);
for (const obj of gdjs.GameEasyCode.GDNewTextObjects1) asyncObjectsList.addObject("NewText", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.GameEasyCode.asyncCallback16536556(runtimeScene, asyncObjectsList)), 16536556, asyncObjectsList);
}
}

}


};gdjs.GameEasyCode.eventsList14 = function(runtimeScene) {

{


gdjs.GameEasyCode.eventsList0(runtimeScene);
}


{


gdjs.GameEasyCode.eventsList4(runtimeScene);
}


{


gdjs.GameEasyCode.eventsList6(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("SkullGameOverDialog"), gdjs.GameEasyCode.GDSkullGameOverDialogObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameEasyCode.GDSkullGameOverDialogObjects1.length;i<l;++i) {
    if ( gdjs.GameEasyCode.GDSkullGameOverDialogObjects1[i].IsRestartClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.GameEasyCode.GDSkullGameOverDialogObjects1[k] = gdjs.GameEasyCode.GDSkullGameOverDialogObjects1[i];
        ++k;
    }
}
gdjs.GameEasyCode.GDSkullGameOverDialogObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GameEasy", false);
}
}

}


{


gdjs.GameEasyCode.eventsList7(runtimeScene);
}


{


gdjs.GameEasyCode.eventsList10(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("Remote_Back"), gdjs.GameEasyCode.GDRemote_9595BackObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameEasyCode.GDRemote_9595BackObjects1.length;i<l;++i) {
    if ( gdjs.GameEasyCode.GDRemote_9595BackObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.GameEasyCode.GDRemote_9595BackObjects1[k] = gdjs.GameEasyCode.GDRemote_9595BackObjects1[i];
        ++k;
    }
}
gdjs.GameEasyCode.GDRemote_9595BackObjects1.length = k;
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16536228);
}
}
if (isConditionTrue_0) {
gdjs.GameEasyCode.GDNewTextObjects1.length = 0;

{gdjs.evtTools.runtimeScene.setTimeScale(runtimeScene, 0);
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameEasyCode.mapOfGDgdjs_9546GameEasyCode_9546GDNewTextObjects1Objects, 590, 200, "");
}

{ //Subevents
gdjs.GameEasyCode.eventsList13(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.GameEasyCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameEasyCode.GDCarObjects1.length = 0;
gdjs.GameEasyCode.GDCarObjects2.length = 0;
gdjs.GameEasyCode.GDCarObjects3.length = 0;
gdjs.GameEasyCode.GDCarObjects4.length = 0;
gdjs.GameEasyCode.GDRoadObjects1.length = 0;
gdjs.GameEasyCode.GDRoadObjects2.length = 0;
gdjs.GameEasyCode.GDRoadObjects3.length = 0;
gdjs.GameEasyCode.GDRoadObjects4.length = 0;
gdjs.GameEasyCode.GDTpUpObjects1.length = 0;
gdjs.GameEasyCode.GDTpUpObjects2.length = 0;
gdjs.GameEasyCode.GDTpUpObjects3.length = 0;
gdjs.GameEasyCode.GDTpUpObjects4.length = 0;
gdjs.GameEasyCode.GDRampObjects1.length = 0;
gdjs.GameEasyCode.GDRampObjects2.length = 0;
gdjs.GameEasyCode.GDRampObjects3.length = 0;
gdjs.GameEasyCode.GDRampObjects4.length = 0;
gdjs.GameEasyCode.GDCarEnemyObjects1.length = 0;
gdjs.GameEasyCode.GDCarEnemyObjects2.length = 0;
gdjs.GameEasyCode.GDCarEnemyObjects3.length = 0;
gdjs.GameEasyCode.GDCarEnemyObjects4.length = 0;
gdjs.GameEasyCode.GDwarnObjects1.length = 0;
gdjs.GameEasyCode.GDwarnObjects2.length = 0;
gdjs.GameEasyCode.GDwarnObjects3.length = 0;
gdjs.GameEasyCode.GDwarnObjects4.length = 0;
gdjs.GameEasyCode.GDSkullGameOverDialogObjects1.length = 0;
gdjs.GameEasyCode.GDSkullGameOverDialogObjects2.length = 0;
gdjs.GameEasyCode.GDSkullGameOverDialogObjects3.length = 0;
gdjs.GameEasyCode.GDSkullGameOverDialogObjects4.length = 0;
gdjs.GameEasyCode.GDAddPointObjects1.length = 0;
gdjs.GameEasyCode.GDAddPointObjects2.length = 0;
gdjs.GameEasyCode.GDAddPointObjects3.length = 0;
gdjs.GameEasyCode.GDAddPointObjects4.length = 0;
gdjs.GameEasyCode.GDFlatHeartBarObjects1.length = 0;
gdjs.GameEasyCode.GDFlatHeartBarObjects2.length = 0;
gdjs.GameEasyCode.GDFlatHeartBarObjects3.length = 0;
gdjs.GameEasyCode.GDFlatHeartBarObjects4.length = 0;
gdjs.GameEasyCode.GDShieldObjects1.length = 0;
gdjs.GameEasyCode.GDShieldObjects2.length = 0;
gdjs.GameEasyCode.GDShieldObjects3.length = 0;
gdjs.GameEasyCode.GDShieldObjects4.length = 0;
gdjs.GameEasyCode.GDShieldItemObjects1.length = 0;
gdjs.GameEasyCode.GDShieldItemObjects2.length = 0;
gdjs.GameEasyCode.GDShieldItemObjects3.length = 0;
gdjs.GameEasyCode.GDShieldItemObjects4.length = 0;
gdjs.GameEasyCode.GDBananaObjects1.length = 0;
gdjs.GameEasyCode.GDBananaObjects2.length = 0;
gdjs.GameEasyCode.GDBananaObjects3.length = 0;
gdjs.GameEasyCode.GDBananaObjects4.length = 0;
gdjs.GameEasyCode.GDLeft_9595arrow_9595round_9595buttonObjects1.length = 0;
gdjs.GameEasyCode.GDLeft_9595arrow_9595round_9595buttonObjects2.length = 0;
gdjs.GameEasyCode.GDLeft_9595arrow_9595round_9595buttonObjects3.length = 0;
gdjs.GameEasyCode.GDLeft_9595arrow_9595round_9595buttonObjects4.length = 0;
gdjs.GameEasyCode.GDRight_9595arrow_9595round_9595buttonObjects1.length = 0;
gdjs.GameEasyCode.GDRight_9595arrow_9595round_9595buttonObjects2.length = 0;
gdjs.GameEasyCode.GDRight_9595arrow_9595round_9595buttonObjects3.length = 0;
gdjs.GameEasyCode.GDRight_9595arrow_9595round_9595buttonObjects4.length = 0;
gdjs.GameEasyCode.GDNewTextObjects1.length = 0;
gdjs.GameEasyCode.GDNewTextObjects2.length = 0;
gdjs.GameEasyCode.GDNewTextObjects3.length = 0;
gdjs.GameEasyCode.GDNewTextObjects4.length = 0;
gdjs.GameEasyCode.GDRemote_9595BackObjects1.length = 0;
gdjs.GameEasyCode.GDRemote_9595BackObjects2.length = 0;
gdjs.GameEasyCode.GDRemote_9595BackObjects3.length = 0;
gdjs.GameEasyCode.GDRemote_9595BackObjects4.length = 0;

gdjs.GameEasyCode.eventsList14(runtimeScene);
gdjs.GameEasyCode.GDCarObjects1.length = 0;
gdjs.GameEasyCode.GDCarObjects2.length = 0;
gdjs.GameEasyCode.GDCarObjects3.length = 0;
gdjs.GameEasyCode.GDCarObjects4.length = 0;
gdjs.GameEasyCode.GDRoadObjects1.length = 0;
gdjs.GameEasyCode.GDRoadObjects2.length = 0;
gdjs.GameEasyCode.GDRoadObjects3.length = 0;
gdjs.GameEasyCode.GDRoadObjects4.length = 0;
gdjs.GameEasyCode.GDTpUpObjects1.length = 0;
gdjs.GameEasyCode.GDTpUpObjects2.length = 0;
gdjs.GameEasyCode.GDTpUpObjects3.length = 0;
gdjs.GameEasyCode.GDTpUpObjects4.length = 0;
gdjs.GameEasyCode.GDRampObjects1.length = 0;
gdjs.GameEasyCode.GDRampObjects2.length = 0;
gdjs.GameEasyCode.GDRampObjects3.length = 0;
gdjs.GameEasyCode.GDRampObjects4.length = 0;
gdjs.GameEasyCode.GDCarEnemyObjects1.length = 0;
gdjs.GameEasyCode.GDCarEnemyObjects2.length = 0;
gdjs.GameEasyCode.GDCarEnemyObjects3.length = 0;
gdjs.GameEasyCode.GDCarEnemyObjects4.length = 0;
gdjs.GameEasyCode.GDwarnObjects1.length = 0;
gdjs.GameEasyCode.GDwarnObjects2.length = 0;
gdjs.GameEasyCode.GDwarnObjects3.length = 0;
gdjs.GameEasyCode.GDwarnObjects4.length = 0;
gdjs.GameEasyCode.GDSkullGameOverDialogObjects1.length = 0;
gdjs.GameEasyCode.GDSkullGameOverDialogObjects2.length = 0;
gdjs.GameEasyCode.GDSkullGameOverDialogObjects3.length = 0;
gdjs.GameEasyCode.GDSkullGameOverDialogObjects4.length = 0;
gdjs.GameEasyCode.GDAddPointObjects1.length = 0;
gdjs.GameEasyCode.GDAddPointObjects2.length = 0;
gdjs.GameEasyCode.GDAddPointObjects3.length = 0;
gdjs.GameEasyCode.GDAddPointObjects4.length = 0;
gdjs.GameEasyCode.GDFlatHeartBarObjects1.length = 0;
gdjs.GameEasyCode.GDFlatHeartBarObjects2.length = 0;
gdjs.GameEasyCode.GDFlatHeartBarObjects3.length = 0;
gdjs.GameEasyCode.GDFlatHeartBarObjects4.length = 0;
gdjs.GameEasyCode.GDShieldObjects1.length = 0;
gdjs.GameEasyCode.GDShieldObjects2.length = 0;
gdjs.GameEasyCode.GDShieldObjects3.length = 0;
gdjs.GameEasyCode.GDShieldObjects4.length = 0;
gdjs.GameEasyCode.GDShieldItemObjects1.length = 0;
gdjs.GameEasyCode.GDShieldItemObjects2.length = 0;
gdjs.GameEasyCode.GDShieldItemObjects3.length = 0;
gdjs.GameEasyCode.GDShieldItemObjects4.length = 0;
gdjs.GameEasyCode.GDBananaObjects1.length = 0;
gdjs.GameEasyCode.GDBananaObjects2.length = 0;
gdjs.GameEasyCode.GDBananaObjects3.length = 0;
gdjs.GameEasyCode.GDBananaObjects4.length = 0;
gdjs.GameEasyCode.GDLeft_9595arrow_9595round_9595buttonObjects1.length = 0;
gdjs.GameEasyCode.GDLeft_9595arrow_9595round_9595buttonObjects2.length = 0;
gdjs.GameEasyCode.GDLeft_9595arrow_9595round_9595buttonObjects3.length = 0;
gdjs.GameEasyCode.GDLeft_9595arrow_9595round_9595buttonObjects4.length = 0;
gdjs.GameEasyCode.GDRight_9595arrow_9595round_9595buttonObjects1.length = 0;
gdjs.GameEasyCode.GDRight_9595arrow_9595round_9595buttonObjects2.length = 0;
gdjs.GameEasyCode.GDRight_9595arrow_9595round_9595buttonObjects3.length = 0;
gdjs.GameEasyCode.GDRight_9595arrow_9595round_9595buttonObjects4.length = 0;
gdjs.GameEasyCode.GDNewTextObjects1.length = 0;
gdjs.GameEasyCode.GDNewTextObjects2.length = 0;
gdjs.GameEasyCode.GDNewTextObjects3.length = 0;
gdjs.GameEasyCode.GDNewTextObjects4.length = 0;
gdjs.GameEasyCode.GDRemote_9595BackObjects1.length = 0;
gdjs.GameEasyCode.GDRemote_9595BackObjects2.length = 0;
gdjs.GameEasyCode.GDRemote_9595BackObjects3.length = 0;
gdjs.GameEasyCode.GDRemote_9595BackObjects4.length = 0;


return;

}

gdjs['GameEasyCode'] = gdjs.GameEasyCode;
