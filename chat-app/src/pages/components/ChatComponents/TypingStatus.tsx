import { useSocketListeners } from "@/pages/hooks";
const TypingStatus = () => {
  const { useWatchOnTyping } = useSocketListeners();
  const { message, status } = useWatchOnTyping();

  return (
    status === true && (
      <div className="absolute bottom-3 flex w-full items-center justify-center font-medium">
        <p className="text-xs text-semiBlack/75 dark:text-semiWhite/75">
          {message}
        </p>
      </div>
    )
  );
};

export default TypingStatus;
