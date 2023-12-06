import { useRouter } from "next/router";
import { usePasswordContext } from "../hooks";
import type { IRoom } from "@/utils/interfaces";

interface Iprops {
  data: IRoom;
}

const ChatContainer = ({ data }: Iprops) => {
  const { setRoomID, setPasswordComponent } = usePasswordContext();
  const router = useRouter();
  const joinRoom = () => {
    if (data.roomType === "private") {
      setRoomID(data.id);
      setPasswordComponent(true);
    } else {
      void router.push(`/chat/${data.id}`);
    }
  };
  return (
    <div
      className="relative flex h-12 w-5/6 cursor-pointer flex-row items-center justify-start border-b-[1px] border-semiGray/25 hover:bg-lightSemiViolet/20 dark:border-semiWhite/25"
      onClick={() => joinRoom()}
    >
      <p className="truncate text-sm font-medium dark:text-semiWhite/75">
        {data.roomName}{" "}
        <span className="ml-1 text-xs font-medium text-semiBlack/75 dark:text-semiWhite/50">
          {"(Click to open chat)"}
        </span>
      </p>
    </div>
  );
};

export default ChatContainer;
