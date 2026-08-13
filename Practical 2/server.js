const express = require("express");
const mysql = require("mysql2");

const path = require("path");

const app = express();

const PORT = 3000;


// ===============================
// Middleware
// ===============================

// Allow Express to receive JSON
app.use(express.json());

// Serve React files
app.use(express.static(__dirname));


// ===============================
// MySQL Connection
// ===============================

const db = mysql.createConnection({

    host: "localhost",

    user: "root",

    password: "Hanabi@#143",

    database: "studentdb"

});


db.connect((err) => {

    if (err) {

        console.error("MySQL connection failed!");
        console.error(err);

        return;

    }

    console.log("Connected to MySQL!");

});


// ===============================
// Home Page
// ===============================

app.get("/", (req, res) => {

    res.sendFile(
        path.join(__dirname, "index.html")
    );

});


// ===============================
// Register Student
// ===============================

app.post("/register", (req, res) => {

    const {

        name,
        email,
        mobile,
        dob,
        gender,
        course,
        address

    } = req.body;


    console.log("Received student data:");
    console.log(req.body);


    // Convert JavaScript date to MySQL DATE
    const formattedDob =
        new Date(dob).toISOString().split("T")[0];


    const sql = `
        INSERT INTO students
        (name, email, mobile, dob, gender, course, address)
        VALUES (?, ?, ?, ?, ?, ?, ?)
    `;


    db.query(

        sql,

        [
            name,
            email,
            mobile,
            formattedDob,
            gender,
            course,
            address
        ],

        (err, result) => {

            if (err) {

                console.error("Database error:");
                console.error(err);

                return res.status(500).json({

                    message: "Failed to register student."

                });

            }


            console.log(
                "Student inserted successfully!"
            );


            res.json({

                message: "Student registered successfully!"

            });

        }

    );

});


// ===============================
// Start Server
// ===============================

app.listen(PORT, () => {

    console.log(
        `Server running at http://localhost:${PORT}`
    );

});