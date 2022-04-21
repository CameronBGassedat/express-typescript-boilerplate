import {actuator as act}  from "@/models/Actuator";
import { NextFunction, Request, Response } from "express";
import {ApiResponse} from "../Response/Response"

export default {
  getall: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const actuators = await act.find();
      var apiResponse = new ApiResponse("", actuators);
      res.json(apiResponse);
      return;
    } catch (error) {
      next(error);
    }
  },

  getone: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const actuator = await act.findById(req.params.id);
      var apiResponse = new ApiResponse("", actuator);
      res.json(apiResponse);
      return;
    } catch (error) {
      next(error);
    }
  },

  post :async (req: Request, res: Response, next: NextFunction) => {
    try {
      const actuator = await act.create(req.body)
      var apiResponse = new ApiResponse("A actuator has been created", {id: actuator._id});
      res.json(apiResponse);
      return;
    } catch (error) {
      next(error);
    }
  },

  patch : async (req: Request, res: Response, next: NextFunction) => {
    try {
      const actuator = await act.findOneAndUpdate({ _id : req.params.id}, {state : req.body.state});
      var apiResponse = new ApiResponse("A actuator information has been updated", {actuator});
      res.json(apiResponse);
      return;
    } catch (error) {
      next(error);
    }
  },
  
  delete : async (req: Request, res: Response, next: NextFunction) => {
    try {
      const actuator = await act.findByIdAndDelete(req.params.id)
      var apiResponse = new ApiResponse("A actuator has been deleted", {actuator});
      res.json(apiResponse);
      return;
    } catch (error) {
      next(error);
    }
  },
};
