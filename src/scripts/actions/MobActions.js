var AppConstants = require('../constants/AppConstants.js');
var AppDispatcher = require('../dispatcher/AppDispatcher.js');

var NPCActions = {
  search: function(term) {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.ActionTypes.SEARCH_MOBS,
      q: term
    })
  },
  toggleFilters: function() {
      AppDispatcher.handleViewAction({
        actionType: AppConstants.ActionTypes.TOGGLE_MOB_FILTERS
      });
  },
  setFilters: function(filters) {
      AppDispatcher.handleViewAction({
        actionType: AppConstants.ActionTypes.SET_MOB_FILTERS,
        filters: filters
      });
  },
  setMap: function(map) {
      AppDispatcher.handleViewAction({
        actionType: AppConstants.ActionTypes.SET_MOB_MAP,
        map: map
      });
  },
  findByItem: function(itemId) {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.ActionTypes.MOBS_BY_ITEM,
      itemId: itemId
    });
  }
};

module.exports = NPCActions;
