import React, { Component } from "react";
import Notifications from "./Notifications";
import PostList from "../posts/PostList";

import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

class Dashboard extends Component {
  render() {
    const {posts} = this.props;
    console.log(posts);
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <PostList posts={posts} />
          </div>
          <div className="col s12 m5 offset-m1">
            <Notifications />
          </div>
        </div>
      </div>
    );
  }
}

// state is the state in redux store
const mapStateToProps = state => {
  console.log(state)
  return {
    posts: state.firestore.ordered.posts
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([ // adds
    { collection: 'posts' }
  ])
)(Dashboard);
