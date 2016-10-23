var React = require('react');
var Router = require('react-router'); 
var Link = Router.Link;
var numeral = require('numeral');
var TabbedArea = require('react-bootstrap/TabbedArea');
var TabPane = require('react-bootstrap/TabPane');
var AppDispatcher = require('../dispatcher/AppDispatcher.js');
var util = require('../util.js');
var _ = require('lodash');

var NPCStore = require('../stores/NPCStore.js')
  , ItemStore = require('../stores/ItemStore.js')
  // , CraftStore = require('../stores/CraftStore.js')
  // , PetStore = require('../stores/PetStore.js');

var ItemGraphic = require('./ItemGraphic.jsx')
  , DebugParams = require('./DebugParams.jsx')
  // , ItemCraftTab = require('./ItemCraftTab.jsx')
  // , ItemProperties = require('./ItemProperties.jsx')
  // , PetsTable = require('./PetsTable.jsx');
  

var NPCView = React.createClass({
  mixins: [ Router.State ],
  render: function(){
    var id = this.getParams().npcId;
    var npc = NPCStore.get(id);

    var itemRows =  npc.temp.content.map(function(d,i){
      var item = ItemStore.getItem(d.id);
      return(<tr key={"npcStoreRow"+i}>
        <td key={"npcStoreTd1_"+i} style={{width:50}}><ItemGraphic item={item} /></td>
        <td key={"npcStoreTd2_"+i}><Link to="item" params={{itemId:item.id}}>{item.n}</Link></td>
        <td key={"npcStoreTd3_"+i}>{numeral(d.count).format('0,0')}</td>
        <td key={"npcStoreTd4_"+i} className="hidden-xs">{numeral(item.params.price).format('0,0')}</td>
        <td key={"npcStoreTd5_"+i} className="hidden-xs">{numeral(Math.ceil(item.params.price/2)).format('0,0')}</td>
      </tr>)
    });

    var itemsTable = npc.temp.content.length ? (
      <table className="table table-bordered table-striped">
        <thead><tr>
          <th key="npcItemTh1" colSpan="2">Item</th>
          <th key="npcItemTh2"># Stocks</th>
          <th key="npcItemTh3" className="hidden-xs">Buy Price</th>
          <th key="npcItemTh4" className="hidden-xs">Sell Price</th>
        </tr></thead>
        <tbody>{itemRows}</tbody>
      </table>
    ) : (<div>NPC does not stock any items.</div>)

    var coords = npc.coords ? (<div>{npc.coords.x}, {npc.coords.y}</div>) : '';
    return (
      <div className="item-detail">
        <header>
          <h1>
            {npc.n}
          </h1>
        </header>
        <div className="row">
          <div className="col-md-3 col-xs-12 pull-right">
            <div className="panel panel-default c">
              <div className="panel-heading"><h3 className="panel-title">NPC Location</h3></div>
              <div className="panel-body"><b>{npc.map}</b>{coords}</div>
            </div>
            <div className="panel debug">npc<DebugParams params={npc} /></div>
            <div className="panel debug">temp<DebugParams params={npc.temp} /></div>
          </div>
          <div className="col-md-9">
          {itemsTable}
          </div>
        </div>
      </div>
    )
  }
});
module.exports = NPCView;