import React from "react";
import { scoreText } from "../../Scoring";
import ProgressBar from "../ProgressBar/ProgressBar";
import NewProgBar from "../NewProgBar/NewProgBar";
import './ScoreCard.css'


class ScoreCard extends React.Component {

    

    render() {
        var score_array = [10,60,30,50]
        return (
            <div classname="window">
                <NewProgBar className='bar' bgcolor ="red" completed={score_array[0]} title="name of score" /> 
                <NewProgBar className='bar' bgcolor ="green" completed={score_array[1]} tile="something" /> 
                <NewProgBar className='bar' bgcolor ="yellow" completed={score_array[2]} title="another thing" /> 
                <NewProgBar className='bar' bgcolor ="green" completed={score_array[3]} title="the final thing" /> 
                
            </div>
        );
    }
}

export default ScoreCard;