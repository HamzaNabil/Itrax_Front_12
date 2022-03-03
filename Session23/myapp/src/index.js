import React from "react"; // jsx
import ReactDOM from "react-dom";
import App from "./App"; // comp  => call  <App />

// Hamada  => root
// let comp2 = (
//   <div>
//     <h2>this is comp2</h2>
//   </div>
// );
// let comp1 = (
//   <div>
//     <h2>This is comp1</h2>
//     {comp2}
//   </div>
// );

ReactDOM.render(<App />, document.getElementById("root"));
