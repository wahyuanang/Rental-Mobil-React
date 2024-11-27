require("dotenv").config();

const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const router = require("../config/routes");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(morgan("dev"));
app.use("/", router);

module.exports = app;