import React from "react";
import { NavLink } from "react-router-dom";

const SignedOutLinks = () => {
  return (
    <ul className="right">
      <li>
        <NavLink
          activeStyle={{
            fontWeight: "bold",
            backgroundColor: "rgba(0,0,0,0.1)"
          }}
          to="/signup"
        >
          Sign Up
        </NavLink>
      </li>
      <li>
        <NavLink
          activeStyle={{
            fontWeight: "bold",
            backgroundColor: "rgba(0,0,0,0.1)"
          }}
          to="/signin"
        >
          Sign In
        </NavLink>
      </li>
    </ul>
  );
};

export default SignedOutLinks;
