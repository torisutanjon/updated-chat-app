import { socket } from "@/utils/socket";
import { useEffect, useState } from "react";
import type { ISocketMessage, ISocketTyping } from "@/utils/interfaces";

const useSocketListeners = () => {
  const useWatchResponse = () => {
    const [messageData, setMessageData] = useState<Array<ISocketMessage>>([]);

    useEffect(() => {
      const watchResponseHandler = ({
        room,
        message,
        senderID,
        senderName,
        timeSent,
      }: ISocketMessage) => {
        setMessageData((prevState) => [
          ...prevState,
          {
            room,
            message,
            senderID,
            senderName,
            timeSent,
          },
        ]);
      };

      socket.on("response-message", watchResponseHandler);

      return () => {
        socket.off("response-message", watchResponseHandler);
      };
    }, []);
    return { messageData };
  };

  const useWatchOnTyping = () => {
    const [typingData, setTypingData] = useState<ISocketTyping>({
      message: "",
      status: false,
    });

    useEffect(() => {
      const onTypinghandler = ({ message, status }: ISocketTyping) => {
        setTypingData({
          message,
          status,
        });
      };

      socket.on("on-typing-response", onTypinghandler);

      return () => {
        socket.off("on-typing-response", onTypinghandler);
      };
    }, []);

    useEffect(() => {
      const onStopTypingHandler = ({ message, status }: ISocketTyping) => {
        setTypingData({
          message,
          status,
        });
      };

      socket.on("on-stop-typing-response", onStopTypingHandler);

      return () => {
        socket.off("on-stop-typing-response", onStopTypingHandler);
      };
    }, []);

    return typingData;
  };

  return {
    useWatchResponse,
    useWatchOnTyping,
  };
};

export default useSocketListeners;
