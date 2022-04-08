import User from "@/controllers/User";
import express from "express";
const router = express.Router();

/* User*/
router.get("/", User.getall);
router.get("/:id", User.getone);
router.post("/", User.post);
router.post("/login", User.postLogin);
router.patch("/:id", User.patch);
router.delete("/:id", User.delete);

export default router;
