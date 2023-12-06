import { ChatContainer } from "../index";
import type { IRoom } from "@/utils/interfaces";

interface IProps {
  data: IRoom[];
}

const RoomList = ({ data }: IProps) => {
  return data.map((chat, key) => {
    return chat.roomType !== "peer" && <ChatContainer key={key} data={chat} />;
  });
};

export default RoomList;
