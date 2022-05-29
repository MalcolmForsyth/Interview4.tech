import React from "react";
import "./Button.css";

function MainButton(props) {
  const { children, className, onClick } = props;

  return (
    <div className={`main-button ${className || ""}`} onClick={onClick}>
      <div className={`${className || ""}`}>{children}</div>
    </div>
  );
}

export default MainButton;