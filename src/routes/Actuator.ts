import Actuator from "@/controllers/Actuator";
import express from "express";
const router = express.Router();

/*Actuator*/
router.get("/", Actuator.getall);
router.get("/:id", Actuator.getone);
router.post("/", Actuator.post);
router.patch("/:id", Actuator.patch);
router.delete("/:id", Actuator.delete);

export default router;
