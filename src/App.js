import React, { Component } from 'react';
import './App.css';
import './components/ToDo.js';

class App extends Component {
  render() {
    return (
      <div className="App">
      <ul>
        <ToDo />
        <ToDo />
      </ul>
      </div>
    );
  }
}

export default App;
