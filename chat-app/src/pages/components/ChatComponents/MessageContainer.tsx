import type { ISocketMessage } from "@/utils/interfaces";
import { useSession } from "next-auth/react";
import { shortDateFormatter } from "@/utils/dateFormatter";
interface IProps {
  data: ISocketMessage;
}
const MessageContainer = ({ data }: IProps) => {
  const { data: session } = useSession();
  return (
    <div
      className={`relative my-2 flex h-auto w-full flex-col justify-center ${
        data.senderID === session!.user.id
          ? "items-end pr-4"
          : "items-start pl-4"
      } `}
    >
      <p className="text-xs text-semiBlack/50 dark:text-semiWhite/75">
        {data.senderID === session!.user.id ? "You" : data.senderName}
      </p>
      <div
        className={`relative my-1 flex h-auto max-w-[65%] flex-col items-start justify-start rounded-md px-4 py-2 ${
          data.senderID === session!.user.id
            ? " bg-lightSemiViolet dark:bg-white"
            : "self-start bg-lightSemiViolet"
        }`}
      >
        <p
          className={`text-xs ${
            data.senderID === session!.user.id
              ? "text-white/75 dark:text-semiBlack/75"
              : "text-white/75"
          }`}
        >
          {data.message}
        </p>
      </div>
      <p className="text-xs text-semiBlack/50 dark:text-semiWhite/75">
        {shortDateFormatter.format(data.timeSent)}
      </p>
    </div>
  );
};

export default MessageContainer;
