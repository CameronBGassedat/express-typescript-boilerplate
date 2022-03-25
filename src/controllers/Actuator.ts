import { NextFunction, Request, Response } from "express";

export default {
  getall: async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.json({ message: "actuator hello world" });
      return;
    } catch (error) {
      next(error);
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
