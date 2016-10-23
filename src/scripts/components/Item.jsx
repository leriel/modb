var React = require('react');
var Router = require('react-router'); 
var RouteHandler = Router.RouteHandler; 
var numeral = require('numeral');
var Nav = require('react-bootstrap/Nav');
var NavItemLink = require('react-router-bootstrap').NavItemLink;
var util = require('../util.js');
var MediaQuery = require('react-responsive');
var Breakpoints = require('../constants/AppConstants.js').Breakpoints;

var Icons = require('../constants/AppConstants.js').Icons;

var ItemStore = require('../stores/ItemStore.js')
var ItemProperties = require('./ItemProperties.jsx')
  , ItemMobileAccordion = require('./ItemMobileAccordion.jsx')
  , DebugParams = require('./DebugParams.jsx')
  
var ItemView = React.createClass({
  mixins: [ Router.State ],

  render: function(){

    var id = this.getParams().itemId;
    var item = ItemStore.getItem(id);
    

    var tabIdx = 0;

    var cl = 'sheet_' + item.img.sheet + ' item_' + id;

    var kk = Object.keys(item.params);
    var paramRows = kk.map(function(k){
      var v = item.params[k];
      return (
        <tr key={k}><th>{k}</th><td>{v}</td></tr>
      );
    });

    var price = numeral(item.params.price).format('0,0');

    var itemDesc = '';
    if (item.params.desc) {
      itemDesc = (<small><br />{item.params.desc}</small>);
    }

    var sourcesTable, presents = util.itemPresents(item), sources;
    if (presents) {
      sources = presents.concat(item.sources||[]);
    }

    if (sources && sources.length) {
      sourcesTable = (
        <div className="panel panel-default">
            <div className="panel-heading"><h4 className="panel-title c">Non Mob/Crafting Sources</h4></div>
            <div className="panel-body"><ul>{sources.map(function(i){
            return(
              <li>{i}</li>
            );
          })}
          </ul></div>
          </div>
      )
    }

    var itemInfo = (
      <div className="row">
        <div className="col-xs-12">
          <header className="clearfix">
            <MediaQuery minWidth={Breakpoints.xs} key="itemNonMobileWikiValueMQ">
              <div className="pull-right panel panel-default">
                <div className="panel-heading"><h4 className="panel-title c">Wiki Value</h4></div>
                <div className="panel-body c">{price}</div>
              </div>
            </MediaQuery>

            <div className="item-icon panel panel-default pull-left">
              <div className="panel-body"><div className={cl}></div></div>
            </div>
            <h3>
              {item.n}
              {itemDesc}
            </h3>
          </header>
          <MediaQuery maxWidth={Breakpoints.xs} key="itemMobileWikIValueMQ">
            
            <div className="panel panel-default" style={{marginTop:8}}>
              <div className="panel-heading"><h4 className="panel-title c">Wiki Value</h4></div>
              <div className="panel-body c">{price}</div>
            </div>
          </MediaQuery>
        </div>
      </div>
    );

    var content = <RouteHandler />;


    return (
    <div className="item-detail">
      <MediaQuery maxWidth={Breakpoints.xs} key="itemMobileMQ">
        <ItemMobileAccordion item={item} itemInfo={itemInfo} content={content} />
      </MediaQuery>
      <MediaQuery minWidth={Breakpoints.xs} key="nonMobileMQ">
        {itemInfo}
        <br className="clearfix" />
        <div className="row">
          <div className="col-md-3 col-xs-12 pull-right">
            <div className="visible-xs-block panel panel-default">
                <div className="panel-heading"><h4 className="panel-title c">Wiki Value</h4></div>
                <div className="panel-body c">{price}</div>
              </div>
            <div className="row">
              <div className="col-xs-12 col-sm-6 col-md-12"><ItemProperties item={item} /></div>
              <div className="col-xs-12 col-sm-6 col-md-12">{sourcesTable}</div>
            </div>
          </div>
          <div className="col-md-9">
            <Nav bsStyle="tabs" activeKey={1} onSelect={this.handelSelect}>
              <NavItemLink key="navItemLink1" to="item-vendor" params={{itemId:item.id}}>
                {Icons.vendorTab}
                <span className="hidden-xs">&nbsp;Vendors</span>
              </NavItemLink>
              <NavItemLink key="navItemLink2" to="item-drops" params={{itemId:item.id}}>
                {Icons.dropsTab}
                <span className="hidden-xs">&nbsp;Drops</span>
              </NavItemLink>
              <NavItemLink key="navItemLink3" to="item-craft" params={{itemId:item.id}}>
                {Icons.craftTab}
                <span className="hidden-xs">&nbsp;Craft</span>
              </NavItemLink>
              <NavItemLink key="navItemLink4" to="item-enchant" params={{itemId:item.id}}>
                {Icons.enchantTab}
                <span className="hidden-xs">&nbsp;Enchant</span>
              </NavItemLink>
              <NavItemLink key="navItemLink5" to="item-breeding" params={{itemId:item.id}}>
                {Icons.breedingTab}
                <span className="hidden-xs">&nbsp;Breeding</span>
              </NavItemLink>
            </Nav>
            <div className="tab-content">{content}</div>
          </div>
        </div>
      </MediaQuery>

      <div className="panel debug"><DebugParams params={item.params} /></div>
    </div>
    );

  }
});

module.exports = ItemView;
