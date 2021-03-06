import React from "react";
import moment from 'moment'

const PostSummary = ({post}) => {
  return (
    <div className="hoverable card z-depth-1 post-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{post.title}</span>
        <p>Posted by {post.authorFirstName}  {post.authorLastName}</p>
        <p className="grey-text">{moment(post.createdAt.toDate()).format('lll')}</p>
      </div>
    </div>
  );
};

export default PostSummary;
