import React from "react";
import { scoreText } from "../../Scoring";
import ProgressBar from "../ProgressBar/ProgressBar";
import NewProgBar from "../NewProgBar/NewProgBar";
import './ScoreCard.css'



class ScoreCard extends React.Component {

    

    render() {

        var score_array = [80,30,50,70]
        return (
            <div> 
                <h1 className="scoretitletext">Your Scores</h1>
                <div className="displaywindow">
                    <NewProgBar className='displaybar' value={score_array[0]} title="name of score" /> 
                    <NewProgBar className='displaybar' value={score_array[1]} title="does this work" /> 
                    <NewProgBar className='displaybar' value={score_array[2]} title="another thing" /> 
                    <NewProgBar className='displaybar' value={score_array[3]} title="the final thing" /> 
                
                </div>
            </div>
        );
    }
}

export default ScoreCard;