// index.js

const express = require("express");
const app = express();
const reports = require("./api/reports");
const admin = require("./api/admin");

app.use(express.json());
app.use("/api/reports", reports);
app.use("/api/admin", admin);

module.exports = app;