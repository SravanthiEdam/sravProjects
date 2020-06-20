import React, {Component} from 'react';
import Todos from './components/Todos';
import Header from './layout/Header';
import AddTodo from './components/AddTodo';
import uuid from 'uuid';
import './App.css';

class App extends Component{

  state = {
    todos:[
      {
        id: uuid.v3(),
        title: 'Take out the trash',
        completed: false
      },
      {
        id: uuid.v3(),
        title: 'something you can add',
        completed: false
      },
      {
        id: uuid.v3(),
        title: 'No dinner today!!!',
        completed: true
      }

    ]
  }
  //Completed todo
  markComplete=(id)=>{
    //console.log(id);
    this.setState({todos: this.state.todos.map(todo => {
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo;
    })})
  }
  //Delete Todo
  onDelete=(id)=>{
    this.setState({todos:[...this.state.todos.filter(todo => todo.id !== id)]})
  }
  addTodo=(title)=>{
    //console.log(title)
    const newTodo={
      id:uuid.v3(),
      title: title,
      completed: false
    }
    this.setState({todos: [...this.state.todos, newTodo]})
  }
  render(){
    console.log(this.state.todos)
    return(
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo  addTodo={this.addTodo}/>
        <Todos todos={this.state.todos} markComplete={this.markComplete} onDelete={this.onDelete}/>
      </div>
      </div>
    )
  }
}

export default App;
