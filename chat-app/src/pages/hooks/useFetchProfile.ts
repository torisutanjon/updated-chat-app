import { api } from "@/utils/api";
import { useEffect } from "react";
import { useUpdateAccountContext } from "./index";
import { signOut } from "next-auth/react";

const useFetchProfile = () => {
  const { data: profile, status } = api.account.getUserInfo.useQuery();

  if (status === "error") {
    window.alert("Invalid Session, Please Sign In Again");
    void signOut({ callbackUrl: "/" });
  }

  const { setProfileState } = useUpdateAccountContext();
  useEffect(() => {
    if (profile) {
      setProfileState({
        name: profile.name ? profile.name : "",
        username: profile.username ? profile.username : "",
        email: profile.email ? profile.email : "",
      });
    }
  }, [profile]);
};

export default useFetchProfile;
