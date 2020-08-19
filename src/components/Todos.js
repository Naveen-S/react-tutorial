import React, { Component } from 'react'
import Todo from './Todo';
import PropTypes from 'prop-types';

export default class Todos extends Component {
    renderTodos = (todos) => {
        return (todos.map((item) => {
            return <Todo todo={item} key={item.id} markComplete={this.props.markComplete} deleteTodo={this.props.deleteTodo}/>
        }));
    }
    render() {
        return (
            <div>
                {this.renderTodos(this.props.todos)}
            </div>
        )
    }
}

// Prop types
Todos.propTypes = {
    todos: PropTypes.array.isRequired
}
