import React, { Component } from "react";
import Movie from "../Movie/Movie";
import Search from "../Search/Search";
import UserList from "../UserList/UserList";

export default class MovieResults extends Component {
  constructor() {
    super();
    this.state = {
      movies: [
        {
          title: "Titanic",
          year: "1997",
          cover:
            "https://ia.media-imdb.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UX182_CR0,0,182,268_AL_.jpg"
        },
        {
          title: "Rounders",
          year: "1998",
          cover:
            "https://ia.media-imdb.com/images/M/MV5BMzViMmMxMzItYmYyYi00NGU3LWI2MDMtNjcwOWFmZTZkOTcwXkEyXkFqcGdeQXVyNDkzNTM2ODg@._V1_UX182_CR0,0,182,268_AL_.jpg"
        },
        {
          title: "Blow",
          year: "2001",
          cover:
            "https://ia.media-imdb.com/images/M/MV5BMTQ5ODQwNzIxNV5BMl5BanBnXkFtZTYwNzAyMDE3._V1_UX182_CR0,0,182,268_AL_.jpg"
        }
      ],
      userInput: "",
      filteredMovies: [],
      userList: []
    };

    this.updateUserInput = this.updateUserInput.bind(this);
    this.searchMovies = this.searchMovies.bind(this);
    this.addToList = this.addToList.bind(this)
  }

  updateUserInput(e) {
    this.setState({ userInput: e.target.value });
  }

  searchMovies() {
    let movieSearch = this.state.movies.filter(elem =>
      elem.title.toLowerCase().includes(this.state.userInput.toLowerCase())
    );
    this.setState({ filteredMovies: movieSearch, userInput: "" });
  }

  addToList(title, year, cover) {
    this.setState({userList: [...this.state.userList, {title, year, cover}]})
  }

  render() {
    let moviesToDisplay = this.state.filteredMovies.map((elem, i) => {
      return (<Movie key={i} data={elem} addToListFn={this.addToList}/>)
    });

    return (
      <div>
        <Search
          updateUserInputFn={this.updateUserInput}
          userInput={this.state.userInput}
          searchMoviesFn={this.searchMovies}
        />
        {moviesToDisplay}
        <UserList userList={this.state.userList}/>
      </div>
    );
  }
}
