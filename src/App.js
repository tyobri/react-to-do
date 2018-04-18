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
        { description: 'Throw the dishes away', isCompleted: false },
        { description: 'Buy new dishes', isCompleted: false }
      ],
      newTodoDescription: '', 
    };
  }

  deleteTodo(index) { 
    const toDoList = this.state.todos.filter( todo => todo !== this.state.todos[index] ); // the stuff on the right side of the arrow is a description of what you want //
    this.setState({ todos: toDoList }); //the todos property on the state object is now going to be equal to what we removed at line 21 above
  }

  handleChange(e) {
    this.setState( { newTodoDescription: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const newTodo = { description: this.state.newTodoDescription, isCompleted: false };
    this.setState({ todos: [...this.state.todos, newTodo], newTodoDescription: '' }); 
  }

  toggleComplete(index) {
    const todos = this.state.todos.slice();
    const todo = todos[index];
    todo.isCompleted = todo.isCompleted ? false : true;
    this.setState({ todos: todos });
  }

  render() { // taking some data and displaying it to the user showing it to the user
    return ( 
      <div className="App">
        <ul>
          { this.state.todos.map((todo, index) =>
            <ToDo key={ index } description={ todo.description } 
              isCompleted={ todo.isCompleted } 
              toggleComplete={ () => this.toggleComplete(index) } 
              deleteTodo={ () => this.deleteTodo(index) }  />  // anytime you use curly brackets want to be evaluated as javascript and display the evaluated value          
          )}
        </ul>
        <form onSubmit={ (e) => this.handleSubmit(e) }> 
          <input type="text" value={ this.state.newTodoDescription } onChange={ (e) => this.handleChange(e) } />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default App;

// a component gets its props from its parent component (if a component is rendered by another component) 
// in this case ToDo component is a child of the parent component App.js
// the parent component carries all of the props that then get passed onto the child
