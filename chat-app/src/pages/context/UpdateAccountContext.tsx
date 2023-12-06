import { createContext, useState } from "react";
import type {
  IUpdateAccountProfile,
  IUpdateAccountContext,
} from "@/utils/interfaces";

export const UpdateAccountContext = createContext<IUpdateAccountContext>({
  profileState: { email: "", name: "", username: "" },
  setProfileState: () => ({ email: String, name: String, username: String }),
});

const UpdateAccountContextProvider = ({
  children,
}: {
  children: JSX.Element;
}) => {
  const [profileState, setProfileState] = useState<IUpdateAccountProfile>({
    name: "",
    username: "",
    email: "",
  });

  return (
    <UpdateAccountContext.Provider value={{ profileState, setProfileState }}>
      {children}
    </UpdateAccountContext.Provider>
  );
};

export default UpdateAccountContextProvider;
