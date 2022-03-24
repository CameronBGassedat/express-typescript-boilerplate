import Index from "@/controllers/Index";
import express from "express";
const router = express.Router();

/* GET home page. */
router.get("/", Index.get);

/* User*/
router.get("/user/id", Index.get);
router.get("/user/:id", Index.get);
router.post("/user", Index.post);
router.patch("/user/:id", Index.patch);
router.delete("/user/:id", Index.delete);

/* Sensor */
router.get("/sensor", Index.get);
router.get("/sensor/:id", Index.get);
router.post("/sensor", Index.post);
router.patch("/sensor/:id", Index.patch);
router.delete("/sensor/:id", Index.delete);

/*Actuator*/
router.get("/actuator", Index.get);
router.get("/actuator/:id", Index.get);
router.post("/actuator", Index.post);
router.patch("/actuator/:id", Index.patch);
router.delete("/actuator/:id", Index.delete);

export default router;
