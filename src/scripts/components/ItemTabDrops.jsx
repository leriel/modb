var React = require('react');
var Router = require('react-router'); 
var Link = Router.Link;
var numeral = require('numeral');
var TabbedArea = require('react-bootstrap/TabbedArea');
var TabPane = require('react-bootstrap/TabPane');
var AppDispatcher = require('../dispatcher/AppDispatcher.js');
var util = require('../util.js');

var ItemStore = require('../stores/ItemStore.js')
  , MobStore = require('../stores/MobStore.js')

var ItemGraphic = require('./ItemGraphic.jsx')
  , MobGraphic = require('./MobGraphic.jsx')
  

var ItemDropsTab = React.createClass({
  mixins: [ Router.State ],

  render: function(){

    var id = this.getParams().itemId;
    var item = ItemStore.getItem(id);
    var mobs = MobStore.findByItem(id);
    var presentInfo = '';

    var mobRows = mobs.map(function(mob,i){
      var mobLocs = mob.locations ? Object.keys(mob.locations).join(', ') : ''
      return (
        <tr key={'itemNPC' + i}>
          <td key="td1" width="32"><MobGraphic mob={mob} imgType="mob" /></td>
          <td key="td2"><Link to="mob" params={{mobId:mob.id}}>{mob.n}</Link></td>
          <td key="td3">{numeral(mob.chance * 100).format('0.00')}%</td>
          <td key="td4">{mob.actualChance}%</td>
          <td key="td5" className="hidden-xs">{mobLocs}</td>
        </tr>
      );
    });

    

    var dropTable;
    if (mobs.length) {
      dropTable = (
        <div>
          {presentInfo}
          <h4>Mobs that drop {item.n}</h4>
          <table className="table table-striped table-bordered">
            <thead><tr>
              <th key="th1" colSpan="2">Mob</th>
              <th key="th2">Chance</th>
              <th key="th3">Actual chance</th>
              <th key="th4" className="hidden-xs">Map(s)</th>
            </tr></thead>
            <tbody>{mobRows}</tbody>
          </table>
        </div>
      );
    } else if (presentInfo) {
      dropTable = presentInfo;
    } else {
      dropTable = (<div>There are no mobs that drop this item.</div>)
    }
    

    return(<div>{dropTable}</div>);
  }
});

module.exports = ItemDropsTab;

