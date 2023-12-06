import { api } from "@/utils/api";
import { useRouter } from "next/router";
import { useUpdateAccountContext, useLoadingContext } from "@/pages/hooks";
const UpdateButton = () => {
  const router = useRouter();
  const { setIsLoadingState } = useLoadingContext();
  const { profileState } = useUpdateAccountContext();
  const updateInfo = api.account.updateUserInfo.useMutation({
    onSuccess: (res) => {
      setIsLoadingState(false);
      window.alert(res.message);
      router.reload();
    },
    onError: (err) => {
      window.alert(err.message);
    },
  });

  const updateUserHandler = () => {
    setIsLoadingState(true);
    updateInfo.mutate({
      name: profileState.name,
      username: profileState.username,
      email: profileState.email,
    });
  };

  return (
    <button
      type="button"
      className="dark:bg-semiViolet relative mt-16 h-8 w-32 rounded-md bg-lightSemiViolet text-sm text-white/75"
      onClick={() => updateUserHandler()}
    >
      Update Info
    </button>
  );
};

export default UpdateButton;
