export function scoreText(topic, experience, question, answer_transcript){
    var answer = answer_transcript.ScoreText
    var duration = answer_transcript.audio_duration
    var words = answer_transcript.words
    
    var scores = [];
    scores.push(scoreSpeed(answer, duration));
    scores.push(scorePauses(words, duration));
    scores.push(scoreFiller(words));
    // max pause
    // TODO

}

function scoreSpeed(answer, transcript_duration){
    let n_words = answer.split(' ').length;
    let minutes = transcript_duration/60
    let wpm = Math.round(n_words/minutes)

    if (wpm < 105){
        return (0.0+ Math.random()/10, `You are speaking too slow. You spoke at ${wpm} words per minute. You want to speak from 125-165 words per minute.`)
    }
    else if (wpm < 125){
        return (0.4+ Math.random()/5, `You are speaking a little too slow. You spoke at ${wpm} words per minute. You want to speak from 125-165 words per minute.`)
    }
    else if (wpm < 165){
        return (1.0, `You spoke at a good pace! Great work.`)
    }
    else if (wpm < 185){
        return (0.4+ Math.random()/5, `You are speaking a little too fast. You spoke at ${wpm} words per minute. You want to speak from 125-165 words per minute.`)
    }
    else{
        return (0.0+ Math.random()/10, `You are speaking too fast. You spoke at ${wpm} words per minute. You want to speak from 125-165 words per minute.`)
    }
}

function scoreKnowledge(topic, question, answer){

}

// function scoreExperience(topic, experience, answer){

// }

// function scoreRelavence(topic, question, answer){

// }

function scorePauses(words, transcript_duration){
    let pauses = 0;
    let pause_time = 0;
    for (let index = 1; index < words.length; ++index) {
        const word = words[index];
        const last_word = words[index-1];
        let pause = word.start - last_word.end 
        if (pause > 2000){
            pauses = pauses + 1;
            pause_time = pause_time + pause / 1000; 
        } // 2s
    }
    let perc_talking = 1 - (pause_time)/(transcript_duration)
    if (score < .6){
        return (0.0 + Math.random()/5, `You had much too many pauses. We detected that ${Math.round(100*(pause_time)/(transcript_duration))}% of your time was with long pauses.`)
    }
    else if (perc_talking < .75){
        return (0.33+ Math.random()/3, `You had too many pauses. We detected that ${Math.round(100*(pause_time)/(transcript_duration))}% of your time was with long pauses.`)
    }
    else if (perc_talking < .90){
        return (perc_talking, `You a good number of pauses. We detected that ${Math.round(100*(pause_time)/(transcript_duration))}% of your time was with long pauses.`)
    }
    else{
        return (0.67+ Math.random()/6, `You had almost no pauses. Please note that it can be helpful to use pauses to prevent monotonous speech.`)
    } 
}

function scoreFiller(words){
    let filler_words = ["um",    "uh",   "hmm",    "mhm",    "uh huh"];
    let filler_cnt = 0;
    for (let index = 0; index < words.length; ++index) {
        const word = words[index];
        let text = word.text;
        if (filler_words.contains(text)){
            filler_cnt = filler_cnt + 1;
        } 
    }
    let perc_filler = 1 - filler_cnt/words.length
    if (perc_filler < .75){
        return (0.0+Math.random()/5, `You had too many filler words (like um, uh, and hmm). We found ${filler_cnt} different times!`)
    }
    if (perc_filler < .85){
        return (0.4 + Math.random()/5, `You had a few too many filler words (like um, uh, and hmm). We found ${filler_cnt} different times!`)
    }
    else{
        return (perc_filler, `You had almost no filler words! Great job!`)
    }
}
/*
Lang:
- speaking too fast/slow (float with description "X words in X time. Average is Y.) 
- knowledgeable (T/F with description. "User mentioned X" or "User didn't show that they knew about Y detail about Q") 
- mentions experience (T/F with description. "User mentioned they did X" or "User did not mention keyword X")
- on-topic  (T/F with description. "User stays on topic" or "User beings to discuss X, which is not very related to Q")
- max pause

CV:
- good background (one picture at very beginning of first question) 
- eye contact  (1 picture per n seconds. classifier T/F. report % of time looking at camera)

*/


/*
General: 
-What excites you about working in <TOPIC>?
-What makes you unique?
-How would people describe you?
-Which is your most significant accomplishment?
-What is your greatest strength?
-What is your greatest weakness?

Software Engineering
- What are the most important qualities for a software engineer?
- What are your favorite tools and technologies?
- What are your experiences with agile methodology?
- What are your thoughts on the role of testing in software engineering?
- What are your thoughts on the role of documentation in software engineering?
- How do you handle difficult challenges?

Web Development
- Tell me about your past work experience in web development?
- What are your specific skills and technologies in web development?
- What is one significant project or task that you're proud of? Why?
- Tell me about your personal development process.
- Tell me about a time when you had to troubleshoot and debug a complex issue.
- How do you stay up to date with the latest trends in web development?
- What is your experience with performance optimization techniques?

UI/UX Design
- Tell me about your past work experience in UI/UX design.
- What are your specific skills and technologies in UI/UX design?
- What is one significant project or task that you're proud of? Why?
- Tell me about your design process.
- What are your thoughts on the role of user research in UI/UX design?
- What is your experience with designing for accessibility?

App Development
- Is there an application that irritates you? How would you fix it?
- What do you do to minimize security risks?
- What is your experience with developing for multiple platforms?
- What strategies do you use to manage app development timelines and budget?
- If given the opportunity to work on a side project involving developing an application, what type of application would you choose to create, and why?
- How do you ensure an application will be user-friendly?


Project Management 
- What does a successful project manager need?
- How do you prioritize and manage tasks?
- What is your experience with agile methodology?
- How do you handle difficult challenges?
- Tell us about a time something went wrong in a project you were managing.
- What was your most successful project? Why was it successful?
- How would you create an environment of collaboration on your team?

Machine Learning Engineering
- Explain the terms Artificial Intelligence (AI), Machine Learning, and Deep Learning.
- What is the difference between supervised and unsupervised learning?
- What is overfitting? How can you prevent it?
- What are your thoughts on the role of feature selection in machine learning?
-  What is Bias, Variance and what do you mean by Bias-Variance Tradeoff?
*/