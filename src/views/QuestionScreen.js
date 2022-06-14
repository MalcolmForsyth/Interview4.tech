import './QuestionScreen.css';
import React, { useState, useEffect, useRef } from "react";
import MainButton from '../components/Button/Button';
import Timer from "../components/Timer/Timer";
import CircularButton from '../components/CircularButton/CircularButton';
import RecButton from '../components/RecButton/RecButton';
import ScoreCard from '../components/ScoreCard/ScoreCard';
// import Transcibed from './globals';
import {Transcribed} from '../components/RecButton/RecButton';
var prompt = `Eric is an interviewer asking questions to a interview candidate. Eric usually asks questions that build upon the last response that the candidate gave, but can also change the topic and ask a more general question. Questions should be short, well-phrased, and use key information from the candidates last response. 

Provide interview questions to the candidate.

The candidate is Grant.
Eric: What job title are you applying for?
Grant: Software Engineer 
Eric: What are your thoughts on the role of testing in software engineering? 
Grant: I think a comprehensive testing suite is an important part of any project. In my past internship at Amazon I wrote a suite of automated tests for their home assistant devices.
Eric: What framework did you use to create automated tests? Was it difficult to learn?
Grant: I used the Robot framework in Python. It wasn't too difficult to learn, since my mentor was able to guide me through it.
Eric: Great, can you tell me more about what you were writing the tests for?

The candidate is William.
Eric: What job title are you applying for?
William: Machine Learning Engineer 
Eric: What is overfitting? How can you prevent it? 
William: Overfitting is when your model finds spurious correlations in your training dataset that lead to poor generalization and poor accuracy in the testing dataset.
Eric: Name a time that you encountered overfitting and overcame it.
William: I recently had difficulty with overfitting when doing image classification. I was able to prevent it through strong regularization and data augmentation.
Eric: Why does data augmentation help with overfitting?
William: It can help the model rely on more general features which remain under some set of transformations, while spurious features are destroyed under certain transformations.
Eric: What is the difference between supervised and unsupervised learning?

The candidate is Malcolm.
Eric: What job title are you applying for?
Malcolm:`

export var TOPIC = "";
export var CURR_Q = "";

function QuestionScreen(props) {
    const { title } = props;
    const first_question = "What job title are you applying for?";
    const [question, setQuestion] = useState(first_question);
    const [questions, setQuestions] = useState([first_question]);
    const [timerstart, timerreset] = useState([1]);
        
    const cohere = require('cohere-ai');
    cohere.init('tqDPnl8QyMk4HmCHRRR2VL3ns94BecutsbQARYqx');
    

    async function getNextQ(prompt){
        const response_p = await cohere.generate('small', {
            prompt: prompt,
            max_tokens: 120,
            temperature: 0.6,
            p: 0.5,
            stop_sequences: ['Question:']
        })

        return response_p
    }
    
    const next_question = () => {
        // make new prompt
        // generate new Q
        console.log(prompt, Transcribed)
        prompt = prompt + Transcribed.text;
        if (TOPIC == ""){
            TOPIC = Transcribed.text;
        }
        // Transcribed.text = undefined;
        // Transcribed.duration = undefined;
        // Transcribed.words = undefined;

        prompt = prompt + "\n";
        prompt = prompt + "Eric:"
        let question_p = getNextQ(prompt).then(resp => {
            let question = resp.data.choices[0].text
            console.log(resp)
            prompt = prompt + question;
            if (question.slice(-1) !== "\n"){
                prompt = prompt + "\n";
            }
            prompt = prompt + "Malcolm:";
            console.log(prompt)
            CURR_Q = question;
            setQuestion(question);
        })
        

        
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
          {/* <ProgressBar bgcolsr="red" scoreName="idk" completed={65}/> */}
          {<ScoreCard />}

          {/* <CircularButton className="circular-button-3" onClick={() => next_question()}>End</CircularButton> */}
        </div>
    );
  }
  
  export default QuestionScreen;