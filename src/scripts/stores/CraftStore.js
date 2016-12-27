var AppDispatcher = require('../dispatcher/AppDispatcher')
  , EventEmitter = require('events').EventEmitter
  , AppConstants = require('../constants/AppConstants.js')
  , assign = require('object-assign')
  , CHANGE_EVENT = 'change'
  , ItemStore = require('./ItemStore.js')
  , _crafts = require('./CraftDB.json')
  , _store = []
  , _filters = {show:false}
  , _lastTerm = ''
;

var _findByItemId = function(itemId) {
  var ret = {
    asMatt:[],
    formulas: []
  };

  var id = parseInt(itemId);
  _crafts.map(function(craft, idx){
    var found = false
      , i = 0;
    if (parseInt(craft.id) == id) {
      ret.formulas.push(craft);
    } else { // jewelry/alch/carp
      var maxI = craft.matts.length;
      while (i < maxI) {
        if (parseInt(craft.matts[i].id) == id) {
          var o = craft;
          var it = ItemStore.getItem(craft.id);
          o.img = it.img;
          ret.asMatt.push(o);
          i=maxI;
        }
        i++;
      }
    }
  });
  if (!ret.formulas.length) ret.formulas = null;
  return ret;

}

var _search = function(term) {
  var re = new RegExp(term.toLowerCase(), 'i');
  _store = [];
  // var min = parseInt(_filters.minPrice);
  // var max = parseInt(_filters.maxPrice);

  _crafts.map(function(item, idx){
    if (
      item && item.n && item.n.toLowerCase().match(re)
      // && (_filters.cat1==-1 || parseInt(item.t) == _filters.cat1)
      // && (_filters.minPrice=='' || min <= ip)
      // && (_filters.maxPrice=='' || max >= ip)
    ) {
      _store.push(item);
    }
  });
  CraftStore.emitChange()
};

var CraftStore = assign({}, EventEmitter.prototype, {
  getResults: function() {
    return _store;
  },
  getFilters: function() {
    return _filters
  },
  findByItemId: function(itemId) {
    return _findByItemId(itemId);
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
      case AppConstants.ActionTypes.SEARCH_CRAFTS:
        q = action.q.trim();
        _lastTerm = q;
        _search(q);
        break;
    }


    return true; // No errors. Needed by promise in Dispatcher.
  })
});

module.exports = CraftStore;
