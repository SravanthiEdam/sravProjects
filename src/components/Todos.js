import React, {Component} from 'react';
import PropTypes from 'prop-types';/// propTypes are sort of validations for property is that a component shd have, we can set the type and isRequired
import TodoItem from './TodoItem';

class Todos extends Component{
    
  render(){
      return this.props.todos.map((todo) =>(
         <TodoItem key={todo.id} todo={todo} markComplete= {this.props.markComplete} onDelete={this.props.onDelete} />
      ))
  }
}
//propTypes
Todos.propTypes = {
    todos: PropTypes.array.isRequired
}
export default Todos;
