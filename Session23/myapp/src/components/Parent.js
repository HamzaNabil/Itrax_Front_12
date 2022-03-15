import React, { Component } from "react";
import Child from "./Child";

class Parent extends Component {
  state = {
    name: "Parent Comp",
    isChecked: false,
  };

  handleChecked = () => {
    this.setState({
      isChecked: true,
    });
  };

  render() {
    return (
      <div className="parent">
        This is Parent
        {this.state.isChecked ? <div> Checked </div> : <div>Not Checked</div>}
        <button onClick={this.handleChecked}> Checked </button>
        <input type="text" />
      </div>
    );
  }
}

export default Parent;
