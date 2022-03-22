import React from "react";
import { NavLink } from "react-router-dom";

function Posts({ loading, posts, err }) {
  return (
    <div className="posts">
      {loading && "Loading...."}

      {posts &&
        posts.map((post) => (
          <NavLink to={`/posts/${post.id}`} key={post.id}>
            {post.title}
          </NavLink>
        ))}

      {err && err}
    </div>
  );
}

export default Posts;
