import React from "react";
import moment from 'moment'

const PostCommentsList = ({ post }) => {
  console.log(post, "comments");
  return (
    <ul className="collection with-header comments-container">
      <li className="collection-header">
        <h4>Comments</h4>
      </li>

      {post.comments.length > 0 ?
        post.comments.map((comment, i) => {
          return (
            <li key={i} className="collection-item ">
              <div className="card grey darken-1 comment-content">
                <div className="card-content white-text">
                  <span className="chip">{comment.authorFirstName} {comment.authorLastName}</span>
                  <p>
                  {comment.content}
                  </p>
                </div>
              </div>
            </li>
          );
        }) : <li className="collection-item"><h5>No comments yet</h5></li>}
    </ul>
  );
};

export default PostCommentsList;
