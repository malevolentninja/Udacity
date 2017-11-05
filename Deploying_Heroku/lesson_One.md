# Lesson One: Deployment in a Flash

### 1. Introduction
Nothing to write

### 2. Course Outline
Two key lessons: 
Lesson 1: Deployment in a Flash
Lesson 2: 

### 3. What is deployment?
Nothing to write

### 4. Quiz: New Vocabulary

What is the relationship between these concepts: host, localhost, server, and deployment?
The correct answer is C: After developing on localhost, a developer will deploy an app by hosting it on a web server.

### 5. What is Heroku?

- Heroku is a platform service to upload code and make accessible to everyone.
- Also in the cloud computing services category of Paas (Platform as a service) 
- enables the development, running and management of applications


### 6. Heroku Setup

#### First need an account:
Signup free for a Heroku Account

#### Second the Heroku Toolbelt:
Heroku toolbelt is a command line tool to help with heroku commands.

#### Third Heroku login:

- From the command line type 'heroku login' to setup the credentionals 
- This avoids having to login all the time to deploy.
- If you do get logged out, can log back in

#### Fourth Ensure git is installed:

Once git is installed;
- 'git clone' the new repo formed
- cd directory
- git status

#### Fifth Heroku Create:
- ```sh heroku create``` command makes a new remote repo named heroku
- To ensure proper creation ```sh git remote-v```  to reveal the remotes origin and heroku

#### sixth Git push Heroku master:

- ```sh git push heroku master``` is similar to git push but push to the heroku remote
- should be a large output generated in the shell for the app to launch

#### seventh Heroku open 
- once deployed ```sh heroku open``` opens up the browser
- Enables you to navigate to the applciation URL



