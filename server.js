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

const PORT = process.env.PORT ?? 5000;
const mongoURI = process.env.MONGO_URI;
const db = mongoose.connection;
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

app.use(express.static("./frontend/build"));

app.get("/api/hi", (req, res) => {
    res.json({ msg: "hello world" });
});

app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "./frontend/build/index.html"));
})

app.listen(PORT, () => {
    console.log(`listening at port ${PORT}`);
});