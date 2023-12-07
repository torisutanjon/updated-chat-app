import express from "express";
import cors from "cors";
import http from "http";
import dotenv from "dotenv";
import { Server } from "socket.io";
import { webSocket } from "./controllers";

const app = express();
const port = process.env.PORT || 5000;
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: ["http://localhost:3000"],
  },
  connectionStateRecovery: {},
});

//configure app
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//use env files
dotenv.config();

server.listen(port, () => {
  try {
    console.log(`Connected to PORT: ${port}`);
    webSocket(io);
  } catch (error) {
    console.log(`Unable to connect to port: ${port} with an error of ${error}`);
  }
});
