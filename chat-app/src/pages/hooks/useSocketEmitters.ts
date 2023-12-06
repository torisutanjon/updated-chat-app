import { socket } from "@/utils/socket";
import type { ISocketMessage } from "@/utils/interfaces";
const useSocketEmitters = () => {
  const joinRoom = (room: string) => {
    socket.emit("join-room", room);
  };
  const sendMessage = ({
    room,
    message,
    senderID,
    senderName,
    timeSent,
  }: ISocketMessage) => {
    socket.emit("send-message", {
      room,
      message,
      senderID,
      senderName,
      timeSent,
    });
  };
  const onTyping = ({ room }: { room: string }) => {
    socket.emit("on-typing", { room });
  };
  const onStoppedTyping = (room: string) => {
    socket.emit("on-stop-typing", { room });
  };
  const leaveRoom = (room: string) => {
    socket.emit("on-leave", room);
  };

  return {
    joinRoom,
    sendMessage,
    onTyping,
    onStoppedTyping,
    leaveRoom,
  };
};

export default useSocketEmitters;
