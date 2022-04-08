import { NextFunction, Request, Response } from "express";
import express from "express";
import path from "path";
import logger from "morgan";
import cookieParser from "cookie-parser";

// Enviromment Handling
require('dotenv').config()
console.log(process.env)

// Routers
import index from "@/routes/Index";
import user from "@/routes/User";
import sensor from "@/routes/Sensor";
import actuator from "@/routes/Actuator";

import { Console } from "console";

import {connectDatabase} from "@/database/mongo";
import cors from "cors";
import { ApiResponse } from "./Response/Response";
const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(connectDatabase);

app.use(cors());

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
  // render the error page
  res.status(err.status || 500).json(new ApiResponse("Error", undefined, err as Error));
});

export default app;
