import { NextFunction, Request, Response } from "express";
import {ApiResponse} from "../Response/Response"

export default {
  getall: async (req: Request, res: Response, next: NextFunction) => {
    try {
      var apiResponse = new ApiResponse("All users have been caught", []);
      res.json(apiResponse);
      return;
    } catch (error) {
      next(new ApiResponse("Error", undefined, error as Error));
    }
  },

  getone: async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.json({ message: "actuator hello world" });
      return;
    } catch (error) {
      next(error);
    }
  },

  post :async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.json({ message: "actuator hello world" });
      return;
    } catch (error) {
      next(error);
    }
  },

  delete : async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.json({ message: "actuator hello world" });
      return;
    } catch (error) {
      next(error);
    }
  },

  patch : async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.json({ message: "actuator hello world" });
      return;
    } catch (error) {
      next(error);
    }
  },

};
