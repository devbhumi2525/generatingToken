const mongoose=require('mongoose')
const createError= require('http-errors')
const mongoConnect=async(url, dbName)=>{
    try {
      const conString= await mongoose.connect(url,{
            dbName:dbName
        })
        if(conString) console.log(`DB is Connected`)
        
        
    } catch (error) {
        console.log(`DB Server is unable to connect right now ${error}`)

    }
}

module.exports={mongoConnect}

