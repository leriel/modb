var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var ItemGraphic = require('./ItemGraphic.jsx');
var util = require('../util.js');
var numeral = require('numeral');
var PetStore = require('../stores/PetStore.js');

var colKeys = {
  LEVEL: 'Level',
  GRAPHIC: ' ',
  NAME: 'Item',
  SKILL: 'Skill',
  PRICE: 'Price',
  POWER: 'Power',
  AIM: 'Aim',
  ARMOR: 'Armor',
  MAGIC: 'Magic',
  SPEED: 'Speed',
  MAGIC_COOLDOWN: '- % cooldown',
  ARCHERY: 'Archery',
  ARCHERY_BOOST: '% Archery boost',
  SLOTS: 'Slots',
  HEALING: 'Healing',
};

var itemCats = {
  ARMOR: 0,
  FOOD: 1,
  JEWELRY: 2,
  MATERIAL: 3,
  TOOL: 4,
  WEAPON: 5,
  SPELL: 6,
  PET: 7,
  HOUSE: 8,
  ARCHERY: 9,
}

function SearchItemRow(item, cat) {
  var params = item.params;
  var pet;
  var result =  {};
  result[colKeys.LEVEL] = util.getItemLevel(item);
  result[colKeys.GRAPHIC] = <ItemGraphic item={item} />;
  result[colKeys.NAME] =
    <Link to="item" params={{itemId: item.id}}>{item.n}</Link>;
  result[colKeys.SKILL] = util.getItemSkill(item);
  result[colKeys.PRICE] = util.valOrDash(numeral(params.price).format('0,0'));
  result[colKeys.POWER] = util.valOrDash(params.power);
  result[colKeys.AIM] = util.valOrDash(params.aim);
  result[colKeys.ARMOR] = util.valOrDash(params.armor);
  result[colKeys.MAGIC] = util.valOrDash(params.magic);
  result[colKeys.SPEED] = util.valOrDash(params.speed);
  result[colKeys.MAGIC_COOLDOWN] = util.valOrDash((params.cooldown * 100)|0);
  result[colKeys.ARCHERY] = util.valOrDash(params.archery);
  result[colKeys.ARCHERY_BOOST] =
    util.valOrDash((params.archery_damage_boost * 100) | 0);

  if (cat === itemCats.PET) {
    pet = PetStore.getByItemId(params.pet);
    if (pet && pet.params) {
      result[colKeys.SLOTS] = pet.params.inventory_slots;
    }
    delete result[colKeys.MAGIC_COOLDOWN];
    delete result[colKeys.ARCHERY_BOOST];
  }
  if (cat === itemCats.SPELL) {
    delete result[colKeys.POWER];
    delete result[colKeys.AIM];
    delete result[colKeys.ARMOR];
    delete result[colKeys.SPEED];
    delete result[colKeys.MAGIC_COOLDOWN];
    delete result[colKeys.ARCHERY];
    delete result[colKeys.ARCHERY_BOOST];
  }
  if (cat === itemCats.FOOD) {
    delete result[colKeys.POWER];
    delete result[colKeys.AIM];
    delete result[colKeys.ARMOR];
    delete result[colKeys.MAGIC];
    delete result[colKeys.SPEED];
    delete result[colKeys.MAGIC_COOLDOWN];
    delete result[colKeys.ARCHERY];
    delete result[colKeys.ARCHERY_BOOST];
    result[colKeys.HEALING] = params.heal;
  }
  if (cat === itemCats.MATERIAL) {
    delete result[colKeys.POWER];
    delete result[colKeys.AIM];
    delete result[colKeys.ARMOR];
    delete result[colKeys.MAGIC];
    delete result[colKeys.SPEED];
    delete result[colKeys.MAGIC_COOLDOWN];
    delete result[colKeys.ARCHERY];
    delete result[colKeys.ARCHERY_BOOST];
  }
  if (cat === itemCats.JEWELRY) {
    delete result[colKeys.SPEED];
    delete result[colKeys.MAGIC_COOLDOWN];
    delete result[colKeys.ARCHERY_BOOST];
  }
  if (cat === itemCats.TOOL) {
    delete result[colKeys.POWER];
    delete result[colKeys.MAGIC];
    delete result[colKeys.SPEED];
    delete result[colKeys.ARCHERY];
    delete result[colKeys.ARCHERY_BOOST];
  }
  if (cat === itemCats.ARCHERY) {
    delete result[colKeys.POWER];
    delete result[colKeys.AIM];
    delete result[colKeys.MAGIC];
    delete result[colKeys.MAGIC_COOLDOWN];
  }
  return result;
}

module.exports = SearchItemRow;
