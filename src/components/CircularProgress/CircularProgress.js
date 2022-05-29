
import React from "react";
import "./CircularProgress.css";

function CircularProgress(props) {
  const { title } = props;

  return (
    <div className="circular">
          <div className="inner"></div>
          <div className="outer"></div>
          <div className="numb">
            <div className="numb-title">{title}</div>
            <div>90%</div>
          </div>
          <div className="circle">
            <div className="zero-dot">
              <span></span>
            </div>
            <div className="dot">
              <span></span>
            </div>
            <div className="bar left">
              <div className="left progress"></div>
            </div>
            <div className="bar right">
              <div className="right progress"></div>
            </div>
          </div>
        </div>
    );
}

export default CircularProgress;