const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// In-memory storage for reports
const reports = [];

// Setup multer for file uploads
const upload = multer({ dest: 'uploads/' });

// Route to submit a crime report
app.post('/api/reports', upload.fields([{ name: 'image' }, { name: 'video' }, { name: 'audio' }]), (req, res) => {
  const { reporterName, crimeCategory, crimeDescription, location, date, time } = req.body;
  const report = {
    reporterName,
    crimeCategory,
    crimeDescription,
    location,
    date,
    time,
    files: req.files
  };
  reports.push(report);
  res.status(200).json({ message: 'Report submitted successfully!' });
});

// Admin login route
app.post('/api/admin', (req, res) => {
  const { username, password } = req.body;
  if (username === 'admin' && password === 'adminpassword') {
    res.status(200).json({ message: 'Login successful', reports });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

// Handle Vercel's serverless function export
module.exports = app;
