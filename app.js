require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
// const passport = require("passport");
const usersRouter = require("./routes/users");
const rolesRouter = require("./routes/roles");
const feedRouter = require("./routes/feeds");
const groupRouter = require("./routes/groups");
// const mongoose = require("mongoose");
require("./db");
const app = express();

app.use(logger("combined"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/users", usersRouter);
app.use("/roles", rolesRouter);
app.use("/feeds", feedRouter);
app.use("/groups", groupRouter);

module.exports = app;
