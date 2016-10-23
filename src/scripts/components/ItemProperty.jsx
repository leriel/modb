var React = require('react');
var ItemProperty = React.createClass({
  render: function() {
    var badgecl = this.props.badgecl || 'badge';
    return (
      <li className="list-group-item">
        <span className={badgecl}>{this.props.value}</span>
        {this.props.name}
      </li>
    );
  }
});

module.exports = ItemProperty;
