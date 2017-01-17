var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var SearchStore = require('../stores/CraftStore.js');
var CraftWatchMixin = require('../mixins/CraftWatchMixin.js');
var Constants = require('../constants/AppConstants.js');
var CraftActions = require('../actions/CraftActions.js');
var MobGraphic = require('./MobGraphic.jsx');
var ItemGraphic = require('./ItemGraphic.jsx');
var _ = require('lodash');
var HtmlSelect = require('./html/select.jsx');
var MapSelect = require('./MapSelect.jsx');
var util = require('../util.js');
var SearchCraftRow = require('./SearchCraftRow.js');
var Reactable = require('reactable');
var Table = Reactable.Table;

function getSearchResults() {
  return {results:SearchStore.getResults(), filters:SearchStore.getFilters()};
}

var Recipes = React.createClass({
  mixins: [ Router.State, CraftWatchMixin(getSearchResults) ],
  _toggleFilters: function(e) {
    e.preventDefault();
    CraftActions.toggleFilters();
  },
  componentDidMount: function() {
    this.props.setPage('recipes')
  },
  _updateFilters: function() {
    var map = this.refs.mapFilter.getDOMNode();
    CraftActions.setFilters({
      map: map.options[map.selectedIndex].text,
      levelMin: this.refs.filterLevelMin.getDOMNode().value,
      levelMax: this.refs.filterLevelMax.getDOMNode().value,
      maxChMin: this.refs.filterMaxChMin.getDOMNode().value,
      maxChMax: this.refs.filterMaxChMax.getDOMNode().value,
      minChMin: this.refs.filterMinChMin.getDOMNode().value,
      minChMax: this.refs.filterMinChMax.getDOMNode().value,
      XPMin: this.refs.filterXPMin.getDOMNode().value,
      XPMax: this.refs.filterXPMax.getDOMNode().value,
    });
  },
  render: function() {
    var results = _.sortByAll(this.state.results, this.state.filters.orderBy)
      .map(function(o, i) {
        return SearchCraftRow(o);
      });

    var filterPanelBodyClass = 'panel-body' + (this.state.filters.show ? '' : ' hide');
    var cat1 = parseInt(this.state.filters.cat1);
    var sortableCols = [
      {
        column: 'Item',
        sortFunction: function(a, b) {
          return a.props.children.localeCompare(b.props.children)
        }
      },
      'Skill',
      {column: 'Min chance', sortFunction: util.compareInt},
      {column: 'Max chance', sortFunction: util.compareInt},
      {column: 'XP', sortFunction: util.compareInt},
      {column: 'Required level', sortFunction: util.compareInt},
    ];

    
    return (
    <div>
      <article className="context">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h2 className="panel-title">Recipes</h2>
            <div className="button-toolbar">
              <div className="button-group">
                <a onClick={this._toggleFilters} className="btn btn-primary btn-xs" href="#">toggle filters</a>
              </div>
            </div>
          </div>
          <div className={filterPanelBodyClass}>
            <form role="form">
              <div className="row">
                <div className="col-sm-2">
                  <div className="form-group">
                    <label htmlFor="cat1">Map</label>
                    <MapSelect onChange={this._updateFilters} ref="mapFilter" defaultValue="0" />
                  </div>
                </div>
                <div className="col-sm-2">
                  <div className="form-group">
                    <label htmlFor="lvlMin">Level Range</label>
                    <div className="row">
                      <div className="col-sm-6"><input id="lvlMin" type="text" className="form-control" ref="filterLevelMin" onChange={this._updateFilters} defaultValue={this.state.filters.levelMin} /></div>
                      <div className="col-sm-6"><input type="text" className="form-control" ref="filterLevelMax" onChange={this._updateFilters} defaultValue={this.state.filters.levelMax} /></div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-2">
                  <div className="form-group">
                    <label htmlFor="xpMin">XP Range</label>
                    <div className="row">
                      <div className="col-sm-6"><input id="xpMin" type="text" className="form-control" ref="filterXPMin" onChange={this._updateFilters} defaultValue={this.state.filters.XPMin} /></div>
                      <div className="col-sm-6"><input type="text" className="form-control" ref="filterXPMax" onChange={this._updateFilters} defaultValue={this.state.filters.XPMax} /></div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-2">
                  <div className="form-group">
                    <label htmlFor="minchMin">Min Chance Range</label>
                    <div className="row">
                      <div className="col-sm-6"><input id="minchMin" type="text" className="form-control" ref="filterMinChMin" onChange={this._updateFilters} defaultValue={this.state.filters.minChMin} /></div>
                      <div className="col-sm-6"><input type="text" className="form-control" ref="filterMinChMax" onChange={this._updateFilters} defaultValue={this.state.filters.minChMax} /></div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-2">
                  <div className="form-group">
                    <label htmlFor="maxChMin">Max Chance Range</label>
                    <div className="row">
                      <div className="col-sm-6"><input id="maxChMin" type="text" className="form-control" ref="filterMaxChMin" onChange={this._updateFilters} defaultValue={this.state.filters.maxChMin} /></div>
                      <div className="col-sm-6"><input type="text" className="form-control" ref="filterMaxChMax" onChange={this._updateFilters} defaultValue={this.state.filters.maxChMax} /></div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <Table
          className="search-results table table-striped table-bordered"
          data={results}
          sortable={sortableCols}
        />
      </article>
    </div>
    );
  }
});

module.exports = Recipes;
