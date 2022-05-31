const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const passwordResetSchema = new Schema({
    userId: {type: String},
    resetString: {type: String},
    createdAt: Date,
    expiresAt: Date
});

const PasswordReset = mongoose.model("password-reset", passwordResetSchema);

module.exports = PasswordReset;

