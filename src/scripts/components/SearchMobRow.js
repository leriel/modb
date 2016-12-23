var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var MobGraphic = require('./MobGraphic.jsx');
var util = require('../util.js');
var numeral = require('numeral');

var SearchMobRow = function(mob) {
  var locs = [];
  var l;
  for (l in mob.locations) {
    locs.push(l + ' (' + mob.locations[l] + ')');
  }

  return {
    ' ': <MobGraphic mob={mob} />,
    Mob: <Link to="mob" params={{mobId: mob.id}}>{mob.n}</Link>,
    Level: util.calcLevel(mob),
    HP: mob.params.health,
    Def: mob.temp.total_defense,
    Acc: mob.temp.total_accuracy,
    Str: mob.temp.total_strength,
    'Magic Block': mob.temp.magic_block|0,
    'Melee Block': mob.temp.melee_block|0,
    'Map(s)': <span dangerouslySetInnerHTML={{__html:locs.join('<br />')}}/>,
  }
}

module.exports = SearchMobRow;
