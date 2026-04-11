
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog = gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog || {};

/**
 * Object generated from Game over dialog
 */
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog = class LeaderboardDialog extends gdjs.CustomRuntimeObject2D {
  constructor(parentInstanceContainer, objectData, instanceData) {
    super(parentInstanceContainer, objectData, instanceData);
    this._parentInstanceContainer = parentInstanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._objectData = {};
    
    this._objectData.DefaultPlayerName = objectData.content.DefaultPlayerName !== undefined ? objectData.content.DefaultPlayerName : "";
    this._objectData.LeaderboardId = objectData.content.LeaderboardId !== undefined ? objectData.content.LeaderboardId : "";
    this._objectData.Score = Number("0") || 0;
    this._objectData.BestScore = Number("0") || 0;
    this._objectData.Format = objectData.content.Format !== undefined ? objectData.content.Format : "Number";
    this._objectData.Prefix = objectData.content.Prefix !== undefined ? objectData.content.Prefix : "";
    this._objectData.Suffix = objectData.content.Suffix !== undefined ? objectData.content.Suffix : "";
    this._objectData.NumberDecimalPoint = objectData.content.NumberDecimalPoint !== undefined ? objectData.content.NumberDecimalPoint : Number("3") || 0;
    this._objectData.ScoreLabelText = objectData.content.ScoreLabelText !== undefined ? objectData.content.ScoreLabelText : "Score: ";
    this._objectData.BestScoreLabelText = objectData.content.BestScoreLabelText !== undefined ? objectData.content.BestScoreLabelText : "Best: ";
    

    // It calls the onCreated super implementation at the end.
    this.onCreated();
  }

  // Hot-reload:
  updateFromObjectData(oldObjectData, newObjectData) {
    super.updateFromObjectData(oldObjectData, newObjectData);
    if (oldObjectData.content.DefaultPlayerName !== newObjectData.content.DefaultPlayerName)
      this._objectData.DefaultPlayerName = newObjectData.content.DefaultPlayerName;
    if (oldObjectData.content.LeaderboardId !== newObjectData.content.LeaderboardId)
      this._objectData.LeaderboardId = newObjectData.content.LeaderboardId;
    if (oldObjectData.content.Score !== newObjectData.content.Score)
      this._objectData.Score = newObjectData.content.Score;
    if (oldObjectData.content.BestScore !== newObjectData.content.BestScore)
      this._objectData.BestScore = newObjectData.content.BestScore;
    if (oldObjectData.content.Format !== newObjectData.content.Format)
      this._objectData.Format = newObjectData.content.Format;
    if (oldObjectData.content.Prefix !== newObjectData.content.Prefix)
      this._objectData.Prefix = newObjectData.content.Prefix;
    if (oldObjectData.content.Suffix !== newObjectData.content.Suffix)
      this._objectData.Suffix = newObjectData.content.Suffix;
    if (oldObjectData.content.NumberDecimalPoint !== newObjectData.content.NumberDecimalPoint)
      this._objectData.NumberDecimalPoint = newObjectData.content.NumberDecimalPoint;
    if (oldObjectData.content.ScoreLabelText !== newObjectData.content.ScoreLabelText)
      this._objectData.ScoreLabelText = newObjectData.content.ScoreLabelText;
    if (oldObjectData.content.BestScoreLabelText !== newObjectData.content.BestScoreLabelText)
      this._objectData.BestScoreLabelText = newObjectData.content.BestScoreLabelText;

    this.onHotReloading(this._parentInstanceContainer);
    return true;
  }

  // Properties:
  
  _getDefaultPlayerName() {
    return this._objectData.DefaultPlayerName !== undefined ? this._objectData.DefaultPlayerName : "";
  }
  _setDefaultPlayerName(newValue) {
    this._objectData.DefaultPlayerName = newValue;
  }
  _getLeaderboardId() {
    return this._objectData.LeaderboardId !== undefined ? this._objectData.LeaderboardId : "";
  }
  _setLeaderboardId(newValue) {
    this._objectData.LeaderboardId = newValue;
  }
  _getScore() {
    return this._objectData.Score !== undefined ? this._objectData.Score : Number("0") || 0;
  }
  _setScore(newValue) {
    this._objectData.Score = newValue;
  }
  _getBestScore() {
    return this._objectData.BestScore !== undefined ? this._objectData.BestScore : Number("0") || 0;
  }
  _setBestScore(newValue) {
    this._objectData.BestScore = newValue;
  }
  _getFormat() {
    return this._objectData.Format !== undefined ? this._objectData.Format : "Number";
  }
  _setFormat(newValue) {
    this._objectData.Format = newValue;
  }
  _getPrefix() {
    return this._objectData.Prefix !== undefined ? this._objectData.Prefix : "";
  }
  _setPrefix(newValue) {
    this._objectData.Prefix = newValue;
  }
  _getSuffix() {
    return this._objectData.Suffix !== undefined ? this._objectData.Suffix : "";
  }
  _setSuffix(newValue) {
    this._objectData.Suffix = newValue;
  }
  _getNumberDecimalPoint() {
    return this._objectData.NumberDecimalPoint !== undefined ? this._objectData.NumberDecimalPoint : Number("3") || 0;
  }
  _setNumberDecimalPoint(newValue) {
    this._objectData.NumberDecimalPoint = newValue;
  }
  _getScoreLabelText() {
    return this._objectData.ScoreLabelText !== undefined ? this._objectData.ScoreLabelText : "Score: ";
  }
  _setScoreLabelText(newValue) {
    this._objectData.ScoreLabelText = newValue;
  }
  _getBestScoreLabelText() {
    return this._objectData.BestScoreLabelText !== undefined ? this._objectData.BestScoreLabelText : "Best: ";
  }
  _setBestScoreLabelText(newValue) {
    this._objectData.BestScoreLabelText = newValue;
  }

  

  
}

// Methods:
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext = {};
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.idToCallbackMap = new Map();
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.GDObjectObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.GDObjectObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.GDScoreLabelObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.GDScoreLabelObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.GDPlayerNameInputObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.GDPlayerNameInputObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.GDSubmitTextButtonObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.GDSubmitTextButtonObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.GDRetryTextButtonObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.GDRetryTextButtonObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.GDPanelObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.GDPanelObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.GDTitleObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.GDTitleObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.GDBackTextButtonObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.GDBackTextButtonObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.GDMedalObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.GDMedalObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.GDNextTextButtonObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.GDNextTextButtonObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.GDBestScoreLabelObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.GDBestScoreLabelObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.GDBitmapTitleObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.GDBitmapTitleObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.GDBitmapScoreLabelObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.GDBitmapScoreLabelObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.GDBitmapBestScoreLabelObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.GDBitmapBestScoreLabelObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.GDDecorationObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.GDDecorationObjects2= [];


gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.mapOfEmptyGDSubmitTextButtonObjects = Hashtable.newFrom({"SubmitTextButton": []});
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.playerAuthentication.isAuthenticated();
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("PlayerNameInput"), gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.GDPlayerNameInputObjects1);
{for(var i = 0, len = gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.GDPlayerNameInputObjects1.length ;i < len;++i) {
    gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.GDPlayerNameInputObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Text")).setText(gdjs.playerAuthentication.getUsername());
}
}
{for(var i = 0, len = gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.GDPlayerNameInputObjects1.length ;i < len;++i) {
    gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.GDPlayerNameInputObjects1[i].setDisabled(true);
}
}
}

}


};gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.GDObjectObjects1[i].SetScore(0, eventsFunctionContext);
}
}
{for(var i = 0, len = gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.GDObjectObjects1[i].SetDefaultPlayerName(eventsFunctionContext.getObjects("Object")[0]._getDefaultPlayerName(), eventsFunctionContext);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtsExt__LeaderboardDialog__IsInGameEdition.func(runtimeScene, eventsFunctionContext));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.getSceneInstancesCount(eventsFunctionContext, gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.mapOfEmptyGDSubmitTextButtonObjects) > 0;
}
if (isConditionTrue_0) {
{gdjs.playerAuthentication.displayAuthenticationBanner(runtimeScene);
}

{ //Subevents
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Decoration"), gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.GDDecorationObjects1);
{for(var i = 0, len = gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.GDDecorationObjects1.length ;i < len;++i) {
    gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.GDDecorationObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("TweenIntoView")).SetShouldBeDeleted(false, eventsFunctionContext);
}
}
}

}


};

gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreated = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDScoreLabelObjectsList = [...runtimeScene.getObjects("ScoreLabel")];
var GDScoreLabelObjects = Hashtable.newFrom({"ScoreLabel": thisGDScoreLabelObjectsList});
var thisGDPlayerNameInputObjectsList = [...runtimeScene.getObjects("PlayerNameInput")];
var GDPlayerNameInputObjects = Hashtable.newFrom({"PlayerNameInput": thisGDPlayerNameInputObjectsList});
var thisGDSubmitTextButtonObjectsList = [...runtimeScene.getObjects("SubmitTextButton")];
var GDSubmitTextButtonObjects = Hashtable.newFrom({"SubmitTextButton": thisGDSubmitTextButtonObjectsList});
var thisGDRetryTextButtonObjectsList = [...runtimeScene.getObjects("RetryTextButton")];
var GDRetryTextButtonObjects = Hashtable.newFrom({"RetryTextButton": thisGDRetryTextButtonObjectsList});
var thisGDPanelObjectsList = [...runtimeScene.getObjects("Panel")];
var GDPanelObjects = Hashtable.newFrom({"Panel": thisGDPanelObjectsList});
var thisGDTitleObjectsList = [...runtimeScene.getObjects("Title")];
var GDTitleObjects = Hashtable.newFrom({"Title": thisGDTitleObjectsList});
var thisGDBackTextButtonObjectsList = [...runtimeScene.getObjects("BackTextButton")];
var GDBackTextButtonObjects = Hashtable.newFrom({"BackTextButton": thisGDBackTextButtonObjectsList});
var thisGDMedalObjectsList = [...runtimeScene.getObjects("Medal")];
var GDMedalObjects = Hashtable.newFrom({"Medal": thisGDMedalObjectsList});
var thisGDNextTextButtonObjectsList = [...runtimeScene.getObjects("NextTextButton")];
var GDNextTextButtonObjects = Hashtable.newFrom({"NextTextButton": thisGDNextTextButtonObjectsList});
var thisGDBestScoreLabelObjectsList = [...runtimeScene.getObjects("BestScoreLabel")];
var GDBestScoreLabelObjects = Hashtable.newFrom({"BestScoreLabel": thisGDBestScoreLabelObjectsList});
var thisGDBitmapTitleObjectsList = [...runtimeScene.getObjects("BitmapTitle")];
var GDBitmapTitleObjects = Hashtable.newFrom({"BitmapTitle": thisGDBitmapTitleObjectsList});
var thisGDBitmapScoreLabelObjectsList = [...runtimeScene.getObjects("BitmapScoreLabel")];
var GDBitmapScoreLabelObjects = Hashtable.newFrom({"BitmapScoreLabel": thisGDBitmapScoreLabelObjectsList});
var thisGDBitmapBestScoreLabelObjectsList = [...runtimeScene.getObjects("BitmapBestScoreLabel")];
var GDBitmapBestScoreLabelObjects = Hashtable.newFrom({"BitmapBestScoreLabel": thisGDBitmapBestScoreLabelObjectsList});
var thisGDDecorationObjectsList = [...runtimeScene.getObjects("Decoration")];
var GDDecorationObjects = Hashtable.newFrom({"Decoration": thisGDDecorationObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "ScoreLabel": GDScoreLabelObjects
, "PlayerNameInput": GDPlayerNameInputObjects
, "SubmitTextButton": GDSubmitTextButtonObjects
, "RetryTextButton": GDRetryTextButtonObjects
, "Panel": GDPanelObjects
, "Title": GDTitleObjects
, "BackTextButton": GDBackTextButtonObjects
, "Medal": GDMedalObjects
, "NextTextButton": GDNextTextButtonObjects
, "BestScoreLabel": GDBestScoreLabelObjects
, "BitmapTitle": GDBitmapTitleObjects
, "BitmapScoreLabel": GDBitmapScoreLabelObjects
, "BitmapBestScoreLabel": GDBitmapBestScoreLabelObjects
, "Decoration": GDDecorationObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "ScoreLabel": thisGDScoreLabelObjectsList
, "PlayerNameInput": thisGDPlayerNameInputObjectsList
, "SubmitTextButton": thisGDSubmitTextButtonObjectsList
, "RetryTextButton": thisGDRetryTextButtonObjectsList
, "Panel": thisGDPanelObjectsList
, "Title": thisGDTitleObjectsList
, "BackTextButton": thisGDBackTextButtonObjectsList
, "Medal": thisGDMedalObjectsList
, "NextTextButton": thisGDNextTextButtonObjectsList
, "BestScoreLabel": thisGDBestScoreLabelObjectsList
, "BitmapTitle": thisGDBitmapTitleObjectsList
, "BitmapScoreLabel": thisGDBitmapScoreLabelObjectsList
, "BitmapBestScoreLabel": thisGDBitmapBestScoreLabelObjectsList
, "Decoration": thisGDDecorationObjectsList
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.GDScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.GDScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.GDPlayerNameInputObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.GDPlayerNameInputObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.GDSubmitTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.GDSubmitTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.GDRetryTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.GDRetryTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.GDPanelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.GDPanelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.GDTitleObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.GDTitleObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.GDBackTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.GDBackTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.GDMedalObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.GDMedalObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.GDNextTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.GDNextTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.GDBestScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.GDBestScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.GDBitmapTitleObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.GDBitmapTitleObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.GDBitmapScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.GDBitmapScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.GDBitmapBestScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.GDBitmapBestScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.GDDecorationObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.GDDecorationObjects2.length = 0;

gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.eventsList1(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.GDScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.GDScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.GDPlayerNameInputObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.GDPlayerNameInputObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.GDSubmitTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.GDSubmitTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.GDRetryTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.GDRetryTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.GDPanelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.GDPanelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.GDTitleObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.GDTitleObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.GDBackTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.GDBackTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.GDMedalObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.GDMedalObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.GDNextTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.GDNextTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.GDBestScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.GDBestScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.GDBitmapTitleObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.GDBitmapTitleObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.GDBitmapScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.GDBitmapScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.GDBitmapBestScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.GDBitmapBestScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.GDDecorationObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.GDDecorationObjects2.length = 0;

gdjs.CustomRuntimeObject.prototype.onCreated.call(this);

return;
}
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext = {};
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.idToCallbackMap = new Map();
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDObjectObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDObjectObjects3= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDScoreLabelObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDScoreLabelObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDScoreLabelObjects3= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDPlayerNameInputObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDPlayerNameInputObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDPlayerNameInputObjects3= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDSubmitTextButtonObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDSubmitTextButtonObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDSubmitTextButtonObjects3= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDRetryTextButtonObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDRetryTextButtonObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDRetryTextButtonObjects3= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDPanelObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDPanelObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDPanelObjects3= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDTitleObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDTitleObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDTitleObjects3= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDBackTextButtonObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDBackTextButtonObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDBackTextButtonObjects3= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDMedalObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDMedalObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDMedalObjects3= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDNextTextButtonObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDNextTextButtonObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDNextTextButtonObjects3= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDBestScoreLabelObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDBestScoreLabelObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDBestScoreLabelObjects3= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDBitmapTitleObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDBitmapTitleObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDBitmapTitleObjects3= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDBitmapScoreLabelObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDBitmapScoreLabelObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDBitmapScoreLabelObjects3= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDBitmapBestScoreLabelObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDBitmapBestScoreLabelObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDBitmapBestScoreLabelObjects3= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDDecorationObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDDecorationObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDDecorationObjects3= [];


gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.mapOfEmptyGDSubmitTextButtonObjects = Hashtable.newFrom({"SubmitTextButton": []});
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.playerAuthentication.isAuthenticated();
if (isConditionTrue_0) {
{gdjs.evtTools.leaderboards.saveConnectedPlayerScore(runtimeScene, eventsFunctionContext.getObjects("Object")[0]._getLeaderboardId(), eventsFunctionContext.getObjects("Object")[0]._getScore());
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.playerAuthentication.isAuthenticated());
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("PlayerNameInput"), gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDPlayerNameInputObjects2);
{gdjs.evtTools.leaderboards.savePlayerScore(runtimeScene, eventsFunctionContext.getObjects("Object")[0]._getLeaderboardId(), eventsFunctionContext.getObjects("Object")[0]._getScore(), (( gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDPlayerNameInputObjects2.length === 0 ) ? "" :gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDPlayerNameInputObjects2[0].getText()));
}
}

}


{


let isConditionTrue_0 = false;
{
{gdjs.playerAuthentication.removeAuthenticationBanner(runtimeScene);
}
{gdjs.evtTools.leaderboards.displayLeaderboard(runtimeScene, eventsFunctionContext.getObjects("Object")[0]._getLeaderboardId(), true);
}
}

}


};gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.playerAuthentication.hasLoggedIn();
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("PlayerNameInput"), gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDPlayerNameInputObjects2);
{for(var i = 0, len = gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDPlayerNameInputObjects2.length ;i < len;++i) {
    gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDPlayerNameInputObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Text")).setText(gdjs.playerAuthentication.getUsername());
}
}
{for(var i = 0, len = gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDPlayerNameInputObjects2.length ;i < len;++i) {
    gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDPlayerNameInputObjects2[i].setDisabled(true);
}
}
{gdjs.playerAuthentication.displayAuthenticationBanner(runtimeScene);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.leaderboards.isLeaderboardViewErrored();
if (isConditionTrue_0) {
{gdjs.playerAuthentication.displayAuthenticationBanner(runtimeScene);
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("SubmitTextButton"), gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDSubmitTextButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDSubmitTextButtonObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDSubmitTextButtonObjects1[i].IsClicked(eventsFunctionContext) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDSubmitTextButtonObjects1[k] = gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDSubmitTextButtonObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDSubmitTextButtonObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtsExt__LeaderboardDialog__IsInGameEdition.func(runtimeScene, eventsFunctionContext));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.getSceneInstancesCount(eventsFunctionContext, gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.mapOfEmptyGDSubmitTextButtonObjects) > 0;
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEvents = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDScoreLabelObjectsList = [...runtimeScene.getObjects("ScoreLabel")];
var GDScoreLabelObjects = Hashtable.newFrom({"ScoreLabel": thisGDScoreLabelObjectsList});
var thisGDPlayerNameInputObjectsList = [...runtimeScene.getObjects("PlayerNameInput")];
var GDPlayerNameInputObjects = Hashtable.newFrom({"PlayerNameInput": thisGDPlayerNameInputObjectsList});
var thisGDSubmitTextButtonObjectsList = [...runtimeScene.getObjects("SubmitTextButton")];
var GDSubmitTextButtonObjects = Hashtable.newFrom({"SubmitTextButton": thisGDSubmitTextButtonObjectsList});
var thisGDRetryTextButtonObjectsList = [...runtimeScene.getObjects("RetryTextButton")];
var GDRetryTextButtonObjects = Hashtable.newFrom({"RetryTextButton": thisGDRetryTextButtonObjectsList});
var thisGDPanelObjectsList = [...runtimeScene.getObjects("Panel")];
var GDPanelObjects = Hashtable.newFrom({"Panel": thisGDPanelObjectsList});
var thisGDTitleObjectsList = [...runtimeScene.getObjects("Title")];
var GDTitleObjects = Hashtable.newFrom({"Title": thisGDTitleObjectsList});
var thisGDBackTextButtonObjectsList = [...runtimeScene.getObjects("BackTextButton")];
var GDBackTextButtonObjects = Hashtable.newFrom({"BackTextButton": thisGDBackTextButtonObjectsList});
var thisGDMedalObjectsList = [...runtimeScene.getObjects("Medal")];
var GDMedalObjects = Hashtable.newFrom({"Medal": thisGDMedalObjectsList});
var thisGDNextTextButtonObjectsList = [...runtimeScene.getObjects("NextTextButton")];
var GDNextTextButtonObjects = Hashtable.newFrom({"NextTextButton": thisGDNextTextButtonObjectsList});
var thisGDBestScoreLabelObjectsList = [...runtimeScene.getObjects("BestScoreLabel")];
var GDBestScoreLabelObjects = Hashtable.newFrom({"BestScoreLabel": thisGDBestScoreLabelObjectsList});
var thisGDBitmapTitleObjectsList = [...runtimeScene.getObjects("BitmapTitle")];
var GDBitmapTitleObjects = Hashtable.newFrom({"BitmapTitle": thisGDBitmapTitleObjectsList});
var thisGDBitmapScoreLabelObjectsList = [...runtimeScene.getObjects("BitmapScoreLabel")];
var GDBitmapScoreLabelObjects = Hashtable.newFrom({"BitmapScoreLabel": thisGDBitmapScoreLabelObjectsList});
var thisGDBitmapBestScoreLabelObjectsList = [...runtimeScene.getObjects("BitmapBestScoreLabel")];
var GDBitmapBestScoreLabelObjects = Hashtable.newFrom({"BitmapBestScoreLabel": thisGDBitmapBestScoreLabelObjectsList});
var thisGDDecorationObjectsList = [...runtimeScene.getObjects("Decoration")];
var GDDecorationObjects = Hashtable.newFrom({"Decoration": thisGDDecorationObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "ScoreLabel": GDScoreLabelObjects
, "PlayerNameInput": GDPlayerNameInputObjects
, "SubmitTextButton": GDSubmitTextButtonObjects
, "RetryTextButton": GDRetryTextButtonObjects
, "Panel": GDPanelObjects
, "Title": GDTitleObjects
, "BackTextButton": GDBackTextButtonObjects
, "Medal": GDMedalObjects
, "NextTextButton": GDNextTextButtonObjects
, "BestScoreLabel": GDBestScoreLabelObjects
, "BitmapTitle": GDBitmapTitleObjects
, "BitmapScoreLabel": GDBitmapScoreLabelObjects
, "BitmapBestScoreLabel": GDBitmapBestScoreLabelObjects
, "Decoration": GDDecorationObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "ScoreLabel": thisGDScoreLabelObjectsList
, "PlayerNameInput": thisGDPlayerNameInputObjectsList
, "SubmitTextButton": thisGDSubmitTextButtonObjectsList
, "RetryTextButton": thisGDRetryTextButtonObjectsList
, "Panel": thisGDPanelObjectsList
, "Title": thisGDTitleObjectsList
, "BackTextButton": thisGDBackTextButtonObjectsList
, "Medal": thisGDMedalObjectsList
, "NextTextButton": thisGDNextTextButtonObjectsList
, "BestScoreLabel": thisGDBestScoreLabelObjectsList
, "BitmapTitle": thisGDBitmapTitleObjectsList
, "BitmapScoreLabel": thisGDBitmapScoreLabelObjectsList
, "BitmapBestScoreLabel": thisGDBitmapBestScoreLabelObjectsList
, "Decoration": thisGDDecorationObjectsList
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDScoreLabelObjects3.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDPlayerNameInputObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDPlayerNameInputObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDPlayerNameInputObjects3.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDSubmitTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDSubmitTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDSubmitTextButtonObjects3.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDRetryTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDRetryTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDRetryTextButtonObjects3.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDPanelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDPanelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDPanelObjects3.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDTitleObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDTitleObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDTitleObjects3.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDBackTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDBackTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDBackTextButtonObjects3.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDMedalObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDMedalObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDMedalObjects3.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDNextTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDNextTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDNextTextButtonObjects3.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDBestScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDBestScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDBestScoreLabelObjects3.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDBitmapTitleObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDBitmapTitleObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDBitmapTitleObjects3.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDBitmapScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDBitmapScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDBitmapScoreLabelObjects3.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDBitmapBestScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDBitmapBestScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDBitmapBestScoreLabelObjects3.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDDecorationObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDDecorationObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDDecorationObjects3.length = 0;

gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.eventsList2(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDScoreLabelObjects3.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDPlayerNameInputObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDPlayerNameInputObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDPlayerNameInputObjects3.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDSubmitTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDSubmitTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDSubmitTextButtonObjects3.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDRetryTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDRetryTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDRetryTextButtonObjects3.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDPanelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDPanelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDPanelObjects3.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDTitleObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDTitleObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDTitleObjects3.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDBackTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDBackTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDBackTextButtonObjects3.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDMedalObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDMedalObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDMedalObjects3.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDNextTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDNextTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDNextTextButtonObjects3.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDBestScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDBestScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDBestScoreLabelObjects3.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDBitmapTitleObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDBitmapTitleObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDBitmapTitleObjects3.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDBitmapScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDBitmapScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDBitmapScoreLabelObjects3.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDBitmapBestScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDBitmapBestScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDBitmapBestScoreLabelObjects3.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDDecorationObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDDecorationObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDDecorationObjects3.length = 0;


return;
}
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.ScoreContext = {};
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.ScoreContext.idToCallbackMap = new Map();
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.ScoreContext.GDObjectObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.ScoreContext.GDObjectObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.ScoreContext.GDScoreLabelObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.ScoreContext.GDScoreLabelObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.ScoreContext.GDPlayerNameInputObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.ScoreContext.GDPlayerNameInputObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.ScoreContext.GDSubmitTextButtonObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.ScoreContext.GDSubmitTextButtonObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.ScoreContext.GDRetryTextButtonObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.ScoreContext.GDRetryTextButtonObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.ScoreContext.GDPanelObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.ScoreContext.GDPanelObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.ScoreContext.GDTitleObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.ScoreContext.GDTitleObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.ScoreContext.GDBackTextButtonObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.ScoreContext.GDBackTextButtonObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.ScoreContext.GDMedalObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.ScoreContext.GDMedalObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.ScoreContext.GDNextTextButtonObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.ScoreContext.GDNextTextButtonObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.ScoreContext.GDBestScoreLabelObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.ScoreContext.GDBestScoreLabelObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.ScoreContext.GDBitmapTitleObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.ScoreContext.GDBitmapTitleObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.ScoreContext.GDBitmapScoreLabelObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.ScoreContext.GDBitmapScoreLabelObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.ScoreContext.GDBitmapBestScoreLabelObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.ScoreContext.GDBitmapBestScoreLabelObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.ScoreContext.GDDecorationObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.ScoreContext.GDDecorationObjects2= [];


gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.ScoreContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0]._getScore();}
}

}


};

gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.Score = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDScoreLabelObjectsList = [...runtimeScene.getObjects("ScoreLabel")];
var GDScoreLabelObjects = Hashtable.newFrom({"ScoreLabel": thisGDScoreLabelObjectsList});
var thisGDPlayerNameInputObjectsList = [...runtimeScene.getObjects("PlayerNameInput")];
var GDPlayerNameInputObjects = Hashtable.newFrom({"PlayerNameInput": thisGDPlayerNameInputObjectsList});
var thisGDSubmitTextButtonObjectsList = [...runtimeScene.getObjects("SubmitTextButton")];
var GDSubmitTextButtonObjects = Hashtable.newFrom({"SubmitTextButton": thisGDSubmitTextButtonObjectsList});
var thisGDRetryTextButtonObjectsList = [...runtimeScene.getObjects("RetryTextButton")];
var GDRetryTextButtonObjects = Hashtable.newFrom({"RetryTextButton": thisGDRetryTextButtonObjectsList});
var thisGDPanelObjectsList = [...runtimeScene.getObjects("Panel")];
var GDPanelObjects = Hashtable.newFrom({"Panel": thisGDPanelObjectsList});
var thisGDTitleObjectsList = [...runtimeScene.getObjects("Title")];
var GDTitleObjects = Hashtable.newFrom({"Title": thisGDTitleObjectsList});
var thisGDBackTextButtonObjectsList = [...runtimeScene.getObjects("BackTextButton")];
var GDBackTextButtonObjects = Hashtable.newFrom({"BackTextButton": thisGDBackTextButtonObjectsList});
var thisGDMedalObjectsList = [...runtimeScene.getObjects("Medal")];
var GDMedalObjects = Hashtable.newFrom({"Medal": thisGDMedalObjectsList});
var thisGDNextTextButtonObjectsList = [...runtimeScene.getObjects("NextTextButton")];
var GDNextTextButtonObjects = Hashtable.newFrom({"NextTextButton": thisGDNextTextButtonObjectsList});
var thisGDBestScoreLabelObjectsList = [...runtimeScene.getObjects("BestScoreLabel")];
var GDBestScoreLabelObjects = Hashtable.newFrom({"BestScoreLabel": thisGDBestScoreLabelObjectsList});
var thisGDBitmapTitleObjectsList = [...runtimeScene.getObjects("BitmapTitle")];
var GDBitmapTitleObjects = Hashtable.newFrom({"BitmapTitle": thisGDBitmapTitleObjectsList});
var thisGDBitmapScoreLabelObjectsList = [...runtimeScene.getObjects("BitmapScoreLabel")];
var GDBitmapScoreLabelObjects = Hashtable.newFrom({"BitmapScoreLabel": thisGDBitmapScoreLabelObjectsList});
var thisGDBitmapBestScoreLabelObjectsList = [...runtimeScene.getObjects("BitmapBestScoreLabel")];
var GDBitmapBestScoreLabelObjects = Hashtable.newFrom({"BitmapBestScoreLabel": thisGDBitmapBestScoreLabelObjectsList});
var thisGDDecorationObjectsList = [...runtimeScene.getObjects("Decoration")];
var GDDecorationObjects = Hashtable.newFrom({"Decoration": thisGDDecorationObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "ScoreLabel": GDScoreLabelObjects
, "PlayerNameInput": GDPlayerNameInputObjects
, "SubmitTextButton": GDSubmitTextButtonObjects
, "RetryTextButton": GDRetryTextButtonObjects
, "Panel": GDPanelObjects
, "Title": GDTitleObjects
, "BackTextButton": GDBackTextButtonObjects
, "Medal": GDMedalObjects
, "NextTextButton": GDNextTextButtonObjects
, "BestScoreLabel": GDBestScoreLabelObjects
, "BitmapTitle": GDBitmapTitleObjects
, "BitmapScoreLabel": GDBitmapScoreLabelObjects
, "BitmapBestScoreLabel": GDBitmapBestScoreLabelObjects
, "Decoration": GDDecorationObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "ScoreLabel": thisGDScoreLabelObjectsList
, "PlayerNameInput": thisGDPlayerNameInputObjectsList
, "SubmitTextButton": thisGDSubmitTextButtonObjectsList
, "RetryTextButton": thisGDRetryTextButtonObjectsList
, "Panel": thisGDPanelObjectsList
, "Title": thisGDTitleObjectsList
, "BackTextButton": thisGDBackTextButtonObjectsList
, "Medal": thisGDMedalObjectsList
, "NextTextButton": thisGDNextTextButtonObjectsList
, "BestScoreLabel": thisGDBestScoreLabelObjectsList
, "BitmapTitle": thisGDBitmapTitleObjectsList
, "BitmapScoreLabel": thisGDBitmapScoreLabelObjectsList
, "BitmapBestScoreLabel": thisGDBitmapBestScoreLabelObjectsList
, "Decoration": thisGDDecorationObjectsList
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.ScoreContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.ScoreContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.ScoreContext.GDScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.ScoreContext.GDScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.ScoreContext.GDPlayerNameInputObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.ScoreContext.GDPlayerNameInputObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.ScoreContext.GDSubmitTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.ScoreContext.GDSubmitTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.ScoreContext.GDRetryTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.ScoreContext.GDRetryTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.ScoreContext.GDPanelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.ScoreContext.GDPanelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.ScoreContext.GDTitleObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.ScoreContext.GDTitleObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.ScoreContext.GDBackTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.ScoreContext.GDBackTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.ScoreContext.GDMedalObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.ScoreContext.GDMedalObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.ScoreContext.GDNextTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.ScoreContext.GDNextTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.ScoreContext.GDBestScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.ScoreContext.GDBestScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.ScoreContext.GDBitmapTitleObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.ScoreContext.GDBitmapTitleObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.ScoreContext.GDBitmapScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.ScoreContext.GDBitmapScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.ScoreContext.GDBitmapBestScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.ScoreContext.GDBitmapBestScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.ScoreContext.GDDecorationObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.ScoreContext.GDDecorationObjects2.length = 0;

gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.ScoreContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.ScoreContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.ScoreContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.ScoreContext.GDScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.ScoreContext.GDScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.ScoreContext.GDPlayerNameInputObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.ScoreContext.GDPlayerNameInputObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.ScoreContext.GDSubmitTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.ScoreContext.GDSubmitTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.ScoreContext.GDRetryTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.ScoreContext.GDRetryTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.ScoreContext.GDPanelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.ScoreContext.GDPanelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.ScoreContext.GDTitleObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.ScoreContext.GDTitleObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.ScoreContext.GDBackTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.ScoreContext.GDBackTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.ScoreContext.GDMedalObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.ScoreContext.GDMedalObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.ScoreContext.GDNextTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.ScoreContext.GDNextTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.ScoreContext.GDBestScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.ScoreContext.GDBestScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.ScoreContext.GDBitmapTitleObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.ScoreContext.GDBitmapTitleObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.ScoreContext.GDBitmapScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.ScoreContext.GDBitmapScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.ScoreContext.GDBitmapBestScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.ScoreContext.GDBitmapBestScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.ScoreContext.GDDecorationObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.ScoreContext.GDDecorationObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext = {};
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.idToCallbackMap = new Map();
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDObjectObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDObjectObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDScoreLabelObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDScoreLabelObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDPlayerNameInputObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDPlayerNameInputObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDSubmitTextButtonObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDSubmitTextButtonObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDRetryTextButtonObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDRetryTextButtonObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDPanelObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDPanelObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDTitleObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDTitleObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDBackTextButtonObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDBackTextButtonObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDMedalObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDMedalObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDNextTextButtonObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDNextTextButtonObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDBestScoreLabelObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDBestScoreLabelObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDBitmapTitleObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDBitmapTitleObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDBitmapScoreLabelObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDBitmapScoreLabelObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDBitmapBestScoreLabelObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDBitmapBestScoreLabelObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDDecorationObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDDecorationObjects2= [];


gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("BitmapScoreLabel"), gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDBitmapScoreLabelObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDObjectObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("ScoreLabel"), gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDScoreLabelObjects1);
{eventsFunctionContext.getObjects("Object")[0]._setScore(eventsFunctionContext.getArgument("Value"))
}
{for(var i = 0, len = gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDScoreLabelObjects1.length ;i < len;++i) {
    gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDScoreLabelObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Text")).setText(eventsFunctionContext.getObjects("Object")[0]._getScoreLabelText() + (( gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDObjectObjects1[0].FormatScore(eventsFunctionContext.getArgument("Value"), eventsFunctionContext)));
}
for(var i = 0, len = gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDBitmapScoreLabelObjects1.length ;i < len;++i) {
    gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDBitmapScoreLabelObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Text")).setText(eventsFunctionContext.getObjects("Object")[0]._getScoreLabelText() + (( gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDObjectObjects1[0].FormatScore(eventsFunctionContext.getArgument("Value"), eventsFunctionContext)));
}
}
}

}


};

gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScore = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDScoreLabelObjectsList = [...runtimeScene.getObjects("ScoreLabel")];
var GDScoreLabelObjects = Hashtable.newFrom({"ScoreLabel": thisGDScoreLabelObjectsList});
var thisGDPlayerNameInputObjectsList = [...runtimeScene.getObjects("PlayerNameInput")];
var GDPlayerNameInputObjects = Hashtable.newFrom({"PlayerNameInput": thisGDPlayerNameInputObjectsList});
var thisGDSubmitTextButtonObjectsList = [...runtimeScene.getObjects("SubmitTextButton")];
var GDSubmitTextButtonObjects = Hashtable.newFrom({"SubmitTextButton": thisGDSubmitTextButtonObjectsList});
var thisGDRetryTextButtonObjectsList = [...runtimeScene.getObjects("RetryTextButton")];
var GDRetryTextButtonObjects = Hashtable.newFrom({"RetryTextButton": thisGDRetryTextButtonObjectsList});
var thisGDPanelObjectsList = [...runtimeScene.getObjects("Panel")];
var GDPanelObjects = Hashtable.newFrom({"Panel": thisGDPanelObjectsList});
var thisGDTitleObjectsList = [...runtimeScene.getObjects("Title")];
var GDTitleObjects = Hashtable.newFrom({"Title": thisGDTitleObjectsList});
var thisGDBackTextButtonObjectsList = [...runtimeScene.getObjects("BackTextButton")];
var GDBackTextButtonObjects = Hashtable.newFrom({"BackTextButton": thisGDBackTextButtonObjectsList});
var thisGDMedalObjectsList = [...runtimeScene.getObjects("Medal")];
var GDMedalObjects = Hashtable.newFrom({"Medal": thisGDMedalObjectsList});
var thisGDNextTextButtonObjectsList = [...runtimeScene.getObjects("NextTextButton")];
var GDNextTextButtonObjects = Hashtable.newFrom({"NextTextButton": thisGDNextTextButtonObjectsList});
var thisGDBestScoreLabelObjectsList = [...runtimeScene.getObjects("BestScoreLabel")];
var GDBestScoreLabelObjects = Hashtable.newFrom({"BestScoreLabel": thisGDBestScoreLabelObjectsList});
var thisGDBitmapTitleObjectsList = [...runtimeScene.getObjects("BitmapTitle")];
var GDBitmapTitleObjects = Hashtable.newFrom({"BitmapTitle": thisGDBitmapTitleObjectsList});
var thisGDBitmapScoreLabelObjectsList = [...runtimeScene.getObjects("BitmapScoreLabel")];
var GDBitmapScoreLabelObjects = Hashtable.newFrom({"BitmapScoreLabel": thisGDBitmapScoreLabelObjectsList});
var thisGDBitmapBestScoreLabelObjectsList = [...runtimeScene.getObjects("BitmapBestScoreLabel")];
var GDBitmapBestScoreLabelObjects = Hashtable.newFrom({"BitmapBestScoreLabel": thisGDBitmapBestScoreLabelObjectsList});
var thisGDDecorationObjectsList = [...runtimeScene.getObjects("Decoration")];
var GDDecorationObjects = Hashtable.newFrom({"Decoration": thisGDDecorationObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "ScoreLabel": GDScoreLabelObjects
, "PlayerNameInput": GDPlayerNameInputObjects
, "SubmitTextButton": GDSubmitTextButtonObjects
, "RetryTextButton": GDRetryTextButtonObjects
, "Panel": GDPanelObjects
, "Title": GDTitleObjects
, "BackTextButton": GDBackTextButtonObjects
, "Medal": GDMedalObjects
, "NextTextButton": GDNextTextButtonObjects
, "BestScoreLabel": GDBestScoreLabelObjects
, "BitmapTitle": GDBitmapTitleObjects
, "BitmapScoreLabel": GDBitmapScoreLabelObjects
, "BitmapBestScoreLabel": GDBitmapBestScoreLabelObjects
, "Decoration": GDDecorationObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "ScoreLabel": thisGDScoreLabelObjectsList
, "PlayerNameInput": thisGDPlayerNameInputObjectsList
, "SubmitTextButton": thisGDSubmitTextButtonObjectsList
, "RetryTextButton": thisGDRetryTextButtonObjectsList
, "Panel": thisGDPanelObjectsList
, "Title": thisGDTitleObjectsList
, "BackTextButton": thisGDBackTextButtonObjectsList
, "Medal": thisGDMedalObjectsList
, "NextTextButton": thisGDNextTextButtonObjectsList
, "BestScoreLabel": thisGDBestScoreLabelObjectsList
, "BitmapTitle": thisGDBitmapTitleObjectsList
, "BitmapScoreLabel": thisGDBitmapScoreLabelObjectsList
, "BitmapBestScoreLabel": thisGDBitmapBestScoreLabelObjectsList
, "Decoration": thisGDDecorationObjectsList
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDPlayerNameInputObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDPlayerNameInputObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDSubmitTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDSubmitTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDRetryTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDRetryTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDPanelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDPanelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDTitleObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDTitleObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDBackTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDBackTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDMedalObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDMedalObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDNextTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDNextTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDBestScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDBestScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDBitmapTitleObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDBitmapTitleObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDBitmapScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDBitmapScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDBitmapBestScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDBitmapBestScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDDecorationObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDDecorationObjects2.length = 0;

gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDPlayerNameInputObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDPlayerNameInputObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDSubmitTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDSubmitTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDRetryTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDRetryTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDPanelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDPanelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDTitleObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDTitleObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDBackTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDBackTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDMedalObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDMedalObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDNextTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDNextTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDBestScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDBestScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDBitmapTitleObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDBitmapTitleObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDBitmapScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDBitmapScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDBitmapBestScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDBitmapBestScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDDecorationObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDDecorationObjects2.length = 0;


return;
}
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.BestScoreContext = {};
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.BestScoreContext.idToCallbackMap = new Map();
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.BestScoreContext.GDObjectObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.BestScoreContext.GDObjectObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.BestScoreContext.GDScoreLabelObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.BestScoreContext.GDScoreLabelObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.BestScoreContext.GDPlayerNameInputObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.BestScoreContext.GDPlayerNameInputObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.BestScoreContext.GDSubmitTextButtonObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.BestScoreContext.GDSubmitTextButtonObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.BestScoreContext.GDRetryTextButtonObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.BestScoreContext.GDRetryTextButtonObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.BestScoreContext.GDPanelObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.BestScoreContext.GDPanelObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.BestScoreContext.GDTitleObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.BestScoreContext.GDTitleObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.BestScoreContext.GDBackTextButtonObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.BestScoreContext.GDBackTextButtonObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.BestScoreContext.GDMedalObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.BestScoreContext.GDMedalObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.BestScoreContext.GDNextTextButtonObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.BestScoreContext.GDNextTextButtonObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.BestScoreContext.GDBestScoreLabelObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.BestScoreContext.GDBestScoreLabelObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.BestScoreContext.GDBitmapTitleObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.BestScoreContext.GDBitmapTitleObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.BestScoreContext.GDBitmapScoreLabelObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.BestScoreContext.GDBitmapScoreLabelObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.BestScoreContext.GDBitmapBestScoreLabelObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.BestScoreContext.GDBitmapBestScoreLabelObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.BestScoreContext.GDDecorationObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.BestScoreContext.GDDecorationObjects2= [];


gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.BestScoreContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0]._getBestScore();}
}

}


};

gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.BestScore = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDScoreLabelObjectsList = [...runtimeScene.getObjects("ScoreLabel")];
var GDScoreLabelObjects = Hashtable.newFrom({"ScoreLabel": thisGDScoreLabelObjectsList});
var thisGDPlayerNameInputObjectsList = [...runtimeScene.getObjects("PlayerNameInput")];
var GDPlayerNameInputObjects = Hashtable.newFrom({"PlayerNameInput": thisGDPlayerNameInputObjectsList});
var thisGDSubmitTextButtonObjectsList = [...runtimeScene.getObjects("SubmitTextButton")];
var GDSubmitTextButtonObjects = Hashtable.newFrom({"SubmitTextButton": thisGDSubmitTextButtonObjectsList});
var thisGDRetryTextButtonObjectsList = [...runtimeScene.getObjects("RetryTextButton")];
var GDRetryTextButtonObjects = Hashtable.newFrom({"RetryTextButton": thisGDRetryTextButtonObjectsList});
var thisGDPanelObjectsList = [...runtimeScene.getObjects("Panel")];
var GDPanelObjects = Hashtable.newFrom({"Panel": thisGDPanelObjectsList});
var thisGDTitleObjectsList = [...runtimeScene.getObjects("Title")];
var GDTitleObjects = Hashtable.newFrom({"Title": thisGDTitleObjectsList});
var thisGDBackTextButtonObjectsList = [...runtimeScene.getObjects("BackTextButton")];
var GDBackTextButtonObjects = Hashtable.newFrom({"BackTextButton": thisGDBackTextButtonObjectsList});
var thisGDMedalObjectsList = [...runtimeScene.getObjects("Medal")];
var GDMedalObjects = Hashtable.newFrom({"Medal": thisGDMedalObjectsList});
var thisGDNextTextButtonObjectsList = [...runtimeScene.getObjects("NextTextButton")];
var GDNextTextButtonObjects = Hashtable.newFrom({"NextTextButton": thisGDNextTextButtonObjectsList});
var thisGDBestScoreLabelObjectsList = [...runtimeScene.getObjects("BestScoreLabel")];
var GDBestScoreLabelObjects = Hashtable.newFrom({"BestScoreLabel": thisGDBestScoreLabelObjectsList});
var thisGDBitmapTitleObjectsList = [...runtimeScene.getObjects("BitmapTitle")];
var GDBitmapTitleObjects = Hashtable.newFrom({"BitmapTitle": thisGDBitmapTitleObjectsList});
var thisGDBitmapScoreLabelObjectsList = [...runtimeScene.getObjects("BitmapScoreLabel")];
var GDBitmapScoreLabelObjects = Hashtable.newFrom({"BitmapScoreLabel": thisGDBitmapScoreLabelObjectsList});
var thisGDBitmapBestScoreLabelObjectsList = [...runtimeScene.getObjects("BitmapBestScoreLabel")];
var GDBitmapBestScoreLabelObjects = Hashtable.newFrom({"BitmapBestScoreLabel": thisGDBitmapBestScoreLabelObjectsList});
var thisGDDecorationObjectsList = [...runtimeScene.getObjects("Decoration")];
var GDDecorationObjects = Hashtable.newFrom({"Decoration": thisGDDecorationObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "ScoreLabel": GDScoreLabelObjects
, "PlayerNameInput": GDPlayerNameInputObjects
, "SubmitTextButton": GDSubmitTextButtonObjects
, "RetryTextButton": GDRetryTextButtonObjects
, "Panel": GDPanelObjects
, "Title": GDTitleObjects
, "BackTextButton": GDBackTextButtonObjects
, "Medal": GDMedalObjects
, "NextTextButton": GDNextTextButtonObjects
, "BestScoreLabel": GDBestScoreLabelObjects
, "BitmapTitle": GDBitmapTitleObjects
, "BitmapScoreLabel": GDBitmapScoreLabelObjects
, "BitmapBestScoreLabel": GDBitmapBestScoreLabelObjects
, "Decoration": GDDecorationObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "ScoreLabel": thisGDScoreLabelObjectsList
, "PlayerNameInput": thisGDPlayerNameInputObjectsList
, "SubmitTextButton": thisGDSubmitTextButtonObjectsList
, "RetryTextButton": thisGDRetryTextButtonObjectsList
, "Panel": thisGDPanelObjectsList
, "Title": thisGDTitleObjectsList
, "BackTextButton": thisGDBackTextButtonObjectsList
, "Medal": thisGDMedalObjectsList
, "NextTextButton": thisGDNextTextButtonObjectsList
, "BestScoreLabel": thisGDBestScoreLabelObjectsList
, "BitmapTitle": thisGDBitmapTitleObjectsList
, "BitmapScoreLabel": thisGDBitmapScoreLabelObjectsList
, "BitmapBestScoreLabel": thisGDBitmapBestScoreLabelObjectsList
, "Decoration": thisGDDecorationObjectsList
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.BestScoreContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.BestScoreContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.BestScoreContext.GDScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.BestScoreContext.GDScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.BestScoreContext.GDPlayerNameInputObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.BestScoreContext.GDPlayerNameInputObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.BestScoreContext.GDSubmitTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.BestScoreContext.GDSubmitTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.BestScoreContext.GDRetryTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.BestScoreContext.GDRetryTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.BestScoreContext.GDPanelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.BestScoreContext.GDPanelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.BestScoreContext.GDTitleObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.BestScoreContext.GDTitleObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.BestScoreContext.GDBackTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.BestScoreContext.GDBackTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.BestScoreContext.GDMedalObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.BestScoreContext.GDMedalObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.BestScoreContext.GDNextTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.BestScoreContext.GDNextTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.BestScoreContext.GDBestScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.BestScoreContext.GDBestScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.BestScoreContext.GDBitmapTitleObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.BestScoreContext.GDBitmapTitleObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.BestScoreContext.GDBitmapScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.BestScoreContext.GDBitmapScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.BestScoreContext.GDBitmapBestScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.BestScoreContext.GDBitmapBestScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.BestScoreContext.GDDecorationObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.BestScoreContext.GDDecorationObjects2.length = 0;

gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.BestScoreContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.BestScoreContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.BestScoreContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.BestScoreContext.GDScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.BestScoreContext.GDScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.BestScoreContext.GDPlayerNameInputObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.BestScoreContext.GDPlayerNameInputObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.BestScoreContext.GDSubmitTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.BestScoreContext.GDSubmitTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.BestScoreContext.GDRetryTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.BestScoreContext.GDRetryTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.BestScoreContext.GDPanelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.BestScoreContext.GDPanelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.BestScoreContext.GDTitleObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.BestScoreContext.GDTitleObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.BestScoreContext.GDBackTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.BestScoreContext.GDBackTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.BestScoreContext.GDMedalObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.BestScoreContext.GDMedalObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.BestScoreContext.GDNextTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.BestScoreContext.GDNextTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.BestScoreContext.GDBestScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.BestScoreContext.GDBestScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.BestScoreContext.GDBitmapTitleObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.BestScoreContext.GDBitmapTitleObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.BestScoreContext.GDBitmapScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.BestScoreContext.GDBitmapScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.BestScoreContext.GDBitmapBestScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.BestScoreContext.GDBitmapBestScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.BestScoreContext.GDDecorationObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.BestScoreContext.GDDecorationObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetBestScoreContext = {};
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetBestScoreContext.idToCallbackMap = new Map();
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetBestScoreContext.GDObjectObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetBestScoreContext.GDObjectObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetBestScoreContext.GDScoreLabelObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetBestScoreContext.GDScoreLabelObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetBestScoreContext.GDPlayerNameInputObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetBestScoreContext.GDPlayerNameInputObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetBestScoreContext.GDSubmitTextButtonObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetBestScoreContext.GDSubmitTextButtonObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetBestScoreContext.GDRetryTextButtonObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetBestScoreContext.GDRetryTextButtonObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetBestScoreContext.GDPanelObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetBestScoreContext.GDPanelObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetBestScoreContext.GDTitleObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetBestScoreContext.GDTitleObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetBestScoreContext.GDBackTextButtonObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetBestScoreContext.GDBackTextButtonObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetBestScoreContext.GDMedalObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetBestScoreContext.GDMedalObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetBestScoreContext.GDNextTextButtonObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetBestScoreContext.GDNextTextButtonObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetBestScoreContext.GDBestScoreLabelObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetBestScoreContext.GDBestScoreLabelObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetBestScoreContext.GDBitmapTitleObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetBestScoreContext.GDBitmapTitleObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetBestScoreContext.GDBitmapScoreLabelObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetBestScoreContext.GDBitmapScoreLabelObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetBestScoreContext.GDBitmapBestScoreLabelObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetBestScoreContext.GDBitmapBestScoreLabelObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetBestScoreContext.GDDecorationObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetBestScoreContext.GDDecorationObjects2= [];


gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetBestScoreContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("BestScoreLabel"), gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetBestScoreContext.GDBestScoreLabelObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("BitmapBestScoreLabel"), gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetBestScoreContext.GDBitmapBestScoreLabelObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetBestScoreContext.GDObjectObjects1);
{eventsFunctionContext.getObjects("Object")[0]._setBestScore(eventsFunctionContext.getArgument("Value"))
}
{for(var i = 0, len = gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetBestScoreContext.GDBestScoreLabelObjects1.length ;i < len;++i) {
    gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetBestScoreContext.GDBestScoreLabelObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Text")).setText(eventsFunctionContext.getObjects("Object")[0]._getBestScoreLabelText() + (( gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetBestScoreContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetBestScoreContext.GDObjectObjects1[0].FormatScore(eventsFunctionContext.getArgument("Value"), eventsFunctionContext)));
}
for(var i = 0, len = gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetBestScoreContext.GDBitmapBestScoreLabelObjects1.length ;i < len;++i) {
    gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetBestScoreContext.GDBitmapBestScoreLabelObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Text")).setText(eventsFunctionContext.getObjects("Object")[0]._getBestScoreLabelText() + (( gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetBestScoreContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetBestScoreContext.GDObjectObjects1[0].FormatScore(eventsFunctionContext.getArgument("Value"), eventsFunctionContext)));
}
}
}

}


};

gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetBestScore = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDScoreLabelObjectsList = [...runtimeScene.getObjects("ScoreLabel")];
var GDScoreLabelObjects = Hashtable.newFrom({"ScoreLabel": thisGDScoreLabelObjectsList});
var thisGDPlayerNameInputObjectsList = [...runtimeScene.getObjects("PlayerNameInput")];
var GDPlayerNameInputObjects = Hashtable.newFrom({"PlayerNameInput": thisGDPlayerNameInputObjectsList});
var thisGDSubmitTextButtonObjectsList = [...runtimeScene.getObjects("SubmitTextButton")];
var GDSubmitTextButtonObjects = Hashtable.newFrom({"SubmitTextButton": thisGDSubmitTextButtonObjectsList});
var thisGDRetryTextButtonObjectsList = [...runtimeScene.getObjects("RetryTextButton")];
var GDRetryTextButtonObjects = Hashtable.newFrom({"RetryTextButton": thisGDRetryTextButtonObjectsList});
var thisGDPanelObjectsList = [...runtimeScene.getObjects("Panel")];
var GDPanelObjects = Hashtable.newFrom({"Panel": thisGDPanelObjectsList});
var thisGDTitleObjectsList = [...runtimeScene.getObjects("Title")];
var GDTitleObjects = Hashtable.newFrom({"Title": thisGDTitleObjectsList});
var thisGDBackTextButtonObjectsList = [...runtimeScene.getObjects("BackTextButton")];
var GDBackTextButtonObjects = Hashtable.newFrom({"BackTextButton": thisGDBackTextButtonObjectsList});
var thisGDMedalObjectsList = [...runtimeScene.getObjects("Medal")];
var GDMedalObjects = Hashtable.newFrom({"Medal": thisGDMedalObjectsList});
var thisGDNextTextButtonObjectsList = [...runtimeScene.getObjects("NextTextButton")];
var GDNextTextButtonObjects = Hashtable.newFrom({"NextTextButton": thisGDNextTextButtonObjectsList});
var thisGDBestScoreLabelObjectsList = [...runtimeScene.getObjects("BestScoreLabel")];
var GDBestScoreLabelObjects = Hashtable.newFrom({"BestScoreLabel": thisGDBestScoreLabelObjectsList});
var thisGDBitmapTitleObjectsList = [...runtimeScene.getObjects("BitmapTitle")];
var GDBitmapTitleObjects = Hashtable.newFrom({"BitmapTitle": thisGDBitmapTitleObjectsList});
var thisGDBitmapScoreLabelObjectsList = [...runtimeScene.getObjects("BitmapScoreLabel")];
var GDBitmapScoreLabelObjects = Hashtable.newFrom({"BitmapScoreLabel": thisGDBitmapScoreLabelObjectsList});
var thisGDBitmapBestScoreLabelObjectsList = [...runtimeScene.getObjects("BitmapBestScoreLabel")];
var GDBitmapBestScoreLabelObjects = Hashtable.newFrom({"BitmapBestScoreLabel": thisGDBitmapBestScoreLabelObjectsList});
var thisGDDecorationObjectsList = [...runtimeScene.getObjects("Decoration")];
var GDDecorationObjects = Hashtable.newFrom({"Decoration": thisGDDecorationObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "ScoreLabel": GDScoreLabelObjects
, "PlayerNameInput": GDPlayerNameInputObjects
, "SubmitTextButton": GDSubmitTextButtonObjects
, "RetryTextButton": GDRetryTextButtonObjects
, "Panel": GDPanelObjects
, "Title": GDTitleObjects
, "BackTextButton": GDBackTextButtonObjects
, "Medal": GDMedalObjects
, "NextTextButton": GDNextTextButtonObjects
, "BestScoreLabel": GDBestScoreLabelObjects
, "BitmapTitle": GDBitmapTitleObjects
, "BitmapScoreLabel": GDBitmapScoreLabelObjects
, "BitmapBestScoreLabel": GDBitmapBestScoreLabelObjects
, "Decoration": GDDecorationObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "ScoreLabel": thisGDScoreLabelObjectsList
, "PlayerNameInput": thisGDPlayerNameInputObjectsList
, "SubmitTextButton": thisGDSubmitTextButtonObjectsList
, "RetryTextButton": thisGDRetryTextButtonObjectsList
, "Panel": thisGDPanelObjectsList
, "Title": thisGDTitleObjectsList
, "BackTextButton": thisGDBackTextButtonObjectsList
, "Medal": thisGDMedalObjectsList
, "NextTextButton": thisGDNextTextButtonObjectsList
, "BestScoreLabel": thisGDBestScoreLabelObjectsList
, "BitmapTitle": thisGDBitmapTitleObjectsList
, "BitmapScoreLabel": thisGDBitmapScoreLabelObjectsList
, "BitmapBestScoreLabel": thisGDBitmapBestScoreLabelObjectsList
, "Decoration": thisGDDecorationObjectsList
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetBestScoreContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetBestScoreContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetBestScoreContext.GDScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetBestScoreContext.GDScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetBestScoreContext.GDPlayerNameInputObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetBestScoreContext.GDPlayerNameInputObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetBestScoreContext.GDSubmitTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetBestScoreContext.GDSubmitTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetBestScoreContext.GDRetryTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetBestScoreContext.GDRetryTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetBestScoreContext.GDPanelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetBestScoreContext.GDPanelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetBestScoreContext.GDTitleObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetBestScoreContext.GDTitleObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetBestScoreContext.GDBackTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetBestScoreContext.GDBackTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetBestScoreContext.GDMedalObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetBestScoreContext.GDMedalObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetBestScoreContext.GDNextTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetBestScoreContext.GDNextTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetBestScoreContext.GDBestScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetBestScoreContext.GDBestScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetBestScoreContext.GDBitmapTitleObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetBestScoreContext.GDBitmapTitleObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetBestScoreContext.GDBitmapScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetBestScoreContext.GDBitmapScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetBestScoreContext.GDBitmapBestScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetBestScoreContext.GDBitmapBestScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetBestScoreContext.GDDecorationObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetBestScoreContext.GDDecorationObjects2.length = 0;

gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetBestScoreContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetBestScoreContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetBestScoreContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetBestScoreContext.GDScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetBestScoreContext.GDScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetBestScoreContext.GDPlayerNameInputObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetBestScoreContext.GDPlayerNameInputObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetBestScoreContext.GDSubmitTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetBestScoreContext.GDSubmitTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetBestScoreContext.GDRetryTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetBestScoreContext.GDRetryTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetBestScoreContext.GDPanelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetBestScoreContext.GDPanelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetBestScoreContext.GDTitleObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetBestScoreContext.GDTitleObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetBestScoreContext.GDBackTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetBestScoreContext.GDBackTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetBestScoreContext.GDMedalObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetBestScoreContext.GDMedalObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetBestScoreContext.GDNextTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetBestScoreContext.GDNextTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetBestScoreContext.GDBestScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetBestScoreContext.GDBestScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetBestScoreContext.GDBitmapTitleObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetBestScoreContext.GDBitmapTitleObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetBestScoreContext.GDBitmapScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetBestScoreContext.GDBitmapScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetBestScoreContext.GDBitmapBestScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetBestScoreContext.GDBitmapBestScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetBestScoreContext.GDDecorationObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetBestScoreContext.GDDecorationObjects2.length = 0;


return;
}
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.FormatScoreContext = {};
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.FormatScoreContext.idToCallbackMap = new Map();
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.FormatScoreContext.GDObjectObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.FormatScoreContext.GDObjectObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.FormatScoreContext.GDScoreLabelObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.FormatScoreContext.GDScoreLabelObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.FormatScoreContext.GDPlayerNameInputObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.FormatScoreContext.GDPlayerNameInputObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.FormatScoreContext.GDSubmitTextButtonObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.FormatScoreContext.GDSubmitTextButtonObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.FormatScoreContext.GDRetryTextButtonObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.FormatScoreContext.GDRetryTextButtonObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.FormatScoreContext.GDPanelObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.FormatScoreContext.GDPanelObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.FormatScoreContext.GDTitleObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.FormatScoreContext.GDTitleObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.FormatScoreContext.GDBackTextButtonObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.FormatScoreContext.GDBackTextButtonObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.FormatScoreContext.GDMedalObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.FormatScoreContext.GDMedalObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.FormatScoreContext.GDNextTextButtonObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.FormatScoreContext.GDNextTextButtonObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.FormatScoreContext.GDBestScoreLabelObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.FormatScoreContext.GDBestScoreLabelObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.FormatScoreContext.GDBitmapTitleObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.FormatScoreContext.GDBitmapTitleObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.FormatScoreContext.GDBitmapScoreLabelObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.FormatScoreContext.GDBitmapScoreLabelObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.FormatScoreContext.GDBitmapBestScoreLabelObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.FormatScoreContext.GDBitmapBestScoreLabelObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.FormatScoreContext.GDDecorationObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.FormatScoreContext.GDDecorationObjects2= [];


gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.FormatScoreContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getObjects("Object")[0]._getFormat() == "Number");
}
if (isConditionTrue_0) {
{eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0]._getPrefix() + gdjs.evtTools.common.toString(gdjs.evtTools.common.roundTo(eventsFunctionContext.getArgument("Value"), eventsFunctionContext.getObjects("Object")[0]._getNumberDecimalPoint())) + eventsFunctionContext.getObjects("Object")[0]._getSuffix();}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getObjects("Object")[0]._getFormat() != "Number");
}
if (isConditionTrue_0) {
{eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0]._getPrefix() + gdjs.evtsExt__LeaderboardDialog__FormatTime.func(runtimeScene, eventsFunctionContext.getArgument("Value"), eventsFunctionContext.getObjects("Object")[0]._getFormat(), eventsFunctionContext) + eventsFunctionContext.getObjects("Object")[0]._getSuffix();}
}

}


};

gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.FormatScore = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDScoreLabelObjectsList = [...runtimeScene.getObjects("ScoreLabel")];
var GDScoreLabelObjects = Hashtable.newFrom({"ScoreLabel": thisGDScoreLabelObjectsList});
var thisGDPlayerNameInputObjectsList = [...runtimeScene.getObjects("PlayerNameInput")];
var GDPlayerNameInputObjects = Hashtable.newFrom({"PlayerNameInput": thisGDPlayerNameInputObjectsList});
var thisGDSubmitTextButtonObjectsList = [...runtimeScene.getObjects("SubmitTextButton")];
var GDSubmitTextButtonObjects = Hashtable.newFrom({"SubmitTextButton": thisGDSubmitTextButtonObjectsList});
var thisGDRetryTextButtonObjectsList = [...runtimeScene.getObjects("RetryTextButton")];
var GDRetryTextButtonObjects = Hashtable.newFrom({"RetryTextButton": thisGDRetryTextButtonObjectsList});
var thisGDPanelObjectsList = [...runtimeScene.getObjects("Panel")];
var GDPanelObjects = Hashtable.newFrom({"Panel": thisGDPanelObjectsList});
var thisGDTitleObjectsList = [...runtimeScene.getObjects("Title")];
var GDTitleObjects = Hashtable.newFrom({"Title": thisGDTitleObjectsList});
var thisGDBackTextButtonObjectsList = [...runtimeScene.getObjects("BackTextButton")];
var GDBackTextButtonObjects = Hashtable.newFrom({"BackTextButton": thisGDBackTextButtonObjectsList});
var thisGDMedalObjectsList = [...runtimeScene.getObjects("Medal")];
var GDMedalObjects = Hashtable.newFrom({"Medal": thisGDMedalObjectsList});
var thisGDNextTextButtonObjectsList = [...runtimeScene.getObjects("NextTextButton")];
var GDNextTextButtonObjects = Hashtable.newFrom({"NextTextButton": thisGDNextTextButtonObjectsList});
var thisGDBestScoreLabelObjectsList = [...runtimeScene.getObjects("BestScoreLabel")];
var GDBestScoreLabelObjects = Hashtable.newFrom({"BestScoreLabel": thisGDBestScoreLabelObjectsList});
var thisGDBitmapTitleObjectsList = [...runtimeScene.getObjects("BitmapTitle")];
var GDBitmapTitleObjects = Hashtable.newFrom({"BitmapTitle": thisGDBitmapTitleObjectsList});
var thisGDBitmapScoreLabelObjectsList = [...runtimeScene.getObjects("BitmapScoreLabel")];
var GDBitmapScoreLabelObjects = Hashtable.newFrom({"BitmapScoreLabel": thisGDBitmapScoreLabelObjectsList});
var thisGDBitmapBestScoreLabelObjectsList = [...runtimeScene.getObjects("BitmapBestScoreLabel")];
var GDBitmapBestScoreLabelObjects = Hashtable.newFrom({"BitmapBestScoreLabel": thisGDBitmapBestScoreLabelObjectsList});
var thisGDDecorationObjectsList = [...runtimeScene.getObjects("Decoration")];
var GDDecorationObjects = Hashtable.newFrom({"Decoration": thisGDDecorationObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "ScoreLabel": GDScoreLabelObjects
, "PlayerNameInput": GDPlayerNameInputObjects
, "SubmitTextButton": GDSubmitTextButtonObjects
, "RetryTextButton": GDRetryTextButtonObjects
, "Panel": GDPanelObjects
, "Title": GDTitleObjects
, "BackTextButton": GDBackTextButtonObjects
, "Medal": GDMedalObjects
, "NextTextButton": GDNextTextButtonObjects
, "BestScoreLabel": GDBestScoreLabelObjects
, "BitmapTitle": GDBitmapTitleObjects
, "BitmapScoreLabel": GDBitmapScoreLabelObjects
, "BitmapBestScoreLabel": GDBitmapBestScoreLabelObjects
, "Decoration": GDDecorationObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "ScoreLabel": thisGDScoreLabelObjectsList
, "PlayerNameInput": thisGDPlayerNameInputObjectsList
, "SubmitTextButton": thisGDSubmitTextButtonObjectsList
, "RetryTextButton": thisGDRetryTextButtonObjectsList
, "Panel": thisGDPanelObjectsList
, "Title": thisGDTitleObjectsList
, "BackTextButton": thisGDBackTextButtonObjectsList
, "Medal": thisGDMedalObjectsList
, "NextTextButton": thisGDNextTextButtonObjectsList
, "BestScoreLabel": thisGDBestScoreLabelObjectsList
, "BitmapTitle": thisGDBitmapTitleObjectsList
, "BitmapScoreLabel": thisGDBitmapScoreLabelObjectsList
, "BitmapBestScoreLabel": thisGDBitmapBestScoreLabelObjectsList
, "Decoration": thisGDDecorationObjectsList
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.FormatScoreContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.FormatScoreContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.FormatScoreContext.GDScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.FormatScoreContext.GDScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.FormatScoreContext.GDPlayerNameInputObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.FormatScoreContext.GDPlayerNameInputObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.FormatScoreContext.GDSubmitTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.FormatScoreContext.GDSubmitTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.FormatScoreContext.GDRetryTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.FormatScoreContext.GDRetryTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.FormatScoreContext.GDPanelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.FormatScoreContext.GDPanelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.FormatScoreContext.GDTitleObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.FormatScoreContext.GDTitleObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.FormatScoreContext.GDBackTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.FormatScoreContext.GDBackTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.FormatScoreContext.GDMedalObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.FormatScoreContext.GDMedalObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.FormatScoreContext.GDNextTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.FormatScoreContext.GDNextTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.FormatScoreContext.GDBestScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.FormatScoreContext.GDBestScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.FormatScoreContext.GDBitmapTitleObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.FormatScoreContext.GDBitmapTitleObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.FormatScoreContext.GDBitmapScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.FormatScoreContext.GDBitmapScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.FormatScoreContext.GDBitmapBestScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.FormatScoreContext.GDBitmapBestScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.FormatScoreContext.GDDecorationObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.FormatScoreContext.GDDecorationObjects2.length = 0;

gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.FormatScoreContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.FormatScoreContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.FormatScoreContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.FormatScoreContext.GDScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.FormatScoreContext.GDScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.FormatScoreContext.GDPlayerNameInputObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.FormatScoreContext.GDPlayerNameInputObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.FormatScoreContext.GDSubmitTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.FormatScoreContext.GDSubmitTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.FormatScoreContext.GDRetryTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.FormatScoreContext.GDRetryTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.FormatScoreContext.GDPanelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.FormatScoreContext.GDPanelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.FormatScoreContext.GDTitleObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.FormatScoreContext.GDTitleObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.FormatScoreContext.GDBackTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.FormatScoreContext.GDBackTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.FormatScoreContext.GDMedalObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.FormatScoreContext.GDMedalObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.FormatScoreContext.GDNextTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.FormatScoreContext.GDNextTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.FormatScoreContext.GDBestScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.FormatScoreContext.GDBestScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.FormatScoreContext.GDBitmapTitleObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.FormatScoreContext.GDBitmapTitleObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.FormatScoreContext.GDBitmapScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.FormatScoreContext.GDBitmapScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.FormatScoreContext.GDBitmapBestScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.FormatScoreContext.GDBitmapBestScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.FormatScoreContext.GDDecorationObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.FormatScoreContext.GDDecorationObjects2.length = 0;


return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.DefaultPlayerNameContext = {};
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.DefaultPlayerNameContext.idToCallbackMap = new Map();
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.DefaultPlayerNameContext.GDObjectObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.DefaultPlayerNameContext.GDObjectObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.DefaultPlayerNameContext.GDScoreLabelObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.DefaultPlayerNameContext.GDScoreLabelObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.DefaultPlayerNameContext.GDPlayerNameInputObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.DefaultPlayerNameContext.GDPlayerNameInputObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.DefaultPlayerNameContext.GDSubmitTextButtonObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.DefaultPlayerNameContext.GDSubmitTextButtonObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.DefaultPlayerNameContext.GDRetryTextButtonObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.DefaultPlayerNameContext.GDRetryTextButtonObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.DefaultPlayerNameContext.GDPanelObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.DefaultPlayerNameContext.GDPanelObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.DefaultPlayerNameContext.GDTitleObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.DefaultPlayerNameContext.GDTitleObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.DefaultPlayerNameContext.GDBackTextButtonObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.DefaultPlayerNameContext.GDBackTextButtonObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.DefaultPlayerNameContext.GDMedalObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.DefaultPlayerNameContext.GDMedalObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.DefaultPlayerNameContext.GDNextTextButtonObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.DefaultPlayerNameContext.GDNextTextButtonObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.DefaultPlayerNameContext.GDBestScoreLabelObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.DefaultPlayerNameContext.GDBestScoreLabelObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.DefaultPlayerNameContext.GDBitmapTitleObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.DefaultPlayerNameContext.GDBitmapTitleObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.DefaultPlayerNameContext.GDBitmapScoreLabelObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.DefaultPlayerNameContext.GDBitmapScoreLabelObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.DefaultPlayerNameContext.GDBitmapBestScoreLabelObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.DefaultPlayerNameContext.GDBitmapBestScoreLabelObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.DefaultPlayerNameContext.GDDecorationObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.DefaultPlayerNameContext.GDDecorationObjects2= [];


gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.DefaultPlayerNameContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0]._getDefaultPlayerName();}
}

}


};

gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.DefaultPlayerName = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDScoreLabelObjectsList = [...runtimeScene.getObjects("ScoreLabel")];
var GDScoreLabelObjects = Hashtable.newFrom({"ScoreLabel": thisGDScoreLabelObjectsList});
var thisGDPlayerNameInputObjectsList = [...runtimeScene.getObjects("PlayerNameInput")];
var GDPlayerNameInputObjects = Hashtable.newFrom({"PlayerNameInput": thisGDPlayerNameInputObjectsList});
var thisGDSubmitTextButtonObjectsList = [...runtimeScene.getObjects("SubmitTextButton")];
var GDSubmitTextButtonObjects = Hashtable.newFrom({"SubmitTextButton": thisGDSubmitTextButtonObjectsList});
var thisGDRetryTextButtonObjectsList = [...runtimeScene.getObjects("RetryTextButton")];
var GDRetryTextButtonObjects = Hashtable.newFrom({"RetryTextButton": thisGDRetryTextButtonObjectsList});
var thisGDPanelObjectsList = [...runtimeScene.getObjects("Panel")];
var GDPanelObjects = Hashtable.newFrom({"Panel": thisGDPanelObjectsList});
var thisGDTitleObjectsList = [...runtimeScene.getObjects("Title")];
var GDTitleObjects = Hashtable.newFrom({"Title": thisGDTitleObjectsList});
var thisGDBackTextButtonObjectsList = [...runtimeScene.getObjects("BackTextButton")];
var GDBackTextButtonObjects = Hashtable.newFrom({"BackTextButton": thisGDBackTextButtonObjectsList});
var thisGDMedalObjectsList = [...runtimeScene.getObjects("Medal")];
var GDMedalObjects = Hashtable.newFrom({"Medal": thisGDMedalObjectsList});
var thisGDNextTextButtonObjectsList = [...runtimeScene.getObjects("NextTextButton")];
var GDNextTextButtonObjects = Hashtable.newFrom({"NextTextButton": thisGDNextTextButtonObjectsList});
var thisGDBestScoreLabelObjectsList = [...runtimeScene.getObjects("BestScoreLabel")];
var GDBestScoreLabelObjects = Hashtable.newFrom({"BestScoreLabel": thisGDBestScoreLabelObjectsList});
var thisGDBitmapTitleObjectsList = [...runtimeScene.getObjects("BitmapTitle")];
var GDBitmapTitleObjects = Hashtable.newFrom({"BitmapTitle": thisGDBitmapTitleObjectsList});
var thisGDBitmapScoreLabelObjectsList = [...runtimeScene.getObjects("BitmapScoreLabel")];
var GDBitmapScoreLabelObjects = Hashtable.newFrom({"BitmapScoreLabel": thisGDBitmapScoreLabelObjectsList});
var thisGDBitmapBestScoreLabelObjectsList = [...runtimeScene.getObjects("BitmapBestScoreLabel")];
var GDBitmapBestScoreLabelObjects = Hashtable.newFrom({"BitmapBestScoreLabel": thisGDBitmapBestScoreLabelObjectsList});
var thisGDDecorationObjectsList = [...runtimeScene.getObjects("Decoration")];
var GDDecorationObjects = Hashtable.newFrom({"Decoration": thisGDDecorationObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "ScoreLabel": GDScoreLabelObjects
, "PlayerNameInput": GDPlayerNameInputObjects
, "SubmitTextButton": GDSubmitTextButtonObjects
, "RetryTextButton": GDRetryTextButtonObjects
, "Panel": GDPanelObjects
, "Title": GDTitleObjects
, "BackTextButton": GDBackTextButtonObjects
, "Medal": GDMedalObjects
, "NextTextButton": GDNextTextButtonObjects
, "BestScoreLabel": GDBestScoreLabelObjects
, "BitmapTitle": GDBitmapTitleObjects
, "BitmapScoreLabel": GDBitmapScoreLabelObjects
, "BitmapBestScoreLabel": GDBitmapBestScoreLabelObjects
, "Decoration": GDDecorationObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "ScoreLabel": thisGDScoreLabelObjectsList
, "PlayerNameInput": thisGDPlayerNameInputObjectsList
, "SubmitTextButton": thisGDSubmitTextButtonObjectsList
, "RetryTextButton": thisGDRetryTextButtonObjectsList
, "Panel": thisGDPanelObjectsList
, "Title": thisGDTitleObjectsList
, "BackTextButton": thisGDBackTextButtonObjectsList
, "Medal": thisGDMedalObjectsList
, "NextTextButton": thisGDNextTextButtonObjectsList
, "BestScoreLabel": thisGDBestScoreLabelObjectsList
, "BitmapTitle": thisGDBitmapTitleObjectsList
, "BitmapScoreLabel": thisGDBitmapScoreLabelObjectsList
, "BitmapBestScoreLabel": thisGDBitmapBestScoreLabelObjectsList
, "Decoration": thisGDDecorationObjectsList
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.DefaultPlayerNameContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.DefaultPlayerNameContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.DefaultPlayerNameContext.GDScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.DefaultPlayerNameContext.GDScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.DefaultPlayerNameContext.GDPlayerNameInputObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.DefaultPlayerNameContext.GDPlayerNameInputObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.DefaultPlayerNameContext.GDSubmitTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.DefaultPlayerNameContext.GDSubmitTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.DefaultPlayerNameContext.GDRetryTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.DefaultPlayerNameContext.GDRetryTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.DefaultPlayerNameContext.GDPanelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.DefaultPlayerNameContext.GDPanelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.DefaultPlayerNameContext.GDTitleObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.DefaultPlayerNameContext.GDTitleObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.DefaultPlayerNameContext.GDBackTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.DefaultPlayerNameContext.GDBackTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.DefaultPlayerNameContext.GDMedalObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.DefaultPlayerNameContext.GDMedalObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.DefaultPlayerNameContext.GDNextTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.DefaultPlayerNameContext.GDNextTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.DefaultPlayerNameContext.GDBestScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.DefaultPlayerNameContext.GDBestScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.DefaultPlayerNameContext.GDBitmapTitleObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.DefaultPlayerNameContext.GDBitmapTitleObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.DefaultPlayerNameContext.GDBitmapScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.DefaultPlayerNameContext.GDBitmapScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.DefaultPlayerNameContext.GDBitmapBestScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.DefaultPlayerNameContext.GDBitmapBestScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.DefaultPlayerNameContext.GDDecorationObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.DefaultPlayerNameContext.GDDecorationObjects2.length = 0;

gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.DefaultPlayerNameContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.DefaultPlayerNameContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.DefaultPlayerNameContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.DefaultPlayerNameContext.GDScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.DefaultPlayerNameContext.GDScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.DefaultPlayerNameContext.GDPlayerNameInputObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.DefaultPlayerNameContext.GDPlayerNameInputObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.DefaultPlayerNameContext.GDSubmitTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.DefaultPlayerNameContext.GDSubmitTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.DefaultPlayerNameContext.GDRetryTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.DefaultPlayerNameContext.GDRetryTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.DefaultPlayerNameContext.GDPanelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.DefaultPlayerNameContext.GDPanelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.DefaultPlayerNameContext.GDTitleObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.DefaultPlayerNameContext.GDTitleObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.DefaultPlayerNameContext.GDBackTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.DefaultPlayerNameContext.GDBackTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.DefaultPlayerNameContext.GDMedalObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.DefaultPlayerNameContext.GDMedalObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.DefaultPlayerNameContext.GDNextTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.DefaultPlayerNameContext.GDNextTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.DefaultPlayerNameContext.GDBestScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.DefaultPlayerNameContext.GDBestScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.DefaultPlayerNameContext.GDBitmapTitleObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.DefaultPlayerNameContext.GDBitmapTitleObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.DefaultPlayerNameContext.GDBitmapScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.DefaultPlayerNameContext.GDBitmapScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.DefaultPlayerNameContext.GDBitmapBestScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.DefaultPlayerNameContext.GDBitmapBestScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.DefaultPlayerNameContext.GDDecorationObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.DefaultPlayerNameContext.GDDecorationObjects2.length = 0;


return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetDefaultPlayerNameContext = {};
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetDefaultPlayerNameContext.idToCallbackMap = new Map();
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetDefaultPlayerNameContext.GDObjectObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetDefaultPlayerNameContext.GDObjectObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetDefaultPlayerNameContext.GDScoreLabelObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetDefaultPlayerNameContext.GDScoreLabelObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetDefaultPlayerNameContext.GDPlayerNameInputObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetDefaultPlayerNameContext.GDPlayerNameInputObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetDefaultPlayerNameContext.GDSubmitTextButtonObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetDefaultPlayerNameContext.GDSubmitTextButtonObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetDefaultPlayerNameContext.GDRetryTextButtonObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetDefaultPlayerNameContext.GDRetryTextButtonObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetDefaultPlayerNameContext.GDPanelObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetDefaultPlayerNameContext.GDPanelObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetDefaultPlayerNameContext.GDTitleObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetDefaultPlayerNameContext.GDTitleObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetDefaultPlayerNameContext.GDBackTextButtonObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetDefaultPlayerNameContext.GDBackTextButtonObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetDefaultPlayerNameContext.GDMedalObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetDefaultPlayerNameContext.GDMedalObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetDefaultPlayerNameContext.GDNextTextButtonObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetDefaultPlayerNameContext.GDNextTextButtonObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetDefaultPlayerNameContext.GDBestScoreLabelObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetDefaultPlayerNameContext.GDBestScoreLabelObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetDefaultPlayerNameContext.GDBitmapTitleObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetDefaultPlayerNameContext.GDBitmapTitleObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetDefaultPlayerNameContext.GDBitmapScoreLabelObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetDefaultPlayerNameContext.GDBitmapScoreLabelObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetDefaultPlayerNameContext.GDBitmapBestScoreLabelObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetDefaultPlayerNameContext.GDBitmapBestScoreLabelObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetDefaultPlayerNameContext.GDDecorationObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetDefaultPlayerNameContext.GDDecorationObjects2= [];


gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetDefaultPlayerNameContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0]._setDefaultPlayerName(eventsFunctionContext.getArgument("Value"))
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.playerAuthentication.isAuthenticated());
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getObjects("Object")[0]._getDefaultPlayerName() != "0");
}
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("PlayerNameInput"), gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetDefaultPlayerNameContext.GDPlayerNameInputObjects1);
{for(var i = 0, len = gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetDefaultPlayerNameContext.GDPlayerNameInputObjects1.length ;i < len;++i) {
    gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetDefaultPlayerNameContext.GDPlayerNameInputObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Text")).setText(eventsFunctionContext.getObjects("Object")[0]._getDefaultPlayerName());
}
}
}

}


};

gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetDefaultPlayerName = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDScoreLabelObjectsList = [...runtimeScene.getObjects("ScoreLabel")];
var GDScoreLabelObjects = Hashtable.newFrom({"ScoreLabel": thisGDScoreLabelObjectsList});
var thisGDPlayerNameInputObjectsList = [...runtimeScene.getObjects("PlayerNameInput")];
var GDPlayerNameInputObjects = Hashtable.newFrom({"PlayerNameInput": thisGDPlayerNameInputObjectsList});
var thisGDSubmitTextButtonObjectsList = [...runtimeScene.getObjects("SubmitTextButton")];
var GDSubmitTextButtonObjects = Hashtable.newFrom({"SubmitTextButton": thisGDSubmitTextButtonObjectsList});
var thisGDRetryTextButtonObjectsList = [...runtimeScene.getObjects("RetryTextButton")];
var GDRetryTextButtonObjects = Hashtable.newFrom({"RetryTextButton": thisGDRetryTextButtonObjectsList});
var thisGDPanelObjectsList = [...runtimeScene.getObjects("Panel")];
var GDPanelObjects = Hashtable.newFrom({"Panel": thisGDPanelObjectsList});
var thisGDTitleObjectsList = [...runtimeScene.getObjects("Title")];
var GDTitleObjects = Hashtable.newFrom({"Title": thisGDTitleObjectsList});
var thisGDBackTextButtonObjectsList = [...runtimeScene.getObjects("BackTextButton")];
var GDBackTextButtonObjects = Hashtable.newFrom({"BackTextButton": thisGDBackTextButtonObjectsList});
var thisGDMedalObjectsList = [...runtimeScene.getObjects("Medal")];
var GDMedalObjects = Hashtable.newFrom({"Medal": thisGDMedalObjectsList});
var thisGDNextTextButtonObjectsList = [...runtimeScene.getObjects("NextTextButton")];
var GDNextTextButtonObjects = Hashtable.newFrom({"NextTextButton": thisGDNextTextButtonObjectsList});
var thisGDBestScoreLabelObjectsList = [...runtimeScene.getObjects("BestScoreLabel")];
var GDBestScoreLabelObjects = Hashtable.newFrom({"BestScoreLabel": thisGDBestScoreLabelObjectsList});
var thisGDBitmapTitleObjectsList = [...runtimeScene.getObjects("BitmapTitle")];
var GDBitmapTitleObjects = Hashtable.newFrom({"BitmapTitle": thisGDBitmapTitleObjectsList});
var thisGDBitmapScoreLabelObjectsList = [...runtimeScene.getObjects("BitmapScoreLabel")];
var GDBitmapScoreLabelObjects = Hashtable.newFrom({"BitmapScoreLabel": thisGDBitmapScoreLabelObjectsList});
var thisGDBitmapBestScoreLabelObjectsList = [...runtimeScene.getObjects("BitmapBestScoreLabel")];
var GDBitmapBestScoreLabelObjects = Hashtable.newFrom({"BitmapBestScoreLabel": thisGDBitmapBestScoreLabelObjectsList});
var thisGDDecorationObjectsList = [...runtimeScene.getObjects("Decoration")];
var GDDecorationObjects = Hashtable.newFrom({"Decoration": thisGDDecorationObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "ScoreLabel": GDScoreLabelObjects
, "PlayerNameInput": GDPlayerNameInputObjects
, "SubmitTextButton": GDSubmitTextButtonObjects
, "RetryTextButton": GDRetryTextButtonObjects
, "Panel": GDPanelObjects
, "Title": GDTitleObjects
, "BackTextButton": GDBackTextButtonObjects
, "Medal": GDMedalObjects
, "NextTextButton": GDNextTextButtonObjects
, "BestScoreLabel": GDBestScoreLabelObjects
, "BitmapTitle": GDBitmapTitleObjects
, "BitmapScoreLabel": GDBitmapScoreLabelObjects
, "BitmapBestScoreLabel": GDBitmapBestScoreLabelObjects
, "Decoration": GDDecorationObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "ScoreLabel": thisGDScoreLabelObjectsList
, "PlayerNameInput": thisGDPlayerNameInputObjectsList
, "SubmitTextButton": thisGDSubmitTextButtonObjectsList
, "RetryTextButton": thisGDRetryTextButtonObjectsList
, "Panel": thisGDPanelObjectsList
, "Title": thisGDTitleObjectsList
, "BackTextButton": thisGDBackTextButtonObjectsList
, "Medal": thisGDMedalObjectsList
, "NextTextButton": thisGDNextTextButtonObjectsList
, "BestScoreLabel": thisGDBestScoreLabelObjectsList
, "BitmapTitle": thisGDBitmapTitleObjectsList
, "BitmapScoreLabel": thisGDBitmapScoreLabelObjectsList
, "BitmapBestScoreLabel": thisGDBitmapBestScoreLabelObjectsList
, "Decoration": thisGDDecorationObjectsList
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetDefaultPlayerNameContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetDefaultPlayerNameContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetDefaultPlayerNameContext.GDScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetDefaultPlayerNameContext.GDScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetDefaultPlayerNameContext.GDPlayerNameInputObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetDefaultPlayerNameContext.GDPlayerNameInputObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetDefaultPlayerNameContext.GDSubmitTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetDefaultPlayerNameContext.GDSubmitTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetDefaultPlayerNameContext.GDRetryTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetDefaultPlayerNameContext.GDRetryTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetDefaultPlayerNameContext.GDPanelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetDefaultPlayerNameContext.GDPanelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetDefaultPlayerNameContext.GDTitleObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetDefaultPlayerNameContext.GDTitleObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetDefaultPlayerNameContext.GDBackTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetDefaultPlayerNameContext.GDBackTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetDefaultPlayerNameContext.GDMedalObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetDefaultPlayerNameContext.GDMedalObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetDefaultPlayerNameContext.GDNextTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetDefaultPlayerNameContext.GDNextTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetDefaultPlayerNameContext.GDBestScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetDefaultPlayerNameContext.GDBestScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetDefaultPlayerNameContext.GDBitmapTitleObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetDefaultPlayerNameContext.GDBitmapTitleObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetDefaultPlayerNameContext.GDBitmapScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetDefaultPlayerNameContext.GDBitmapScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetDefaultPlayerNameContext.GDBitmapBestScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetDefaultPlayerNameContext.GDBitmapBestScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetDefaultPlayerNameContext.GDDecorationObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetDefaultPlayerNameContext.GDDecorationObjects2.length = 0;

gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetDefaultPlayerNameContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetDefaultPlayerNameContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetDefaultPlayerNameContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetDefaultPlayerNameContext.GDScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetDefaultPlayerNameContext.GDScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetDefaultPlayerNameContext.GDPlayerNameInputObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetDefaultPlayerNameContext.GDPlayerNameInputObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetDefaultPlayerNameContext.GDSubmitTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetDefaultPlayerNameContext.GDSubmitTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetDefaultPlayerNameContext.GDRetryTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetDefaultPlayerNameContext.GDRetryTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetDefaultPlayerNameContext.GDPanelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetDefaultPlayerNameContext.GDPanelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetDefaultPlayerNameContext.GDTitleObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetDefaultPlayerNameContext.GDTitleObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetDefaultPlayerNameContext.GDBackTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetDefaultPlayerNameContext.GDBackTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetDefaultPlayerNameContext.GDMedalObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetDefaultPlayerNameContext.GDMedalObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetDefaultPlayerNameContext.GDNextTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetDefaultPlayerNameContext.GDNextTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetDefaultPlayerNameContext.GDBestScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetDefaultPlayerNameContext.GDBestScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetDefaultPlayerNameContext.GDBitmapTitleObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetDefaultPlayerNameContext.GDBitmapTitleObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetDefaultPlayerNameContext.GDBitmapScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetDefaultPlayerNameContext.GDBitmapScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetDefaultPlayerNameContext.GDBitmapBestScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetDefaultPlayerNameContext.GDBitmapBestScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetDefaultPlayerNameContext.GDDecorationObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetDefaultPlayerNameContext.GDDecorationObjects2.length = 0;


return;
}
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.PlayerNameContext = {};
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.PlayerNameContext.idToCallbackMap = new Map();
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.PlayerNameContext.GDObjectObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.PlayerNameContext.GDObjectObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.PlayerNameContext.GDScoreLabelObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.PlayerNameContext.GDScoreLabelObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.PlayerNameContext.GDPlayerNameInputObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.PlayerNameContext.GDPlayerNameInputObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.PlayerNameContext.GDSubmitTextButtonObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.PlayerNameContext.GDSubmitTextButtonObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.PlayerNameContext.GDRetryTextButtonObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.PlayerNameContext.GDRetryTextButtonObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.PlayerNameContext.GDPanelObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.PlayerNameContext.GDPanelObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.PlayerNameContext.GDTitleObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.PlayerNameContext.GDTitleObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.PlayerNameContext.GDBackTextButtonObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.PlayerNameContext.GDBackTextButtonObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.PlayerNameContext.GDMedalObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.PlayerNameContext.GDMedalObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.PlayerNameContext.GDNextTextButtonObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.PlayerNameContext.GDNextTextButtonObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.PlayerNameContext.GDBestScoreLabelObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.PlayerNameContext.GDBestScoreLabelObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.PlayerNameContext.GDBitmapTitleObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.PlayerNameContext.GDBitmapTitleObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.PlayerNameContext.GDBitmapScoreLabelObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.PlayerNameContext.GDBitmapScoreLabelObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.PlayerNameContext.GDBitmapBestScoreLabelObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.PlayerNameContext.GDBitmapBestScoreLabelObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.PlayerNameContext.GDDecorationObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.PlayerNameContext.GDDecorationObjects2= [];


gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.PlayerNameContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("PlayerNameInput"), gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.PlayerNameContext.GDPlayerNameInputObjects1);
{eventsFunctionContext.returnValue = (( gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.PlayerNameContext.GDPlayerNameInputObjects1.length === 0 ) ? "" :gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.PlayerNameContext.GDPlayerNameInputObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Text")).getText());}
}

}


};

gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.PlayerName = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDScoreLabelObjectsList = [...runtimeScene.getObjects("ScoreLabel")];
var GDScoreLabelObjects = Hashtable.newFrom({"ScoreLabel": thisGDScoreLabelObjectsList});
var thisGDPlayerNameInputObjectsList = [...runtimeScene.getObjects("PlayerNameInput")];
var GDPlayerNameInputObjects = Hashtable.newFrom({"PlayerNameInput": thisGDPlayerNameInputObjectsList});
var thisGDSubmitTextButtonObjectsList = [...runtimeScene.getObjects("SubmitTextButton")];
var GDSubmitTextButtonObjects = Hashtable.newFrom({"SubmitTextButton": thisGDSubmitTextButtonObjectsList});
var thisGDRetryTextButtonObjectsList = [...runtimeScene.getObjects("RetryTextButton")];
var GDRetryTextButtonObjects = Hashtable.newFrom({"RetryTextButton": thisGDRetryTextButtonObjectsList});
var thisGDPanelObjectsList = [...runtimeScene.getObjects("Panel")];
var GDPanelObjects = Hashtable.newFrom({"Panel": thisGDPanelObjectsList});
var thisGDTitleObjectsList = [...runtimeScene.getObjects("Title")];
var GDTitleObjects = Hashtable.newFrom({"Title": thisGDTitleObjectsList});
var thisGDBackTextButtonObjectsList = [...runtimeScene.getObjects("BackTextButton")];
var GDBackTextButtonObjects = Hashtable.newFrom({"BackTextButton": thisGDBackTextButtonObjectsList});
var thisGDMedalObjectsList = [...runtimeScene.getObjects("Medal")];
var GDMedalObjects = Hashtable.newFrom({"Medal": thisGDMedalObjectsList});
var thisGDNextTextButtonObjectsList = [...runtimeScene.getObjects("NextTextButton")];
var GDNextTextButtonObjects = Hashtable.newFrom({"NextTextButton": thisGDNextTextButtonObjectsList});
var thisGDBestScoreLabelObjectsList = [...runtimeScene.getObjects("BestScoreLabel")];
var GDBestScoreLabelObjects = Hashtable.newFrom({"BestScoreLabel": thisGDBestScoreLabelObjectsList});
var thisGDBitmapTitleObjectsList = [...runtimeScene.getObjects("BitmapTitle")];
var GDBitmapTitleObjects = Hashtable.newFrom({"BitmapTitle": thisGDBitmapTitleObjectsList});
var thisGDBitmapScoreLabelObjectsList = [...runtimeScene.getObjects("BitmapScoreLabel")];
var GDBitmapScoreLabelObjects = Hashtable.newFrom({"BitmapScoreLabel": thisGDBitmapScoreLabelObjectsList});
var thisGDBitmapBestScoreLabelObjectsList = [...runtimeScene.getObjects("BitmapBestScoreLabel")];
var GDBitmapBestScoreLabelObjects = Hashtable.newFrom({"BitmapBestScoreLabel": thisGDBitmapBestScoreLabelObjectsList});
var thisGDDecorationObjectsList = [...runtimeScene.getObjects("Decoration")];
var GDDecorationObjects = Hashtable.newFrom({"Decoration": thisGDDecorationObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "ScoreLabel": GDScoreLabelObjects
, "PlayerNameInput": GDPlayerNameInputObjects
, "SubmitTextButton": GDSubmitTextButtonObjects
, "RetryTextButton": GDRetryTextButtonObjects
, "Panel": GDPanelObjects
, "Title": GDTitleObjects
, "BackTextButton": GDBackTextButtonObjects
, "Medal": GDMedalObjects
, "NextTextButton": GDNextTextButtonObjects
, "BestScoreLabel": GDBestScoreLabelObjects
, "BitmapTitle": GDBitmapTitleObjects
, "BitmapScoreLabel": GDBitmapScoreLabelObjects
, "BitmapBestScoreLabel": GDBitmapBestScoreLabelObjects
, "Decoration": GDDecorationObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "ScoreLabel": thisGDScoreLabelObjectsList
, "PlayerNameInput": thisGDPlayerNameInputObjectsList
, "SubmitTextButton": thisGDSubmitTextButtonObjectsList
, "RetryTextButton": thisGDRetryTextButtonObjectsList
, "Panel": thisGDPanelObjectsList
, "Title": thisGDTitleObjectsList
, "BackTextButton": thisGDBackTextButtonObjectsList
, "Medal": thisGDMedalObjectsList
, "NextTextButton": thisGDNextTextButtonObjectsList
, "BestScoreLabel": thisGDBestScoreLabelObjectsList
, "BitmapTitle": thisGDBitmapTitleObjectsList
, "BitmapScoreLabel": thisGDBitmapScoreLabelObjectsList
, "BitmapBestScoreLabel": thisGDBitmapBestScoreLabelObjectsList
, "Decoration": thisGDDecorationObjectsList
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.PlayerNameContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.PlayerNameContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.PlayerNameContext.GDScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.PlayerNameContext.GDScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.PlayerNameContext.GDPlayerNameInputObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.PlayerNameContext.GDPlayerNameInputObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.PlayerNameContext.GDSubmitTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.PlayerNameContext.GDSubmitTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.PlayerNameContext.GDRetryTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.PlayerNameContext.GDRetryTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.PlayerNameContext.GDPanelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.PlayerNameContext.GDPanelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.PlayerNameContext.GDTitleObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.PlayerNameContext.GDTitleObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.PlayerNameContext.GDBackTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.PlayerNameContext.GDBackTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.PlayerNameContext.GDMedalObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.PlayerNameContext.GDMedalObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.PlayerNameContext.GDNextTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.PlayerNameContext.GDNextTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.PlayerNameContext.GDBestScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.PlayerNameContext.GDBestScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.PlayerNameContext.GDBitmapTitleObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.PlayerNameContext.GDBitmapTitleObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.PlayerNameContext.GDBitmapScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.PlayerNameContext.GDBitmapScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.PlayerNameContext.GDBitmapBestScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.PlayerNameContext.GDBitmapBestScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.PlayerNameContext.GDDecorationObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.PlayerNameContext.GDDecorationObjects2.length = 0;

gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.PlayerNameContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.PlayerNameContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.PlayerNameContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.PlayerNameContext.GDScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.PlayerNameContext.GDScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.PlayerNameContext.GDPlayerNameInputObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.PlayerNameContext.GDPlayerNameInputObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.PlayerNameContext.GDSubmitTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.PlayerNameContext.GDSubmitTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.PlayerNameContext.GDRetryTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.PlayerNameContext.GDRetryTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.PlayerNameContext.GDPanelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.PlayerNameContext.GDPanelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.PlayerNameContext.GDTitleObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.PlayerNameContext.GDTitleObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.PlayerNameContext.GDBackTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.PlayerNameContext.GDBackTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.PlayerNameContext.GDMedalObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.PlayerNameContext.GDMedalObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.PlayerNameContext.GDNextTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.PlayerNameContext.GDNextTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.PlayerNameContext.GDBestScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.PlayerNameContext.GDBestScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.PlayerNameContext.GDBitmapTitleObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.PlayerNameContext.GDBitmapTitleObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.PlayerNameContext.GDBitmapScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.PlayerNameContext.GDBitmapScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.PlayerNameContext.GDBitmapBestScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.PlayerNameContext.GDBitmapBestScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.PlayerNameContext.GDDecorationObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.PlayerNameContext.GDDecorationObjects2.length = 0;


return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsRestartClickedContext = {};
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsRestartClickedContext.idToCallbackMap = new Map();
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsRestartClickedContext.GDObjectObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsRestartClickedContext.GDObjectObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsRestartClickedContext.GDScoreLabelObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsRestartClickedContext.GDScoreLabelObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsRestartClickedContext.GDPlayerNameInputObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsRestartClickedContext.GDPlayerNameInputObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsRestartClickedContext.GDSubmitTextButtonObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsRestartClickedContext.GDSubmitTextButtonObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsRestartClickedContext.GDRetryTextButtonObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsRestartClickedContext.GDRetryTextButtonObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsRestartClickedContext.GDPanelObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsRestartClickedContext.GDPanelObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsRestartClickedContext.GDTitleObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsRestartClickedContext.GDTitleObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsRestartClickedContext.GDBackTextButtonObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsRestartClickedContext.GDBackTextButtonObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsRestartClickedContext.GDMedalObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsRestartClickedContext.GDMedalObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsRestartClickedContext.GDNextTextButtonObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsRestartClickedContext.GDNextTextButtonObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsRestartClickedContext.GDBestScoreLabelObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsRestartClickedContext.GDBestScoreLabelObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsRestartClickedContext.GDBitmapTitleObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsRestartClickedContext.GDBitmapTitleObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsRestartClickedContext.GDBitmapScoreLabelObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsRestartClickedContext.GDBitmapScoreLabelObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsRestartClickedContext.GDBitmapBestScoreLabelObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsRestartClickedContext.GDBitmapBestScoreLabelObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsRestartClickedContext.GDDecorationObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsRestartClickedContext.GDDecorationObjects2= [];


gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsRestartClickedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("RetryTextButton"), gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsRestartClickedContext.GDRetryTextButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsRestartClickedContext.GDRetryTextButtonObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsRestartClickedContext.GDRetryTextButtonObjects1[i].IsClicked(eventsFunctionContext) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsRestartClickedContext.GDRetryTextButtonObjects1[k] = gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsRestartClickedContext.GDRetryTextButtonObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsRestartClickedContext.GDRetryTextButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.playerAuthentication.removeAuthenticationBanner(runtimeScene);
}
{eventsFunctionContext.returnValue = true;}
}

}


};

gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsRestartClicked = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDScoreLabelObjectsList = [...runtimeScene.getObjects("ScoreLabel")];
var GDScoreLabelObjects = Hashtable.newFrom({"ScoreLabel": thisGDScoreLabelObjectsList});
var thisGDPlayerNameInputObjectsList = [...runtimeScene.getObjects("PlayerNameInput")];
var GDPlayerNameInputObjects = Hashtable.newFrom({"PlayerNameInput": thisGDPlayerNameInputObjectsList});
var thisGDSubmitTextButtonObjectsList = [...runtimeScene.getObjects("SubmitTextButton")];
var GDSubmitTextButtonObjects = Hashtable.newFrom({"SubmitTextButton": thisGDSubmitTextButtonObjectsList});
var thisGDRetryTextButtonObjectsList = [...runtimeScene.getObjects("RetryTextButton")];
var GDRetryTextButtonObjects = Hashtable.newFrom({"RetryTextButton": thisGDRetryTextButtonObjectsList});
var thisGDPanelObjectsList = [...runtimeScene.getObjects("Panel")];
var GDPanelObjects = Hashtable.newFrom({"Panel": thisGDPanelObjectsList});
var thisGDTitleObjectsList = [...runtimeScene.getObjects("Title")];
var GDTitleObjects = Hashtable.newFrom({"Title": thisGDTitleObjectsList});
var thisGDBackTextButtonObjectsList = [...runtimeScene.getObjects("BackTextButton")];
var GDBackTextButtonObjects = Hashtable.newFrom({"BackTextButton": thisGDBackTextButtonObjectsList});
var thisGDMedalObjectsList = [...runtimeScene.getObjects("Medal")];
var GDMedalObjects = Hashtable.newFrom({"Medal": thisGDMedalObjectsList});
var thisGDNextTextButtonObjectsList = [...runtimeScene.getObjects("NextTextButton")];
var GDNextTextButtonObjects = Hashtable.newFrom({"NextTextButton": thisGDNextTextButtonObjectsList});
var thisGDBestScoreLabelObjectsList = [...runtimeScene.getObjects("BestScoreLabel")];
var GDBestScoreLabelObjects = Hashtable.newFrom({"BestScoreLabel": thisGDBestScoreLabelObjectsList});
var thisGDBitmapTitleObjectsList = [...runtimeScene.getObjects("BitmapTitle")];
var GDBitmapTitleObjects = Hashtable.newFrom({"BitmapTitle": thisGDBitmapTitleObjectsList});
var thisGDBitmapScoreLabelObjectsList = [...runtimeScene.getObjects("BitmapScoreLabel")];
var GDBitmapScoreLabelObjects = Hashtable.newFrom({"BitmapScoreLabel": thisGDBitmapScoreLabelObjectsList});
var thisGDBitmapBestScoreLabelObjectsList = [...runtimeScene.getObjects("BitmapBestScoreLabel")];
var GDBitmapBestScoreLabelObjects = Hashtable.newFrom({"BitmapBestScoreLabel": thisGDBitmapBestScoreLabelObjectsList});
var thisGDDecorationObjectsList = [...runtimeScene.getObjects("Decoration")];
var GDDecorationObjects = Hashtable.newFrom({"Decoration": thisGDDecorationObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "ScoreLabel": GDScoreLabelObjects
, "PlayerNameInput": GDPlayerNameInputObjects
, "SubmitTextButton": GDSubmitTextButtonObjects
, "RetryTextButton": GDRetryTextButtonObjects
, "Panel": GDPanelObjects
, "Title": GDTitleObjects
, "BackTextButton": GDBackTextButtonObjects
, "Medal": GDMedalObjects
, "NextTextButton": GDNextTextButtonObjects
, "BestScoreLabel": GDBestScoreLabelObjects
, "BitmapTitle": GDBitmapTitleObjects
, "BitmapScoreLabel": GDBitmapScoreLabelObjects
, "BitmapBestScoreLabel": GDBitmapBestScoreLabelObjects
, "Decoration": GDDecorationObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "ScoreLabel": thisGDScoreLabelObjectsList
, "PlayerNameInput": thisGDPlayerNameInputObjectsList
, "SubmitTextButton": thisGDSubmitTextButtonObjectsList
, "RetryTextButton": thisGDRetryTextButtonObjectsList
, "Panel": thisGDPanelObjectsList
, "Title": thisGDTitleObjectsList
, "BackTextButton": thisGDBackTextButtonObjectsList
, "Medal": thisGDMedalObjectsList
, "NextTextButton": thisGDNextTextButtonObjectsList
, "BestScoreLabel": thisGDBestScoreLabelObjectsList
, "BitmapTitle": thisGDBitmapTitleObjectsList
, "BitmapScoreLabel": thisGDBitmapScoreLabelObjectsList
, "BitmapBestScoreLabel": thisGDBitmapBestScoreLabelObjectsList
, "Decoration": thisGDDecorationObjectsList
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsRestartClickedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsRestartClickedContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsRestartClickedContext.GDScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsRestartClickedContext.GDScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsRestartClickedContext.GDPlayerNameInputObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsRestartClickedContext.GDPlayerNameInputObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsRestartClickedContext.GDSubmitTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsRestartClickedContext.GDSubmitTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsRestartClickedContext.GDRetryTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsRestartClickedContext.GDRetryTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsRestartClickedContext.GDPanelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsRestartClickedContext.GDPanelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsRestartClickedContext.GDTitleObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsRestartClickedContext.GDTitleObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsRestartClickedContext.GDBackTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsRestartClickedContext.GDBackTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsRestartClickedContext.GDMedalObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsRestartClickedContext.GDMedalObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsRestartClickedContext.GDNextTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsRestartClickedContext.GDNextTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsRestartClickedContext.GDBestScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsRestartClickedContext.GDBestScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsRestartClickedContext.GDBitmapTitleObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsRestartClickedContext.GDBitmapTitleObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsRestartClickedContext.GDBitmapScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsRestartClickedContext.GDBitmapScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsRestartClickedContext.GDBitmapBestScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsRestartClickedContext.GDBitmapBestScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsRestartClickedContext.GDDecorationObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsRestartClickedContext.GDDecorationObjects2.length = 0;

gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsRestartClickedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsRestartClickedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsRestartClickedContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsRestartClickedContext.GDScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsRestartClickedContext.GDScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsRestartClickedContext.GDPlayerNameInputObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsRestartClickedContext.GDPlayerNameInputObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsRestartClickedContext.GDSubmitTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsRestartClickedContext.GDSubmitTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsRestartClickedContext.GDRetryTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsRestartClickedContext.GDRetryTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsRestartClickedContext.GDPanelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsRestartClickedContext.GDPanelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsRestartClickedContext.GDTitleObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsRestartClickedContext.GDTitleObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsRestartClickedContext.GDBackTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsRestartClickedContext.GDBackTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsRestartClickedContext.GDMedalObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsRestartClickedContext.GDMedalObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsRestartClickedContext.GDNextTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsRestartClickedContext.GDNextTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsRestartClickedContext.GDBestScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsRestartClickedContext.GDBestScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsRestartClickedContext.GDBitmapTitleObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsRestartClickedContext.GDBitmapTitleObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsRestartClickedContext.GDBitmapScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsRestartClickedContext.GDBitmapScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsRestartClickedContext.GDBitmapBestScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsRestartClickedContext.GDBitmapBestScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsRestartClickedContext.GDDecorationObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsRestartClickedContext.GDDecorationObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsNextClickedContext = {};
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsNextClickedContext.idToCallbackMap = new Map();
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsNextClickedContext.GDObjectObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsNextClickedContext.GDObjectObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsNextClickedContext.GDScoreLabelObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsNextClickedContext.GDScoreLabelObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsNextClickedContext.GDPlayerNameInputObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsNextClickedContext.GDPlayerNameInputObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsNextClickedContext.GDSubmitTextButtonObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsNextClickedContext.GDSubmitTextButtonObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsNextClickedContext.GDRetryTextButtonObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsNextClickedContext.GDRetryTextButtonObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsNextClickedContext.GDPanelObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsNextClickedContext.GDPanelObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsNextClickedContext.GDTitleObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsNextClickedContext.GDTitleObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsNextClickedContext.GDBackTextButtonObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsNextClickedContext.GDBackTextButtonObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsNextClickedContext.GDMedalObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsNextClickedContext.GDMedalObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsNextClickedContext.GDNextTextButtonObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsNextClickedContext.GDNextTextButtonObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsNextClickedContext.GDBestScoreLabelObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsNextClickedContext.GDBestScoreLabelObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsNextClickedContext.GDBitmapTitleObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsNextClickedContext.GDBitmapTitleObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsNextClickedContext.GDBitmapScoreLabelObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsNextClickedContext.GDBitmapScoreLabelObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsNextClickedContext.GDBitmapBestScoreLabelObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsNextClickedContext.GDBitmapBestScoreLabelObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsNextClickedContext.GDDecorationObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsNextClickedContext.GDDecorationObjects2= [];


gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsNextClickedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("NextTextButton"), gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsNextClickedContext.GDNextTextButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsNextClickedContext.GDNextTextButtonObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsNextClickedContext.GDNextTextButtonObjects1[i].IsClicked(eventsFunctionContext) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsNextClickedContext.GDNextTextButtonObjects1[k] = gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsNextClickedContext.GDNextTextButtonObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsNextClickedContext.GDNextTextButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.playerAuthentication.removeAuthenticationBanner(runtimeScene);
}
{eventsFunctionContext.returnValue = true;}
}

}


};

gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsNextClicked = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDScoreLabelObjectsList = [...runtimeScene.getObjects("ScoreLabel")];
var GDScoreLabelObjects = Hashtable.newFrom({"ScoreLabel": thisGDScoreLabelObjectsList});
var thisGDPlayerNameInputObjectsList = [...runtimeScene.getObjects("PlayerNameInput")];
var GDPlayerNameInputObjects = Hashtable.newFrom({"PlayerNameInput": thisGDPlayerNameInputObjectsList});
var thisGDSubmitTextButtonObjectsList = [...runtimeScene.getObjects("SubmitTextButton")];
var GDSubmitTextButtonObjects = Hashtable.newFrom({"SubmitTextButton": thisGDSubmitTextButtonObjectsList});
var thisGDRetryTextButtonObjectsList = [...runtimeScene.getObjects("RetryTextButton")];
var GDRetryTextButtonObjects = Hashtable.newFrom({"RetryTextButton": thisGDRetryTextButtonObjectsList});
var thisGDPanelObjectsList = [...runtimeScene.getObjects("Panel")];
var GDPanelObjects = Hashtable.newFrom({"Panel": thisGDPanelObjectsList});
var thisGDTitleObjectsList = [...runtimeScene.getObjects("Title")];
var GDTitleObjects = Hashtable.newFrom({"Title": thisGDTitleObjectsList});
var thisGDBackTextButtonObjectsList = [...runtimeScene.getObjects("BackTextButton")];
var GDBackTextButtonObjects = Hashtable.newFrom({"BackTextButton": thisGDBackTextButtonObjectsList});
var thisGDMedalObjectsList = [...runtimeScene.getObjects("Medal")];
var GDMedalObjects = Hashtable.newFrom({"Medal": thisGDMedalObjectsList});
var thisGDNextTextButtonObjectsList = [...runtimeScene.getObjects("NextTextButton")];
var GDNextTextButtonObjects = Hashtable.newFrom({"NextTextButton": thisGDNextTextButtonObjectsList});
var thisGDBestScoreLabelObjectsList = [...runtimeScene.getObjects("BestScoreLabel")];
var GDBestScoreLabelObjects = Hashtable.newFrom({"BestScoreLabel": thisGDBestScoreLabelObjectsList});
var thisGDBitmapTitleObjectsList = [...runtimeScene.getObjects("BitmapTitle")];
var GDBitmapTitleObjects = Hashtable.newFrom({"BitmapTitle": thisGDBitmapTitleObjectsList});
var thisGDBitmapScoreLabelObjectsList = [...runtimeScene.getObjects("BitmapScoreLabel")];
var GDBitmapScoreLabelObjects = Hashtable.newFrom({"BitmapScoreLabel": thisGDBitmapScoreLabelObjectsList});
var thisGDBitmapBestScoreLabelObjectsList = [...runtimeScene.getObjects("BitmapBestScoreLabel")];
var GDBitmapBestScoreLabelObjects = Hashtable.newFrom({"BitmapBestScoreLabel": thisGDBitmapBestScoreLabelObjectsList});
var thisGDDecorationObjectsList = [...runtimeScene.getObjects("Decoration")];
var GDDecorationObjects = Hashtable.newFrom({"Decoration": thisGDDecorationObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "ScoreLabel": GDScoreLabelObjects
, "PlayerNameInput": GDPlayerNameInputObjects
, "SubmitTextButton": GDSubmitTextButtonObjects
, "RetryTextButton": GDRetryTextButtonObjects
, "Panel": GDPanelObjects
, "Title": GDTitleObjects
, "BackTextButton": GDBackTextButtonObjects
, "Medal": GDMedalObjects
, "NextTextButton": GDNextTextButtonObjects
, "BestScoreLabel": GDBestScoreLabelObjects
, "BitmapTitle": GDBitmapTitleObjects
, "BitmapScoreLabel": GDBitmapScoreLabelObjects
, "BitmapBestScoreLabel": GDBitmapBestScoreLabelObjects
, "Decoration": GDDecorationObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "ScoreLabel": thisGDScoreLabelObjectsList
, "PlayerNameInput": thisGDPlayerNameInputObjectsList
, "SubmitTextButton": thisGDSubmitTextButtonObjectsList
, "RetryTextButton": thisGDRetryTextButtonObjectsList
, "Panel": thisGDPanelObjectsList
, "Title": thisGDTitleObjectsList
, "BackTextButton": thisGDBackTextButtonObjectsList
, "Medal": thisGDMedalObjectsList
, "NextTextButton": thisGDNextTextButtonObjectsList
, "BestScoreLabel": thisGDBestScoreLabelObjectsList
, "BitmapTitle": thisGDBitmapTitleObjectsList
, "BitmapScoreLabel": thisGDBitmapScoreLabelObjectsList
, "BitmapBestScoreLabel": thisGDBitmapBestScoreLabelObjectsList
, "Decoration": thisGDDecorationObjectsList
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsNextClickedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsNextClickedContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsNextClickedContext.GDScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsNextClickedContext.GDScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsNextClickedContext.GDPlayerNameInputObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsNextClickedContext.GDPlayerNameInputObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsNextClickedContext.GDSubmitTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsNextClickedContext.GDSubmitTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsNextClickedContext.GDRetryTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsNextClickedContext.GDRetryTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsNextClickedContext.GDPanelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsNextClickedContext.GDPanelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsNextClickedContext.GDTitleObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsNextClickedContext.GDTitleObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsNextClickedContext.GDBackTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsNextClickedContext.GDBackTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsNextClickedContext.GDMedalObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsNextClickedContext.GDMedalObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsNextClickedContext.GDNextTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsNextClickedContext.GDNextTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsNextClickedContext.GDBestScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsNextClickedContext.GDBestScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsNextClickedContext.GDBitmapTitleObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsNextClickedContext.GDBitmapTitleObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsNextClickedContext.GDBitmapScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsNextClickedContext.GDBitmapScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsNextClickedContext.GDBitmapBestScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsNextClickedContext.GDBitmapBestScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsNextClickedContext.GDDecorationObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsNextClickedContext.GDDecorationObjects2.length = 0;

gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsNextClickedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsNextClickedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsNextClickedContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsNextClickedContext.GDScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsNextClickedContext.GDScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsNextClickedContext.GDPlayerNameInputObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsNextClickedContext.GDPlayerNameInputObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsNextClickedContext.GDSubmitTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsNextClickedContext.GDSubmitTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsNextClickedContext.GDRetryTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsNextClickedContext.GDRetryTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsNextClickedContext.GDPanelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsNextClickedContext.GDPanelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsNextClickedContext.GDTitleObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsNextClickedContext.GDTitleObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsNextClickedContext.GDBackTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsNextClickedContext.GDBackTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsNextClickedContext.GDMedalObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsNextClickedContext.GDMedalObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsNextClickedContext.GDNextTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsNextClickedContext.GDNextTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsNextClickedContext.GDBestScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsNextClickedContext.GDBestScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsNextClickedContext.GDBitmapTitleObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsNextClickedContext.GDBitmapTitleObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsNextClickedContext.GDBitmapScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsNextClickedContext.GDBitmapScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsNextClickedContext.GDBitmapBestScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsNextClickedContext.GDBitmapBestScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsNextClickedContext.GDDecorationObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsNextClickedContext.GDDecorationObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsBackClickedContext = {};
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsBackClickedContext.idToCallbackMap = new Map();
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsBackClickedContext.GDObjectObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsBackClickedContext.GDObjectObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsBackClickedContext.GDScoreLabelObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsBackClickedContext.GDScoreLabelObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsBackClickedContext.GDPlayerNameInputObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsBackClickedContext.GDPlayerNameInputObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsBackClickedContext.GDSubmitTextButtonObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsBackClickedContext.GDSubmitTextButtonObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsBackClickedContext.GDRetryTextButtonObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsBackClickedContext.GDRetryTextButtonObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsBackClickedContext.GDPanelObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsBackClickedContext.GDPanelObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsBackClickedContext.GDTitleObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsBackClickedContext.GDTitleObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsBackClickedContext.GDBackTextButtonObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsBackClickedContext.GDBackTextButtonObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsBackClickedContext.GDMedalObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsBackClickedContext.GDMedalObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsBackClickedContext.GDNextTextButtonObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsBackClickedContext.GDNextTextButtonObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsBackClickedContext.GDBestScoreLabelObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsBackClickedContext.GDBestScoreLabelObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsBackClickedContext.GDBitmapTitleObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsBackClickedContext.GDBitmapTitleObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsBackClickedContext.GDBitmapScoreLabelObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsBackClickedContext.GDBitmapScoreLabelObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsBackClickedContext.GDBitmapBestScoreLabelObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsBackClickedContext.GDBitmapBestScoreLabelObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsBackClickedContext.GDDecorationObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsBackClickedContext.GDDecorationObjects2= [];


gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsBackClickedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("BackTextButton"), gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsBackClickedContext.GDBackTextButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsBackClickedContext.GDBackTextButtonObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsBackClickedContext.GDBackTextButtonObjects1[i].IsClicked(eventsFunctionContext) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsBackClickedContext.GDBackTextButtonObjects1[k] = gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsBackClickedContext.GDBackTextButtonObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsBackClickedContext.GDBackTextButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.playerAuthentication.removeAuthenticationBanner(runtimeScene);
}
{eventsFunctionContext.returnValue = true;}
}

}


};

gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsBackClicked = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDScoreLabelObjectsList = [...runtimeScene.getObjects("ScoreLabel")];
var GDScoreLabelObjects = Hashtable.newFrom({"ScoreLabel": thisGDScoreLabelObjectsList});
var thisGDPlayerNameInputObjectsList = [...runtimeScene.getObjects("PlayerNameInput")];
var GDPlayerNameInputObjects = Hashtable.newFrom({"PlayerNameInput": thisGDPlayerNameInputObjectsList});
var thisGDSubmitTextButtonObjectsList = [...runtimeScene.getObjects("SubmitTextButton")];
var GDSubmitTextButtonObjects = Hashtable.newFrom({"SubmitTextButton": thisGDSubmitTextButtonObjectsList});
var thisGDRetryTextButtonObjectsList = [...runtimeScene.getObjects("RetryTextButton")];
var GDRetryTextButtonObjects = Hashtable.newFrom({"RetryTextButton": thisGDRetryTextButtonObjectsList});
var thisGDPanelObjectsList = [...runtimeScene.getObjects("Panel")];
var GDPanelObjects = Hashtable.newFrom({"Panel": thisGDPanelObjectsList});
var thisGDTitleObjectsList = [...runtimeScene.getObjects("Title")];
var GDTitleObjects = Hashtable.newFrom({"Title": thisGDTitleObjectsList});
var thisGDBackTextButtonObjectsList = [...runtimeScene.getObjects("BackTextButton")];
var GDBackTextButtonObjects = Hashtable.newFrom({"BackTextButton": thisGDBackTextButtonObjectsList});
var thisGDMedalObjectsList = [...runtimeScene.getObjects("Medal")];
var GDMedalObjects = Hashtable.newFrom({"Medal": thisGDMedalObjectsList});
var thisGDNextTextButtonObjectsList = [...runtimeScene.getObjects("NextTextButton")];
var GDNextTextButtonObjects = Hashtable.newFrom({"NextTextButton": thisGDNextTextButtonObjectsList});
var thisGDBestScoreLabelObjectsList = [...runtimeScene.getObjects("BestScoreLabel")];
var GDBestScoreLabelObjects = Hashtable.newFrom({"BestScoreLabel": thisGDBestScoreLabelObjectsList});
var thisGDBitmapTitleObjectsList = [...runtimeScene.getObjects("BitmapTitle")];
var GDBitmapTitleObjects = Hashtable.newFrom({"BitmapTitle": thisGDBitmapTitleObjectsList});
var thisGDBitmapScoreLabelObjectsList = [...runtimeScene.getObjects("BitmapScoreLabel")];
var GDBitmapScoreLabelObjects = Hashtable.newFrom({"BitmapScoreLabel": thisGDBitmapScoreLabelObjectsList});
var thisGDBitmapBestScoreLabelObjectsList = [...runtimeScene.getObjects("BitmapBestScoreLabel")];
var GDBitmapBestScoreLabelObjects = Hashtable.newFrom({"BitmapBestScoreLabel": thisGDBitmapBestScoreLabelObjectsList});
var thisGDDecorationObjectsList = [...runtimeScene.getObjects("Decoration")];
var GDDecorationObjects = Hashtable.newFrom({"Decoration": thisGDDecorationObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "ScoreLabel": GDScoreLabelObjects
, "PlayerNameInput": GDPlayerNameInputObjects
, "SubmitTextButton": GDSubmitTextButtonObjects
, "RetryTextButton": GDRetryTextButtonObjects
, "Panel": GDPanelObjects
, "Title": GDTitleObjects
, "BackTextButton": GDBackTextButtonObjects
, "Medal": GDMedalObjects
, "NextTextButton": GDNextTextButtonObjects
, "BestScoreLabel": GDBestScoreLabelObjects
, "BitmapTitle": GDBitmapTitleObjects
, "BitmapScoreLabel": GDBitmapScoreLabelObjects
, "BitmapBestScoreLabel": GDBitmapBestScoreLabelObjects
, "Decoration": GDDecorationObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "ScoreLabel": thisGDScoreLabelObjectsList
, "PlayerNameInput": thisGDPlayerNameInputObjectsList
, "SubmitTextButton": thisGDSubmitTextButtonObjectsList
, "RetryTextButton": thisGDRetryTextButtonObjectsList
, "Panel": thisGDPanelObjectsList
, "Title": thisGDTitleObjectsList
, "BackTextButton": thisGDBackTextButtonObjectsList
, "Medal": thisGDMedalObjectsList
, "NextTextButton": thisGDNextTextButtonObjectsList
, "BestScoreLabel": thisGDBestScoreLabelObjectsList
, "BitmapTitle": thisGDBitmapTitleObjectsList
, "BitmapScoreLabel": thisGDBitmapScoreLabelObjectsList
, "BitmapBestScoreLabel": thisGDBitmapBestScoreLabelObjectsList
, "Decoration": thisGDDecorationObjectsList
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsBackClickedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsBackClickedContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsBackClickedContext.GDScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsBackClickedContext.GDScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsBackClickedContext.GDPlayerNameInputObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsBackClickedContext.GDPlayerNameInputObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsBackClickedContext.GDSubmitTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsBackClickedContext.GDSubmitTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsBackClickedContext.GDRetryTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsBackClickedContext.GDRetryTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsBackClickedContext.GDPanelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsBackClickedContext.GDPanelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsBackClickedContext.GDTitleObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsBackClickedContext.GDTitleObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsBackClickedContext.GDBackTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsBackClickedContext.GDBackTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsBackClickedContext.GDMedalObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsBackClickedContext.GDMedalObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsBackClickedContext.GDNextTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsBackClickedContext.GDNextTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsBackClickedContext.GDBestScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsBackClickedContext.GDBestScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsBackClickedContext.GDBitmapTitleObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsBackClickedContext.GDBitmapTitleObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsBackClickedContext.GDBitmapScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsBackClickedContext.GDBitmapScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsBackClickedContext.GDBitmapBestScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsBackClickedContext.GDBitmapBestScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsBackClickedContext.GDDecorationObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsBackClickedContext.GDDecorationObjects2.length = 0;

gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsBackClickedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsBackClickedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsBackClickedContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsBackClickedContext.GDScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsBackClickedContext.GDScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsBackClickedContext.GDPlayerNameInputObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsBackClickedContext.GDPlayerNameInputObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsBackClickedContext.GDSubmitTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsBackClickedContext.GDSubmitTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsBackClickedContext.GDRetryTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsBackClickedContext.GDRetryTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsBackClickedContext.GDPanelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsBackClickedContext.GDPanelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsBackClickedContext.GDTitleObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsBackClickedContext.GDTitleObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsBackClickedContext.GDBackTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsBackClickedContext.GDBackTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsBackClickedContext.GDMedalObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsBackClickedContext.GDMedalObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsBackClickedContext.GDNextTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsBackClickedContext.GDNextTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsBackClickedContext.GDBestScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsBackClickedContext.GDBestScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsBackClickedContext.GDBitmapTitleObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsBackClickedContext.GDBitmapTitleObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsBackClickedContext.GDBitmapScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsBackClickedContext.GDBitmapScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsBackClickedContext.GDBitmapBestScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsBackClickedContext.GDBitmapBestScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsBackClickedContext.GDDecorationObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsBackClickedContext.GDDecorationObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsScoreSubmittedContext = {};
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsScoreSubmittedContext.idToCallbackMap = new Map();
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsScoreSubmittedContext.GDObjectObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsScoreSubmittedContext.GDObjectObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsScoreSubmittedContext.GDScoreLabelObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsScoreSubmittedContext.GDScoreLabelObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsScoreSubmittedContext.GDPlayerNameInputObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsScoreSubmittedContext.GDPlayerNameInputObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsScoreSubmittedContext.GDSubmitTextButtonObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsScoreSubmittedContext.GDSubmitTextButtonObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsScoreSubmittedContext.GDRetryTextButtonObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsScoreSubmittedContext.GDRetryTextButtonObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsScoreSubmittedContext.GDPanelObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsScoreSubmittedContext.GDPanelObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsScoreSubmittedContext.GDTitleObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsScoreSubmittedContext.GDTitleObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsScoreSubmittedContext.GDBackTextButtonObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsScoreSubmittedContext.GDBackTextButtonObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsScoreSubmittedContext.GDMedalObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsScoreSubmittedContext.GDMedalObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsScoreSubmittedContext.GDNextTextButtonObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsScoreSubmittedContext.GDNextTextButtonObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsScoreSubmittedContext.GDBestScoreLabelObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsScoreSubmittedContext.GDBestScoreLabelObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsScoreSubmittedContext.GDBitmapTitleObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsScoreSubmittedContext.GDBitmapTitleObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsScoreSubmittedContext.GDBitmapScoreLabelObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsScoreSubmittedContext.GDBitmapScoreLabelObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsScoreSubmittedContext.GDBitmapBestScoreLabelObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsScoreSubmittedContext.GDBitmapBestScoreLabelObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsScoreSubmittedContext.GDDecorationObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsScoreSubmittedContext.GDDecorationObjects2= [];


gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsScoreSubmittedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.leaderboards.hasPlayerJustClosedLeaderboardView();
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.leaderboards.hasBeenSaved(eventsFunctionContext.getObjects("Object")[0]._getLeaderboardId());
}
if (isConditionTrue_0) {
{eventsFunctionContext.returnValue = true;}
}

}


};

gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsScoreSubmitted = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDScoreLabelObjectsList = [...runtimeScene.getObjects("ScoreLabel")];
var GDScoreLabelObjects = Hashtable.newFrom({"ScoreLabel": thisGDScoreLabelObjectsList});
var thisGDPlayerNameInputObjectsList = [...runtimeScene.getObjects("PlayerNameInput")];
var GDPlayerNameInputObjects = Hashtable.newFrom({"PlayerNameInput": thisGDPlayerNameInputObjectsList});
var thisGDSubmitTextButtonObjectsList = [...runtimeScene.getObjects("SubmitTextButton")];
var GDSubmitTextButtonObjects = Hashtable.newFrom({"SubmitTextButton": thisGDSubmitTextButtonObjectsList});
var thisGDRetryTextButtonObjectsList = [...runtimeScene.getObjects("RetryTextButton")];
var GDRetryTextButtonObjects = Hashtable.newFrom({"RetryTextButton": thisGDRetryTextButtonObjectsList});
var thisGDPanelObjectsList = [...runtimeScene.getObjects("Panel")];
var GDPanelObjects = Hashtable.newFrom({"Panel": thisGDPanelObjectsList});
var thisGDTitleObjectsList = [...runtimeScene.getObjects("Title")];
var GDTitleObjects = Hashtable.newFrom({"Title": thisGDTitleObjectsList});
var thisGDBackTextButtonObjectsList = [...runtimeScene.getObjects("BackTextButton")];
var GDBackTextButtonObjects = Hashtable.newFrom({"BackTextButton": thisGDBackTextButtonObjectsList});
var thisGDMedalObjectsList = [...runtimeScene.getObjects("Medal")];
var GDMedalObjects = Hashtable.newFrom({"Medal": thisGDMedalObjectsList});
var thisGDNextTextButtonObjectsList = [...runtimeScene.getObjects("NextTextButton")];
var GDNextTextButtonObjects = Hashtable.newFrom({"NextTextButton": thisGDNextTextButtonObjectsList});
var thisGDBestScoreLabelObjectsList = [...runtimeScene.getObjects("BestScoreLabel")];
var GDBestScoreLabelObjects = Hashtable.newFrom({"BestScoreLabel": thisGDBestScoreLabelObjectsList});
var thisGDBitmapTitleObjectsList = [...runtimeScene.getObjects("BitmapTitle")];
var GDBitmapTitleObjects = Hashtable.newFrom({"BitmapTitle": thisGDBitmapTitleObjectsList});
var thisGDBitmapScoreLabelObjectsList = [...runtimeScene.getObjects("BitmapScoreLabel")];
var GDBitmapScoreLabelObjects = Hashtable.newFrom({"BitmapScoreLabel": thisGDBitmapScoreLabelObjectsList});
var thisGDBitmapBestScoreLabelObjectsList = [...runtimeScene.getObjects("BitmapBestScoreLabel")];
var GDBitmapBestScoreLabelObjects = Hashtable.newFrom({"BitmapBestScoreLabel": thisGDBitmapBestScoreLabelObjectsList});
var thisGDDecorationObjectsList = [...runtimeScene.getObjects("Decoration")];
var GDDecorationObjects = Hashtable.newFrom({"Decoration": thisGDDecorationObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "ScoreLabel": GDScoreLabelObjects
, "PlayerNameInput": GDPlayerNameInputObjects
, "SubmitTextButton": GDSubmitTextButtonObjects
, "RetryTextButton": GDRetryTextButtonObjects
, "Panel": GDPanelObjects
, "Title": GDTitleObjects
, "BackTextButton": GDBackTextButtonObjects
, "Medal": GDMedalObjects
, "NextTextButton": GDNextTextButtonObjects
, "BestScoreLabel": GDBestScoreLabelObjects
, "BitmapTitle": GDBitmapTitleObjects
, "BitmapScoreLabel": GDBitmapScoreLabelObjects
, "BitmapBestScoreLabel": GDBitmapBestScoreLabelObjects
, "Decoration": GDDecorationObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "ScoreLabel": thisGDScoreLabelObjectsList
, "PlayerNameInput": thisGDPlayerNameInputObjectsList
, "SubmitTextButton": thisGDSubmitTextButtonObjectsList
, "RetryTextButton": thisGDRetryTextButtonObjectsList
, "Panel": thisGDPanelObjectsList
, "Title": thisGDTitleObjectsList
, "BackTextButton": thisGDBackTextButtonObjectsList
, "Medal": thisGDMedalObjectsList
, "NextTextButton": thisGDNextTextButtonObjectsList
, "BestScoreLabel": thisGDBestScoreLabelObjectsList
, "BitmapTitle": thisGDBitmapTitleObjectsList
, "BitmapScoreLabel": thisGDBitmapScoreLabelObjectsList
, "BitmapBestScoreLabel": thisGDBitmapBestScoreLabelObjectsList
, "Decoration": thisGDDecorationObjectsList
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsScoreSubmittedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsScoreSubmittedContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsScoreSubmittedContext.GDScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsScoreSubmittedContext.GDScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsScoreSubmittedContext.GDPlayerNameInputObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsScoreSubmittedContext.GDPlayerNameInputObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsScoreSubmittedContext.GDSubmitTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsScoreSubmittedContext.GDSubmitTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsScoreSubmittedContext.GDRetryTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsScoreSubmittedContext.GDRetryTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsScoreSubmittedContext.GDPanelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsScoreSubmittedContext.GDPanelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsScoreSubmittedContext.GDTitleObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsScoreSubmittedContext.GDTitleObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsScoreSubmittedContext.GDBackTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsScoreSubmittedContext.GDBackTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsScoreSubmittedContext.GDMedalObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsScoreSubmittedContext.GDMedalObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsScoreSubmittedContext.GDNextTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsScoreSubmittedContext.GDNextTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsScoreSubmittedContext.GDBestScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsScoreSubmittedContext.GDBestScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsScoreSubmittedContext.GDBitmapTitleObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsScoreSubmittedContext.GDBitmapTitleObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsScoreSubmittedContext.GDBitmapScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsScoreSubmittedContext.GDBitmapScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsScoreSubmittedContext.GDBitmapBestScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsScoreSubmittedContext.GDBitmapBestScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsScoreSubmittedContext.GDDecorationObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsScoreSubmittedContext.GDDecorationObjects2.length = 0;

gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsScoreSubmittedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsScoreSubmittedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsScoreSubmittedContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsScoreSubmittedContext.GDScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsScoreSubmittedContext.GDScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsScoreSubmittedContext.GDPlayerNameInputObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsScoreSubmittedContext.GDPlayerNameInputObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsScoreSubmittedContext.GDSubmitTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsScoreSubmittedContext.GDSubmitTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsScoreSubmittedContext.GDRetryTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsScoreSubmittedContext.GDRetryTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsScoreSubmittedContext.GDPanelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsScoreSubmittedContext.GDPanelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsScoreSubmittedContext.GDTitleObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsScoreSubmittedContext.GDTitleObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsScoreSubmittedContext.GDBackTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsScoreSubmittedContext.GDBackTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsScoreSubmittedContext.GDMedalObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsScoreSubmittedContext.GDMedalObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsScoreSubmittedContext.GDNextTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsScoreSubmittedContext.GDNextTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsScoreSubmittedContext.GDBestScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsScoreSubmittedContext.GDBestScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsScoreSubmittedContext.GDBitmapTitleObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsScoreSubmittedContext.GDBitmapTitleObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsScoreSubmittedContext.GDBitmapScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsScoreSubmittedContext.GDBitmapScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsScoreSubmittedContext.GDBitmapBestScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsScoreSubmittedContext.GDBitmapBestScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsScoreSubmittedContext.GDDecorationObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsScoreSubmittedContext.GDDecorationObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.LeaderboardIdContext = {};
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.LeaderboardIdContext.idToCallbackMap = new Map();
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.LeaderboardIdContext.GDObjectObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.LeaderboardIdContext.GDObjectObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.LeaderboardIdContext.GDScoreLabelObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.LeaderboardIdContext.GDScoreLabelObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.LeaderboardIdContext.GDPlayerNameInputObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.LeaderboardIdContext.GDPlayerNameInputObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.LeaderboardIdContext.GDSubmitTextButtonObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.LeaderboardIdContext.GDSubmitTextButtonObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.LeaderboardIdContext.GDRetryTextButtonObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.LeaderboardIdContext.GDRetryTextButtonObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.LeaderboardIdContext.GDPanelObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.LeaderboardIdContext.GDPanelObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.LeaderboardIdContext.GDTitleObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.LeaderboardIdContext.GDTitleObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.LeaderboardIdContext.GDBackTextButtonObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.LeaderboardIdContext.GDBackTextButtonObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.LeaderboardIdContext.GDMedalObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.LeaderboardIdContext.GDMedalObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.LeaderboardIdContext.GDNextTextButtonObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.LeaderboardIdContext.GDNextTextButtonObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.LeaderboardIdContext.GDBestScoreLabelObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.LeaderboardIdContext.GDBestScoreLabelObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.LeaderboardIdContext.GDBitmapTitleObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.LeaderboardIdContext.GDBitmapTitleObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.LeaderboardIdContext.GDBitmapScoreLabelObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.LeaderboardIdContext.GDBitmapScoreLabelObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.LeaderboardIdContext.GDBitmapBestScoreLabelObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.LeaderboardIdContext.GDBitmapBestScoreLabelObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.LeaderboardIdContext.GDDecorationObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.LeaderboardIdContext.GDDecorationObjects2= [];


gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.LeaderboardIdContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0]._getLeaderboardId();}
}

}


};

gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.LeaderboardId = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDScoreLabelObjectsList = [...runtimeScene.getObjects("ScoreLabel")];
var GDScoreLabelObjects = Hashtable.newFrom({"ScoreLabel": thisGDScoreLabelObjectsList});
var thisGDPlayerNameInputObjectsList = [...runtimeScene.getObjects("PlayerNameInput")];
var GDPlayerNameInputObjects = Hashtable.newFrom({"PlayerNameInput": thisGDPlayerNameInputObjectsList});
var thisGDSubmitTextButtonObjectsList = [...runtimeScene.getObjects("SubmitTextButton")];
var GDSubmitTextButtonObjects = Hashtable.newFrom({"SubmitTextButton": thisGDSubmitTextButtonObjectsList});
var thisGDRetryTextButtonObjectsList = [...runtimeScene.getObjects("RetryTextButton")];
var GDRetryTextButtonObjects = Hashtable.newFrom({"RetryTextButton": thisGDRetryTextButtonObjectsList});
var thisGDPanelObjectsList = [...runtimeScene.getObjects("Panel")];
var GDPanelObjects = Hashtable.newFrom({"Panel": thisGDPanelObjectsList});
var thisGDTitleObjectsList = [...runtimeScene.getObjects("Title")];
var GDTitleObjects = Hashtable.newFrom({"Title": thisGDTitleObjectsList});
var thisGDBackTextButtonObjectsList = [...runtimeScene.getObjects("BackTextButton")];
var GDBackTextButtonObjects = Hashtable.newFrom({"BackTextButton": thisGDBackTextButtonObjectsList});
var thisGDMedalObjectsList = [...runtimeScene.getObjects("Medal")];
var GDMedalObjects = Hashtable.newFrom({"Medal": thisGDMedalObjectsList});
var thisGDNextTextButtonObjectsList = [...runtimeScene.getObjects("NextTextButton")];
var GDNextTextButtonObjects = Hashtable.newFrom({"NextTextButton": thisGDNextTextButtonObjectsList});
var thisGDBestScoreLabelObjectsList = [...runtimeScene.getObjects("BestScoreLabel")];
var GDBestScoreLabelObjects = Hashtable.newFrom({"BestScoreLabel": thisGDBestScoreLabelObjectsList});
var thisGDBitmapTitleObjectsList = [...runtimeScene.getObjects("BitmapTitle")];
var GDBitmapTitleObjects = Hashtable.newFrom({"BitmapTitle": thisGDBitmapTitleObjectsList});
var thisGDBitmapScoreLabelObjectsList = [...runtimeScene.getObjects("BitmapScoreLabel")];
var GDBitmapScoreLabelObjects = Hashtable.newFrom({"BitmapScoreLabel": thisGDBitmapScoreLabelObjectsList});
var thisGDBitmapBestScoreLabelObjectsList = [...runtimeScene.getObjects("BitmapBestScoreLabel")];
var GDBitmapBestScoreLabelObjects = Hashtable.newFrom({"BitmapBestScoreLabel": thisGDBitmapBestScoreLabelObjectsList});
var thisGDDecorationObjectsList = [...runtimeScene.getObjects("Decoration")];
var GDDecorationObjects = Hashtable.newFrom({"Decoration": thisGDDecorationObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "ScoreLabel": GDScoreLabelObjects
, "PlayerNameInput": GDPlayerNameInputObjects
, "SubmitTextButton": GDSubmitTextButtonObjects
, "RetryTextButton": GDRetryTextButtonObjects
, "Panel": GDPanelObjects
, "Title": GDTitleObjects
, "BackTextButton": GDBackTextButtonObjects
, "Medal": GDMedalObjects
, "NextTextButton": GDNextTextButtonObjects
, "BestScoreLabel": GDBestScoreLabelObjects
, "BitmapTitle": GDBitmapTitleObjects
, "BitmapScoreLabel": GDBitmapScoreLabelObjects
, "BitmapBestScoreLabel": GDBitmapBestScoreLabelObjects
, "Decoration": GDDecorationObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "ScoreLabel": thisGDScoreLabelObjectsList
, "PlayerNameInput": thisGDPlayerNameInputObjectsList
, "SubmitTextButton": thisGDSubmitTextButtonObjectsList
, "RetryTextButton": thisGDRetryTextButtonObjectsList
, "Panel": thisGDPanelObjectsList
, "Title": thisGDTitleObjectsList
, "BackTextButton": thisGDBackTextButtonObjectsList
, "Medal": thisGDMedalObjectsList
, "NextTextButton": thisGDNextTextButtonObjectsList
, "BestScoreLabel": thisGDBestScoreLabelObjectsList
, "BitmapTitle": thisGDBitmapTitleObjectsList
, "BitmapScoreLabel": thisGDBitmapScoreLabelObjectsList
, "BitmapBestScoreLabel": thisGDBitmapBestScoreLabelObjectsList
, "Decoration": thisGDDecorationObjectsList
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.LeaderboardIdContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.LeaderboardIdContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.LeaderboardIdContext.GDScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.LeaderboardIdContext.GDScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.LeaderboardIdContext.GDPlayerNameInputObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.LeaderboardIdContext.GDPlayerNameInputObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.LeaderboardIdContext.GDSubmitTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.LeaderboardIdContext.GDSubmitTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.LeaderboardIdContext.GDRetryTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.LeaderboardIdContext.GDRetryTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.LeaderboardIdContext.GDPanelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.LeaderboardIdContext.GDPanelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.LeaderboardIdContext.GDTitleObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.LeaderboardIdContext.GDTitleObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.LeaderboardIdContext.GDBackTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.LeaderboardIdContext.GDBackTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.LeaderboardIdContext.GDMedalObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.LeaderboardIdContext.GDMedalObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.LeaderboardIdContext.GDNextTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.LeaderboardIdContext.GDNextTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.LeaderboardIdContext.GDBestScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.LeaderboardIdContext.GDBestScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.LeaderboardIdContext.GDBitmapTitleObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.LeaderboardIdContext.GDBitmapTitleObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.LeaderboardIdContext.GDBitmapScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.LeaderboardIdContext.GDBitmapScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.LeaderboardIdContext.GDBitmapBestScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.LeaderboardIdContext.GDBitmapBestScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.LeaderboardIdContext.GDDecorationObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.LeaderboardIdContext.GDDecorationObjects2.length = 0;

gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.LeaderboardIdContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.LeaderboardIdContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.LeaderboardIdContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.LeaderboardIdContext.GDScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.LeaderboardIdContext.GDScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.LeaderboardIdContext.GDPlayerNameInputObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.LeaderboardIdContext.GDPlayerNameInputObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.LeaderboardIdContext.GDSubmitTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.LeaderboardIdContext.GDSubmitTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.LeaderboardIdContext.GDRetryTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.LeaderboardIdContext.GDRetryTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.LeaderboardIdContext.GDPanelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.LeaderboardIdContext.GDPanelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.LeaderboardIdContext.GDTitleObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.LeaderboardIdContext.GDTitleObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.LeaderboardIdContext.GDBackTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.LeaderboardIdContext.GDBackTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.LeaderboardIdContext.GDMedalObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.LeaderboardIdContext.GDMedalObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.LeaderboardIdContext.GDNextTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.LeaderboardIdContext.GDNextTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.LeaderboardIdContext.GDBestScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.LeaderboardIdContext.GDBestScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.LeaderboardIdContext.GDBitmapTitleObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.LeaderboardIdContext.GDBitmapTitleObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.LeaderboardIdContext.GDBitmapScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.LeaderboardIdContext.GDBitmapScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.LeaderboardIdContext.GDBitmapBestScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.LeaderboardIdContext.GDBitmapBestScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.LeaderboardIdContext.GDDecorationObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.LeaderboardIdContext.GDDecorationObjects2.length = 0;


return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetLeaderboardIdContext = {};
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetLeaderboardIdContext.idToCallbackMap = new Map();
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetLeaderboardIdContext.GDObjectObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetLeaderboardIdContext.GDObjectObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetLeaderboardIdContext.GDScoreLabelObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetLeaderboardIdContext.GDScoreLabelObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetLeaderboardIdContext.GDPlayerNameInputObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetLeaderboardIdContext.GDPlayerNameInputObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetLeaderboardIdContext.GDSubmitTextButtonObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetLeaderboardIdContext.GDSubmitTextButtonObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetLeaderboardIdContext.GDRetryTextButtonObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetLeaderboardIdContext.GDRetryTextButtonObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetLeaderboardIdContext.GDPanelObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetLeaderboardIdContext.GDPanelObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetLeaderboardIdContext.GDTitleObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetLeaderboardIdContext.GDTitleObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetLeaderboardIdContext.GDBackTextButtonObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetLeaderboardIdContext.GDBackTextButtonObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetLeaderboardIdContext.GDMedalObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetLeaderboardIdContext.GDMedalObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetLeaderboardIdContext.GDNextTextButtonObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetLeaderboardIdContext.GDNextTextButtonObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetLeaderboardIdContext.GDBestScoreLabelObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetLeaderboardIdContext.GDBestScoreLabelObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetLeaderboardIdContext.GDBitmapTitleObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetLeaderboardIdContext.GDBitmapTitleObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetLeaderboardIdContext.GDBitmapScoreLabelObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetLeaderboardIdContext.GDBitmapScoreLabelObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetLeaderboardIdContext.GDBitmapBestScoreLabelObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetLeaderboardIdContext.GDBitmapBestScoreLabelObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetLeaderboardIdContext.GDDecorationObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetLeaderboardIdContext.GDDecorationObjects2= [];


gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetLeaderboardIdContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0]._setLeaderboardId(eventsFunctionContext.getArgument("Value"))
}
}

}


};

gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetLeaderboardId = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDScoreLabelObjectsList = [...runtimeScene.getObjects("ScoreLabel")];
var GDScoreLabelObjects = Hashtable.newFrom({"ScoreLabel": thisGDScoreLabelObjectsList});
var thisGDPlayerNameInputObjectsList = [...runtimeScene.getObjects("PlayerNameInput")];
var GDPlayerNameInputObjects = Hashtable.newFrom({"PlayerNameInput": thisGDPlayerNameInputObjectsList});
var thisGDSubmitTextButtonObjectsList = [...runtimeScene.getObjects("SubmitTextButton")];
var GDSubmitTextButtonObjects = Hashtable.newFrom({"SubmitTextButton": thisGDSubmitTextButtonObjectsList});
var thisGDRetryTextButtonObjectsList = [...runtimeScene.getObjects("RetryTextButton")];
var GDRetryTextButtonObjects = Hashtable.newFrom({"RetryTextButton": thisGDRetryTextButtonObjectsList});
var thisGDPanelObjectsList = [...runtimeScene.getObjects("Panel")];
var GDPanelObjects = Hashtable.newFrom({"Panel": thisGDPanelObjectsList});
var thisGDTitleObjectsList = [...runtimeScene.getObjects("Title")];
var GDTitleObjects = Hashtable.newFrom({"Title": thisGDTitleObjectsList});
var thisGDBackTextButtonObjectsList = [...runtimeScene.getObjects("BackTextButton")];
var GDBackTextButtonObjects = Hashtable.newFrom({"BackTextButton": thisGDBackTextButtonObjectsList});
var thisGDMedalObjectsList = [...runtimeScene.getObjects("Medal")];
var GDMedalObjects = Hashtable.newFrom({"Medal": thisGDMedalObjectsList});
var thisGDNextTextButtonObjectsList = [...runtimeScene.getObjects("NextTextButton")];
var GDNextTextButtonObjects = Hashtable.newFrom({"NextTextButton": thisGDNextTextButtonObjectsList});
var thisGDBestScoreLabelObjectsList = [...runtimeScene.getObjects("BestScoreLabel")];
var GDBestScoreLabelObjects = Hashtable.newFrom({"BestScoreLabel": thisGDBestScoreLabelObjectsList});
var thisGDBitmapTitleObjectsList = [...runtimeScene.getObjects("BitmapTitle")];
var GDBitmapTitleObjects = Hashtable.newFrom({"BitmapTitle": thisGDBitmapTitleObjectsList});
var thisGDBitmapScoreLabelObjectsList = [...runtimeScene.getObjects("BitmapScoreLabel")];
var GDBitmapScoreLabelObjects = Hashtable.newFrom({"BitmapScoreLabel": thisGDBitmapScoreLabelObjectsList});
var thisGDBitmapBestScoreLabelObjectsList = [...runtimeScene.getObjects("BitmapBestScoreLabel")];
var GDBitmapBestScoreLabelObjects = Hashtable.newFrom({"BitmapBestScoreLabel": thisGDBitmapBestScoreLabelObjectsList});
var thisGDDecorationObjectsList = [...runtimeScene.getObjects("Decoration")];
var GDDecorationObjects = Hashtable.newFrom({"Decoration": thisGDDecorationObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "ScoreLabel": GDScoreLabelObjects
, "PlayerNameInput": GDPlayerNameInputObjects
, "SubmitTextButton": GDSubmitTextButtonObjects
, "RetryTextButton": GDRetryTextButtonObjects
, "Panel": GDPanelObjects
, "Title": GDTitleObjects
, "BackTextButton": GDBackTextButtonObjects
, "Medal": GDMedalObjects
, "NextTextButton": GDNextTextButtonObjects
, "BestScoreLabel": GDBestScoreLabelObjects
, "BitmapTitle": GDBitmapTitleObjects
, "BitmapScoreLabel": GDBitmapScoreLabelObjects
, "BitmapBestScoreLabel": GDBitmapBestScoreLabelObjects
, "Decoration": GDDecorationObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "ScoreLabel": thisGDScoreLabelObjectsList
, "PlayerNameInput": thisGDPlayerNameInputObjectsList
, "SubmitTextButton": thisGDSubmitTextButtonObjectsList
, "RetryTextButton": thisGDRetryTextButtonObjectsList
, "Panel": thisGDPanelObjectsList
, "Title": thisGDTitleObjectsList
, "BackTextButton": thisGDBackTextButtonObjectsList
, "Medal": thisGDMedalObjectsList
, "NextTextButton": thisGDNextTextButtonObjectsList
, "BestScoreLabel": thisGDBestScoreLabelObjectsList
, "BitmapTitle": thisGDBitmapTitleObjectsList
, "BitmapScoreLabel": thisGDBitmapScoreLabelObjectsList
, "BitmapBestScoreLabel": thisGDBitmapBestScoreLabelObjectsList
, "Decoration": thisGDDecorationObjectsList
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetLeaderboardIdContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetLeaderboardIdContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetLeaderboardIdContext.GDScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetLeaderboardIdContext.GDScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetLeaderboardIdContext.GDPlayerNameInputObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetLeaderboardIdContext.GDPlayerNameInputObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetLeaderboardIdContext.GDSubmitTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetLeaderboardIdContext.GDSubmitTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetLeaderboardIdContext.GDRetryTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetLeaderboardIdContext.GDRetryTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetLeaderboardIdContext.GDPanelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetLeaderboardIdContext.GDPanelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetLeaderboardIdContext.GDTitleObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetLeaderboardIdContext.GDTitleObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetLeaderboardIdContext.GDBackTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetLeaderboardIdContext.GDBackTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetLeaderboardIdContext.GDMedalObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetLeaderboardIdContext.GDMedalObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetLeaderboardIdContext.GDNextTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetLeaderboardIdContext.GDNextTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetLeaderboardIdContext.GDBestScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetLeaderboardIdContext.GDBestScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetLeaderboardIdContext.GDBitmapTitleObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetLeaderboardIdContext.GDBitmapTitleObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetLeaderboardIdContext.GDBitmapScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetLeaderboardIdContext.GDBitmapScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetLeaderboardIdContext.GDBitmapBestScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetLeaderboardIdContext.GDBitmapBestScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetLeaderboardIdContext.GDDecorationObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetLeaderboardIdContext.GDDecorationObjects2.length = 0;

gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetLeaderboardIdContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetLeaderboardIdContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetLeaderboardIdContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetLeaderboardIdContext.GDScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetLeaderboardIdContext.GDScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetLeaderboardIdContext.GDPlayerNameInputObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetLeaderboardIdContext.GDPlayerNameInputObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetLeaderboardIdContext.GDSubmitTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetLeaderboardIdContext.GDSubmitTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetLeaderboardIdContext.GDRetryTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetLeaderboardIdContext.GDRetryTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetLeaderboardIdContext.GDPanelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetLeaderboardIdContext.GDPanelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetLeaderboardIdContext.GDTitleObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetLeaderboardIdContext.GDTitleObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetLeaderboardIdContext.GDBackTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetLeaderboardIdContext.GDBackTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetLeaderboardIdContext.GDMedalObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetLeaderboardIdContext.GDMedalObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetLeaderboardIdContext.GDNextTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetLeaderboardIdContext.GDNextTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetLeaderboardIdContext.GDBestScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetLeaderboardIdContext.GDBestScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetLeaderboardIdContext.GDBitmapTitleObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetLeaderboardIdContext.GDBitmapTitleObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetLeaderboardIdContext.GDBitmapScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetLeaderboardIdContext.GDBitmapScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetLeaderboardIdContext.GDBitmapBestScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetLeaderboardIdContext.GDBitmapBestScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetLeaderboardIdContext.GDDecorationObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetLeaderboardIdContext.GDDecorationObjects2.length = 0;


return;
}
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TitleContext = {};
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TitleContext.idToCallbackMap = new Map();
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TitleContext.GDObjectObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TitleContext.GDObjectObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TitleContext.GDScoreLabelObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TitleContext.GDScoreLabelObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TitleContext.GDPlayerNameInputObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TitleContext.GDPlayerNameInputObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TitleContext.GDSubmitTextButtonObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TitleContext.GDSubmitTextButtonObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TitleContext.GDRetryTextButtonObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TitleContext.GDRetryTextButtonObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TitleContext.GDPanelObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TitleContext.GDPanelObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TitleContext.GDTitleObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TitleContext.GDTitleObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TitleContext.GDBackTextButtonObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TitleContext.GDBackTextButtonObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TitleContext.GDMedalObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TitleContext.GDMedalObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TitleContext.GDNextTextButtonObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TitleContext.GDNextTextButtonObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TitleContext.GDBestScoreLabelObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TitleContext.GDBestScoreLabelObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TitleContext.GDBitmapTitleObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TitleContext.GDBitmapTitleObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TitleContext.GDBitmapScoreLabelObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TitleContext.GDBitmapScoreLabelObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TitleContext.GDBitmapBestScoreLabelObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TitleContext.GDBitmapBestScoreLabelObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TitleContext.GDDecorationObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TitleContext.GDDecorationObjects2= [];


gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TitleContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Title"), gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TitleContext.GDTitleObjects1);
{eventsFunctionContext.returnValue = (( gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TitleContext.GDTitleObjects1.length === 0 ) ? "" :gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TitleContext.GDTitleObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Text")).getText());}
}

}


};

gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.Title = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDScoreLabelObjectsList = [...runtimeScene.getObjects("ScoreLabel")];
var GDScoreLabelObjects = Hashtable.newFrom({"ScoreLabel": thisGDScoreLabelObjectsList});
var thisGDPlayerNameInputObjectsList = [...runtimeScene.getObjects("PlayerNameInput")];
var GDPlayerNameInputObjects = Hashtable.newFrom({"PlayerNameInput": thisGDPlayerNameInputObjectsList});
var thisGDSubmitTextButtonObjectsList = [...runtimeScene.getObjects("SubmitTextButton")];
var GDSubmitTextButtonObjects = Hashtable.newFrom({"SubmitTextButton": thisGDSubmitTextButtonObjectsList});
var thisGDRetryTextButtonObjectsList = [...runtimeScene.getObjects("RetryTextButton")];
var GDRetryTextButtonObjects = Hashtable.newFrom({"RetryTextButton": thisGDRetryTextButtonObjectsList});
var thisGDPanelObjectsList = [...runtimeScene.getObjects("Panel")];
var GDPanelObjects = Hashtable.newFrom({"Panel": thisGDPanelObjectsList});
var thisGDTitleObjectsList = [...runtimeScene.getObjects("Title")];
var GDTitleObjects = Hashtable.newFrom({"Title": thisGDTitleObjectsList});
var thisGDBackTextButtonObjectsList = [...runtimeScene.getObjects("BackTextButton")];
var GDBackTextButtonObjects = Hashtable.newFrom({"BackTextButton": thisGDBackTextButtonObjectsList});
var thisGDMedalObjectsList = [...runtimeScene.getObjects("Medal")];
var GDMedalObjects = Hashtable.newFrom({"Medal": thisGDMedalObjectsList});
var thisGDNextTextButtonObjectsList = [...runtimeScene.getObjects("NextTextButton")];
var GDNextTextButtonObjects = Hashtable.newFrom({"NextTextButton": thisGDNextTextButtonObjectsList});
var thisGDBestScoreLabelObjectsList = [...runtimeScene.getObjects("BestScoreLabel")];
var GDBestScoreLabelObjects = Hashtable.newFrom({"BestScoreLabel": thisGDBestScoreLabelObjectsList});
var thisGDBitmapTitleObjectsList = [...runtimeScene.getObjects("BitmapTitle")];
var GDBitmapTitleObjects = Hashtable.newFrom({"BitmapTitle": thisGDBitmapTitleObjectsList});
var thisGDBitmapScoreLabelObjectsList = [...runtimeScene.getObjects("BitmapScoreLabel")];
var GDBitmapScoreLabelObjects = Hashtable.newFrom({"BitmapScoreLabel": thisGDBitmapScoreLabelObjectsList});
var thisGDBitmapBestScoreLabelObjectsList = [...runtimeScene.getObjects("BitmapBestScoreLabel")];
var GDBitmapBestScoreLabelObjects = Hashtable.newFrom({"BitmapBestScoreLabel": thisGDBitmapBestScoreLabelObjectsList});
var thisGDDecorationObjectsList = [...runtimeScene.getObjects("Decoration")];
var GDDecorationObjects = Hashtable.newFrom({"Decoration": thisGDDecorationObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "ScoreLabel": GDScoreLabelObjects
, "PlayerNameInput": GDPlayerNameInputObjects
, "SubmitTextButton": GDSubmitTextButtonObjects
, "RetryTextButton": GDRetryTextButtonObjects
, "Panel": GDPanelObjects
, "Title": GDTitleObjects
, "BackTextButton": GDBackTextButtonObjects
, "Medal": GDMedalObjects
, "NextTextButton": GDNextTextButtonObjects
, "BestScoreLabel": GDBestScoreLabelObjects
, "BitmapTitle": GDBitmapTitleObjects
, "BitmapScoreLabel": GDBitmapScoreLabelObjects
, "BitmapBestScoreLabel": GDBitmapBestScoreLabelObjects
, "Decoration": GDDecorationObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "ScoreLabel": thisGDScoreLabelObjectsList
, "PlayerNameInput": thisGDPlayerNameInputObjectsList
, "SubmitTextButton": thisGDSubmitTextButtonObjectsList
, "RetryTextButton": thisGDRetryTextButtonObjectsList
, "Panel": thisGDPanelObjectsList
, "Title": thisGDTitleObjectsList
, "BackTextButton": thisGDBackTextButtonObjectsList
, "Medal": thisGDMedalObjectsList
, "NextTextButton": thisGDNextTextButtonObjectsList
, "BestScoreLabel": thisGDBestScoreLabelObjectsList
, "BitmapTitle": thisGDBitmapTitleObjectsList
, "BitmapScoreLabel": thisGDBitmapScoreLabelObjectsList
, "BitmapBestScoreLabel": thisGDBitmapBestScoreLabelObjectsList
, "Decoration": thisGDDecorationObjectsList
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TitleContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TitleContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TitleContext.GDScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TitleContext.GDScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TitleContext.GDPlayerNameInputObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TitleContext.GDPlayerNameInputObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TitleContext.GDSubmitTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TitleContext.GDSubmitTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TitleContext.GDRetryTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TitleContext.GDRetryTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TitleContext.GDPanelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TitleContext.GDPanelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TitleContext.GDTitleObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TitleContext.GDTitleObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TitleContext.GDBackTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TitleContext.GDBackTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TitleContext.GDMedalObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TitleContext.GDMedalObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TitleContext.GDNextTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TitleContext.GDNextTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TitleContext.GDBestScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TitleContext.GDBestScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TitleContext.GDBitmapTitleObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TitleContext.GDBitmapTitleObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TitleContext.GDBitmapScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TitleContext.GDBitmapScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TitleContext.GDBitmapBestScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TitleContext.GDBitmapBestScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TitleContext.GDDecorationObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TitleContext.GDDecorationObjects2.length = 0;

gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TitleContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TitleContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TitleContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TitleContext.GDScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TitleContext.GDScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TitleContext.GDPlayerNameInputObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TitleContext.GDPlayerNameInputObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TitleContext.GDSubmitTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TitleContext.GDSubmitTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TitleContext.GDRetryTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TitleContext.GDRetryTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TitleContext.GDPanelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TitleContext.GDPanelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TitleContext.GDTitleObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TitleContext.GDTitleObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TitleContext.GDBackTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TitleContext.GDBackTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TitleContext.GDMedalObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TitleContext.GDMedalObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TitleContext.GDNextTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TitleContext.GDNextTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TitleContext.GDBestScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TitleContext.GDBestScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TitleContext.GDBitmapTitleObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TitleContext.GDBitmapTitleObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TitleContext.GDBitmapScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TitleContext.GDBitmapScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TitleContext.GDBitmapBestScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TitleContext.GDBitmapBestScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TitleContext.GDDecorationObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TitleContext.GDDecorationObjects2.length = 0;


return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetTitleContext = {};
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetTitleContext.idToCallbackMap = new Map();
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetTitleContext.GDObjectObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetTitleContext.GDObjectObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetTitleContext.GDScoreLabelObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetTitleContext.GDScoreLabelObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetTitleContext.GDPlayerNameInputObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetTitleContext.GDPlayerNameInputObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetTitleContext.GDSubmitTextButtonObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetTitleContext.GDSubmitTextButtonObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetTitleContext.GDRetryTextButtonObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetTitleContext.GDRetryTextButtonObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetTitleContext.GDPanelObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetTitleContext.GDPanelObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetTitleContext.GDTitleObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetTitleContext.GDTitleObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetTitleContext.GDBackTextButtonObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetTitleContext.GDBackTextButtonObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetTitleContext.GDMedalObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetTitleContext.GDMedalObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetTitleContext.GDNextTextButtonObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetTitleContext.GDNextTextButtonObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetTitleContext.GDBestScoreLabelObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetTitleContext.GDBestScoreLabelObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetTitleContext.GDBitmapTitleObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetTitleContext.GDBitmapTitleObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetTitleContext.GDBitmapScoreLabelObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetTitleContext.GDBitmapScoreLabelObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetTitleContext.GDBitmapBestScoreLabelObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetTitleContext.GDBitmapBestScoreLabelObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetTitleContext.GDDecorationObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetTitleContext.GDDecorationObjects2= [];


gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetTitleContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Title"), gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetTitleContext.GDTitleObjects1);
{for(var i = 0, len = gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetTitleContext.GDTitleObjects1.length ;i < len;++i) {
    gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetTitleContext.GDTitleObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Text")).setText(eventsFunctionContext.getArgument("Value"));
}
}
}

}


};

gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetTitle = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDScoreLabelObjectsList = [...runtimeScene.getObjects("ScoreLabel")];
var GDScoreLabelObjects = Hashtable.newFrom({"ScoreLabel": thisGDScoreLabelObjectsList});
var thisGDPlayerNameInputObjectsList = [...runtimeScene.getObjects("PlayerNameInput")];
var GDPlayerNameInputObjects = Hashtable.newFrom({"PlayerNameInput": thisGDPlayerNameInputObjectsList});
var thisGDSubmitTextButtonObjectsList = [...runtimeScene.getObjects("SubmitTextButton")];
var GDSubmitTextButtonObjects = Hashtable.newFrom({"SubmitTextButton": thisGDSubmitTextButtonObjectsList});
var thisGDRetryTextButtonObjectsList = [...runtimeScene.getObjects("RetryTextButton")];
var GDRetryTextButtonObjects = Hashtable.newFrom({"RetryTextButton": thisGDRetryTextButtonObjectsList});
var thisGDPanelObjectsList = [...runtimeScene.getObjects("Panel")];
var GDPanelObjects = Hashtable.newFrom({"Panel": thisGDPanelObjectsList});
var thisGDTitleObjectsList = [...runtimeScene.getObjects("Title")];
var GDTitleObjects = Hashtable.newFrom({"Title": thisGDTitleObjectsList});
var thisGDBackTextButtonObjectsList = [...runtimeScene.getObjects("BackTextButton")];
var GDBackTextButtonObjects = Hashtable.newFrom({"BackTextButton": thisGDBackTextButtonObjectsList});
var thisGDMedalObjectsList = [...runtimeScene.getObjects("Medal")];
var GDMedalObjects = Hashtable.newFrom({"Medal": thisGDMedalObjectsList});
var thisGDNextTextButtonObjectsList = [...runtimeScene.getObjects("NextTextButton")];
var GDNextTextButtonObjects = Hashtable.newFrom({"NextTextButton": thisGDNextTextButtonObjectsList});
var thisGDBestScoreLabelObjectsList = [...runtimeScene.getObjects("BestScoreLabel")];
var GDBestScoreLabelObjects = Hashtable.newFrom({"BestScoreLabel": thisGDBestScoreLabelObjectsList});
var thisGDBitmapTitleObjectsList = [...runtimeScene.getObjects("BitmapTitle")];
var GDBitmapTitleObjects = Hashtable.newFrom({"BitmapTitle": thisGDBitmapTitleObjectsList});
var thisGDBitmapScoreLabelObjectsList = [...runtimeScene.getObjects("BitmapScoreLabel")];
var GDBitmapScoreLabelObjects = Hashtable.newFrom({"BitmapScoreLabel": thisGDBitmapScoreLabelObjectsList});
var thisGDBitmapBestScoreLabelObjectsList = [...runtimeScene.getObjects("BitmapBestScoreLabel")];
var GDBitmapBestScoreLabelObjects = Hashtable.newFrom({"BitmapBestScoreLabel": thisGDBitmapBestScoreLabelObjectsList});
var thisGDDecorationObjectsList = [...runtimeScene.getObjects("Decoration")];
var GDDecorationObjects = Hashtable.newFrom({"Decoration": thisGDDecorationObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "ScoreLabel": GDScoreLabelObjects
, "PlayerNameInput": GDPlayerNameInputObjects
, "SubmitTextButton": GDSubmitTextButtonObjects
, "RetryTextButton": GDRetryTextButtonObjects
, "Panel": GDPanelObjects
, "Title": GDTitleObjects
, "BackTextButton": GDBackTextButtonObjects
, "Medal": GDMedalObjects
, "NextTextButton": GDNextTextButtonObjects
, "BestScoreLabel": GDBestScoreLabelObjects
, "BitmapTitle": GDBitmapTitleObjects
, "BitmapScoreLabel": GDBitmapScoreLabelObjects
, "BitmapBestScoreLabel": GDBitmapBestScoreLabelObjects
, "Decoration": GDDecorationObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "ScoreLabel": thisGDScoreLabelObjectsList
, "PlayerNameInput": thisGDPlayerNameInputObjectsList
, "SubmitTextButton": thisGDSubmitTextButtonObjectsList
, "RetryTextButton": thisGDRetryTextButtonObjectsList
, "Panel": thisGDPanelObjectsList
, "Title": thisGDTitleObjectsList
, "BackTextButton": thisGDBackTextButtonObjectsList
, "Medal": thisGDMedalObjectsList
, "NextTextButton": thisGDNextTextButtonObjectsList
, "BestScoreLabel": thisGDBestScoreLabelObjectsList
, "BitmapTitle": thisGDBitmapTitleObjectsList
, "BitmapScoreLabel": thisGDBitmapScoreLabelObjectsList
, "BitmapBestScoreLabel": thisGDBitmapBestScoreLabelObjectsList
, "Decoration": thisGDDecorationObjectsList
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetTitleContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetTitleContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetTitleContext.GDScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetTitleContext.GDScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetTitleContext.GDPlayerNameInputObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetTitleContext.GDPlayerNameInputObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetTitleContext.GDSubmitTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetTitleContext.GDSubmitTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetTitleContext.GDRetryTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetTitleContext.GDRetryTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetTitleContext.GDPanelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetTitleContext.GDPanelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetTitleContext.GDTitleObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetTitleContext.GDTitleObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetTitleContext.GDBackTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetTitleContext.GDBackTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetTitleContext.GDMedalObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetTitleContext.GDMedalObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetTitleContext.GDNextTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetTitleContext.GDNextTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetTitleContext.GDBestScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetTitleContext.GDBestScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetTitleContext.GDBitmapTitleObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetTitleContext.GDBitmapTitleObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetTitleContext.GDBitmapScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetTitleContext.GDBitmapScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetTitleContext.GDBitmapBestScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetTitleContext.GDBitmapBestScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetTitleContext.GDDecorationObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetTitleContext.GDDecorationObjects2.length = 0;

gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetTitleContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetTitleContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetTitleContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetTitleContext.GDScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetTitleContext.GDScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetTitleContext.GDPlayerNameInputObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetTitleContext.GDPlayerNameInputObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetTitleContext.GDSubmitTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetTitleContext.GDSubmitTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetTitleContext.GDRetryTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetTitleContext.GDRetryTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetTitleContext.GDPanelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetTitleContext.GDPanelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetTitleContext.GDTitleObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetTitleContext.GDTitleObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetTitleContext.GDBackTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetTitleContext.GDBackTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetTitleContext.GDMedalObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetTitleContext.GDMedalObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetTitleContext.GDNextTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetTitleContext.GDNextTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetTitleContext.GDBestScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetTitleContext.GDBestScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetTitleContext.GDBitmapTitleObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetTitleContext.GDBitmapTitleObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetTitleContext.GDBitmapScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetTitleContext.GDBitmapScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetTitleContext.GDBitmapBestScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetTitleContext.GDBitmapBestScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetTitleContext.GDDecorationObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetTitleContext.GDDecorationObjects2.length = 0;


return;
}
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenInContext = {};
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenInContext.idToCallbackMap = new Map();
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenInContext.GDObjectObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenInContext.GDObjectObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenInContext.GDScoreLabelObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenInContext.GDScoreLabelObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenInContext.GDPlayerNameInputObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenInContext.GDPlayerNameInputObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenInContext.GDSubmitTextButtonObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenInContext.GDSubmitTextButtonObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenInContext.GDRetryTextButtonObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenInContext.GDRetryTextButtonObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenInContext.GDPanelObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenInContext.GDPanelObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenInContext.GDTitleObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenInContext.GDTitleObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenInContext.GDBackTextButtonObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenInContext.GDBackTextButtonObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenInContext.GDMedalObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenInContext.GDMedalObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenInContext.GDNextTextButtonObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenInContext.GDNextTextButtonObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenInContext.GDBestScoreLabelObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenInContext.GDBestScoreLabelObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenInContext.GDBitmapTitleObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenInContext.GDBitmapTitleObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenInContext.GDBitmapScoreLabelObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenInContext.GDBitmapScoreLabelObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenInContext.GDBitmapBestScoreLabelObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenInContext.GDBitmapBestScoreLabelObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenInContext.GDDecorationObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenInContext.GDDecorationObjects2= [];


gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenInContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Decoration"), gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenInContext.GDDecorationObjects1);
{for(var i = 0, len = gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenInContext.GDDecorationObjects1.length ;i < len;++i) {
    gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenInContext.GDDecorationObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("TweenIntoView")).TweenIn(eventsFunctionContext);
}
}
}

}


};

gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenIn = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDScoreLabelObjectsList = [...runtimeScene.getObjects("ScoreLabel")];
var GDScoreLabelObjects = Hashtable.newFrom({"ScoreLabel": thisGDScoreLabelObjectsList});
var thisGDPlayerNameInputObjectsList = [...runtimeScene.getObjects("PlayerNameInput")];
var GDPlayerNameInputObjects = Hashtable.newFrom({"PlayerNameInput": thisGDPlayerNameInputObjectsList});
var thisGDSubmitTextButtonObjectsList = [...runtimeScene.getObjects("SubmitTextButton")];
var GDSubmitTextButtonObjects = Hashtable.newFrom({"SubmitTextButton": thisGDSubmitTextButtonObjectsList});
var thisGDRetryTextButtonObjectsList = [...runtimeScene.getObjects("RetryTextButton")];
var GDRetryTextButtonObjects = Hashtable.newFrom({"RetryTextButton": thisGDRetryTextButtonObjectsList});
var thisGDPanelObjectsList = [...runtimeScene.getObjects("Panel")];
var GDPanelObjects = Hashtable.newFrom({"Panel": thisGDPanelObjectsList});
var thisGDTitleObjectsList = [...runtimeScene.getObjects("Title")];
var GDTitleObjects = Hashtable.newFrom({"Title": thisGDTitleObjectsList});
var thisGDBackTextButtonObjectsList = [...runtimeScene.getObjects("BackTextButton")];
var GDBackTextButtonObjects = Hashtable.newFrom({"BackTextButton": thisGDBackTextButtonObjectsList});
var thisGDMedalObjectsList = [...runtimeScene.getObjects("Medal")];
var GDMedalObjects = Hashtable.newFrom({"Medal": thisGDMedalObjectsList});
var thisGDNextTextButtonObjectsList = [...runtimeScene.getObjects("NextTextButton")];
var GDNextTextButtonObjects = Hashtable.newFrom({"NextTextButton": thisGDNextTextButtonObjectsList});
var thisGDBestScoreLabelObjectsList = [...runtimeScene.getObjects("BestScoreLabel")];
var GDBestScoreLabelObjects = Hashtable.newFrom({"BestScoreLabel": thisGDBestScoreLabelObjectsList});
var thisGDBitmapTitleObjectsList = [...runtimeScene.getObjects("BitmapTitle")];
var GDBitmapTitleObjects = Hashtable.newFrom({"BitmapTitle": thisGDBitmapTitleObjectsList});
var thisGDBitmapScoreLabelObjectsList = [...runtimeScene.getObjects("BitmapScoreLabel")];
var GDBitmapScoreLabelObjects = Hashtable.newFrom({"BitmapScoreLabel": thisGDBitmapScoreLabelObjectsList});
var thisGDBitmapBestScoreLabelObjectsList = [...runtimeScene.getObjects("BitmapBestScoreLabel")];
var GDBitmapBestScoreLabelObjects = Hashtable.newFrom({"BitmapBestScoreLabel": thisGDBitmapBestScoreLabelObjectsList});
var thisGDDecorationObjectsList = [...runtimeScene.getObjects("Decoration")];
var GDDecorationObjects = Hashtable.newFrom({"Decoration": thisGDDecorationObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "ScoreLabel": GDScoreLabelObjects
, "PlayerNameInput": GDPlayerNameInputObjects
, "SubmitTextButton": GDSubmitTextButtonObjects
, "RetryTextButton": GDRetryTextButtonObjects
, "Panel": GDPanelObjects
, "Title": GDTitleObjects
, "BackTextButton": GDBackTextButtonObjects
, "Medal": GDMedalObjects
, "NextTextButton": GDNextTextButtonObjects
, "BestScoreLabel": GDBestScoreLabelObjects
, "BitmapTitle": GDBitmapTitleObjects
, "BitmapScoreLabel": GDBitmapScoreLabelObjects
, "BitmapBestScoreLabel": GDBitmapBestScoreLabelObjects
, "Decoration": GDDecorationObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "ScoreLabel": thisGDScoreLabelObjectsList
, "PlayerNameInput": thisGDPlayerNameInputObjectsList
, "SubmitTextButton": thisGDSubmitTextButtonObjectsList
, "RetryTextButton": thisGDRetryTextButtonObjectsList
, "Panel": thisGDPanelObjectsList
, "Title": thisGDTitleObjectsList
, "BackTextButton": thisGDBackTextButtonObjectsList
, "Medal": thisGDMedalObjectsList
, "NextTextButton": thisGDNextTextButtonObjectsList
, "BestScoreLabel": thisGDBestScoreLabelObjectsList
, "BitmapTitle": thisGDBitmapTitleObjectsList
, "BitmapScoreLabel": thisGDBitmapScoreLabelObjectsList
, "BitmapBestScoreLabel": thisGDBitmapBestScoreLabelObjectsList
, "Decoration": thisGDDecorationObjectsList
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenInContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenInContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenInContext.GDScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenInContext.GDScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenInContext.GDPlayerNameInputObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenInContext.GDPlayerNameInputObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenInContext.GDSubmitTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenInContext.GDSubmitTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenInContext.GDRetryTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenInContext.GDRetryTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenInContext.GDPanelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenInContext.GDPanelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenInContext.GDTitleObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenInContext.GDTitleObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenInContext.GDBackTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenInContext.GDBackTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenInContext.GDMedalObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenInContext.GDMedalObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenInContext.GDNextTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenInContext.GDNextTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenInContext.GDBestScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenInContext.GDBestScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenInContext.GDBitmapTitleObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenInContext.GDBitmapTitleObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenInContext.GDBitmapScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenInContext.GDBitmapScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenInContext.GDBitmapBestScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenInContext.GDBitmapBestScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenInContext.GDDecorationObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenInContext.GDDecorationObjects2.length = 0;

gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenInContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenInContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenInContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenInContext.GDScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenInContext.GDScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenInContext.GDPlayerNameInputObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenInContext.GDPlayerNameInputObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenInContext.GDSubmitTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenInContext.GDSubmitTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenInContext.GDRetryTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenInContext.GDRetryTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenInContext.GDPanelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenInContext.GDPanelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenInContext.GDTitleObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenInContext.GDTitleObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenInContext.GDBackTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenInContext.GDBackTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenInContext.GDMedalObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenInContext.GDMedalObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenInContext.GDNextTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenInContext.GDNextTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenInContext.GDBestScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenInContext.GDBestScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenInContext.GDBitmapTitleObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenInContext.GDBitmapTitleObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenInContext.GDBitmapScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenInContext.GDBitmapScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenInContext.GDBitmapBestScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenInContext.GDBitmapBestScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenInContext.GDDecorationObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenInContext.GDDecorationObjects2.length = 0;


return;
}
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenOutContext = {};
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenOutContext.idToCallbackMap = new Map();
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenOutContext.GDObjectObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenOutContext.GDObjectObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenOutContext.GDScoreLabelObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenOutContext.GDScoreLabelObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenOutContext.GDPlayerNameInputObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenOutContext.GDPlayerNameInputObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenOutContext.GDSubmitTextButtonObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenOutContext.GDSubmitTextButtonObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenOutContext.GDRetryTextButtonObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenOutContext.GDRetryTextButtonObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenOutContext.GDPanelObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenOutContext.GDPanelObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenOutContext.GDTitleObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenOutContext.GDTitleObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenOutContext.GDBackTextButtonObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenOutContext.GDBackTextButtonObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenOutContext.GDMedalObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenOutContext.GDMedalObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenOutContext.GDNextTextButtonObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenOutContext.GDNextTextButtonObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenOutContext.GDBestScoreLabelObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenOutContext.GDBestScoreLabelObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenOutContext.GDBitmapTitleObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenOutContext.GDBitmapTitleObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenOutContext.GDBitmapScoreLabelObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenOutContext.GDBitmapScoreLabelObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenOutContext.GDBitmapBestScoreLabelObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenOutContext.GDBitmapBestScoreLabelObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenOutContext.GDDecorationObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenOutContext.GDDecorationObjects2= [];


gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenOutContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Decoration"), gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenOutContext.GDDecorationObjects1);
{for(var i = 0, len = gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenOutContext.GDDecorationObjects1.length ;i < len;++i) {
    gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenOutContext.GDDecorationObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("TweenIntoView")).TweenOut(eventsFunctionContext);
}
}
}

}


};

gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenOut = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDScoreLabelObjectsList = [...runtimeScene.getObjects("ScoreLabel")];
var GDScoreLabelObjects = Hashtable.newFrom({"ScoreLabel": thisGDScoreLabelObjectsList});
var thisGDPlayerNameInputObjectsList = [...runtimeScene.getObjects("PlayerNameInput")];
var GDPlayerNameInputObjects = Hashtable.newFrom({"PlayerNameInput": thisGDPlayerNameInputObjectsList});
var thisGDSubmitTextButtonObjectsList = [...runtimeScene.getObjects("SubmitTextButton")];
var GDSubmitTextButtonObjects = Hashtable.newFrom({"SubmitTextButton": thisGDSubmitTextButtonObjectsList});
var thisGDRetryTextButtonObjectsList = [...runtimeScene.getObjects("RetryTextButton")];
var GDRetryTextButtonObjects = Hashtable.newFrom({"RetryTextButton": thisGDRetryTextButtonObjectsList});
var thisGDPanelObjectsList = [...runtimeScene.getObjects("Panel")];
var GDPanelObjects = Hashtable.newFrom({"Panel": thisGDPanelObjectsList});
var thisGDTitleObjectsList = [...runtimeScene.getObjects("Title")];
var GDTitleObjects = Hashtable.newFrom({"Title": thisGDTitleObjectsList});
var thisGDBackTextButtonObjectsList = [...runtimeScene.getObjects("BackTextButton")];
var GDBackTextButtonObjects = Hashtable.newFrom({"BackTextButton": thisGDBackTextButtonObjectsList});
var thisGDMedalObjectsList = [...runtimeScene.getObjects("Medal")];
var GDMedalObjects = Hashtable.newFrom({"Medal": thisGDMedalObjectsList});
var thisGDNextTextButtonObjectsList = [...runtimeScene.getObjects("NextTextButton")];
var GDNextTextButtonObjects = Hashtable.newFrom({"NextTextButton": thisGDNextTextButtonObjectsList});
var thisGDBestScoreLabelObjectsList = [...runtimeScene.getObjects("BestScoreLabel")];
var GDBestScoreLabelObjects = Hashtable.newFrom({"BestScoreLabel": thisGDBestScoreLabelObjectsList});
var thisGDBitmapTitleObjectsList = [...runtimeScene.getObjects("BitmapTitle")];
var GDBitmapTitleObjects = Hashtable.newFrom({"BitmapTitle": thisGDBitmapTitleObjectsList});
var thisGDBitmapScoreLabelObjectsList = [...runtimeScene.getObjects("BitmapScoreLabel")];
var GDBitmapScoreLabelObjects = Hashtable.newFrom({"BitmapScoreLabel": thisGDBitmapScoreLabelObjectsList});
var thisGDBitmapBestScoreLabelObjectsList = [...runtimeScene.getObjects("BitmapBestScoreLabel")];
var GDBitmapBestScoreLabelObjects = Hashtable.newFrom({"BitmapBestScoreLabel": thisGDBitmapBestScoreLabelObjectsList});
var thisGDDecorationObjectsList = [...runtimeScene.getObjects("Decoration")];
var GDDecorationObjects = Hashtable.newFrom({"Decoration": thisGDDecorationObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "ScoreLabel": GDScoreLabelObjects
, "PlayerNameInput": GDPlayerNameInputObjects
, "SubmitTextButton": GDSubmitTextButtonObjects
, "RetryTextButton": GDRetryTextButtonObjects
, "Panel": GDPanelObjects
, "Title": GDTitleObjects
, "BackTextButton": GDBackTextButtonObjects
, "Medal": GDMedalObjects
, "NextTextButton": GDNextTextButtonObjects
, "BestScoreLabel": GDBestScoreLabelObjects
, "BitmapTitle": GDBitmapTitleObjects
, "BitmapScoreLabel": GDBitmapScoreLabelObjects
, "BitmapBestScoreLabel": GDBitmapBestScoreLabelObjects
, "Decoration": GDDecorationObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "ScoreLabel": thisGDScoreLabelObjectsList
, "PlayerNameInput": thisGDPlayerNameInputObjectsList
, "SubmitTextButton": thisGDSubmitTextButtonObjectsList
, "RetryTextButton": thisGDRetryTextButtonObjectsList
, "Panel": thisGDPanelObjectsList
, "Title": thisGDTitleObjectsList
, "BackTextButton": thisGDBackTextButtonObjectsList
, "Medal": thisGDMedalObjectsList
, "NextTextButton": thisGDNextTextButtonObjectsList
, "BestScoreLabel": thisGDBestScoreLabelObjectsList
, "BitmapTitle": thisGDBitmapTitleObjectsList
, "BitmapScoreLabel": thisGDBitmapScoreLabelObjectsList
, "BitmapBestScoreLabel": thisGDBitmapBestScoreLabelObjectsList
, "Decoration": thisGDDecorationObjectsList
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenOutContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenOutContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenOutContext.GDScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenOutContext.GDScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenOutContext.GDPlayerNameInputObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenOutContext.GDPlayerNameInputObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenOutContext.GDSubmitTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenOutContext.GDSubmitTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenOutContext.GDRetryTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenOutContext.GDRetryTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenOutContext.GDPanelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenOutContext.GDPanelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenOutContext.GDTitleObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenOutContext.GDTitleObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenOutContext.GDBackTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenOutContext.GDBackTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenOutContext.GDMedalObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenOutContext.GDMedalObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenOutContext.GDNextTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenOutContext.GDNextTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenOutContext.GDBestScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenOutContext.GDBestScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenOutContext.GDBitmapTitleObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenOutContext.GDBitmapTitleObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenOutContext.GDBitmapScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenOutContext.GDBitmapScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenOutContext.GDBitmapBestScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenOutContext.GDBitmapBestScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenOutContext.GDDecorationObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenOutContext.GDDecorationObjects2.length = 0;

gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenOutContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenOutContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenOutContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenOutContext.GDScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenOutContext.GDScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenOutContext.GDPlayerNameInputObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenOutContext.GDPlayerNameInputObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenOutContext.GDSubmitTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenOutContext.GDSubmitTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenOutContext.GDRetryTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenOutContext.GDRetryTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenOutContext.GDPanelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenOutContext.GDPanelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenOutContext.GDTitleObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenOutContext.GDTitleObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenOutContext.GDBackTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenOutContext.GDBackTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenOutContext.GDMedalObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenOutContext.GDMedalObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenOutContext.GDNextTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenOutContext.GDNextTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenOutContext.GDBestScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenOutContext.GDBestScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenOutContext.GDBitmapTitleObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenOutContext.GDBitmapTitleObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenOutContext.GDBitmapScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenOutContext.GDBitmapScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenOutContext.GDBitmapBestScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenOutContext.GDBitmapBestScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenOutContext.GDDecorationObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.TweenOutContext.GDDecorationObjects2.length = 0;


return;
}
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedInContext = {};
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedInContext.idToCallbackMap = new Map();
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedInContext.GDObjectObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedInContext.GDObjectObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedInContext.GDScoreLabelObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedInContext.GDScoreLabelObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedInContext.GDPlayerNameInputObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedInContext.GDPlayerNameInputObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedInContext.GDSubmitTextButtonObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedInContext.GDSubmitTextButtonObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedInContext.GDRetryTextButtonObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedInContext.GDRetryTextButtonObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedInContext.GDPanelObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedInContext.GDPanelObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedInContext.GDTitleObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedInContext.GDTitleObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedInContext.GDBackTextButtonObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedInContext.GDBackTextButtonObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedInContext.GDMedalObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedInContext.GDMedalObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedInContext.GDNextTextButtonObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedInContext.GDNextTextButtonObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedInContext.GDBestScoreLabelObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedInContext.GDBestScoreLabelObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedInContext.GDBitmapTitleObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedInContext.GDBitmapTitleObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedInContext.GDBitmapScoreLabelObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedInContext.GDBitmapScoreLabelObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedInContext.GDBitmapBestScoreLabelObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedInContext.GDBitmapBestScoreLabelObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedInContext.GDDecorationObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedInContext.GDDecorationObjects2= [];


gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedInContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = true;}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Decoration"), gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedInContext.GDDecorationObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedInContext.GDDecorationObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedInContext.GDDecorationObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("TweenIntoView")).IsTweenedIn(eventsFunctionContext)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedInContext.GDDecorationObjects1[k] = gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedInContext.GDDecorationObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedInContext.GDDecorationObjects1.length = k;
if (isConditionTrue_0) {
{eventsFunctionContext.returnValue = false;}
}

}


};

gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedIn = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDScoreLabelObjectsList = [...runtimeScene.getObjects("ScoreLabel")];
var GDScoreLabelObjects = Hashtable.newFrom({"ScoreLabel": thisGDScoreLabelObjectsList});
var thisGDPlayerNameInputObjectsList = [...runtimeScene.getObjects("PlayerNameInput")];
var GDPlayerNameInputObjects = Hashtable.newFrom({"PlayerNameInput": thisGDPlayerNameInputObjectsList});
var thisGDSubmitTextButtonObjectsList = [...runtimeScene.getObjects("SubmitTextButton")];
var GDSubmitTextButtonObjects = Hashtable.newFrom({"SubmitTextButton": thisGDSubmitTextButtonObjectsList});
var thisGDRetryTextButtonObjectsList = [...runtimeScene.getObjects("RetryTextButton")];
var GDRetryTextButtonObjects = Hashtable.newFrom({"RetryTextButton": thisGDRetryTextButtonObjectsList});
var thisGDPanelObjectsList = [...runtimeScene.getObjects("Panel")];
var GDPanelObjects = Hashtable.newFrom({"Panel": thisGDPanelObjectsList});
var thisGDTitleObjectsList = [...runtimeScene.getObjects("Title")];
var GDTitleObjects = Hashtable.newFrom({"Title": thisGDTitleObjectsList});
var thisGDBackTextButtonObjectsList = [...runtimeScene.getObjects("BackTextButton")];
var GDBackTextButtonObjects = Hashtable.newFrom({"BackTextButton": thisGDBackTextButtonObjectsList});
var thisGDMedalObjectsList = [...runtimeScene.getObjects("Medal")];
var GDMedalObjects = Hashtable.newFrom({"Medal": thisGDMedalObjectsList});
var thisGDNextTextButtonObjectsList = [...runtimeScene.getObjects("NextTextButton")];
var GDNextTextButtonObjects = Hashtable.newFrom({"NextTextButton": thisGDNextTextButtonObjectsList});
var thisGDBestScoreLabelObjectsList = [...runtimeScene.getObjects("BestScoreLabel")];
var GDBestScoreLabelObjects = Hashtable.newFrom({"BestScoreLabel": thisGDBestScoreLabelObjectsList});
var thisGDBitmapTitleObjectsList = [...runtimeScene.getObjects("BitmapTitle")];
var GDBitmapTitleObjects = Hashtable.newFrom({"BitmapTitle": thisGDBitmapTitleObjectsList});
var thisGDBitmapScoreLabelObjectsList = [...runtimeScene.getObjects("BitmapScoreLabel")];
var GDBitmapScoreLabelObjects = Hashtable.newFrom({"BitmapScoreLabel": thisGDBitmapScoreLabelObjectsList});
var thisGDBitmapBestScoreLabelObjectsList = [...runtimeScene.getObjects("BitmapBestScoreLabel")];
var GDBitmapBestScoreLabelObjects = Hashtable.newFrom({"BitmapBestScoreLabel": thisGDBitmapBestScoreLabelObjectsList});
var thisGDDecorationObjectsList = [...runtimeScene.getObjects("Decoration")];
var GDDecorationObjects = Hashtable.newFrom({"Decoration": thisGDDecorationObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "ScoreLabel": GDScoreLabelObjects
, "PlayerNameInput": GDPlayerNameInputObjects
, "SubmitTextButton": GDSubmitTextButtonObjects
, "RetryTextButton": GDRetryTextButtonObjects
, "Panel": GDPanelObjects
, "Title": GDTitleObjects
, "BackTextButton": GDBackTextButtonObjects
, "Medal": GDMedalObjects
, "NextTextButton": GDNextTextButtonObjects
, "BestScoreLabel": GDBestScoreLabelObjects
, "BitmapTitle": GDBitmapTitleObjects
, "BitmapScoreLabel": GDBitmapScoreLabelObjects
, "BitmapBestScoreLabel": GDBitmapBestScoreLabelObjects
, "Decoration": GDDecorationObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "ScoreLabel": thisGDScoreLabelObjectsList
, "PlayerNameInput": thisGDPlayerNameInputObjectsList
, "SubmitTextButton": thisGDSubmitTextButtonObjectsList
, "RetryTextButton": thisGDRetryTextButtonObjectsList
, "Panel": thisGDPanelObjectsList
, "Title": thisGDTitleObjectsList
, "BackTextButton": thisGDBackTextButtonObjectsList
, "Medal": thisGDMedalObjectsList
, "NextTextButton": thisGDNextTextButtonObjectsList
, "BestScoreLabel": thisGDBestScoreLabelObjectsList
, "BitmapTitle": thisGDBitmapTitleObjectsList
, "BitmapScoreLabel": thisGDBitmapScoreLabelObjectsList
, "BitmapBestScoreLabel": thisGDBitmapBestScoreLabelObjectsList
, "Decoration": thisGDDecorationObjectsList
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedInContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedInContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedInContext.GDScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedInContext.GDScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedInContext.GDPlayerNameInputObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedInContext.GDPlayerNameInputObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedInContext.GDSubmitTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedInContext.GDSubmitTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedInContext.GDRetryTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedInContext.GDRetryTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedInContext.GDPanelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedInContext.GDPanelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedInContext.GDTitleObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedInContext.GDTitleObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedInContext.GDBackTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedInContext.GDBackTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedInContext.GDMedalObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedInContext.GDMedalObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedInContext.GDNextTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedInContext.GDNextTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedInContext.GDBestScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedInContext.GDBestScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedInContext.GDBitmapTitleObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedInContext.GDBitmapTitleObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedInContext.GDBitmapScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedInContext.GDBitmapScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedInContext.GDBitmapBestScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedInContext.GDBitmapBestScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedInContext.GDDecorationObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedInContext.GDDecorationObjects2.length = 0;

gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedInContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedInContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedInContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedInContext.GDScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedInContext.GDScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedInContext.GDPlayerNameInputObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedInContext.GDPlayerNameInputObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedInContext.GDSubmitTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedInContext.GDSubmitTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedInContext.GDRetryTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedInContext.GDRetryTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedInContext.GDPanelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedInContext.GDPanelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedInContext.GDTitleObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedInContext.GDTitleObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedInContext.GDBackTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedInContext.GDBackTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedInContext.GDMedalObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedInContext.GDMedalObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedInContext.GDNextTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedInContext.GDNextTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedInContext.GDBestScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedInContext.GDBestScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedInContext.GDBitmapTitleObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedInContext.GDBitmapTitleObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedInContext.GDBitmapScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedInContext.GDBitmapScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedInContext.GDBitmapBestScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedInContext.GDBitmapBestScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedInContext.GDDecorationObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedInContext.GDDecorationObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedOutContext = {};
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedOutContext.idToCallbackMap = new Map();
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedOutContext.GDObjectObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedOutContext.GDObjectObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedOutContext.GDScoreLabelObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedOutContext.GDScoreLabelObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedOutContext.GDPlayerNameInputObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedOutContext.GDPlayerNameInputObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedOutContext.GDSubmitTextButtonObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedOutContext.GDSubmitTextButtonObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedOutContext.GDRetryTextButtonObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedOutContext.GDRetryTextButtonObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedOutContext.GDPanelObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedOutContext.GDPanelObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedOutContext.GDTitleObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedOutContext.GDTitleObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedOutContext.GDBackTextButtonObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedOutContext.GDBackTextButtonObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedOutContext.GDMedalObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedOutContext.GDMedalObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedOutContext.GDNextTextButtonObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedOutContext.GDNextTextButtonObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedOutContext.GDBestScoreLabelObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedOutContext.GDBestScoreLabelObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedOutContext.GDBitmapTitleObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedOutContext.GDBitmapTitleObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedOutContext.GDBitmapScoreLabelObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedOutContext.GDBitmapScoreLabelObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedOutContext.GDBitmapBestScoreLabelObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedOutContext.GDBitmapBestScoreLabelObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedOutContext.GDDecorationObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedOutContext.GDDecorationObjects2= [];


gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedOutContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = true;}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Decoration"), gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedOutContext.GDDecorationObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedOutContext.GDDecorationObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedOutContext.GDDecorationObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("TweenIntoView")).IsTweenedOut(eventsFunctionContext)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedOutContext.GDDecorationObjects1[k] = gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedOutContext.GDDecorationObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedOutContext.GDDecorationObjects1.length = k;
if (isConditionTrue_0) {
{eventsFunctionContext.returnValue = false;}
}

}


};

gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedOut = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDScoreLabelObjectsList = [...runtimeScene.getObjects("ScoreLabel")];
var GDScoreLabelObjects = Hashtable.newFrom({"ScoreLabel": thisGDScoreLabelObjectsList});
var thisGDPlayerNameInputObjectsList = [...runtimeScene.getObjects("PlayerNameInput")];
var GDPlayerNameInputObjects = Hashtable.newFrom({"PlayerNameInput": thisGDPlayerNameInputObjectsList});
var thisGDSubmitTextButtonObjectsList = [...runtimeScene.getObjects("SubmitTextButton")];
var GDSubmitTextButtonObjects = Hashtable.newFrom({"SubmitTextButton": thisGDSubmitTextButtonObjectsList});
var thisGDRetryTextButtonObjectsList = [...runtimeScene.getObjects("RetryTextButton")];
var GDRetryTextButtonObjects = Hashtable.newFrom({"RetryTextButton": thisGDRetryTextButtonObjectsList});
var thisGDPanelObjectsList = [...runtimeScene.getObjects("Panel")];
var GDPanelObjects = Hashtable.newFrom({"Panel": thisGDPanelObjectsList});
var thisGDTitleObjectsList = [...runtimeScene.getObjects("Title")];
var GDTitleObjects = Hashtable.newFrom({"Title": thisGDTitleObjectsList});
var thisGDBackTextButtonObjectsList = [...runtimeScene.getObjects("BackTextButton")];
var GDBackTextButtonObjects = Hashtable.newFrom({"BackTextButton": thisGDBackTextButtonObjectsList});
var thisGDMedalObjectsList = [...runtimeScene.getObjects("Medal")];
var GDMedalObjects = Hashtable.newFrom({"Medal": thisGDMedalObjectsList});
var thisGDNextTextButtonObjectsList = [...runtimeScene.getObjects("NextTextButton")];
var GDNextTextButtonObjects = Hashtable.newFrom({"NextTextButton": thisGDNextTextButtonObjectsList});
var thisGDBestScoreLabelObjectsList = [...runtimeScene.getObjects("BestScoreLabel")];
var GDBestScoreLabelObjects = Hashtable.newFrom({"BestScoreLabel": thisGDBestScoreLabelObjectsList});
var thisGDBitmapTitleObjectsList = [...runtimeScene.getObjects("BitmapTitle")];
var GDBitmapTitleObjects = Hashtable.newFrom({"BitmapTitle": thisGDBitmapTitleObjectsList});
var thisGDBitmapScoreLabelObjectsList = [...runtimeScene.getObjects("BitmapScoreLabel")];
var GDBitmapScoreLabelObjects = Hashtable.newFrom({"BitmapScoreLabel": thisGDBitmapScoreLabelObjectsList});
var thisGDBitmapBestScoreLabelObjectsList = [...runtimeScene.getObjects("BitmapBestScoreLabel")];
var GDBitmapBestScoreLabelObjects = Hashtable.newFrom({"BitmapBestScoreLabel": thisGDBitmapBestScoreLabelObjectsList});
var thisGDDecorationObjectsList = [...runtimeScene.getObjects("Decoration")];
var GDDecorationObjects = Hashtable.newFrom({"Decoration": thisGDDecorationObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "ScoreLabel": GDScoreLabelObjects
, "PlayerNameInput": GDPlayerNameInputObjects
, "SubmitTextButton": GDSubmitTextButtonObjects
, "RetryTextButton": GDRetryTextButtonObjects
, "Panel": GDPanelObjects
, "Title": GDTitleObjects
, "BackTextButton": GDBackTextButtonObjects
, "Medal": GDMedalObjects
, "NextTextButton": GDNextTextButtonObjects
, "BestScoreLabel": GDBestScoreLabelObjects
, "BitmapTitle": GDBitmapTitleObjects
, "BitmapScoreLabel": GDBitmapScoreLabelObjects
, "BitmapBestScoreLabel": GDBitmapBestScoreLabelObjects
, "Decoration": GDDecorationObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "ScoreLabel": thisGDScoreLabelObjectsList
, "PlayerNameInput": thisGDPlayerNameInputObjectsList
, "SubmitTextButton": thisGDSubmitTextButtonObjectsList
, "RetryTextButton": thisGDRetryTextButtonObjectsList
, "Panel": thisGDPanelObjectsList
, "Title": thisGDTitleObjectsList
, "BackTextButton": thisGDBackTextButtonObjectsList
, "Medal": thisGDMedalObjectsList
, "NextTextButton": thisGDNextTextButtonObjectsList
, "BestScoreLabel": thisGDBestScoreLabelObjectsList
, "BitmapTitle": thisGDBitmapTitleObjectsList
, "BitmapScoreLabel": thisGDBitmapScoreLabelObjectsList
, "BitmapBestScoreLabel": thisGDBitmapBestScoreLabelObjectsList
, "Decoration": thisGDDecorationObjectsList
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedOutContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedOutContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedOutContext.GDScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedOutContext.GDScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedOutContext.GDPlayerNameInputObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedOutContext.GDPlayerNameInputObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedOutContext.GDSubmitTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedOutContext.GDSubmitTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedOutContext.GDRetryTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedOutContext.GDRetryTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedOutContext.GDPanelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedOutContext.GDPanelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedOutContext.GDTitleObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedOutContext.GDTitleObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedOutContext.GDBackTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedOutContext.GDBackTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedOutContext.GDMedalObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedOutContext.GDMedalObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedOutContext.GDNextTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedOutContext.GDNextTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedOutContext.GDBestScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedOutContext.GDBestScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedOutContext.GDBitmapTitleObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedOutContext.GDBitmapTitleObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedOutContext.GDBitmapScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedOutContext.GDBitmapScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedOutContext.GDBitmapBestScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedOutContext.GDBitmapBestScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedOutContext.GDDecorationObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedOutContext.GDDecorationObjects2.length = 0;

gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedOutContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedOutContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedOutContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedOutContext.GDScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedOutContext.GDScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedOutContext.GDPlayerNameInputObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedOutContext.GDPlayerNameInputObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedOutContext.GDSubmitTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedOutContext.GDSubmitTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedOutContext.GDRetryTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedOutContext.GDRetryTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedOutContext.GDPanelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedOutContext.GDPanelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedOutContext.GDTitleObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedOutContext.GDTitleObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedOutContext.GDBackTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedOutContext.GDBackTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedOutContext.GDMedalObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedOutContext.GDMedalObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedOutContext.GDNextTextButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedOutContext.GDNextTextButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedOutContext.GDBestScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedOutContext.GDBestScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedOutContext.GDBitmapTitleObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedOutContext.GDBitmapTitleObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedOutContext.GDBitmapScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedOutContext.GDBitmapScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedOutContext.GDBitmapBestScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedOutContext.GDBitmapBestScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedOutContext.GDDecorationObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.HasTweenedOutContext.GDDecorationObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}

gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};


gdjs.registerObject("LeaderboardDialog::LeaderboardDialog", gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog);
