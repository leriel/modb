var React = require('react');
var Router = require('react-router'); 
var Link = Router.Link;
var numeral = require('numeral');
var TabbedArea = require('react-bootstrap/TabbedArea');
var TabPane = require('react-bootstrap/TabPane');
var AppDispatcher = require('../dispatcher/AppDispatcher.js');
var util = require('../util.js');

var ItemStore = require('../stores/ItemStore.js')

var ItemGraphic = require('./ItemGraphic.jsx')
  

var ItemTabEnchant = React.createClass({
  mixins: [ Router.State ],

  render: function(){

    var id = this.getParams().itemId;
    var item = ItemStore.getItem(id);
    var enchantChain = ItemStore.getEnchantChain(id);

    var enchantTable;
    if (enchantChain.length > 1) {
      var maxEl = enchantChain.length - 1;
      var enchantRows = enchantChain.map(function(encItem,i){
      var cl = 'sheet_' + encItem.img.sheet + ' item_' + encItem.id;
      var trcl = item.id == encItem.id ? 'info' : '';
      return(
        <tr key={'enchantChain' + i} className={trcl}>
          <td key="td1">
            <Link to="item" params={{itemId:encItem.id}}>
              <div className={cl}></div>
            </Link>
          </td>
          <td key="td2">
            <Link to="item" params={{itemId:encItem.id}}>
              {encItem.n}
            </Link>
          </td>
          <td key="td3">{encItem.chances && i < maxEl ? encItem.chances[0] + '%' : '-'}</td>
          <td key="td4">{encItem.chances && i < maxEl ? encItem.chances[1] + '%' : '-'}</td>
          <td key="td5">{encItem.chances && i < maxEl ? encItem.chances[2] + '%' : '-'}</td>
          <td key="td6">{encItem.chances && i < maxEl ? encItem.chances[3] + '%' : '-'}</td>
        </tr>
      )

      });

      enchantTable = (<table className="table table-striped table-bordered">
              <thead><tr>
                <th key="th1">Image</th>
                <th key="th2">Item Name</th>
                <th key="th3">Low</th>
                <th key="th4">Medium</th>
                <th key="th5">High</th>
                <th key="th6">Superior</th>
               </tr></thead>
              <tbody>{enchantRows}</tbody>
            </table>);
    } else {
      enchantTable = (<div>There is no enchanting information for this item.</div>)
    }

    return (<div>{enchantTable}</div>);
  }
});

module.exports = ItemTabEnchant;
