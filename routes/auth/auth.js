const express = require('express');
const router = express.Router();

// login demo

router.post("/login", (req, res) => {
  const { email, password } = req.body;

  // demo user credentials
  if (email === "user@example.com" && password === "12345") {

  // set a 15 minutes cookies session (900000 ms
    res.cookie('user', email, { maxAge: 900000, httpOnly: true });
    // send success response  
    return res.json({ success: true });
  }

  res.json({ success: false, message: "Invalid credentials" });
});

// signup demo
  router.post("/signup", (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  // Simple demo validation
  if (password.length < 6) {
    return res.json({ success: false, message: "Password too short" });
  }

  // In a real app, store user data in a database
  res.json({ success: true });
});

module.exports = router;