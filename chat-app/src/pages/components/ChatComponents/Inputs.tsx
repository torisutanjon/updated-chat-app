import Image from "next/image";
import { eraseLight, sendLight } from "@/pages/assets";
import { useSocketEmitters } from "@/pages/hooks";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { api } from "@/utils/api";
import type { IModifiedUser } from "@/utils/interfaces";
const Inputs = ({ room }: { room: string }) => {
  const { data: session } = useSession();
  const { sendMessage, onTyping, onStoppedTyping } = useSocketEmitters();
  const [messageText, setMessageText] = useState("");
  const { data: user, isLoading } = api.user.getUserInfo.useQuery({
    userid: session!.user.id,
  });

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setMessageText(value);
  };

  const onTypingHandler = () => {
    onTyping({ room: room });
  };

  const onStopTypingHandler = () => {
    onStoppedTyping(room);
  };

  const sendMessageHandler = (user: IModifiedUser) => {
    sendMessage({
      room: room,
      message: messageText,
      senderID: user.data.id,
      senderName: user.data.username
        ? user.data.username
        : user.data.name
        ? user.data.name
        : "",
      timeSent: new Date(),
    });
    setMessageText("");
  };

  return (
    <div className="relative flex h-[10%] w-full flex-col px-4">
      {!isLoading && user && (
        <>
          <input
            type="text"
            className="relative h-1/2 w-full border-b-[1px] border-lightSemiViolet bg-transparent pl-2 text-sm text-semiBlack/75 outline-none dark:text-white/75"
            value={messageText}
            onChange={onChangeHandler}
            onFocus={onTypingHandler}
            onBlur={onStopTypingHandler}
          />
          <div className="relative mt-2 flex w-full flex-row items-center justify-end">
            <button type="button" className="relative mr-4 h-6 w-7">
              <Image
                src={eraseLight}
                className="relative h-full w-full"
                alt=""
              />
            </button>
            <button
              type="button"
              className="relative mr-4 h-6 w-7"
              onClick={() => sendMessageHandler(user)}
            >
              <Image
                src={sendLight}
                className="relative h-full w-full"
                alt=""
              />
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Inputs;
