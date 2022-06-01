const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const appointmentSchema = new Schema({
    username: {type: String},
    date: Date,
    time: {type: String},
    outlet: {type: String},
    services: {type: String},
    beautician: {type: String}
});

const AppointmentDetails = mongoose.model("appointment-details", appointmentSchema);

module.exports = AppointmentDetails;

