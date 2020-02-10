const Users = require('../controllers/user.controller');

module.exports = app => {
    app.post("/api/register", Users.register);
    app.post("/api/login", Users.login);
    app.get("/api/users", Users.getAll);
}