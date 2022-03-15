import React, { Component } from "react";
import "./header.css";

// Function component => stateless component
// function Header() {
//   return (
//     <div className="header">
//       <label htmlFor="user"> username </label>
//       <input type="text" id="user" />
//       <h2>wefwefwef</h2>

//     </div>
//   );
// }

// Class Based Component => Stateful component
class Header extends Component {
  state = {
    name: "Header Comp",
  };
  render() {
    console.log(this.props); // {x: 1, y:2}
    return (
      <div className="header">
        <label htmlFor="user"> username </label>
        <input type="text" id="user" />
        <h2> {this.state.name} </h2>

        <p>x {this.props.x}</p>
        <p>y {this.props.y}</p>
      </div>
    );
  }
}

export default Header;
