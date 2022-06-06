const userRouter= require('express').Router()
const {verifyAccessToken}= require('./JWT.helpers')

userRouter.get('/user',async(req, res)=>{

    const {token}=req.cookies
    // await verifyAccessTokengit


})
userRouter.post('/user',async(req, res)=>{
    res.send('this is Post user routes')    

})
userRouter.put('/user',async(req, res)=>{
    res.send('this is put user routes')    
})
userRouter.delete('/user',async(req, res)=>{
    res.send('this is delete user routes')    
})




module.exports= userRouter