import React, { useState, useEffect } from "react";
import "./NewProgBar.css";

function NewProgBar(props) {
  const {value, title} = props;
  var color = 'green' 
  if (value >= 35 && value <= 65) {
      color = 'yellow'
  } else if (value <= 35) {
      color = 'red'
  }
  const barWidth = () => {   
    
    return {color: color, width: "calc(" + value + "% - 4px)" };

  }
  console.log(barWidth())

  return (
    <div className="timer"> 
        <div className="displaybar" style={barWidth()}></div>
    </div>
    //   <div className="bar" style={ width: "calc(" + value + "% - 4px)", color: {color}}></div>
    //   <div className="text">{title}</div> 
    // </div>
  );
}

export default NewProgBar;