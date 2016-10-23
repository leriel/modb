var React = require('react');
var Router = require('react-router'); 
var Link = Router.Link;

var ItemStore = require('../stores/ItemStore.js')
  , PetStore = require('../stores/PetStore.js');

var PetsTable = require('./PetsTable.jsx');

var pets = PetStore.getAll();


var Breeding = React.createClass({
  render: function(){
    return (
    <div>
      <header>
        <h1>Breeding</h1>
      </header>
      <article className="context">
        <PetsTable pets={pets} />
      </article>
    </div>
    );
  }
});

module.exports = Breeding;

