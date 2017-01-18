var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var AppConstants = require('../constants/AppConstants.js');
var assign = require('object-assign');
var CHANGE_EVENT = 'change';
var _items = require('./ItemDB.json');
var util = require('../util.js');
var _store = [];
var _lastTerm = '';
var _filters = {
  show:false,
  cat1:-1,
  cat2:-1,
  subCat:-1,
  minLevel:'',
  maxLevel:'',
  minPrice:'',
  maxPrice:'',
  output: 'grid'
};
window.SearchStoreFilters = _filters;

var _search = function(term) {
  var re = new RegExp(term.toLowerCase(), 'i');
  var tmpStore = [];
  var minLevel = parseInt(_filters.minLevel);
  var maxLevel = parseInt(_filters.maxLevel);
  var min = parseInt(_filters.minPrice);
  var max = parseInt(_filters.maxPrice);
  _items.map(function(item, idx) {
    var ip = parseInt(item.params.price);
    var lvl = util.getItemLevel(item) | 0;
    if (
      item && item.n && item.n.toLowerCase().match(re)
      && (_filters.cat1==-1 || parseInt(item.t) == _filters.cat1)
      && (_filters.cat2==-1 || parseInt(item.params.slot) == _filters.cat2)
      && (_filters.subCat==-1 || parseInt(item.params.sc) == _filters.subCat)
      && (_filters.minLevel=='' || minLevel <= lvl)
      && (_filters.maxLevel=='' || maxLevel >= lvl)
      && (_filters.minPrice=='' || min <= ip)
      && (_filters.maxPrice=='' || max >= ip)
    ) {
      tmpStore.push(item);
    }
  });
  _store = util.sortByKey(tmpStore, 'n');
  SearchStore.emitChange()
};

var SearchStore = assign({}, EventEmitter.prototype, {
  init: function() {
    return _search('');
  },
  getResults: function() {
    return _store;
  },
  getFilters: function() {
    return _filters
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },
  /**
   * @param {function} callback
   */
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  /**
   * @param {function} callback
   */
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },


  dispatcherIndex: AppDispatcher.register(function(payload) {
    var action = payload.action;
    var q;

    switch(action.actionType) {
      case AppConstants.ActionTypes.SET_SEARCH_CAT1:
        _filters.cat1 = parseInt(action.cat1);
        _filters.cat2 = -1
        _filters.subCat = -1
        _search(_lastTerm);
        break;
      case AppConstants.ActionTypes.SET_SEARCH_CAT2:
        _filters.cat2 = parseInt(action.cat2);
        _search(_lastTerm);
        break;
      case AppConstants.ActionTypes.SET_SEARCH_SUB_CAT: // special category added my modb export script
        _filters.subCat = parseInt(action.subCat);
        _search(_lastTerm);
        break;
      case AppConstants.ActionTypes.SET_MIN_LEVEL:
        _filters.minLevel = action.minLevel == '' ? '' : parseInt(action.minLevel);
        _search(_lastTerm);
        break;
      case AppConstants.ActionTypes.SET_MAX_LEVEL:
        _filters.maxLevel = action.maxLevel == '' ? '' : parseInt(action.maxLevel);
        _search(_lastTerm);
        break;
      case AppConstants.ActionTypes.SET_MIN_PRICE:
        _filters.minPrice = action.minPrice == '' ? '' : parseInt(action.minPrice);
        _search(_lastTerm);
        break;
      case AppConstants.ActionTypes.SET_MAX_PRICE:
        _filters.maxPrice = action.maxPrice == '' ? '' : parseInt(action.maxPrice);
        _search(_lastTerm);
        break;
      case AppConstants.ActionTypes.TOGGLE_FILTERS:
        _filters.show = !_filters.show;
        SearchStore.emitChange();
        break;
      case AppConstants.ActionTypes.SET_OUTPUT_FORMAT:
        _filters.output = action.format.trim();
        _search(_lastTerm);
        break;
      case AppConstants.ActionTypes.SEARCH:
        q = action.q.trim();
        _lastTerm = q;
        _search(q);
        break;
      default:
        break;
    }


    return true; // No errors. Needed by promise in Dispatcher.
  })
});

module.exports = SearchStore;
