import { NextFunction, Request, Response } from "express";

export default {
  get: async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.json({ message: "index hello world" });
      return;
    } catch (error) {
      next(error);
    }
  },
  post :async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.json({ message: "index hello world" });
      return;
    } catch (error) {
      next(error);
    }
  },
  delete : async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.json({ message: "index hello world" });
      return;
    } catch (error) {
      next(error);
    }
  },
  patch : async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.json({ message: "index hello world" });
      return;
    } catch (error) {
      next(error);
    }
  },
};
