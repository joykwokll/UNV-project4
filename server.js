require("dotenv").config();

const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const app = express();
const jwt = require("jsonwebtoken");
const users = require("./users");
const transactions = require("./transactions");
const path = require("path");
// const pg = require('pg');

const PORT = process.env.PORT ?? 5000;
const mongoURI = process.env.MONGO_URI;
const db = mongoose.connection;
mongoose.connect(mongoURI, {}, () => {
    console.log("Connected~")
})

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
app.use(express.static("./frontend/build"));

app.get("/api/hi", (req, res) => {
    res.json({ msg: "hello world" });
});

app.post("/api/login", (req, res) => {
    const { username, password } = req.body;

    if (users[username].password === password) {
        //authenticate and create the jwt
        const newToken = jwt.sign({
                user: username,
            },
            process.env.TOKEN_SECRET, { expiresIn: 60 * 60 }
        );

        res
            .status(200)
            .cookie("NewCookie", newToken, { path: "/", httpOnly: true })
            .send("cookie");
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

app.post("/api/posts", verifyToken, (req, res) => {
    const username = req.user;
    const userTransactions = transactions[username];
    res.status(200).json({ transactions: userTransactions });
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