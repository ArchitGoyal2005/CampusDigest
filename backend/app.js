import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res, next) => {
  return res.status(200).json({
    status: "ok",
  });
});

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

export default app;
