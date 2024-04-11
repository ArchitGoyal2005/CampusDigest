import dotenv from "dotenv";
import mongoose from "mongoose";
import app from "./app.js";
import { Server } from "socket.io";
import http from "http";

process.on("uncaughtException", (err) => {
  console.log(err.name, err.message);
  console.log("Unhandled Exception!");
  process.exit(1);
});

dotenv.config({ path: "./config.env" });

const port = process.env.PORT || 8000;

const dbURL = process.env.DB_URI.replace("<password>", process.env.DB_PASS);

mongoose.connect(dbURL).then(() => {
  console.log("Database is running");
});

process.on("unhandledRejection", (err) => {
  console.log(err.name, err.message);
  console.log("Unhandled Rejection!");
  server.close(() => {
    process.exit(1);
  });
});

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

server.listen(port, () => {
  console.log("Server is running on the port ", port);
});

let users = [];
const usernameToUserMap = new Map();
const socketToUsername = new Map();

io.on("connection", (socket) => {
  console.log(socket.id, "connected");

  socket.on("room:join", (data) => {
    users.push(socket.id);
    console.log("Rooms:", users);

    const { username, room } = data;

    usernameToUserMap.set(username, socket.id);
    socketToUsername.set(socket.id, username);

    io.to(room).emit("user:joined", { username, id: socket.id });
    socket.join(room);
    io.to(socket.id).emit("room:join", data);
  });

  socket.on("disconnect", () => {
    console.log("Rooms", users);
    users = users.filter((id) => socket.id !== id);
    console.log("Disconnect", socket.id);
  });
});
