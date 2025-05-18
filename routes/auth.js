const express = require("express")
const router = express.Router()
const usersModel = require("../model/users")
const path = require("path")

// Login page
router.get("/login", (req, res) => {
  res.render("auth/login", {
    title: "Login - CardTrader",
  })
})

// Process login
router.post("/login", (req, res) => {
  const { email, password } = req.body

  const result = usersModel.validateCredentials(email, password)

  if (result.success) {
    // Store user info in session (excluding password)
    const { password, ...userInfo } = result.user
    req.session.user = userInfo
    req.session.isAuthenticated = true
    req.session.success_msg = "You have successfully logged in"
    res.redirect("/")
  } else {
    req.session.error_msg = result.message
    res.redirect("/login")
  }
})

// Signup page
router.get("/signup", (req, res) => {
  res.render("auth/signup", {
    title: "Sign Up - CardTrader",
  })
})

// Process signup
router.post("/signup", (req, res) => {
  const { firstName, lastName, email, password, confirmPassword } = req.body

  // Basic validation
  if (password !== confirmPassword) {
    req.session.error_msg = "Passwords do not match"
    return res.redirect("/signup")
  }

  // Create user object
  const newUser = {
    firstName,
    lastName,
    email,
    password,
  }

  // Add user to storage
  const result = usersModel.addUser(newUser)

  if (result.success) {
    req.session.success_msg = "Account created successfully. You can now log in"
    res.redirect("/login")
  } else {
    req.session.error_msg = result.message || "Error creating account"
    res.redirect("/signup")
  }
})

// Logout
router.get("/logout", (req, res) => {
  req.session.destroy()
  res.redirect("/")
})

module.exports = router