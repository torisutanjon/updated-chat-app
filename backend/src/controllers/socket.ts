import { Server, Socket } from "socket.io";
const webSocket = async (io: Server) => {
  io.on("connection", (socket: Socket) => {
    socket.on("join-room", (room) => {
      socket.join(room);
      console.log(`${socket.id} has join ${room}`);
    });
    socket.on("send-message", ({ room, message, senderID, senderName }) => {
      io.to(room).emit("response-message", { message, senderID, senderName });
    });
    socket.on("on-typing", ({ room }) => {
      socket.to(room).emit("on-typing-response", {
        message: `someone is typing ...`,
        status: true,
      });
    });
    socket.on("on-stop-typing", ({ room }) => {
      socket.to(room).emit("on-stop-typing-response", {
        message: "",
        status: false,
      });
    });
    socket.on("on-leave", (room) => {
      socket.leave(room);
      console.log("Leaved room");
    });
  });
};

export default webSocket;
