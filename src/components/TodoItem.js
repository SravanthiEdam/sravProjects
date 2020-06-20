import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    getStyle = () =>{
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom:'1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through': 'none'
        }
        // if(this.props.todo.completed){
        //     return {
        //         textDecoration: 'line-through'
        //     } 
        // }else {
        //         return {
        //             textDecoration: 'none'
        //         }
        // }
    }
    markComplete = (e) => {
        console.log(this.props)
    }
    render() {
        const {id, title} = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} /> {' '}
                    {title}
                    <button onClick={this.props.onDelete.bind(this, id)} style={{background:'red',
                    color:'#fff',
                    border:'none',
                    padding:'5px 10px',
                    borderRadius:'50%',
                    cursor:'pointer',
                    float:'right' }}>x</button>
                </p>
            </div>
        )
    }
}
//propTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}
export default TodoItem;
