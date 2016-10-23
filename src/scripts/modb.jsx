var Util = require('./util.js')
var React = require('react');

var Router = require('react-router')
  , RouteHandler = Router.RouteHandler
  , Route = Router.Route;

var ReactBootstrap = require('react-bootstrap')
  , Nav = ReactBootstrap.Nav;

var ReactRouterBootstrap = require('react-router-bootstrap')
  , NavItemLink = ReactRouterBootstrap.NavItemLink
  , ButtonLink = ReactRouterBootstrap.ButtonLink;

var DefaultRoute = Router.DefaultRoute
var NotFoundRoute = Router.NotFoundRoute
var NotFound = require('./components/404.jsx');
var Redirect = Router.Redirect

var App = require('./components/App.jsx')
  , Home = require('./components/Home.jsx')
  , Search = require('./components/Search.jsx')
  , Item = require('./components/Item.jsx')
  , Breeding = require('./components/Breeding.jsx')
  , Npcs = require('./components/Npcs.jsx')
  , Npc = require('./components/Npc.jsx')
  , Mobs = require('./components/Mobs.jsx')
  , MobsByMap = require('./components/MobsByMap.jsx')
  , Mob = require('./components/Mob.jsx')
  , Todo = require('./components/Todo.jsx')

var ItemTabVendors = require('./components/ItemTabVendor.jsx')
  , ItemTabDrops = require('./components/ItemTabDrops.jsx')
  , ItemTabCraft = require('./components/ItemTabCraft.jsx')
  , ItemTabEnchant = require('./components/ItemTabEnchant.jsx')
  , ItemTabBreeding = require('./components/ItemTabBreeding.jsx')
  , ItemHome = require('./components/ItemHome.jsx')
;

React.initializeTouchEvents();

var routes = (
  <Route handler={App} path="/">
    <DefaultRoute name="home" handler={Home} />
    <Route name="search" handler={Search} path="/items" />
    <Route name="item" handler={Item} path="/items/:itemId">
      <DefaultRoute name="item-home" handler={ItemHome} />
      <Route name="item-vendor" path="vendors" handler={ItemTabVendors} />
      <Route name="item-drops" path="mobs" handler={ItemTabDrops} />
      <Route name="item-craft" path="craft" handler={ItemTabCraft} />
      <Route name="item-enchant" path="enchant" handler={ItemTabEnchant} />
      <Route name="item-breeding" path="breeding" handler={ItemTabBreeding} />
      <NotFoundRoute handler={NotFound}/>
    </Route>
    <Route name="breeding" handler={Breeding} path="/breeding" />
    <Route name="npcs" handler={Npcs} path="/vendors" />
    <Route name="npc" handler={Npc} path="/vendors/:npcId" />
    <Route name="mobs" handler={Mobs} path="/mobs" />
    <Route name="mobsByMap" handler={MobsByMap} path="/mobsByMap" />
    <Route name="mob" handler={Mob} path="/mobs/:mobId" />
    <Route name="todo" handler={Todo} path="/todo" />
    <NotFoundRoute handler={NotFound}/>
    <Redirect from="company" to="about" />
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.getElementById('main'));
  Util.hideLoader();
});

