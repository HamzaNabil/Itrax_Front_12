import React, { Component } from "react";

class TodoApp extends Component {
  state = {
    todo: "",
    todos: [],
  };

  handleChange = (e) => {
    this.setState({
      todo: e.target.value,
    });
  };
  //   todos: []
  // todos: [item, wefwef]
  // todos: [item, wefwef, ewfwe]

  handleSubmit = (e) => {
    e.preventDefault(); // stop form refresh
    this.setState({
      todos: [...this.state.todos, this.state.todo],
      todo: "",
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.todo}
          />
          <input type="submit" value="Add Todo" />
        </form>

        <ul>
          {this.state.todos.map((todo) => {
            return <li>{todo}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default TodoApp;
