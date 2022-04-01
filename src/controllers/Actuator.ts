import {actuator as act}  from "@/models/Actuator";
import { NextFunction, Request, Response } from "express";
import {ApiResponse} from "../Response/Response"

export default {
  getall: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const actuator = await act.find();
      var apiResponse = new ApiResponse("All users have been found", [actuator]);
      res.json(apiResponse);
      return;
    } catch (error) {
      next(new ApiResponse("Error", undefined, error as Error));
    }
  },

  getone: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const actuator = await act.findById(req.params.id);
      var apiResponse = new ApiResponse("A user has been found", {actuator});
      res.json(apiResponse);
      return;
    } catch (error) {
      next(new ApiResponse("Error", undefined, error as Error));
    }
  },

  post :async (req: Request, res: Response, next: NextFunction) => {
    try {
      const actuator = await act.create(req.body)
      var apiResponse = new ApiResponse("A user has been created", {id: actuator._id});
      res.json(apiResponse);
      return;
    } catch (error) {
      next(new ApiResponse("Error", undefined, error as Error));
    }
  },

  patch : async (req: Request, res: Response, next: NextFunction) => {
    try {
      const idFilter = { id : req.params.id}
      const actuator = await act.findOneAndUpdate(idFilter, req.body);
      var apiResponse = new ApiResponse("A user information has been updated", {actuator});
      res.json(apiResponse);
      return;
    } catch (error) {
      next(new ApiResponse("Error", undefined, error as Error));
    }
  },
  
  delete : async (req: Request, res: Response, next: NextFunction) => {
    try {
      const actuator = await act.findByIdAndDelete(req.params.id)
      var apiResponse = new ApiResponse("A user has been deleted", {actuator});
      res.json(apiResponse);
      return;
    } catch (error) {
      next(new ApiResponse("Error", undefined, error as Error));
    }
  },
};
