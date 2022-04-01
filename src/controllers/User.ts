import { User } from "@/models/User";
import { NextFunction, Request, Response } from "express";
import {ApiResponse} from "../Response/Response"
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

export default {
  getall: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = await User.find();
      var apiResponse = new ApiResponse("All users has been found", [user]);
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
      if (!req.params.username) {
        const filter = {
          email : req.body.email
        }
        const user = await User.findOne({filter});

        const { email, password } = req.body;
        
        if (email && password) {
          if (user && (await bcrypt.compare(password, password))) {
            // Create token
            const token = jwt.sign(
              { user_id: req.body._id, email },
              "cest moi",
              {
                expiresIn: "2h",
              }
            );
          }
      }
        console.log(user);
        var apiResponse = new ApiResponse("A already existing user has reconnected", {token : user});
        res.json(apiResponse);
        return;
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
