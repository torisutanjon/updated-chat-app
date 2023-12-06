import { useRouter } from "next/router";

const EmailVerifyButton = () => {
  const router = useRouter();
  return (
    <button
      type="button"
      className="dark:bg-semiViolet relative mt-2 h-6 w-20 rounded-sm bg-lightSemiViolet text-xs text-white/50 sm:ml-4 sm:mt-0 sm:h-7 sm:w-24 sm:rounded-md sm:text-sm"
      onClick={() => void router.push("/send-verification")}
    >
      Verify
    </button>
  );
};

export default EmailVerifyButton;
