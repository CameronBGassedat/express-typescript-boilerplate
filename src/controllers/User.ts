import { User } from "@/models/User";
import { NextFunction, Request, Response } from "express";
import {ApiResponse} from "../Classes/Response"
import { signin_oauth} from "@/middlewares/oauthHandler";
import bcrypt from "bcryptjs"
import  xss  from "xss";
import { Emitter } from "@/Events/Event";
import { Database } from "@/Classes/Database";

export default {
  getall: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const db : Database = new Database();
      const users = await db.getAll("user");
      
      var apiResponse = new ApiResponse("All users has been found", users);
      res.json(apiResponse);
      
      return;
    } catch (error) {
      next(error);
    }
  },
  
  getone: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const db : Database = new Database();
      const user = await db.getSingle("user", Number(req.params.id));

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

        const db : Database = new Database();
        const user = await db.createOne("user", req.body);
  
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
        
        var emailDetails = xss(email, { whiteList: {}, stripIgnoreTag: true} );
        if (!emailDetails.includes('@'))
          throw new Error("Login Error");
        
        const user = await User.findOne({email});

        if (!email || !password || !user)
          throw new Error("Email or password not found");

        if (await bcrypt.compare(password, user.password)) {
          const token = signin_oauth(email, req.body._id);
          var apiResponse = new ApiResponse("A user has reconnected", {token: token});
          
          res.json(apiResponse);
          return;
        } else {
          throw new Error("Email déja utilisé");
      }
    } catch (error) {
      console.error(error);
      next(error);
    }
  },

  patch : async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { email, username } = req.body;
      const db : Database = new Database();
      const user = await db.updateOne("user", Number(req.params.id), req.body.state);

      var apiResponse = new ApiResponse("A user information has been updated", {user});
      res.json(apiResponse);
      return;
    } catch (error) {
      next(error);
    }
  },

  delete : async (req: Request, res: Response, next: NextFunction) => {
    try {
      const db : Database = new Database();
      const user = await db.deleteOne("actuator", Number(req.params.id));

      var apiResponse = new ApiResponse("A user has been deleted", {user});
      res.json(apiResponse);
      
      return;
    } catch (error) {
      next(error);
    }
  },
};