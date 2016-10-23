var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var ItemGraphic = require('./ItemGraphic.jsx');
var util = require('../util.js');
var numeral = require('numeral');

var SearchItemTableRow = React.createClass({
  render: function() {
    var item = this.props.item;
    return (
        <tr key={"searchItemRow" + item.id}>
          <td key={'srTd1'+item.id} className="c">{util.getItemLevel(item)}</td>
          <td key={'srTd2'+item.id}><ItemGraphic item={item} /><br /></td>
          <td key={'srTd3'+item.id}><Link to="item" params={{itemId:item.id}}>{item.n}</Link></td>
          <td key={'srTd4'+item.id} className="hidden-xs">{util.getItemSkill(item)}</td>
          <td key={'srTd5'+item.id} className="r hidden-xs">{util.valOrDash(numeral(item.params.price).format('0,0'))}</td>
          <td key={'srTd6'+item.id} className="c hidden-xs">-</td>
          <td key={'srTd7'+item.id} className="c hidden-xs">{util.valOrDash(item.params.power)}</td>
          <td key={'srTd8'+item.id} className="c hidden-xs">{util.valOrDash(item.params.aim)}</td>
          <td key={'srTd9'+item.id} className="c hidden-xs">{util.valOrDash(item.params.armor)}</td>
          <td key={'srTd10'+item.id} className="c hidden-xs">{util.valOrDash(item.params.magic)}</td>
          <td key={'srTd11'+item.id} className="c hidden-xs">{util.valOrDash(item.params.speed)}</td>
        </tr>
    );
  }
});

module.exports = SearchItemTableRow;
