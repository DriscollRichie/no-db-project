import React, { Component } from "react";
import Search from "./Search/Search";
import MovieResults from "./MovieResults/MovieResults";
import axios from 'axios'
import './App.css'
 {
  constructor() {
    super();
    this.state = {
      movies: [],
      userInput: "",
      filteredMovies: [],
    };

    this.updateUserInput = this.updateUserInput.bind(this);
    this.searchMovies = this.searchMovies.bind(this);
  }

  updateUserInput(e) {
    this.setState({ userInput: e.target.value });
  }

  componentDidMount() {
    axios.get('/api/movies').then(res => {
      this.setState({movies: res.data})
    })
  }

  searchMovies() {

    let movieSearch = this.state.movies.filter(elem =>
      elem.title.toLowerCase().includes(this.state.userInput.toLowerCase())
    );
    this.setState({ filteredMovies: movieSearch, userInput: "" });
  }

  render() {

    return (
      <div>
        <h1 className='app-title'>Popcorn Eater</h1>
        <br/>
        <br/>
        <Search
          updateUserInputFn={this.updateUserInput}
          userInput={this.state.userInput}
          searchMoviesFn={this.searchMovies}
        />
        <MovieResults movies={this.state.filteredMovies}/>
      </div>
    );
  }
}
