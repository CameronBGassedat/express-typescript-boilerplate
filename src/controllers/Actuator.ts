import {Actuator as act}  from "@/models/Actuator";
import { NextFunction, Request, Response } from "express";
import {ApiResponse} from "../Classes/Response"
import { Database } from "@/Classes/Database";
import EventEmitter from 'events';

export default {
  getall: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const db : Database = new Database();
      const actuators = await db.getAll("actuator");

      var apiResponse = new ApiResponse("", actuators);
      res.json(apiResponse);

      return;
    } catch (error) {
      next(error);
    }
  },

  getone: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const db : Database = new Database();
      const actuators = await db.getSingle("actuator", Number(req.params.id));

      //const actuator = await act.findById(req.params.id);
      var apiResponse = new ApiResponse("", actuators);
      res.json(apiResponse);
      return;
    } catch (error) {
      next(error);
    }
  },

  post :async (req: Request, res: Response, next: NextFunction) => {
    try {
      const db : Database = new Database();
      const actuator = await db.createOne("actuator", req.body);

      var apiResponse = new ApiResponse("A actuator has been created", {id: actuator._id});
      res.json(apiResponse);

      return;
    } catch (error) {
      next(error);
    }
  },

  patch : async (req: Request, res: Response, next: NextFunction) => {
    try {
      const eventEmitter = new EventEmitter();

      const db : Database = new Database();
      const actuator = await db.updateOne("actuator", Number(req.params.id), req.body.state);

      var apiResponse = new ApiResponse("A actuator information has been updated", {actuator});
      eventEmitter.emit('sendNewStatus');
      res.json(apiResponse);

      return;
    } catch (error) {
      next(error);
    }
  },
  
  delete : async (req: Request, res: Response, next: NextFunction) => {
    try {
      const db : Database = new Database();
      const actuator = await db.deleteOne("actuator", Number(req.params.id));

      var apiResponse = new ApiResponse("A actuator has been deleted", {actuator});
      res.json(apiResponse);

      return;
    } catch (error) {
      next(error);
    }
  },
};
