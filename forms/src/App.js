import React, { Component } from 'react';
import MoviesList from './MoviesList';
import './App.css';
import { v4 as uuid } from 'uuid';

const moviesData = [
  { 'hasOscars': false, 'title': 'The Shawshank Redemption', 'director': 'Frank Darabont', 'rate': '9.3', 'id': 0 },
  { 'hasOscars': true, 'title': 'The Godfather', 'director': 'Francis Ford Coppola', 'rate': '9.2', 'id': 1 },
  { 'hasOscars': true, 'title': 'The Godfather: Part II', 'director': 'Francis Ford Coppola', 'rate': '9.0', 'id': 2 },
  { 'hasOscars': true, 'title': 'The Dark Knight', 'director': 'Christopher Nolan', 'rate': '9.0', 'id': 3 },
  { 'hasOscars': false, 'title': '12 Angry Men', 'director': 'Sidney Lumet', 'rate': '8.9', 'id': 4 }
];

class App extends Component {

  state = {
    movies: moviesData,
    title: '',
    director: '',
    hasOscars: false
    // movies: []
  }

  addMovie = () => {
    const newMovie = { 'hasOscars': true, 'title': 'Interstellar', 'director': 'Christopher Nolan', 'rate': '8.6', 'id': 31 };
    this.setState((state, props) => ({
      movies: state.movies.concat(newMovie)
    }))
  }

  // handleTitleChange = event => {
  //   this.setState({
  //     title: event.target.value
  //   })
  // }

  // handleDirectorChange = event => {
  //   this.setState({
  //     director: event.target.value
  //   })
  // }

  handleChange = event => {
    // const { name, value } = event.target;
    const target = event.target;
    const name = target.name;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value
    })
  }

  // handleCheckboxChange = event => {
  //   this.setState({
  //     hasOscars: event.target.checked
  //   })
  // }

  handleSubmit = event => {
    event.preventDefault();
    const { title, director, hasOscars } = this.state;
    const newMovie = {
      title,
      director,
      hasOscars,
      id: uuid()
    }
    console.log(newMovie);
    this.setState((state, props) => ({
      movies: [newMovie, ...state.movies],
      title: '',
      director: '',
      hasOscars: false
    }))
  }

  render() {
    // const movieListItems = this.state.movies.map((movie) => (<li key={movie.id} >{movie.title}</li>));
    // console.log(movieListItems);

    return (
      <div className="App">
        <h1>Add a movie</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="title">Title: </label>
          <input
            type="text"
            name="title"
            id="title"
            value={this.state.title}
            onChange={this.handleChange}
          />
          <label htmlFor="director">Director: </label>
          <input
            type="text"
            name="director"
            id="director"
            value={this.state.director}
            onChange={this.handleChange}
          />
          <label htmlFor="hasOscars">Has Oscars: </label>
          <input
            type="checkbox"
            name="hasOscars"
            id="hasOscars"
            checked={this.state.hasOscars}
            onChange={this.handleChange}
          />
          <button type="submit">Add a movie</button>
        </form >
        <h1>Movies</h1>
        {/* <button onClick={this.addMovie}>Add Movie</button> */}
        {/* <ul>{movieListItems}</ul> */}
        {/* if no movies -> h2 - no movies to display */}
        {this.state.movies.length === 0 && <h2>No Movies to display</h2>}
        <MoviesList movies={this.state.movies} />
      </div >
    )
  }
}

export default App;
