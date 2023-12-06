import { api } from "@/utils/api";
import { useLoadingContext } from "@/pages/hooks";
import { useParseParams } from "@/pages/hooks/useNotificationHooks";

const RemoveFriend = () => {
  const { setIsLoadingState } = useLoadingContext();
  const { notification } = useParseParams();
  const removeFriend = api.user.removeFriend.useMutation({
    onSuccess: (res) => {
      setIsLoadingState(false);
      window.alert(res.message);
    },
    onError: (err) => {
      setIsLoadingState(false);
      window.alert(err.message);
    },
  });

  const removeFriendHandler = () => {
    setIsLoadingState(true);
    removeFriend.mutate({
      userid: notification.from,
    });
  };
  return (
    <button
      type="button"
      className="relative mt-4 h-8 w-40 rounded-sm border-[1px] border-semiRed/75 text-semiRed/75"
      onClick={() => removeFriendHandler()}
    >
      Remove Friend
    </button>
  );
};

export default RemoveFriend;
