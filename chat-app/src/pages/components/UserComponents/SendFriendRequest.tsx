import { api } from "@/utils/api";
import { useLoadingContext } from "@/pages/hooks";
import type { IUserProps } from "@/utils/interfaces";

const SendFriendRequest = ({ data }: IUserProps) => {
  const { setIsLoadingState } = useLoadingContext();
  const sendRequest = api.user.sendFriendRequest.useMutation({
    onSuccess: (res) => {
      setIsLoadingState(false);
      typeof res.message === "string" && window.alert(res.message);
    },
    onError: (err) => {
      setIsLoadingState(false);
      window.alert(err.message);
    },
  });

  const sendRequestHandler = () => {
    setIsLoadingState(true);
    sendRequest.mutate({
      id: data.id,
      recipientName: data.name,
    });
  };

  return (
    <button
      className="text-lightborder-lightSemiViolet relative h-8 w-40 rounded-md border-2 border-lightSemiViolet text-sm text-lightSemiViolet dark:border-semiWhite/75 dark:text-semiWhite/75 "
      onClick={() => sendRequestHandler()}
    >
      Send Friend Request
    </button>
  );
};

export default SendFriendRequest;
