const signUp = require('express').Router()
const {authSchema}=require('./Joi.Schema')
const User=require('../models/user.Schema')
const createError= require('http-errors')
const {signAccessToken, refreshAccessToken} =require('./JWT.helpers')
signUp.get('/signup', async(req, res, next)=>{

    res.render('signup')

})
signUp.post('/signup', async(req, res, next)=>{
    try {
        const result= await authSchema.validateAsync(req.body)
        console.log(result.email)
        const doesExist =  await User.findOne({email:result.email})
        if(doesExist) throw createError.Conflict('user is already exixt')
        const {name,email,password}=result
        const user =new User({name,email,password})
        const savedUser= await user.save()
        const token= await signAccessToken(savedUser.id)
        const refreshToken= await refreshAccessToken(savedUser.id)
        res.cookie('token',token,{httpOnly:true})
        res.cookie('refreshToken',refreshToken,{httpOnly:true})
        res.redirect('/user')        
    } catch (error) {
        res.send(error)        
    }

    
})
module.exports=signUp