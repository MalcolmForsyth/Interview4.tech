import React from "react";
import { scoreText } from "../../Scoring";
import ProgressBar from "../ProgressBar/ProgressBar";
import './ScoreCard.css'


class ScoreCard extends React.Component {

    

    render() {
        var score_array = [10,60,30,50]
        return (
            <div classname="window">
                <div className="bar" style={{ width: "calc(" + score_array[0] + "% - 4px)"}}>
                    <ProgressBar bgcolor ="green" completed={score_array[1]} scoreName="something" /> 
                    <ProgressBar bgcolor ="yellow" completed={score_array[2]} scoreName="another thing" /> 
                    <ProgressBar bgcolor ="green" completed={score_array[3]} scoreName="the final thing" /> 
                </div>
            </div>
        );
    }
}

export default ScoreCard;