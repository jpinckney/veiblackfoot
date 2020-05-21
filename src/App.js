import React, { Component } from 'react';
import './App.css';
import './reset.css'
import NavBar from './components/NavBar';
import Home from './components/Home Page/Home'
// import {routes}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
        <NavBar />
      </div>
    );
  }
}

export default App;
