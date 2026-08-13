const express = require("express");
const mysql = require("mysql2");
const path = require("path");

const app = express();
const PORT = 3000;

// ===========================
// Middleware
// ===========================

// Accept JSON from AngularJS
app.use(express.json());

// Serve static files
app.use(express.static(path.join(__dirname, "public")));


// ===========================
// Database Connection
// ===========================

const db = mysql.createConnection({

    host: "localhost",
    user: "root",
    password: "Hanabi@#143",
    database: "studentdb"

});

db.connect((err)=>{

    if(err){

        console.log(err);
        return;

    }

    console.log("Connected to MySQL!");

});


// ===========================
// Home Route
// ===========================

app.get("/",(req,res)=>{

    res.sendFile(path.join(__dirname,"public","index.html"));

});


// ===========================
// Register Student
// ===========================

app.post("/register",(req,res)=>{

    const{

        name,
        email,
        mobile,
        dob,
        gender,
        course,
        address

    } = req.body;

    const formattedDob = new Date(dob).toISOString().split("T")[0];

    const sql = `
        INSERT INTO students
        (name,email,mobile,dob,gender,course,address)
        VALUES(?,?,?,?,?,?,?)
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

        (err,result)=>{

            if(err){

                console.log(err);

                return res.status(500).json({

                    message:"Failed to Register Student"

                });

            }


            res.json({

                message:"Student Registered Successfully!"

            });

        }

    );

});


// ===========================
// View Students
// ===========================

app.get("/students",(req,res)=>{

    db.query(

        "SELECT * FROM students",

        (err,result)=>{

            if(err){

                return res.status(500).json(err);

            }

            res.json(result);

        }

    );

});


// ===========================
// Start Server
// ===========================

app.listen(PORT,()=>{

    console.log(`Server Running at http://localhost:${PORT}`);

});