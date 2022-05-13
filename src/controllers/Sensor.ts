import { NextFunction, Request, Response } from "express";
import { ApiResponse } from "../Classes/Response"
import { Sensor } from "@/models/Sensor";
import { Database } from "@/Classes/Database";

export default {
  getall: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const db : Database = new Database();
      const sensors = await db.getAll("sensor");
      
      var apiResponse = new ApiResponse("list of Sensors found: ", sensors);
      res.json(apiResponse);

      return;
    } catch (error) {
      next(error);
    }
  },

  getone: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const db : Database = new Database();
      const sensor = await db.getSingle("sensor", Number(req.params.id));

      var apiResponse = new ApiResponse("A sensor has been found", { sensor });
      res.json(apiResponse);

      return;
    } catch (error) {
      next(error);
    }
  },
  
  post :async (req: Request, res: Response, next: NextFunction) => {
    try {
      const db : Database = new Database();
      const sensor = await db.createOne("sensor", req.body);

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
      
      const db : Database = new Database();
      const sensor = await db.updateOne("actuator", Number(req.params.id), req.body.state);

      var apiResponse = new ApiResponse("A sensor has been updated", {sensor});
      res.json(apiResponse);

      return;
    } catch (error) {
      next(error);
    }
  },
  
  delete : async (req: Request, res: Response, next: NextFunction) => {
    try {
      const db : Database = new Database();
      const sensor = await db.deleteOne("sensor", Number(req.params.id));

      var apiResponse = new ApiResponse("A sensor has been deleted", {sensor});
      res.json(apiResponse);
      
      return;
    } catch (error) {
      next(error);
    }
  },
};
