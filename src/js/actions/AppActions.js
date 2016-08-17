var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

var AppActions = {
  searchMovie: function(movie) {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.SEARCH_MOVIES,
      movie: movie
    });
  },

  getMoviesResult: function(movie) {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.SEARCH_MOVIES_RESULT,
      movie: movie
    });
  }
}

module.exports = AppActions;
