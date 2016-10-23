var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var util = require('../util.js');
var ItemGraphic = require('./ItemGraphic.jsx');
var ItemStore = require('../stores/ItemStore.js');

var FishingTool = React.createClass({
  render: function() {
    var n = this.props.item.toLowerCase();

    if (n.match(/poseidon/)) return (<ItemGraphic item={ItemStore.getItem(1397)} />);
    if (n.match(/iron/)) return (<ItemGraphic item={ItemStore.getItem(1036)} />);
    if (n.match(/cage/)) return (<ItemGraphic item={ItemStore.getItem(127)} />);
    if (n.match(/net/)) return (<ItemGraphic item={ItemStore.getItem(124)} />);
    if (n.match(/wooden harp/)) return (<ItemGraphic item={ItemStore.getItem(125)} />);
    if (n.match(/steel harp/)) return (<ItemGraphic item={ItemStore.getItem(126)} />);
    if (n.match(/fishing rod/)) return (<ItemGraphic item={ItemStore.getItem(7)} />);
    return (<div />)
    
  }
});

module.exports = FishingTool;