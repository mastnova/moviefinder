var AppActions = require('../actions/AppActions');

module.exports = {
  searchMovies: function(movie) {
    $.ajax({
      url: 'http://omdbapi.com/?s='+movie,
      dataType: 'json',
      cache: false,
      success: function(data) {
        AppActions.getMoviesResult(data.Search);
      }.bind(this),
      error: function(xhr, status, err) {
        alert(err);
      }.bind(this)
    });
  }
}
