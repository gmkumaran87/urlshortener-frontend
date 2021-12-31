import React, { useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { accountActivation } from "../actions/auth";

const AccountActivation = () => {
  const dispatch = useDispatch();
  const { message, status } = useSelector((state) => state.ui);

  const params = useParams();
  const { confirmationCode } = params;

  // Sending the account activation code to Backend for the verification
  useEffect(() => {
    dispatch(accountActivation(confirmationCode));
  }, []);

  return (
    <>
      {message && (
        <div className="activation-page">
          <p
            className={
              status === "success"
                ? "alert alert-success"
                : "alert alert-danger"
            }
          >
            {message}
          </p>
          <div className="link-container">
            {status === "success" && (
              <NavLink className="activation-link" to="/login">
                Please Login
              </NavLink>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default AccountActivation;
