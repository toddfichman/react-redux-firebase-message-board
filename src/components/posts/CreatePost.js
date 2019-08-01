import React, { Component } from "react";
import { connect } from "react-redux";
import { createPost } from "../../store/actions/postActions";

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
    this.props.createPost(this.state)
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Create New Post</h5>
          <div className="input-field">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="link">Link</label>
            <input type="url" id="link" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="content">Content</label>
            <textarea
              className="materialize-textarea"
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

// const mapStateToProps

// this maps a func createPost to component CreatePost's props
// which, when called dispatchs an action creator
// where asyc call is made, then action continues on to reducer
const mapDispatchToProps = (dispatch) => {
  return {
    createPost: (post) => dispatch(createPost(post))
  }
}


export default connect(null, mapDispatchToProps)(CreatePost)