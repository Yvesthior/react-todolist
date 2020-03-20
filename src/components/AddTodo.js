import React, { Component } from "react";

class AddTodo extends Component {
  state = {
    title: ""
  };

  setTitle = e => {
    this.setState({ title: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: " " });
  };

  render() {
    return (
      <form style={formStyle} onSubmit={this.onSubmit}>
        <input
          style={{ flex: "10" }}
          type="text"
          value={this.state.title}
          onChange={this.setTitle}
        />
        <input type="submit" value="Enregistrer" style={btnStyle} />
      </form>
    );
  }
}

export default AddTodo;

const formStyle = {
  display: "flex"
};

const btnStyle = {
  background: "#333",
  color: "#fff",
  padding: "5px",
  border: "1px #ccc solid",
  borderRadius: "10px"
};
