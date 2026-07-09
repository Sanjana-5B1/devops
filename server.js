const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.post("/register",(req,res)=>{

    const registration=req.body;

    console.log("\n==============================");
    console.log("REGISTRATION RECEIVED");
    console.log("==============================");

    console.log("First Name :",registration.firstname);
    console.log("Last Name :",registration.lastname);
    console.log("Email :",registration.email);
    console.log("Phone :",registration.phone);
    console.log("DOB :",registration.dob);
    console.log("Blood Group :",registration.bloodgroup);
    console.log("City :",registration.city);
    console.log("State :",registration.state);
    console.log("Pincode :",registration.pincode);
    console.log("Emergency Contact :",registration.emergency_contact);
    console.log("Gender :",registration.gender);
    console.log("Address :",registration.address);

    console.log("==============================\n");

    const registrationId=Math.floor(Math.random()*100000);

    res.json({

        message:"Registration Successful",

        registrationId:registrationId

    });

});

app.listen(3000,()=>{

    console.log("Registration Microservice Running On Port 3000");

});