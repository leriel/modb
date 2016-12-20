var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var SearchStore = require('../stores/SearchStore.js');
var SearchWatchMixin = require('../mixins/SearchWatchMixin.js');
var Constants = require('../constants/AppConstants.js');
var AppActions = require('../actions/AppActions.js');
var ItemGraphic = require('./ItemGraphic.jsx');
var SearchItemTableRow = require('./SearchItemTableRow.jsx');
var SearchItemRow = require('./SearchItemRow.js');
var Reactable = require('reactable');
var Table = Reactable.Table;

var ButtonGroup = require('react-bootstrap').ButtonGroup,
    Button = require('react-bootstrap').Button;

var HtmlSelect = require('./html/select.jsx');

function getSearchResults() {
  return {results:SearchStore.getResults(), filters:SearchStore.getFilters()};
}

function compareInt(a, b) {
  var sa = a|0;
  var sb = b|0;
  return sa > sb ? 1 : -1;
}

var Search = React.createClass({
  mixins: [ Router.State, SearchWatchMixin(getSearchResults) ],
  componentDidMount: function() {
    this.props.setPage('items')
    
  },
  _toggleFilters: function(e) {
    e.preventDefault();
    AppActions.toggleFilters();
  },
  _handleCat1Change: function(e) {
    var n = this.refs.cat1.getDOMNode();
    AppActions.setCat1(n.options[n.selectedIndex].value);
  },
  _handleCat2Change: function(e) {
    var n = this.refs.cat2.getDOMNode();
    AppActions.setCat2(n.options[n.selectedIndex].value);
  },
  _handleSubCatChange: function(e) {
    var n = this.refs.cat2.getDOMNode();
    AppActions.setSubCat(n.options[n.selectedIndex].value);
  },
  _handleMinPriceChange: function(e) {
    AppActions.setPrice('min', this.refs.minPrice.getDOMNode().value);
  },
  _handleMaxPriceChange: function(e) {
    AppActions.setPrice('max', this.refs.maxPrice.getDOMNode().value);
  },
  _outputGrid: function(e) {
    if (this.state.filters.output == 'grid') return;
    AppActions.setOutputFormat('grid');
  },
  _outputTabled: function(e) {
    if (this.state.filters.output == 'tabled') return;
    AppActions.setOutputFormat('tabled');
  },
  render: function(){
    var format = this.state.filters.output;
    var results = this.state.results.map(function(o,i){
      return format == 'tabled' ? (SearchItemRow(o)) : (
        <li key={'item_' + o.id}>
          <Link to="item" params={{itemId:o.id}}>
            <ItemGraphic item={o} nolink={true} /><br />
            {o.n}
          </Link>
        </li>
      );
    });

    var searchResults = format == 'grid' ? 
      (<ul className="search-results">{results}</ul>) :
      (
        <Table className="table table-bordered" data={results} sortable={[
          {
            column: 'Level',
            sortFunction: compareInt,
          },
          'Skill',
          'Price'
          , {
            column: 'Power',
            sortFunction: compareInt,
          }, {
            column: 'Aim',
            sortFunction: compareInt,
          }, {
            column: 'Armor',
            sortFunction: compareInt,
          }, {
            column: 'Magic',
            sortFunction: compareInt,
          }, {
            column: 'Speed',
            sortFunction: compareInt,
          }, {
            column: '- % cooldown',
            sortFunction: compareInt,
          }, {
            column: 'Archery',
            sortFunction: compareInt,
          },
        ]}/>
      )

    var filterPanelBodyClass = 'panel-body' + (this.state.filters.show ? '' : ' hide');
    var cat2Select = '';
    var cat1 = parseInt(this.state.filters.cat1);

    switch(parseInt(cat1)) {
      case 0: // Armor
      case 2: // Jewelry
        cat2Select = (<div className="col-sm-3">
          <label htmlFor="cat2">Sub Category</label>
          <HtmlSelect ref="cat2" id="cat2"
            onChange={this._handleCat2Change} 
            defaultValue={this.state.filters.cat2} 
            options={Constants.subCats[cat1]}></HtmlSelect>
          </div>);
        break;
      case 1: // Foods
      case 3: // Materials
      case 4: // Tools
      case 5: // Weapons
      case 8: // House
        cat2Select = (<div className="col-sm-3">
          <label htmlFor="cat2">Sub Category</label>
          <HtmlSelect ref="cat2" id="cat2"
            onChange={this._handleSubCatChange} 
            defaultValue={this.state.filters.subCat} 
            options={Constants.subCats[cat1]}></HtmlSelect>
          </div>);
        break;
    }

    return (
    <div>
      <article className="context">
        <div className="panel panel-default">
          <div className="panel-heading">
            <div className="pull-right button-toolbar">
              <div className="button-group">
                <a onClick={this._toggleFilters} className="btn btn-primary btn-xs" href="#">toggle filters</a>
              </div>
            </div>
            <h2 className="panel-title">Items</h2>
          </div>
          <div className={filterPanelBodyClass}>
            <form role="form">
              <div className="row">
                <div className="col-sm-3">
                  <div className="form-group">
                    <label htmlFor="cat1">Category</label>
                    <HtmlSelect ref="cat1" onChange={this._handleCat1Change} defaultValue={this.state.filters.cat1} options={Constants.itemCats} />
                  </div>
                </div>
                {cat2Select}
                <div className="col-sm-2">
                  <div className="form-group">
                    <label htmlFor="minPrice">Min Price</label>
                    <input type="text" id="minPrice" className="form-control" 
                      ref="minPrice" onChange={this._handleMinPriceChange} 
                      defaultValue={this.state.filters.minPrice} />
                  </div>
                </div>
                <div className="col-sm-2">
                  <div className="form-group">
                    <label htmlFor="maxPrice">Max Price</label>
                    <input type="text" id="maxPrice" className="form-control" 
                      ref="maxPrice" onChange={this._handleMaxPriceChange} 
                      defaultValue={this.state.filters.maxPrice} />
                  </div>
                </div>
                <div className="col-sm-2">
                  <div className="form-group">
                    <label htmlFor="outputFormat">Output Format</label>
                     <ButtonGroup>
                      <Button active={this.state.filters.output=='grid'} onClick={this._outputGrid}><i className="glyphicon glyphicon-th-large" /></Button>
                      <Button active={this.state.filters.output=='tabled'} onClick={this._outputTabled}><i className="glyphicon glyphicon-th-list" /></Button>
                    </ButtonGroup>
                  </div>
                </div>

              </div>
            </form>
          </div>
        </div>
        {searchResults}
      </article>
    </div>
    );
  }
});

module.exports = Search;
