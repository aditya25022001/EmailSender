# EmailSender

# Main note : Please do read the comments necessarily

# Pre-requisites

* Postman ( backend client, for testing purpose ) download here : https://www.postman.com/downloads/
* Node.js ( kind of obvious ) download here : https://nodejs.org/en/download/

# Steps to follow to create custom email sender

* Initializing the project

    <code>npm init</code>

* Installing dependencies

   <code>npm install express nodemon nodemailer nodemailer-express-handlebars dotenv</code>
   
* Initiate server.js ( index.js )

* Create a <code>.env</code> file and add following to it

  <code>PORT = 5002</code>
  
  <code>USER = your email address</code>
  
  <code>PASSWORD = your email password</code>

* Create a <code>.gitignore</code> file and add node_modules and .env file to it ( if have a repository and any repo hosting platform account )

* Create a <code>main.handlebars</code> file in root directory

* Create a folder <code>controller</code> and in that create a folder <code>views</code>

* In controller-->views you will keep your templates

* In controller folder add file <code>sendMail.js</code>

* This was the initial biolerplate setup for the email sender, rest is well commented in the code.

* Any issues are welcome

# Running the email sender
* If installed nodemon 

    <code>nodemon server.js</code>
    
* If not installed nodemon

    <code>node server.js</code>
    
* Then go to Postman ( backend client ) and run a <code>POST</code> request on following

    <code>http://localhost:5002/sendmail/?name=YOUR_NAME&emails=EMAILS_TO_WHOM_YOU_WANT_TO_SEND</code>

* Here **name** and **emails** are not required since they are query parameters.

* If any error occurs it will show up on the console and also on the Postman response screen

* If all went well <code>Emails sent</code> message will be shown on the Postman response and also on the console.


**CHEERS!**
