var AppConstants = require('../constants/AppConstants.js');
var AppDispatcher = require('../dispatcher/AppDispatcher.js');

var NPCActions = {
  search: function(term) {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.ActionTypes.SEARCH_NPCS,
      q: term
    })
  },
  toggleFilters: function() {
      AppDispatcher.handleViewAction({
        actionType: AppConstants.ActionTypes.TOGGLE_VENDOR_FILTERS
      });
  },
  setMap: function(map) {
      AppDispatcher.handleViewAction({
        actionType: AppConstants.ActionTypes.SET_NPC_MAP,
        map: map
      });
  },
  findByItem: function(itemId) {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.ActionTypes.NPCS_BY_ITEM,
      itemId: itemId
    });
  }
};

module.exports = NPCActions;
