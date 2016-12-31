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
var Reactable = require('reactable');
var Table = Reactable.Table;
  

var ItemDropsTab = React.createClass({
  mixins: [ Router.State ],

  render: function(){

    var id = this.getParams().itemId;
    var item = ItemStore.getItem(id);
    var mobs = MobStore.findByItem(id);
    var presentInfo = '';

    var mobRows = mobs.map(function(mob,i){
      var mobLocs = mob.locations ? Object.keys(mob.locations).join(', ') : '';
      return {
        ' ': <MobGraphic mob={mob} imgType="mob" />,
        'Mob': <Link to="mob" params={{mobId:mob.id}}>{mob.n}</Link>,
        'Chance': numeral(mob.chance * 100).format('0.00') + '%',
        'Actual chance': mob.actualChance + '%',
        'Map(s)': mobLocs,
      };
    });

    

    var dropTable;
    if (mobs.length) {
      dropTable = (
        <div>
          {presentInfo}
          <h4>Mobs that drop {item.n}</h4>
          <Table
            className="table table-striped table-bordered"
            data={mobRows}
            sortable={[
              {
                column: 'Mob',
                sortFunction: function(a, b) {
                  return a.props.children.localeCompare(b.props.children)
                }
              }, 'Chance', 'Actual chance', 'Map(s)']}
          />
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

