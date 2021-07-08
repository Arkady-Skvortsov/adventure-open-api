const express = require("express");
const cors = require("cors");
const path = require("path");
const pages = require("./routes/pages.js");
const app = express();
const port = process.env.PORT || 4000;

app.set("views", path.resolve(__dirname, "ejs"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("./ejs"));
app.use(pages);

app.listen(port, () => console.log(`Hello http://localhost:${port}`));

module.exports = app;
