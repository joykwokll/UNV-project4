const dotenv = require('dotenv');
const express = require("express");
const AppointmentDetails = require("../models/AppointmentDetails")
const router = express.Router();

dotenv.config();

//Get route for admin
router.get("/", async (req, res) => {
    const adminAppointmentDetail = await AppointmentDetails.find()
    console.log("User FOUND", adminAppointmentDetail)
    res.send({ adminAppointmentDetail });
  });



module.exports = router;
