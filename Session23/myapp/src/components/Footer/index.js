import React, { Component } from "react";
import "./footer.css";

class Footer extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="footer">
        <h2>Footer component</h2>
        <p>foot: {this.props.foot}</p>
      </div>
    );
  }
}

export default Footer;
