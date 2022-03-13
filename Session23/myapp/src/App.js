import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Types of Component
// 1- Function Component
// function App(){
//   return (
//     <div>
//       <Header />

//       <h1>App Component</h1>
//       <p>This is App Comp</p>

//       <Footer />
//     </div>
//   );
// }

// 2- Class Based Component

// State [data] {} private object to related comp
// Props = properites = attribute => {}

// <App test="ay 7aga"  />
class App extends Component {
  state = {
    name: "App Comp",
    version: "1.0",
  };

  render() {
    console.log(this.props); // {test: "ay 7aga", }
    return (
      <div>
        <Header x="1" y="2" />
        <h1> {this.state.name} </h1>
        <p>This is App Comp</p>
        <p> {this.state.version} </p>
        <hr />
        all props
        <p>test: {this.props.test}</p>
        <p>name: {this.props.name}</p>
        <p>hamada: {this.props.hamada}</p>
        <Footer foot="f" />
      </div>
    );
  }
}

export default App;
