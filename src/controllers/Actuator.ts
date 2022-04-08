import { Actuator }  from "@/models/actuator";
import { NextFunction, Request, Response } from "express";
import { ApiResponse } from "../Response/Response"

export default {
  getall: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const actuator = await Actuator.find();
      var apiResponse = new ApiResponse("All users have been found", [actuator]);
      res.json(apiResponse);
      return;
    } catch (error) {
      next(error);
    }
  },

  getone: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const actuator = await Actuator.findById(req.params.id);
      var apiResponse = new ApiResponse("A user has been found", {actuator});
      res.json(apiResponse);
      return;
    } catch (error) {
      next(error);
    }
  },

  post :async (req: Request, res: Response, next: NextFunction) => {
    try {
      const actuator = await Actuator.create(req.body)
      var apiResponse = new ApiResponse("A user has been created", {id: actuator._id});
      res.json(apiResponse);
      return;
    } catch (error) {
      next(error);
    }
  },

  patch : async (req: Request, res: Response, next: NextFunction) => {
    try {
      const idFilter = { id : req.params.id}
      const actuator = await Actuator.findOneAndUpdate(idFilter, req.body);
      var apiResponse = new ApiResponse("A user information has been updated", {actuator});
      res.json(apiResponse);
      return;
    } catch (error) {
      next(error);
    }
  },
  
  delete : async (req: Request, res: Response, next: NextFunction) => {
    try {
      const actuator = await Actuator.findByIdAndDelete(req.params.id)
      var apiResponse = new ApiResponse("A user has been deleted", {actuator});
      res.json(apiResponse);
      return;
    } catch (error) {
      next(error);
    }
  },
};
