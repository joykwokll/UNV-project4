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

//Seed route
router.get("/seed", async (req, res) => {
  const appointmentsSeed = [
    {
      username: "Joy Kwok",
      date: Date.now(),
      time: "time",
      outlet: "Jurong East",
      services: "Pigmentation",
      beautician: "abcd"
    },
    {
      username: "Ivan Leong",
      date: Date.now(),
      time: "time",
      outlet: "Tanjong Pagar",
      services: "Sensitive Skin",
      beautician: "efgh"
    },
  ];
  await AppointmentDetails.deleteMany({});
  await AppointmentDetails.insertMany(appointmentsSeed);
  res.json(appointmentsSeed);
});


//Get route
router.get("/", async (req, res) => {
  const appointmentDetail = await AppointmentDetails.findOne({ username: req.headers.username })
  console.log("User FOUND", appointmentDetail)
  res.send({ appointmentDetail });
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

//Update appointment route
router.post("/updateappointment", async (req, res) => {
  const body = req.body;
  console.log("body", body);
  try {
    console.log(body);
    const updateAppt = await AppointmentDetails.findOneAndUpdate({ username: req.body.username }, req.body);
    updateAppt.save().then(() => res.status(200).send("Success"));

  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

//Delete route
router.delete("/:username", async (req, res) => {
  const deletedAppointment = await AppointmentDetails.findOneAndDelete({
    username: req.headers.username,
  });

  res.json(deletedAppointment);
  ;
});




module.exports = router;

