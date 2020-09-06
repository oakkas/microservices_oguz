import React from "react";

function CommentList({ comments }) {
  const renderComments = comments.map((comment) => {
    let content;

    switch (comment.status) {
      case "approved":
        content = comment.content;
        break;
      case "pending":
        content = "This comment is awaiting moderation";
        break;
      case "rejected":
        content = "This comment has been rejected";
    }
    return (
      <li key={comment.id} className="">
        {content}
      </li>
    );
  });

  return <ul>{renderComments}</ul>;
}

export default CommentList;
