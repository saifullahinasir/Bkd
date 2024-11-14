// api/admin.js

const express = require("express");
const router = express.Router();

// Admin credentials (In a real app, use environment variables or a secure database)
const ADMIN_USERNAME = "admin";
const ADMIN_PASSWORD = "password"; // Replace with a secure password

// Handle admin login
router.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
    res.json({ success: true });
  } else {
    res.json({ success: false });
  }
});

module.exports = router;