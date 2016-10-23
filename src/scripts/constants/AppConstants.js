var React = require('react');

var keyMirror = require('react/lib/keyMirror');

var obj = {
  ActionTypes: keyMirror({
    APP_INITIALIZE: null,
    APP_RESET: null,
    SWITCH_PAGE: null,

    SEARCH: null,
    SET_SEARCH_CAT1: null,
    SET_SEARCH_CAT2: null,
    SET_SEARCH_SUB_CAT: null,
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
  maps:["Dorpat", "Dungeon", "Narwa", "Whiland", "Reval", "Rakblood", "Blood River", "Hell", "Clouds", "Heaven", "Cesis", "Walco", "Tutorial Island", "Pernau", "Fellin", "Dragon's Lair", "No Man's Land", "Ancient Dungeon", "Lost Woods", "Minigames", "Broceliande Forest", "Devil's Triangle", "Cathedral", "Illusion Guild"],
  itemCats:["Armor","Food","Jewelry","Material","Tool","Weapon","Spell","Pet","House"],
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
  itemParamsKeyMap: {
    min_defense: "Defense Required",
    min_strength: "Strength Required",
    min_magic: "Magic Required",
    min_health: "Health Required",
    armor: "Armor",
    aim: "Aim",
    power: "Power",
    magic: "Magic",
    speed: "Speed",
    min_cooking: "Cooking",
    min_alchemy: "Alchemy",
    min_jewelry: "Jewelry",
    min_forging: "Forging",
    min_carpentry: "Carpentry",
    min_farming: "Farming",
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
        "u": "https://rpgssl.r.worldssl.net/sheet/dgiso32_anvil.gif?f61f376221c3fe1dea3f4bb8c39207f2rpg.mo.ee"
    },
    {
        "w": 32,
        "h": 32,
        "u": "https://rpgssl.r.worldssl.net/sheet/dg_classm32.gif?22b176a3c34bfbdd303ab24b0675b49crpg.mo.ee"
    },
    {
        "w": 54,
        "h": 34,
        "u": "https://rpgssl.r.worldssl.net/sheet/ground.gif?30b533254c058f47580c3124c2412d85rpg.mo.ee"
    },
    {
        "w": 32,
        "h": 32,
        "u": "https://rpgssl.r.worldssl.net/sheet/townactions.gif?d2cabb3b664c5c76559f5b7b99e1dcbarpg.mo.ee"
    },
    {
        "w": 854,
        "h": 24,
        "u": "https://rpgssl.r.worldssl.net/gui.png?b5e9e0f058021a7bc8208462effe8004rpg.mo.ee"
    },
    {
        "w": 32,
        "h": 32,
        "u": "https://rpgssl.r.worldssl.net/sheet/dg_monster132.gif?8c2593ddf9c17b0d502c353947461deerpg.mo.ee"
    },
    {
        "w": 32,
        "h": 32,
        "u": "https://rpgssl.r.worldssl.net/sheet/dgweapon32.gif?81e225ef3de2f587fa7ab3896d21c506rpg.mo.ee"
    },
    {
        "w": 32,
        "h": 32,
        "u": "https://rpgssl.r.worldssl.net/sheet/dg_armor32.gif?22eb32e7e8252655b91e205a3d7e0d61rpg.mo.ee"
    },
    {
        "w": 32,
        "h": 32,
        "u": "https://rpgssl.r.worldssl.net/sheet/dg_food32.gif?80cfd7aaf17404a04e6ca57872eeeba1rpg.mo.ee"
    },
    {
        "w": 32,
        "h": 32,
        "u": "https://rpgssl.r.worldssl.net/sheet/tools.gif?41fc47a2d5b8f371902cab50f06279fdrpg.mo.ee"
    },
    {
        "w": 32,
        "h": 32,
        "u": "https://rpgssl.r.worldssl.net/sheet/fish_new32.gif?7cc807d2c52911c282d6f78a8dad2827rpg.mo.ee"
    },
    {
        "w": 32,
        "h": 32,
        "u": "https://rpgssl.r.worldssl.net/sheet/dgmisc32.gif?62fa3014a3fbfbe17b4c4d6e39c378f8rpg.mo.ee"
    },
    {
        "w": 32,
        "h": 32,
        "u": "https://rpgssl.r.worldssl.net/sheet/dg_undead32.gif?5aa0bf60bd60328e58d7cbfa3b1a25bdrpg.mo.ee"
    },
    {
        "w": 32,
        "h": 32,
        "u": "https://rpgssl.r.worldssl.net/sheet/dg_jewls32.gif?f19d4e9fc49bbed856246408f36d0d62rpg.mo.ee"
    },
    {
        "w": 54,
        "h": 64,
        "u": "https://rpgssl.r.worldssl.net/sheet/big_stuff.gif?5e2a64a066d8d049cfa797ffd403e65frpg.mo.ee"
    },
    {
        "w": 32,
        "h": 32,
        "u": "https://rpgssl.r.worldssl.net/sheet/dg_dragon32.gif?3126ec8f0a0a4d819c8fd5868c5568b6rpg.mo.ee"
    },
    {
        "w": 32,
        "h": 32,
        "u": "https://rpgssl.r.worldssl.net/sheet/dg_monster432.gif?dae4547bdb8044ffcf08a91491e25017rpg.mo.ee"
    },
    {
        "w": 32,
        "h": 32,
        "u": "https://rpgssl.r.worldssl.net/sheet/dg_monster232.gif?d99eb5506b0405485c87846cc48922aerpg.mo.ee"
    },
    {
        "w": 32,
        "h": 32,
        "u": "https://rpgssl.r.worldssl.net/sheet/dg_monster732.gif?1d83cd94fa15a0b7124db3c88dfc01f5rpg.mo.ee"
    },
    {
        "w": 32,
        "h": 32,
        "u": "https://rpgssl.r.worldssl.net/sheet/dg_monster632.gif?e0bb22f6719da9a189e487a48a20ef56rpg.mo.ee"
    },
    {
        "w": 32,
        "h": 32,
        "u": "https://rpgssl.r.worldssl.net/sheet/dg_uniques32.gif?ede6af17cab027c12cbe515147d7485drpg.mo.ee"
    },
    {
        "w": 32,
        "h": 32,
        "u": "https://rpgssl.r.worldssl.net/sheet/dg_humans32.gif?26e7ecdd21a060311edc422cc0d05617rpg.mo.ee"
    },
    {
        "w": 32,
        "h": 32,
        "u": "https://rpgssl.r.worldssl.net/sheet/alchemyitems2.gif?48378a45b80c4b2ff4adf0a5ad9dbaa0rpg.mo.ee"
    },
    {
        "w": 32,
        "h": 32,
        "u": "https://rpgssl.r.worldssl.net/sheet/dg_monster532.gif?fee48d8a692498521f20c2b8051cfe91rpg.mo.ee"
    },
    {
        "w": 32,
        "h": 32,
        "u": "https://rpgssl.r.worldssl.net/sheet/dg_monster332.gif?7f655fead6c6683c6b6c07b8f8ad1e35rpg.mo.ee"
    },
    {
        "w": 32,
        "h": 32,
        "u": "https://rpgssl.r.worldssl.net/sheet/wearable/heads.gif?a4e0dd62ca9e318430c8fdb43e1ee2f4rpg.mo.ee"
    },
    {
        "w": 32,
        "h": 32,
        "u": "https://rpgssl.r.worldssl.net/sheet/wearable/facial_hair.gif?1b389be5a4f135a351c31be20ce01b98rpg.mo.ee"
    },
    {
        "w": 32,
        "h": 32,
        "u": "https://rpgssl.r.worldssl.net/sheet/wearable/bodys.gif?212421cce41f28207091192c746badderpg.mo.ee"
    },
    {
        "w": 32,
        "h": 32,
        "u": "https://rpgssl.r.worldssl.net/sheet/wearable/pants.gif?bfcf4cb2a8f106778f8424f3b2f88f38rpg.mo.ee"
    },
    {
        "w": 64,
        "h": 64,
        "u": "https://rpgssl.r.worldssl.net/sheet/wearable/capes.gif?98ba2083cddca9ef8d80df9068fbddc7rpg.mo.ee"
    },
    {
        "w": 32,
        "h": 32,
        "u": "https://rpgssl.r.worldssl.net/sheet/wearable/left_hands.gif?ba1889643015f63546b24cfcf18cc4f8rpg.mo.ee"
    },
    {
        "w": 32,
        "h": 32,
        "u": "https://rpgssl.r.worldssl.net/sheet/wearable/right_hands.gif?793475e1b2132ad3a4fc3f45097137dbrpg.mo.ee"
    },
    {
        "w": 32,
        "h": 32,
        "u": "https://rpgssl.r.worldssl.net/sheet/wearable/shields.gif?f8146638b4130303e4a2aca3b604ece3rpg.mo.ee"
    },
    {
        "w": 32,
        "h": 32,
        "u": "https://rpgssl.r.worldssl.net/sheet/wearable/weapons.gif?b21dd88639ff3e4c00f4ded5b8a0af62rpg.mo.ee"
    },
    {
        "w": 32,
        "h": 32,
        "u": "https://rpgssl.r.worldssl.net/sheet/wearable/helmets.gif?fcbaf2d63d35a98681e6de5c75aef777rpg.mo.ee"
    },
    {
        "w": 32,
        "h": 32,
        "u": "https://rpgssl.r.worldssl.net/sheet/wearable/boots.gif?da83e063b1e0064b15457c7004138825rpg.mo.ee"
    },
    {
        "w": 32,
        "h": 32,
        "u": "https://rpgssl.r.worldssl.net/sheet/magic.gif?3c5686cd779f2ac3d903f9d4b726a0e1rpg.mo.ee"
    },
    {
        "w": 32,
        "h": 32,
        "u": "https://rpgssl.r.worldssl.net/sheet/mspell.gif?6ec440cac5d1a9b3f338eb210ebc1175rpg.mo.ee"
    },
    {
        "w": 32,
        "h": 32,
        "u": "https://rpgssl.r.worldssl.net/sheet/sicos.gif?a296010c1cc60f92dd5cc97c1c1aed6arpg.mo.ee"
    },
    {
        "w": 32,
        "h": 32,
        "u": "https://rpgssl.r.worldssl.net/sheet/mweapons.gif?c474d3b0973ca7c476648c713792b3bbrpg.mo.ee"
    },
    {
        "w": 32,
        "h": 32,
        "u": "https://rpgssl.r.worldssl.net/sheet/animals.gif?c6fe6b90dea1ae0d769db4a17a98d6ffrpg.mo.ee"
    },
    {
        "w": 54,
        "h": 49,
        "u": "https://rpgssl.r.worldssl.net/sheet/newworld2.gif?0d1827c3f861deb381b2ce18b5094204rpg.mo.ee"
    },
    {
        "w": 54,
        "h": 49,
        "u": "https://rpgssl.r.worldssl.net/sheet/ground_tops.gif?a55dadc6afeb2aa6f7f675c9ce65bd94rpg.mo.ee"
    },
    {
        "w": 64,
        "h": 64,
        "u": "https://rpgssl.r.worldssl.net/sheet/boss.gif?94b1edaca4001bb0e422eb91566c406brpg.mo.ee"
    },
    {
        "w": 32,
        "h": 32,
        "u": "https://rpgssl.r.worldssl.net/sheet/pets.gif?ce81f547b81fccfc0f93525b0cb36bd5rpg.mo.ee"
    },
    {
        "w": 54,
        "h": 49,
        "u": "https://rpgssl.r.worldssl.net/sheet/pots_crates.gif?3d99637d2738e3ae23c04703801d87carpg.mo.ee"
    },
    {
        "w": 576,
        "h": 335,
        "u": "https://rpgssl.r.worldssl.net/sheet/big_pyramid.gif?5a98089c5906eb4d729986654a44bdd5rpg.mo.ee"
    },
    {
        "w": 54,
        "h": 49,
        "u": "https://rpgssl.r.worldssl.net/sheet/house.gif?9fa66ff575efc5bcff397c52fb60e241rpg.mo.ee"
    },
    {
        "w": 32,
        "h": 32,
        "u": "https://rpgssl.r.worldssl.net/sheet/house_inv.gif?86583c8cd7352bf2a8abce17940ea10crpg.mo.ee"
    },
    {
        "w": 54,
        "h": 49,
        "u": "https://rpgssl.r.worldssl.net/sheet/farming_products.gif?200ae96091b352fc5ee544d89e7f9f59rpg.mo.ee"
    },
    {
        "w": 46,
        "h": 46,
        "u": "https://rpgssl.r.worldssl.net/sheet/wearable/weapons2h.gif?db6882ed3b97af768e9810cd0270dc3erpg.mo.ee"
    },
    {
        "w": 64,
        "h": 64,
        "u": "https://rpgssl.r.worldssl.net/sheet/halloween.gif?f0cb8b948f34abd9e2b99baac244c6d3rpg.mo.ee"
    },
    {
        "w": 54,
        "h": 34,
        "u": "https://rpgssl.r.worldssl.net/sheet/ground2.gif?551fe5b46e91f4c119e2b5b22b40bd96rpg.mo.ee"
    },
    {
        "w": 596,
        "h": 544,
        "u": "https://rpgssl.r.worldssl.net/sheet/cathedral.gif?262ea93f911e987b4752325368d46b0crpg.mo.ee"
    },
    {
        "w": 54,
        "h": 49,
        "u": "https://rpgssl.r.worldssl.net/sheet/newworld3.gif?6b5eb2a2d7145e12db75f15c1d0e5a21rpg.mo.ee"
    },
    {
        "w": 64,
        "h": 64,
        "u": "https://rpgssl.r.worldssl.net/sheet/boss2.gif?5fb8bc3d6d84060adf00782d317167carpg.mo.ee"
    },
    {
        "w": 64,
        "h": 64,
        "u": "https://rpgssl.r.worldssl.net/sheet/boss3.gif?0fc5e8d38832e198acfbe3708d6388ebrpg.mo.ee"
    },
    {
        "w": 64,
        "h": 64,
        "u": "https://rpgssl.r.worldssl.net/sheet/boss4.gif?367ad629bd58725acaf98734fc8d233drpg.mo.ee"
    },
    {
        "w": 32,
        "h": 32,
        "u": "https://rpgssl.r.worldssl.net/sheet/dgmisc2.gif?074856fb20739a92e4b53d588dfc5872rpg.mo.ee"
    },
    {
        "w": 32,
        "h": 32,
        "u": "https://rpgssl.r.worldssl.net/sheet/dgmisc3.gif?752a74d31aef5ed26c5245ea7222928drpg.mo.ee"
    },
    {
        "w": 32,
        "h": 32,
        "u": "https://rpgssl.r.worldssl.net/sheet/dgmisc4.gif?0175772c4218e5936e1d28229e3e53f2rpg.mo.ee"
    },
    {
        "w": 32,
        "h": 32,
        "u": "https://rpgssl.r.worldssl.net/sheet/dgmisc5.gif?d30f1b761d24627899fe15ae1b1fbed7rpg.mo.ee"
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

