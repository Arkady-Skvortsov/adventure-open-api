const express = require("express");
const path = require("path");
const fs = require("fs");
const process = require("process");
const pages = require("./routes/pages.js");

const app = express();
const port = process.env.PORT || 4500;

app.set("views", path.resolve(__dirname, "ejs"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("./ejs"));
app.use(pages);

app.listen(port, () => console.log(`Hello http://localhost:${port}`));
