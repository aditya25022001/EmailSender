import express from 'express'
import dotenv from 'dotenv'
import { sendMail } from './controller/sendmail.js'

dotenv.config()

const app = express()

const PORT = process.env.PORT || 5002

app.use(express.json())

app.get('/',(req,res)=>{
    res.send('hello world')
})

app.post('/sendmail',(req,res)=>{
    sendMail(req,res)
})

app.listen(PORT, console.log(`Server running on port ${PORT}`))