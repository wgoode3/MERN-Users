const Users = require('../controllers/user.controller');
const { protectedRoute } = require('../config/jwt.config');

module.exports = app => {
    app.post("/api/register", Users.register);
    app.post("/api/login", Users.login);
    protectedRoute.get("/api/users", Users.getAll);
    app.get("/api/users/:_id", Users.getOne);
    app.use("/", protectedRoute);
}