var AppDispatcher = require('../dispatcher/AppDispatcher')
  , EventEmitter = require('events').EventEmitter
  , AppConstants = require('../constants/AppConstants.js')
  , assign = require('object-assign')
  , CHANGE_EVENT = 'change'
  , util = require('../util.js')
  , _data = {}
  , _dataLoaded = false
  , _store = []
  , _lastTerm = ''
  , _=require('lodash')
  , HS_URL = '/hs.json'
  , HS_INTERVAL = 5 // minutes
  , _interval = false
  , _filters = {
    stat:'total',
    q: '',
  }
;

window.HS = {_data:function() { return _data},_store: function(){return _store }};


var _search = function() {
  if (!_dataLoaded) return;

  var re = new RegExp(_filters.q.toLowerCase(), 'i');
  _store = [];

  _data[_filters.stat].map(function(s,i){
    if (
      s && s.u && s.u.toLowerCase().match(re)
    ) {
      _store.push(s);
    }
  });
  HSStore.emitChange()
};


/**
 * Called when HS are successfully loaded via AJAX.
 *
 * @param {String} content Response from the server
 * @param {XMLHttpRequest} xhr
 */
var _loadComplete = function (content, xhr) {
  _data = JSON.parse(content);
  _dataLoaded = true;
  _search();

}

/**
 * Does an AJAX load of the specified URL.
 *
 * @param {String} url        URL to load
 * @param {Object} rawData    Object containing data to send in request. If
 *                            specified, a post is done. Otherwise, a get is
 *                            done.
 * @param {Function} callback Function to call once request returns
 */
var _load = function (url, rawData, callback) {
  if (_dataLoaded) {
    // for any indicators that HS are being (re)loaded
    _dataLoaded = false;
    HSStore.emitChange();
  }

  var xhr = new XMLHttpRequest();
  var data;
  if (rawData) {
    // Assume anything with data is a POST request
    xhr.open('post', url, true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    data = Object.keys(rawData)
      .map(function(key) {
        return encodeURIComponent(key) + '=' + encodeURIComponent(rawData[key]);
      })
      .join('&');
  } else {
    // No data, use a GET request
    xhr.open('get', url + '?cachebust=' + Date.now(), true);
  }

  xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      callback(xhr.responseText, xhr);
    }
  }
  xhr.send(data);
  return xhr;
}

var HSStore = assign({}, EventEmitter.prototype, {
  init: function() {
    _load(HS_URL, null, _loadComplete);
    _interval = window.setInterval(function(){
      _load(HS_URL, null, _loadComplete);
    }, HS_INTERVAL*60*1000);

  },
  
  getResults: function() {
    return _store;
  },
  
  getFilters: function() {
    return _filters
  },
  
  getStatList: function() {
    if (!_dataLoaded) {
      return [];
    }
    return Object.keys(_data);
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
      case AppConstants.ActionTypes.SEARCH_HS:
        q = action.q.trim();
        _lastTerm = q;
        _search(q);
      break;
    }

    return true; // No errors. Needed by promise in Dispatcher.
  })
});

module.exports = HSStore;

