var React = require('react');
var HSStore = require('../stores/HSStore.js');

var HighscoresWatchMixin = function(cb){
  return {
    getInitialState:function(){
      HSStore.init();
      return cb(this);
    },
    componentWillMount:function(){
      HSStore.addChangeListener(this._onChange)
    },
    componentWillUnmount:function(){
      HSStore.removeChangeListener(this._onChange)
    },
    _onChange:function(){
      this.setState(cb(this))
    }
  }
}

module.exports = HighscoresWatchMixin;
