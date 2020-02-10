const protectedRouter = require("express").Router();
const jwt = require("jsonwebtoken");
const secret = "I can't believe this key is so secret!";

const protectedRoute = protectedRouter.use((req, res, next) => {
  jwt.verify(
    req.cookies.usertoken,
    secret,
    (err, payload) => {
      console.log(payload);
      console.log(req.params._id);
      if (err) { 
        res.json({verified: false});
      } else {
        if(req.params._id && req.params._id !== payload._id) {
          res.json({verified: false});
        } else {
          next();
        } 
      }
    }
  );
});
  

module.exports = { protectedRoute, secret };