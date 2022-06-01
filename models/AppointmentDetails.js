const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const appointmentSchema = new Schema({
    Username: {type: String},
    Date: Date,
    Time: {type: String},
    Outlet: {type: String},
    Services: {type: String}
});

const AppointmentDetails = mongoose.model("appointment-details", appointmentSchema);

module.exports = AppointmentDetails;

