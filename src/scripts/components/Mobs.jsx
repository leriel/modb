var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var SearchStore = require('../stores/MobStore.js');
var MobWatchMixin = require('../mixins/MobWatchMixin.js');
var Constants = require('../constants/AppConstants.js');
var MobActions = require('../actions/MobActions.js');
var MobGraphic = require('./MobGraphic.jsx');
var ItemGraphic = require('./ItemGraphic.jsx');
var _ = require('lodash');
var HtmlSelect = require('./html/select.jsx');
var MapSelect = require('./MapSelect.jsx');
var util = require('../util.js');
var SearchMobRow = require('./SearchMobRow.js');
var Reactable = require('reactable');
var Table = Reactable.Table;

function getSearchResults() {
  return {results:SearchStore.getResults(), filters:SearchStore.getFilters()};
}

var Mobs = React.createClass({
  mixins: [ Router.State, MobWatchMixin(getSearchResults) ],
  _toggleFilters: function(e) {
    e.preventDefault();
    MobActions.toggleFilters();
  },
  componentDidMount: function() {
    this.props.setPage('mobs')
  },
  _updateFilters: function() {
    var map = this.refs.mapFilter.getDOMNode();
    MobActions.setFilters({
      map: map.options[map.selectedIndex].text,
      levelMin: this.refs.filterLevelMin.getDOMNode().value,
      levelMax: this.refs.filterLevelMax.getDOMNode().value,
      magBlockMin: this.refs.filterMagBlockMin.getDOMNode().value,
      magBlockMax: this.refs.filterMagBlockMax.getDOMNode().value,
      meleeBlockMin: this.refs.filterMeleeBlockMin.getDOMNode().value,
      meleeBlockMax: this.refs.filterMeleeBlockMax.getDOMNode().value,
      strMin: this.refs.filterStrMin.getDOMNode().value,
      strMax: this.refs.filterStrMax.getDOMNode().value,
      accMin: this.refs.filterAccMin.getDOMNode().value,
      accMax: this.refs.filterAccMax.getDOMNode().value,
      defMin: this.refs.filterDefMin.getDOMNode().value,
      defMax: this.refs.filterDefMax.getDOMNode().value,
      HPMin: this.refs.filterHPMin.getDOMNode().value,
      HPMax: this.refs.filterHPMax.getDOMNode().value,
    });
  },
  render: function(){
    var results = _.sortByAll(this.state.results, this.state.filters.orderBy).map(function(o, i) {
      return SearchMobRow(o);
    });

    var filterPanelBodyClass = 'panel-body' + (this.state.filters.show ? '' : ' hide');
    var cat1 = parseInt(this.state.filters.cat1);
    var sortableCols = [
      {
        column: 'Mob',
        sortFunction: function(a, b) {
          return a.props.children.localeCompare(b.props.children)
        }
      },
      {column: 'Level', sortFunction: util.compareInt},
      {column: 'HP', sortFunction: util.compareInt},
      {column: 'Def', sortFunction: util.compareInt},
      {column: 'Acc', sortFunction: util.compareInt},
      {column: 'Str', sortFunction: util.compareInt},
      {column: 'Magic Block', sortFunction: util.compareInt},
      {column: 'Melee Block', sortFunction: util.compareInt},
      'Map(s)'
    ];

    
    return (
    <div>
      <article className="context">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h2 className="panel-title">Mobs</h2>
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
                    <label htmlFor="hpMin">HP Range</label>
                    <div className="row">
                      <div className="col-sm-6"><input id="hpMin" type="text" className="form-control" ref="filterHPMin" onChange={this._updateFilters} defaultValue={this.state.filters.HPMin} /></div>
                      <div className="col-sm-6"><input type="text" className="form-control" ref="filterHPMax" onChange={this._updateFilters} defaultValue={this.state.filters.HPMax} /></div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-2">
                  <div className="form-group">
                    <label htmlFor="defMin">Defense Range</label>
                    <div className="row">
                      <div className="col-sm-6"><input id="defMin" type="text" className="form-control" ref="filterDefMin" onChange={this._updateFilters} defaultValue={this.state.filters.defMin} /></div>
                      <div className="col-sm-6"><input type="text" className="form-control" ref="filterDefMax" onChange={this._updateFilters} defaultValue={this.state.filters.defMax} /></div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-2">
                  <div className="form-group">
                    <label htmlFor="accMin">Accuracy Range</label>
                    <div className="row">
                      <div className="col-sm-6"><input id="accMin" type="text" className="form-control" ref="filterAccMin" onChange={this._updateFilters} defaultValue={this.state.filters.accMin} /></div>
                      <div className="col-sm-6"><input type="text" className="form-control" ref="filterAccMax" onChange={this._updateFilters} defaultValue={this.state.filters.accMax} /></div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-2">
                  <div className="form-group">
                    <label htmlFor="strMin">Strength Range</label>
                    <div className="row">
                      <div className="col-sm-6"><input id="strMin" type="text" className="form-control" ref="filterStrMin" onChange={this._updateFilters} defaultValue={this.state.filters.strMin} /></div>
                      <div className="col-sm-6"><input type="text" className="form-control" ref="filterStrMax" onChange={this._updateFilters} defaultValue={this.state.filters.strMax} /></div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-2">
                  <div className="form-group">
                    <label htmlFor="magBlockMin">Magic Block Range</label>
                    <div className="row">
                      <div className="col-sm-6"><input id="magBlockMin" type="text" className="form-control" ref="filterMagBlockMin" onChange={this._updateFilters} defaultValue={this.state.filters.magBlockMin} /></div>
                      <div className="col-sm-6"><input type="text" className="form-control" ref="filterMagBlockMax" onChange={this._updateFilters} defaultValue={this.state.filters.magBlockMax} /></div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-2">
                  <div className="form-group">
                    <label htmlFor="meleeBlockMin">Melee Block Range</label>
                    <div className="row">
                      <div className="col-sm-6"><input id="meleeBlockMin" type="text" className="form-control" ref="filterMeleeBlockMin" onChange={this._updateFilters} defaultValue={this.state.filters.meleeBlockMin} /></div>
                      <div className="col-sm-6"><input type="text" className="form-control" ref="filterMeleeBlockMax" onChange={this._updateFilters} defaultValue={this.state.filters.meleeBlockMax} /></div>
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

module.exports = Mobs;
