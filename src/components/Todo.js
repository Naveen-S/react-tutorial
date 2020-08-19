import React, { Component } from 'react'
import PropTypes from 'prop-types';
import ClassNames from 'classnames';
import './Todo.css';

export default class Todo extends Component {

    render() {
        const {id, title} = this.props.todo;
        return (
                <div className="todo">
                    <div className={ClassNames({ 'completed': this.props.todo.completed })}>
                        <input className='cbox' type="checkbox" onClick={this.props.markComplete.bind(this, id)} defaultChecked={this.props.todo.completed}/>
                        {title}
                    </div>
                    <div>
                        <div className="btn" onClick={() => {this.props.deleteTodo(id)}}>X</div>
                    </div>
                </div>
        )
    }
}

/* PropTypes */
Todo.propTypes = {
    todo: PropTypes.object.isRequired
}