import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Todos from './components/Todos';
import Header from './components/Header';
import AddTodo from './components/AddTodo';
import About from './components/About';
import SearchTodo from './components/SearchTodo';

class App extends Component {
  state = {
    todos: [
      {
        id: 1000,
        title: 'Practice backhand',
        completed: true
      },
      {
        id: 10001,
        title: 'Practice backhand 2',
        completed: false
      },
      {
        id: 10003,
        title: 'Practice backhand 3',
        completed: false
      }
    ],
    originalTodos: []
  }
  constructor() {
    super();
    this.URL = 'https://jsonplaceholder.typicode.com/todos';
  }
  componentDidMount() {
    axios.get(`${this.URL}?_limit=10`)
    .then((res) => {
      console.log(res.data);
      this.setState({todos: [...this.state.todos, ...res.data]}, () => {
        this.setState({originalTodos: [...this.state.todos]});
      })
    });
  }

  markComplete = (id) => {
    this.setState({todos: this.state.todos.map((todo) => {
      if(todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    })})
  }

  deleteTodo = (id) => {
    
    axios.delete(`${this.URL}/${id}`)
    .then(res => {
      this.setState({todos: this.state.todos.filter((todo) => {
        if(todo.id === id) {
          return false;
        }
        return true;
      })});
    })
  }

  addTodo = (todo) => {
    // console.log(todo);
    // this.setState({todos: [...this.state.todos, todo]});
    axios.post(this.URL, todo)
    .then(res => {
      console.log(res);
      this.setState({todos: [...this.state.todos, res.data]})
    })
  }

  filterTodos = (search) => {
    // 1. Filter the list of todos
    // set the todos
    if(search != '') {
      this.setState({todos: this.state.originalTodos.filter((todo) => {
        if(todo.title.indexOf(search) > -1) {
          return true;
        }
        return false;
      })});
    } else {
      this.setState({todos: this.state.originalTodos});
    }

  }

  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Route path="/" exact render={() => {
            return <div>
              <SearchTodo filterTodos={this.filterTodos} />
              <AddTodo addTodo ={this.addTodo}/>
              <Todos todos={this.state.todos} markComplete={this.markComplete} deleteTodo={this.deleteTodo}/>
            </div>
          }}/>
          <Route path="/about" component={About}/>
      </div>
      </BrowserRouter>
      
    );
  }
}

export default App;
