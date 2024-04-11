import express from "express";

import userRouter from "./routers/userRouter.js";
import AppError from "./utils/AppError.js";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json());

app.use(cookieParser());

app.get("/api/v1", (req, res, next) => {
  return res.status(200).json({
    status: "ok",
  });
});

app.use("/api/v1/users", userRouter);

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

export default app;
