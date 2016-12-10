var React = require('react');
var SearchStore = require('../stores/SearchStore.js');

var SearchStoreMixin = function(cb){
  return {
    getInitialState:function(){
      return cb(this);
    },
    componentWillMount:function(){
      SearchStore.addChangeListener(this._onChange)
    },
    componentWillUnmount:function(){
      SearchStore.removeChangeListener(this._onChange)
    },
    _onChange:function(){
      this.setState(cb(this))
    }
  }
}

module.exports = SearchStoreMixin;
