var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var SearchStore = require('../stores/NPCStore.js');
var NPCWatchMixin = require('../mixins/NPCWatchMixin.js');
var Constants = require('../constants/AppConstants.js');
var AppActions = require('../actions/AppActions.js');
var NPCActions = require('../actions/NPCActions.js');
var ItemGraphic = require('./ItemGraphic.jsx');
var _ = require('lodash');
var MapSelect = require('./MapSelect.jsx');

function getSearchResults() {
  return {results:SearchStore.getResults(), filters:SearchStore.getFilters()};
}

var Npcs = React.createClass({
  mixins: [ Router.State, NPCWatchMixin(getSearchResults) ],
  _toggleFilters: function(e) {
    e.preventDefault();
    NPCActions.toggleFilters();
  },
  _chooseMap: function() {
    var n = this.refs.mapFilter.getDOMNode();
    NPCActions.setMap(n.options[n.selectedIndex].text);
  },
  componentDidMount: function() {
    this.props.setPage('vendors')

  },
  
  render: function(){
    var results = (
      <tbody>{_.sortByAll(this.state.results, this.state.filters.orderBy).map(function(o,i){
        var coords = o.coords ? o.coords.x + ', ' + o.coords.y : '-';
        return (
          <tr key={'npc_' + o.id}>
            <td key="td1"><Link to="npc" params={{npcId:o.id}}>{o.n}</Link></td>
            <td key="td2">{o.map}</td>
            <td key="td3">{coords}</td>
          </tr>
        )
      })}</tbody>);

    var filterPanelBodyClass = 'panel-body' + (this.state.filters.show ? '' : ' hide');
    var cat1 = parseInt(this.state.filters.cat1);
    
    return (
    <div>
      <article className="context">
        <div className="panel panel-default">
          <div className="panel-heading">
            <div className="pull-right button-toolbar">
              <div className="button-group">
                <a onClick={this._toggleFilters} className="btn btn-primary btn-xs" href="#">toggle filters</a>
              </div>
            </div>
            <h2 className="panel-title">Vendors</h2>
          </div>
          <div className={filterPanelBodyClass}>
            <form role="form">
              <div className="row">
                <div className="col-sm-3">
                  <div className="form-group">
                    <label htmlFor="cat1">Map</label>
                    <MapSelect onChange={this._chooseMap} ref="mapFilter" defaultValue="0" />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <table className="search-results table table-striped table-">
          <thead><tr>
            <th key="th1">Name</th>
            <th key="th2">Map</th>
            <th key="th3" style={{width:50}}>Coords</th>
          </tr></thead>
          {results}
        </table>
      </article>
    </div>
    );
  }
});

module.exports = Npcs;
