import React, { Component } from "react";
import Todos from "./components/Todos";
import Header from "./layouts/Header";
import AddTodo from "./components/AddTodo";
import About from "./pages/About";
import { v4 as uuid } from "uuid";
import { Switch, Route } from "react-router-dom";
import "./App.css";

class App extends Component {
  state = {
    todos: [
      {
        id: uuid(),
        title: "Diner with Ashley",
        completed: false
      },
      {
        id: uuid(),
        title: "Pray with Ashley",
        completed: false
      },
      {
        id: uuid(),
        title: "Practice React Courses",
        completed: false
      }
    ]
  };

  markComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };

  delTodo = id => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    });
  };

  addTodo = title => {
    const newTodo = {
      id: uuid(),
      title,
      completed: false
    };

    this.setState({ todos: [...this.state.todos, newTodo] });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route
            exact
            path="/"
            render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo} />
                <Todos
                  todos={this.state.todos}
                  markComplete={this.markComplete}
                  delTodo={this.delTodo}
                />
              </React.Fragment>
            )}
          />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    );
  }
}

export default App;
