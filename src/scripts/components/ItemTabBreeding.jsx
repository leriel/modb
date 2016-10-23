var React = require('react');
var Router = require('react-router'); 
var Link = Router.Link;
var numeral = require('numeral');
var TabbedArea = require('react-bootstrap/TabbedArea');
var TabPane = require('react-bootstrap/TabPane');
var AppDispatcher = require('../dispatcher/AppDispatcher.js');
var util = require('../util.js');

var ItemStore = require('../stores/ItemStore.js')
  , PetStore = require('../stores/PetStore.js');

var ItemGraphic = require('./ItemGraphic.jsx')
  , PetsTable = require('./PetsTable.jsx');
  

var ItemBreedingTab = React.createClass({
  mixins: [Router.State],

  render: function() {
    var id = this.getParams().itemId;
    var item = ItemStore.get(id);
    var pets = PetStore.findPetsThatEat(id);

    return (<PetsTable pets={pets} condensed={true} heading={"Pets bred with " + item.n} />)
  }
});

module.exports = ItemBreedingTab;
