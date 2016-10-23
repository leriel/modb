var AppDispatcher = require('../dispatcher/AppDispatcher')
  , EventEmitter = require('events').EventEmitter
  , AppConstants = require('../constants/AppConstants.js')
  , assign = require('object-assign')
  , CHANGE_EVENT = 'change'
  , _pets = require('./PetDB.js')
  , _store = []
  , _filters = {show:false,cat1:-1,cat2:-2,minPrice:'',maxPrice:''}
  , _lastTerm = ''
;

var _search = function(term) {
  var re = new RegExp(term.toLowerCase(), 'i');
  _store = [];
  // var min = parseInt(_filters.minPrice);
  // var max = parseInt(_filters.maxPrice);

  _pets.map(function(item, idx){
    if (
      item && item.n && item.n.toLowerCase().match(re)
      // && (_filters.cat1==-1 || parseInt(item.t) == _filters.cat1)
      // && (_filters.minPrice=='' || min <= ip)
      // && (_filters.maxPrice=='' || max >= ip)
    ) {
      _store.push(item);
    }
  });
  PetStore.emitChange()
};

var PetStore = assign({}, EventEmitter.prototype, {
  getResults: function() {
    return _store;
  },
  get: function(id) {
    for (var i in _pets) {
      if (_pets[i].id == id) return _pets[i];
    }
  },
  getAll: function() {
    return _pets;
  },
  getFilters: function() {
    return _filters
  },
  getByItemId:function(itemId) {
    itemId = parseInt(itemId);
    for (var i=0;i<_pets.length;i++) {
      if (_pets[i].id == itemId) {
        return _pets[i];
      }
    }
    return null;
  },

  findPetsThatEat: function(itemId) {
    itemId = itemId.toString();
    var ret = [];
    for (var i=0;i<_pets.length;i++) {
      if (_pets[i].params.eats && Object.keys(_pets[i].params.eats).indexOf(itemId)>-1) {
        ret.push(_pets[i]);
      }
    }
    return ret;
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

    switch(action.actionType) {
      case AppConstants.ActionTypes.SEARCH_PETS:
        q = action.q.trim();
        _lastTerm = q;
        _search(q);
        break;
    }


    return true; // No errors. Needed by promise in Dispatcher.
  })
});

module.exports = PetStore;
