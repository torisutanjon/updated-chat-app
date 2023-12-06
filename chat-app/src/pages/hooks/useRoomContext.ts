import { useContext } from "react";
import { RoomContext } from "../context/RoomContextProvider";

const useRoomContext = () => {
  const { room, setRoom } = useContext(RoomContext);
  return { room, setRoom };
};

export default useRoomContext;
