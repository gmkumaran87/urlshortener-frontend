import React from "react";
import { Form, Formik, useField } from "formik";
import * as Yup from "yup";
import { useSelector, useDispatch } from "react-redux";
import "./Form.css";
import Navbar from "../components/Navbar";
import { createShortUrl } from "../actions/userActions";

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

const CreateUrl = () => {
  // Getting the state
  const { message, status } = useSelector((state) => state.ui);
  const dispatch = useDispatch();
  const urlState = {
    originalUrl: "",
  };
  return (
    <>
      <Navbar />
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
        initialValues={urlState}
        validationSchema={Yup.object({
          originalUrl: Yup.string().required("Please enter valid URL"),
        })}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setTimeout(() => {
            console.log(values);
            dispatch(createShortUrl(values));
            setSubmitting(false);
          }, 400);
          resetForm("");
        }}
      >
        <Form className="form login-form">
          <MyTextInput
            label="Enter the Url"
            name="originalUrl"
            type="text"
            placeholder="Please enter the URL"
          />
          <button type="submit" className="btn">
            Submit
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default CreateUrl;
