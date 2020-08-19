import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid';
import './AddTodo.css';

export default class AddTodo extends Component {
    state = {
        todo: ''
    }
    todoChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }
    addTodo = (e) => {
        e.preventDefault();
        this.props.addTodo({
            id: uuidv4(),
            title: this.state.todo,
            completed: false
        })
        this.setState({todo: ''});
    }
    render() {
        return (
                <form className="todo-form" onSubmit={this.addTodo}>
                    <input className="todo-area" type="text" name="todo" value={this.state.todo} onChange={this.todoChange} placeholder="Add Todo..."/>
                    <input className="todo-btn" type="submit" />
                </form>
        )
    }
}
