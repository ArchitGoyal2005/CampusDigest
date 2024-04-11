import express from "express";
import { login, signup } from "../controllers/authController.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);

router.get("/", (req, res, next) => {
  return res.status(200).json({
    status: "ok",
  });
});

export default router;
