import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };

  handleIncrement = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  handleDecrement = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleIncrement}> +1 </button>
        {this.state.count}
        <button onClick={this.handleDecrement}> -1 </button>
      </div>
    );
  }
}

export default Counter;
