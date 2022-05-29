import './QuestionScreen.css';
import React, { useState, useEffect, useRef } from "react";
import MainButton from '../components/Button/Button';
import Timer from "../components/Timer/Timer";
import CircularButton from '../components/CircularButton/CircularButton';
import RecButton from '../components/RecButton/RecButton';
import ScoreCard from '../components/ScoreCard/ScoreCard';
import ProgressBar from '../components/ProgressBar/ProgressBar';
import ParticlesBg from 'particles-bg';

function QuestionScreen(props) {
    const { title } = props;
    const first_question = "What job title are you applying for?";
    const [question, setQuestion] = useState(first_question);
    const [questions, setQuestions] = useState([first_question]);
    const [timerstart, timerreset] = useState([1]);

    const cohere = require('cohere-ai');
    const model_name = "small";
    var JOB_CAREER = "";
    cohere.init('tqDPnl8QyMk4HmCHRRR2VL3ns94BecutsbQARYqx');

    async function response(prev_question) {
        console.log('hello2');
        const response = await cohere.generate(model_name, {
            prompt: `You are an interviewer generating questions for an candidate for the position of ${JOB_CAREER}, your previous question was ${prev_question}`,
            max_tokens: 100,
            temperature: 0.9,
            frequency_penalty: 0.5,
            presence_penalty: 1.0,
            p: 0.6,
            stop_sequences: ['?', '.']
        });
        console.log(response);
        return response.body.generations[0].text;
    }

    const next_question = () => {
        console.log('hello');
        response(question).then((res) =>
        {
            console.log('hello');
            console.log(res);
            setQuestion(res);
        });
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
          <MainButton className="title-1" onClick={() => next_question()}>Next Question</MainButton>
          <CircularButton className="circular-button-1" onClick={() => reset()}>Reset</CircularButton>
          <RecButton className="rec-button-1">Record</RecButton>
          <CircularButton className="circular-button-3" onClick={() => reset()}>End</CircularButton>
          {/* <ProgressBar bgcolor="red" scoreName="idk" completed={65}/> */}
          {/* <ScoreCard /> */}

          <CircularButton className="circular-button-3" onClick={() => next_question()}>End</CircularButton>
        </div>
    );
  }
  
  export default QuestionScreen;