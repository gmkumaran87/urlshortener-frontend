import React from "react";
import Navbar from "../components/Navbar";
import Center from "../wrappers/Center";
import { useSelector } from "react-redux";

const User = () => {
  const { isLoading } = useSelector((state) => state.ui);

  return (
    <>
      {isLoading ? (
        <p>Please wait while loading...</p>
      ) : (
        <>
          <Navbar />
        </>
      )}
    </>
  );
};

export default User;
