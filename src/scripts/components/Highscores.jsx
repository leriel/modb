var React = require('react');
var Router = require('react-router'); 
var Link = Router.Link;
var HighscoresWatchMixin = require('../mixins/HighscoresWatchMixin.js');
var HSStore = require('../stores/HSStore.js');
var ReactBootstrap = require('react-bootstrap')
  , ListGroup = ReactBootstrap.ListGroup
  , ListGroupItem = ReactBootstrap.ListGroupItem
  , Badge = ReactBootstrap.Badge

var getHighscores = function() {
  return {results:HSStore.getResults(), filters:HSStore.getFilters()}
};

var Highscores = React.createClass({
  mixins: [ HighscoresWatchMixin(getHighscores) ],
  render: function(){
    var filters = this.state.filters;
    var results = this.state.results;

    var list = (<ListGroup>{results.map(function(r,i){
      return(<ListGroupItem key={"hs"+i}>
        <Badge className="pull-right">{r.l}</Badge>
        #{i}. {r.u}
      </ListGroupItem>)
    })}</ListGroup>)
    var hsSTyles = {
      height: window.innerHeight - 30,
      overflow: 'auto',
      overflowX: 'hidden',
      overflowY: 'auto',
    }
    return (
    <div id="highscores" style={hsSTyles}>
     <h3>Highscores</h3>
     {list}
    </div>
    );
  }
});

module.exports = Highscores;

