var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var util = require('../util.js');

var ItemGraphic = React.createClass({
  render: function() {
    if (!this.props.item || !this.props.item.img) {
      return (<div className="noMobImg" />);
    }
    var type = this.props.imgType ? this.props.imgType : 'item';
    var cl = 'item sheet_' + this.props.item.img.sheet;
    if (this.props.item.id) {
      cl += ' ' + type + '_' + this.props.item.id;
      if (this.props.cl) cl += ' ' + this.props.cl;
      return this.props.nolink ? (<div className={cl}></div>) 
        : (<Link to={type} params={{itemId:this.props.item.id}}><div className={cl} title={this.props.item.n}></div></Link>)
    } else {
      return this.props.nolink ? (<div className={cl} style={util.itemGraphicStyle(this.props.item)}></div>) 
        : (<Link to={type} params={{itemId:this.props.item.id}}><div className={cl} style={util.itemGraphicStyle(this.props.item)} title={this.props.item.n}></div></Link>)
    }
  }
});

module.exports = ItemGraphic;