import React from "react";

const Square = (props) => {
  return (
    <div
      onClick={props.onClick}
      style={{ border: "2px solid black", height: "100px", width: "100%" }}
      className="square"
    >
      <h5>{props.value}</h5>
    </div>
  );
};

export default Square;
