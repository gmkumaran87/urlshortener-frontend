import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import { useSelector, useDispatch } from "react-redux";
import "./User.css";
import Card from "../components/Card";
import { getUserUrl } from "../services/user.service";
import { authActions } from "../store/auth-slice";

const User = () => {
  const { isLoading } = useSelector((state) => state.ui);
  const { countUrl } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  console.log("User profile called", countUrl);

  useEffect(() => {
    const getUrl = async () => {
      try {
        const result = await getUserUrl();
        console.log(result);
        if (result.status === 200) {
          const payload = {
            countUrl: result.data.countUrl,
            userUrl: result.data.userUrl,
          };
          dispatch(authActions.loadUser(payload));
        }
      } catch (error) {
        console.log(error.response);
      }
    };
    getUrl();
  }, [dispatch]);
  return (
    <>
      {isLoading ? (
        <p>Please wait while loading...</p>
      ) : (
        <>
          <Navbar />
          <div className="user-center">
            <h2 className="user-title">Dashboard</h2>
            <div className="cards">
              <Card urlCount={countUrl.dayUrlCount} dayMonth={"day"} />
              <Card urlCount={countUrl.monthUrlCount} dayMonth={"month"} />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default User;
