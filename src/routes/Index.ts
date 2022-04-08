import Index from "@/controllers/Index";
import express from "express";
const router = express.Router();

/* GET */
router.get("/", Index.get);

export default router;