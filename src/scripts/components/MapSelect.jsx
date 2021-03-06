var React = require('react');
var HTMLSelect = require('./html/select.jsx');
var AppConstants = require('../constants/AppConstants.js');

var MapSelect = React.createClass({

  render: function() {
    return(
      <HTMLSelect ref={this.props.ref} onChange={this.props.onChange} 
        value={this.props.defaultValue} options={AppConstants.maps} />
    )
  }
});

module.exports = MapSelect;