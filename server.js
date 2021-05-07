
//importing express to create server  
import express from 'express'

//importing dotenv for reading the ev=nvironment variables
import dotenv from 'dotenv'

//importing the sendMail function
import { sendMail } from './controller/sendmail.js'

//initializing the config() method to read variables form .env file
dotenv.config()

//initializing the app
const app = express()

//not required but stating that use json data when any data passed from body
app.use(express.json())

//assigning port
const PORT = process.env.PORT || 5002

//root method 
app.get('/',(req,res)=>{
    res.send('Hello world! sending emails usning nodemailer, nodejs, express and handlebars')
})

//method to send emails
//url structure : http://localhost:5002/sendmail/?emails=comma separated values&name=Single name of user
//both are query strings so not necessary to provide
//simply http://localhost:5002/sendmail will work
app.post('/sendmail',(req,res)=>{
    sendMail(req,res)
})

//listening on port PORT
app.listen(PORT, console.log(`Server running on port ${PORT}`))