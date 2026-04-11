
if (typeof gdjs.evtsExt__LeaderboardDialog__PadStart !== "undefined") {
  gdjs.evtsExt__LeaderboardDialog__PadStart.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__LeaderboardDialog__PadStart = {};
gdjs.evtsExt__LeaderboardDialog__PadStart.idToCallbackMap = new Map();


gdjs.evtsExt__LeaderboardDialog__PadStart.userFunc0x9920b0 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const value = eventsFunctionContext.getArgument("Value");
const targetLength = eventsFunctionContext.getArgument("TargetLength");
const padString = eventsFunctionContext.getArgument("PadString");
eventsFunctionContext.returnValue = value.padStart(targetLength, padString);
};
gdjs.evtsExt__LeaderboardDialog__PadStart.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
}

}


{


gdjs.evtsExt__LeaderboardDialog__PadStart.userFunc0x9920b0(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__LeaderboardDialog__PadStart.func = function(runtimeScene, Value, TargetLength, PadString, parentEventsFunctionContext) {
let scopeInstanceContainer = null;
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("LeaderboardDialog"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("LeaderboardDialog"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Value") return Value;
if (argName === "TargetLength") return TargetLength;
if (argName === "PadString") return PadString;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__LeaderboardDialog__PadStart.eventsList0(runtimeScene, eventsFunctionContext);


return "" + eventsFunctionContext.returnValue;
}

gdjs.evtsExt__LeaderboardDialog__PadStart.registeredGdjsCallbacks = [];