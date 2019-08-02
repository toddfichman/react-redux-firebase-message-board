import React, { Component } from "react";
import Notifications from "./Notifications";
import PostList from "../posts/PostList";

import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

import {Redirect} from 'react-router-dom'

class Dashboard extends Component {
  render() {
    const { posts, auth } = this.props;

    if(auth.isEmpty) {
      return <Redirect to="/signin"/>
    }
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
  return {
    posts: state.firestore.ordered.posts,
    auth: state.firebase.auth
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    // adds
    { collection: "posts" }
  ])
)(Dashboard);
