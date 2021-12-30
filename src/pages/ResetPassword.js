import React, { useEffect } from "react";
import "./Form.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ResetForm from "../components/ResetForm";
import { emailValidation } from "../actions/auth";
import { uiActions } from "../store/ui-slice";

const ResetPassword = () => {
  const dispatch = useDispatch();
  const { message, status, isLoading } = useSelector((state) => state.ui);

  console.log("ResetPassword", isLoading, message);

  const params = useParams();

  const { userId, randomStr } = params;

  useEffect(() => {
    dispatch(
      uiActions.setLoading({
        message: "Please wait while the page is loading...",
        isLoading: true,
      })
    );
    dispatch(emailValidation(userId, randomStr));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {isLoading && (
        <div className="form-group">
          <div
            className={
              status === "success"
                ? "alert alert-success"
                : "alert alert-danger"
            }
          >
            {message}
          </div>
        </div>
      )}
      {!isLoading && <ResetForm />}
    </>
  );
};

export default ResetPassword;
