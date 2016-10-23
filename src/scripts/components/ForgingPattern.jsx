var React = require('react');
var Router = require('react-router'); 
var Link = Router.Link;
var ItemStore = require('../stores/ItemStore.js');
var ItemGraphic = require('./ItemGraphic.jsx');

var ForgingPattern = React.createClass({

  render: function(){
    var formula = this.props.formula;
    var pattern = formula.pattern;

    var cells = [];
    for (var row=0; row <4; row++) {
      for (var col=0; col<4; col++) {
        if (pattern[row] && pattern[row][col] != undefined && pattern[row][col]!=-1) {
          var item = ItemStore.getItem(pattern[row][col]);
          cells.push(<div className="forge-cell"><ItemGraphic item={item} /></div>)
        } else {
          cells.push(<div className="forge-cell"></div>)
        }
      }
    }
    return(<div className="forge-pattern">{cells}</div>)
  }
});

module.exports = ForgingPattern;
