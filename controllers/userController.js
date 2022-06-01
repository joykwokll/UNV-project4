// =======================================
//              DEPENDENCIES
// =======================================
const dotenv = require('dotenv');
const express = require("express");
const User = require("../models/Users");
const PasswordReset = require("../models/PasswordReset");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

dotenv.config();
const { v4: uuidv4 } = require("uuid");
const res = require("express/lib/response");

//Nodemailer
const nodemailer = require("nodemailer");
const { find } = require('../models/Users');
const { resetWatchers } = require('nodemon/lib/monitor/watch');
let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.AUTH_EMAIL,
    pass: process.env.AUTH_PASS,
  }
})
const saltRounds = 10;
router.get("/seed", async (req, res) => {
  const userDetails = [
    {
      username: "Joy Kwok",
      email: "hi123@gmail.com",
      password: bcrypt.hashSync("12345", saltRounds),
      contact: "91234567"
    },
    {
      username: "Ivan Leong",
      email: "hi345@gmail.com",
      password: bcrypt.hashSync("12345", saltRounds),
    },
  ];
  await User.deleteMany({});
  await User.insertMany(userDetails);
  res.json(userDetails);
});

//Register
router.post("/register", async (req, res) => {
  const saltRounds = 10;
  const body = req.body;
  console.log("body", body);
  try {
    console.log(body);
    const createdUser = await User.create(req.body);
    createdUser.password = await bcrypt.hashSync(
      createdUser.password,
      saltRounds
    );
    createdUser.save().then(() => res.status(200).send("Success"));

  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});


//Login

router.post("/login", async (req, res) => {
  const { usernameOrEmailOrContact, password } = req.body;

  console.log("BODY REQUEST", req.body);

  // const findUserName = await User.findOne({ $or: [{ username }, { email }, { contact }] })
  let findUserName = null
  console.log("findUSer1", findUserName)
  if (!findUserName) {
    findUserName = await User.findOne({ username: usernameOrEmailOrContact });
  }
  if (!findUserName) {
    findUserName = await User.findOne({ contact: usernameOrEmailOrContact });
  }
  if (!findUserName) {
    findUserName = await User.findOne({ email: usernameOrEmailOrContact });
  }
  console.log("findUSer2", findUserName)
  if (findUserName !== null) {
    console.log(findUserName)
    const validPassword = await bcrypt.compare(
      req.body.password,
      findUserName.password
      // saltRounds
    );
    if (validPassword) {
      //authenticate and create the jwt
      const newToken = jwt.sign({
        user: findUserName.username,
      },
        process.env.TOKEN_SECRET, { expiresIn: 60 * 60 }
      );

      res
        .status(200)
        .cookie("NewCookie", newToken, { path: "/", httpOnly: true })
        .send({ "jwt": newToken, "successful": true, "username": findUserName.username });
    } else {
      res.status(403).send({ "sucessful": false });
      console.log("user does not exist")
    }
  }
  else {
    res.status(403).send({ "sucessful": false });
    console.log("user does not exist")
  }
});




//Password reset
router.post("/passwordReset", (req, res) => {
  const { email, redirectURL } = req.body;

  //check if email exists
  User
    .find({ email })
    .then((data) => {
      console.log("data", data)
      if (data.length) {
        sentResetEmail(data[0], redirectURL, res);
      } else {
        res.json({
          status: "FAILED",
          message: "Email does not exist.",
        })
      }
    })
})


//Send password reset email
const sentResetEmail = ({ username, password, email, _id }, redirectURL, res) => {
  const resetString = uuidv4() + _id;

  PasswordReset
    .deleteMany({ userId: _id })
    .then(result => {
      const mailOptions = {
        from: process.env.AUTH_EMAIL,
        to: email,
        subject: "Reset your password",
        html: `<h3>Hi ${username},</h3> <p>Forgot your password? No worries. Just click the link below to reset your password.</p> 
        <p>This link <b>expires in 60 minutes</b>.</p> <p>Press <a href = ${redirectURL + "/" + _id + "/" + resetString}>
        here</a> to proceed.</p>
          <br/>
          <p>Sincerely, </p>
          <p><i>UNV Aesthetics</i></p>`,
      };

      // <a href = ${redirectURL + "/" + _id + "/" + resetString}>
      //hash the reset string

      const saltRounds = 10;
      bcrypt
        .hash(resetString, saltRounds)
        .then(hashedResetString => {
          const newPasswordReset = new PasswordReset({
            userId: _id,
            resetString: hashedResetString,
            createdAt: Date.now(),
            expiresAt: Date.now() + 3600000
          });

          newPasswordReset
            .save()
            .then(() => {
              transporter
                .sendMail(mailOptions)
                .then(() => {
                  res.json({
                    status: "PENDING",
                    message: "Password reset email sent"
                  })
                })

            })
        })
        .catch(error => {
          console.log(error);
          res.json({
            status: "FAILED",
            message: "An error occured while hashing",
          })
        })

    })
}

//Resetting the password here
router.post("/resetPassword", (req, res) => {
  let { _id, resetString, newPassword } = req.body;
  PasswordReset
    .find({ userId: _id })
    .then(result => {
      if (result.length > 0) {
        //password reset record exists
        const { expiresAt } = result[0];
        const hashedResetString = result[0].resetString;

        //checking for expired reset string
        if (expiresAt < Date.now()) {
          PasswordReset
            .deleteOne({ userId })
            .then(() => {
              //Reset record delete successfully
              res.json({
                status: "FAILED",
                message: "Password reset link has expired",
              })
            }
            )
            .catch(error => {
              //deletion failed
              console.log(error);
              res.json({
                status: "FAILED",
                message: "Clearing password reset record failed"
              })
            }
            )
        } else {
          //valid reset record exists

          bcrypt
            .compare(resetString, hashedResetString)
            .then((result) => {
              if (result) {

                //string matched, hashing password

                const saltRounds = 10;
                bcrypt
                  .hash(newPassword, saltRounds)
                  .then(hashedNewPassword => {
                    //update user password
                    console.log('hashedNewPassword', hashedNewPassword);
                    User
                      .updateOne({ _id }, { $set: { password: hashedNewPassword } })
                      .then(() => {
                        //update complete. 
                        PasswordReset
                          .findOneAndDelete({ userId: _id })
                          .then(() => {
                            res.json({
                              status: "SUCCESS",
                              message: "Password user record and reset record updated"
                            })
                          })
                          .catch(error => {
                            console.log(error);
                            res.json({
                              status: "FAILED",
                              message: "An error occured while finalising password reset"
                            })
                          })
                      })
                      .catch(error => {
                        console.log(error);
                        res.json({
                          status: "FAILED",
                          message: "Updating user password failed"
                        })
                      })


                  })
                  .catch(error => {
                    console.log(error);
                    res.json({
                      status: "FAILED",
                      message: "An error occured while hasing new password"
                    })
                  })

              } else {
                //existing record but incorrect reset string
                res.json({
                  status: "FAILED",
                  message: "Invalid password reset details"
                })
              }
            })
            .catch(error => {
              console.log(error);
              res.json({
                status: "FAILED",
                message: "Comparing password reset failed"
              })
            }
            )
        }

      } else {
        //Password reset record doesn't exist
        res.json({
          stauts: "FAILED",
          message: "Password reset request not found",
        })
      }
    })
    .catch(error => {
      console.log(error);
      res.json({
        status: "FAILED",
        message: "Checking for existing password reset failed"
      })
    }
    )
})



module.exports = router;

