const userRouter= require('express').Router()

userRouter.get('/user',async(req, res)=>{

    console.log(req.cookies)
    res.send('data')

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