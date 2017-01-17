var React = require('react');
var CraftStore = require('../stores/CraftStore.js');

var CraftWatchMixin = function(cb){
  return {
    getInitialState:function(){
      return cb(this);
    },
    componentWillMount:function(){
      CraftStore.addChangeListener(this._onChange)
    },
    componentWillUnmount:function(){
      CraftStore.removeChangeListener(this._onChange)
    },
    _onChange:function(){
      this.setState(cb(this))
    }
  }
}

module.exports = CraftWatchMixin;
