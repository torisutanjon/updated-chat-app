import { useContext } from "react";
import { UpdateAccountContext } from "../context/UpdateAccountContext";

const useUpdateAccountContext = () => {
  const { profileState, setProfileState } = useContext(UpdateAccountContext);
  return { profileState, setProfileState };
};

export default useUpdateAccountContext;
