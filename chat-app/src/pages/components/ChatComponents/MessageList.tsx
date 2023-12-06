import { useSocketListeners } from "@/pages/hooks";
import { MessageContainer, ScrollIntoDiv } from "./index";
const MessageList = () => {
  const { useWatchResponse } = useSocketListeners();
  const { messageData } = useWatchResponse();

  return (
    <div className="relative h-full w-full overflow-y-auto pb-6">
      {messageData.map((data, key) => {
        return <MessageContainer data={data} key={key} />;
      })}
      <ScrollIntoDiv messages={messageData} />
    </div>
  );
};

export default MessageList;
