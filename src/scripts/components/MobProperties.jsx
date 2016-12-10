var React = require('react');
var Router = require('react-router'); 
var Link = Router.Link;
var ItemProp = require('./ItemProperty.jsx');
var PetStore = require('../stores/PetStore.js');
var util=require('../util.js');

var MobProperties = React.createClass({
  render: function() {
    var mob = this.props.mob;
    return (
      <div className="panel panel-default">
        <div className="panel-heading"><h3 className="panel-title">Mob Stats</h3></div>
        <div className="panel-body">
          <ul className="list-group">
            <ItemProp key="itemPropLevel" name="Level" value={util.calcLevel(mob)} />
            <ItemProp key="itemPropHP" name="HP" value={mob.params.health} />
            <ItemProp key="itemPropDEF" name="Defense" value={mob.temp.total_defense} />
            <ItemProp key="itemPropACC" name="Accuracy" value={mob.temp.total_accuracy} />
            <ItemProp key="itemPropSTR" name="Strength" value={mob.temp.total_strength} />
            <ItemProp key="itemPropAgro" name="Aggressive" value={mob.params.aggressive ? 'Yes' : 'No'} badgecl={mob.params.aggressive? 'badge text-danger' : 'badge text-success'} />
            <ItemProp key="itemPropMagBlock" name="Magic Block" value={mob.temp.magic_block|0} badgecl="badge text-warning" />
            <ItemProp key="itemPropMeleeBlock" name="Melee Block" value={mob.temp.melee_block|0} badgecl="badge text-warning" />
          </ul>
        </div>
      </div>
    );
  }
});

module.exports = MobProperties;
