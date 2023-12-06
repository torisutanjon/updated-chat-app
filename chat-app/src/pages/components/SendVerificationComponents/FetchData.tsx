import { api } from "@/utils/api";
import { useRouter } from "next/router";
import { SendVerification } from "./index";
const FetchData = () => {
  const router = useRouter();
  const { data, status } = api.account.isEmailVerified.useQuery();

  if (status === "loading") return <h2>Checking user infomation ...</h2>;

  if (status === "error") {
    window.alert("Internal Server Error");
    return void router.push("/account-settings");
  }

  if (data.emailVerified) {
    window.alert("Email has already been verified");
    return void router.push("/account-settings");
  }
  return (
    <>
      <div className="absolute top-0 flex h-16 w-full flex-row items-center justify-between bg-lightSemiViolet px-4">
        <p className="self-center text-white">Send Verfication</p>
      </div>
      <p className="text-2xl text-semiBlack dark:text-semiWhite">
        Click to send verification
      </p>
      <SendVerification />
    </>
  );
};

export default FetchData;
