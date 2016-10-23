var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var Icons = require('../constants/AppConstants.js').Icons;


var sections = [
  {n:'',i:'',t:'item'},
  {n:'Vendors',i:'usd',t:Icons.vendorTab},
  {n:'Drops',i:'user',t:Icons.dropsTab},
  {n:'Craft',i:'wrench',t:Icons.craftTab},
  {n:'Enchant',i:'flash',t:Icons.enchantTab},
  {n:'Breeding',i:'piggy-bank',t:Icons.breedingTab},
];

var ItemMobileAccordion = React.createClass({
  mixins: [Router.State],
  render: function() {
    var _self = this;
    console.log(this);
    console.log(this.getPathname());
    var item = this.props.item;
    sections[0].n = item.n;
    var params = {itemId: item.id}
    var accordions = sections.map(function(s,i) {
      var heading = s.i ? (<span><i className={"glyphicon glyphicon-" + s.i} />{s.n}</span>) : s.n
      var content = '';
      console.log(s.i);
      console.log(_self.isActive(s.t, params));
      if (_self.isActive(s.t, params)) {
        if (s.t == 'item') {
          // only render it when we're on the item's info page
          if (_self.getPathname().match(/[0-9]$/)) {
            content = (<div className="panel-collapse collapse in"><div className="accordion-inner">
              {_self.props.itemInfo}
            </div></div>);
          }
        } else {
          content = (<div className="panel-collapse collapse in"><div className="accordion-inner">
            {_self.props.content}
          </div></div>);
        }
      }

      return (
        <div className="panel-group">
          <div className="panel panel-default">
            <div className="panel-heading c"><h4 className="panel-title"><Link to={s.t} params={params} className="accordion-link">{heading}</Link></h4></div>
            {content}
          </div>
        </div>
      )
    })

    return (<div className="accordion">{accordions}</div>)

  }
});

module.exports = ItemMobileAccordion;