import { NextFunction, Request, Response } from "express";
import express from "express";
import path from "path";
import logger from "morgan";
import cookieParser from "cookie-parser";

// Routers
import index from "@/routes/Index";
import user from "@/routes/User";
import sensor from "@/routes/Sensor";
import actuator from "@/routes/Actuator";
const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", index);
app.use("/user", user);
app.use("/sensor", sensor);
app.use("/actuator", actuator);

// catch 404
app.use(function (req: Request, res: Response, next: NextFunction) {
  // handle it how it pleases you
  res.status(404).json({ message: "not_found" });
});

// error handler
app.use(function (err: any, req: Request, res: Response, next: NextFunction) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

/* My adds */
//Import the mongoose module
var mongoose = require('mongoose');

//Set up default mongoose connection
var mongoDB = 'mongodb://127.0.0.1/my_database';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

export default app;
