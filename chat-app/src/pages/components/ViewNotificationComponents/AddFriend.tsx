import { api } from "@/utils/api";
import { useLoadingContext } from "@/pages/hooks";
import { useRouter } from "next/router";
import { useParseParams } from "@/pages/hooks/useNotificationHooks";
const AddFriend = () => {
  const { setIsLoadingState } = useLoadingContext();
  const router = useRouter();
  const { notification } = useParseParams();

  const acceptRequest = api.user.acceptRequest.useMutation({
    onSuccess: (res) => {
      setIsLoadingState(false);
      window.alert(res.message);
      router.reload();
    },

    onError: (err) => {
      console.log(err.message);
    },
  });

  const acceptRequestHandler = () => {
    setIsLoadingState(true);
    acceptRequest.mutate({
      notificationID: notification.id,
      userID: notification.from,
    });
  };
  return (
    <button
      type="button"
      className="relative mt-24 h-8 w-40 rounded-sm bg-semiBlack text-xs text-semiWhite dark:bg-semiLightWhite/60 dark:text-semiBlack"
      onClick={() => acceptRequestHandler()}
    >
      Accept Request
    </button>
  );
};

export default AddFriend;
