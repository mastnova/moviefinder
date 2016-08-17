var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var AppAPI = require('../utils/appAPI.js');

var CHANGE_EVENT = 'change';

var _movies = [];
var _selected = '';

var AppStore = assign({}, EventEmitter.prototype, {
  emitChange: function(){
    this.emit(CHANGE_EVENT);
  },
  addChangeListener: function(callback) {
    this.on('change', callback);
  },
  removeChangeListener: function(callback) {
    this.removeListener('change', callback);
  },
  setMovies: function(movies) {
    _movies = movies;
  },
  getMovies: function() {
    return  _movies;
  },

});

AppDispatcher.register(function(payload) {
  var action = payload.action;

  switch(action.actionType) {
    case AppConstants.SEARCH_MOVIES:
      AppAPI.searchMovies(action.movie.title);
      AppStore.emit(CHANGE_EVENT);
      break;
    case AppConstants.SEARCH_MOVIES_RESULT:
      AppStore.setMovies(action.movie);
      AppStore.emit(CHANGE_EVENT);
      break;
  }

  return true;
})

module.exports = AppStore;
