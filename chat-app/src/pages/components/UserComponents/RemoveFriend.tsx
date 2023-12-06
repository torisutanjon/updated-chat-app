import { api } from "@/utils/api";
import { useLoadingContext } from "@/pages/hooks";
import { useRouter } from "next/router";
const RemoveFriend = () => {
  const { setIsLoadingState } = useLoadingContext();
  const router = useRouter();
  const params = router.query;

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
      userid:
        params.id == undefined
          ? ""
          : typeof params.id === "string"
          ? params.id
          : params.id[0]!,
    });
  };

  return (
    <button
      className="relative mt-4 h-8 w-40 rounded-md border-2 border-semiRed text-sm text-semiRed dark:border-semiRed/50 dark:text-semiRed/60"
      onClick={() => removeFriendHandler()}
    >
      Remove Friend
    </button>
  );
};

export default RemoveFriend;
