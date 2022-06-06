const loginRoute=require("express").Router()
loginRoute.get('/login', async(req, res, next)=>{
    res.render('login')

})

loginRoute.post('/login', async(req, res, next)=>{
    res.send(req.body)
    
})

module.exports=loginRoute