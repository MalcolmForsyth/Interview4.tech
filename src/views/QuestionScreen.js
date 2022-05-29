import './QuestionScreen.css';
import React, { useState, useEffect, useRef } from "react";
import MainButton from '../components/Button/Button';
import Timer from "../components/Timer/Timer";
import SocialFooter from "../components/SocialFooter/SocialFooter";
import CircularButton from '../components/CircularButton/CircularButton';
import RecButton from '../components/RecButton/RecButton';
import ScoreCard from '../components/ScoreCard/ScoreCard';
import ProgressBar from '../components/ProgressBar/ProgressBar';

function QuestionScreen(props) {
    const { title } = props;
    const [question, setQuestion] = useState("Loading...");
    const [questions, setQuestions] = useState(["Loading..."]);
    const [timerstart, timerreset] = useState([1]);

    const next = () => {
        timerreset(timerstart + 1);
    };

    const reset = () => {
        timerreset(timerstart + 1);
    };
  
    useEffect(() => {
    }, []);

    useEffect(() => {    
    }, [timerstart]);
  
    return (
    <div className="question-screen">
          <h1 className="title">{question}</h1>
          <Timer initialSeconds={60} index={timerstart} />
          <MainButton className="title-1" onClick={() => next()}>Next Question</MainButton>
          <CircularButton className="circular-button-1" onClick={() => reset()}>Reset</CircularButton>
          <RecButton className="rec-button-1">Record</RecButton>
          <CircularButton className="circular-button-3" onClick={() => reset()}>End</CircularButton>
          {/* <ProgressBar bgcolor="red" scoreName="idk" completed={65}/> */}
          {/* <ScoreCard /> */}
        </div>
    );
  }
  
  export default QuestionScreen;