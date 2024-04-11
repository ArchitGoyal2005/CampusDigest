import express from "express";
import { upload } from "../utils/multerMiddleware.js";
import {
  createANote,
  setUploadedBy,
  uploadFile,
} from "../controllers/notesController.js";
import { protect } from "../controllers/authController.js";

const router = express.Router();

router
  .route("/")
  .post(upload.single("file"), uploadFile, protect, setUploadedBy, createANote);

export default router;
