import { useRouter } from "next/router";

const UpdateButton = () => {
  const router = useRouter();
  return (
    <button
      type="button"
      className="dark:bg-semiViolet absolute bottom-20 h-8 w-32 rounded-md bg-lightSemiViolet text-sm text-white/60"
      onClick={() => void router.push("/update-account")}
    >
      Update Info
    </button>
  );
};

export default UpdateButton;
