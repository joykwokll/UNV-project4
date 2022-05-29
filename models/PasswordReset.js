const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const passwordResetSchema = new Schema({
    email: {type: String, required: false},
    resetString: {type: String},
});

const PasswordReset = mongoose.model("password-reset", passwordResetSchema);

module.exports = PasswordReset;

