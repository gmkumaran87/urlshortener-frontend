import React from "react";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";
import "./Form.css";
import { useDispatch, useSelector } from "react-redux";

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
  // const registerStatus = useSelector((state) => state.ui);
  const message = useSelector((state) => state.ui);
  const initialState = {
    email: "",
  };
  return (
    <>
      {message && (
        <div className="form-group">
          <div
            className={
              message.status ? "alert alert-success" : "alert alert-danger"
            }
          >
            {message.message}
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
            // forgotPassword(values);
            dispatch();
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
