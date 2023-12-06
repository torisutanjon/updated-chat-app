import { useContext } from "react";
import { AddRoomContext } from "../context/AddRoomContext";

const useAddRoomContext = () => {
  const { addRoom, setAddRoom, room, setRoom, roomType, setRoomType } =
    useContext(AddRoomContext);
  return {
    addRoom,
    setAddRoom,
    room,
    setRoom,
    roomType,
    setRoomType,
  };
};

export default useAddRoomContext;
