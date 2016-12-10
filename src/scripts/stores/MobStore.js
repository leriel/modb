var AppDispatcher = require('../dispatcher/AppDispatcher')
  , EventEmitter = require('events').EventEmitter
  , AppConstants = require('../constants/AppConstants.js')
  , assign = require('object-assign')
  , CHANGE_EVENT = 'change'
  , util = require('../util.js')
  , _mobs = require('./MobDB.js')
  , _store = []
  , _lastTerm = ''
  , _=require('lodash')
  , _filters = {
    show:false,
    map:-1,
    orderBy:['n'],
    levelMin: '',
    levelMax: '',
    strMin: '',
    strMax: '',
    magBlockMin: '',
    magBlockMax: '',
    meleeBlockMin: '',
    meleeBlockMax: '',
    accMin: '',
    accMax: '',
    defMin: '',
    defMax: '',
    HPMin: '',
    HPMax: '',

  }
;
var _search = function(term) {
  var re = new RegExp(term.toLowerCase(), 'i');
  _store = [];

  _mobs.map(function(item, idx) {
    if (
      item && item.n && item.n.toLowerCase().match(re)
      && (_filters.map==-1 || item.locations[_filters.map])
      && (_filters.levelMin=='' || parseInt(_filters.levelMin) <= parseInt(util.calcLevel(item)))
      && (_filters.levelMax=='' || parseInt(_filters.levelMax) >= parseInt(util.calcLevel(item)))
      && (_filters.strMin=='' || parseInt(_filters.strMin) <= parseInt(item.temp.total_strength))
      && (_filters.strMax=='' || parseInt(_filters.strMax) >= parseInt(item.temp.total_strength))
      && (_filters.magBlockMin=='' || parseInt(_filters.magBlockMin) <= parseInt(item.temp.magic_block|0))
      && (_filters.magBlockMax=='' || parseInt(_filters.magBlockMax) >= parseInt(item.temp.magic_block|0))
      && (_filters.meleeBlockMin=='' || parseInt(_filters.meleeBlockMin) <= parseInt(item.temp.melee_block|0))
      && (_filters.meleeBlockMax=='' || parseInt(_filters.meleeBlockMax) >= parseInt(item.temp.melee_block|0))
      && (_filters.accMin=='' || parseInt(_filters.accMin) <= parseInt(item.temp.total_accuracy))
      && (_filters.accMax=='' || parseInt(_filters.accMax) >= parseInt(item.temp.total_accuracy))
      && (_filters.defMin=='' || parseInt(_filters.defMin) <= parseInt(item.temp.total_defense))
      && (_filters.defMax=='' || parseInt(_filters.defMax) >= parseInt(item.temp.total_defense))
      && (_filters.HPMin=='' || parseInt(_filters.HPMin) <= parseInt(item.params.health))
      && (_filters.HPMax=='' || parseInt(_filters.HPMax) >= parseInt(item.params.health))
    ) {
      _store.push(item);
    }
  });
  MobStore.emitChange()
};

var MobStore = assign({}, EventEmitter.prototype, {
  getResults: function() {
    return _store;
  },
  getFilters: function() {
    return _filters
  },
  get: function(id) {
    return _.findWhere(_mobs, {id:parseInt(id)});
  },
  init: function() {
    _search(_lastTerm);
  },

  findByItem: function(itemId) {
    var mobs = [];
    var id = parseInt(itemId);
    _mobs.map(function(mob, idx){
      var found = false
        , i = 0
        , maxI = mob.params.drops.length
        , chance = 0;

      while (!found && i<maxI) {
        if (mob.params.drops[i].id == id) {
          found = true;
          chance = mob.params.drops[i].chance;
        }
        i++;
      }

      if (found) {
        mobs.push({id:mob.id,n:mob.n,chance:chance,img:mob.img,locations:mob.locations});
      }

    });
    return mobs;
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
      case AppConstants.ActionTypes.SEARCH:
        q = action.q.trim();
        _lastTerm = q;
        _search(q);
      break;
      case AppConstants.ActionTypes.TOGGLE_MOB_FILTERS:
        _filters.show = !_filters.show;
        MobStore.emitChange();
      break;
      case AppConstants.ActionTypes.SET_MOB_MAP:
        _filters.map = action.map.trim() || -1;
        _search(_lastTerm);
      break;
      case AppConstants.ActionTypes.SET_MOB_FILTERS:
        Object.keys(action.filters).map(function(k){
          if (k=='map') {
            _filters.map = action.filters.map || -1
          } else {
            _filters[k] = action.filters[k];  
          }
          
        })
        _search(_lastTerm);
      break;
    }


    return true; // No errors. Needed by promise in Dispatcher.
  })
});

module.exports = MobStore;
