import './QuestionScreen.css';
import React, { useState, useEffect, useRef } from "react";
import MainButton from '../components/Button/Button';
import Timer from "../components/Timer/Timer";
import CircularButton from '../components/CircularButton/CircularButton';
import RecButton from '../components/RecButton/RecButton';
import ParticlesBg from 'particles-bg';

function QuestionScreen(props) {
    const { title } = props;
    const [question, setQuestion] = useState("What job title are you applying for?");
    const [questions, setQuestions] = useState(["What job title are you applying for?"]);
    const [timerstart, timerreset] = useState([1]);

    const cohere = require('cohere-ai');
    const model_name = "";
    var JOB_CAREER = "";
    cohere.init('tqDPnl8QyMk4HmCHRRR2VL3ns94BecutsbQARYqx');

    async function response(prev_question) {
        const response = await cohere.generate(model_name, {
            prompt: `You are an interviewer generating questions for an candidate for the position of ${JOB_CAREER}, your previous question was ${prev_question}`,
            max_tokens: 100,
            temperature: 0.9,
            frequency_penalty: 0.5,
            presence_penalty: 1.0,
            p: 0.6,
            stop_sequences: ['?', '.']
        });
        
        return response.body.classifications;
    }

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
        </div>
    );
  }
  
  export default QuestionScreen;