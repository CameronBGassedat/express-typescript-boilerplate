import { User } from "@/models/User";
import { NextFunction, Request, Response } from "express";
import {ApiResponse} from "../Response/Response"
import { signin_oauth} from "@/middlewares/oauthHandler";
import bcrypt from "bcryptjs"
import  xss  from "xss";

export default {
  getall: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = await User.find();
      var apiResponse = new ApiResponse("All users has been found", user);
      res.json(apiResponse);
      
      return;
    } catch (error) {
      next(error);
    }
  },
  
  getone: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = await User.findById(req.params.id);
      var apiResponse = new ApiResponse("A user has been found", {user});
      res.json(apiResponse);
      
      return;
    } catch (error) {
      next(error);
    }
  },

  post : async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (req.body.username && req.body.email && req.body.password) {
        req.body.password = await bcrypt.hash(req.body.password, 10);
        const user = await User.create(req.body);
        var apiResponse = new ApiResponse("A user has been created", {id: user._id});

        res.json(apiResponse);
        return;
      }
    } catch (error) {
      next(error);
    }
  },

  postLogin :async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { email, password } = req.body;
        
        // Remove All tags from email string and check if emails contains a @
        var emailDetails = xss(email, { whiteList: {}, stripIgnoreTag: true} );
        if (!emailDetails.includes('@'))
          throw new Error("Login Error");
        
        const user = await User.findOne({email});

        if (!email || !password || !user)
          throw new Error("Email or password not found");
        if (await bcrypt.compare(password, user.password)) {
          const token = signin_oauth(email, req.body._id);
          var apiResponse = new ApiResponse("A already existing user has reconnected", {token: token});
          res.json(apiResponse);
          return;
      } else {
        throw new Error("Login Error");
      }
    } catch (error) {
      console.error(error);
      next(error);
    }
  },

  patch : async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { email, username } = req.body;
      const user = await User.findOneAndUpdate({ id : req.params.id}, { email, username });
      var apiResponse = new ApiResponse("A user information has been updated", {user});
      res.json(apiResponse);
      return;
    } catch (error) {
      next(error);
    }
  },

  delete : async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = await User.findByIdAndDelete(req.params.id);
      var apiResponse = new ApiResponse("A user has been deleted", {user});
      res.json(apiResponse);
      return;
    } catch (error) {
      next(error);
    }
  },
};


