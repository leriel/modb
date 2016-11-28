var React = require('react');
var Router = require('react-router'); 
var Link = Router.Link;
var CraftStore = require('../stores/CraftStore.js');
var ForgingPattern = require('./ForgingPattern.jsx');
var ItemCraftMattsList = require('./ItemCraftMattsList.jsx');
var ItemGraphic = require('./ItemGraphic.jsx');
var FishingTool = require('./FishingTool.jsx');
var ItemStore = require('../stores/ItemStore.js');
var Util = require('../util.js');

var ItemCraftTab = React.createClass({
  mixins: [ Router.State ],

  render: function(){
    var id = this.getParams().itemId;

    var item = ItemStore.get(id);

    var craft = CraftStore.findByItemId(item.id);

    var formulas = {}
      , patterns = {}
      , recipes = null
      , haveFormulas = false
      , havePatterns = false
      , haveChances = true
      , craftMattsCollSpan = 2
    var kettle = (<td><ItemGraphic item={{n:'Kettle',img:{sheet:35,x:6,y:14}}} nolink /></td>);
    var campfire = (<td><ItemGraphic item={{n:'Campfire',img:{sheet:1,x:11,y:14}}} nolink /></td>);
    var furnace = (<td><ItemGraphic item={{n:'Furnace',img:{sheet:12,x:0,y:0}}} nolink /></td>);
    var well = (<td><ItemGraphic item={{n:'Water Well',img:{sheet:1,x:9,y:14}}} nolink /></td>);

    if (craft.formulas) {
      // TODO: have spells show altar & medal
      // TODO: have wood show tree & tool
      // TODO: have pet show evolve chain?
      for (var i in craft.formulas) {
        if (craft.formulas[i].pattern) {
          havePatterns = true;
          var key = Util.titleCase(craft.formulas[i].skill) + ' ' + item.n;
          patterns[key] = patterns[key] || [];
          patterns[key].push( (
            <tr key={"craftRow" + i}><td>
              <div className="row">
                <div className="col-sm-3">
                  <h5>Forumla (<span className="text-warning">{Util.chanceStr(craft.formulas[i])}</span>)</h5>
                  <ForgingPattern formula={craft.formulas[i]} />
                  <br className="clearfix" />
                </div>
                <div className="col-sm-9">
                  <h5>Material List</h5>
                  <ItemCraftMattsList formula={craft.formulas[i]} />
                </div>
              </div>
            </td></tr>
          ));
        } else if(craft.formulas[i].matts && craft.formulas[i].matts.length) {
          var tool;
          var title;
          if (craft.formulas[i].skill == 'cooking') {
            title = 'Cooking'+ ' ' + item.n;
            if (craft.formulas[i].n.toLowerCase().match(/sushi/)) {
              tool = kettle;
            } else {
              tool = campfire;
            }
          }
          if (craft.formulas[i].skill == 'jewelry') {
            if (craft.formulas[i].n.toLowerCase().match(/cut /)) {
              tool = ( <td><ItemGraphic item={ItemStore.getItem(297)} /></td>);
            } else {
              tool = furnace;
            }
          }
          if (craft.formulas[i].skill == 'forging') {
            tool = furnace;
          }
          if (craft.formulas[i].n.toLowerCase().match(/vial of water/)) {
            tool = well;
          }
          else if (craft.formulas[i].n.match(/Vial/)) {
            tool = furnace;
          }
          title = title || 'Crafting' + ' ' + item.n;
          formulas[title] = formulas[title] || []
          haveFormulas = true;
          craftMattsCollSpan = tool ? craft.formulas[i].matts.length + 1 : craft.formulas[i].matts.length;
          formulas[title].push( (
              <tr key={"craftRow" + i}>
                {tool}
                {craft.formulas[i].matts.map(function(matt, mattIdx){
                  var mattItem = ItemStore.getItem(matt.id);
                  return (
                    <td key={"mattItem"+mattIdx} className="c"><ItemGraphic item={mattItem} /><br />{matt.c>1?matt.c:''}
                    </td>
                  )
                })}
                <td>{Util.toPercent(craft.formulas[i].min_chance)}</td>
                <td>{Util.toPercent(craft.formulas[i].max_chance)}</td>
              </tr>
          ) );

        } else {
          switch(craft.formulas[i].skill) {
            case 'farming':
              haveFormulas = true;
              var key = 'Farming ' + item.n;
              haveChances = false;
              formulas[key] = formulas[key] || []
              craftMattsCollSpan = 5;
              formulas[key].push( (
                <tr key={"craftRow" + i}>
                  <td key="td1"><ItemGraphic item={ItemStore.getItem(753)} /></td>
                  <td key="td2"><ItemGraphic item={ItemStore.getItem(767)} /></td>
                  <td key="td3"><ItemGraphic item={ItemStore.getFarmingSeed(item)} /></td>
                  <td key="td4">{craft.formulas[i].duration} minutes</td>
                  <td key="td5"><ItemGraphic item={craft.formulas[i].source} nolink /></td>
                </tr>
              ));
              break;
            case 'fishing':
              haveFormulas = true;
              var key = 'Fishing ' + item.n;
              formulas[key] = formulas[key] || []
              craftMattsCollSpan = 2;
              formulas[key].push( (
                  <tr key={"craftRow" + i}>
                    <td key={"craftRowTd1"+i} style={{width:'50px'}}><FishingTool item={craft.formulas[i].source.n} /></td>
                    <td key={"craftRowTd2"+i}>{craft.formulas[i].source.n.replace(/Fish - /,'')}.</td>
                    <td key={"craftRowTd3"+i}>{Util.toPercent(craft.formulas[i].min_chance)}</td>
                    <td key={"craftRowTd4"+i}>{Util.toPercent(craft.formulas[i].max_chance)}</td>
                  </tr>
              ));
            break;
            case 'mining':
              haveFormulas = true;
              var key = 'Mining ' + item.n;
              formulas[key] = formulas[key] || []
              var tool;
              craftMattsCollSpan = 2;
              if (craft.formulas[i].n=='Sand') {
                tool = (<ItemGraphic item={ItemStore.getItem(286)} />)
              } else {
                tool = (<ItemGraphic item={ItemStore.getItem(23)} />)
              }
              formulas[key].push(  (
                  <tr key={"craftRow" + i}>
                    <td key={"craftRowTD1"+i} style={{width:'50px'}}><ItemGraphic item={craft.formulas[i].source} nolink={true} /></td>
                    <td key={"craftRowTD2"+i}>{tool}</td>
                    <td key={"craftRowTD3"+i}>{Util.toPercent(craft.formulas[i].min_chance)}</td>
                    <td key={"craftRowTD4"+i}>{Util.toPercent(craft.formulas[i].max_chance)}</td>
                  </tr>
              ));
            break;
            case 'woodcutting':
              haveFormulas = true;
              var key = 'Woodcutting ' + item.n;
              formulas[key] = formulas[key] || [];
              var reqTool = craft.formulas[i].requires_one_from;
              var tool;
              var source = craft.formulas[i].source;
              if (source.img && typeof source.img.x === 'object') {
                source = {
                  n: source.n,
                  img: {
                    sheet: source.img.sheet,
                    x: source.img.x[1],
                    y: source.img.y,
                  }
                }
              }
              if (reqTool) {
                tool = reqTool.map(function(t) {
                  var tKey = 'tool' + t;
                  return (<ItemGraphic key={tKey} item={ItemStore.getItem(t)} />);
                });
              }
              formulas[key].push(
                <tr key={"craftRow" + i}>
                  <td key={"craftRowTD1"+i} style={{width:'50px'}}><ItemGraphic item={source} nolink={true} /></td>
                  <td key={"craftRowTD2"+i}>{tool}</td>
                  <td key={"craftRowTD3"+i}>{Util.toPercent(craft.formulas[i].min_chance)}</td>
                  <td key={"craftRowTD4"+i}>{Util.toPercent(craft.formulas[i].max_chance)}</td>
                </tr>
              );
            break;
            default:
              1+1;
              // formulas[key].push(<tr key={'craftRow' + i} />)
          }
        }
      }
    }

    if (craft.asMatt && craft.asMatt.length) {
      recipes = (
        <div>
          <h4>Recipies {item.n} is a part of</h4>
          <table className="table table-bordered table-stripped">
            <thead>
              <tr>
                <th key="th1">Skill</th>
                <th key="th2">Level</th>
                <th key="th3" colSpan="2">Item</th>
                <th key="th4" className="hidden-sm hidden-xs">Recipe</th>
                <th key="th5">Min %</th>
                <th key="th6">Max %</th>
              </tr>
            </thead>
            <tbody>
              {craft.asMatt.map(function(matt, i){
                return (
                  <tr key={'mattItem' + i}>
                    <td key="td1">{Util.titleCase(matt.skill)}</td>
                    <td key="td2">{matt.level}</td>
                    <td key="td3"><ItemGraphic item={matt} /></td>
                    <td key="td4"><Link to="item" params={{itemId:matt.id}}>{matt.n}</Link></td>
                    <td key="td5" className="hidden-sm hidden-xs"><table><tr>{matt.matts.map(function(m,ii){
                      return (
                        <td key={"td"+ii} className="asMattCell" key={"asMattCell" + ii}><table><tr><td key="td1">{m.c}</td><td key="td2"><ItemGraphic item={ItemStore.getItem(m.id)} /></td></tr></table></td>
                      );
                    })}</tr></table></td>
                    <td key="td6">{matt.min_chance ? Math.round(matt.min_chance*100) + '%' : '-'}</td>
                    <td key="td7">{matt.max_chance ? Math.round(matt.max_chance*100) + '%' : '-'}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>

        </div>
      )
    }
    var formulaHtml;
    if (haveFormulas || havePatterns) {
      var pHtml, fHtml = null;

      if (havePatterns) {
        var kk = Object.keys(patterns);
        pHtml = (<div key="pHtml">{kk.map(function(k){
          var f = patterns[k];
          return (<div>
            <h4>{k}</h4><table className="table table-bordered">
            <tbody>{f}</tbody>
            </table>
          </div>)
        })}</div>);
        if (!haveFormulas) formulaHtml = pHtml;
      }

      if (haveFormulas) {
        console.log(formulas);
        var kk = Object.keys(formulas);
        fHtml = (<div>{kk.map(function(k){
          var chance1Th = '', chance2Th = '';
          if (haveChances) {
            chance1Th = (<th key={'formulaTh2'+k}>Min %</th>);
            chance2Th = (<th key={'formulaTh3'+k}>Max %</th>);
          }
          var f = formulas[k];
          return (<div key="fHtml">
            <h4>{k}</h4><table className="table table-bordered">
            <thead><tr>
              <th key={'formulaTh1'+k} colSpan={craftMattsCollSpan}>Items</th>
              {chance1Th}
              {chance2Th}
            </tr></thead>
            <tbody>{f}</tbody>
            </table>
          </div>)
        })}</div>);
        if (!havePatterns) formulaHtml = fHtml;
      }

      if (haveFormulas && havePatterns) {
        formulaHtml = (<div>{pHtml}{fHtml}</div>)
      }

    }


    if (formulaHtml && recipes) {
      return (
        <div className="row">
          <div className="col-sm-12">
            {formulaHtml}
            {recipes}
          </div>
        </div>
      );
    } else if (formulaHtml) {
      return formulaHtml;
    } else if (recipes) {
      return recipes;
    } else {
      return (<div>Item is not craftable, and not used in any known recipes.</div>);  
    }
    
    /*
    var p = this.props.item.params;
    var pk = Object.keys(p);
    var propCount = 0;

    var propStr = Object.keys(itemParamsKeyMap).map(function(k){
      if (pk.indexOf(k) > -1) {
        propCount++;
        return (
          <ItemProp key={k} name={itemParamsKeyMap[k]} value={p[k]} />
        )
      } else {
        return '';
      }
    });

    // add inventory slots for pets
    if (item.t == AppConstants.itemCatMap.PET && item.params.pet) {
      var pet = PetStore.getByItemId(item.id);
      if (pet && pet.params) {
        propCount++;
        propStr.push((<ItemProp key="petInvSlots" name="Inventory Slots" value={pet.params.inventory_slots} />))
      }
    }

    if (propCount) {
      return (
        <div>
        <h4>{AppConstants.itemCats[this.props.item.t]} Stats</h4>
        <ul className="list-group">
          {propStr}
        </ul>
        </div>
      );
    } else {
      return <div />;
    }
    */
  }
});

module.exports = ItemCraftTab;
