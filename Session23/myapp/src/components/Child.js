import React, { Component } from "react";

class Child extends Component {
  state = {
    name: "Child Comp",
  };
  render() {
    return (
      <div className="child">
        This is Child
        {this.props.name}
      </div>
    );
  }
}

export default Child;
