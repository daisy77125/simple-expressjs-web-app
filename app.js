const express = require("express");
const path = require("path");
const logger = require("./middleware/logger");

const app = express();

// Init logger
app.use(logger);

// Set static folder
app.use(express.static("public"));
/*
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/about.html", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "about.html"));
});

app.get("/css/style.css", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "css/style.css"));
});

app.get("/main.js", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "main.js"));
});
*/

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
