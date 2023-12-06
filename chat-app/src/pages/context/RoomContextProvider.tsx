import { createContext, useState } from "react";
import type { IRoomContext } from "@/utils/interfaces";

export const RoomContext = createContext<IRoomContext>({
  room: "",
  setRoom: () => String,
});

const RoomContextProvider = ({ children }: { children: JSX.Element }) => {
  const [room, setRoom] = useState("");

  return (
    <RoomContext.Provider value={{ room, setRoom }}>
      {children}
    </RoomContext.Provider>
  );
};

export default RoomContextProvider;
