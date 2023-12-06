import { Message, RemoveFriend, SendFriendRequest } from "./index";
import type { IUserProps } from "@/utils/interfaces";

const RenderAction = ({ data }: IUserProps) => {
  return data.friend ? (
    <>
      <Message data={data} />
      <RemoveFriend />
    </>
  ) : (
    <SendFriendRequest data={data} />
  );
};

export default RenderAction;
