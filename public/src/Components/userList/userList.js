import React, { Component } from "react";
import axios from 'axios'
// import Movie from '../Movie/Movie'

export default class UserList extends Component {
  constructor() {
    super()
    this.state = {
      userList: []
    }
  }


  componentDidMount() {
    axios.get('/api/userList').then(res => {
      this.setState({userList: res.data})
    })
  }

  deleteMovie(id) {
    axios.delete(`/api/userList/${id}`).then(res => {
      this.setState({userList: res.data})
    })
  }

  updateMovie(id, title, year, cover) {
    axios.put(`/api/userList/${id}`, {title, year, cover}.then(res => {
      this.setState({userList: res.data})
    }))
  }


  render() {
    let movieList = this.state.userList.map((elem, i) => {
      console.log(elem)
      return (
        <div key={i}>
          <span>{elem.title}</span>
          <span>{elem.year}</span>
          <img src={elem.cover} alt="movie cover" />
          <button onClick={() => this.deleteMovie(elem.id)}>Delete</button>
          <button onClick={() => this.updateMovie()}>Update</button>
        </div>
      );
    })
    // let movie = this.props.userList.map((elem, i) => {
    //   return (
    //     <div key={i}>
    //       <span>{elem.title}</span>
    //       <span>{elem.year}</span>
    //       <img src={elem.cover} alt="movie cover" />
    //     </div>
    //   );
    // });
    return <div>{movieList}</div>;
  }
}
