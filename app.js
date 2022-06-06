const express = require('express')
const createError= require('http-errors')
const loginRoute = require('./controllers/login.route')
const signUp = require('./controllers/signup.route')
const userRouter = require('./controllers/user.route')
const cookieParser = require("cookie-parser");
const app= express()
require('dotenv').config()
const {mongoConnect}=require('./db')
app.use(express.json())
app.use(cookieParser());
app.use(express.urlencoded({extended:false}))
app.set('view engine','ejs')

// user routes
app.use('/',userRouter)
// login routes
app.use('/',loginRoute)
//signup route
app.use('/',signUp)
app.get('/',(req, res)=>{
    res.render('index')
})



app.use((req, res, next)=>{
    next(createError.NotFound())
})
app.use((err, req, res, next)=>{
    
        res.status(err.status||500)
        .send({
            message:err.message|| "Requested page not available"
        })
    
})

const port =process.env.PORT || 4000
mongoConnect(process.env.DB_URI,process.env.DB_NAME)
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})
