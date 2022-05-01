## What is Smile?

Smile is a web app that makes you smile! Studies show that smiling, even a forced one is proven to help with mental health. Our app makes sure you get your smiles in, alongside prompting you to come up with positive affirmances about yourself. 

Our app provides a quick, easy, and re-usable set of tools that can help reduce your stress by making you smile and invoke more positive vibes!

Users participate in a smile mile, which consists of 3 different activities that were scientifically designed to help with positivity. 

The user first starts by showing a large smile for a couple of seconds, once the app has determined you are smiling, it moves you onto the next stage.

In this stage, the user must actively say/type 3 positive compliments to themself. This is to help them get in the mindset of self-appreciating thoughts!

Finally, we finish the run with some light-hearted music and additional resources that the user can look into when they’re feeling down or want to read more into it.

## Inspiration

As students who just finished our exams, we noticed our mood was becoming more negative. With the added anxiety of seeing our final marks come out, we needed some guidance.  

Research shows that there’s merit in doing simple activities to help boost your mood!

The effects positive affirmations have on your mental being:

[https://scholar.dominican.edu/scw/SCW2020/conference-presentations/63/](https://scholar.dominican.edu/scw/SCW2020/conference-presentations/63/)

Benefits of smiling:

[https://www.tandfonline.com/doi/full/10.1080/17437199.2022.2052740](https://www.tandfonline.com/doi/full/10.1080/17437199.2022.2052740)

[https://www.sclhealth.org/blog/2019/06/the-real-health-benefits-of-smiling-and-laughing/](https://www.sclhealth.org/blog/2019/06/the-real-health-benefits-of-smiling-and-laughing/)

Smiling for health

[https://www.nbcnews.com/better/health/smiling-can-trick-your-brain-happiness-boost-your-health-ncna822591](https://www.nbcnews.com/better/health/smiling-can-trick-your-brain-happiness-boost-your-health-ncna822591)

## How we built it

We built our web application using Javascript, and NextJS. We leveraged Computer Vision and NLP to validate user interactions.

Computer vision was used for Smile detection, where the user is required to smile for at least 10 seconds, this was important to the project since we needed to validate if the user was really smiling throughout this activity.

NLP was used for sentimental analysis, this was important to the project since we needed to make sure the user wasn’t inputting negative compliments and only focused on positivity

For the sentimental analysis portion, we used MonkeyLearn’s classification library, as it provided a set of models that fit our requirements and had a faster turn-around rate. However, it’s a free trial so there’s a limited use

For the Smile detection, we used face-api’s various models, which can be found in `public/models` . This consists of a bunch of models we wish to have used for detecting landmarks such as the mouth and the eyes. However, the models are for general landmark detection, which could be improved upon by focusing only on targetting whether the user is smiling or not!

## Challenges we ran into

We faced a multitude of challenges going through this project:

- Figuring out which models best fits our requirements
- Designing and implementing the user flow in a minimalistic manner
- Fixing hydration issues with NextJS

3 out of the 4 members don’t have access to a camera, so we relied on one person to handle the Computer Vision aspect of the project, this was proven to be the bottleneck and required us to manage our time properly (and a little bit of help from “borrowing” my brother’s laptop). 

Likewise, half of our team was in-experienced with building a web application, so the steps involved with onboarding and mentoring provided us with more of a time crunch.

An interesting challenge we ran into was dealing with the hybrid nature of the event. Our team was fluid with how we wanted to communicate as a couple of our team members couldn’t make it to campus, or couldn’t stay for long. This required us to think creatively to figure out how to effectively communicate with the team.

## Accomplishments that we're proud of

Getting the different activities to work was a major concern for all of us, and decided the feasibility of the project, so being able to see a final product that includes all of these features was a lovely sight to see.

Our team management skills were one soft skill we were proud of, since our team consisted of students in different years and disciplines, we wanted to make sure we best used our strengths but still provided an overcome-able challenge. We were able to do this by segmenting responsibilities between the team, and pairing whenever we needed assistance.

Balancing the project work and attending the fun on-campus activities. A lot of the team was interested in the other events throughout the hackathon, and were worried that we may run out of time 

## What we learned

Browser-based CV models are difficult to manage since they need to be small enough to load on the client side quickly, but also be verbose enough to detect facial features in different lighting.

NLP models are a hit or miss for a broad topic like sentimental analysis since the use of negation words could completely change the intent of the sentence but Bag-of-Words models still consider it positively.

It’s extremely hard to center a div at 6 am, when we’re all sleep-deprived.

The fun wasn’t the end result, it was the journey and the struggles we had along the way!

## What's next for Smile

- Add more activities to the Smile Mile, so there’s a broad span of activities the user could choose from
- Build our own in-house models for both sentimental analysis and Computer vision, since the current models are for general cases, and can be improved upon through specialization
- We want to polish up the user interface, making things look more refined.
- Creating a mobile app, to make sure you get your smiles on the go!
- Notifications, to remind you to smile, in a Pomodoro-esque style.

## What’s next for you?

It’s obvious! SMILE 😄
