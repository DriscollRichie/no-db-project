import React, { Component } from "react";
import routes from '../routes'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Popcorn Eater</h1>
        {routes}
      </div>
    );
  }
}

export default App;
