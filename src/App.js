import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ToDo from './components/ToDo.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [  // the initial state of my component
        { description: 'Walk the cat', isCompleted: true },
        { description: 'Throw the dishes away', isCompleted: false},
        { description: 'Buy new dishes', isCompleted: false}
      ]  
    };
  }

  render() { // taking some data and displaying it to the user showing it to the user
    return ( 
      <div className="App">
        <ul>
          { this.state.todos.map((todo, index) =>
            <ToDo key={ index } description={ todo.description } isCompleted={ todo.isCompleted } />  //anytime you use curly brackets want to be evaluated as javascript and display the evaluated value          
          )}
        </ul>
      </div>
    );
  }
}

export default App;

// a component gets its props from its parent component (if a component is rendered by another component) 
// in this case ToDo component is a child of the parent component App.js
// the parent component carries all of the props that then get passed onto the child
