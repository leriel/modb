var React = require('react');
var Router = require('react-router'); 
var Link = Router.Link;
var ItemGraphic = require('./ItemGraphic.jsx')
var numeral = require('numeral');
var PetStore = require('../stores/PetStore.js')
  , ItemStore = require('../stores/ItemStore.js');

var PetEats = React.createClass({
  // mixins: [ Router.State ],
  render: function(){
    var eats = this.props.pet.params.eats;
    var eat = []
    for(var id in eats) {
      var eatsItem = ItemStore.getItem(id);
      eat.push(<td className="c"><ItemGraphic item={eatsItem}/><br />{numeral(eats[id]*100).format('0')+'%'}<br /><small>{eatsItem.n}</small></td>)
    }

    return (
      <table className="table"><tr>{eat}</tr></table>
    );
  }
});

module.exports = PetEats;
