import React from "react";

const Try = ({ tryinfo }) => {
  return (
    <li>
      <div style={{ color: "black" }}>{tryinfo.try}</div>
      <div style={{ color: "black" }}>{tryinfo.result}</div>
    </li>
  );
};

export default Try;
