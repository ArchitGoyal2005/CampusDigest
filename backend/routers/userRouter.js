import express from "express";
import { login, protect, signup } from "../controllers/authController.js";
import { getMe } from "../controllers/userController.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);

router.get("/me", protect, getMe);

export default router;
