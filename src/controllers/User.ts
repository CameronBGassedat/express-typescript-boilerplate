import { User } from "@/models/User";
import  argon2  from "argon2";
import { Console, error } from "console";
import { NextFunction, Request, Response } from "express";
import {ApiResponse} from "../Response/Response"
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

export default {
  getall: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = await User.find();
      var apiResponse = new ApiResponse("All users has been found", user);
      res.json(apiResponse);
      return;
    } catch (error) {
      next(new ApiResponse("Error", undefined, error as Error));
    }
  },
  
  getone: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = await User.findById(req.params.id);
      var apiResponse = new ApiResponse("A user has been found", {user});
      res.json(apiResponse);
      return;
    } catch (error) {
      next(new ApiResponse("Error", undefined, error as Error));
    }
  },

  post : async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (req.body.username) {
        req.body.password = await bcrypt.hash(req.body.password, 10);

        const user = await User.create(req.body);
        var apiResponse = new ApiResponse("A user has been created", {id: user._id});

        res.json(apiResponse);
        return;
      }
    } catch (error) {
      next(new ApiResponse("Error", undefined, error as Error));
    }
  },

  postLogin :async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne(email);
        let isPresent:boolean = false;
        if (!email || !password || !user)
          throw (error)
        if (isPresent = await bcrypt.compare(password, user.password)) {
            const token = jwt.sign(
              { user_id: req.body._id, email },
              "cest moi le user",
              {
                expiresIn: "2h",
              }
            );
          console.log("pwd given ? :" + password);
          console.log("user pwd ? :" + user.password);
          console.log("isPresent ? :" + isPresent);
          var apiResponse = new ApiResponse("A already existing user has reconnected", {token : user});
          res.json(apiResponse);
          return;
      } else {
        throw (error)
      }
    } catch (error) {
      console.error(error);
      next(new ApiResponse("Error", undefined, error as Error));
    }
  },

  patch : async (req: Request, res: Response, next: NextFunction) => {
    try {
      const idFilter = { id : req.params.id}
      const user = await User.findOneAndUpdate(idFilter, req.body);
      var apiResponse = new ApiResponse("A user information has been updated", {user});
      res.json(apiResponse);
      return;
    } catch (error) {
      next(new ApiResponse("Error", undefined, error as Error));
    }
  },

  delete : async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = await User.findByIdAndDelete(req.params.id);
      var apiResponse = new ApiResponse("A user has been deleted", {user});
      res.json(apiResponse);
      return;
    } catch (error) {
      next(new ApiResponse("Error", undefined, error as Error));
    }
  },

};
