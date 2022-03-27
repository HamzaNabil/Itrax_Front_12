import React, { useEffect, useState, useRef } from "react";
import axios from "axios";

// useState | useEffect | useContext | useRef
// useSelector| useDispatch => Redux

function Home() {
  let [count, setCount] = useState(0);
  let [user, setUser] = useState("");
  let [posts, setPosts] = useState([]);
  let inputRef = useRef();

  console.log(inputRef);

  // cdm + cdu // sideEffect
  useEffect(() => {
    // inputRef.current.foucs();
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => setPosts(res.data))
      .catch((err) => console.log(err));
  }, []);

  let handleChange = (e) => {
    setUser(e.target.value);
  };

  return (
    <div>
      <input type="text" onChange={handleChange} ref={inputRef} />
      {count}
      <button onClick={() => setCount(count + 1)}> +1 </button>
      {posts && posts.map((post) => <div>{post.title}</div>)}
    </div>
  );
}

export default Home;
