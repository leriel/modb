var React = require('react');
var MobStore = require('../stores/MobStore.js');
var NPCStore = require('../stores/NPCStore.js');
var SearchStore = require('../stores/SearchStore.js');

var MobWatchMixin = function(cb){
  return {
    getInitialState:function(){
      MobStore.init();
      SearchStore.init();
      NPCStore.init()
      return cb(this);
    },
    componentWillMount:function(){
      MobStore.addChangeListener(this._onChange)
      NPCStore.addChangeListener(this._onChange)
      SearchStore.addChangeListener(this._onChange)
    },
    componentWillUnmount:function(){
      MobStore.removeChangeListener(this._onChange)
      NPCStore.removeChangeListener(this._onChange)
      SearchStore.removeChangeListener(this._onChange)
    },
    _onChange:function(){
      this.setState(cb(this))
    }
  }
}

module.exports = MobWatchMixin;
