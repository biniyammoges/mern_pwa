import React from "react";
import loader from "../../assets/loader.svg";

const Spinner = ({ txt }) => {
  return (
    <div>
      <span>{txt}</span>
      <img src={loader} alt="loader" />
    </div>
  );
};

export default Spinner;
