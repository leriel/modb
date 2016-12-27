var AppDispatcher = require('../dispatcher/AppDispatcher')
  , EventEmitter = require('events').EventEmitter
  , AppConstants = require('../constants/AppConstants.js')
  , assign = require('object-assign')
  , CHANGE_EVENT = 'change'
  , _npcs = require('./NPCDB.json')
  , _store = []
  , _filters = {show:false,map:-1,orderBy:['map','n']}
  , _lastTerm = ''
  , _ = require('lodash')
;

var _findByItemId = function(itemId) {
  _store = [];
  var id = parseInt(itemId);
  _npcs.map(function(npc, idx){
    var found = false
      , i = 0
      , maxI = npc.temp.content.length;

    while (!found && i<maxI) {
      found = npc.temp.content[i++].id == id;
    }

    if (found) {
      _store.push(npc);
    }

  });

}

var _search = function(term) {
  var re = new RegExp(term.toLowerCase(), 'i');
  _store = [];
  // var min = parseInt(_filters.minPrice);
  // var max = parseInt(_filters.maxPrice);

  _npcs.map(function(npc, idx){
    if (
      npc && npc.n && npc.n.toLowerCase().match(re)
      && (_filters.map == -1 || npc.map == _filters.map)
      // && (_filters.minPrice=='' || min <= ip)
      // && (_filters.maxPrice=='' || max >= ip)
    ) {
      _store.push(npc);
    }
  });
  NPCStore.emitChange()
};

var NPCStore = assign({}, EventEmitter.prototype, {
  getResults: function() {
    return _store;
  },
  get: function(id) {
    return _.findWhere(_npcs, {id:parseInt(id)});
  },
  init: function() {
    _search(_lastTerm);
  },
  getFilters: function() {
    return _filters
  },
  findByItem: function(itemId) {
    var npcs = [];
    var id = parseInt(itemId);
    _npcs.map(function(npc, idx){
      var found = false
        , i = 0
        , maxI = npc.temp.content.length;

      while (!found && i<maxI) {
        found = npc.temp.content[i++].id == id;
      }

      if (found) {
        npcs.push(npc);
      }

    });
    return npcs;
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
      case AppConstants.ActionTypes.NPCS_BY_ITEM:
        _findByItemId(action.itemId);
      break;

      case AppConstants.ActionTypes.SET_NPC_MAP:
        _filters.map = action.map.trim() || -1;
        _search(_lastTerm);
      break;

      case AppConstants.ActionTypes.SEARCH:
        q = action.q.trim();
        _lastTerm = q;
        _search(q);
      break;

      case AppConstants.ActionTypes.TOGGLE_VENDOR_FILTERS:
        _filters.show = !_filters.show;
        NPCStore.emitChange();
      break;
    }


    return true; // No errors. Needed by promise in Dispatcher.
  })
});

module.exports = NPCStore;
