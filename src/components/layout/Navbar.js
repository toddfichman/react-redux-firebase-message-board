import React from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import { connect } from "react-redux";
import { firebaseConnect } from "react-redux-firebase";

const Navbar = props => {
  const {auth} = props
  console.log(auth, 'auth')
  return (
    <nav className="nav-wrapper blue lighten-3">
      <div className="container">
        <Link to="/" className="brand-logo left">
          soundOff{" "}
        </Link>
        {auth.isEmpty ? <SignedOutLinks /> : <SignedInLinks />}
      </div>
    </nav>
  );
};

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};

export default connect(mapStateToProps)(Navbar);
