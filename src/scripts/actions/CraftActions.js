var AppConstants = require('../constants/AppConstants.js');
var AppDispatcher = require('../dispatcher/AppDispatcher.js');

var CraftActions = {
  toggleFilters: function() {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.ActionTypes.TOGGLE_CRAFT_FILTERS
    });
  },
  setFilters: function(filters) {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.ActionTypes.SET_CRAFT_FILTERS,
      filters: filters
    });
  },
};

module.exports = CraftActions;
