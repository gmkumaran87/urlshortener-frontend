import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../store/auth-slice";
import "./Navbar.css";

const Navbar = () => {
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);

  const isLoggedin = authState.isLoggedin;

  const handleClick = (e) => {
    dispatch(authActions.changeStatus(true));
  };

  return (
    <nav className="nav-bar">
      <h2 className="title">Tinyly</h2>
      <ul className="links">
        {isLoggedin ? (
          <li>
            <a className="link" href="/login">
              Logout
            </a>
          </li>
        ) : (
          <>
            <li>
              <NavLink className="link" to="/login" onClick={handleClick}>
                Login
              </NavLink>
            </li>
            <li>
              <NavLink className="link" to="/register" onClick={handleClick}>
                Sign up
              </NavLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
