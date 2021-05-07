import nodemailer from 'nodemailer';
import hbs from 'nodemailer-express-handlebars'
import path from 'path'
import dotenv from 'dotenv'

dotenv.config()

const sendMail = (req,res) => {
    
    const __dirname = path.resolve()
    
    const transporter = nodemailer.createTransport({service: 'gmail',auth:{user:process.env.USER, pass:process.env.PASSWORD}})
    
    transporter.use('compile',hbs({viewEngine:'nodemailer-express-handlebars', viewPath:path.join(__dirname,'/controller/views/')}))
    
    let name;

    if (req.query.name){
        name = req.query.name
    }

    let emails

    if(req.query.emails){
        emails = req.query.emails.split(',').toString()
    }
    else{
        emails = process.env.USER
    }

    const mailOptions = {
        from : process.env.USER, 
        to: emails,
        subject : 'Test boilerplate for sending emails',
        template : 'sample',
        context : {
            name:name
        }
    }

    transporter.sendMail(mailOptions,(err, info) => {
        if(err){
            console.log(err.message)
            res.status(500)
            res.send(err.message)
        }
        else{
            res.status(200)
            res.send(`Email sent`)
        }
    })
}

export { sendMail } 