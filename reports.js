// api/reports.js

const express = require("express");
const router = express.Router();
const multer = require("multer");
const storage = multer.memoryStorage();
const upload = multer({ storage });

// In-memory storage for reports
const reports = [];

// Submit a crime report
router.post("/", upload.fields([{ name: "image" }, { name: "video" }, { name: "audio" }]), (req, res) => {
  const report = {
    reporterName: req.body.reporterName,
    crimeCategory: req.body.crimeCategory,
    crimeDescription: req.body.crimeDescription,
    location: req.body.location,
    date: req.body.date,
    time: req.body.time,
    image: req.files["image"] ? req.files["image"][0] : null,
    video: req.files["video"] ? req.files["video"][0] : null,
    audio: req.files["audio"] ? req.files["audio"][0] : null
  };

  reports.push(report);
  res.json({ message: "Crime report submitted successfully!" });
});

// Retrieve all reports
router.get("/", (req, res) => {
  res.json(reports);
});

module.exports = router;