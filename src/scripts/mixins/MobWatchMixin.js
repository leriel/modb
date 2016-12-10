var React = require('react');
var MobStore = require('../stores/MobStore.js');

var MobWatchMixin = function(cb){
  return {
    getInitialState:function(){
      return cb(this);
    },
    componentWillMount:function(){
      MobStore.addChangeListener(this._onChange)
    },
    componentWillUnmount:function(){
      MobStore.removeChangeListener(this._onChange)
    },
    _onChange:function(){
      this.setState(cb(this))
    }
  }
}

module.exports = MobWatchMixin;
