import React from "react";
import { useParams } from "react-router-dom";

function PostDetails({ posts }) {
  let params = useParams();

  let post = posts.find((p) => p.id == params.id);

  return (
    <div>
      <h2>PostDetails Component</h2>
      {post && (
        <>
          <p>id: {post.id}</p>
          <p>Title: {post.title}</p>
          <p>Body: {post.body}</p>
        </>
      )}
    </div>
  );
}

export default PostDetails;
