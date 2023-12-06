import { api } from "@/utils/api";
import { useRouter } from "next/router";
import { useLoadingContext } from "@/pages/hooks";
const VerifyEmailButton = () => {
  const { setIsLoadingState } = useLoadingContext();
  const router = useRouter();
  const token = router.query.token;
  const verifyEmail = api.account.verifyEmail.useMutation({
    onSuccess: (res) => {
      setIsLoadingState(false);
      window.alert(res.message);
      window.close();
    },
    onError: (err) => {
      window.alert(err.message);
    },
  });

  const verifyEmailHandler = () => {
    setIsLoadingState(true);
    console.log(token);
    if (!token) return;
    verifyEmail.mutate({
      token: token,
    });
  };
  return (
    <button
      className="dark:bg-semiViolet relative mt-8 h-10 w-36 rounded-md bg-lightSemiViolet text-white dark:text-semiWhite"
      onClick={() => verifyEmailHandler()}
    >
      Verify
    </button>
  );
};

export default VerifyEmailButton;
