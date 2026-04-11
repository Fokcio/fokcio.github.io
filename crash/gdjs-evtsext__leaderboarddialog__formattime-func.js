
if (typeof gdjs.evtsExt__LeaderboardDialog__FormatTime !== "undefined") {
  gdjs.evtsExt__LeaderboardDialog__FormatTime.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__LeaderboardDialog__FormatTime = {};
gdjs.evtsExt__LeaderboardDialog__FormatTime.idToCallbackMap = new Map();


gdjs.evtsExt__LeaderboardDialog__FormatTime.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = gdjs.evtTools.common.toString(eventsFunctionContext.getArgument("Time"));}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getArgument("Format") == "MM:SS.ms");
}
if (isConditionTrue_0) {
{eventsFunctionContext.returnValue = gdjs.evtsExt__LeaderboardDialog__PadStart.func(runtimeScene, gdjs.evtTools.common.toString(Math.floor(eventsFunctionContext.getArgument("Time") / 60)), 2, "0", eventsFunctionContext) + ":" + gdjs.evtsExt__LeaderboardDialog__PadStart.func(runtimeScene, gdjs.evtsExt__LeaderboardDialog__ToFixed.func(runtimeScene, gdjs.evtTools.common.mod(eventsFunctionContext.getArgument("Time"), 60), 3, eventsFunctionContext), 6, "0", eventsFunctionContext);}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getArgument("Format") == "MM:SS");
}
if (isConditionTrue_0) {
{eventsFunctionContext.returnValue = gdjs.evtsExt__LeaderboardDialog__PadStart.func(runtimeScene, gdjs.evtTools.common.toString(Math.floor(eventsFunctionContext.getArgument("Time") / 60)), 2, "0", eventsFunctionContext) + ":" + gdjs.evtsExt__LeaderboardDialog__PadStart.func(runtimeScene, gdjs.evtTools.common.toString(gdjs.evtTools.common.mod(Math.floor(eventsFunctionContext.getArgument("Time")), 60)), 2, "0", eventsFunctionContext);}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getArgument("Format") == "SS");
}
if (isConditionTrue_0) {
{eventsFunctionContext.returnValue = gdjs.evtsExt__LeaderboardDialog__ToFixed.func(runtimeScene, eventsFunctionContext.getArgument("Time"), 3, eventsFunctionContext);}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getArgument("Format") == "SS.ms");
}
if (isConditionTrue_0) {
{eventsFunctionContext.returnValue = gdjs.evtsExt__LeaderboardDialog__ToFixed.func(runtimeScene, eventsFunctionContext.getArgument("Time"), 3, eventsFunctionContext);}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getArgument("Format") == "ms");
}
if (isConditionTrue_0) {
{eventsFunctionContext.returnValue = gdjs.evtTools.common.toString(Math.floor(eventsFunctionContext.getArgument("Time") * 1000));}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getArgument("Format") == "HH:MM:SS.ms");
}
if (isConditionTrue_0) {
{eventsFunctionContext.returnValue = gdjs.evtsExt__LeaderboardDialog__PadStart.func(runtimeScene, gdjs.evtTools.common.toString(Math.floor(eventsFunctionContext.getArgument("Time") / 3600)), 2, "0", eventsFunctionContext) + ":" + gdjs.evtsExt__LeaderboardDialog__PadStart.func(runtimeScene, gdjs.evtTools.common.toString(gdjs.evtTools.common.mod(Math.floor(eventsFunctionContext.getArgument("Time") / 60), 60)), 2, "0", eventsFunctionContext) + ":" + gdjs.evtsExt__LeaderboardDialog__PadStart.func(runtimeScene, gdjs.evtsExt__LeaderboardDialog__ToFixed.func(runtimeScene, gdjs.evtTools.common.mod(eventsFunctionContext.getArgument("Time"), 60), 3, eventsFunctionContext), 6, "0", eventsFunctionContext);}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getArgument("Format") == "HH:MM:SS");
}
if (isConditionTrue_0) {
{eventsFunctionContext.returnValue = gdjs.evtsExt__LeaderboardDialog__PadStart.func(runtimeScene, gdjs.evtTools.common.toString(Math.floor(eventsFunctionContext.getArgument("Time") / 3600)), 2, "0", eventsFunctionContext) + ":" + gdjs.evtsExt__LeaderboardDialog__PadStart.func(runtimeScene, gdjs.evtTools.common.toString(gdjs.evtTools.common.mod(Math.floor(eventsFunctionContext.getArgument("Time") / 60), 60)), 2, "0", eventsFunctionContext) + ":" + gdjs.evtsExt__LeaderboardDialog__PadStart.func(runtimeScene, gdjs.evtTools.common.toString(gdjs.evtTools.common.mod(Math.floor(eventsFunctionContext.getArgument("Time")), 60)), 2, "0", eventsFunctionContext);}
}

}


};

gdjs.evtsExt__LeaderboardDialog__FormatTime.func = function(runtimeScene, Time, Format, parentEventsFunctionContext) {
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
if (argName === "Time") return Time;
if (argName === "Format") return Format;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__LeaderboardDialog__FormatTime.eventsList0(runtimeScene, eventsFunctionContext);


return "" + eventsFunctionContext.returnValue;
}

gdjs.evtsExt__LeaderboardDialog__FormatTime.registeredGdjsCallbacks = [];