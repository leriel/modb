var React = require('react');
var Router = require('react-router'); 
var Link = Router.Link;
var ItemProp = require('./ItemProperty.jsx');
var AppConstants = require('../constants/AppConstants.js');
var itemParamsKeyMap = AppConstants.itemParamsKeyMap;
var itemParamsTransform = AppConstants.itemParamsTransform;
var PetStore = require('../stores/PetStore.js');

var ItemProperties = React.createClass({
  render: function(){
    var item = this.props.item;
    var p = item.params;
    var pk = Object.keys(p);
    var propCount = 0;

    var propStr = Object.keys(itemParamsKeyMap).map(function(k) {
      var value = p[k];
      if (pk.indexOf(k) > -1) {
        if (typeof itemParamsTransform[k] === 'function') {
          value = itemParamsTransform[k](value);
        }
        propCount++;
        return (
          <ItemProp key={k} name={itemParamsKeyMap[k]} value={value} />
        )
      } else {
        return '';
      }
    });

    // add inventory slots for pets
    if (item.t == AppConstants.itemCatMap.PET && item.params.pet) {
      var pet = PetStore.getByItemId(item.id);
      if (pet && pet.params) {
        propCount++;
        propStr.push((<ItemProp key="petInvSlots" name="Inventory Slots" value={pet.params.inventory_slots} />))
      }
    }

    if (propCount) {
      return (
        <div>
        <h4>{AppConstants.itemCats[this.props.item.t]} Stats</h4>
        <ul className="list-group">
          {propStr}
        </ul>
        </div>
      );
    } else {
      return <div />;
    }
  }
});

module.exports = ItemProperties;
