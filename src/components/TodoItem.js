import React, { Component } from "react";
import PropTypes from "prop-types";

export default class TodoItem extends Component {
  getStyle = () => {
    return {
      background: "#f4f4f4",
      padding: "10px",
      border: "1px #ccc dotted",
      textDecoration: this.props.todo.completed ? "line-through" : "none"
    };
  };
  render() {
    const { todo, markComplete, delTodo } = this.props;
    return (
      <div style={this.getStyle()}>
        <p>
          {" "}
          <input
            type="checkbox"
            onClick={markComplete.bind(this, todo.id)}
          />{" "}
          {todo.title}
          <i
            onClick={delTodo.bind(this, todo.id)}
            style={trashStyle}
            className="fa fa-trash"
            aria-hidden="true"
          ></i>
        </p>
      </div>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired
};

const trashStyle = {
  float: "right",
  color: "red",
  cursor: "pointer"
};
