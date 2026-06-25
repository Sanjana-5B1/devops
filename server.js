const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files
app.use(express.static(__dirname));

// Home Page
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

// Registration Form Submit
app.post("/register", (req, res) => {

    const data = req.body;

    res.send(`
    <!DOCTYPE html>
    <html>
    <head>
        <title>Registration Success</title>
        <style>
            body{
                font-family: Arial;
                background:#f2f2f2;
                padding:20px;
            }
            .box{
                width:600px;
                margin:auto;
                background:white;
                padding:20px;
                border-radius:10px;
                box-shadow:0px 0px 10px gray;
            }
            h2{
                color:green;
                text-align:center;
            }
            p{
                font-size:16px;
                margin:8px 0;
            }
        </style>
    </head>
    <body>
        <div class="box">
            <h2>Registration Successful</h2>

            <p><b>Full Name:</b> ${data.fullname}</p>
            <p><b>Father Name:</b> ${data.fathername}</p>
            <p><b>Mother Name:</b> ${data.mothername}</p>
            <p><b>Email:</b> ${data.email}</p>
            <p><b>Mobile:</b> ${data.mobile}</p>
            <p><b>Alternate Mobile:</b> ${data.altmobile}</p>
            <p><b>Age:</b> ${data.age}</p>
            <p><b>Gender:</b> ${data.gender}</p>
            <p><b>Date of Birth:</b> ${data.dob}</p>
            <p><b>College:</b> ${data.college}</p>
            <p><b>University:</b> ${data.university}</p>
            <p><b>Branch:</b> ${data.branch}</p>
            <p><b>Year:</b> ${data.year}</p>
            <p><b>Roll Number:</b> ${data.rollno}</p>
            <p><b>Address:</b> ${data.address}</p>
            <p><b>City:</b> ${data.city}</p>
            <p><b>District:</b> ${data.district}</p>
            <p><b>State:</b> ${data.state}</p>
            <p><b>Pincode:</b> ${data.pincode}</p>
            <p><b>Event Name:</b> ${data.eventname}</p>
            <p><b>Event Category:</b> ${data.eventcategory}</p>
            <p><b>Skills:</b> ${data.skills}</p>
            <p><b>Emergency Contact Name:</b> ${data.emergencyname}</p>
            <p><b>Emergency Contact Number:</b> ${data.emergencynumber}</p>
            <p><b>Food Preference:</b> ${data.foodpreference}</p>

        </div>
    </body>
    </html>
    `);
});

// Server Start
app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
