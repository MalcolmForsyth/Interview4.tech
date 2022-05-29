import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";

function MainButton(props) {
  const { children, className, onClick } = props;

  return (
    <div className={`main-button ${className || ""}`} onClick={onClick}>
      <div className="title-1 inter-bold-blueberry-18px">{children}</div>
    </div>
  );
}

export default MainButton;