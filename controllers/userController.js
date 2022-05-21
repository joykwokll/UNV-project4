// =======================================
//              DEPENDENCIES
// =======================================
const express = require("express");
const User = require("../models/Users");
const router = express.Router();
const jwt = require("jsonwebtoken");

// router.post("/register/:username", async (req, res) => {
//     const body = req.body;
//     console.log("body", body);
//     try {
//       console.log(body);
//       const createdUser = await User.create(req.body);
//       // const salt = await bcrypt.genSalt(10);
//       createdUser.password = await bcrypt.hashSync(
//         createdUser.password,
//         saltRounds
//       );
//       createdUser.save().then(() => res.status(200).send("Success"));

router.get("/seed", async (req, res) => {
    const userDetails = [
      {
        username: "Joy Kwok",
        email: "hi123@gmail.com",
        password: "88888"
      },
      {
        username: "Ivan Leong",
        email: "hi345@gmail.com",
        password: "88888"
      },
    ];
    await User.deleteMany({});
    await User.insertMany(userDetails);
    res.json(userDetails);
  });

router.post("/login", async (req, res) => {
    const { username, password } = req.body;

    if (User[username].password === password) {
        //authenticate and create the jwt
        const newToken = jwt.sign({
                user: username,
            },
            process.env.TOKEN_SECRET, { expiresIn: 60 * 60 }
        );

        const createdUser = await User.create(req.body);
        createdUser.save().then(() => 
        
        res
            .status(200)
            .cookie("NewCookie", newToken, { path: "/", httpOnly: true })
            .send("cookie")  );
    } else { 
        res.status(403).send("unauthorised");
    }
});

const verifyToken = (req, res, next) => {
    try {
        const authToken = req.headers.token;

        // validate the token
        const decoded = jwt.verify(authToken, process.env.TOKEN_SECRET);

        // if valid, retrieve the username from the token
        const username = decoded.user;

        req.user = username;

        next();
    } catch (error) {
        res.sendStatus(403);
    }
};

router.post("/api/posts", verifyToken, (req, res) => {
    const username = req.user;
    const userTransactions = transactions[username];
    res.status(200).json({ transactions: userTransactions });
});

router.post("/api/logout", (req, res) => {
    res.clearCookie("NewCookie").send("cookie dead");
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

