import React, { Component } from "react";

export default class userList extends Component {
  constructor() {
    super()
    this.state = {
      userList: []
    }
  }
  render() {
    return (
      <div>
        <h1>I am userList</h1>
      </div>
    );
  }
}
