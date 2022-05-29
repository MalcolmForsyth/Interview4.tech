interviews4.tech

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Sample Interviews!

#### Machine Learning
MODEL: What job title are you applying for?
CANDIDATE:Machine learning Engineer.

MODEL: What is the curse of dimensionality?
CANDIDATE:The curse of dimensionality is when we have very high dimensional data and with a large family of models we might actually fall prone to overfitting within these models period. Often this ends up forcing us to use some approaches that can behave more nicely with this data such as dimensionality reduction or feature engineering or feature selection. Also, there's been some interest in some success in certain inductive models. For example, CNN have some inductive bias in the hierarchical filter selection and this allows them to work with images. When other models such as multi layer perceptrons might not be as successful.
FEEDBACK: You are speaking a little too slow. You spoke at 124 words per minute. You want to speak from 125-165 words per minute. You had almost no pauses. Please note that it can be helpful to use pauses to prevent monotonous speech. You had almost no filler words! Great job! This is a great response. The candidate has a deep understanding of the curse of dimensionality and how to mitigate it. They provide several examples of ways to work with high dimensional data.

*<The speed, pauses, and filler-word feedback is removed from this point on for brevity.>*

MODEL: So would you say that the curse of dimensionality is more of a problem with certain types of models?
CANDIDATE:Yeah, I would say that the curse of dimensionality is a problem with certain types of models, but I might adjust that statement and say more so that we can use certain types of models as well as different approaches like regularization like data augmentation to mitigate the effects of the cursive dimensionality. Anytime we're trying to fit some low dimensional signal on some high dimensional data, there's going to be spurious correlations that we can overfit. Restricting the spurious correlations that we're allowing our model to fit to is just one approach that certain types of models being architected in a certain way solves.
FEEDBACK: This response is confusing and does not directly answer the question. The candidate could have given a simpler example and discussed how the curse of dimensionality affects different types of models.

MODEL: Can you give me an example of a low dimensional signal on high dimensional data?
CANDIDATE:Of course. So just recently for this hackathon, I had to train an image classifier that detected if I was looking at or not looking at the camera. And, you know, this this is pretty complex because, you know, the model needs to completely ignore the background. It needs to completely ignore often the position of my face in the image. If it's on the left, looking at the camera, on the right, looking at the camera, looking up or down at the camera. All of those are valid as long as I'm looking at the camera. But if I'm centered at the camera, but my eyes and my face is pointed at the camera, but my eyes are looking down or to the left or to the right, it still needs to be able to detect it. So really, some low dimensional signal is just the position of my eyes, you know, a binary signal saying one or zero if I'm looking at the camera on some image, that's 224 X 224 by three pixels or by three data points, I guess. And so, yeah, that's I think a great example of a low dimensional signal on high dimensional data.
FEEDBACK: This response does not answer the question. The question was "So how did you solve this problem?" and the candidate instead launched into a description of a problem they recently solved. The candidate should have provided a brief overview of how they approached the problem and what techniques they used to solve it.

MODEL: So how did you solve this problem?
CANDIDATE:Yeah. I mean, I solve the problem just by having a really small model so that it can't over fit to the data. Additionally, the model was efficient net, which makes use of these squeeze excitation sort of subnetwork blocks which are pretty good with sort of preventing this overfitting as it pays much more attention to a general idea of sort of where filters are and what's being activated.
FEEDBACK: This response is very short and answers the question.

MODEL: So you used a smaller model and a different type of architecture to solve the problem?
CANDIDATE:That's correct.
<END>

#### UI/UX Developemnt

MODEL: What job title are you applying for?
CANDIDATE:User interface and user experience design.

MODEL: What is the difference between a user interface and user experience?
CANDIDATE:To me, a user interface is a web page looking like I want it to look, you know, when a member of or a user of my website joins the page, I want them to sort of of feel like the page is doing what it should do. And then a user experience to me is more like when the user tries to navigate my page or perform some action on my page. Is that doing what they expected to do? Is the flow what they're expected to do.
FEEDBACK: You are speaking a little too slow. You spoke at 120 words per minute. You want to speak from 125-165 words per minute. You had almost no pauses. Please note that it can be helpful to use pauses to prevent monotonous speech. You had almost no filler words! Great job! This response is incomplete. The candidate should discuss the different aspects of each field and how they work together to create a cohesive product.

*<The speed, pauses, and filler-word feedback is removed from this point on for brevity.>*

MODEL: Can you give me an example of a time when you had to improve the user experience on a project?
CANDIDATE:Absolutely. Recently, in a hackathon for Toronto, University of Toronto, I made a project that allowed users to have online interviews with a robot, actually. And, you know, in order to, to make sure the user experience was good, we wanted to make sure that we could have some speech to text system rather than just having the user type their responses. It feels much more natural for someone to speak as a response to an interview question rather than type it out. I think it also forces the users of the Web page to really practice quality interview skills. Thinking on their feet, taking maybe a moment beforehand to plan their response to is very important, which is why we added things such as a timer beforehand to encourage the user to take some time to think.
FEEDBACK: This response answers the question. The candidate should discusses a specific project where they had to improve the user experience and how they went about doing that.

MODEL: How do you think about usability when designing web pages?
CANDIDATE:For me, usability when designing web pages is making sure that all buttons and page transitions and sort of the flow as you go from the beginning to the end of the website is what you would expect it to do anyway if you were to sort of close your eyes for a moment and guess where a certain button might be or where one page might be that you would actually know already instinctively where that is. I think having that link guess beforehand on where things are helps a lot with making sure that web pages are usable.
FEEDBACK: This response is too long and does not directly address the question. The candidate could have discussed how they take into account different user types when designing web pages or how they think about the user's journey when designing web pages.

MODEL: Do you have any experience with A/B testing?
CANDIDATE:I only have a little bit of experience with a B testing. I did it once for some internship at Cisco. At that internship, I you know, we wanted to revamp the customer service page, and we weren't quite sure which of two formats were going to be better. And so we did perform some AB testing, though I didn't get to see the result of that a B testing. But we did select the sort of a path that I think most of us assumed was going be the correct design that we were going to go with anyway. But the B path, the alternative option, did receive some interesting data, if I do recall.
FEEDBACK: The candidate should be more concise in their response and focus on their experience with AB testing rather than the details of the customer service page.

MODEL: Can you tell me more about the customer service page that you were revamping?
CANDIDATE:Honestly, I can't to be honest, I was lying to you. I didn't revamp a customer service page, and I have no experience with a B testing. And so I don't feel confident telling you more about a customer service page that doesn't exist. And I know nothing about.
FEEDBACK: This response is not helpful at all. The candidate should have given a more honest answer about their experience, even if it is limited.

MODEL: Do you have any experience with usability testing?
CANDIDATE:This time I'll be more honest. I don't have any experience with usability testing and frankly, I'm not quite sure what usability testing means, although I'm very passionate about web development and UI UX development and I would love to learn more in applying my skills to these tasks in the future.
FEEDBACK: The candidate is honest about their lack of experience, which is commendable. However, the candidate should have done more research on the topic before the interview. The candidate should explain what they know about usability testing and how they would be interested in applying their skills to the task.

MODEL: Do you have any experience with user research?
<END>

  
  
  
  
