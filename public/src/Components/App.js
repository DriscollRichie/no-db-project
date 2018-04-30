import React, { Component } from "react";
// import routes from '../routes'
import MovieResults from './MovieResults/MovieResults'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Popcorn Eater</h1>
        <MovieResults/>
        {/* {routes} */}
      </div>
    );
  }
}

export default App;
