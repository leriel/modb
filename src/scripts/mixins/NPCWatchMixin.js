var React = require('react');
var NPCStore = require('../stores/NPCStore.js');

var NPCWatchMixin = function(cb){
  return {
    getInitialState:function(){
      return cb(this);
    },
    componentWillMount:function(){
      NPCStore.addChangeListener(this._onChange)
    },
    componentWillUnmount:function(){
      NPCStore.removeChangeListener(this._onChange)
    },
    _onChange:function(){
      this.setState(cb(this))
    }
  }
}

module.exports = NPCWatchMixin;
