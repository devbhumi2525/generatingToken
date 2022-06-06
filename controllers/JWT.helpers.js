const JWT = require("jsonwebtoken");
const createError = require("http-errors");
module.exports = {
  signAccessToken: (userId) => {
    return new Promise((resolve, reject) => {
      const payload = {};
      const secret = "";
      const option = {};
      JWT.sign(payload, secret, option, (err, token) => {
        if (err) {
            console.log(err)
            return reject(createError.InternalServerError());
        }
        return resolve(token);
      });
    });
  },
  verifyAccessToken: (req, res, next)=>{
      if(!req.headers['authoriz'])
  }
};
