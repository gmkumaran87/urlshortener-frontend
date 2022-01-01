import React, { useEffect } from "react";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";
import "./Form.css";
import { useDispatch, useSelector } from "react-redux";
import { forgotPasswordLink } from "../actions/auth";
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

const ForgotPassword = () => {
  const dispatch = useDispatch();
  const { message, status } = useSelector((state) => state.ui);

  console.log("Forgot Password msg", message);
  useEffect(() => {
    console.log("Calling while changing the screen");
    dispatch(uiActions.clearNotification());
  }, [dispatch]);

  const initialState = {
    email: "",
  };
  return (
    <>
      {message && (
        <div className="form-group">
          <div
            className={status ? "alert alert-success" : "alert alert-danger"}
          >
            {message}
          </div>
        </div>
      )}
      <h2> Forgot Password </h2>
      <Formik
        initialValues={initialState}
        validationSchema={Yup.object({
          email: Yup.string().email("Invalid email").required("Required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            console.log(values);
            // Dispatching an action for sending the email to the server
            dispatch(forgotPasswordLink(values));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form className="form">
          <MyTextInput
            label="Email Address"
            name="email"
            type="email"
            placeholder="jane@formik.com"
          />
          <button type="submit" className="btn forgot-btn">
            Submit
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default ForgotPassword;
