var React = require('react');
var Router = require('react-router'); 
var Link = Router.Link;
var RouteHandler = Router.RouteHandler;
var Sitenav = require('./Sitenav.jsx');
var Navigation = require('react-router').Navigation;
var State = require('react-router').State;
var Actions = require('../actions/AppActions.js');
var Highscores = require('./Highscores.jsx');
var Util = require('../util.js');
window.U = Util;

var PAGE_SIZE = 20;
var _page = 'items';

var loadingSwitch = false; // lets us set the isLoading every other call to componentDidUpdate...

var App = React.createClass({
  mixins: [Navigation, State],
  getInitialState: function() {
    // TODO: read initial query string from the browser
    return {
      selectedPage: this.getPath(),
      showNav: false,
      isLoading: true,
      q: '',
      searchFilters: {
        cat1: -1,
        cat2: -1
      },
      maxResultCount: PAGE_SIZE
    }
  },
/*  componentWillReceiveProps: function() {
    Util.showLoader();
  },
*/
  componentDidUpdate: function() {
    if (this.state.selectedPage !== this.getPath()) {
      this.setState({
        selectedPage: this.getPath(),
        showNav: false,
      })
    }
    if (this.state.isLoading) { 
      if (loadingSwitch) {
        this.setState({isLoading: false});
        loadingSwitch = false;
      } else loadingSwitch = true;
    }
  },
  componentDidMount: function() {
    this.setState({isLoading:false});
  },
  setPage: function(page) {
    _page = page;
  },
  onSearch: function(term, page) {
    // set or get page
    if (page) {
      _page = page;
    } else {
      page = _page;
    } 
    // dispatch query action
    Actions.search(term);
    // transition to the page with search term...
    this.setState({isLoading:true});
    this.transitionTo('/'+ page +'?q=' + term)
  },

  _toggleNav: function() {
    this.setState({showNav:!this.state.showNav})
  },

  closeNav: function(cb) {
    this.setState({showNav:false});
    if (cb) {
      cb();
    }
  },
  setLoading: function(l) {
    if (this.state.isLoading != l) {
      this.setState({isLoading:l});
    }
  },

  render: function(){
    var loader = this.state.isLoading ? (<div id="loading"><i aria-hidden="true" className="glyphicon glyphicon-asterisk"></i></div>) : '';
    var cl = this.state.showNav ? 'site-nav' : 'site-nav inactive-nav'
    return (
    <div>
      {loader}
      <div className="visible-sm-block visible-xs-block" id="mobile-header">
        <a className="btn btn-default pull-left" onClick={this._toggleNav}><i className="glyphicon glyphicon-option-vertical" /></a>
        <h1> modb</h1>
      </div>
      <div className="row-fluid">
        <div className={"col-md-3 col-lg-2 "+cl}>
          <Sitenav onSearch={this.onSearch} q={this.state.q} showNav={this.state.showNav} closeNav={this.closeNav} setLoading={this.setLoading} />
        </div>
        <div className="col-md-9 col-lg-8 col-sm-12" style={{paddingTop:8}}>
           <RouteHandler setPage={this.setPage} />
        </div>
        <div className="hidden-md col-sm-12">
        </div>
      </div>
      <div className="debug">
        <div className="visible-xs-block">xs</div>
        <div className="visible-sm-block">sm</div>
        <div className="visible-md-block">md</div>
        <div className="visible-lg-block">lg</div>
      </div>
    </div>
    );
  }
});

module.exports = App;
