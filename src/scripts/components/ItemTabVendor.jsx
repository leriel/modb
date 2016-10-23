var React = require('react');
var Router = require('react-router'); 
var Link = Router.Link;
var numeral = require('numeral');
var TabbedArea = require('react-bootstrap/TabbedArea');
var TabPane = require('react-bootstrap/TabPane');
var AppDispatcher = require('../dispatcher/AppDispatcher.js');
var util = require('../util.js');

var ItemStore = require('../stores/ItemStore.js')
  , NPCStore = require('../stores/NPCStore.js')

var ItemGraphic = require('./ItemGraphic.jsx')
  , DebugParams = require('./DebugParams.jsx')
  

var ItemTabVendor = React.createClass({
  mixins: [ Router.State ],

  render: function(){

    var id = this.getParams().itemId;
    var item = ItemStore.getItem(id);
    var npcs = NPCStore.findByItem(id);

    var npcRows = npcs.map(function(npc,i){
      return (
        <tr key={'itemNPC' + i}>
          <td key="td1"><Link to="npc" params={{npcId:npc.id}}>{npc.n}</Link></td>
          <td key="td2">{util.vendorStockCount(npc, item.id)}</td>
          <td key="td3" className="hidden-xs">{npc.map}</td>
          <td key="td4" className="hidden-xs">{npc.coords.x}, {npc.coords.y}</td>
        </tr>
      );
    });

    var vendorTable;
    if (npcs.length) {
      vendorTable = (<table className="table table-striped table-bordered">
          <thead><tr>
            <th key="th1">Name</th>
            <th key="th2"># Stocks</th>
            <th key="th3" className="hidden-xs">Map</th>
            <th key="th4" className="hidden-xs">Coordinates</th>
          </tr></thead>
          <tbody>{npcRows}</tbody>
        </table>)
    } else {
      vendorTable = (<div>There are no vendors that buy/sell this item.</div>)

    }
    return(<div>{vendorTable}</div>)
  }
});

module.exports = ItemTabVendor;