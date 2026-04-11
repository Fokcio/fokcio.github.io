
if (typeof gdjs.evtsExt__TiledUnitsBar__RightEdgeAnchor !== "undefined") {
  gdjs.evtsExt__TiledUnitsBar__RightEdgeAnchor.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__TiledUnitsBar__RightEdgeAnchor = {};
gdjs.evtsExt__TiledUnitsBar__RightEdgeAnchor.idToCallbackMap = new Map();
gdjs.evtsExt__TiledUnitsBar__RightEdgeAnchor.GDObjectObjects1= [];


gdjs.evtsExt__TiledUnitsBar__RightEdgeAnchor.userFunc0xe03138 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
gdjs._TiledUnitsBarExtension = gdjs._TiledUnitsBarExtension || {
    anchors: ["None", "Min", "Max", "Proportional", "Center"]
}
const { anchors } = gdjs._TiledUnitsBarExtension;

const object = objects[0];
/** @type {gdjs.AnchorRuntimeBehavior} */
const anchor = object.getBehavior(eventsFunctionContext.getBehaviorName("Anchor"));
eventsFunctionContext.returnValue = anchors[anchor._rightEdgeAnchor] || "None";

};
gdjs.evtsExt__TiledUnitsBar__RightEdgeAnchor.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TiledUnitsBar__RightEdgeAnchor.GDObjectObjects1);

const objects = gdjs.evtsExt__TiledUnitsBar__RightEdgeAnchor.GDObjectObjects1;
gdjs.evtsExt__TiledUnitsBar__RightEdgeAnchor.userFunc0xe03138(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__TiledUnitsBar__RightEdgeAnchor.func = function(runtimeScene, Object, Anchor, parentEventsFunctionContext) {
let scopeInstanceContainer = null;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": gdjs.objectsListsToArray(Object)
},
  _behaviorNamesMap: {
"Anchor": Anchor
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("TiledUnitsBar"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("TiledUnitsBar"),
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
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__TiledUnitsBar__RightEdgeAnchor.GDObjectObjects1.length = 0;

gdjs.evtsExt__TiledUnitsBar__RightEdgeAnchor.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__TiledUnitsBar__RightEdgeAnchor.GDObjectObjects1.length = 0;


return "" + eventsFunctionContext.returnValue;
}

gdjs.evtsExt__TiledUnitsBar__RightEdgeAnchor.registeredGdjsCallbacks = [];