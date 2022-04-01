import Sensor from "@/controllers/Sensor";
import express from "express";
const router = express.Router();

/* Sensor */
router.get("/", Sensor.getall);
router.get("/:id", Sensor.getone);
router.post("/", Sensor.post);
router.patch("/:id", Sensor.patch);
router.delete("/:id", Sensor.delete);

export default router;
