import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import moment from "moment";

import CreatePostComment from "./CreatePostComment";
import PostCommentsList from "./PostCommentsList";

const PostDetails = props => {
  const { post, auth, id } = props;
  // console.log(id, 'post')
  if (auth.isEmpty) {
    return <Redirect to="/signin" />;
  }

  if (post) {
    return (
      <div className="container section ">
        <div className="card z-depth-0 post-details">
          <div className="card-content">
            <span className="card-title">{post.title}</span>
            <a href={post.link}>{post.link}</a>
            <div className="post-details-content">
              <p>{post.content}</p>
            </div>
          </div>
          <div className="card-action grey lighten-5 grey-text">
            <div>
              Posted by {post.authorFirstName} {post.authorLastName}
            </div>
            <div>{moment(post.createdAt.toDate()).format("lll")}</div>
          </div>
        </div>
        
        <CreatePostComment postId={id} />
        
        <PostCommentsList post={post} />
      </div>
    );
  } else {
    return (
      <div className="container center">
        <p>Loading Post...</p>
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const posts = state.firestore.data.posts;
  const post = posts ? posts[id] : null;
  return {
    post: post,
    auth: state.firebase.auth,
    id: id
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "posts" }])
)(PostDetails);
