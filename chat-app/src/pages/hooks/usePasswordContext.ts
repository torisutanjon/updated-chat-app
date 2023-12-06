import { useContext } from "react";
import { RoomPasswrodContext } from "../context/RoomPasswordContext";

const usePasswordContext = () => {
  const { passwordComponent, setPasswordComponent, setRoomID } =
    useContext(RoomPasswrodContext);
  return { passwordComponent, setPasswordComponent, setRoomID };
};

export default usePasswordContext;
