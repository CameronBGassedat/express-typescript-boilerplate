import { User } from "@/models/User";
import { NextFunction, Request, Response } from "express";
import {ApiResponse} from "../Response/Response"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

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
      if (req.body.username) {
        req.body.password = await bcrypt.hash(req.body.password, 10);

        const user = await User.create(req.body);
        var apiResponse = new ApiResponse("A user has been created", {id: user._id});

        res.json(apiResponse);
        // res.status(200).json({ message : "created", user }); // TO DO: verif if this is the right way
        return;
      }
    } catch (error) {
      next(error);
    }
  },

  postLogin :async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({email});

        if (!email || !password || !user)
          throw new Error("Email or password not found");
        if (await bcrypt.compare(password, user.password)) {
         // req.headers.authorization();
            const token = jwt.sign(
              { user_id: req.body._id, email },
              process.env.SECRET_KEY!,
              {
                expiresIn: "2h",
              }
            );
          // TO DO : set global variable to store secret key to verif with token
          jwt.verify(token, process.env.SECRET_KEY!);
          
          console.log("pwd given ? :" + password);
          console.log("user pwd ? :" + user.password);
          
          var apiResponse = new ApiResponse("A already existing user has reconnected", {token: token});
          res.json(apiResponse);
          return;
      } else {
        throw new Error("Eczefezs");
      }
    } catch (error) {
      console.error(error);
      next(error);
    }
  },

  patch : async (req: Request, res: Response, next: NextFunction) => {
    try {
      const idFilter = { id : req.params.id}
      const content = req.body;
      const user = await User.findOneAndUpdate(idFilter, content);
      var apiResponse = new ApiResponse("A user information has been updated", {user});
      res.json(apiResponse);
      res.status(200).json({ content }); // TO DO: verif if this is the right way
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
