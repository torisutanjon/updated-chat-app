import { TypingStatus, MessageList } from "./index";
const OutPuts = () => {
  return (
    <div className="relative h-[75%] w-full">
      <MessageList />
      <TypingStatus />
    </div>
  );
};

export default OutPuts;
