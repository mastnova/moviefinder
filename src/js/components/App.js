var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');
var SearchForm = require('./SearchForm.js');
var MovieResults = require('./MovieResults.js');

var getAppStore = function() {
  return { movies: AppStore.getMovies()};
}

var App = React.createClass({

  getInitialState: function() {
    return getAppStore();
  },

  componentDidMount: function() {
    AppStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    AppStore.removeChangeListener(this._onChange);
  },

  render: function(){
    if (this.state.movies.length) {
      var movieResults = <MovieResults movies={this.state.movies}/>;
    } else {
      var movieResults = '';
    }
    return (
      <div>
        <SearchForm />
        {movieResults}
      </div>
    )
  },

  _onChange: function() {
    this.setState(getAppStore());
  }

});

module.exports = App;
