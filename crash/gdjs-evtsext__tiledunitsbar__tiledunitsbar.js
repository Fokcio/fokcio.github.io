
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar = gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar || {};

/**
 * Object generated from Resource bar (separated units)
 */
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar = class TiledUnitsBar extends gdjs.CustomRuntimeObject2D {
  constructor(parentInstanceContainer, objectData, instanceData) {
    super(parentInstanceContainer, objectData, instanceData);
    this._parentInstanceContainer = parentInstanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._objectData = {};
    
    this._objectData.MaxValue = objectData.content.MaxValue !== undefined ? objectData.content.MaxValue : Number("3") || 0;
    this._objectData.InitialValue = objectData.content.InitialValue !== undefined ? objectData.content.InitialValue : Number("3") || 0;
    this._objectData.PreviousInitialValue = Number("") || 0;
    this._objectData.UnitWidth = objectData.content.UnitWidth !== undefined ? objectData.content.UnitWidth : Number("24") || 0;
    

    // It calls the onCreated super implementation at the end.
    this.onCreated();
  }

  // Hot-reload:
  updateFromObjectData(oldObjectData, newObjectData) {
    super.updateFromObjectData(oldObjectData, newObjectData);
    if (oldObjectData.content.MaxValue !== newObjectData.content.MaxValue)
      this._objectData.MaxValue = newObjectData.content.MaxValue;
    if (oldObjectData.content.InitialValue !== newObjectData.content.InitialValue)
      this._objectData.InitialValue = newObjectData.content.InitialValue;
    if (oldObjectData.content.PreviousInitialValue !== newObjectData.content.PreviousInitialValue)
      this._objectData.PreviousInitialValue = newObjectData.content.PreviousInitialValue;
    if (oldObjectData.content.UnitWidth !== newObjectData.content.UnitWidth)
      this._objectData.UnitWidth = newObjectData.content.UnitWidth;

    this.onHotReloading(this._parentInstanceContainer);
    return true;
  }

  // Properties:
  
  _getMaxValue() {
    return this._objectData.MaxValue !== undefined ? this._objectData.MaxValue : Number("3") || 0;
  }
  _setMaxValue(newValue) {
    this._objectData.MaxValue = newValue;
  }
  _getInitialValue() {
    return this._objectData.InitialValue !== undefined ? this._objectData.InitialValue : Number("3") || 0;
  }
  _setInitialValue(newValue) {
    this._objectData.InitialValue = newValue;
  }
  _getPreviousInitialValue() {
    return this._objectData.PreviousInitialValue !== undefined ? this._objectData.PreviousInitialValue : Number("") || 0;
  }
  _setPreviousInitialValue(newValue) {
    this._objectData.PreviousInitialValue = newValue;
  }
  _getUnitWidth() {
    return this._objectData.UnitWidth !== undefined ? this._objectData.UnitWidth : Number("24") || 0;
  }
  _setUnitWidth(newValue) {
    this._objectData.UnitWidth = newValue;
  }

  

  
}

// Methods:
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.onCreatedContext = {};
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.onCreatedContext.idToCallbackMap = new Map();
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.onCreatedContext.GDObjectObjects1= [];
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.onCreatedContext.GDObjectObjects2= [];
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.onCreatedContext.GDFillBarObjects1= [];
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.onCreatedContext.GDFillBarObjects2= [];
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.onCreatedContext.GDBarObjects1= [];
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.onCreatedContext.GDBarObjects2= [];
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.onCreatedContext.GDBackgroundObjects1= [];
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.onCreatedContext.GDBackgroundObjects2= [];


gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.onCreatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0]._setPreviousInitialValue(eventsFunctionContext.getObjects("Object")[0]._getInitialValue())
}
}

}


};

gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.onCreated = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDFillBarObjectsList = [...runtimeScene.getObjects("FillBar")];
var GDFillBarObjects = Hashtable.newFrom({"FillBar": thisGDFillBarObjectsList});
var thisGDBarObjectsList = [...runtimeScene.getObjects("Bar")];
var GDBarObjects = Hashtable.newFrom({"Bar": thisGDBarObjectsList});
var thisGDBackgroundObjectsList = [...runtimeScene.getObjects("Background")];
var GDBackgroundObjects = Hashtable.newFrom({"Background": thisGDBackgroundObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "FillBar": GDFillBarObjects
, "Bar": GDBarObjects
, "Background": GDBackgroundObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "FillBar": thisGDFillBarObjectsList
, "Bar": thisGDBarObjectsList
, "Background": thisGDBackgroundObjectsList
},
  _behaviorNamesMap: {
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.onCreatedContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.onCreatedContext.GDFillBarObjects1.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.onCreatedContext.GDFillBarObjects2.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.onCreatedContext.GDBarObjects1.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.onCreatedContext.GDBarObjects2.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.onCreatedContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.onCreatedContext.GDBackgroundObjects2.length = 0;

gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.onCreatedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.onCreatedContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.onCreatedContext.GDFillBarObjects1.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.onCreatedContext.GDFillBarObjects2.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.onCreatedContext.GDBarObjects1.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.onCreatedContext.GDBarObjects2.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.onCreatedContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.onCreatedContext.GDBackgroundObjects2.length = 0;

gdjs.CustomRuntimeObject.prototype.onCreated.call(this);

return;
}
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.doStepPostEventsContext = {};
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.doStepPostEventsContext.idToCallbackMap = new Map();
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.doStepPostEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.doStepPostEventsContext.GDObjectObjects2= [];
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.doStepPostEventsContext.GDFillBarObjects1= [];
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.doStepPostEventsContext.GDFillBarObjects2= [];
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.doStepPostEventsContext.GDBarObjects1= [];
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.doStepPostEventsContext.GDBarObjects2= [];
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.doStepPostEventsContext.GDBackgroundObjects1= [];
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.doStepPostEventsContext.GDBackgroundObjects2= [];


gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.doStepPostEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(15953404);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.doStepPostEventsContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.doStepPostEventsContext.GDObjectObjects1[i].SetMaxValue(eventsFunctionContext.getObjects("Object")[0]._getMaxValue(), eventsFunctionContext);
}
}
{for(var i = 0, len = gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.doStepPostEventsContext.GDObjectObjects1[i].SetValue(eventsFunctionContext.getObjects("Object")[0]._getInitialValue(), eventsFunctionContext);
}
}
}

}


};

gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.doStepPostEvents = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDFillBarObjectsList = [...runtimeScene.getObjects("FillBar")];
var GDFillBarObjects = Hashtable.newFrom({"FillBar": thisGDFillBarObjectsList});
var thisGDBarObjectsList = [...runtimeScene.getObjects("Bar")];
var GDBarObjects = Hashtable.newFrom({"Bar": thisGDBarObjectsList});
var thisGDBackgroundObjectsList = [...runtimeScene.getObjects("Background")];
var GDBackgroundObjects = Hashtable.newFrom({"Background": thisGDBackgroundObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "FillBar": GDFillBarObjects
, "Bar": GDBarObjects
, "Background": GDBackgroundObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "FillBar": thisGDFillBarObjectsList
, "Bar": thisGDBarObjectsList
, "Background": thisGDBackgroundObjectsList
},
  _behaviorNamesMap: {
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.doStepPostEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.doStepPostEventsContext.GDFillBarObjects1.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.doStepPostEventsContext.GDFillBarObjects2.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.doStepPostEventsContext.GDBarObjects1.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.doStepPostEventsContext.GDBarObjects2.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.doStepPostEventsContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.doStepPostEventsContext.GDBackgroundObjects2.length = 0;

gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.doStepPostEventsContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.doStepPostEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.doStepPostEventsContext.GDFillBarObjects1.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.doStepPostEventsContext.GDFillBarObjects2.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.doStepPostEventsContext.GDBarObjects1.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.doStepPostEventsContext.GDBarObjects2.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.doStepPostEventsContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.doStepPostEventsContext.GDBackgroundObjects2.length = 0;


return;
}
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.onHotReloadingContext = {};
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.onHotReloadingContext.idToCallbackMap = new Map();
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.onHotReloadingContext.GDObjectObjects1= [];
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.onHotReloadingContext.GDObjectObjects2= [];
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.onHotReloadingContext.GDFillBarObjects1= [];
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.onHotReloadingContext.GDFillBarObjects2= [];
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.onHotReloadingContext.GDBarObjects1= [];
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.onHotReloadingContext.GDBarObjects2= [];
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.onHotReloadingContext.GDBackgroundObjects1= [];
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.onHotReloadingContext.GDBackgroundObjects2= [];


gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.onHotReloadingContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.onHotReloadingContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.onHotReloadingContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.onHotReloadingContext.GDObjectObjects1[i].SetUnitWidth(eventsFunctionContext.getObjects("Object")[0]._getUnitWidth(), eventsFunctionContext);
}
}
{for(var i = 0, len = gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.onHotReloadingContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.onHotReloadingContext.GDObjectObjects1[i].SetMaxValue(eventsFunctionContext.getObjects("Object")[0]._getMaxValue(), eventsFunctionContext);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getObjects("Object")[0]._getInitialValue() != eventsFunctionContext.getObjects("Object")[0]._getPreviousInitialValue());
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.onHotReloadingContext.GDObjectObjects1);
{eventsFunctionContext.getObjects("Object")[0]._setPreviousInitialValue(eventsFunctionContext.getObjects("Object")[0]._getInitialValue())
}
{for(var i = 0, len = gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.onHotReloadingContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.onHotReloadingContext.GDObjectObjects1[i].SetValue(eventsFunctionContext.getObjects("Object")[0]._getInitialValue(), eventsFunctionContext);
}
}
}

}


};

gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.onHotReloading = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDFillBarObjectsList = [...runtimeScene.getObjects("FillBar")];
var GDFillBarObjects = Hashtable.newFrom({"FillBar": thisGDFillBarObjectsList});
var thisGDBarObjectsList = [...runtimeScene.getObjects("Bar")];
var GDBarObjects = Hashtable.newFrom({"Bar": thisGDBarObjectsList});
var thisGDBackgroundObjectsList = [...runtimeScene.getObjects("Background")];
var GDBackgroundObjects = Hashtable.newFrom({"Background": thisGDBackgroundObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "FillBar": GDFillBarObjects
, "Bar": GDBarObjects
, "Background": GDBackgroundObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "FillBar": thisGDFillBarObjectsList
, "Bar": thisGDBarObjectsList
, "Background": thisGDBackgroundObjectsList
},
  _behaviorNamesMap: {
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.onHotReloadingContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.onHotReloadingContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.onHotReloadingContext.GDFillBarObjects1.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.onHotReloadingContext.GDFillBarObjects2.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.onHotReloadingContext.GDBarObjects1.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.onHotReloadingContext.GDBarObjects2.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.onHotReloadingContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.onHotReloadingContext.GDBackgroundObjects2.length = 0;

gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.onHotReloadingContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.onHotReloadingContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.onHotReloadingContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.onHotReloadingContext.GDFillBarObjects1.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.onHotReloadingContext.GDFillBarObjects2.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.onHotReloadingContext.GDBarObjects1.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.onHotReloadingContext.GDBarObjects2.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.onHotReloadingContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.onHotReloadingContext.GDBackgroundObjects2.length = 0;


return;
}
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.ValueContext = {};
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.ValueContext.idToCallbackMap = new Map();
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.ValueContext.GDObjectObjects1= [];
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.ValueContext.GDObjectObjects2= [];
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.ValueContext.GDFillBarObjects1= [];
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.ValueContext.GDFillBarObjects2= [];
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.ValueContext.GDBarObjects1= [];
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.ValueContext.GDBarObjects2= [];
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.ValueContext.GDBackgroundObjects1= [];
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.ValueContext.GDBackgroundObjects2= [];


gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.ValueContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("FillBar"), gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.ValueContext.GDFillBarObjects1);
{eventsFunctionContext.returnValue = (( gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.ValueContext.GDFillBarObjects1.length === 0 ) ? 0 :gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.ValueContext.GDFillBarObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("ResourceBar")).Value(eventsFunctionContext));}
}

}


};

gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.Value = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDFillBarObjectsList = [...runtimeScene.getObjects("FillBar")];
var GDFillBarObjects = Hashtable.newFrom({"FillBar": thisGDFillBarObjectsList});
var thisGDBarObjectsList = [...runtimeScene.getObjects("Bar")];
var GDBarObjects = Hashtable.newFrom({"Bar": thisGDBarObjectsList});
var thisGDBackgroundObjectsList = [...runtimeScene.getObjects("Background")];
var GDBackgroundObjects = Hashtable.newFrom({"Background": thisGDBackgroundObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "FillBar": GDFillBarObjects
, "Bar": GDBarObjects
, "Background": GDBackgroundObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "FillBar": thisGDFillBarObjectsList
, "Bar": thisGDBarObjectsList
, "Background": thisGDBackgroundObjectsList
},
  _behaviorNamesMap: {
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.ValueContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.ValueContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.ValueContext.GDFillBarObjects1.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.ValueContext.GDFillBarObjects2.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.ValueContext.GDBarObjects1.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.ValueContext.GDBarObjects2.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.ValueContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.ValueContext.GDBackgroundObjects2.length = 0;

gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.ValueContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.ValueContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.ValueContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.ValueContext.GDFillBarObjects1.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.ValueContext.GDFillBarObjects2.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.ValueContext.GDBarObjects1.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.ValueContext.GDBarObjects2.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.ValueContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.ValueContext.GDBackgroundObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.SetValueContext = {};
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.SetValueContext.idToCallbackMap = new Map();
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.SetValueContext.GDObjectObjects1= [];
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.SetValueContext.GDObjectObjects2= [];
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.SetValueContext.GDFillBarObjects1= [];
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.SetValueContext.GDFillBarObjects2= [];
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.SetValueContext.GDBarObjects1= [];
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.SetValueContext.GDBarObjects2= [];
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.SetValueContext.GDBackgroundObjects1= [];
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.SetValueContext.GDBackgroundObjects2= [];


gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.SetValueContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("FillBar"), gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.SetValueContext.GDFillBarObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.SetValueContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.SetValueContext.GDFillBarObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.SetValueContext.GDFillBarObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("ResourceBar")).SetValue(eventsFunctionContext.getArgument("Value"), eventsFunctionContext);
}
}
{for(var i = 0, len = gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.SetValueContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.SetValueContext.GDObjectObjects1[i].UpdateBarWidth(eventsFunctionContext);
}
}
}

}


};

gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.SetValue = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDFillBarObjectsList = [...runtimeScene.getObjects("FillBar")];
var GDFillBarObjects = Hashtable.newFrom({"FillBar": thisGDFillBarObjectsList});
var thisGDBarObjectsList = [...runtimeScene.getObjects("Bar")];
var GDBarObjects = Hashtable.newFrom({"Bar": thisGDBarObjectsList});
var thisGDBackgroundObjectsList = [...runtimeScene.getObjects("Background")];
var GDBackgroundObjects = Hashtable.newFrom({"Background": thisGDBackgroundObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "FillBar": GDFillBarObjects
, "Bar": GDBarObjects
, "Background": GDBackgroundObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "FillBar": thisGDFillBarObjectsList
, "Bar": thisGDBarObjectsList
, "Background": thisGDBackgroundObjectsList
},
  _behaviorNamesMap: {
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.SetValueContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.SetValueContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.SetValueContext.GDFillBarObjects1.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.SetValueContext.GDFillBarObjects2.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.SetValueContext.GDBarObjects1.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.SetValueContext.GDBarObjects2.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.SetValueContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.SetValueContext.GDBackgroundObjects2.length = 0;

gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.SetValueContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.SetValueContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.SetValueContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.SetValueContext.GDFillBarObjects1.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.SetValueContext.GDFillBarObjects2.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.SetValueContext.GDBarObjects1.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.SetValueContext.GDBarObjects2.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.SetValueContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.SetValueContext.GDBackgroundObjects2.length = 0;


return;
}
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.MaxValueContext = {};
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.MaxValueContext.idToCallbackMap = new Map();
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.MaxValueContext.GDObjectObjects1= [];
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.MaxValueContext.GDObjectObjects2= [];
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.MaxValueContext.GDFillBarObjects1= [];
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.MaxValueContext.GDFillBarObjects2= [];
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.MaxValueContext.GDBarObjects1= [];
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.MaxValueContext.GDBarObjects2= [];
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.MaxValueContext.GDBackgroundObjects1= [];
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.MaxValueContext.GDBackgroundObjects2= [];


gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.MaxValueContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("FillBar"), gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.MaxValueContext.GDFillBarObjects1);
{eventsFunctionContext.returnValue = (( gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.MaxValueContext.GDFillBarObjects1.length === 0 ) ? 0 :gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.MaxValueContext.GDFillBarObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("ResourceBar")).MaxValue(eventsFunctionContext));}
}

}


};

gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.MaxValue = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDFillBarObjectsList = [...runtimeScene.getObjects("FillBar")];
var GDFillBarObjects = Hashtable.newFrom({"FillBar": thisGDFillBarObjectsList});
var thisGDBarObjectsList = [...runtimeScene.getObjects("Bar")];
var GDBarObjects = Hashtable.newFrom({"Bar": thisGDBarObjectsList});
var thisGDBackgroundObjectsList = [...runtimeScene.getObjects("Background")];
var GDBackgroundObjects = Hashtable.newFrom({"Background": thisGDBackgroundObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "FillBar": GDFillBarObjects
, "Bar": GDBarObjects
, "Background": GDBackgroundObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "FillBar": thisGDFillBarObjectsList
, "Bar": thisGDBarObjectsList
, "Background": thisGDBackgroundObjectsList
},
  _behaviorNamesMap: {
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.MaxValueContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.MaxValueContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.MaxValueContext.GDFillBarObjects1.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.MaxValueContext.GDFillBarObjects2.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.MaxValueContext.GDBarObjects1.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.MaxValueContext.GDBarObjects2.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.MaxValueContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.MaxValueContext.GDBackgroundObjects2.length = 0;

gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.MaxValueContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.MaxValueContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.MaxValueContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.MaxValueContext.GDFillBarObjects1.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.MaxValueContext.GDFillBarObjects2.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.MaxValueContext.GDBarObjects1.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.MaxValueContext.GDBarObjects2.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.MaxValueContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.MaxValueContext.GDBackgroundObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.SetMaxValueContext = {};
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.SetMaxValueContext.idToCallbackMap = new Map();
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.SetMaxValueContext.GDObjectObjects1= [];
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.SetMaxValueContext.GDObjectObjects2= [];
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.SetMaxValueContext.GDFillBarObjects1= [];
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.SetMaxValueContext.GDFillBarObjects2= [];
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.SetMaxValueContext.GDBarObjects1= [];
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.SetMaxValueContext.GDBarObjects2= [];
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.SetMaxValueContext.GDBackgroundObjects1= [];
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.SetMaxValueContext.GDBackgroundObjects2= [];


gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.SetMaxValueContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("FillBar"), gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.SetMaxValueContext.GDFillBarObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.SetMaxValueContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.SetMaxValueContext.GDFillBarObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.SetMaxValueContext.GDFillBarObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("ResourceBar")).SetMaxValue(eventsFunctionContext.getArgument("Value"), eventsFunctionContext);
}
}
{for(var i = 0, len = gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.SetMaxValueContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.SetMaxValueContext.GDObjectObjects1[i].SetValue((gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.SetMaxValueContext.GDObjectObjects1[i].Value(eventsFunctionContext)), eventsFunctionContext);
}
}
}

}


};

gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.SetMaxValue = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDFillBarObjectsList = [...runtimeScene.getObjects("FillBar")];
var GDFillBarObjects = Hashtable.newFrom({"FillBar": thisGDFillBarObjectsList});
var thisGDBarObjectsList = [...runtimeScene.getObjects("Bar")];
var GDBarObjects = Hashtable.newFrom({"Bar": thisGDBarObjectsList});
var thisGDBackgroundObjectsList = [...runtimeScene.getObjects("Background")];
var GDBackgroundObjects = Hashtable.newFrom({"Background": thisGDBackgroundObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "FillBar": GDFillBarObjects
, "Bar": GDBarObjects
, "Background": GDBackgroundObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "FillBar": thisGDFillBarObjectsList
, "Bar": thisGDBarObjectsList
, "Background": thisGDBackgroundObjectsList
},
  _behaviorNamesMap: {
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.SetMaxValueContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.SetMaxValueContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.SetMaxValueContext.GDFillBarObjects1.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.SetMaxValueContext.GDFillBarObjects2.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.SetMaxValueContext.GDBarObjects1.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.SetMaxValueContext.GDBarObjects2.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.SetMaxValueContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.SetMaxValueContext.GDBackgroundObjects2.length = 0;

gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.SetMaxValueContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.SetMaxValueContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.SetMaxValueContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.SetMaxValueContext.GDFillBarObjects1.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.SetMaxValueContext.GDFillBarObjects2.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.SetMaxValueContext.GDBarObjects1.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.SetMaxValueContext.GDBarObjects2.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.SetMaxValueContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.SetMaxValueContext.GDBackgroundObjects2.length = 0;


return;
}
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.IsEmptyContext = {};
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.IsEmptyContext.idToCallbackMap = new Map();
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.IsEmptyContext.GDObjectObjects1= [];
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.IsEmptyContext.GDObjectObjects2= [];
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.IsEmptyContext.GDFillBarObjects1= [];
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.IsEmptyContext.GDFillBarObjects2= [];
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.IsEmptyContext.GDBarObjects1= [];
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.IsEmptyContext.GDBarObjects2= [];
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.IsEmptyContext.GDBackgroundObjects1= [];
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.IsEmptyContext.GDBackgroundObjects2= [];


gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.IsEmptyContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("FillBar"), gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.IsEmptyContext.GDFillBarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.IsEmptyContext.GDFillBarObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.IsEmptyContext.GDFillBarObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("ResourceBar")).IsEmpty(eventsFunctionContext) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.IsEmptyContext.GDFillBarObjects1[k] = gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.IsEmptyContext.GDFillBarObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.IsEmptyContext.GDFillBarObjects1.length = k;
if (isConditionTrue_0) {
{eventsFunctionContext.returnValue = true;}
}

}


};

gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.IsEmpty = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDFillBarObjectsList = [...runtimeScene.getObjects("FillBar")];
var GDFillBarObjects = Hashtable.newFrom({"FillBar": thisGDFillBarObjectsList});
var thisGDBarObjectsList = [...runtimeScene.getObjects("Bar")];
var GDBarObjects = Hashtable.newFrom({"Bar": thisGDBarObjectsList});
var thisGDBackgroundObjectsList = [...runtimeScene.getObjects("Background")];
var GDBackgroundObjects = Hashtable.newFrom({"Background": thisGDBackgroundObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "FillBar": GDFillBarObjects
, "Bar": GDBarObjects
, "Background": GDBackgroundObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "FillBar": thisGDFillBarObjectsList
, "Bar": thisGDBarObjectsList
, "Background": thisGDBackgroundObjectsList
},
  _behaviorNamesMap: {
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.IsEmptyContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.IsEmptyContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.IsEmptyContext.GDFillBarObjects1.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.IsEmptyContext.GDFillBarObjects2.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.IsEmptyContext.GDBarObjects1.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.IsEmptyContext.GDBarObjects2.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.IsEmptyContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.IsEmptyContext.GDBackgroundObjects2.length = 0;

gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.IsEmptyContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.IsEmptyContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.IsEmptyContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.IsEmptyContext.GDFillBarObjects1.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.IsEmptyContext.GDFillBarObjects2.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.IsEmptyContext.GDBarObjects1.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.IsEmptyContext.GDBarObjects2.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.IsEmptyContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.IsEmptyContext.GDBackgroundObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.IsFullContext = {};
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.IsFullContext.idToCallbackMap = new Map();
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.IsFullContext.GDObjectObjects1= [];
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.IsFullContext.GDObjectObjects2= [];
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.IsFullContext.GDFillBarObjects1= [];
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.IsFullContext.GDFillBarObjects2= [];
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.IsFullContext.GDBarObjects1= [];
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.IsFullContext.GDBarObjects2= [];
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.IsFullContext.GDBackgroundObjects1= [];
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.IsFullContext.GDBackgroundObjects2= [];


gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.IsFullContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("FillBar"), gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.IsFullContext.GDFillBarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.IsFullContext.GDFillBarObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.IsFullContext.GDFillBarObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("ResourceBar")).IsFull(eventsFunctionContext) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.IsFullContext.GDFillBarObjects1[k] = gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.IsFullContext.GDFillBarObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.IsFullContext.GDFillBarObjects1.length = k;
if (isConditionTrue_0) {
{eventsFunctionContext.returnValue = true;}
}

}


};

gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.IsFull = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDFillBarObjectsList = [...runtimeScene.getObjects("FillBar")];
var GDFillBarObjects = Hashtable.newFrom({"FillBar": thisGDFillBarObjectsList});
var thisGDBarObjectsList = [...runtimeScene.getObjects("Bar")];
var GDBarObjects = Hashtable.newFrom({"Bar": thisGDBarObjectsList});
var thisGDBackgroundObjectsList = [...runtimeScene.getObjects("Background")];
var GDBackgroundObjects = Hashtable.newFrom({"Background": thisGDBackgroundObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "FillBar": GDFillBarObjects
, "Bar": GDBarObjects
, "Background": GDBackgroundObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "FillBar": thisGDFillBarObjectsList
, "Bar": thisGDBarObjectsList
, "Background": thisGDBackgroundObjectsList
},
  _behaviorNamesMap: {
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.IsFullContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.IsFullContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.IsFullContext.GDFillBarObjects1.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.IsFullContext.GDFillBarObjects2.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.IsFullContext.GDBarObjects1.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.IsFullContext.GDBarObjects2.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.IsFullContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.IsFullContext.GDBackgroundObjects2.length = 0;

gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.IsFullContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.IsFullContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.IsFullContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.IsFullContext.GDFillBarObjects1.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.IsFullContext.GDFillBarObjects2.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.IsFullContext.GDBarObjects1.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.IsFullContext.GDBarObjects2.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.IsFullContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.IsFullContext.GDBackgroundObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.UnitWidthContext = {};
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.UnitWidthContext.idToCallbackMap = new Map();
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.UnitWidthContext.GDObjectObjects1= [];
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.UnitWidthContext.GDObjectObjects2= [];
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.UnitWidthContext.GDFillBarObjects1= [];
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.UnitWidthContext.GDFillBarObjects2= [];
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.UnitWidthContext.GDBarObjects1= [];
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.UnitWidthContext.GDBarObjects2= [];
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.UnitWidthContext.GDBackgroundObjects1= [];
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.UnitWidthContext.GDBackgroundObjects2= [];


gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.UnitWidthContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0]._getUnitWidth();}
}

}


};

gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.UnitWidth = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDFillBarObjectsList = [...runtimeScene.getObjects("FillBar")];
var GDFillBarObjects = Hashtable.newFrom({"FillBar": thisGDFillBarObjectsList});
var thisGDBarObjectsList = [...runtimeScene.getObjects("Bar")];
var GDBarObjects = Hashtable.newFrom({"Bar": thisGDBarObjectsList});
var thisGDBackgroundObjectsList = [...runtimeScene.getObjects("Background")];
var GDBackgroundObjects = Hashtable.newFrom({"Background": thisGDBackgroundObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "FillBar": GDFillBarObjects
, "Bar": GDBarObjects
, "Background": GDBackgroundObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "FillBar": thisGDFillBarObjectsList
, "Bar": thisGDBarObjectsList
, "Background": thisGDBackgroundObjectsList
},
  _behaviorNamesMap: {
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.UnitWidthContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.UnitWidthContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.UnitWidthContext.GDFillBarObjects1.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.UnitWidthContext.GDFillBarObjects2.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.UnitWidthContext.GDBarObjects1.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.UnitWidthContext.GDBarObjects2.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.UnitWidthContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.UnitWidthContext.GDBackgroundObjects2.length = 0;

gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.UnitWidthContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.UnitWidthContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.UnitWidthContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.UnitWidthContext.GDFillBarObjects1.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.UnitWidthContext.GDFillBarObjects2.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.UnitWidthContext.GDBarObjects1.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.UnitWidthContext.GDBarObjects2.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.UnitWidthContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.UnitWidthContext.GDBackgroundObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.SetUnitWidthContext = {};
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.SetUnitWidthContext.idToCallbackMap = new Map();
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.SetUnitWidthContext.GDObjectObjects1= [];
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.SetUnitWidthContext.GDObjectObjects2= [];
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.SetUnitWidthContext.GDFillBarObjects1= [];
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.SetUnitWidthContext.GDFillBarObjects2= [];
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.SetUnitWidthContext.GDBarObjects1= [];
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.SetUnitWidthContext.GDBarObjects2= [];
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.SetUnitWidthContext.GDBackgroundObjects1= [];
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.SetUnitWidthContext.GDBackgroundObjects2= [];


gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.SetUnitWidthContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.SetUnitWidthContext.GDObjectObjects1);
{eventsFunctionContext.getObjects("Object")[0]._setUnitWidth(eventsFunctionContext.getArgument("Value"))
}
{for(var i = 0, len = gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.SetUnitWidthContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.SetUnitWidthContext.GDObjectObjects1[i].UpdateBarWidth(eventsFunctionContext);
}
}
}

}


};

gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.SetUnitWidth = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDFillBarObjectsList = [...runtimeScene.getObjects("FillBar")];
var GDFillBarObjects = Hashtable.newFrom({"FillBar": thisGDFillBarObjectsList});
var thisGDBarObjectsList = [...runtimeScene.getObjects("Bar")];
var GDBarObjects = Hashtable.newFrom({"Bar": thisGDBarObjectsList});
var thisGDBackgroundObjectsList = [...runtimeScene.getObjects("Background")];
var GDBackgroundObjects = Hashtable.newFrom({"Background": thisGDBackgroundObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "FillBar": GDFillBarObjects
, "Bar": GDBarObjects
, "Background": GDBackgroundObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "FillBar": thisGDFillBarObjectsList
, "Bar": thisGDBarObjectsList
, "Background": thisGDBackgroundObjectsList
},
  _behaviorNamesMap: {
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.SetUnitWidthContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.SetUnitWidthContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.SetUnitWidthContext.GDFillBarObjects1.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.SetUnitWidthContext.GDFillBarObjects2.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.SetUnitWidthContext.GDBarObjects1.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.SetUnitWidthContext.GDBarObjects2.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.SetUnitWidthContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.SetUnitWidthContext.GDBackgroundObjects2.length = 0;

gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.SetUnitWidthContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.SetUnitWidthContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.SetUnitWidthContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.SetUnitWidthContext.GDFillBarObjects1.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.SetUnitWidthContext.GDFillBarObjects2.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.SetUnitWidthContext.GDBarObjects1.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.SetUnitWidthContext.GDBarObjects2.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.SetUnitWidthContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.SetUnitWidthContext.GDBackgroundObjects2.length = 0;


return;
}
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.UpdateBarWidthContext = {};
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.UpdateBarWidthContext.idToCallbackMap = new Map();
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.UpdateBarWidthContext.GDObjectObjects1= [];
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.UpdateBarWidthContext.GDObjectObjects2= [];
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.UpdateBarWidthContext.GDObjectObjects3= [];
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.UpdateBarWidthContext.GDFillBarObjects1= [];
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.UpdateBarWidthContext.GDFillBarObjects2= [];
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.UpdateBarWidthContext.GDFillBarObjects3= [];
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.UpdateBarWidthContext.GDBarObjects1= [];
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.UpdateBarWidthContext.GDBarObjects2= [];
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.UpdateBarWidthContext.GDBarObjects3= [];
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.UpdateBarWidthContext.GDBackgroundObjects1= [];
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.UpdateBarWidthContext.GDBackgroundObjects2= [];
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.UpdateBarWidthContext.GDBackgroundObjects3= [];


gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.UpdateBarWidthContext.mapOfGDgdjs_9546evtsExt_9595_9595TiledUnitsBar_9595_9595TiledUnitsBar_9546TiledUnitsBar_9546prototype_9546UpdateBarWidthContext_9546GDBarObjects2Objects = Hashtable.newFrom({"Bar": gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.UpdateBarWidthContext.GDBarObjects2});
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.UpdateBarWidthContext.mapOfGDgdjs_9546evtsExt_9595_9595TiledUnitsBar_9595_9595TiledUnitsBar_9546TiledUnitsBar_9546prototype_9546UpdateBarWidthContext_9546GDBarObjects2Objects = Hashtable.newFrom({"Bar": gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.UpdateBarWidthContext.GDBarObjects2});
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.UpdateBarWidthContext.mapOfGDgdjs_9546evtsExt_9595_9595TiledUnitsBar_9595_9595TiledUnitsBar_9546TiledUnitsBar_9546prototype_9546UpdateBarWidthContext_9546GDBarObjects2Objects = Hashtable.newFrom({"Bar": gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.UpdateBarWidthContext.GDBarObjects2});
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.UpdateBarWidthContext.mapOfGDgdjs_9546evtsExt_9595_9595TiledUnitsBar_9595_9595TiledUnitsBar_9546TiledUnitsBar_9546prototype_9546UpdateBarWidthContext_9546GDBarObjects2Objects = Hashtable.newFrom({"Bar": gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.UpdateBarWidthContext.GDBarObjects2});
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.UpdateBarWidthContext.mapOfGDgdjs_9546evtsExt_9595_9595TiledUnitsBar_9595_9595TiledUnitsBar_9546TiledUnitsBar_9546prototype_9546UpdateBarWidthContext_9546GDBarObjects1Objects = Hashtable.newFrom({"Bar": gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.UpdateBarWidthContext.GDBarObjects1});
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.UpdateBarWidthContext.mapOfGDgdjs_9546evtsExt_9595_9595TiledUnitsBar_9595_9595TiledUnitsBar_9546TiledUnitsBar_9546prototype_9546UpdateBarWidthContext_9546GDBarObjects1Objects = Hashtable.newFrom({"Bar": gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.UpdateBarWidthContext.GDBarObjects1});
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.UpdateBarWidthContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Bar"), gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.UpdateBarWidthContext.GDBarObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__TiledUnitsBar__LeftEdgeAnchor.func(runtimeScene, gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.UpdateBarWidthContext.mapOfGDgdjs_9546evtsExt_9595_9595TiledUnitsBar_9595_9595TiledUnitsBar_9546TiledUnitsBar_9546prototype_9546UpdateBarWidthContext_9546GDBarObjects2Objects, eventsFunctionContext.getBehaviorName("Anchor"), eventsFunctionContext) == "Center";
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__TiledUnitsBar__RightEdgeAnchor.func(runtimeScene, gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.UpdateBarWidthContext.mapOfGDgdjs_9546evtsExt_9595_9595TiledUnitsBar_9595_9595TiledUnitsBar_9546TiledUnitsBar_9546prototype_9546UpdateBarWidthContext_9546GDBarObjects2Objects, eventsFunctionContext.getBehaviorName("Anchor"), eventsFunctionContext) == "Center";
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.UpdateBarWidthContext.GDBarObjects2 */
{for(var i = 0, len = gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.UpdateBarWidthContext.GDBarObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.UpdateBarWidthContext.GDBarObjects2[i].setX(gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.UpdateBarWidthContext.GDBarObjects2[i].getX() - ((eventsFunctionContext.localVariables[0].getFromIndex(0).getAsNumber() - (gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.UpdateBarWidthContext.GDBarObjects2[i].getWidth())) / 2));
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Bar"), gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.UpdateBarWidthContext.GDBarObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__TiledUnitsBar__LeftEdgeAnchor.func(runtimeScene, gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.UpdateBarWidthContext.mapOfGDgdjs_9546evtsExt_9595_9595TiledUnitsBar_9595_9595TiledUnitsBar_9546TiledUnitsBar_9546prototype_9546UpdateBarWidthContext_9546GDBarObjects2Objects, eventsFunctionContext.getBehaviorName("Anchor"), eventsFunctionContext) == "Max";
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__TiledUnitsBar__RightEdgeAnchor.func(runtimeScene, gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.UpdateBarWidthContext.mapOfGDgdjs_9546evtsExt_9595_9595TiledUnitsBar_9595_9595TiledUnitsBar_9546TiledUnitsBar_9546prototype_9546UpdateBarWidthContext_9546GDBarObjects2Objects, eventsFunctionContext.getBehaviorName("Anchor"), eventsFunctionContext) == "Max";
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.UpdateBarWidthContext.GDBarObjects2 */
{for(var i = 0, len = gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.UpdateBarWidthContext.GDBarObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.UpdateBarWidthContext.GDBarObjects2[i].setX(gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.UpdateBarWidthContext.GDBarObjects2[i].getX() - (eventsFunctionContext.localVariables[0].getFromIndex(0).getAsNumber() - (gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.UpdateBarWidthContext.GDBarObjects2[i].getWidth())));
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Bar"), gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.UpdateBarWidthContext.GDBarObjects2);
gdjs.copyArray(eventsFunctionContext.getObjects("FillBar"), gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.UpdateBarWidthContext.GDFillBarObjects2);
gdjs.copyArray(gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.UpdateBarWidthContext.GDObjectObjects1, gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.UpdateBarWidthContext.GDObjectObjects2);

{for(var i = 0, len = gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.UpdateBarWidthContext.GDBarObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.UpdateBarWidthContext.GDBarObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Resizable")).setWidth(eventsFunctionContext.localVariables[0].getFromIndex(0).getAsNumber());
}
}
{for(var i = 0, len = gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.UpdateBarWidthContext.GDFillBarObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.UpdateBarWidthContext.GDFillBarObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Resizable")).setWidth((( gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.UpdateBarWidthContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.UpdateBarWidthContext.GDObjectObjects2[0].Value(eventsFunctionContext)) * eventsFunctionContext.getObjects("Object")[0]._getUnitWidth());
}
}
{for(var i = 0, len = gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.UpdateBarWidthContext.GDFillBarObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.UpdateBarWidthContext.GDFillBarObjects2[i].setX((( gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.UpdateBarWidthContext.GDBarObjects2.length === 0 ) ? 0 :gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.UpdateBarWidthContext.GDBarObjects2[0].getX()));
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Bar"), gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.UpdateBarWidthContext.GDBarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__TiledUnitsBar__LeftEdgeAnchor.func(runtimeScene, gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.UpdateBarWidthContext.mapOfGDgdjs_9546evtsExt_9595_9595TiledUnitsBar_9595_9595TiledUnitsBar_9546TiledUnitsBar_9546prototype_9546UpdateBarWidthContext_9546GDBarObjects1Objects, eventsFunctionContext.getBehaviorName("Anchor"), eventsFunctionContext) == "Max";
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__TiledUnitsBar__RightEdgeAnchor.func(runtimeScene, gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.UpdateBarWidthContext.mapOfGDgdjs_9546evtsExt_9595_9595TiledUnitsBar_9595_9595TiledUnitsBar_9546TiledUnitsBar_9546prototype_9546UpdateBarWidthContext_9546GDBarObjects1Objects, eventsFunctionContext.getBehaviorName("Anchor"), eventsFunctionContext) == "Max";
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.UpdateBarWidthContext.GDBarObjects1 */
gdjs.copyArray(eventsFunctionContext.getObjects("FillBar"), gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.UpdateBarWidthContext.GDFillBarObjects1);
{for(var i = 0, len = gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.UpdateBarWidthContext.GDFillBarObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.UpdateBarWidthContext.GDFillBarObjects1[i].setX((( gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.UpdateBarWidthContext.GDBarObjects1.length === 0 ) ? 0 :gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.UpdateBarWidthContext.GDBarObjects1[0].getX()) + (( gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.UpdateBarWidthContext.GDBarObjects1.length === 0 ) ? 0 :gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.UpdateBarWidthContext.GDBarObjects1[0].getWidth()) - (gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.UpdateBarWidthContext.GDFillBarObjects1[i].getWidth()));
}
}
}

}


};gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.UpdateBarWidthContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("NewWidth", variable);
}
eventsFunctionContext.localVariables.push(variables);
}
let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.UpdateBarWidthContext.GDObjectObjects1);
{eventsFunctionContext.localVariables[0].getFromIndex(0).setNumber((( gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.UpdateBarWidthContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.UpdateBarWidthContext.GDObjectObjects1[0].MaxValue(eventsFunctionContext)) * eventsFunctionContext.getObjects("Object")[0]._getUnitWidth());
}

{ //Subevents
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.UpdateBarWidthContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}
eventsFunctionContext.localVariables.pop();

}


};

gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.UpdateBarWidth = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDFillBarObjectsList = [...runtimeScene.getObjects("FillBar")];
var GDFillBarObjects = Hashtable.newFrom({"FillBar": thisGDFillBarObjectsList});
var thisGDBarObjectsList = [...runtimeScene.getObjects("Bar")];
var GDBarObjects = Hashtable.newFrom({"Bar": thisGDBarObjectsList});
var thisGDBackgroundObjectsList = [...runtimeScene.getObjects("Background")];
var GDBackgroundObjects = Hashtable.newFrom({"Background": thisGDBackgroundObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "FillBar": GDFillBarObjects
, "Bar": GDBarObjects
, "Background": GDBackgroundObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "FillBar": thisGDFillBarObjectsList
, "Bar": thisGDBarObjectsList
, "Background": thisGDBackgroundObjectsList
},
  _behaviorNamesMap: {
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.UpdateBarWidthContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.UpdateBarWidthContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.UpdateBarWidthContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.UpdateBarWidthContext.GDFillBarObjects1.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.UpdateBarWidthContext.GDFillBarObjects2.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.UpdateBarWidthContext.GDFillBarObjects3.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.UpdateBarWidthContext.GDBarObjects1.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.UpdateBarWidthContext.GDBarObjects2.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.UpdateBarWidthContext.GDBarObjects3.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.UpdateBarWidthContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.UpdateBarWidthContext.GDBackgroundObjects2.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.UpdateBarWidthContext.GDBackgroundObjects3.length = 0;

gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.UpdateBarWidthContext.eventsList1(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.UpdateBarWidthContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.UpdateBarWidthContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.UpdateBarWidthContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.UpdateBarWidthContext.GDFillBarObjects1.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.UpdateBarWidthContext.GDFillBarObjects2.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.UpdateBarWidthContext.GDFillBarObjects3.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.UpdateBarWidthContext.GDBarObjects1.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.UpdateBarWidthContext.GDBarObjects2.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.UpdateBarWidthContext.GDBarObjects3.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.UpdateBarWidthContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.UpdateBarWidthContext.GDBackgroundObjects2.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.UpdateBarWidthContext.GDBackgroundObjects3.length = 0;


return;
}

gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};


gdjs.registerObject("TiledUnitsBar::TiledUnitsBar", gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar);
