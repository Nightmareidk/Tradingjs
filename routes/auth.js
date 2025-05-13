const express = require('express');
const router = express.Router();
const fs = require('fs');


// login demo

router.post("/login", (req, res) => {
  const { email, password } = req.body;

  // demo user credentials
  if (email === "user@example.com" && password === "12345") {

  // set a 15 minutes cookies session (900000 ms)
    res.cookie('user', email, { maxAge: 900000, httpOnly: true });
    // send success response  
    return res.json({ success: true });
  }

  res.json({ success: false, message: "Invalid credentials" });
});

router.post("/signup", (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  if (password.length < 6) {
    return res.json({ success: false, message: "Password too short" });
  }

  const userData = {
    firstName,
    lastName,
    email,
    password
  };

  // Append user data as JSON string to users.txt
  try {
    fs.appendFileSync('users.txt', JSON.stringify(userData) + '\n');
    res.json({ success: true, message: "User registered and saved to file" });
  } catch (error) {
    console.error("Failed to write file:", error);
    res.status(500).json({ success: false, message: "Error saving user data" });
  }
});


module.exports = router;