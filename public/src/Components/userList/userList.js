import React, { Component } from "react";
import axios from "axios";
// import Movie from '../Movie/Movie'

export default class UserList extends Component {
  constructor() {
    super();
    this.state = {
      userList: [],
      editMode: false,
      title: "",
      year: "",
      cover: ""
    };
  }

  handleEditMode() {
    this.setState({ editMode: true });
  }

  handleTitleChange(e) {
    this.setState({ title: e });
  }

  handleYearChange(e) {
    this.setState({ year: e });
  }

  handleCoverChange(e) {
    this.setState({ cover: e });
  }

  handleConfirmChange() {
    let {title, year, cover} = this.state
    this.props.updateMovieFn(this.props.data.id, title, year, cover)
    this.setState({editMode: false, title: '', year: '', cover: ''})

  }

  render() {
    return (
      <div>
        <span>{this.props.data.title}</span>
        <span>{this.props.data.year}</span>
        <img src={this.props.data.cover} alt="movie cover" />
        <button onClick={() => this.deleteMovie(this.props.data.id)}>
          Delete
        </button>
        <button onClick={() => this.handleEditMode()}>Update</button>
        {this.state.editMode ? (
          <div>
            <input
              placeholder="title"
              onChange={e => this.handleTitleChange(e.target.value)}
              value={this.state.title}
            />
            <input
              placeholder="year"
              onChange={e => this.handleYearChange(e.target.value)}
              value={this.state.year}
            />
            <input
              placeholder="cover"
              onChange={e => this.handleCoverChange(e.target.value)}
              value={this.state.cover}
            />
            <button onClick={() => this.handleConfirmChange()}>Confirm Changes</button>
          </div>
        ) : null}
      </div>
    );
  }
}
