var React = require('react');
var Router = require('react-router'); 
var Link = Router.Link;
var numeral = require('numeral');
var TabbedArea = require('react-bootstrap/TabbedArea');
var TabPane = require('react-bootstrap/TabPane');
var AppDispatcher = require('../dispatcher/AppDispatcher.js');
var util = require('../util.js');
var _ = require('lodash');

var MobStore = require('../stores/MobStore.js')
  // , NPCStore = require('../stores/NPCStore.js')
  , ItemStore = require('../stores/ItemStore.js')
  // , CraftStore = require('../stores/CraftStore.js')
  // , PetStore = require('../stores/PetStore.js');

var ItemGraphic = require('./ItemGraphic.jsx')
  , MobGraphic = require('./MobGraphic.jsx')
  , MobProperties = require('./MobProperties.jsx')
  , DebugParams = require('./DebugParams.jsx')
  // , ItemCraftTab = require('./ItemCraftTab.jsx')
  // , ItemProperties = require('./ItemProperties.jsx')
  // , PetsTable = require('./PetsTable.jsx');
  

var MobView = React.createClass({
  mixins: [ Router.State ],
  render: function(){
    var id = this.getParams().mobId;
    var mob = MobStore.get(id);
    var cl = 'sheet_' + mob.img.sheet + ' mob_' + id;
    var dropRows =  _.sortByOrder(mob.params.drops, ['chance'],[false]).map(function(d,i){
      var item = ItemStore.getItem(d.id);
      var formatDrop = numeral(d.chance * 100).format('0.00');
      return(<tr key={"mobDropRow"+i}>
        <td key="mobDropTd1"><ItemGraphic item={item} /></td>
        <td key="mobDropTd2"><Link to="item" params={{itemId:item.id}}>{item.n}</Link></td>
        <td key="mobDropTd3">{formatDrop}%</td>
        <td key="mobDropTd4">{d.actualChance}%</td>
      </tr>)
    });
    var dropTable = mob.params.drops.length ? (
      <table className="table table-bordered table-striped">
        <thead><tr>
          <th key="mobDropTh1" colSpan="2">Item</th>
          <th key="mobDropTh2">%</th>
          <th key="mobDropTh3">Actual %</th>
        </tr></thead>
        <tbody>{dropRows}</tbody>
      </table>
    ) : (<div>No items dropped.</div>)

    return (
      <div className="item-detail">
        <header>
          <div className="item-icon panel panel-default pull-left">
            <div className="panel-body"><div className={cl}></div></div>
          </div>
          <h1>
            {mob.n}
          </h1>
        </header>
        <br className="clearfix" />

        <div className="row">
          <div className="col-md-4  col-xs-12 pull-right">
            <div className="row-fluid">
              <div className="col-xs-12 col-sm-6 col-md-12"><MobProperties mob={mob} /></div>
              <div className="col-xs-12 col-sm-6 col-md-12">
                <div className="panel panel-default">
                  <div className="panel-heading"><h3 className="panel-title">Mob Maps</h3></div>
                  <div className="panel-body">
                    <ul>{Object.keys(mob.locations).map(function(m, i){
                      return(<li key={"mobMap"+i}>{m} ({numeral(mob.locations[m]).format('0,0')})</li>)
                    })}</ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="panel debug">mob<DebugParams params={mob} /></div>
            <div className="panel debug">params<DebugParams params={mob.params} /></div>
            <div className="panel debug">temp<DebugParams params={mob.temp} /></div>
        
          </div>
          <div className="col-md-8">
            {dropTable}
          </div>
        </div>
      </div>
    )
  }
});
module.exports = MobView;