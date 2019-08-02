import React from "react";

const PostSummary = ({post}) => {
  console.log(post)
  return (
    <div className="card z-depth-1 post-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{post.title}</span>
        <p>Posted by {post.authorFirstName} {post.authorLastName}</p>
        <p className="grey-text">Date</p>
      </div>
    </div>
  );
};

export default PostSummary;
