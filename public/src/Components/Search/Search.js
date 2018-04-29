import React, { Component } from "react";

export default class Search extends Component {

  render() {
    return (
      <div>
        <input onChange={this.props.updateUserInputFn} value={this.props.userInput} />
        <button onClick={this.props.searchMoviesFn}>Search</button>
      </div>
    );
  }
}
