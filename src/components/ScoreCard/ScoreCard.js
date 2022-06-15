import React from "react";
import { scoreText } from "../../Scoring";
import ProgressBar from "../ProgressBar/ProgressBar";
import NewProgBar from "../NewProgBar/NewProgBar";
import './ScoreCard.css'
import {TOPIC, CURR_Q} from "../../views/QuestionScreen";
import { Transcribed } from "../RecButton/RecButton";



var rendered_q = "";
var scores = [(0, "None"), (0, "None"), (0, "None"), (0, "None")];
var last_resp = "";

class ScoreCard extends React.Component {


    
    componentDidMount() {
        this.interval = setInterval(() => this.setState({ time: Date.now() }), 5000);
      }
      componentWillUnmount() {
        clearInterval(this.interval);
      }

    render() {
        console.log(scores)
        if (typeof Transcribed.text == 'undefined'){
            // console.log("Transcribed Undefined")
            

            var feedback = ""
            feedback = feedback + scores[0] + " "
            feedback = feedback + scores[1] + " "
            feedback = feedback + scores[2] + " "
            feedback = feedback + scores[3] + " "
            return (
            <div> 
                <h1 className="scoretitletext">Your Scores</h1>
                <div className="displaywindow">
                    <NewProgBar className='displaybar' value={(scores[0])[0]} title="Speech Speed" /> 
                    <NewProgBar className='displaybar' value={(scores[1])[0]} title="Pauses" /> 
                    <NewProgBar className='displaybar' value={(scores[2])[0]} title="Filler Word Usage" /> 
                  
                </div>
                <h1 className="scoretitletext">Feedback:</h1>
                <h4 className="feedbacktext">{feedback}</h4>

            </div>
            )
        }
        
        else if (CURR_Q != rendered_q){
            console.log("New Q")
            var scores_p = scoreText(TOPIC, CURR_Q);
          
            rendered_q = CURR_Q;
        }
        else{
            var feedback = ""
            feedback = feedback + scores[0] + " "
            feedback = feedback + scores[1] + " "
            feedback = feedback + scores[2] + " "
            feedback = feedback + scores[3] + " "
            return (
            <div> 
                <h1 className="scoretitletext">Your Scores</h1>
                <div className="displaywindow">
                    <NewProgBar className='displaybar' value={(scores[0])[0]} title="Speech Speed" /> 
                    <NewProgBar className='displaybar' value={(scores[1])[0]} title="Pauses" /> 
                    <NewProgBar className='displaybar' value={(scores[2])[0]} title="Filler Word Usage" /> 
                   
                </div>
                <h1 className="scoretitletext">Feedback:</h1>
                <h4 className="feedbacktext">{feedback}</h4>

            </div>
            )
        }
        console.log(scores_p)   
        return scores_p.then(scores_new => {
            console.log(CURR_Q, rendered_q, scores, scores_new)
            scores = scores_new
            var feedback = ""
            feedback = feedback + scores[0] + " "
            feedback = feedback + scores[1] + " "
            feedback = feedback + scores[2] + " "
            feedback = feedback + scores[3] + " "
            return (
            <div> 
                <h1 className="scoretitletext">Your Scores</h1>
                <div className="displaywindow">
                    <NewProgBar className='displaybar' value={(scores[0])[0]} title="Speech Speed" /> 
                    <NewProgBar className='displaybar' value={(scores[1])[0]} title="Pauses" /> 
                    <NewProgBar className='displaybar' value={(scores[2])[0]} title="Filler Word Usage" /> 
    
                
                </div>
                <h1 className="scoretitletext">Feedback:</h1>
                <h4 className="feedbacktext">{feedback}</h4>

            </div>
            )
        })
        // return (
        //     <div> 
        //         <h1 className="scoretitletext">Your Scores</h1>
        //         <div className="displaywindow">
        //             <NewProgBar className='displaybar' value={scores[0][0]} title={scores[0][1]} /> 
        //             <NewProgBar className='displaybar' value={scores[1][0]} title={scores[1][1]} /> 
        //             <NewProgBar className='displaybar' value={scores[2][0]} title={scores[2][1]} /> 
        //             <NewProgBar className='displaybar' value={scores[3][0]} title={scores[3][1]} /> 
                
        //         </div>
        //     </div>
        // );
    }
}

export default ScoreCard;
