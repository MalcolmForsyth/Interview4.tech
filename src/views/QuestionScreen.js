import './QuestionScreen.css';
import React, { useState, useEffect, useRef } from "react";
import MainButton from '../components/Button/Button';
import Timer from "../components/Timer/Timer";
import CircularButton from '../components/CircularButton/CircularButton';
import RecButton from '../components/RecButton/RecButton';
import ScoreCard from '../components/ScoreCard/ScoreCard';
import ProgressBar from '../components/ProgressBar/ProgressBar';
import ParticlesBg from 'particles-bg';
// import Transcibed from './globals';
import {Transcibed} from '../components/RecButton/RecButton';

function QuestionScreen(props) {
    const { title } = props;
    const first_question = "What job title are you applying for?";
    const [question, setQuestion] = useState(first_question);
    const [questions, setQuestions] = useState([first_question]);
    const [timerstart, timerreset] = useState([1]);
    const cohere = require("cohere-ai");
    cohere.init('tqDPnl8QyMk4HmCHRRR2VL3ns94BecutsbQARYqx');
    const last_response = "";
    
    const model_name = "xlarge";
    var JOB_CAREER = "";
    const prompt = `Eric is an interviewer asking questions to a candidate for the position of ${JOB_CAREER}. Eric usually asks questions that build upon the last response that the candidate gave, but can also change the topic and ask a more general question. Questions should be short, well-phrased, and use key information from the candidates last response. Provide interview questions to the candidate.`
    const examples = "Position: Software Engineer \n The candidate is Grant. \n Eric: What are your thoughts on the role of testing in software engineering? \n Grant: I think a comprehensive testing suite is an important part of any project. In my past internship at Amazon I wrote a suite of automated tests for their home assistant devices. \n Eric: What framework did you use to create automated tests? Was it difficult to learn? \n Grant: I used the Robot framework in Python. It wasn't too difficult to learn, since my mentor was able to guide me through it.\n Eric: Great, can you tell me more about what you were writing the tests for? \n Position: Machine Learning Engineer \n The candidate is William. \n Eric: What is overfitting? How can you prevent it? \n William: Overfitting is when your model finds spurious correlations in your training dataset that lead to poor generalization and poor accuracy in the testing dataset. \n Eric: Name a time that you encountered overfitting and overcame it. \n William: I recently had difficulty with overfitting when doing image classification. I was able to prevent it through strong regularization and data augmentation.\n Eric: Why does data augmentation help with overfitting? \n William: It can help the model rely on more general features which remain under some set of transformations, while spurious features are destroyed under certain transformations. \n Eric: What is the difference between supervised and unsupervised learning? \n Position {} \n The candidate is Malcolm."
    // const full = prompt + examples + Transcibed.text;
    // console.log(full);
    async function response(prev_question) {
        console.log('Begin Response Func');
        const end = `\n Eric: ${first_question} \n Malcolm: ${Transcibed.text} \n Eric:`
        console.log(prompt + examples + end);
        const response = await cohere.generate(model_name, {
            prompt: prompt + examples + Transcibed.text,
            max_tokens: 40,
            temperature: 0.9,
            frequency_penalty: 0.5,
            presence_penalty: 1.0,
            p: 0.8,
            stop_sequences: ['Response']
        });
        console.log("new Q!");
        return response
    }

    const next_question = () => {
        response(question).then((res) =>
        {
           // console.log(response);
            console.log(res);
            console.log("waited");
            //  response.body.generations[0].text;
            setQuestion(res.body.generations[0].text);
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

          {/* <CircularButton className="circular-button-3" onClick={() => next_question()}>End</CircularButton> */}
        </div>
    );
  }
  
  export default QuestionScreen;