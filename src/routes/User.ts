import User from "@/controllers/User";
import express from "express";
const router = express.Router();

/* User*/
router.get("/", User.get);
router.get("/:id", User.get);
router.post("/", User.post);
router.patch("/:id", User.patch);
router.delete("/:id", User.delete);

export default router;
