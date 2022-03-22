import React, { useRef } from "react";
// ref
function Login() {
  let nienfief = useRef();
  let myInput = useRef();
  console.log(myInput);

  // componentDidMount () {

  // myInput.current.focus()   // after mounting componentDidMount
  // }

  return (
    <div className="login" ref={nienfief}>
      <input type="text" placeholder="Enter username" ref={myInput} />
    </div>
  );
}

export default Login;
