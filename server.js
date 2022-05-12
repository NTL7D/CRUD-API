const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

dotenv.config({ path: "config.env" });
const PORT = process.env.PORT || 8000;

app.use(morgan("tiny"));

app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");
// app.set("views", path.resolve(__dirname, "views/ejs"));

app.use("/css", express.static(path.resolve(__dirname, "assets/css")));
app.use("/images", express.static(path.resolve(__dirname, "assets/images")));
app.use("/js", express.static(path.resolve(__dirname, "assets/js")));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/add_product", (req, res) => {
  res.render("add_product");
});

app.get("/edit_product", (req, res) => {
  res.render("edit_product");
});

app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}`);
});
