// =======================================
//              DEPENDENCIES
// =======================================
const express = require("express");
const User = require("../models/Users");
const router = express.Router();
const jwt = require("jsonwebtoken");
// const bcrypt = require("bcrypt");


router.get("/seed", async (req, res) => {
    const userDetails = [
      {
        username: "Joy Kwok",
        email: "hi123@gmail.com",
        password: "12345",
      },
      {
        username: "Ivan Leong",
        email: "hi345@gmail.com",
        password: "12345",
      },
    ];
    await User.deleteMany({});
    await User.insertMany(userDetails);
    res.json(userDetails);
  });

  router.post("/register", async (req, res) => {
    // const saltRounds = 10;
    const body = req.body;
    console.log("body", body);
    try {
      console.log(body);
      const createdUser = await User.create(req.body);
      // const salt = await bcrypt.genSalt(10);
      createdUser.password =
        createdUser.password,
      createdUser.save().then(() => res.status(200).send("Success"));
      
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });

router.post("/login", async (req, res) => {
    const { username, password } = req.body;
    console.log("BODY REQUEST",req.body);
    const findUserName = await User.findOne({username: req.body.username});

    if (findUserName.password === password) {
        //authenticate and create the jwt
        const newToken = jwt.sign({
                user: username,
            },
            process.env.TOKEN_SECRET, { expiresIn: 60 * 60 }
        );
        
        res
            .status(200)
            .cookie("NewCookie", newToken, { path: "/", httpOnly: true })
            .send({"jwt":newToken, "successful":true});
    } else { 
        res.status(403).send({"sucessful":false});
    }
});




// //Create route for login
// router.post("/login", async (req, res) => {
//   console.log("body", req.body);
//   try {
//     const findUserName = await User.findOne({ username: req.body.username }); //req.body.username
//     console.log("findUsername", findUserName);
//     if (findUserName) {
//       const hashPassword = bcrypt.hashSync(req.body.password, saltRounds);
//       // check user password with hashed password stored in the database
//       const validPassword = await bcrypt.compare(
//         req.body.password,
//         findUserName.password
//       );
//       console.log("valid password", validPassword);
//       // const validPassword = await bcrypt.compare("TEST", bcrypt.hashSync("TEST",bcrypt.genSaltSync(10)));

//       if (validPassword) {
//         req.session.currentUser = findUserName.username;
//         req.session.isAuthenticated = true;
//         req.session.count = 1;
//         console.log(req.session);
//         //   res.redirect("/")
//         res.status(200).json({ message: "Valid password", session: req.session });
//       } else {
//         res.status(400).json({ error: "Invalid Password" });
//       }
//     } else {
//       res.status(401).json({ error: "User does not exist" });
//     }

//     console.log(findUserName);
//   } catch (error) {
//     console.log(error);
//   }
// });

// //Create route for new user stock holdings
// router.post("/newUser/:username", async (req, res) => {
//   try {
//     const createdStockHoldings = await StockHoldings.create(
//       {
//         username: req.params.username,
//         purchaseLog: [],
//         cashBalance: 10000,
//         stockBalance: [],
//       }
//     );
//     createdStockHoldings.save().then(() => res.status(200).send("Success"));
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// });

module.exports = router;

