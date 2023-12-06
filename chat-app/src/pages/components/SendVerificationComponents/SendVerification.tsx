import { api } from "@/utils/api";
import { useRouter } from "next/router";
import { useLoadingContext } from "@/pages/hooks";
const SendVerification = () => {
  const router = useRouter();
  const { setIsLoadingState } = useLoadingContext();
  const sendVerification = api.account.sendVerificationEmail.useMutation({
    onSuccess: (res) => {
      setIsLoadingState(false);
      window.alert(res.message);
      void router.push("/account-settings");
    },
    onError: (err) => {
      window.alert(err.message);
    },
  });

  const sendVerificationHandler = () => {
    setIsLoadingState(true);
    sendVerification.mutate();
  };
  return (
    <button
      className="relative mt-8 h-10 w-36 rounded-md bg-lightSemiViolet text-white dark:text-semiWhite"
      onClick={() => sendVerificationHandler()}
    >
      Send
    </button>
  );
};

export default SendVerification;
