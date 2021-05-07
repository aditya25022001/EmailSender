# EmailSender
# Main note : Please do read the comments necessarily
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

* Create a <code>.gitignore</code> file and add node_modules and .env file to it

* Create a <code>main.handlebars</code> fiel in root directory

* Create a folder <code>controller</code> and in that create a folder <code>views</code>

* In controller-->views you will keep your templates

* In controller folder add file <code>sendMail.js</code>

* This was the initial biolerplate setup for the email sender, rest is well commented in the code.

* Any issues are welcome

**CHEERS!**
