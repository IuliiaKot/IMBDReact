import React, { Component } from 'react';
import logo from './logo.svg';
import Container from './Container.js'
// import './Container.js';
import './App.css';


class App extends Component {

  componentDidMount(){
    // fetch('http://www.omdbapi.com/?s=Spring&y=&plot=short&r=json')
    //   .then(function(response) {
    //     debugger
    //     return response.json()})
    //   .then(function(json) {
    //     debugger
    //     this.setState(movies: json)
    //   })

  }



  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div><Container /></div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
