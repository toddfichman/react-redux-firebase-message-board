import React, { Component } from "react";
import Notifications from "./Notifications";
import PostList from "../posts/PostList";

import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

import { Redirect } from "react-router-dom";

class Dashboard extends Component {

  render() {
    const { posts, auth, notifications } = this.props;
    console.log(posts, "notifications");
    if (auth.isEmpty) {
      return <Redirect to="/signin" />;
    }

    if (!posts) {
      return <h3 className="container">Loading...</h3>
    }
    
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <PostList posts={posts} />
            
          </div>
          <div className="notifications-container col s12 m5 offset-m1">
            <Notifications notifications={notifications} />
          </div>
        </div>
      </div>
    );
  }
}

// state is the state in redux store
const mapStateToProps = state => {
  return {
    posts: state.firestore.ordered.posts,
    auth: state.firebase.auth,
    notifications: state.firestore.ordered.notifications
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    // accessing collection of name provided
    { collection: "posts", orderBy: ["createdAt", "desc"] },
    { collection: "notifications", limit: 5, orderBy: ["time", "desc"] }
  ])
)(Dashboard);
