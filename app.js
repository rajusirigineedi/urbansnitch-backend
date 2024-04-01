/**
 * Standard NodeJS template for ExpressJS
 */
const path = require("path");
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

// Routes
const userRouter = require("./routes/userRoutes");
const productRouter = require("./routes/productRoutes");

// Start express app
const app = express();

app.enable("trust proxy");
app.use(cors());
app.options("*", cors());
// Body parser, etc.
app.use(express.json());
app.use(express.urlencoded());
app.use(cookieParser());


app.use("/products", productRouter);
app.use("/users", userRouter);

module.exports = app;
