import { api } from "@/utils/api";
import { useRouter } from "next/router";

const useCheckEmailVerification = () => {
  const router = useRouter();
  const { data, status, isLoading } = api.account.isEmailVerified.useQuery();

  if (status === "error") {
    window.alert("Internal Server Error");
    return void router.push("/account-settings");
  }

  if (!isLoading && data.emailVerified !== null) {
    window.alert("Email has already been verified");
    window.close();
  }
};

export default useCheckEmailVerification;
