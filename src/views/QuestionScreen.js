import './QuestionScreen.css';
import React, { useState, useEffect, useRef } from "react";
import MainButton from '../components/Button/Button';
import Timer from "../components/Timer/Timer";
import SocialFooter from "../components/SocialFooter/SocialFooter";

function QuestionScreen(props) {
    const { title } = props;
    const [question, setQuestion] = useState("Loading...");
    const [questions, setQuestions] = useState(["Loading..."]);
    const [timerstart, timerreset] = useState([1]);

    const next = () => {
        timerreset(timerreset + 1);
    };
  
    useEffect(() => {
      }, []);

    useEffect(() => {    
    }, [timerstart]);
  
    return (
    <div className="question-screen">
          <h1 className="title">{question}</h1>
          <Timer initialSeconds={60} index={timerstart} />
          <MainButton onClick={() => next()}>Next Question</MainButton>
        </div>
    );
  }
  
  export default QuestionScreen;