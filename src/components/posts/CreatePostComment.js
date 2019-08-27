import React, { Component } from "react";
import { connect } from "react-redux";
import { createPostComment } from "../../store/actions/postActions";
import { compose } from "redux";

class CreatePostComment extends Component {
  state = {
    content: "",
    postId: this.props.postId
  };

  handleChange = event => {
    // console.log("handlechage");
    this.setState({
      [event.target.id]: event.target.value
    });
    this.setState({
      content: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    this.setState({content: ''})
    this.props.createPostComment(this.state);
    // this.props.history.push("/"); //redirects
  };

  render() {
    const { user } = this.props;
    // console.log(user, postId);

    return (
      <div className="comment-input-container">
        <form onSubmit={this.handleSubmit} className="grey darken-1" style={{borderRadius: '5px', marginTop: '10px'}}>
          <h5 className="white-text">Leave A Comment</h5>
          <div className=" white-text">
            <div>
              Signed In As {user.firstName} {user.lastName}
            </div>
          </div>

          <div className="input-field">
            <label htmlFor="content">Comment</label>
            <textarea
              className="materialize-textarea white-text"
              id="content"
              onChange={this.handleChange}
              maxLength="350"
              data-length="350"
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

const mapStateToProps = (state) => {
  
  return {
    user: state.firebase.profile,
  };
};

// this maps a func createPost to component CreatePost's props
// which, when called dispatchs an action creator
// where asyc call is made, then action continues on to reducer
const mapDispatchToProps = dispatch => {
  return {
    createPostComment: comment => dispatch(createPostComment(comment))
  };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )
(CreatePostComment);
