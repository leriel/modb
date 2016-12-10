var AppDispatcher = require('../dispatcher/AppDispatcher')
  , EventEmitter = require('events').EventEmitter
  , AppConstants = require('../constants/AppConstants.js')
  , assign = require('object-assign')
  , CHANGE_EVENT = 'change'
  , _items = require('./ItemDB.js')
  , util = require('../util.js')
  , _numItems = _items.length
;

var ItemStore = assign({}, EventEmitter.prototype, {
  getAll: function() {
    return util.sortByKey(_items, 'n');
  },
  get: function(id) {
    id = parseInt(id);
    for (var i=0;i<_numItems;i++) {
      if (parseInt(_items[i].id) == id) return _items[i];
    }
    return null;
  },
  getItem: function(id) {
    return this.get(id);
  },
  getFarmingSeed: function(item) {

    switch(item.id) {
      case 228: return this.getItem(794); // old leaf
      case 283: return this.getItem(778); // yarrow
      case 762: return this.getItem(763); // apple
      case 782: return this.getItem(789); // banana
      case 265: return this.getItem(1034); // cotton
      case 266: return this.getItem(1035); // bamboo
      case 1012: return this.getItem(1364); // flannel
      case 1013: return this.getItem(1358); // jute
      case 1014: return this.getItem(1359); //silk
    }

    var re = new RegExp(item.n + ' Seed');
    for (var i in _items) {
      if (_items[i].n.match(re)) {
        return _items[i];
      }
    }

    return false;
  },

  search: function(term) {
    var re = new RegExp(term.toLowerCase(), 'i');
    return util.sortByKey(_items.map(function(item, idx){
      return item.name.toLoserCase().match(re);
    }), 'n')
  },

  getEnchantChain: function(id) {
    var currentId = id;
    var found = false
    var chain = [];
    var origItem = null;
    var item;
    while (!found) {
      item = this.getItem(currentId);
      if (!origItem) origItem = item;
      chain.unshift(item);
      if (item.params.enchants_from) {
        currentId = parseInt(item.params.enchants_from);
      } else {
        found = true;
      }
    }
    found = false;
    var currentId=id;
    var currentItem = this.getItem(id);

    while(!found) {
      if (currentItem.params.enchant_id) {
        var nextItem = this.getItem(currentItem.params.enchant_id);
        chain.push(nextItem);
        currentItem = nextItem;
      } else {
        found = true;
      }
    }
    return chain;
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
    var text;
/*
    switch(action.actionType) {
      case AppCon.SEARCH:
        q = action.q.trim();

        break;

      case SearchConstants.TODO_DESTROY:
        destroy(action.id);
        TodoStore.emitChange();
        break;

      // add more cases for other actionTypes, like TODO_UPDATE, etc.
    }
*/
    return true; // No errors. Needed by promise in Dispatcher.
  })

});

module.exports = ItemStore;