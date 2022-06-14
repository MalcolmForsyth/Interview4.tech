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
    Malcolm: Machine Learning Engineer,`

const cohere = require('cohere-ai');
cohere.init('tqDPnl8QyMk4HmCHRRR2VL3ns94BecutsbQARYqx');
(async () => {
  const response = await cohere.generate('small', {
    prompt: prompt,
    max_tokens: 50,
    temperature: 1,
    k: 0,
    p: 0.75
  });
  console.log(response.body.generations[0].text);
})();
