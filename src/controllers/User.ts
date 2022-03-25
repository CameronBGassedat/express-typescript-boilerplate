import { NextFunction, Request, Response } from "express";

export default {
  getone: async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.json({ message: "usr" });
      return;
    } catch (error) {
      next(error);
    }
  },
  getall: async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.json({ message: "user hello world" });
      return;
    } catch (error) {
      next(error);
    }
  },
  post :async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.json({ message: "user hello world" });
      return;
    } catch (error) {
      next(error);
    }
  },
  delete : async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.json({ message: "user hello world" });
      return;
    } catch (error) {
      next(error);
    }
  },
  patch : async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.json({ message: "user hello world" });
      return;
    } catch (error) {
      next(error);
    }
  },
};
