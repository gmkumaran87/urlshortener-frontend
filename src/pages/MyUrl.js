import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "../components/Navbar";
import Center from "../wrappers/Center";
import Table from "./Table";
import { authActions } from "../store/auth-slice";
import { getUserUrl } from "../services/user.service";

const MyUrl = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  // Getting the latest Urls created by the User
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
  console.log(user);
  return (
    <>
      <Navbar></Navbar>
      <Center>
        <h2> Tables </h2>
        <table className="emp-table">
          <thead>
            <tr>
              <th>Original Url</th>
              <th> Short Url</th>
              <th> CreatedAt </th>
              <th> Hits </th>
            </tr>
          </thead>
          <tbody id="table-row-list">
            {user.map((el) => (
              <Table
                key={el._id}
                originalUrl={el.originalUrl}
                shortUrl={el.shortUrl}
                createdAt={el.createdAt}
                hits={el.clicks}
              />
            ))}
          </tbody>
        </table>
      </Center>
    </>
  );
};

export default MyUrl;
