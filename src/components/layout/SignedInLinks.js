import React from "react";
import { NavLink } from "react-router-dom";

const SignedInLinks = () => {
  return (
    <ul className="right">
      <li>
        <NavLink
          to="/new-post"
          activeStyle={{
            fontWeight: "bold",
            backgroundColor: 'rgba(0,0,0,0.1)'
          }}
        >
          New Post
        </NavLink>
      </li>
      <li>
        <NavLink to="/">Logout</NavLink>
      </li>
      <li>
        <NavLink to="/" className="btn btn-floating blue-grey darken-4">
          TF
        </NavLink>
      </li>
    </ul>
  );
};

export default SignedInLinks;
