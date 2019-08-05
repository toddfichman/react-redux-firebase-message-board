import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../store/actions/authActions";

const SignedInLinks = (props) => {
  const {user} = props
  console.log(user.initials, 'i')
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
          {user.initials}
        </NavLink>
      </li>
    </ul>
  );
};

const mapStateToProps = state => {
  return {
    user: state.firebase.profile
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(SignedInLinks);
