// =======================================
//              DEPENDENCIES
// =======================================
const dotenv = require('dotenv');
const express = require("express");
const User = require("../models/Users");
const AppointmentDetails = require("../models/AppointmentDetails")
const router = express.Router();
// const jwt = require("jsonwebtoken");
// const bcrypt = require("bcrypt");

dotenv.config();
// const { v4: uuidv4 } = require("uuid");
// const res = require("express/lib/response");



//Get route
router.get("/", async (req, res) => {
    const appointmentDetail = await AppointmentDetails.findOne({username: req.headers.username})
    console.log("User FOUND",appointmentDetail)
    res.send({appointmentDetail});
  });

//Create appointment route
router.post("/appointment", async (req, res) => {

    const body = req.body;
    console.log("body", body);
    try {
      console.log(body);
      const createdAppt = await AppointmentDetails.create(req.body);
      createdAppt.save().then(() => res.status(200).send("Success"));
  
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });

//   //Update appointment route
// router.post("/updateappointment", async (req, res) => {
//   const body = req.body;
//   console.log("body", body);
//   try {
//     console.log(body);
//     const updateAppt = await AppointmentDetails.findOneAndUpdate({username: req.headers.username});
//     updateAppt.save().then(() => res.status(200).send("Success"));

//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// });


  


module.exports = router;

