const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {type: String, required: false},
    username: {type: String, required: false},
    email: {type: String, required: false},
    phone: {type: Number, required: false},
    password: {type: String, required: false},
});

const User = mongoose.model("account-details", userSchema);

module.exports = User;

