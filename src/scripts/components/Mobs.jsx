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
var util=require('../util.js');

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
    var results = (
      <tbody>{_.sortByAll(this.state.results, this.state.filters.orderBy).map(function(o,i){
        var locs = [];
        var l;
        for (l in o.locations) {
          locs.push(l + ' (' + o.locations[l] + ')');
        }
        return (
          <tr key={'mobList' + o.id}>
            <td key="mobListTd1" className="vert-mid icon-td"><MobGraphic mob={o} /></td>
            <td key="mobListTd2" className="vert-mid"><Link to="mob" params={{mobId:o.id}}>{o.n}</Link></td>
            <td key="mobListTd3" className="vert-mid r">{util.calcLevel(o)}</td>
            <td key="mobListTd4" className="vert-mid r">{o.params.health}</td>
            <td key="mobListTd5" className="vert-mid r">{o.temp.total_defense}</td>
            <td key="mobListTd6" className="vert-mid r">{o.temp.total_accuracy}</td>
            <td key="mobListTd7" className="vert-mid r">{o.temp.total_strength}</td>
            <td key="mobListTd8" className="vert-mid r">{o.temp.magic_block|0}</td>
            <td key="mobListTd9" className="vert-mid r">{o.temp.melee_block|0}</td>
            <td key="mobListTd10" className="vert-mid" dangerouslySetInnerHTML={{__html:locs.join('<br />')}}></td>
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
            <h2 className="panel-title">Mobs</h2>
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
        <table className="search-results table table-striped table-bordered">
          <thead><tr>
            <th key="th1" colSpan="2">Mob</th>
            <th key="th3" className="r">Level</th>
            <th key="th4" className="r">HP</th>
            <th key="th5" className="r">Def</th>
            <th key="th6" className="r">Accuracy</th>
            <th key="th7" className="r">Strength</th>
            <th key="th8" className="r">Magic Block</th>
            <th key="th9" className="r">Melee Block</th>
            <th key="th10">Map(s)</th>
          </tr></thead>
          {results}
        </table>
      </article>
    </div>
    );
  }
});

module.exports = Mobs;
