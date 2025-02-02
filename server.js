const express = require("express");
const hbs = require("express-handlebars");
const path = require("path");

const routes = require("./routes");

const server = express();
server.engine(
  "hbs",
  hbs({
    defaultLayout: "main",
    extname: "hbs"
  })
);
server.set("view engine", "hbs");
server.set("views", path.join(__dirname, "views"));
server.use(express.urlencoded({ extended: true }));
server.use(express.static("public"));

server.use("/", routes);

module.exports = server;
