import React, { useEffect } from "react";
import { Formik, Form, useField } from "formik";
import { NavLink, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { loginUser } from "../actions/auth";
import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "../store/ui-slice";

const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label htmlFor={props.id || props.name}> {label} </label>
      <input className="text-input" {...props} {...field}></input>
      {meta.touched && meta.error ? (
        <div className="error"> {meta.error} </div>
      ) : null}
    </>
  );
};

const Login = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  // Getting the state
  const { message, status } = useSelector((state) => state.ui);
  const { isLoggedIn } = useSelector((state) => state.auth);

  // const updateLogin = (values) => {
  //   dispatch(loginUser(values));
  // };

  useEffect(() => {
    dispatch(uiActions.clearNotification());
    if (isLoggedIn) {
      console.log("Navigating to User page");
      navigate("/user");
    }
  }, [isLoggedIn, navigate, dispatch]);

  const loginState = {
    email: "",
    password: "",
  };
  return (
    <>
      {message && (
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
      <h2> Login and Start Sharing your URL </h2>
      <Formik
        initialValues={loginState}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("Invalid email address")
            .required("Please enter the email"),
          password: Yup.string()
            .max(14, "Must be lesser than 13 characters")
            .min(6, "Must be 6 characters or higher")
            .required("Pleae enter the password"),
        })}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setTimeout(() => {
            dispatch(loginUser(values));
            setSubmitting(false);
          }, 400);
          console.log("After dispatching Login");

          resetForm({ values: "" });
        }}
      >
        <Form className="form login-form">
          <MyTextInput
            label="Email address"
            name="email"
            type="email"
            placeholder="Please enter the Email"
          />
          <MyTextInput
            label="Password"
            name="password"
            type="password"
            placeholder="Please enter the Password"
          />
          <button type="submit" className="btn login-btn">
            Submit
          </button>
          <div className="login-action">
            <p className="blue">
              <NavLink className="blue" to="/forgot-password">
                Forget Password ?
              </NavLink>
            </p>
            <p>
              Don't have an account.?
              <NavLink className="blue" to="/register">
                &nbsp; &nbsp; Sing Up
              </NavLink>
            </p>
          </div>
        </Form>
      </Formik>
    </>
  );
};

export default Login;
