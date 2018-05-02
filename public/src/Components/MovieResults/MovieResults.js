import React, { Component } from "react";
import Movie from "../Movie/Movie";
import UserList from "../UserList/UserList";
import axios from "axios";
import "./MovieResults.css";

export default class MovieResults extends Component {
  constructor() {
    super();
    this.state = {
      userList: []
    };
    this.addToList = this.addToList.bind(this);
    this.updateMovie = this.updateMovie.bind(this)
  }

  addToList(title, year, cover) {
    axios.post("/api/movies", { title, year, cover }).then(res => {
      console.log("res", res);
      this.setState({
        userList: res.data
      });
    });
  }

  componentDidMount() {
    axios.get("/api/userList").then(res => {
      this.setState({ userList: res.data });
    });
  }

  deleteMovie(id) {
    axios.delete(`/api/userList/${id}`).then(res => {
      this.setState({ userList: res.data });
    });
  }

  updateMovie(id, title, year, cover) {
    axios.put(`/api/userList/${id}`, { title, year, cover }).then(res => {
      this.setState({ userList: res.data });
    });
  }

  render() {
    let moviesToDisplay = this.props.movies.map((elem, i) => {
      return (
        <Movie key={`movies-${i}`} data={elem} addToListFn={this.addToList} />
      );
    });

    let movieList = this.state.userList.map((elem, i) => {
      return <UserList key={`favorite-${i}`} data={elem} updateMovieFn={this.updateMovie}/>;
    });

    return (
      <div className='movie-displays'>
        {moviesToDisplay}
        <br />
        <br />
        <span class="list-of-movies-text">List of Movies</span>
        {movieList}
      </div>
    );
  }
}
