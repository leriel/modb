var React = require('react');

var keyMirror = require('react/lib/keyMirror');

var maps = require('../stores/MapDB.json');
var skills = require('../stores/SkillDB.json');
var obj = {
  ActionTypes: keyMirror({
    APP_INITIALIZE: null,
    APP_RESET: null,
    SWITCH_PAGE: null,

    SEARCH: null,
    SET_SEARCH_CAT1: null,
    SET_SEARCH_CAT2: null,
    SET_SEARCH_SUB_CAT: null,
    SET_MIN_LEVEL: null,
    SET_MAX_LEVEL: null,
    SET_MIN_PRICE: null,
    SET_MAX_PRICE: null,
    TOGGLE_FILTERS: null,

    SEARCH_NPCS: null,
    NPCS_BY_ITEM: null,
    TOGGLE_VENDOR_FILTERS: null,
    SET_NPC_MAP: null,

    SEARCH_MOBS: null,
    SET_MOB_FILTERS: null,
    MOBS_BY_ITEM: null,
    TOGGLE_MOB_FILTERS: null,
    SET_MOB_MAP: null,

    TOGGLE_CRAFT_FILTERS: null,
    SET_CRAFT_FILTERS: null,

    SEARCH_PETS: null,
    SEARCH_CRAFTS: null,
    SET_OUTPUT_FORMAT: null,

  }),
  Icons: {
    vendorTab: (<i className="fa fa-users" />),
    dropsTab: (<i className="fa fa-bug" />),
    craftTab: (<i className="fa fa-diamond" />),
    enchantTab: (<i className="fa fa-flash" />),
    breedingTab: (<i className="fa fa-linux" />),
  },
  Breakpoints: {
    xs: 768,
    sm: 992,
    md: 1200,
  },
  maps: maps,
  skills: skills,
  itemCats:["Armor","Food","Jewelry","Material","Tool","Weapon","Spell","Pet","House","Archery"],
  subCats: {
    0: { // Armor
      0: 'Head',
      1: 'Back',
      2: 'Chest',
      3: 'Off Hand',
      5: 'Hands',
      6: 'Boots',
      11: 'Legs',
    },
    1: { // Food
      0: 'Cooked Food',
      1: 'Specialty Dishes',
      2: 'Potions',
      3: 'Event Items',
      4: 'Ingredients',
    },
    2: { // Jewelry 
      7: 'Neck',
      8: 'Ring',
    },
    3: { // Materials
      0: 'Bars',
      1: 'Bones',
      2: 'Chunks/Ore',
      3: 'Dust',
      4: 'Eggs',
      5: 'Enchanting',
      6: 'Eyes',
      7: 'Fabrics',
      8: 'Fangs/Beaks',
      9: 'Feathers',
      10: 'Gems',
      11: 'Horns',
      12: 'Leather',
      13: 'Farmed Items',
      14: 'Marks',
      15: 'Orbs',
      16: 'Presents',
      17: 'Raw Foods',
      18: 'Scales',
      19: 'Seeds',
      20: 'Shrooms',
      21: 'Teleports',
      22: 'Vials',
      23: 'Wood',
      99: 'Other'
    },
    4: { // Tools
      0: 'Tools',
      1: 'Pouches',
      2: 'Medallions',
      3: 'Permission Slips',
    },
    5: { // Weapons
      0: '1-Handed',
      1: '2-Handed',
      2: 'Wands/Staffs',
      3: 'Keys',
      4: 'Event Items'
    },
    6: { // Spells
      
    },
    7: { // Pets

    },
    8: { // House
      0: 'Beds',
      1: 'Cabinets',
      2: 'Chairs',
      3: 'Chests',
      4: 'Floors',
      5: 'Tables',
      6: 'Walls',
      7: 'Specialty Items',

    }
  },
  mobParamsKeyMap: {
    combat_level: "Level",
    health: "HP",
  },
  itemParamsTransform: {
    cooldown: function(v) {return v * 100},
    archery_damage_boost: function(v) {return v * 100},
    boost_accuracy: function(v) {return v * 100},
    boost_strength: function(v) {return v * 100},
    boost_fishing: function(v) {return v * 100},
    boost_mining: function(v) {return v * 100},
    boost_cooking: function(v) {return v * 100},
    boost_defense: function(v) {return v * 100},
    boost_forging: function(v) {return v * 100},
    boost_woodcutting: function(v) {return v * 100},
    boost_jewelry: function(v) {return v * 100},
    boost_carpentry: function(v) {return v * 100},
    boost_farming: function(v) {return v * 100},
    boost_magic: function(v) {return v * 100},
    boost_archery: function(v) {return v * 100},
    boost_health: function(v) {return v * 100},
    boost_fletching: function(v) {return v * 100},
    to_map: function(v) {return maps[v]},
    archery_cooldown: function(v) {return (v/1000) + 's'},
    archery_speed_boost: function(v) {return v * 100},
    arrow_cooldown: function(v) {return v * 100},
  },
  itemParamsKeyMap: {
    min_defense: "Defense Required",
    min_strength: "Strength Required",
    min_magic: "Magic Required",
    min_health: "Health Required",
    min_accuracy: "Accuracy Required",
    min_archery: "Archery Required",
    armor: "Armor",
    aim: "Aim",
    power: "Power",
    magic: "Magic",
    archery: "Archery",
    archery_damage_boost: "Archery boost",
    cooldown: "- % Magic cooldown",
    speed: "Speed",
    heal: "Healing",
    min_cooking: "Cooking",
    min_alchemy: "Alchemy",
    min_jewelry: "Jewelry",
    min_forging: "Forging",
    min_carpentry: "Carpentry",
    min_farming: "Farming",
    min_fletching: "Fletching",
    boost_accuracy: "+% Accuracy",
    boost_strength: "+% Strength",
    boost_fishing: "+% Fishing",
    boost_mining: "+% Mining",
    boost_cooking: "+% Cooking",
    boost_defense: "+% Defense",
    boost_forging: "+% Forging",
    boost_woodcutting: "+% Woodcutting",
    boost_jewelry: "+% Jewelry",
    boost_carpentry: "+% Carpentry",
    boost_farming: "+% Farming",
    boost_magic: "+% Magic",
    boost_archery: "+% Archery",
    boost_health: "+% Health",
    boost_fletching: "+% Fletching",
    to_map: "Teleports to",
    magic_slots: "Magic slots",
    magic_block: "Magic block",
    melee_block: "Melee block",
    water: "Water units",
    archery_range: "Arrow range",
    archery_uses: "Arrow uses",
    archery_damage: "Max damage",
    archery_cooldown: "Arrow cooldown",
    archery_arrows: "Holds arrows",
    archery_speed_boost: "+% Arrow speed",
    archery_range_boost: "+ Arrow range",
    arrow_cooldown: "-% Arrow cooldown",
  },
  itemSlots: {
    0: 'Head',
    1: 'Back',
    2: 'Chest',
    3: 'Off Hand',
    4: 'Main Hand',
    5: 'Hands',
    6: 'Boots',
    7: 'Neck',
    8: 'Ring',
    11: 'Legs',
    14: 'Potion'
  },
  PayloadSources: keyMirror({
    VIEW_ACTION: null
  }),

  Pages: keyMirror({
    HOME: null,
    SEARCH: null,
    ITEM: null,
    NOT_FOUND: null
  }),

  LayoutConfig: {
    // Keep in sync with `server/constants/ServerConstants.js`
    ROOT_ELEMENT_ID: 'ReactRootElement'
  },
  sheets: [
  {
    "w": 54,
    "h": 49,
    "u": "https://data.mo.ee/sheet/dgiso32_anvil.gif?f61f376221c3fe1dea3f4bb8c39207f2data.mo.ee"
  },
  {
    "w": 54,
    "h": 34,
    "u": "https://data.mo.ee/sheet/ground.gif?30b533254c058f47580c3124c2412d85data.mo.ee"
  },
  {
    "w": 32,
    "h": 32,
    "u": "https://data.mo.ee/sheet/townactions.gif?d2cabb3b664c5c76559f5b7b99e1dcbadata.mo.ee"
  },
  {
    "w": 854,
    "h": 24,
    "u": "https://data.mo.ee/gui.png?b5e9e0f058021a7bc8208462effe8004data.mo.ee"
  },
  {
    "w": 32,
    "h": 32,
    "u": "https://data.mo.ee/sheet/dgweapon32.gif?81e225ef3de2f587fa7ab3896d21c506data.mo.ee"
  },
  {
    "w": 32,
    "h": 32,
    "u": "https://data.mo.ee/sheet/dg_armor32.gif?6104be221062231a62b1e805d0185d28data.mo.ee"
  },
  {
    "w": 32,
    "h": 32,
    "u": "https://data.mo.ee/sheet/dg_food32.gif?854d8e1eb2ec3ea7258b6a2a5c8590e3data.mo.ee"
  },
  {
    "w": 32,
    "h": 32,
    "u": "https://data.mo.ee/sheet/tools.gif?4eec2b1afe2b683ca63aec2425d6c5dddata.mo.ee"
  },
  {
    "w": 32,
    "h": 32,
    "u": "https://data.mo.ee/sheet/fish_new32.gif?7cc807d2c52911c282d6f78a8dad2827data.mo.ee"
  },
  {
    "w": 32,
    "h": 32,
    "u": "https://data.mo.ee/sheet/dgmisc32.gif?6663a4c79b365b33fbb6f105aa48a145data.mo.ee"
  },
  {
    "w": 32,
    "h": 32,
    "u": "https://data.mo.ee/sheet/dg_jewls32.gif?8051e3ec46952ba2e4399726de2bb8b8data.mo.ee"
  },
  {
    "w": 54,
    "h": 156,
    "u": "https://data.mo.ee/sheet/big_stuff.gif?3057a94beb9dd4d9ac412e7a461c8c02data.mo.ee"
  },
  {
    "w": 32,
    "h": 32,
    "u": "https://data.mo.ee/sheet/dg_dragon32.gif?9a48a99c1061f629e4d0a28391c1b04cdata.mo.ee"
  },
  {
    "w": 32,
    "h": 32,
    "u": "https://data.mo.ee/sheet/dg_monster732.gif?1d83cd94fa15a0b7124db3c88dfc01f5data.mo.ee"
  },
  {
    "w": 32,
    "h": 32,
    "u": "https://data.mo.ee/sheet/dg_uniques32.gif?cb71f335f2a9e3584ce6ddbc56b2a187data.mo.ee"
  },
  {
    "w": 32,
    "h": 32,
    "u": "https://data.mo.ee/sheet/alchemyitems2.gif?cac748fa1467f15112ee0e261a0fec3bdata.mo.ee"
  },
  {
    "w": 32,
    "h": 32,
    "u": "https://data.mo.ee/sheet/dg_monster532.gif?3ab6c8f666bcd5c9d2ab66b054bc20eddata.mo.ee"
  },
  {
    "w": 32,
    "h": 32,
    "u": "https://data.mo.ee/sheet/dg_monster332.gif?7f655fead6c6683c6b6c07b8f8ad1e35data.mo.ee"
  },
  {
    "w": 32,
    "h": 32,
    "u": "https://data.mo.ee/sheet/wearable/heads.gif?95faece78ccfec7db3e0b54c65611642data.mo.ee"
  },
  {
    "w": 32,
    "h": 32,
    "u": "https://data.mo.ee/sheet/wearable/facial_hair.gif?1b389be5a4f135a351c31be20ce01b98data.mo.ee"
  },
  {
    "w": 32,
    "h": 32,
    "u": "https://data.mo.ee/sheet/wearable/bodys.gif?f11c77e892d8211f9ba36faa0c72ea24data.mo.ee"
  },
  {
    "w": 32,
    "h": 32,
    "u": "https://data.mo.ee/sheet/wearable/pants.gif?c08f4d39fdc17da5f26e44bac71116dcdata.mo.ee"
  },
  {
    "w": 64,
    "h": 64,
    "u": "https://data.mo.ee/sheet/wearable/capes.gif?27eb993371945a463301adc6ad7cd910data.mo.ee"
  },
  {
    "w": 32,
    "h": 32,
    "u": "https://data.mo.ee/sheet/wearable/left_hands.gif?9af1e2891a66be9eb9c2268853c3e6f3data.mo.ee"
  },
  {
    "w": 32,
    "h": 32,
    "u": "https://data.mo.ee/sheet/wearable/right_hands.gif?fabe3225ba3102a699bc48cce8d47fd3data.mo.ee"
  },
  {
    "w": 32,
    "h": 32,
    "u": "https://data.mo.ee/sheet/wearable/shields.gif?e55926299cde81d159d6651bae3250c3data.mo.ee"
  },
  {
    "w": 32,
    "h": 32,
    "u": "https://data.mo.ee/sheet/wearable/weapons.gif?7a0bf86106cf9290fc58fd74793d2346data.mo.ee"
  },
  {
    "w": 32,
    "h": 32,
    "u": "https://data.mo.ee/sheet/wearable/helmets.gif?af14a91f956124ee8f66a683d032eb3edata.mo.ee"
  },
  {
    "w": 32,
    "h": 32,
    "u": "https://data.mo.ee/sheet/wearable/boots.gif?6e6de2429c7f6b588b8c1b44c56540b7data.mo.ee"
  },
  {
    "w": 32,
    "h": 32,
    "u": "https://data.mo.ee/sheet/magic.gif?f91d56e257d30c13036ded388e710f2ddata.mo.ee"
  },
  {
    "w": 32,
    "h": 32,
    "u": "https://data.mo.ee/sheet/mspell.gif?b5935341a8a9573bea672642886ca352data.mo.ee"
  },
  {
    "w": 32,
    "h": 32,
    "u": "https://data.mo.ee/sheet/sicos.gif?3a49127a54e8383ed92fcd22438e8a89data.mo.ee"
  },
  {
    "w": 32,
    "h": 32,
    "u": "https://data.mo.ee/sheet/mweapons.gif?f568811d9caac7ba9049559e2c8a0ad7data.mo.ee"
  },
  {
    "w": 32,
    "h": 32,
    "u": "https://data.mo.ee/sheet/animals.gif?c6fe6b90dea1ae0d769db4a17a98d6ffdata.mo.ee"
  },
  {
    "w": 54,
    "h": 49,
    "u": "https://data.mo.ee/sheet/newworld2.gif?21868fca75aea95ce3de83a8fb52790ddata.mo.ee"
  },
  {
    "w": 54,
    "h": 49,
    "u": "https://data.mo.ee/sheet/ground_tops.gif?a55dadc6afeb2aa6f7f675c9ce65bd94data.mo.ee"
  },
  {
    "w": 64,
    "h": 96,
    "u": "https://data.mo.ee/sheet/boss.gif?5c33b1c550d0d4b38ae51f4e3a8e63ecdata.mo.ee"
  },
  {
    "w": 32,
    "h": 32,
    "u": "https://data.mo.ee/sheet/pets.gif?af0d495870cce42a7fcc9420bc3257dcdata.mo.ee"
  },
  {
    "w": 54,
    "h": 49,
    "u": "https://data.mo.ee/sheet/pots_crates.gif?6638d2f1c06f95bccfbc7473f03ae434data.mo.ee"
  },
  {
    "w": 576,
    "h": 335,
    "u": "https://data.mo.ee/sheet/big_pyramid.gif?5a98089c5906eb4d729986654a44bdd5data.mo.ee"
  },
  {
    "w": 54,
    "h": 49,
    "u": "https://data.mo.ee/sheet/house.gif?9fb7f87566f789e178b0d3b99d3d130ddata.mo.ee"
  },
  {
    "w": 32,
    "h": 32,
    "u": "https://data.mo.ee/sheet/house_inv.gif?5a752e2831e214b8b37b07382ae16032data.mo.ee"
  },
  {
    "w": 54,
    "h": 49,
    "u": "https://data.mo.ee/sheet/farming_products.gif?261b5b8a20c30ced8c4b69b4ffd4babfdata.mo.ee"
  },
  {
    "w": 46,
    "h": 46,
    "u": "https://data.mo.ee/sheet/wearable/weapons2h.gif?41c4a2febfc8f5d8d83ab0fd24596009data.mo.ee"
  },
  {
    "w": 64,
    "h": 96,
    "u": "https://data.mo.ee/sheet/halloween.gif?8d2053508251f664978fddd66a511452data.mo.ee"
  },
  {
    "w": 54,
    "h": 34,
    "u": "https://data.mo.ee/sheet/ground2.gif?109f2318c4949c61c7b0d4528a000ca4data.mo.ee"
  },
  {
    "w": 596,
    "h": 544,
    "u": "https://data.mo.ee/sheet/cathedral.gif?262ea93f911e987b4752325368d46b0cdata.mo.ee"
  },
  {
    "w": 54,
    "h": 49,
    "u": "https://data.mo.ee/sheet/newworld3.gif?23f643ed2eedaf4888332aa3cab05d4fdata.mo.ee"
  },
  {
    "w": 64,
    "h": 96,
    "u": "https://data.mo.ee/sheet/boss2.gif?8eb4fe77e98e681412fafda83a044240data.mo.ee"
  },
  {
    "w": 64,
    "h": 96,
    "u": "https://data.mo.ee/sheet/boss3.gif?1f3bf253992e59db5c236cc30d2500d7data.mo.ee"
  },
  {
    "w": 64,
    "h": 96,
    "u": "https://data.mo.ee/sheet/boss4.gif?64ce9c6aa5d54388de5342d260724a96data.mo.ee"
  },
  {
    "w": 32,
    "h": 32,
    "u": "https://data.mo.ee/sheet/dgmisc2.gif?9cd38a6d7e1af10936b80ae6c48be4afdata.mo.ee"
  },
  {
    "w": 32,
    "h": 32,
    "u": "https://data.mo.ee/sheet/dgmisc3.gif?2c13af053bcae28ea8ab4c776da0de01data.mo.ee"
  },
  {
    "w": 32,
    "h": 32,
    "u": "https://data.mo.ee/sheet/dgmisc4.gif?cc1f3c7f1a830ce3583e1305a14f8e45data.mo.ee"
  },
  {
    "w": 32,
    "h": 32,
    "u": "https://data.mo.ee/sheet/dgmisc5.gif?b70ebe767506c93395e008aad79da474data.mo.ee"
  },
  {
    "w": 32,
    "h": 32,
    "u": "https://data.mo.ee/sheet/dg_armor2.gif?c57ec53a3f873db6eac1309ff79f61acdata.mo.ee"
  },
  {
    "w": 32,
    "h": 32,
    "u": "https://data.mo.ee/sheet/dgweapon2.gif?86f480841089c10b88d38bb42569b8e9data.mo.ee"
  },
  {
    "w": 32,
    "h": 32,
    "u": "https://data.mo.ee/sheet/wearable/left_hands_female.gif?e56508210998bda5b80b7af067532f70data.mo.ee"
  },
  {
    "w": 32,
    "h": 32,
    "u": "https://data.mo.ee/sheet/wearable/right_hands_female.gif?5328e6d86e5322cfc5f36076b921e861data.mo.ee"
  },
  {
    "w": 32,
    "h": 32,
    "u": "https://data.mo.ee/sheet/arrows.gif?8a2e044a53c22383c49044111902d71adata.mo.ee"
  },
  {
    "w": 20,
    "h": 20,
    "u": "https://data.mo.ee/sheet/wearable/arrows.gif?c1713ed341f02492bdcedb5d5f5b8fbfdata.mo.ee"
  },
  {
    "w": 32,
    "h": 32,
    "u": "https://data.mo.ee/sheet/archery.gif?13302ad38b0a29fd17deab4357b9aa5adata.mo.ee"
  },
  {
    "w": 32,
    "h": 32,
    "u": "https://data.mo.ee/sheet/wearable/archery.gif?b8a767a483a8a44b2a49f11d012a162adata.mo.ee"
  },
  {
    "w": 32,
    "h": 32,
    "u": "https://data.mo.ee/sheet/house_inv2.gif?2a7f52b7e43fff3b8120f6af0ca50974data.mo.ee"
  },
  {
    "w": 64,
    "h": 96,
    "u": "https://data.mo.ee/sheet/boss5.gif?063bb2721fe1d9295112d7b3d5491e67data.mo.ee"
  },
  {
    "w": 32,
    "h": 32,
    "u": "https://data.mo.ee/sheet/box_sets.gif?cdf5f2d4e10997e1ae39e76f127b554edata.mo.ee"
  },
  {
    "w": 54,
    "h": 49
  },
  {
    "w": 54,
    "h": 49
  },
  {
    "w": 54,
    "h": 49
  },
  {
    "w": 54,
    "h": 49
  },
  {
    "w": 54,
    "h": 49
  },
  {
    "w": 54,
    "h": 49
  },
  {
    "w": 54,
    "h": 49
  },
  {
    "w": 54,
    "h": 49
  },
  {
    "w": 54,
    "h": 49
  },
  {
    "w": 54,
    "h": 49
  },
  {
    "w": 54,
    "h": 49
  },
  {
    "w": 54,
    "h": 49
  },
  {
    "w": 54,
    "h": 49
  },
  {
    "w": 54,
    "h": 49
  },
  {
    "w": 54,
    "h": 49
  },
  {
    "w": 54,
    "h": 49
  },
  {
    "w": 54,
    "h": 49
  },
  {
    "w": 54,
    "h": 49
  },
  {
    "w": 54,
    "h": 49
  },
  {
    "w": 54,
    "h": 49
  },
  {
    "w": 54,
    "h": 49
  },
  {
    "w": 54,
    "h": 49
  },
  {
    "w": 54,
    "h": 49
  },
  {
    "w": 54,
    "h": 49
  },
  {
    "w": 54,
    "h": 49
  },
  {
    "w": 54,
    "h": 49
  },
  {
    "w": 54,
    "h": 49
  },
  {
    "w": 54,
    "h": 49
  },
  {
    "w": 54,
    "h": 49
  },
  {
    "w": 54,
    "h": 49
  },
  {
    "w": 54,
    "h": 49
  },
  {
    "w": 54,
    "h": 49
  },
  {
    "w": 54,
    "h": 49
  },
  {
    "w": 54,
    "h": 49
  },
  {
    "w": 54,
    "h": 49
  },
  {
    "w": 54,
    "h": 49
  },
  {
    "w": 54,
    "h": 49
  },
  {
    "w": 54,
    "h": 49
  },
  {
    "w": 54,
    "h": 49
  },
  {
    "w": 54,
    "h": 49
  },
  {
    "w": 54,
    "h": 49
  },
  {
    "w": 54,
    "h": 49
  },
  {
    "w": 54,
    "h": 49
  },
  {
    "w": 54,
    "h": 49
  },
  {
    "w": 54,
    "h": 49
  },
  {
    "w": 54,
    "h": 49
  },
  {
    "w": 54,
    "h": 49
  },
  {
    "w": 54,
    "h": 49
  },
  {
    "w": 54,
    "h": 49
  },
  {
    "w": 54,
    "h": 49
  },
  {
    "w": 54,
    "h": 49
  },
  {
    "w": 54,
    "h": 49
  },
  {
    "w": 54,
    "h": 49
  },
  {
    "w": 54,
    "h": 49
  },
  {
    "w": 54,
    "h": 49
  },
  {
    "w": 54,
    "h": 49
  },
  {
    "w": 54,
    "h": 49
  },
  {
    "w": 54,
    "h": 49
  },
  {
    "w": 54,
    "h": 49
  },
  {
    "w": 54,
    "h": 49
  },
  {
    "w": 54,
    "h": 49
  },
  {
    "w": 54,
    "h": 49
  },
  {
    "w": 54,
    "h": 49
  },
  {
    "w": 54,
    "h": 49
  },
  {
    "w": 54,
    "h": 49
  },
  {
    "w": 54,
    "h": 49
  },
  {
    "w": 54,
    "h": 49
  },
  {
    "w": 54,
    "h": 49
  },
  {
    "w": 54,
    "h": 49
  },
  {
    "w": 54,
    "h": 49
  },
  {
    "w": 54,
    "h": 49
  },
  {
    "w": 54,
    "h": 49
  },
  {
    "w": 54,
    "h": 49
  },
  {
    "w": 54,
    "h": 49
  },
  {
    "w": 54,
    "h": 49
  },
  {
    "w": 54,
    "h": 49
  },
  {
    "w": 54,
    "h": 49
  },
  {
    "w": 54,
    "h": 49
  },
  {
    "w": 54,
    "h": 49
  },
  {
    "w": 54,
    "h": 49
  },
  {
    "w": 54,
    "h": 49
  },
  {
    "w": 54,
    "h": 49
  },
  {
    "w": 54,
    "h": 49
  },
  {
    "w": 54,
    "h": 49
  },
  {
    "w": 54,
    "h": 49
  },
  {
    "w": 54,
    "h": 49
  },
  {
    "w": 54,
    "h": 49
  },
  {
    "w": 54,
    "h": 49
  },
  {
    "w": 54,
    "h": 49
  },
  {
    "w": 54,
    "h": 49
  },
  {
    "w": 54,
    "h": 49
  },
  {
    "w": 54,
    "h": 49
  },
  {
    "w": 54,
    "h": 49
  },
  {
    "w": 54,
    "h": 49
  },
  {
    "w": 54,
    "h": 49
  },
  {
    "w": 54,
    "h": 49
  },
  {
    "w": 54,
    "h": 49
  },
  {
    "w": 54,
    "h": 49
  },
  {
    "w": 54,
    "h": 49
  },
  {
    "w": 54,
    "h": 49
  },
  {
    "w": 54,
    "h": 49
  },
  {
    "w": 54,
    "h": 49
  },
  {
    "w": 54,
    "h": 49
  },
  {
    "w": 54,
    "h": 49
  },
  {
    "w": 54,
    "h": 49
  },
  {
    "w": 54,
    "h": 49
  },
  {
    "w": 54,
    "h": 49
  },
  {
    "w": 54,
    "h": 49
  },
  {
    "w": 54,
    "h": 49
  },
  {
    "w": 54,
    "h": 49
  },
  {
    "w": 54,
    "h": 49
  },
  {
    "w": 54,
    "h": 49
  },
  {
    "w": 54,
    "h": 49
  },
  {
    "w": 54,
    "h": 49
  },
  {
    "w": 54,
    "h": 49
  },
  {
    "w": 54,
    "h": 49
  },
  {
    "w": 54,
    "h": 49
  },
  {
    "w": 54,
    "h": 49
  },
  {
    "w": 54,
    "h": 49
  },
  {
    "w": 54,
    "h": 49
  },
  {
    "w": 54,
    "h": 49
  },
  {
    "w": 54,
    "h": 49
  },
  {
    "w": 54,
    "h": 49
  },
  {
    "w": 54,
    "h": 49
  },
  {
    "w": 54,
    "h": 49
  },
  {
    "w": 54,
    "h": 49
  },
  {
    "w": 54,
    "h": 49
  },
  {
    "w": 54,
    "h": 49
  },
  {
    "w": 54,
    "h": 49
  },
  {
    "w": 54,
    "h": 49
  },
  {
    "w": 54,
    "h": 49
  },
  {
    "w": 54,
    "h": 49
  },
  {
    "w": 54,
    "h": 49
  },
  {
    "w": 54,
    "h": 49
  },
  {
    "w": 54,
    "h": 49
  },
  {
    "w": 54,
    "h": 49
  },
  {
    "w": 54,
    "h": 49
  },
  {
    "w": 54,
    "h": 49
  },
  {
    "w": 54,
    "h": 49
  },
  {
    "w": 54,
    "h": 49
  },
  {
    "w": 54,
    "h": 49
  },
  {
    "w": 54,
    "h": 49
  },
  {
    "w": 54,
    "h": 49
  },
  {
    "w": 54,
    "h": 49
  },
  {
    "w": 54,
    "h": 49
  },
  {
    "w": 54,
    "h": 49
  },
  {
    "w": 54,
    "h": 49
  },
  {
    "w": 54,
    "h": 49
  },
  {
    "w": 54,
    "h": 49
  },
  {
    "w": 54,
    "h": 49
  },
  {
    "w": 54,
    "h": 49
  },
  {
    "w": 54,
    "h": 49
  },
  {
    "w": 54,
    "h": 49
  },
  {
    "w": 54,
    "h": 49
  },
  {
    "w": 54,
    "h": 49
  },
  {
    "w": 54,
    "h": 49
  },
  {
    "w": 54,
    "h": 49
  },
  {
    "w": 54,
    "h": 49
  },
  {
    "w": 54,
    "h": 49
  },
  {
    "w": 54,
    "h": 49
  },
  {
    "w": 54,
    "h": 49
  }
]
};
obj.itemCatMap = {};
obj.itemCats.map(function(item,idx){
  obj.itemCatMap[item.toUpperCase()] = idx;
});

