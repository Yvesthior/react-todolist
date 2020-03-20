import React, { Component } from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

export default class Todos extends Component {
  render() {
    const { todos, markComplete, delTodo } = this.props;
    return (
      <div>
        {todos.map(todo => (
          <TodoItem
            todo={todo}
            key={todo.id}
            markComplete={markComplete}
            delTodo={delTodo}
          />
        ))}
      </div>
    );
  }
}

Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired
};
