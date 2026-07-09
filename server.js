const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(express.json());
app.use(cors());

// Serve HTML, CSS and JS files
app.use(express.static(__dirname));

// Home page
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

// Register API
app.post("/register", (req, res) => {

    const registration = req.body;

    console.log("\n========================================");
    console.log("BANGLE MAKING EVENT REGISTRATION RECEIVED");
    console.log("========================================");
    console.log(registration);

    const registrationId = Math.floor(Math.random() * 100000);

    res.json({
        message: "Registration Successful",
        registrationId: registrationId
    });

});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});