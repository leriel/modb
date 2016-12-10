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

function getSearchResults() {
  return {results:SearchStore.getResults(), filters:SearchStore.getFilters()};
}

var Mobs = React.createClass({
  mixins: [ Router.State, MobWatchMixin(getSearchResults) ],
  _toggleFilters: function(e) {
    e.preventDefault();
    MobActions.toggleFilters();
  },
  
  render: function(){
    var maps = {}
    this.state.results.map(function(o,i){
      var l;
      for (l in o.locations) {
        if (!maps[l]) { maps[l] = []; }
        maps[l].push({n:o.n,c:o.locations[l]});
      }
    });
    var keys = Object.keys(maps);

    var results = (
      <div>{keys.map(function(m,ii){
        var o = maps[m];
        var mobs = [];
        var mob;

        for (mob in o) {
          mobs.push( (<li key={"mobMap"+mob}>{o[mob].n + ' (' + o[mob].c + ')'}</li>) );
        }
        return (
          <div key={'map' + ii}><h4>Mobs in {m}</h4><ul>{mobs}</ul></div>
        )
      })}</div>);

    
    return (
    <div>
      <article className="context">
        <h3>Mobs by Map</h3>
        {results}
      </article>
    </div>
    );
  }
});

module.exports = Mobs;
