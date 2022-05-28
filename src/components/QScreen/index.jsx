import React, { useState, useEffect, useRef } from "react";
import MainButton from "../MainButton";
import "./QScreen.css";
import reportWebVitals from "../../reportWebVitals.js";

function QScreen(props) {

  const next = () => {
    reportWebVitals(console.log("test button"))   
  };

  return (
    <div className="container-center-horizontal">
      <div className="question-screen screen">
        <h1 className="title valign-text-middle inter-bold-white-32px">title</h1>
        <MainButton onClick={() => next()}>send req</MainButton>
      </div>
    </div>
  );
}

export default QScreen;