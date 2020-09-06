import React, { useState } from "react";
import axios from "axios";

function CommentCreate({ postId }) {
  const [content, setContent] = useState("");

  const url = `http://posts.com/posts/${postId}/comments`;
  const onSubmit = async (event) => {
    event.preventDefault();
    await axios.post(url, {
      content,
    });
    setContent("");
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="">New Comment</label>
          <input
            onChange={(e) => setContent(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default CommentCreate;
