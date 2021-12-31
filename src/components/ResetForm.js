import React from "react";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";
import "../pages/Form.css";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updatePassword } from "../actions/auth";

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

const ResetForm = () => {
  const params = useParams();
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { message, status } = useSelector((state) => state.ui);

  const { userId, randomStr } = params;
  // const { updatePassword } = useGlobalContext();

  const state = {
    newPassword: "",
    confirmPassword: "",
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
      <h2> Reset Password </h2>
      <Formik
        initialValues={state}
        validationSchema={Yup.object({
          newPassword: Yup.string()
            .min(6, "Must be atleast 6 characters")
            .max(12, "Must be lesser than or equal to 12 characters")
            .required("Required"),
          confirmPassword: Yup.string()
            .min(6, "Must be atleast 6 characters")
            .max(12, "Must be lesser than or equal to 12 characters")
            .required("Required"),
        })}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setTimeout(() => {
            const userObj = {
              newPassword: values.newPassword,
              confirmPassword: values.confirmPassword,
              userId,
              randomStr,
            };
            // Sending the User values to store in DB
            dispatch(updatePassword(userObj));
            setSubmitting(false);

            // Waiting in the page for the message
            setTimeout(() => {
              navigate("/login");
            }, 5000);
          }, 400);
          resetForm("");
        }}
      >
        <Form className="form login-form">
          <MyTextInput
            label="New Password"
            name="newPassword"
            type="password"
            placeholder="Please enter the new Password"
          />
          <MyTextInput
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            placeholder="Please confirm password"
          />
          <button type="submit" className="btn">
            Submit
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default ResetForm;
