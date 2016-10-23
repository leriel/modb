var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var MobGraphic = React.createClass({
  render: function() {
    if (!this.props.mob.img) {
      return (<div className="noMobImg" />);
    }
    var cl = 'sheet_' + this.props.mob.img.sheet + ' mob_' + this.props.mob.id;
    return this.props.nolink ? (<div className={cl} title={this.props.mob.n}></div>) 
      : (<Link to="mob" params={{mobId:this.props.mob.id}}><div className={cl} title={this.props.mob.n}></div></Link>)
  }
});

module.exports = MobGraphic;