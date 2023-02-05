import React from "react";

const CheckmarksPassword = ({ text, color = "grey" }) => {
  return (
    <p>
      <i
        style={{ color: color, fontSize: "20px" }}
        class="fa fa-check-circle"
        aria-hidden="true"
      ></i>{" "}
      {text}
    </p>
  );
};

export default CheckmarksPassword;
