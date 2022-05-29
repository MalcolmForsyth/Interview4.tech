import React from "react";
import "./CircularButton.css";

function CircularButton(props) {
  const { children, className, onClick } = props;

  return (
    <div className={`circular-button ${className || ""}`} onClick={onClick}>
      <div>{children}</div>
    </div>
  );
}

export default CircularButton;