const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "username is required"],
        minlength: [3, "username must be 3 characters or longer"]
    },
    email: {
        type: String,
        required: [true, "email is required"],
        validate: {
            validator: v => /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(v),
            message: "please enter a valid email"
        }
    },
    password: {
        type: String,
        required: [true, "password is required"],
        minlength: [8, "password must be 8 characters or longer"]
    }
}, {timestamps: true});

UserSchema.virtual('confirm')
    .get(function() {
        return this._confirm;
    })
    .set(function(value) {
        this._confirm = value;
    });

UserSchema.pre('validate', function(next) {
    if (this.password !== this.confirm) {
        this.invalidate('confirm', 'password must match confirm password');
    }
    next();
});

UserSchema.pre('save', function(next) {
    bcrypt.hash(this.password, 10)
        .then(hash => {
            this.password = hash;
            next();
        })
        .catch(err => {
            console.log("hashing failed :(", err);
            next();
        });
});

module.exports = mongoose.model("User", UserSchema);