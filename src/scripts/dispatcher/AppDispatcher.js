'use strict';

var Dispatcher = require('flux').Dispatcher
  , Constants = require('../constants/AppConstants.js')
  // , PayloadSources = require('../constants/PayloadSources')
  , assign = require('object-assign')
    ;

var AppDispatcher = assign(new Dispatcher(), {
/*
  handleServerAction(action) {

    if (!action.type) {
      throw new Error('Empty action.type: you likely mistyped the action.');
    }

    this.dispatch({
      source: PayloadSources.SERVER_ACTION,
      action: action
    });
  },
*/
  handleViewAction: function(action) {

    if (!action.actionType) {
      throw new Error('Empty action.actionType: you likely mistyped the action.');
    }

    this.dispatch({
      source: Constants.PayloadSources.VIEW_ACTION,
      action: action
    });
  }
});

module.exports = AppDispatcher;
