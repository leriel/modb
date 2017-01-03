// preload maps...
console.log('Preloading maps, please stand by...');
for (var i = 1; i < maps; i++) {
  preloadMap(i, false);
}

// TODO: consider running the live page in a phantomJS instance, running this against that
// and then save it locally. ;)

// Builds a compact database of RPG MO info for modb.
var buildDb = function(imgSheets, items, pets, npcs, bodyParts, carp, carpXp, forge, forgeXp, fletch, fletchXp, numMaps, mapsLoaded){

  var checkMaps = function() {
    var numLoaded =0;
    for (var i=0; i< numMaps; i++) {
      if (mapsLoaded[i]) numLoaded++;
    }
    if (numLoaded == numMaps) {
      console.log(numMaps + ' maps loaded');
      goBuild();
    } else {
      console.log(numLoaded + ' of ' +numMaps + ' maps loaded');
      window.setTimeout(checkMaps, 3000);
    }
  }

  // // wait for all the maps to be loaded
  // var mapsReady = false, retryCount = 0;
  // while(!mapsReady && retryCount++<100000000) {
  //   var numLoaded =0;
  //   for (var i=0; i< numMaps; i++) {
  //     if (mapsLoaded[i]) numLoaded++;
  //   }
  //   if (numLoaded == numMaps) {
  //     mapsReady = true;
  //   }

  // }

  // if (!mapsReady) {
  //   console.log('Maps not loaded yet, try again...');
  //   return;
  // }

  /**
  * Generate a CSS class for styling based on the MO Image Sheets
  *
  * @param string cl - CSS class name 
  * @param object img - RPG MO img property (eg, item_base[0].img)
  * @return string
  */
  var _generateImgCSS = function(cl, img) {
    var sheet = imgSheets[img.sheet];
    if (!img || !sheet) {
      return '';
    }
    var css = '';
    css += '.' + cl + ' {';
    css += 'width:' + sheet.tile_width + 'px;';
    css += 'height:' + sheet.tile_height + 'px;';
    // css += 'background:url(\'' + sheet.url +'\');';
    css += 'background-position: -' + (sheet.tile_width * img.x) + 'px ' + -(sheet.tile_height * img.y) + 'px;'
    css += '}';
    return css;
  };

  /*
  * Perform final math calculations on enchanting based on item's enchant_bonus
  *
  * @param decimal num - Enchant chance received from the Forge
  * @param decimal bonus - item's enchant_bonus property
  * @param object item - the actual item itself (used for debugging)
  * @return int
  */
  var prepChantChance = function(num, bonus, item) {
    var res = num;
    if (bonus) res += bonus;
    res = Math.round(res*100);
    if (res > 100) { res = 100; }
    // console.log('prepChantChance', item.b_i + ' ' + item.name, num, bonus, res, item)
    return res;
  }

  var goBuild = function() {

    // array of indexes to skip in the object_base object
    var skipObjBaseKeys = [
      '443', // Easy Dungeon Reward
      '444', // Normal Dungeon Reward
      '445', // Hell Dungeon Reward
    ];

    // array of indexes to skip in the object_base object
    var specialObjBaseSources = {
      '443': 'Easy Dungeon Reward',
      '444': 'Normal Dungeon Reward',
      '445':  'Hell Dungeon Reward'
    };

    /*
    * @property subCatRes - holds various regular expressions for sorting items into sub categories.
    */
    var subCatRes = {
      pouch: /pouch|santa's bag/,
      permission: /permission/,
      medal: /medallion/,
      potion: /potion|root beer/,
      specialty_food: /trout with|soup|curry|dish|steak|sushi|juice/,
      ingredients: /potato|onion|pineapple|carrot|corn/,
      event_foods: /egg|love|birthday|candy/,
      weapons: {
        staff: /wand|staff|scepter/,
        key: /blue key|yellow key|red key|lockpick/,
        specialty: /candy|rose/,
      },

      // House:
      house:[
        {re: /bed/, cat:0},
        {re: /cabinet/, cat:1},
        {re: /chair/, cat:2},
        {re: /chest/, cat:3},
        {re: /floor/, cat:4},
        {re: /table/, cat:5},
        {re: /wall|fence/, cat:6},
      ],
      materials:[
        {re: /seed|bag of worms/, cat:19},
        {re: /bar/, cat:0},
        {re: /bone|a skull/, cat:1},
        {re: /dust/, cat:3},
        {re: /fang|beak/, cat:8},
        {re: /horn/, cat:11},
        {re: /scale/, cat:18},
        {re: /leaf|hay|wheat|grass|herb|yarrow|aconitum|berries|blueberry/, cat:13},
        {re: /egg/, cat:4}, 
        {re: /orb of luck|enchant scroll/, cat:5},// enchanting
        {re: /cotton|bamboo|flannel|jute|silk/, cat:7},
        {re: /feather/, cat:9},
        {re: /cut|uncut|jewel/, cat:10},
        {re: /leather/, cat:12},
        {re: /mark/, cat:14},
        {re: /orb/, cat:15},
        {re: /present/, cat:16},
        {re: /raw|liquorice|seaweed/, cat:17},
        {re: /shroom|russula/, cat:20},
        {re: /teleport/, cat:21},
        {re: /vial/, cat:22},
        {re: /log|wood/, cat:23},
        {re: /eye/, cat:6},
        {re: /chunk|ore|clay|copper|tin|coal|sand/, cat:2},
        // {re: //, cat:19},
        // {re: //, cat:20},
      ],
    };

    /**
    * @var ignoreItems - Array of items to be ignored, by name
    */
    var ignoreItems = ['Test Bow','Random Reward'];

    /**
    * @var exportObject - object used to store all of the results
    */
    var exportObj = {};
    exportObj.store = []; // an index of all things you can search by.
    // the rest of these are "clean" copies of their counterparts
    exportObj.sheets = []; 
    exportObj.items = [];
    exportObj.cats = [];
    exportObj.pets = [];
    exportObj.npcs = [];
    exportObj.mobs = [];
    exportObj.css = [];
    exportObj.forgeDB = {
      xp: forgeXp,
      fletchXp: fletchXp,
      carpXp: carpXp,
    }

    /**
    * formulas is a normalized list of all of the various "recipes" in the game
    * @property exportObj.formulas
    */
    exportObj.formulas = [];

    // build forging list of formulas
    var ii = Object.keys(forge);
    for (var i=0, maxI=ii.length; i<maxI; i++) {
      var k = ii[i];
      var f = forge[k];
      // console.log(f);
      var o = {
        id: f.item_id,
        n: items[f.item_id].name,
        level: f.level,
        min_chance: f.chance,
        max_chance: f.chance,
        skill: typeof f.fletching_level == 'undefined' ? 'forging' : 'fletching',
        matts: [],
        pattern: f.pattern,
        xp: f.xp,
      }
      var kk = Object.keys(f.materials);
      for (var j=0, maxJ=kk.length; j<maxJ;j++) {
        o.matts.push({id:kk[j],c:f.materials[kk[j]]});
      }
      exportObj.formulas.push(o);
    }

    // add carpentry formulas to list
    var ii = Object.keys(carp);
    for (var i=0, maxI=ii.length; i<maxI; i++) {
      var k = ii[i];
      var o = carp[k];
      var 
      kk = Object.keys(o);
      for (var j=0, maxJ=kk.length; j<maxJ; j++) {
        var l = kk[j];
        var c = carp[k][l];
        if (c.craftable) {
          var oo = {
            id: c.item_id,
            n: items[c.item_id].name,
            level: c.level,
            skill: 'carpentry',
            carp_type: k,
            matts:[]
          };
          // console.log(k,c);
          for (var jj=0;jj<c.consumes.length;jj++) {
            oo.matts.push({
              id: c.consumes[jj].id,
              c: c.consumes[jj].count
            });
          }
          exportObj.formulas.push(oo);
        }
      }
    }
    var ii = Object.keys(fletch);
    for (var i=0, maxI=ii.length; i<maxI; i++) {
      var k = ii[i];
      var f = fletch[k];
      // console.log(f);
      var o = {
        id: f.item_id,
        n: items[f.item_id].name,
        level: f.level,
        min_chance: f.chance,
        max_chance: f.chance,
        skill: 'fletching',
        matts: f.pattern.map(function(res) { return {id: res, c: 1}}),
        pattern: [f.pattern],
        xp: f.xp,
      }
      exportObj.formulas.push(o);
    }


    var addObjBaseFormula = function(obj, src) {
      for (var i in obj.returns) {
        var retItem = obj.returns[i];
        var o = {
          id: retItem.id,
          n: items[retItem.id].name,
          skill: obj.skill,
          requires_one_from: obj.requires_one_from,
          level: retItem.level,
          source: {
            n: src.name,
            img: src.img
          },
          duration: src.params.duration,
          min_chance: retItem.base_chance,
          max_chance: retItem.max_chance || 1,
          matts: [],
          xp: retItem.xp,
        }
        for (var j in retItem.consumes) {
          o.matts.push({
            id: retItem.consumes[j].id,
            c: retItem.consumes[j].count
          })
        }
        // console.log(o);
        exportObj.formulas.push(o);
      }
    }

    // var objBasesToSearch = [42,35];
    for (var a in object_base) {
      var obj = object_base[a];
      if (obj.params && obj.params.results) {
        for (var b in obj.params.results) {
          if (specialObjBaseSources[a]) {
            //console.log(a, specialObjBaseSources[a], obj);
            for (var c in obj.params.results[b].returns) {
              var retItem = obj.params.results[b].returns[c];
              //console.log(c, retItem, items[retItem.id]);
              items[retItem.id].sources = items[retItem.id].sources || [];
              if (items[retItem.id].sources.indexOf(specialObjBaseSources[a]) == -1)
                items[retItem.id].sources.push(specialObjBaseSources[a]);
            }
          } else {
            addObjBaseFormula(obj.params.results[b], obj);
          }
        }
      }
    }


    // build clean image sheets
    ii = Object.keys(imgSheets);
    for (var i=0, maxI=ii.length; i<maxI; i++) {
      var k = ii[i];
      if (typeof imgSheets[k] == "object" && imgSheets[k].tile_height) {
        exportObj.sheets.push({
          w: imgSheets[k].tile_width,
          h: imgSheets[k].tile_height,
          u: imgSheets[k].url
        });
        exportObj.css.push('.sheet_' + k + '{background:url(\'' + imgSheets[k].url+'\');}');
      }
    }

    // store npc data in item_base[n].params
    for (var i =0, maxI=npcs.length; i<maxI; i++) {
      if (npcs[i].temp.content) {
        // this is a vendor, .temp.content has items they buy/sell
        exportObj.npcs.push({
          id: i,
          n: npcs[i].name,
          t: npcs[i].b_t,
          img_hash: npcs[i].img.hash,
          temp: npcs[i].temp,
        });
      }

      var baseDrop = 100;
      if (npcs[i].params.drops) {
        npcs[i].params.drops = npcs[i].params.drops.map(function(d) {
          var c = baseDrop * d.chance;
          c = parseFloat(c.toPrecision(c > 1 ? 3 : c > 0.1 ? 2 : 1));
          baseDrop -= c;
          return {id: d.id, chance: d.chance, actualChance: c};
        });
        // this is a mob you can kill for dropped items
        exportObj.mobs.push({
          id: i,
          n: npcs[i].name,
          t: npcs[i].b_t,
          img: npcs[i].img,
          params: npcs[i].params,
          temp: npcs[i].temp,
          locations: {}
        });
        // console.log(npcs[i].img);
        if (npcs[i].img.sheet) {
          exportObj.css.push(_generateImgCSS('mob_'+i,npcs[i].img))  
        }
        

      }
    }

    // add enchants_from to params for each item to build enchant chains
    ii = Object.keys(items);
    for (var i=0, maxI=ii.length; i<maxI; i++) {
      var k = ii[i];
      if (typeof items[k] == "object" && items[k].name) {
        if (items[k].params.enchant_id) {
          items[items[k].params.enchant_id].params.enchants_from = parseInt(k);
        }
      };
    };

    // build clean item_base, and store name/type/id in index
    for (var i=0, maxI=ii.length; i<maxI; i++) {
      var k = ii[i];

      if (typeof items[k] == "object" && items[k].name && ignoreItems.indexOf(items[k].name) == -1) {
        exportObj.store.push({
          t: items[k].b_t, // type
          id: k,
          n: items[k].name
        });

        var o = {
          id: i,
          n: items[k].name,
          t: parseInt(items[k].b_t), // type
          img: {
            sheet: items[k].img.sheet,
            x: items[k].img.x,
            y: items[k].img.y,
          },
          params: items[k].params,
          sources: items[k].sources
        };

        // figure forging chances for each item
        if (items[k].params.slot == 1) {
          var stat = items[k].params.min_defense ? items[k].params.min_defense : items[k].params.min_strength;
          // console.log('Enchant ' + k + ' ' + items[k].name, stat)
          o.chances = [
            prepChantChance(Forge.enchantingChancesCapes[1303](stat), items[k].params.enchant_bonus, items[k]),
            prepChantChance(Forge.enchantingChancesCapes[1304](stat), items[k].params.enchant_bonus, items[k]),
            prepChantChance(Forge.enchantingChancesCapes[1305](stat), items[k].params.enchant_bonus, items[k]),
            prepChantChance(Forge.enchantingChancesCapes[1306](stat), items[k].params.enchant_bonus, items[k]),
          ]
        } else if (items[k].params.min_defense) {
          o.chances = [
            prepChantChance(Forge.enchantingChancesArmor[176](items[k].params.min_defense), items[k].params.enchant_bonus, items[k]),
            prepChantChance(Forge.enchantingChancesArmor[177](items[k].params.min_defense), items[k].params.enchant_bonus, items[k]),
            prepChantChance(Forge.enchantingChancesArmor[178](items[k].params.min_defense), items[k].params.enchant_bonus, items[k]),
            prepChantChance(Forge.enchantingChancesArmor[179](items[k].params.min_defense), items[k].params.enchant_bonus, items[k]),
          ]
        } else if (items[k].params.min_accuracy || items[k].params.min_strength) {
          var minA = items[k].params.min_accuracy ? items[k].params.min_accuracy : 0;
          var minS = items[k].params.min_strength ? items[k].params.min_strength : 0;
          var stat = minA && minA>minS ? minA : minS;
          // console.log(stat, minA, minS, items[k]);
          o.chances = [
            prepChantChance(Forge.enchantingChancesWeapon[64](stat), items[k].params.enchant_bonus, items[k]),
            prepChantChance(Forge.enchantingChancesWeapon[173](stat), items[k].params.enchant_bonus, items[k]),
            prepChantChance(Forge.enchantingChancesWeapon[174](stat), items[k].params.enchant_bonus, items[k]),
            prepChantChance(Forge.enchantingChancesWeapon[175](stat), items[k].params.enchant_bonus, items[k]),
          ]
        } else if (items[k].params.min_health) {
          o.chances = [
            prepChantChance(Forge.enchantingChancesJewelry[1125](items[k].params.min_health), items[k].params.enchant_bonus, items[k]),
            prepChantChance(Forge.enchantingChancesJewelry[1126](items[k].params.min_health), items[k].params.enchant_bonus, items[k]),
            prepChantChance(Forge.enchantingChancesJewelry[1127](items[k].params.min_health), items[k].params.enchant_bonus, items[k]),
            prepChantChance(Forge.enchantingChancesJewelry[1128](items[k].params.min_health), items[k].params.enchant_bonus, items[k]),
          ]
        }

        // Add Sub Category for certain types of items.
        var lcn = o.n.toLowerCase();
        switch (o.t) {
          case 1: // Foods
            if (lcn.match(subCatRes.event_foods)) o.params.sc = 3;
            else if (lcn.match(subCatRes.specialty_food)) o.params.sc = 1;
            else if (lcn.match(subCatRes.ingredients))  o.params.sc = 4;
            else if (lcn.match(subCatRes.potion)) o.params.sc = 2;
            else o.params.sc = 0;
          break;
          case 3: // Materials
            var found = false;
            subCatRes.materials.map(function(reObj){
              if (!found && lcn.match(reObj.re)) {
                found = true;
                o.params.sc = reObj.cat;
              }
            })
            if (!found) {
              o.params.sc = 99; // other
            }
          break;

          case 4: // Tools
            if (lcn.match(subCatRes.pouch)) o.params.sc = 1;
            else if (lcn.match(subCatRes.medal)) o.params.sc = 2;
            else if (lcn.match(subCatRes.permission)) o.params.sc = 3;
            else o.params.sc = 0;
          break;
          case 5: // Weapons
            /*weapons: {
              staff: /wand|staff|scepter/,
              key: /key/,
              specialty: /candy|rose/,
            },*/
            if (lcn.match(subCatRes.weapons.staff)) o.params.sc = 2;
            else if (lcn.match(subCatRes.weapons.key)) o.params.sc = 3;
            else if (lcn.match(subCatRes.weapons.specialty)) o.params.sc = 4;
            else {
              // is it 1h or 2?
              if (o.params.disable_slot == 3) o.params.sc = 1;
              else o.params.sc = 0;
            }
          break;
          case 8: // House
            var found = false;
            subCatRes.house.map(function(reObj){
              if (!found && lcn.match(reObj.re)) {
                found = true;
                o.params.sc = reObj.cat;
              }
            })
            if (!found) {
              o.params.sc = 7; // specialty items
            }
          break;
        }

        exportObj.items.push(o);
        exportObj.css.push(_generateImgCSS('item_'+k,items[k].img))
      };
    }

    // build clean pets store
    for (var i in pets) {
      var p = pets[i];
      if (typeof p == "object" && p.name) {
        exportObj.pets.push({
          id: parseInt(i),
          n: p.name,
          item_id: p.params.item_id,
          params: p.params
        });
      };
    }

    var addLocationToNPC = function(npc, location, x, y) {
      for (var i in exportObj.npcs) {
        if (exportObj.npcs[i].id == npc.b_i) {
          exportObj.npcs[i].map = location;
          exportObj.npcs[i].coords = {x:x, y:x}
        }
      }
    };

    var addLocationToMob = function(mob, location) {
      for (var i in exportObj.mobs) {
        if (exportObj.mobs[i].id == npc.b_i) {
          exportObj.mobs[i].locations[location] = 
            exportObj.mobs[i].locations[location] ? 
            exportObj.mobs[i].locations[location] + 1 : 1;
        }
      }
    };

    // iterate maps and store locations of NPCs and MOBs
    for (var mapNum in on_map) {
      for (var x in on_map[mapNum])  {  
        for (var y in on_map[mapNum][x])  {  
          if (on_map[mapNum][x][y]) {
            var i = on_map[mapNum][x][y];
            if (i.b_t == '4') {
              // console.log(i);
              var npc = npcs[i.b_i];
              // console.log(npc);
              // NPC (mob or vendor)
              if (npc.params.drops) { 
                //mob
                addLocationToMob(npc, map_names[mapNum]);
              } else if (npc.temp.content) {
                // npc
                addLocationToNPC(npc, map_names[mapNum], x, y);
              }
            }
          }
        }
      }
    }


    // handy functions
    exportObj.print = function(key) {
      if (!key) {
        console.log(Object.keys(exportObj));
      }
      else if (exportObj[key]) {
        console.log(JSON.stringify(exportObj[key]));
      }
    }

    exportObj.printCss = function() {
      console.log(exportObj.css.join("\n"));
    }

    exportObj.save = function(key) {
      var data = exportObj[key];
      var filename = key + '.json';
      if(!data) {
        console.error('Console.save: No data')
        return;
      }

      if(!filename) filename = 'console.json'

      if(typeof data === "object"){
        data = 'module.exports = ' + JSON.stringify(data, undefined, 4);
      }

      var blob = new Blob([data], {type: 'text/json'}),
        e    = document.createEvent('MouseEvents'),
        a    = document.createElement('a')

      a.download = filename
      a.href = window.URL.createObjectURL(blob)
      a.dataset.downloadurl =  ['text/json', a.download, a.href].join(':')
      e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
      a.dispatchEvent(e)
    }
    
    window.modb = exportObj;
    console.log('modb object crated.')
    window.modb.print();
  };

  // we fire off the checkMaps() function, it will defer export until all maps are ready
  checkMaps();

};

buildDb(IMAGE_SHEET, item_base, pets, npc_base, BODY_PARTS, CARPENTRY_FORMULAS, CARPENTRY_MATERIAL_XP, FORGE_FORMULAS, FORGE_MATERIAL_XP, FLETCHING_FORMULAS, FLETCHING_MATERIAL_XP, maps, maps_loaded);
