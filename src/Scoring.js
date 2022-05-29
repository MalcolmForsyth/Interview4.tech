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
    return scores
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
    if (perc_talking < .6){
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

/*
Below are responses to various interview questions. Each response has some feedback on the quality of the response. Responses should be on-topic, sufficient length, and provide some insight into why the candidate may be a good fit for the position.

Q: What is your experience with agile methodology?
A: I tried agile methodology once. I think it is interesting. If I remember correctly it was a little bit of a challenge to set up a plan that would take something like 10% of the time to perform.
The response is short in length and offers some insight into the candidate's experience with agile methodology, but the wording could be improved.

Q: What are your thoughts on distributed systems?
A: I am familiar with distributed systems, from what I have learned they allow software applications to be deployed across multiple computers, which can provide benefits in the performance of the program but has difficulties with reliability.
The response provides a brief but accurate overview of the differences between distributed systems.

Q: What excites you about working in Web Development?
A: There are a lot of things that excite me about working in Web Development. One of the things that I find most exciting is working on projects that have a positive impact on people's lives. I love working on projects that make a difference in the world. Another thing that excites me is the opportunity to learn new things. I always try to stay up to date on the latest trends in Web Development, so that I can bring my knowledge to the projects that I work on.
The response offers a detailed overview of why the candidate loves working in Web Development and what they look for in a project. The response is well written and provides good insights into why the candidate is excited about working in Web Development.

Q: What are your thoughts on object-oriented programming?
A: I think object-oriented programming is a very effective way to structure code. It makes it easier to read and maintain the code.
The response provides a too short overview of why object-oriented programming is effective, but the candidate could have discussed more specific examples of how it works in practice. 

Q: Tell us about a time something went wrong in a project you were managing.
A: While I worked at Amazon last summer as a project manager, there was an intern who could never meet the deadlines and it was about to impact our final project. We resolved the error by moving the intern to another project that interested them more and bringing in some additional help to meet the deadline. Clearly, our team wasn't working for the intern, so we had to adjust and fill in their responsibilities with a more passionate worker. Additionally, the intern was able to find a project they enjoyed and were passionate about working harder on.
This response is great. It shows how the candidate worked to find the best situation for all parties involved. They clearly discussed the situation, their solution, and why their solution was beneficial. 

Q: Tell me about a time when you had to troubleshoot and debug a complex issue.
A: One time, I had to debug an issue that was caused by a race condition in the code. The bug was difficult to reproduce because it only happened sporadically. I spent a lot of time reading through the code and trying to understand how it worked. Only by first taking the time to understand the code, I was able to track down the root cause of the problem and fix it. The problem was caused by two threads that were accessing the same data without synchronizing their access properly.
The response is good. The candidate discusses how the candidate approached and fixed a complex issue and mentions some technical details about the problem and the solution. 

Q: What excites you about working in App Development?
A: There are a lot of things that excite me about working in App Development but I find the process of seeing an app come to life and work correctly after all of the hard work that goes into it as the most rewarding. Of course, the cherry on top is to put that into the hands of people who like it.

Q: What are your thoughts on object-oriented programming?
A: I think that object-oriented programming is a good way to structure code because it makes the code more readable and easier to maintain. Additionally, OOP can help prevent errors by encapsulating data and methods.
The response provides a brief but accurate overview of the advantages of object-oriented programming.

Q: What was your most successful project? 
A: My most successful project I created over my last two years working for the Genomic Biology Lab. We used the HuggingFace NLP library to pretrain models on protein sequences as text, and then fine-tune the models on different specific tasks, such as protein family prediction or protein-protein interaction prediction. This allowed us to analyze how the features of the model inferred large-scale biological trends in proteins.
This is a great response. They discuss the specifics of their project which displays their technical prowess. They discuss the impact of the project. The response is well-worded.

Q: What is overfitting? How can you prevent it?
A: Overfitting is when the data resembles a specific function, and the neural net finds that function instead of learning from the data.
This response does not show a thorough understanding of overfitting and does not discuss how to prevent it at all.

Q: How do you prioritize and manage tasks?
A: There is no one-size-fits-all approach to prioritizing and managing tasks, as everyone may have their own method that is different from others. Instead, you need to be mindful of the overall impact of your tasks on the team's success and make decisions based on the most important things to the team.
The response offers a good overview of how to prioritize and manage tasks, but the candidate could have discussed more specifics on their approaches and what they deem as important.

Q: What are the most important qualities for a software engineer?
A: The most important qualities for a software engineer are dedication, dedication to their work, and the ability to work effectively with other people. 
The response is too short. While these may be important qualities for a software engineer, they could have provided more details on what they find important.

Q: What makes you unique?
A: I think my unique selling points would be my dedication to my work, my ability to work effectively with other people, and my experience with agile methodology. I have been working in the software industry for several years, and I have tried different approaches to software development. I think that my experience with agile methodology would be a valuable addition to the team, as it is a methodology that is rapidly growing in popularity. I am also willing to learn new things, and I am open to new challenges.
The response offers a detailed overview of the candidate's skills and experience and why they would be a valuable addition to the team. The response is well written and provides a good overview of why the candidate is unique.

Q: Which is your most significant accomplishment?
A: I think my most significant accomplishment would be my work on the software development team that created the software that was used in the Olympic games.
The response is too short and does not go into detail about their contributions to the software.

Q: How do you handle difficult challenges?
A: Personally, I like to take on challenges head-on. When I am feeling overwhelmed, I like to sit down and make a list of what needs to be done. Once I have a plan, it is much easier for me to focus and work through the challenge. Additionally, if there are parts of the challenge that I am not sure how to approach, I will reach out to my team or other resources for help.
The response offers a detailed overview of how the candidate handles difficult challenges by making a plan and reaching out for help when needed. The response is well written and provides good insights into how the candidate approaches difficult situations.

Q: Tell us about a time something went wrong in a project you were managing.
A: One time the person I was managing didn't do the task that I asked, and I had to figure out how to make them do that task that I asked. It ended up fine.
The response is too short and does not provide enough detail about the situation. Additionally, the candidate's response is very informal and poorly worded.


Q: How would you handle a situation where another team member is not following your instructions?
A: I would try to find out what the issue was and how I could help fix it. If that didn't work, then I might need to bring in someone else to help solve the problem.
The response provides okay steps for solving a difficult situation with other team members, as well as if needed bringing in outside resources. The response is short and the candidate could have gone into more detail about how they may deal with potential issues.

Q: What was your most successful project? Why was it successful?
A: My most successful project was probably the app I built last summer. It used NLP to interview students. Maybe it was the one I built the summer before that since I used huge datasets and agglomerative clustering in a time series pattern. I enjoy my school projects though.
This is a bad response. The candidate does not have a decisive answer and should have spent more time thinking about their response. Additionally, it is lacking in detail. 

Q: How would you create an environment of collaboration on your team?
A:  I would spend a while explaining why we should be collaborative, and then I would punish those who disobeyed me for their impotence.
This is an awful response. This candidate shows a poor understanding of what is needed from a Project Manager to make a collaborative team and wrongly believes that punishment could lead to a collaborative environment.

Q: How would you create an environment of collaboration on your team?
A: I would make sure to acknowledge contributions from members when they are successful in their efforts. However, the most effective method to encourage collaboration that I would employ is in the absence of punishment in the case of mistakes. Mistakes are how developers learn, and punishment stifles innovation. People on my team will want to try new things for the sake of seeing how they will turn out
This is a good response. This candidate outlines ways to encourage collaboration by building a supportive team environment.

Q: What are your experiences with agile methodology?
A: My first experience with the agile methodology was at my last internship, with Ameren. We used the Agile workflow to separate our various assignments into small, feasible chunks, as well as to track long-term goals to hold us accountable to project deliverables. We used the Kanban board system alongside it, and we attended short stand-ups each day to recount our progress and ask questions. I love Agile and continue to use it in group assignments at school.
This is a great response. The candidate has experience with agile methodology and provides good insight into how it can be used in different settings. The response is well-written and provides insights on the use of agile methodology that may be valuable to the position.

Q: What are your thoughts on the role of testing in software engineering?
A: I think a comprehensive testing suite is an important part of any project. Ensuring code is functioning properly before it goes live is critical, and the only way to be certain code is correct is through comprehensive tests. Having tests that cover all edge cases as well as all possible input partitions not only ensures that the code is correct, but it can also make the code faster to write as it helps identify where the bugs might be. 
This is a great response. The candidate has articulated well why testing is important and provides insights into how comprehensive tests can help to find bugs early in the development process. The response is well-written and detailed.

Q: What is overfitting? How can you prevent it?
A: Overfitting is, when training some predictive model, we find that the accuracy on the training set is significantly higher than the test set. This can occur for many reasons, a popular one is a model being overparameterized. We can understand overfitting as the model learning specific, non-relevant patterns in the training data that lead to poor generalization. Some approaches to prevent it include regularization, collecting more diverse data, or reducting the model's capacity.
This is a great response. This response shows a deep understanding of the mechanism of overfitting and includes potential solutions to mitigate the problem. The answer is well-worded and thorough in its response.

Q: What are your thoughts on the role of testing in software engineering?
A: I think a few tests can be nice to ensure that code works but they aren’t strictly necessary because you can usually just figure out if it works without them.
This is a bad response. The candidate does not believe in the need for comprehensive testing and does not provide any justification for their position. Additionally, the response is unorganized and poorly written.

*/