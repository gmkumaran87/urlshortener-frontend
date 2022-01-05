import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import Center from "../wrappers/Center";
import Table from "./Table";

const MyUrl = () => {
  const { user } = useSelector((state) => state.auth);

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
