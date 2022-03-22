import React, { useState } from "react";

// Hooks: useState

function CounterHook() {
  const [count, setCount] = useState(0);
  const [post, setPost] = useState(null);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>+1</button>
      {count}
      <button onClick={() => setCount(count - 1)}> -1 </button>
      {post && post.title}
      <button onClick={() => setPost({ id: 1, title: "bal bal" })}>
        add Post
      </button>
    </div>
  );
}

// class CounterHook extends Component {
//   state = {
//     count: 0,
//   };

//   handleIncrement = () => {
//     this.setState({
//       count: this.state.count + 1,
//     });
//   };

//   handleDecrement = () => {
//     this.setState({
//       count: this.state.count - 1,
//     });
//   };

//   render() {
//     return (
//       <div>
//         <button onClick={this.handleIncrement}> +1 </button>
//         {this.state.count}
//         <button onClick={this.handleDecrement}> -1 </button>
//       </div>
//     );
//   }
// }

export default CounterHook;
