import React from "react";
import "./Card.css";
import { HiLink } from "react-icons/hi";

const Card = (props) => {
  const { urlCount, dayMonth } = props;
  console.log(urlCount);
  return (
    <div className="card">
      <div className="col1">
        <h3 className="url-count">{urlCount}</h3>
        <p className="card-desc">{dayMonth} Count</p>
      </div>
      <HiLink></HiLink>
    </div>
  );
};

export default Card;
