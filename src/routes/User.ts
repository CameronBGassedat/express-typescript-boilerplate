import User from "@/controllers/User";
import express from "express";
import { oauth_verif } from "../middlewares/oauthHandler";

const router = express.Router();

/* User*/
router.get("/", User.getall, oauth_verif);
router.get("/:id", User.getone, oauth_verif);
router.post("/", User.post);
router.post("/login", User.postLogin);
router.patch("/:id", User.patch, oauth_verif);
router.delete("/:id", User.delete,oauth_verif);

export default router;
