import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../store/actions/authActions";

const SignedInLinks = (props) => {
  return (
    <ul className="right">
      <li>
        <NavLink
          to="/new-post"
          activeStyle={{
            fontWeight: "bold",
            backgroundColor: "rgba(0,0,0,0.1)"
          }}
        >
          New Post
        </NavLink>
      </li>
      <li>
        <a onClick={props.signOut} to="/">Logout</a>
      </li>
      <li>
        <NavLink to="/" className="btn btn-floating blue-grey darken-4">
          TF
        </NavLink>
      </li>
    </ul>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}


export default connect(null, mapDispatchToProps)(SignedInLinks);
