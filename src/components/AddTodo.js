import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import './AddTodo.css';

const AddTodo = ({
    addTodo
}) => {

    const [ todo, setTodo ] = useState('');

    const todoChange = (e) => {
        setTodo(e.target.value);
    }

    const submitTodo = (e) => {
        e.preventDefault();
        addTodo({
            id: uuidv4(),
            title: todo,
            completed: false
        });
        setTodo('');
    }

    return <div>
        <form className="todo-form" onSubmit={submitTodo} >
            <input className="todo-area" type="text" name="todo" value={todo} placeholder="Add Todo..." onChange={todoChange} />
            <input className="todo-btn" type="submit" />
        </form>
    </div> 
}

export default AddTodo;