import { NextFunction, Request, Response } from "express";
import { ApiResponse } from "../Response/Response"
import { Sensor } from "@/models/Sensor";

export default {
  getall: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const sensor = await Sensor.find();
      var apiResponse = new ApiResponse("list of Sensors found: ", sensor);
      res.json(apiResponse);
      return;
    } catch (error) {
      next(error);
    }
  },

  getone: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const sensor = await Sensor.findById(req.params.id);
      var apiResponse = new ApiResponse("A sensor has been found", { sensor });
      res.json(apiResponse);
      return;
    } catch (error) {
      next(error);
    }
  },
  
  post :async (req: Request, res: Response, next: NextFunction) => {
    try {
      const sensor = await Sensor.create(req.body)
      var apiResponse = new ApiResponse("A sensor has been created", {id: sensor._id});
      res.json(apiResponse);
      return;
    } catch (error) {
      next(error);
    }
  },

  patch : async (req: Request, res: Response, next: NextFunction) => {
    try {
      const idFilter = { _id : req.params.id}
      const sensor = await Sensor.findOneAndUpdate(idFilter, req.body);
      var apiResponse = new ApiResponse("A sensor has been updated", {sensor});
      res.json(apiResponse);
      return;
    } catch (error) {
      next(error);
    }
  },
  
  delete : async (req: Request, res: Response, next: NextFunction) => {
    try {
      const sensor = await Sensor.findByIdAndDelete(req.params.id)
      var apiResponse = new ApiResponse("A sensor has been deleted", {sensor});
      res.json(apiResponse);
      return;
    } catch (error) {
      next(error);
    }
  },
};
