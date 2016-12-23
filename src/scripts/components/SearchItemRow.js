var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var ItemGraphic = require('./ItemGraphic.jsx');
var util = require('../util.js');
var numeral = require('numeral');

var SearchItemRow = function(item) {
  return {
    Level: util.getItemLevel(item),
    ' ': <ItemGraphic item={item} />,
    Item: <Link to="item" params={{itemId:item.id}}>{item.n}</Link>,
    Skill: util.getItemSkill(item),
    Price: util.valOrDash(numeral(item.params.price).format('0,0')),
    Power: util.valOrDash(item.params.power),
    Aim: util.valOrDash(item.params.aim),
    Armor: util.valOrDash(item.params.armor),
    Magic: util.valOrDash(item.params.magic),
    Speed: util.valOrDash(item.params.speed),
    '- % cooldown': util.valOrDash((item.params.cooldown * 100)|0),
    Archery: util.valOrDash(item.params.archery),
    '% Archery boost': util.valOrDash((item.params.archery_damage_boost * 100) | 0),
  }
}

module.exports = SearchItemRow;
