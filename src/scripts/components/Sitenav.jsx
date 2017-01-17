var React = require('react');

var ReactBootstrap = require('react-bootstrap')
  , Navbar = ReactBootstrap.Navbar
  , Nav = ReactBootstrap.Nav
  , DropdownButton = ReactBootstrap.DropdownButton
  , ListGroup = ReactBootstrap.ListGroup
  , ListGroupItem = ReactBootstrap.ListGroupItem
  , Input = ReactBootstrap.Input
  , Button = ReactBootstrap.Button
  , Badge = ReactBootstrap.Badge
  ;

var Router = require('react-router');
var InternalLink = Router.Link;

var ReactRouterBootstrap = require('react-router-bootstrap')
  , NavItemLink = ReactRouterBootstrap.NavItemLink
  , MenuItemLink = ReactRouterBootstrap.MenuItemLink
  // , ButtonLink = ReactRouterBootstrap.ButtonLink
  ;

// var OffCanvasNav = rqeuire('react-offcanvas');

var SearchStore = require('../stores/SearchStore.js')
  , MobStore = require('../stores/MobStore.js')
  , NPCStore = require('../stores/NPCStore.js')
  , CraftStore = require('../stores/CraftStore.js')
;

var NavMixin = require('../mixins/NavMixin.js');

function getCounts() {
  return {
    items:SearchStore.getResults().length,
    mobs:MobStore.getResults().length,
    npcs:NPCStore.getResults().length,
    crafts:CraftStore.getResults().length
  };
}

var SiteNav = React.createClass({
  mixins: [ 
    NavMixin(getCounts),
    Router.Navigation,
    Router.State,
  ],
  onSubmit: function(e) {
    e.preventDefault();
    this.props.onSearch(this.refs.q.getInputDOMNode().value)
  },
  componentDidMount: function(){
//    this.refs.q.getInputDOMNode().focus();
  },
  _resetAndSearch: function(page) {
    this.props.setLoading(true);
    this.props.onSearch(this.refs.q.getInputDOMNode().value, page);
  },
  navClick: function(href) {
    if (href != this.getPathname()) {
      var _self = this;
      this.props.setLoading(true);
      this.props.closeNav(function(){
        // small delay on loading to allow CSS animation to complete on mobile.
        // consider using react-responsive to only do this as needed.
        window.setTimeout(function(){
          _self.transitionTo(href);  
        }, 600)
      });
    }
  },
  closeNav: function(e) {
    e.preventDefault();
    this.props.closeNav();
  },
  itemsClick: function() {
    this._resetAndSearch('items');
  },
  mobsClick: function() {
    this._resetAndSearch('mobs');
  },
  npcsClick: function() {
    this._resetAndSearch('vendors');
  },
  render: function(){
    var _self = this;
    var cl = this.props.showNav ? 'site-nav' : 'site-nav inactive-nav'
    cl = '';

    return (
      <nav className={cl} id="site-nav">
        <h4>
          <a href="#" className="pull-right visible-sm-inline visible-xs-inline" onClick={this.closeNav}><i className="glyphicon glyphicon-remove-circle" /></a>
          <a href="#">modb</a>
        </h4>
        <form className="" role="search" onSubmit={this.onSubmit}>
           <div className="form-group">
            <Input type="text" ref="q" placeholder="Search" defaultValue={this.props.q} buttonAfter={<Button type="submit"><i className="glyphicon glyphicon-search" /></Button>} />
          </div>
        </form>
        <ListGroup>
          <ListGroupItem href="#/items" onClick={this.navClick.bind(_self, '/items')}>Items <Badge className="pull-right">{this.state.items}</Badge></ListGroupItem>
          <ListGroupItem href="#/mobs" onClick={this.navClick.bind(_self, '/mobs')}>Mobs <Badge className="pull-right">{this.state.mobs}</Badge></ListGroupItem>
          <ListGroupItem href="#/recipes" onClick={this.navClick.bind(_self, '/recipes')}>Recipes <Badge className="pull-right">{this.state.crafts}</Badge></ListGroupItem>
          <ListGroupItem href="#/vendors" onClick={this.navClick.bind(_self, '/vendors')}>Vendors <Badge className="pull-right">{this.state.npcs}</Badge></ListGroupItem>
          <ListGroupItem href="#/breeding">Breeding</ListGroupItem>
        </ListGroup>
      </nav>
    );
  }
});

module.exports = SiteNav;

/*
        <Navbar brand={brand} staticTop className="bs-docs-nav" role="banner" toggleNavKey={0}>
          <form className="navbar-form navbar-right" action="/items" role="search" onSubmit={this.onSubmit}>
             <div className="form-group">
              <input type="text" className="form-control" name="q" ref="q" placeholder="Search" defaultValue={this.props.q} />
            </div>
            <button type="submit" className="btn btn-default">Go</button>
          </form>
          <Nav className="bs-navbar-collapse" role="navigation" eventKey={0} id="top">
            <NavItemLink to="search" onClick={this.itemsClick}>Items</NavItemLink>
            <DropdownButton eventKey={2} title="NPCs">
              <MenuItemLink to="mobs" eventKey="1">Mobs</MenuItemLink>
              <MenuItemLink to="npcs" eventKey="2">Vendors</MenuItemLink>
            </DropdownButton>
            <DropdownButton eventKey={3} title="Skills">
              <MenuItemLink to="breeding" eventKey="1" to="breeding">Breeding</MenuItemLink>
            </DropdownButton>
          </Nav>
        </Navbar>
*/