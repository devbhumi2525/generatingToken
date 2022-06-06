const JWT = require("jsonwebtoken");
const createError = require("http-errors");
module.exports = {
  //generating token
  signAccessToken: (userId) => {
    return new Promise((resolve, reject) => {
      const payload = {};
      const secret = process.env.SIGN_ACCESS_SECRET;
      const option = {
        expiresIn:'2m',
        issuer:"Gray Chain",
        audience:userId
      };
      JWT.sign(payload, secret, option, (err, token) => {
        if (err) {
            console.log(err)
            return reject(createError.InternalServerError());
        }
        return resolve(token);
      });
    });
  },
  //veryfing token
  verifyAccessToken: (req, res, next)=>{
      if(!req.headers['authorization']) return next(createError.Unauthorized())
      const Bearer=req.headers['authorization']
      const bearerToken=Bearer.split(" ")
      const token =bearerToken[1]
      const isVerify=JWT.verify(token,process.env.SIGN_ACCESS_SECRET,(err, payload)=>{
        if(err){
          return next(createError.Unauthorized())
        }
        req.payload=payload
        next()
      })
  },

  refreshAccessToken: (userId)=> {
    return new Promise( (resolve, reject)=>{
      const payload={}
      const secret={}
      const option={
        expiresIn:'1y',
        issuer:"Gray Chain",
        audience:userId
      }
      JWT.sign(payload, option, secret,(err, token)=>{
        if(err) return reject(createError.InternalServerError())
        return resolve(token)
      })
    })
  },

  verifyRefreshAccessToken: (refreshToken)=>{
    return new Promise((resolve, reject)=>{
      JWT.verify(refreshToken, process.env.REFRESH_ACCESS_SECRET,(err, payload)=>{
        if(err) return reject(createError.Unauthorized())
        const userId=payload.aud
        return resolve(userId)
      })
    })
  }
};
