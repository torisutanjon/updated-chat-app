import { createContext, useState } from "react";
import type { IAddRoomContext } from "@/utils/interfaces";

export const AddRoomContext = createContext<IAddRoomContext>({
  addRoom: false,
  setAddRoom: () => Boolean,
  roomType: "",
  setRoomType: () => String,
  room: {
    roomName: "",
    roomPassword: "",
  },
  setRoom: () => ({ roomName: String, roomPassword: String }),
});

const AddRoomContextProvider = ({ children }: { children: JSX.Element }) => {
  const [addRoom, setAddRoom] = useState(false);
  const [roomType, setRoomType] = useState("public");
  const [room, setRoom] = useState({
    roomName: "",
    roomPassword: "",
  });

  return (
    <AddRoomContext.Provider
      value={{
        addRoom,
        setAddRoom,
        roomType,
        setRoomType,
        room,
        setRoom,
      }}
    >
      {children}
    </AddRoomContext.Provider>
  );
};

export default AddRoomContextProvider;
