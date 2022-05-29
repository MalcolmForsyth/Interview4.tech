import React from "react";
import { scoreText } from "../../Scoring";
import ProgressBar from "../ProgressBar/ProgressBar";
import NewProgBar from "../NewProgBar/NewProgBar";
import './ScoreCard.css'
import {TOPIC, CURR_Q} from "../../views/QuestionScreen";
import { Transcibed } from "../RecButton/RecButton";



var rendered_q = "";
var old_scores = [];

class ScoreCard extends React.Component {

    
    componentDidMount() {
        this.interval = setInterval(() => this.setState({ time: Date.now() }), 1000);
      }
      componentWillUnmount() {
        clearInterval(this.interval);
      }

    render() {
        
        if (CURR_Q != rendered_q){
            var scores = scoreText(TOPIC, CURR_Q, Transcibed);
            rendered_q = CURR_Q;
            old_scores = scores
        }
        console.log(CURR_Q, rendered_q, old_scores, scores)
        
        return (
            <div> 
                <h1 className="scoretitletext">Your Scores</h1>
                <div className="displaywindow">
                    <NewProgBar className='displaybar' value={scores[0][0]} title={scores[0][1]} /> 
                    <NewProgBar className='displaybar' value={scores[1][0]} title={scores[1][1]} /> 
                    <NewProgBar className='displaybar' value={scores[2][0]} title={scores[2][1]} /> 
                    <NewProgBar className='displaybar' value={scores[3][0]} title={scores[3][1]} /> 
                
                </div>
            </div>
        );
    }
}

export default ScoreCard;