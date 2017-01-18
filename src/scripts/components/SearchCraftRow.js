var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var ItemStore = require('../stores/ItemStore.js');
var ForgeStore = require('../stores/ForgeStore.js');
var ItemGraphic = require('./ItemGraphic.jsx');
var util = require('../util.js');
var numeral = require('numeral');

var SearchCraftRow = function(craft) {

  var item = ItemStore.getItem(craft.id);
  var url = 'item/' + craft.id + '/craft';
  var xp = ForgeStore.getXpForFormula(craft);
  return {
    ' ': <ItemGraphic item={item} />,
    Item: <Link to="item-craft" params={{itemId:item.id}}>{item.n}</Link>,
    Skill: craft.skill,
    'Min chance (%)': (craft.min_chance || 1) * 100,
    'Max chance (%)': (craft.max_chance || 1) * 100,
    XP: xp,
    'Required level': craft.level,
  }
}

module.exports = SearchCraftRow;
