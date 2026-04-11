
if (typeof gdjs.evtsExt__LeaderboardDialog__ToFixed !== "undefined") {
  gdjs.evtsExt__LeaderboardDialog__ToFixed.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__LeaderboardDialog__ToFixed = {};
gdjs.evtsExt__LeaderboardDialog__ToFixed.idToCallbackMap = new Map();


gdjs.evtsExt__LeaderboardDialog__ToFixed.userFunc0xdf8a98 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const valueToBeRounded = eventsFunctionContext.getArgument("ValueToBeRounded");
const numberOfDecimalPlaces = eventsFunctionContext.getArgument("NumberOfDecimalPlaces");
eventsFunctionContext.returnValue = valueToBeRounded.toFixed(numberOfDecimalPlaces);
};
gdjs.evtsExt__LeaderboardDialog__ToFixed.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
}

}


{


gdjs.evtsExt__LeaderboardDialog__ToFixed.userFunc0xdf8a98(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__LeaderboardDialog__ToFixed.func = function(runtimeScene, ValueToBeRounded, NumberOfDecimalPlaces, parentEventsFunctionContext) {
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
if (argName === "ValueToBeRounded") return ValueToBeRounded;
if (argName === "NumberOfDecimalPlaces") return NumberOfDecimalPlaces;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__LeaderboardDialog__ToFixed.eventsList0(runtimeScene, eventsFunctionContext);


return "" + eventsFunctionContext.returnValue;
}

gdjs.evtsExt__LeaderboardDialog__ToFixed.registeredGdjsCallbacks = [];