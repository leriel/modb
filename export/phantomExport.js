var page = require('webpage').create();
var fs = require('fs');

var url = 'https://data.mo.ee';
var basePath = 'src/scripts/stores/';
var paths = [{
  key: 'npcs',
  file: 'NPCDB.json',
}, {
  key: 'mobs',
  file: 'MobDB.json',
}, {
  key: 'pets',
  file: 'PetDB.json',
}, {
  key: 'items',
  file: 'ItemDB.json',
}, {
  key: 'forgeDB',
  file: 'ForgeDB.json',
}, {
  key: 'formulas',
  file: 'CraftDB.json',
}, {
  key: 'maps',
  file: 'MapDb.json',
}, {
  key: 'skills',
  file: 'SkillDb.json',
}, {
  key: 'cssPlain',
  file: '../../styles/items.scss',
  plain: true,
}];

page.onConsoleMessage = function(msg) {
  console.log('site console: ' + msg);
};

function onPageReady() {
  page.injectJs('buildDb.js');
  function checkExportLoaded() {
    setTimeout(function() {
      var exportLoaded = page.evaluate(function() {
        return window.modb;
      });
      if (exportLoaded) {
        onExportReady();
      } else {
        checkExportLoaded();
      }
    }, 1000);
  }
  checkExportLoaded();
}

function onExportReady() {
  var modb = page.evaluate(function() {
    return JSON.stringify(window.modb);
  });
  modb = JSON.parse(modb);
  paths.forEach(function (saveObj) {
    var strContent = saveObj.plain
      ? modb[saveObj.key] + '\n'
      : JSON.stringify(modb[saveObj.key], null, 2) + '\n';
    fs.write(basePath + saveObj.file, strContent, 'w');
  });
  phantom.exit();
}

page.open(url, function (status) {
  function checkReadyState() {
    setTimeout(function () {
      var readyState = page.evaluate(function () {
        return window.finishedLoading;
      });

      if (true === readyState) {
        onPageReady();
      } else {
        checkReadyState();
      }
    });
  }
  checkReadyState();
});
