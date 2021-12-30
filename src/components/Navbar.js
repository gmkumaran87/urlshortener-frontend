import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav-bar">
      <h2 className="title">Tinyly</h2>
      <ul className="links">
        <li>
          <NavLink className="link" to="/login">
            Login
          </NavLink>
        </li>
        <li>
          <NavLink className="link" to="/register">
            Sign up
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
