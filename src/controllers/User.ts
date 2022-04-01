import { NextFunction, Request, Response } from "express";
import {ApiResponse} from "../Response/Response"

export default {
  getone: async (req: Request, res: Response, next: NextFunction) => {
    try {
      var apiResponse = new ApiResponse("A user has been found", []);
      res.json(apiResponse);
      return;
    } catch (error) {
      next(new ApiResponse("Error", undefined, error as Error));
    }
  },
  getall: async (req: Request, res: Response, next: NextFunction) => {
    try {
      var apiResponse = new ApiResponse("All users has been found", []);
      res.json(apiResponse);
      return;
    } catch (error) {
      next(new ApiResponse("Error", undefined, error as Error));
    }
  },
  post :async (req: Request, res: Response, next: NextFunction) => {
    try {
      var apiResponse = new ApiResponse("A user has been created", []);
      res.json(apiResponse);
      return;
    } catch (error) {
      next(new ApiResponse("Error", undefined, error as Error));
    }
  },
  postfromtoken :async (req: Request, res: Response, next: NextFunction) => {
    try {
      var apiResponse = new ApiResponse("A user has been created from a token", []);
      res.json(apiResponse);
      return;
    } catch (error) {
      next(new ApiResponse("Error", undefined, error as Error));
    }
  },
  delete : async (req: Request, res: Response, next: NextFunction) => {
    try {
      var apiResponse = new ApiResponse("A user has been deleted", []);
      res.json(apiResponse);
      return;
    } catch (error) {
      next(new ApiResponse("Error", undefined, error as Error));
    }
  },
  patch : async (req: Request, res: Response, next: NextFunction) => {
    try {
      var apiResponse = new ApiResponse("A user information has been updated", []);
      res.json(apiResponse);
      return;
    } catch (error) {
      next(new ApiResponse("Error", undefined, error as Error));
    }
  },
};
