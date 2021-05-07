
//main package used for sending mails
import nodemailer from 'nodemailer';

//templating engine for sending mail and create beautiful templates
import hbs from 'nodemailer-express-handlebars'

//inbuilt module for resolving the path of the template files to look for sending emails
import path from 'path'

//package for reading the environment variables
import dotenv from 'dotenv'

//calling the config method to read the variables saved in the '.env file'
dotenv.config()

//main sending function
const sendMail = (req,res) => {
    
    //initializing __dirname since it is deprecate din ES6 so we need to do path.resolve()
    const __dirname = path.resolve()
    
    //creating the transporter object which is the main instance to send emails
    //passing two parameters in createTransport --> 
    //service provider ( gmail in this case ) can be anything read here --> https://www.nodemailer.com/usage
    //auth object taking in two keys user --> the user email who is sendng the email
    //------------------------------ pass --> the password of email provided
    const transporter = nodemailer.createTransport({service: 'gmail',auth:{user:process.env.USER, pass:process.env.PASSWORD}})

    //setting the template engine for the email template using the path module
    transporter.use('compile',hbs({viewEngine:'nodemailer-express-handlebars', viewPath:path.join(__dirname,'/controller/views/')}))
    
    //initializing some variables to provide a dynamic email
    let name, emails;

    //if request contains name query string then assign it to the name variable 
    if (req.query.name){
        name = req.query.name
    }
    else{
        name = 'Beginner'
    }
    
    //if request contains emails query string then assign it to the emails variable ( can be more than one comma separated values ) 
    if(req.query.emails){
        emails = req.query.emails.split(',').toString()
    }
    else{
        emails = process.env.USER
    }

    //the key part of the//setting the mailing options
    //NOTE --> from and auth.user ( in createTransport ) should be same if using Gmail else it will give error
    const mailOptions = {
        
        //who is sending emails
        from : process.env.USER, 

        //to whom is sending emails
        to: emails,

        //subject of the email
        subject : 'Test boilerplate for sending emails',
        
        //use the handlebars file with name 'sample'
        template : 'sample',

        //pass in the variable in the handlebars file
        context : {
            name:name
        }
    }

    //calling the sendMail method on the transporter object created
    //take sin two parameters mailOptions and a callback function
    //the callback function takes two parameters ( error, info )
    //see console logging each to know more
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

//exporting the function sendMail
export { sendMail } 