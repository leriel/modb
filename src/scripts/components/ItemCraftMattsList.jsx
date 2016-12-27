var React = require('react');
var Router = require('react-router'); 
var Link = Router.Link;
var ItemStore = require('../stores/ItemStore.js');
var ForgeStore = require('../stores/ForgeStore.js');
var ItemGraphic = require('./ItemGraphic.jsx');

var ItemCraftTab = React.createClass({
  render: function(){
    var formula = this.props.formula;
    return(
      <table className="table table-condensed table-bordered table-stripped">
        <thead><th></th><th>Item</th><th># Used</th></thead>
        <tbody>
          {formula.matts.map(function(o,i){
            var matt = ItemStore.getItem(o.id);
            return(<tr key={'itemCraftListItem'+i}>
              <td><ItemGraphic item={matt} /></td>
              <td><Link to="item" params={{itemId:matt.id}}>{matt.n}</Link></td>
              <td>{o.c}</td>
            </tr>)
          })}
          <tr key={'itemCraftXp'}>
            <td key={'itemCraftXpLabel'} colSpan="2">XP</td>
            <td key={'itemCraftXpVal'}>{ForgeStore.getXpForFormula(formula)}</td>
          </tr>
        </tbody>
      </table>
    );
  }
});

module.exports = ItemCraftTab;
