const userRouter= require('express').Router()

userRouter.get('/user',async(req, res)=>{

    res.send('this is user routes')

})
userRouter.post('/user',async(req, res)=>{
    
})
userRouter.put('/user',async(req, res)=>{
    
})
userRouter.delete('/user',async(req, res)=>{
    
})




module.exports= userRouter