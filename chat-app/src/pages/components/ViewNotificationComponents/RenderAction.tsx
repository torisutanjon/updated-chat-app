import { AddFriend, ViewFriend, RemoveFriend } from "./index";
import type { IUserProps } from "@/utils/interfaces";

const RenderAction = ({ data }: IUserProps) => {
  return data.friend === false ? (
    <AddFriend />
  ) : (
    <>
      <ViewFriend data={data} />
      <RemoveFriend />
    </>
  );
};

export default RenderAction;