module.exports = obj;

// // Stuff to make drawBody work
// window.BODY_PARTS = {"HEADS":{"0":{"img":{"sheet":"26","x":0,"y":0},"available":true,"facial_hairs":[0,1,2,3,4,5,6,7]},"1":{"img":{"sheet":"26","x":1,"y":0},"available":true,"facial_hairs":[0,1,2,3,4,5,6,7]},"2":{"img":{"sheet":"26","x":3,"y":0},"available":true,"facial_hairs":[0,1,2,3,4,5,6,7]},"3":{"img":{"sheet":"26","x":4,"y":0},"available":true,"facial_hairs":[0,1,2,3,4,5,6,7]},"4":{"img":{"sheet":"26","x":5,"y":0},"available":true,"facial_hairs":[0,1,2,3,4,5,6,7]},"5":{"img":{"sheet":"26","x":6,"y":0},"available":true,"facial_hairs":[0,1,2,3,4,5,6,7]},"6":{"img":{"sheet":"26","x":7,"y":0}},"7":{"img":{"sheet":"26","x":8,"y":0}},"8":{"img":{"sheet":"26","x":9,"y":0}},"9":{"img":{"sheet":"26","x":0,"y":1}},"10":{"img":{"sheet":"26","x":1,"y":1}},"11":{"img":{"sheet":"26","x":2,"y":1}},"12":{"img":{"sheet":"26","x":3,"y":1},"available":true,"facial_hairs":[0,1,2,3,4,5,6,7]},"13":{"img":{"sheet":"26","x":4,"y":1},"available":true,"facial_hairs":[0,1,2,3,4,5,6,7]},"14":{"img":{"sheet":"26","x":5,"y":1},"available":true,"facial_hairs":[0,1,2,3,4,5,6,7]},"15":{"img":{"sheet":"26","x":6,"y":1},"available":true,"facial_hairs":[0,1,2,3,4,5,6,7]},"16":{"img":{"sheet":"26","x":7,"y":1},"available":true,"facial_hairs":[0,1,2,3,4,5,6,7]},"17":{"img":{"sheet":"26","x":8,"y":1},"available":true,"facial_hairs":[0,1,2,3,4,5,6,7]},"18":{"img":{"sheet":"26","x":9,"y":1},"available":true,"facial_hairs":[0,1,2,3,4,5,6,7]},"19":{"img":{"sheet":"26","x":0,"y":2}}},"BODIES":{"0":{"img":{"sheet":"28","x":0,"y":0},"available":true},"1":{"img":{"sheet":"28","x":1,"y":0},"available":true},"2":{"img":{"sheet":"28","x":3,"y":0},"available":true},"3":{"img":{"sheet":"28","x":4,"y":0},"available":true},"4":{"img":{"sheet":"28","x":5,"y":0},"available":true},"5":{"img":{"sheet":"28","x":6,"y":0},"available":true},"6":{"img":{"sheet":"28","x":7,"y":0},"available":true},"7":{"img":{"sheet":"28","x":8,"y":0},"available":true},"8":{"img":{"sheet":"28","x":9,"y":0},"available":true},"9":{"img":{"sheet":"28","x":0,"y":1},"available":true},"10":{"img":{"sheet":"28","x":1,"y":1}},"11":{"img":{"sheet":"28","x":2,"y":1}},"12":{"img":{"sheet":"28","x":3,"y":1}},"13":{"img":{"sheet":"28","x":4,"y":1}},"14":{"img":{"sheet":"28","x":5,"y":1}},"15":{"img":{"sheet":"28","x":6,"y":1}},"16":{"img":{"sheet":"28","x":7,"y":1}},"17":{"img":{"sheet":"28","x":8,"y":1}},"18":{"img":{"sheet":"28","x":9,"y":1}},"19":{"img":{"sheet":"28","x":0,"y":2}},"20":{"img":{"sheet":"28","x":1,"y":2}},"21":{"img":{"sheet":"28","x":2,"y":2}},"22":{"img":{"sheet":"28","x":3,"y":2}},"23":{"img":{"sheet":"28","x":4,"y":2}},"24":{"img":{"sheet":"28","x":5,"y":2}},"25":{"img":{"sheet":"28","x":6,"y":2}},"26":{"img":{"sheet":"28","x":7,"y":2}},"27":{"img":{"sheet":"28","x":8,"y":2}},"28":{"img":{"sheet":"28","x":9,"y":2}},"29":{"img":{"sheet":"28","x":0,"y":3}},"30":{"img":{"sheet":"28","x":1,"y":3}},"31":{"img":{"sheet":"28","x":2,"y":3}},"32":{"img":{"sheet":"28","x":3,"y":3}},"33":{"img":{"sheet":"28","x":4,"y":3}},"34":{"img":{"sheet":"28","x":5,"y":3}},"35":{"img":{"sheet":"28","x":6,"y":3}},"36":{"img":{"sheet":"28","x":7,"y":3}},"37":{"img":{"sheet":"28","x":8,"y":3}},"38":{"img":{"sheet":"28","x":9,"y":3}},"39":{"img":{"sheet":"28","x":0,"y":4}},"40":{"img":{"sheet":"28","x":1,"y":4}},"41":{"img":{"sheet":"28","x":2,"y":4}},"42":{"img":{"sheet":"28","x":3,"y":4}},"43":{"img":{"sheet":"28","x":4,"y":4}},"44":{"img":{"sheet":"28","x":5,"y":4}},"45":{"img":{"sheet":"28","x":6,"y":4}},"46":{"img":{"sheet":"28","x":7,"y":4}},"47":{"img":{"sheet":"28","x":8,"y":4}},"48":{"img":{"sheet":"28","x":9,"y":4}},"49":{"img":{"sheet":"28","x":0,"y":5}},"50":{"img":{"sheet":"28","x":1,"y":5}},"51":{"img":{"sheet":"28","x":2,"y":5}},"52":{"img":{"sheet":"28","x":3,"y":5}},"53":{"img":{"sheet":"28","x":4,"y":5}},"54":{"img":{"sheet":"28","x":5,"y":5}},"55":{"img":{"sheet":"28","x":6,"y":5}},"56":{"img":{"sheet":"28","x":7,"y":5}},"57":{"img":{"sheet":"28","x":8,"y":5}},"58":{"img":{"sheet":"28","x":9,"y":5}},"59":{"img":{"sheet":"28","x":0,"y":6}},"60":{"img":{"sheet":"28","x":1,"y":6}},"61":{"img":{"sheet":"28","x":2,"y":6}},"62":{"img":{"sheet":"28","x":3,"y":6}},"63":{"img":{"sheet":"28","x":4,"y":6}},"64":{"img":{"sheet":"28","x":5,"y":6}},"65":{"img":{"sheet":"28","x":6,"y":6}},"66":{"img":{"sheet":"28","x":7,"y":6}},"67":{"img":{"sheet":"28","x":8,"y":6}},"68":{"img":{"sheet":"28","x":9,"y":6}},"69":{"img":{"sheet":"28","x":0,"y":7}},"70":{"img":{"sheet":"28","x":1,"y":7}},"71":{"img":{"sheet":"28","x":2,"y":7}},"72":{"img":{"sheet":"28","x":3,"y":7}},"73":{"img":{"sheet":"28","x":4,"y":7}},"74":{"img":{"sheet":"28","x":5,"y":7}},"75":{"img":{"sheet":"28","x":6,"y":7}},"76":{"img":{"sheet":"28","x":7,"y":7}},"77":{"img":{"sheet":"28","x":8,"y":7}},"78":{"img":{"sheet":"28","x":9,"y":7}},"79":{"img":{"sheet":"28","x":0,"y":8}},"80":{"img":{"sheet":"28","x":1,"y":8}},"81":{"img":{"sheet":"28","x":2,"y":8}},"82":{"img":{"sheet":"28","x":3,"y":8}},"83":{"img":{"sheet":"28","x":4,"y":8}},"84":{"img":{"sheet":"28","x":5,"y":8}},"85":{"img":{"sheet":"28","x":6,"y":8}},"86":{"img":{"sheet":"28","x":7,"y":8}},"87":{"img":{"sheet":"28","x":8,"y":8}},"88":{"img":{"sheet":"28","x":9,"y":8}},"89":{"img":{"sheet":"28","x":0,"y":9}},"90":{"img":{"sheet":"28","x":1,"y":9}},"91":{"img":{"sheet":"28","x":2,"y":9}},"92":{"img":{"sheet":"28","x":3,"y":9}}},"PANTS":{"0":{"img":{"sheet":"29","x":0,"y":0},"available":true},"1":{"img":{"sheet":"29","x":1,"y":0},"available":true},"2":{"img":{"sheet":"29","x":3,"y":0},"available":true},"3":{"img":{"sheet":"29","x":4,"y":0},"available":true},"4":{"img":{"sheet":"29","x":5,"y":0},"available":true},"5":{"img":{"sheet":"29","x":6,"y":0},"available":true},"6":{"img":{"sheet":"29","x":7,"y":0},"available":true},"7":{"img":{"sheet":"29","x":8,"y":0},"available":true},"8":{"img":{"sheet":"29","x":9,"y":0},"available":true},"9":{"img":{"sheet":"29","x":0,"y":1},"available":true},"10":{"img":{"sheet":"29","x":1,"y":1}},"11":{"img":{"sheet":"29","x":2,"y":1}},"12":{"img":{"sheet":"29","x":3,"y":1}},"13":{"img":{"sheet":"29","x":4,"y":1}},"14":{"img":{"sheet":"29","x":5,"y":1}},"15":{"img":{"sheet":"29","x":6,"y":1}},"16":{"img":{"sheet":"29","x":7,"y":1}},"17":{"img":{"sheet":"29","x":8,"y":1}},"18":{"img":{"sheet":"29","x":9,"y":1}},"19":{"img":{"sheet":"29","x":0,"y":2}},"20":{"img":{"sheet":"29","x":1,"y":2}},"21":{"img":{"sheet":"29","x":2,"y":2}},"22":{"img":{"sheet":"29","x":3,"y":2}},"23":{"img":{"sheet":"29","x":4,"y":2}},"24":{"img":{"sheet":"29","x":5,"y":2}},"25":{"img":{"sheet":"29","x":6,"y":2}},"26":{"img":{"sheet":"29","x":7,"y":2}},"27":{"img":{"sheet":"29","x":8,"y":2}},"28":{"img":{"sheet":"29","x":9,"y":2}},"29":{"img":{"sheet":"29","x":0,"y":3}},"30":{"img":{"sheet":"29","x":1,"y":3}},"31":{"img":{"sheet":"29","x":2,"y":3}},"32":{"img":{"sheet":"29","x":3,"y":3}},"33":{"img":{"sheet":"29","x":4,"y":3}},"34":{"img":{"sheet":"29","x":5,"y":3}},"35":{"img":{"sheet":"29","x":6,"y":3}},"36":{"img":{"sheet":"29","x":7,"y":3}},"37":{"img":{"sheet":"29","x":8,"y":3}},"38":{"img":{"sheet":"29","x":9,"y":3}},"39":{"img":{"sheet":"29","x":0,"y":4}},"40":{"img":{"sheet":"29","x":1,"y":4}},"41":{"img":{"sheet":"29","x":2,"y":4}},"42":{"img":{"sheet":"29","x":3,"y":4}},"43":{"img":{"sheet":"29","x":4,"y":4}},"44":{"img":{"sheet":"29","x":5,"y":4}},"45":{"img":{"sheet":"29","x":6,"y":4}},"46":{"img":{"sheet":"29","x":7,"y":4}},"47":{"img":{"sheet":"29","x":8,"y":4}},"48":{"img":{"sheet":"29","x":9,"y":4}},"49":{"img":{"sheet":"29","x":0,"y":5}},"50":{"img":{"sheet":"29","x":1,"y":5}},"51":{"img":{"sheet":"29","x":2,"y":5}},"52":{"img":{"sheet":"29","x":3,"y":5}},"53":{"img":{"sheet":"29","x":4,"y":5}},"54":{"img":{"sheet":"29","x":5,"y":5}},"55":{"img":{"sheet":"29","x":6,"y":5}},"56":{"img":{"sheet":"29","x":7,"y":5}},"57":{"img":{"sheet":"29","x":8,"y":5}},"58":{"img":{"sheet":"29","x":9,"y":5}},"59":{"img":{"sheet":"29","x":0,"y":6}},"60":{"img":{"sheet":"29","x":1,"y":6}},"61":{"img":{"sheet":"29","x":2,"y":6}},"62":{"img":{"sheet":"29","x":3,"y":6}}},"FACIAL_HAIR":{"0":{"name":"None","img":{"sheet":"27","x":0,"y":0},"available":true},"1":{"name":"Black beard","img":{"sheet":"27","x":1,"y":0},"available":true},"2":{"name":"White beard","img":{"sheet":"27","x":3,"y":0},"available":true},"3":{"name":"Orange beard","img":{"sheet":"27","x":4,"y":0},"available":true},"4":{"name":"Yellow beard","img":{"sheet":"27","x":5,"y":0},"available":true},"5":{"name":"Yellow Long beard","img":{"sheet":"27","x":6,"y":0},"available":true},"6":{"name":"Gray Long beard","img":{"sheet":"27","x":7,"y":0},"available":true},"7":{"name":"Green Long beard","img":{"sheet":"27","x":8,"y":0},"available":true}},"CAPES":{"0":{"name":"None","img":{"sheet":"30","x":0,"y":0}},"1":{"name":"Red Cape","img":{"sheet":"30","x":1,"y":0}},"2":{"name":"Blue Cape","img":{"sheet":"30","x":3,"y":0}},"3":{"name":"Devil Wings","img":{"sheet":"30","x":4,"y":0}},"4":{"name":"Donator Cape","img":{"sheet":"30","x":5,"y":0}},"5":{"name":"Archdevil Wings","img":{"sheet":"30","x":6,"y":0}},"6":{"name":"Arcangel Wings","img":{"sheet":"30","x":7,"y":0}},"7":{"name":"Angel Wings","img":{"sheet":"30","x":8,"y":0}},"8":{"name":"Berserker Cape","img":{"sheet":"30","x":9,"y":0}},"9":{"name":"Merlin Cape","img":{"sheet":"30","x":0,"y":1}},"10":{"name":"Twilight Cape","img":{"sheet":"30","x":1,"y":1}},"11":{"name":"Gandalf Cape","img":{"sheet":"30","x":2,"y":1}},"12":{"name":"Warlord Cape","img":{"sheet":"30","x":3,"y":1}},"13":{"name":"Donator Wings","img":{"sheet":"30","x":4,"y":1}},"14":{"name":"Big Spender Wings","img":{"sheet":"30","x":5,"y":1}},"15":{"name":"Welth Wings","img":{"sheet":"30","x":6,"y":1}},"16":{"name":"Admin Wings","img":{"sheet":"30","x":7,"y":1}},"17":{"name":"Overlord Cape","img":{"sheet":"30","x":8,"y":1}},"18":{"name":"Phoenix Cape","img":{"sheet":"30","x":9,"y":1}},"19":{"name":"Behemoth Cape","img":{"sheet":"30","x":0,"y":2}},"20":{"name":"Valentine Cape","img":{"sheet":"30","x":1,"y":2}},"21":{"name":"Nephilim Wings","img":{"sheet":"30","x":2,"y":2}},"22":{"name":"Thunder Wings","img":{"sheet":"30","x":3,"y":2}},"23":{"name":"Ice Wings","img":{"sheet":"30","x":4,"y":2}},"24":{"name":"Balance Wings","img":{"sheet":"30","x":5,"y":2}},"25":{"name":"Enchanted Balance Wings","img":{"sheet":"30","x":6,"y":2}},"26":{"name":"Soul Wings","img":{"sheet":"30","x":7,"y":2}},"27":{"name":"Enchanted Soul Wings","img":{"sheet":"30","x":8,"y":2}},"28":{"name":"Divine Wings","img":{"sheet":"30","x":9,"y":2}},"29":{"name":"Divine Wings","img":{"sheet":"30","x":0,"y":3}},"30":{"name":"Encanted Arcdevil Wings","img":{"sheet":"30","x":1,"y":3}},"31":{"name":"Sunstorm Wings","img":{"sheet":"30","x":2,"y":3}},"32":{"name":"Enchanted Sunstorm Wings","img":{"sheet":"30","x":3,"y":3}},"33":{"name":"Iron Wings","img":{"sheet":"30","x":4,"y":3}},"34":{"name":"Bat Wings","img":{"sheet":"30","x":5,"y":3}},"35":{"name":"Enchanted Bat Wings","img":{"sheet":"30","x":6,"y":3}},"36":{"name":"Enchanted Nephilim Wings","img":{"sheet":"30","x":7,"y":3}},"37":{"name":"Enchanted Archangel Wings","img":{"sheet":"30","x":8,"y":3}},"38":{"name":"Fire Wings","img":{"sheet":"30","x":9,"y":3}},"39":{"name":"Encanted Fire Wings","img":{"sheet":"30","x":0,"y":4}},"40":{"name":"Gorgon Wings","img":{"sheet":"30","x":1,"y":4}},"41":{"name":"Spirit Wings","img":{"sheet":"30","x":2,"y":4}},"42":{"name":"Enchanted Spirit Wings","img":{"sheet":"30","x":3,"y":4}},"43":{"name":"Enchanted Lightning wings","img":{"sheet":"30","x":4,"y":4}},"44":{"name":"Enchanted Ice wings","img":{"sheet":"30","x":5,"y":4}},"45":{"name":"Enchanted Iron Wings","img":{"sheet":"30","x":6,"y":4}},"46":{"name":"Wings of Path","img":{"sheet":"30","x":7,"y":4}},"47":{"name":"Enchanted Wings of Path","img":{"sheet":"30","x":8,"y":4}},"48":{"name":"Core Wings","img":{"sheet":"30","x":9,"y":4}},"49":{"name":"Enchanted Core Wings","img":{"sheet":"30","x":0,"y":5}},"50":{"name":"Enchanted Underworld Wings","img":{"sheet":"30","x":1,"y":5}},"51":{"name":"Underworld Wings","img":{"sheet":"30","x":2,"y":5}},"52":{"name":"Enchanted Gorgon Wings","img":{"sheet":"30","x":3,"y":5}},"53":{"name":"Enchanted Saint Dragon Wings","img":{"sheet":"30","x":4,"y":5}},"54":{"name":"Enchanted Ruby Dragon Wings","img":{"sheet":"30","x":5,"y":5}},"55":{"name":"Enchanted Sapphire Dragon Wings","img":{"sheet":"30","x":6,"y":5}},"56":{"name":"Sapphire Dragon Wings","img":{"sheet":"30","x":7,"y":5}},"57":{"name":"Enchanted Angel Wings","img":{"sheet":"30","x":8,"y":5}},"58":{"name":"Enchanted Devil WIngs","img":{"sheet":"30","x":9,"y":5}},"59":{"name":"Saint Dragon Wings","img":{"sheet":"30","x":0,"y":6}},"60":{"name":"Ruby Dragon Wings","img":{"sheet":"30","x":1,"y":6}},"61":{"name":"Shadow Wings","img":{"sheet":"30","x":2,"y":6}},"62":{"name":"Enchanted Shadow Wings","img":{"sheet":"30","x":3,"y":6}},"63":{"name":"Crystal Wings","img":{"sheet":"30","x":4,"y":6}},"64":{"name":"Enchanted Crystal Wings","img":{"sheet":"30","x":5,"y":6}},"65":{"name":"War Dragon Wings","img":{"sheet":"30","x":6,"y":6}},"66":{"name":"Peace Dragon Wings","img":{"sheet":"30","x":7,"y":6}},"67":{"name":"Peace Dragon Wings +14","img":{"sheet":"30","x":8,"y":6}},"68":{"name":"Peace Dragon Wings +12","img":{"sheet":"30","x":9,"y":6}},"69":{"name":"Peace Dragon Wings +11","img":{"sheet":"30","x":0,"y":7}},"70":{"name":"Peace Dragon Wings +15","img":{"sheet":"30","x":1,"y":7}},"71":{"name":"Peace Dragon Wings +13","img":{"sheet":"30","x":2,"y":7}},"72":{"name":"NPC","img":{"x":0,"y":0,"sheet":"guild_buildings.png","sheet_file":"guild_buildings.png","file":"npc.png","w":1,"h":1,"pos":{"_x":0,"_y":23}}}},"LEFT_HANDS":{"0":{"img":{"sheet":"31","x":0,"y":0}},"1":{"img":{"sheet":"31","x":1,"y":0}},"2":{"img":{"sheet":"31","x":3,"y":0}},"3":{"img":{"sheet":"31","x":4,"y":0}},"4":{"img":{"sheet":"31","x":5,"y":0}},"5":{"img":{"sheet":"31","x":6,"y":0}}},"RIGHT_HANDS":{"0":{"img":{"sheet":"32","x":0,"y":0}},"1":{"img":{"sheet":"32","x":1,"y":0}},"2":{"img":{"sheet":"32","x":3,"y":0}}},"SHIELDS":{"0":{"img":{"sheet":"33","x":0,"y":0}},"1":{"img":{"sheet":"33","x":1,"y":0}},"2":{"img":{"sheet":"33","x":3,"y":0}},"3":{"img":{"sheet":"33","x":4,"y":0}},"4":{"img":{"sheet":"33","x":5,"y":0}},"5":{"img":{"sheet":"33","x":6,"y":0}},"6":{"img":{"sheet":"33","x":7,"y":0}},"7":{"img":{"sheet":"33","x":8,"y":0}},"8":{"img":{"sheet":"33","x":9,"y":0}},"9":{"img":{"sheet":"33","x":0,"y":1}},"10":{"img":{"sheet":"33","x":1,"y":1}},"11":{"img":{"sheet":"33","x":2,"y":1}},"12":{"img":{"sheet":"33","x":3,"y":1}},"13":{"img":{"sheet":"33","x":4,"y":1}},"14":{"img":{"sheet":"33","x":5,"y":1}},"15":{"img":{"sheet":"33","x":6,"y":1}},"16":{"img":{"sheet":"33","x":7,"y":1}},"17":{"img":{"sheet":"33","x":8,"y":1}},"18":{"img":{"sheet":"33","x":9,"y":1}},"19":{"img":{"sheet":"33","x":0,"y":2}},"20":{"img":{"sheet":"33","x":1,"y":2}},"21":{"img":{"sheet":"33","x":2,"y":2}},"22":{"img":{"sheet":"33","x":3,"y":2}},"23":{"img":{"sheet":"33","x":4,"y":2}},"24":{"img":{"sheet":"33","x":5,"y":2}},"25":{"img":{"sheet":"33","x":6,"y":2}},"26":{"img":{"sheet":"33","x":7,"y":2}},"27":{"img":{"sheet":"33","x":8,"y":2}},"28":{"img":{"sheet":"33","x":9,"y":2}},"29":{"img":{"sheet":"33","x":0,"y":3}},"30":{"img":{"sheet":"33","x":1,"y":3}},"31":{"img":{"sheet":"33","x":2,"y":3}},"32":{"img":{"sheet":"33","x":3,"y":3}},"33":{"img":{"sheet":"33","x":4,"y":3}},"34":{"img":{"sheet":"33","x":5,"y":3}},"35":{"img":{"sheet":"33","x":6,"y":3}},"36":{"img":{"sheet":"33","x":7,"y":3}},"37":{"img":{"sheet":"33","x":8,"y":3}},"38":{"img":{"sheet":"33","x":9,"y":3}},"39":{"img":{"sheet":"33","x":0,"y":4}},"40":{"img":{"sheet":"33","x":1,"y":4}},"41":{"img":{"sheet":"33","x":2,"y":4}},"42":{"img":{"sheet":"33","x":3,"y":4}},"43":{"img":{"sheet":"33","x":4,"y":4}},"44":{"img":{"sheet":"33","x":5,"y":4}},"45":{"img":{"sheet":"33","x":6,"y":4}},"46":{"img":{"sheet":"33","x":7,"y":4}},"47":{"img":{"sheet":"33","x":8,"y":4}},"48":{"img":{"sheet":"33","x":9,"y":4}},"49":{"img":{"sheet":"33","x":0,"y":5}},"50":{"img":{"sheet":"33","x":1,"y":5}},"51":{"img":{"sheet":"33","x":2,"y":5}},"52":{"img":{"sheet":"33","x":3,"y":5}},"53":{"img":{"sheet":"33","x":4,"y":5}},"54":{"img":{"sheet":"33","x":5,"y":5}},"55":{"img":{"sheet":"33","x":6,"y":5}}},"HELMETS":{"0":{"img":{"sheet":"35","x":0,"y":0}},"1":{"img":{"sheet":"35","x":1,"y":0}},"2":{"img":{"sheet":"35","x":3,"y":0}},"3":{"img":{"sheet":"35","x":4,"y":0}},"4":{"img":{"sheet":"35","x":5,"y":0}},"5":{"img":{"sheet":"35","x":6,"y":0}},"6":{"img":{"sheet":"35","x":7,"y":0}},"7":{"img":{"sheet":"35","x":8,"y":0}},"8":{"img":{"sheet":"35","x":9,"y":0}},"9":{"img":{"sheet":"35","x":0,"y":1}},"10":{"img":{"sheet":"35","x":1,"y":1}},"11":{"img":{"sheet":"35","x":2,"y":1}},"12":{"img":{"sheet":"35","x":3,"y":1}},"13":{"img":{"sheet":"35","x":4,"y":1}},"14":{"img":{"sheet":"35","x":5,"y":1}},"15":{"img":{"sheet":"35","x":6,"y":1}},"16":{"img":{"sheet":"35","x":7,"y":1}},"17":{"img":{"sheet":"35","x":8,"y":1}},"18":{"img":{"sheet":"35","x":9,"y":1}},"19":{"img":{"sheet":"35","x":0,"y":2}},"20":{"img":{"sheet":"35","x":1,"y":2}},"21":{"img":{"sheet":"35","x":2,"y":2}},"22":{"img":{"sheet":"35","x":3,"y":2}},"23":{"img":{"sheet":"35","x":4,"y":2}},"24":{"img":{"sheet":"35","x":5,"y":2}},"25":{"img":{"sheet":"35","x":6,"y":2}},"26":{"img":{"sheet":"35","x":7,"y":2}},"27":{"img":{"sheet":"35","x":8,"y":2}},"28":{"img":{"sheet":"35","x":9,"y":2}},"29":{"img":{"sheet":"35","x":0,"y":3}},"30":{"img":{"sheet":"35","x":1,"y":3}},"31":{"img":{"sheet":"35","x":2,"y":3}},"32":{"img":{"sheet":"35","x":3,"y":3}},"33":{"img":{"sheet":"35","x":4,"y":3}},"34":{"img":{"sheet":"35","x":5,"y":3}},"35":{"img":{"sheet":"35","x":6,"y":3}},"36":{"img":{"sheet":"35","x":7,"y":3}},"37":{"img":{"sheet":"35","x":8,"y":3}},"38":{"img":{"sheet":"35","x":9,"y":3}},"39":{"img":{"sheet":"35","x":0,"y":4}},"40":{"img":{"sheet":"35","x":1,"y":4}},"41":{"img":{"sheet":"35","x":2,"y":4}},"42":{"img":{"sheet":"35","x":3,"y":4}},"43":{"img":{"sheet":"35","x":4,"y":4}},"44":{"img":{"sheet":"35","x":5,"y":4}},"45":{"img":{"sheet":"35","x":6,"y":4}},"46":{"img":{"sheet":"35","x":7,"y":4}},"47":{"img":{"sheet":"35","x":8,"y":4}},"48":{"img":{"sheet":"35","x":9,"y":4}},"49":{"img":{"sheet":"35","x":0,"y":5}},"50":{"img":{"sheet":"35","x":1,"y":5}},"51":{"img":{"sheet":"35","x":2,"y":5}},"52":{"img":{"sheet":"35","x":3,"y":5}},"53":{"img":{"sheet":"35","x":4,"y":5}},"54":{"img":{"sheet":"35","x":5,"y":5}}},"BOOTS":{"0":{"img":{"sheet":"36","x":0,"y":0}},"1":{"img":{"sheet":"36","x":1,"y":0}},"2":{"img":{"sheet":"36","x":3,"y":0}},"3":{"img":{"sheet":"36","x":4,"y":0}},"4":{"img":{"sheet":"36","x":5,"y":0}},"5":{"img":{"sheet":"36","x":6,"y":0}},"6":{"img":{"sheet":"36","x":7,"y":0}},"7":{"img":{"sheet":"36","x":8,"y":0}},"8":{"img":{"sheet":"36","x":9,"y":0}},"9":{"img":{"sheet":"36","x":0,"y":1}},"10":{"img":{"sheet":"36","x":1,"y":1}},"11":{"img":{"sheet":"36","x":2,"y":1}},"12":{"img":{"sheet":"36","x":3,"y":1}},"13":{"img":{"sheet":"36","x":4,"y":1}},"14":{"img":{"sheet":"36","x":5,"y":1}},"15":{"img":{"sheet":"36","x":6,"y":1}},"16":{"img":{"sheet":"36","x":7,"y":1}},"17":{"img":{"sheet":"36","x":8,"y":1}},"18":{"img":{"sheet":"36","x":9,"y":1}},"19":{"img":{"sheet":"36","x":0,"y":2}},"20":{"img":{"sheet":"36","x":1,"y":2}},"21":{"img":{"sheet":"36","x":2,"y":2}},"22":{"img":{"sheet":"36","x":3,"y":2}}},"GROUND_EFFECT":{"0":{"img":{"sheet":"34","x":0,"y":0,"pos":{"_x":0,"_y":0}}},"1":{"name":"NPC","img":{"x":0,"y":0,"sheet":"guild_buildings.png","sheet_file":"guild_buildings.png","file":"npc.png","w":1,"h":1,"pos":{"_x":0,"_y":23}}}},"WEAPONS":{"0":{"img":{"sheet":"34","x":0,"y":0,"pos":{"_x":0,"_y":0}}},"1":{"img":{"sheet":"34","x":1,"y":0,"pos":{"_x":11,"_y":-2}}},"2":{"img":{"sheet":"34","x":3,"y":0,"pos":{"_x":11,"_y":-2}}},"3":{"img":{"sheet":"34","x":4,"y":0,"pos":{"_x":-2,"_y":2}}},"4":{"img":{"sheet":"34","x":5,"y":0,"pos":{"_x":-1,"_y":2}}},"5":{"img":{"sheet":"34","x":6,"y":0,"pos":{"_x":0,"_y":1}}},"6":{"img":{"sheet":"34","x":7,"y":0,"pos":{"_x":-1,"_y":2}}},"7":{"img":{"sheet":"34","x":8,"y":0,"pos":{"_x":12,"_y":3}}},"8":{"img":{"sheet":"34","x":9,"y":0,"pos":{"_x":15,"_y":-3}}},"9":{"img":{"sheet":"34","x":0,"y":1,"pos":{"_x":12,"_y":-4}}},"10":{"img":{"sheet":"34","x":1,"y":1,"pos":{"_x":13,"_y":-1}}},"11":{"img":{"sheet":"51","x":0,"y":0,"pos":{"_x":2,"_y":-6}}},"12":{"img":{"sheet":"51","x":1,"y":0,"pos":{"_x":0,"_y":-2}}},"13":{"img":{"sheet":"34","x":4,"y":1,"pos":{"_x":16,"_y":-2}}},"14":{"img":{"sheet":"34","x":5,"y":1,"pos":{"_x":11,"_y":-7}}},"15":{"img":{"sheet":"34","x":6,"y":1,"pos":{"_x":15,"_y":-3}}},"16":{"img":{"sheet":"34","x":7,"y":1,"pos":{"_x":11,"_y":-1}}},"17":{"img":{"sheet":"34","x":8,"y":1,"pos":{"_x":11,"_y":-1}}},"18":{"img":{"sheet":"51","x":11,"y":1,"pos":{"_x":2,"_y":0}}},"19":{"img":{"sheet":"34","x":0,"y":2,"pos":{"_x":11,"_y":-5}}},"20":{"img":{"sheet":"51","x":9,"y":0,"pos":{"_x":4,"_y":7}}},"21":{"img":{"sheet":"34","x":2,"y":2,"pos":{"_x":15,"_y":-5}}},"22":{"img":{"sheet":"34","x":3,"y":2,"pos":{"_x":15,"_y":-5}}},"23":{"img":{"sheet":"51","x":9,"y":1,"pos":{"_x":0,"_y":-1}}},"24":{"img":{"sheet":"51","x":8,"y":1,"pos":{"_x":1,"_y":-1}}},"25":{"img":{"sheet":"34","x":6,"y":2,"pos":{"_x":-2,"_y":-1}}},"26":{"img":{"sheet":"34","x":7,"y":2,"pos":{"_x":16,"_y":-5}}},"27":{"img":{"sheet":"34","x":8,"y":2,"pos":{"_x":12,"_y":-3}}},"28":{"img":{"sheet":"51","x":12,"y":1,"pos":{"_x":2,"_y":-1}}},"29":{"img":{"sheet":"34","x":0,"y":3,"pos":{"_x":18,"_y":-5}}},"30":{"img":{"sheet":"34","x":1,"y":3,"pos":{"_x":14,"_y":-4}}},"31":{"img":{"sheet":"51","x":10,"y":1,"pos":{"_x":-3,"_y":-2}}},"32":{"img":{"sheet":"51","x":2,"y":0,"pos":{"_x":-3,"_y":-4}}},"33":{"img":{"sheet":"34","x":4,"y":3,"pos":{"_x":15,"_y":-2}}},"34":{"img":{"sheet":"34","x":5,"y":3,"pos":{"_x":10,"_y":-3}}},"35":{"img":{"sheet":"34","x":6,"y":3,"pos":{"_x":14,"_y":-1}}},"36":{"img":{"sheet":"34","x":7,"y":3,"pos":{"_x":14,"_y":-1}}},"37":{"img":{"sheet":"51","x":2,"y":1,"pos":{"_x":4,"_y":-4}}},"38":{"img":{"sheet":"34","x":9,"y":3,"pos":{"_x":15,"_y":-4}}},"39":{"img":{"sheet":"34","x":0,"y":4,"pos":{"_x":16,"_y":-2}}},"40":{"img":{"sheet":"34","x":1,"y":4,"pos":{"_x":13,"_y":0}}},"41":{"img":{"sheet":"34","x":2,"y":4,"pos":{"_x":14,"_y":-3}}},"42":{"img":{"sheet":"34","x":3,"y":4,"pos":{"_x":13,"_y":-1}}},"43":{"img":{"sheet":"51","x":7,"y":1,"pos":{"_x":2,"_y":0}}},"44":{"img":{"sheet":"51","x":6,"y":1,"pos":{"_x":1,"_y":1}}},"45":{"img":{"sheet":"34","x":6,"y":4,"pos":{"_x":13,"_y":1}}},"46":{"img":{"sheet":"34","x":7,"y":4,"pos":{"_x":13,"_y":1}}},"47":{"img":{"sheet":"34","x":8,"y":4,"pos":{"_x":14,"_y":-1}}},"48":{"img":{"sheet":"34","x":9,"y":4,"pos":{"_x":13,"_y":-1}}},"49":{"img":{"sheet":"34","x":0,"y":5,"pos":{"_x":13,"_y":-1}}},"50":{"img":{"sheet":"34","x":1,"y":5,"pos":{"_x":13,"_y":-1}}},"51":{"img":{"sheet":"34","x":2,"y":5,"pos":{"_x":13,"_y":-1}}},"52":{"img":{"sheet":"34","x":3,"y":5,"pos":{"_x":13,"_y":-1}}},"53":{"img":{"sheet":"34","x":4,"y":5,"pos":{"_x":13,"_y":-1}}},"54":{"img":{"sheet":"34","x":5,"y":5,"pos":{"_x":13,"_y":-1}}},"55":{"img":{"sheet":"34","x":6,"y":5,"pos":{"_x":13,"_y":-1}}},"56":{"img":{"sheet":"34","x":7,"y":5,"pos":{"_x":13,"_y":-1}}},"57":{"img":{"sheet":"34","x":8,"y":5,"pos":{"_x":13,"_y":-1}}},"58":{"img":{"sheet":"34","x":9,"y":5,"pos":{"_x":13,"_y":-1}}},"59":{"img":{"sheet":"34","x":0,"y":6,"pos":{"_x":13,"_y":0}}},"60":{"img":{"sheet":"34","x":1,"y":6,"pos":{"_x":12,"_y":-1}}},"61":{"img":{"sheet":"34","x":2,"y":6,"pos":{"_x":12,"_y":-1}}},"62":{"img":{"sheet":"34","x":3,"y":6,"pos":{"_x":11,"_y":-1}}},"63":{"img":{"sheet":"34","x":4,"y":6,"pos":{"_x":11,"_y":-1}}},"64":{"img":{"sheet":"34","x":5,"y":6,"pos":{"_x":11,"_y":-1}}},"65":{"img":{"sheet":"34","x":6,"y":6,"pos":{"_x":11,"_y":-1}}},"66":{"img":{"sheet":"34","x":7,"y":6,"pos":{"_x":11,"_y":-1}}},"67":{"img":{"sheet":"34","x":8,"y":6,"pos":{"_x":11,"_y":-1}}},"68":{"img":{"sheet":"34","x":9,"y":6,"pos":{"_x":11,"_y":-1}}},"69":{"img":{"sheet":"34","x":0,"y":7,"pos":{"_x":11,"_y":-1}}},"70":{"img":{"sheet":"34","x":1,"y":7,"pos":{"_x":14,"_y":-1}}},"71":{"img":{"sheet":"34","x":2,"y":7,"pos":{"_x":14,"_y":-2}}},"72":{"img":{"sheet":"34","x":3,"y":7,"pos":{"_x":14,"_y":-2}}},"73":{"img":{"sheet":"34","x":4,"y":7,"pos":{"_x":14,"_y":-2}}},"74":{"img":{"sheet":"34","x":5,"y":7,"pos":{"_x":14,"_y":0}}},"75":{"img":{"sheet":"34","x":6,"y":7,"pos":{"_x":11,"_y":0}}},"76":{"img":{"sheet":"34","x":7,"y":7,"pos":{"_x":11,"_y":0}}},"77":{"img":{"sheet":"34","x":8,"y":7,"pos":{"_x":10,"_y":0}}},"78":{"img":{"sheet":"34","x":9,"y":7,"pos":{"_x":11,"_y":0}}},"79":{"img":{"sheet":"34","x":0,"y":8,"pos":{"_x":9,"_y":0}}},"80":{"img":{"sheet":"34","x":1,"y":8,"pos":{"_x":11,"_y":0}}},"81":{"img":{"sheet":"34","x":2,"y":8,"pos":{"_x":11,"_y":2}}},"82":{"img":{"sheet":"34","x":3,"y":8,"pos":{"_x":11,"_y":2}}},"83":{"img":{"sheet":"34","x":4,"y":8,"pos":{"_x":13,"_y":1}}},"84":{"img":{"sheet":"34","x":5,"y":8,"pos":{"_x":-1,"_y":2}}},"85":{"img":{"sheet":"34","x":6,"y":8,"pos":{"_x":11,"_y":-4}}},"86":{"img":{"sheet":"34","x":7,"y":8,"pos":{"_x":9,"_y":0}}},"87":{"img":{"sheet":"34","x":8,"y":8,"pos":{"_x":10,"_y":4}}},"88":{"img":{"sheet":"34","x":9,"y":8,"pos":{"_x":-4,"_y":1}}},"89":{"img":{"sheet":"34","x":0,"y":9,"pos":{"_x":8,"_y":-1}}},"90":{"img":{"sheet":"34","x":1,"y":9,"pos":{"_x":13,"_y":-2}}},"91":{"img":{"sheet":"34","x":2,"y":9,"pos":{"_x":7,"_y":-2}}},"92":{"img":{"sheet":"34","x":3,"y":9,"pos":{"_x":9,"_y":-2}}},"93":{"img":{"sheet":"34","x":4,"y":9,"pos":{"_x":18,"_y":2}}},"94":{"img":{"sheet":"51","x":7,"y":0,"pos":{"_x":0,"_y":-2}}},"95":{"img":{"sheet":"51","x":8,"y":0,"pos":{"_x":-3,"_y":-4}}},"96":{"img":{"sheet":"34","x":7,"y":9,"pos":{"_x":13,"_y":-5}}},"97":{"img":{"sheet":"34","x":8,"y":9,"pos":{"_x":9,"_y":-7}}},"98":{"img":{"sheet":"34","x":9,"y":9,"pos":{"_x":13,"_y":-4}}},"99":{"img":{"sheet":"51","x":13,"y":0,"pos":{"_x":3,"_y":-3}}},"100":{"img":{"sheet":"51","x":12,"y":0,"pos":{"_x":3,"_y":-4}}},"101":{"img":{"sheet":"34","x":2,"y":10,"pos":{"_x":-4,"_y":-1}}},"102":{"img":{"sheet":"34","x":3,"y":10,"pos":{"_x":13,"_y":-2}}},"103":{"img":{"sheet":"34","x":4,"y":10,"pos":{"_x":13,"_y":-3}}},"104":{"img":{"sheet":"34","x":5,"y":10,"pos":{"_x":13,"_y":-1}}},"105":{"img":{"sheet":"34","x":6,"y":10,"pos":{"_x":13,"_y":-3}}},"106":{"img":{"sheet":"51","x":1,"y":1,"pos":{"_x":3,"_y":-1}}},"107":{"img":{"sheet":"51","x":0,"y":1,"pos":{"_x":-3,"_y":-5}}},"108":{"img":{"sheet":"34","x":9,"y":10,"pos":{"_x":14,"_y":-2}}},"109":{"img":{"sheet":"51","x":4,"y":0,"pos":{"_x":-3,"_y":-4}}},"110":{"img":{"sheet":"34","x":1,"y":11,"pos":{"_x":13,"_y":-1}}},"111":{"img":{"sheet":"34","x":2,"y":11,"pos":{"_x":15,"_y":-4}}},"112":{"img":{"sheet":"51","x":11,"y":0,"pos":{"_x":3,"_y":-1}}},"113":{"img":{"sheet":"51","x":10,"y":0,"pos":{"_x":2,"_y":-3}}},"114":{"img":{"sheet":"34","x":5,"y":11,"pos":{"_x":0,"_y":0}}},"115":{"img":{"sheet":"34","x":6,"y":11,"pos":{"_x":13,"_y":-1}}},"116":{"img":{"sheet":"34","x":7,"y":11,"pos":{"_x":12,"_y":0}}},"117":{"img":{"sheet":"34","x":8,"y":11,"pos":{"_x":10,"_y":-2}}},"118":{"img":{"sheet":"34","x":9,"y":11,"pos":{"_x":10,"_y":-2}}},"119":{"img":{"sheet":"34","x":0,"y":12,"pos":{"_x":12,"_y":0}}},"120":{"img":{"sheet":"34","x":1,"y":12,"pos":{"_x":12,"_y":0}}},"121":{"img":{"sheet":"34","x":2,"y":12,"pos":{"_x":13,"_y":0}}},"122":{"img":{"sheet":"51","x":4,"y":1,"pos":{"_x":0,"_y":0}}},"123":{"img":{"sheet":"51","x":5,"y":1,"pos":{"_x":4,"_y":1}}},"124":{"img":{"sheet":"34","x":5,"y":12,"pos":{"_x":13,"_y":-1}}},"125":{"img":{"sheet":"34","x":6,"y":12,"pos":{"_x":13,"_y":-1}}},"126":{"img":{"sheet":"34","x":7,"y":12,"pos":{"_x":13,"_y":-1}}},"127":{"img":{"sheet":"34","x":8,"y":12,"pos":{"_x":13,"_y":-1}}},"128":{"img":{"sheet":"34","x":9,"y":12,"pos":{"_x":13,"_y":-1}}},"129":{"img":{"sheet":"34","x":0,"y":13,"pos":{"_x":8,"_y":3}}},"130":{"img":{"sheet":"34","x":1,"y":13,"pos":{"_x":11,"_y":0}}},"131":{"img":{"sheet":"34","x":2,"y":13,"pos":{"_x":13,"_y":-1}}},"132":{"img":{"sheet":"34","x":3,"y":13,"pos":{"_x":12,"_y":0}}},"133":{"img":{"sheet":"34","x":4,"y":13,"pos":{"_x":13,"_y":-1}}},"134":{"img":{"sheet":"34","x":5,"y":13,"pos":{"_x":9,"_y":5}}},"135":{"img":{"sheet":"34","x":6,"y":13,"pos":{"_x":9,"_y":5}}},"136":{"img":{"sheet":"51","x":3,"y":1,"pos":{"_x":3,"_y":-1}}},"137":{"img":{"sheet":"51","x":6,"y":0,"pos":{"_x":2,"_y":-3}}},"138":{"img":{"sheet":"34","x":9,"y":13,"pos":{"_x":4,"_y":0}}},"139":{"img":{"sheet":"34","x":0,"y":14,"pos":{"_x":3,"_y":0}}},"140":{"img":{"sheet":"34","x":1,"y":14,"pos":{"_x":11,"_y":1}}},"141":{"img":{"sheet":"34","x":2,"y":14,"pos":{"_x":11,"_y":1}}},"142":{"img":{"sheet":"34","x":3,"y":14,"pos":{"_x":3,"_y":-1}}},"143":{"img":{"sheet":"34","x":4,"y":14,"pos":{"_x":-1,"_y":1}}},"144":{"img":{"sheet":"34","x":5,"y":14,"pos":{"_x":0,"_y":1}}},"145":{"img":{"sheet":"34","x":6,"y":14,"pos":{"_x":11,"_y":2}}},"146":{"img":{"sheet":"34","x":7,"y":14,"pos":{"_x":11,"_y":2}}},"147":{"img":{"sheet":"34","x":8,"y":14,"pos":{"_x":8,"_y":3}}},"148":{"img":{"sheet":"34","x":9,"y":14,"pos":{"_x":8,"_y":4}}},"149":{"img":{"sheet":"34","x":0,"y":15,"pos":{"_x":7,"_y":3}}},"150":{"img":{"sheet":"34","x":1,"y":15,"pos":{"_x":11,"_y":-1}}},"151":{"img":{"sheet":"34","x":2,"y":15,"pos":{"_x":13,"_y":-1}}},"152":{"img":{"sheet":"34","x":3,"y":15,"pos":{"_x":13,"_y":-1}}},"153":{"img":{"sheet":"34","x":4,"y":15,"pos":{"_x":8,"_y":-2}}},"154":{"img":{"sheet":"34","x":5,"y":15,"pos":{"_x":10,"_y":-3}}},"155":{"img":{"sheet":"34","x":6,"y":15,"pos":{"_x":11,"_y":-1}}},"156":{"img":{"sheet":"34","x":7,"y":15,"pos":{"_x":12,"_y":-2}}},"157":{"img":{"sheet":"51","x":3,"y":0,"pos":{"_x":-2,"_y":-3}}},"158":{"img":{"sheet":"34","x":9,"y":15,"pos":{"_x":9,"_y":4}}},"159":{"img":{"sheet":"34","x":0,"y":16,"pos":{"_x":10,"_y":3}}},"160":{"img":{"sheet":"34","x":1,"y":16,"pos":{"_x":7,"_y":3}}},"161":{"img":{"sheet":"34","x":6,"y":16,"pos":{"_x":5,"_y":8}}},"162":{"img":{"sheet":"34","x":7,"y":16,"pos":{"_x":6,"_y":7}}},"163":{"img":{"sheet":"34","x":8,"y":16,"pos":{"_x":7,"_y":7}}},"164":{"img":{"sheet":"34","x":9,"y":16,"pos":{"_x":8,"_y":4}}},"165":{"img":{"sheet":"34","x":2,"y":16,"pos":{"_x":3,"_y":-1}}},"166":{"img":{"sheet":"34","x":3,"y":16,"pos":{"_x":4,"_y":-1}}},"167":{"img":{"sheet":"34","x":4,"y":16,"pos":{"_x":5,"_y":-1}}},"168":{"img":{"sheet":"34","x":5,"y":16,"pos":{"_x":6,"_y":-1}}},"169":{"img":{"sheet":"34","x":0,"y":17,"pos":{"_x":5,"_y":8}}},"170":{"img":{"sheet":"34","x":1,"y":17,"pos":{"_x":5,"_y":6}}},"171":{"img":{"sheet":"34","x":2,"y":17,"pos":{"_x":6,"_y":6}}},"172":{"img":{"sheet":"34","x":3,"y":17,"pos":{"_x":7,"_y":3}}},"173":{"img":{"sheet":"34","x":4,"y":17,"pos":{"_x":12,"_y":-2}}},"174":{"img":{"sheet":"34","x":5,"y":17,"pos":{"_x":7,"_y":6}}},"175":{"img":{"sheet":"34","x":6,"y":17,"pos":{"_x":8,"_y":9}}},"176":{"img":{"sheet":"34","x":7,"y":17,"pos":{"_x":6,"_y":6}}},"177":{"img":{"sheet":"34","x":8,"y":17,"pos":{"_x":6,"_y":6}}},"178":{"img":{"sheet":"34","x":9,"y":17,"pos":{"_x":3,"_y":0}}},"179":{"img":{"sheet":"51","x":13,"y":1,"pos":{"_x":4,"_y":-1}}},"180":{"img":{"sheet":"51","x":13,"y":1,"pos":{"_x":4,"_y":-1}}},"181":{"img":{"sheet":"51","x":0,"y":2,"pos":{"_x":4,"_y":-1}}},"182":{"img":{"sheet":"51","x":1,"y":2,"pos":{"_x":4,"_y":-1}}},"183":{"img":{"sheet":"51","x":2,"y":2,"pos":{"_x":4,"_y":-1}}},"184":{"img":{"sheet":"51","x":3,"y":2,"pos":{"_x":4,"_y":-1}}},"185":{"img":{"sheet":"51","x":4,"y":2,"pos":{"_x":4,"_y":-1}}},"186":{"img":{"sheet":"51","x":5,"y":2,"pos":{"_x":4,"_y":-1}}},"187":{"img":{"sheet":"51","x":6,"y":2,"pos":{"_x":3,"_y":-1}}},"188":{"img":{"sheet":"51","x":7,"y":2,"pos":{"_x":4,"_y":-1}}},"189":{"img":{"sheet":"51","x":8,"y":2,"pos":{"_x":4,"_y":-1}}},"190":{"img":{"sheet":"51","x":9,"y":2,"pos":{"_x":4,"_y":-1}}},"191":{"img":{"sheet":"34","x":8,"y":13,"pos":{"_x":6,"_y":7}}},"192":{"img":{"sheet":"34","x":0,"y":18,"pos":{"_x":7,"_y":0}}},"193":{"img":{"sheet":"34","x":1,"y":18,"pos":{"_x":3,"_y":0}}}}};
// window.IMAGE_SHEET = {};
// for (var i in obj.sheets) {
//   var ii = parseInt(i)+1;
//   window.IMAGE_SHEET[ii] = obj.sheets[i];
// }

