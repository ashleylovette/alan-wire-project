const express = require("express");
const path = require("path");

const app = express();

app.use(express.static("./dist/alan-wire-project"));

app.get("/*", (req, res) => {
  res.sendFile("index.html", {root: "dist/alan-wire-project"})
});

app.listen(process.env.PORT || 8080);
