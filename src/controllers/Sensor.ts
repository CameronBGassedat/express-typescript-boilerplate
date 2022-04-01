import { NextFunction, Request, Response } from "express";
import {ApiResponse} from "../Response/Response"

export default {
  get: async (req: Request, res: Response, next: NextFunction) => {
    try {
      var apiResponse = new ApiResponse("All sensor have been found", []);
      res.json(apiResponse);
      return;
    } catch (error) {
      next(new ApiResponse("Error", undefined, error as Error));
    }
  },
  post :async (req: Request, res: Response, next: NextFunction) => {
    try {
      var apiResponse = new ApiResponse("A sensor has been created", []);
      res.json(apiResponse);
      return;
    } catch (error) {
      next(new ApiResponse("Error", undefined, error as Error));
    }
  },
  delete : async (req: Request, res: Response, next: NextFunction) => {
    try {
      var apiResponse = new ApiResponse("All sensor has been deleted", []);
      res.json(apiResponse);
      return;
    } catch (error) {
      next(new ApiResponse("Error", undefined, error as Error));
    }
  },
  patch : async (req: Request, res: Response, next: NextFunction) => {
    try {
      var apiResponse = new ApiResponse("A sensor information hhas been updated", []);
      res.json(apiResponse);
      return;
    } catch (error) {
      next(new ApiResponse("Error", undefined, error as Error));
    }
  },
};
