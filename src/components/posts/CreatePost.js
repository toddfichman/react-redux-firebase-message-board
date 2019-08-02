import React, { Component } from "react";
import { connect } from "react-redux";
import { createPost } from "../../store/actions/postActions";

import { Redirect } from "react-router-dom";

class CreatePost extends Component {
  state = {
    title: "",
    content: "",
    link: ""
  };

  handleChange = event => {
    console.log("handlechage");
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.props);
    this.props.createPost(this.state);
    this.props.history.push('/') //redirects
  };

  render() {
    const { auth } = this.props;

    if (auth.isEmpty) {
      return <Redirect to="/signin" />;
    }

    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="grey darken-3">
          <h5 className="white-text">Create New Post</h5>
          <div className="input-field">
            <label htmlFor="title">Title</label>
            <input
              className="white-text"
              type="text"
              id="title"
              onChange={this.handleChange}
            />
          </div>
          <div className="input-field">
            <label htmlFor="link">Link</label>
            <input
              className="white-text"
              type="url"
              id="link"
              onChange={this.handleChange}
            />
          </div>
          <div className="input-field">
            <label htmlFor="content">Content</label>
            <textarea
              className="materialize-textarea white-text"
              id="content"
              onChange={this.handleChange}
            />
          </div>
          <div className="input-field">
            <button className="btn blue lighten-1">Post</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};

// this maps a func createPost to component CreatePost's props
// which, when called dispatchs an action creator
// where asyc call is made, then action continues on to reducer
const mapDispatchToProps = dispatch => {
  return {
    createPost: post => dispatch(createPost(post))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreatePost);
