const User = require('../models/user.model');
const bcrypt = require('bcrypt');

class UserController {
  
  register(req, res) {
    const user = new User(req.body);
    user.save()
      .then( () => res.json({msg: "ok"}))
      .catch( err => res.json(err));
  }

  login(req, res) {
    User.findOne({email: req.body.email})
      .then(user => {
        if(user === null) {
          res.json({msg: "invalid login attempt"});
        } else {
          bcrypt.compare(req.body.password, user.password)
            .then(passwordIsValid => {
              if(passwordIsValid) {
                res.json({msg: "success"});
              } else {
                res.json({msg: "invalid login attempt"});
              }
            })
            .catch(err => res.json({msg: "invalid login attempt"}));
        }
      })
      .catch(err => res.json(err));
  }
  
  getAll(req, res) {
    User.find()
      .then(users => res.json(users))
      .catch(err => res.json(err));
  }
}

module.exports = new UserController();