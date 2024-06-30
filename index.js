const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const crypto = require("crypto");
const fs = require("fs");
const app = express();
const port = process.env.PORT || 5002;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.json());

// the home page will display the "/conjugation/drill.html" file
// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/conjugation/drill.html");
// });

// the "/conjugation/drill.html" file will be displayed, and will GET all other files in the "/conjugation" directory
app.use("/", express.static(__dirname + "/conjugation"));

app.listen(port, "0.0.0.0", () => {
  console.log(`Server listening at http://localhost:${port}`);
});
