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
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <PostList posts={posts} />
            <ul className="pagination">
              <li className="disabled">
                <a href="#!">
                  <i className="material-icons">chevron_left</i>
                </a>
              </li>
              <li className="active">
                <a href="#!">1</a>
              </li>
              <li className="waves-effect">
                <a href="#!">2</a>
              </li>
              <li className="waves-effect">
                <a href="#!">3</a>
              </li>
              <li className="waves-effect">
                <a href="#!">4</a>
              </li>
              <li className="waves-effect">
                <a href="#!">5</a>
              </li>
              <li className="waves-effect">
                <a href="#!">
                  <i className="material-icons">chevron_right</i>
                </a>
              </li>
            </ul>
          </div>
          <div className="col s12 m5 offset-m1">
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
