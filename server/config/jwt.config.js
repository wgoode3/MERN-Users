const jwt = require("jsonwebtoken");
const secret = "I can't believe this key is so secret!";


const authenticate = (req, res, next) => {
	jwt.verify(
    req.cookies.usertoken,
    secret,
    (err, payload) => {
      if (err) { 
        res.status(401).json({verified: false});
      } else {
        if(req.params._id && req.params._id !== payload._id) {
          res.status(401).json({verified: false});
        } else {
          next();
        } 
      }
    }
  );
}


module.exports = { authenticate, secret };