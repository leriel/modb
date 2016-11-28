var React = require('react');
var Router = require('react-router'); 
var Link = Router.Link;
var ItemGraphic = require('./ItemGraphic.jsx')
var numeral = require('numeral');
var PetStore = require('../stores/PetStore.js')
  , ItemStore = require('../stores/ItemStore.js');

var PetEats = require('./PetEats.jsx');

var PetTable = React.createClass({
  // mixins: [ Router.State ],
  render: function(){

    var petName = function(n) {
      return n.replace(/ ?\[(Common|Rare|Legendary|Ancient)\]/, '');
    }

    if (!this.props.pets.length) {
      return (<div>There is no breeding information for this item</div>)
    }

    var petRows = [];
    var pairsSeen = [];
    for (var i in this.props.pets) {
      var a = this.props.pets[i];

      var p1 = PetStore.get(a.id);
      for (var j in a.params.likes) {
        var b = a.params.likes[j];
        var p2 = PetStore.get(b.pet_id);
        var time = Math.max(p1.params.happiness, p2.params.happiness);
        var breedingLevel = Math.max(p1.params.breeding_level, p2.params.breeding_level);
        if (!petRows[breedingLevel]) {
          petRows[breedingLevel] = [];
        }
        var parIndex = p1.id + '_' + p2.id;
        var parIndex2 = p2.id + '_' + p1.id;
        var rowSpan = b.returns.length;

        // weed out duplicates (eg, donkey & horror steed both eat hay.)
        if (pairsSeen.indexOf(parIndex)==-1 && pairsSeen.indexOf(parIndex2)==-1) {
          for (var k in b.returns) {
            var c =b.returns[k];
            var off = PetStore.get(c.pet_id);
            var maxChance = c.max_chance*100;
            var minChance = c.base_chance*100;
            var p1Insurance = numeral(p1.params.insurance_cost[0]).format('0,0');
            var p2Insurance = numeral(p2.params.insurance_cost[0]).format('0,0');
            if (pairsSeen.indexOf(parIndex)==-1) {
              pairsSeen.push(parIndex);
              var p1Eats, p2Eats;
              // if (!this.props.condensed) {
                p1Eats = (<PetEats pet={p1} />);
                p2Eats = (<PetEats pet={p2} />);
              // }
              
              petRows[breedingLevel].push(<tr key={'petRow'+i+'_'+j+'_'+k}>
                <td className="c" rowSpan={rowSpan}>{breedingLevel}</td>
                <td className="c" rowSpan={rowSpan}>
                  <Link to="item" params={{itemId:p1.item_id}}>
                    <ItemGraphic item={ItemStore.getItem(p1.item_id)} nolink="1" cl="centered-div" /><br />
                    {petName(p1.n)}
                  </Link>
                  <div>Insurance: {p1Insurance}</div>
                  {p1Eats}
                </td>
                <td className="c" rowSpan={rowSpan}>
                  <Link to="item" params={{itemId:p2.item_id}}>
                    <ItemGraphic item={ItemStore.getItem(p2.item_id)} nolink="1" cl="centered-div"  /><br />
                    {petName(p2.n)}
                  </Link>
                  <div>Insurance: {p2Insurance}</div>
                  {p2Eats}
                </td>
                <td className="c">
                  <Link to="item" params={{itemId:off.item_id}}>
                    <ItemGraphic item={ItemStore.getItem(off.item_id)} nolink="1" cl="centered-div" /><br />
                    {petName(off.n)}
                  </Link>
                </td>
                <td className="c">{numeral(minChance).format('0')}%</td>
                <td className="c">{numeral(maxChance).format('0')}%</td>
                <td className="c">{numeral(maxChance - minChance).format('0')}</td>
                <td className="c" rowSpan={rowSpan}>{time}</td>
                <td className="r" rowSpan={rowSpan}>{numeral(b.xp).format('0,0')}</td>
              </tr>);
            } else {
              petRows[breedingLevel].push(<tr key={'petRow'+i+'_'+j+'_'+k}>
                <td className="c">
                  <Link to="item" params={{itemId:off.item_id}}>
                    <ItemGraphic item={ItemStore.getItem(off.item_id)} nolink="1" cl="centered-div" /><br />
                    {petName(off.n)}
                  </Link>
                </td>
                <td className="c">{numeral(minChance).format('0')}%</td>
                <td className="c">{numeral(maxChance).format('0')}%</td>
                <td className="c">{numeral(maxChance - minChance).format('0')}</td>
              </tr>);
            }
          }
        }
      }
    }

    var heading = this.props.heading ? (<h4>{this.props.heading}</h4>) : '';
    return (
      <div>{heading}
      <table className="table table-bordered">
        <thead><tr>
          <th>Level</th>
          <th>Parent 1</th>
          <th>Parent 2</th>
          <th>Offspring</th>
          <th>% Min</th>
          <th>% Max</th>
          <th>Grass</th>
          <th>Time (min)</th>
          <th>Exp</th>
        </tr></thead>
        <tbody>{petRows.map(function(rows,breedingLevel){return rows;})}</tbody>
      </table>
      </div>
    );
  }
});

module.exports = PetTable;
