require("dotenv").config();

const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const app = express();
const jwt = require("jsonwebtoken");
// const users = require("./users");
// const transactions = require("./transactions");
const path = require("path");
// const pg = require('pg');
const UserController = require("./controllers/userController")
const AppointmentController = require("./controllers/appointmentController")

const PORT = process.env.PORT ?? 5000;
const mongoURI = process.env.MONGO_URI;
mongoose.connect(mongoURI, {}, () => {
    console.log("Connected~")
})
console.log("test connection")

const configs = {
    user: 'joy',
    host: '127.0.0.1',
    database: 'unv',
    port: 2345,
};
// const client = new pg.Client(configs);

// client.connect((err) => {

//     if (err) {
//         console.log("error", err.message);
//     }

//     const test = 'SELECT * FROM users'

//     client.query(test, (err, res) => {
//         if (err) {
//             console.log("query error", err.message);
//         } else {
//             console.log("result", res.rows[0]);
//         }
//     });

// });


app.use(express.json());
app.use("/api/users", UserController);
app.use("/api/appointment", AppointmentController);

app.use(express.static("./frontend/build"));

app.get("/api/hi", (req, res) => {
    res.json({ msg: "hello world" });
});



const verifyToken = (req, res, next) => {
    try {
        const authToken = req.headers.token;

        // validate the token
        const decoded = jwt.verify(authToken, process.env.TOKEN_SECRET);

        console.log("decoded jwt", decoded)
        // if valid, retrieve the username from the token
        const username = decoded.user;

        req.user = username;

        next();
    } catch (error) {
        res.sendStatus(403);
    }
};

app.post("/api/posts", verifyToken, (req, res) => {
    const username = jwt.verify(req.headers.token, process.env.TOKEN_SECRET).user;;
    //const userTransactions = transactions[username];
    //res.status(200).json({ transactions: userTransactions });
    res.status(200).json({ 'username': username });
});

app.post("/api/logout", (req, res) => {
    res.clearCookie("NewCookie").send("cookie dead");
});

app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "./frontend/build/index.html"));
})

app.listen(PORT, () => {
    console.log(`listening at port ${PORT}`);
});