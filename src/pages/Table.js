import React from "react";
import "./Table.css";

const Table = (props) => {
  const { originalUrl, shortUrl, createdAt, hits } = props;
  console.log(originalUrl);
  return (
    <tr>
      <td>{originalUrl}</td>
      <td>{shortUrl}</td>
      <td>{createdAt}</td>
      <td>{hits} </td>
    </tr>
  );
};

export default Table;
