var AppConstants = require('../constants/AppConstants.js');
var AppDispatcher = require('../dispatcher/AppDispatcher.js');

var AppActions = {
  search: function(term) {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.ActionTypes.SEARCH,
      q: term
    })
  },
  setCat1: function(cat1) {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.ActionTypes.SET_SEARCH_CAT1,
      cat1: cat1
    });
  },
  setCat2: function(cat2) {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.ActionTypes.SET_SEARCH_CAT2,
      cat2: cat2
    });
  },
  setSubCat: function(subCat) {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.ActionTypes.SET_SEARCH_SUB_CAT,
      subCat: subCat
    });
  },
  toggleFilters: function() {
      AppDispatcher.handleViewAction({
        actionType: AppConstants.ActionTypes.TOGGLE_FILTERS
      });
  },
  setLevel: function(whichLevel, level) {
    if (whichLevel == 'min') {
      AppDispatcher.handleViewAction({
        actionType: AppConstants.ActionTypes.SET_MIN_LEVEL,
        minLevel: level
      });
    } else {
      AppDispatcher.handleViewAction({
        actionType: AppConstants.ActionTypes.SET_MAX_LEVEL,
        maxLevel: level
      });
    }
  },
  setPrice: function(whichPrice, price) {
    if (whichPrice == 'min') {
      AppDispatcher.handleViewAction({
        actionType: AppConstants.ActionTypes.SET_MIN_PRICE,
        minPrice: price
      });
    } else {
      AppDispatcher.handleViewAction({
        actionType: AppConstants.ActionTypes.SET_MAX_PRICE,
        maxPrice: price
      });
    }
  },
  setOutputFormat: function(format){
    AppDispatcher.handleViewAction({
      actionType: AppConstants.ActionTypes.SET_OUTPUT_FORMAT,
      format: format
    });
  },
};

module.exports = AppActions;
