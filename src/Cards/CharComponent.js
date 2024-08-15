import React from "react";

const style = {
  display: "inline-block",
  padding: "16px",
  textAlign: "center",
  margin: "16px",
  border: "1px solid black",
  cursor: "pointer",
  backgroundColor: "grey",
  color: "white",
};

const CharComponent = (props) => {
  return (
    <div style={style} onClick={props.onClick}>
      <h5>remove me</h5>
      {props.value}
    </div>
  );
};

export default CharComponent;
