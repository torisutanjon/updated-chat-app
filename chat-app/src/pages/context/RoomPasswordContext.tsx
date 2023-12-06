import { createContext, useState, useEffect, useRef } from "react";
import { api } from "@/utils/api";
import { useRouter } from "next/router";
import type { IRoomPasswordContext } from "@/utils/interfaces";
import Image from "next/image";
import { crossDark } from "../assets";

export const RoomPasswrodContext = createContext<IRoomPasswordContext>({
  passwordComponent: false,
  setPasswordComponent: () => Boolean,
  roomID: "",
  setRoomID: () => String,
});

const RoomPasswrodContextProvider = ({
  children,
}: {
  children: JSX.Element;
}) => {
  const [passwordComponent, setPasswordComponent] = useState(false);
  const [password, setPassword] = useState("");
  const [roomID, setRoomID] = useState("");

  const PasswordComponent = () => {
    const router = useRouter();
    const ref = useRef<HTMLInputElement>(null);

    const verifyPassword = api.room.checkRoomPassword.useMutation({
      onSuccess: () => {
        setPasswordComponent(false);
        void router.push(`/chat/${roomID}`);
      },
      onError: (err) => {
        window.alert(err.message);
        setPasswordComponent(false);
      },
    });

    const onChangehandler = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;
      setPassword(value);
    };

    const verifyPasswordHandler = () => {
      verifyPassword.mutate({
        roomID,
        password,
      });
    };

    useEffect(() => {
      if (ref.current) {
        ref.current.focus();
      }
    }, []);

    return (
      <div className="fixed left-0 top-0 z-30 flex h-screen w-screen items-center justify-center bg-semiBlack/10 dark:bg-white/10">
        <div className="relative flex h-32 w-64 flex-col items-center justify-center rounded-md bg-white dark:bg-semiBlack">
          <button
            type="button"
            className="absolute right-2 top-2 h-3 w-3"
            onClick={() => setPasswordComponent(false)}
          >
            <Image src={crossDark} alt="" className="relative h-full w-full" />
          </button>
          <p className="text-sm text-semiBlack/75 dark:text-semiWhite/75">
            Password
          </p>
          <input
            type="text"
            className="relative mt-4 w-4/5 border-b-[1px] border-semiBlack/75 bg-transparent text-center text-sm text-semiBlack/75 outline-none dark:border-semiWhite/75 dark:text-semiWhite/75"
            ref={ref}
            value={password}
            onChange={onChangehandler}
          />
          <button
            type="button"
            className="relative mt-4 h-6 w-16 rounded-sm bg-semiBlack/75 text-xs text-semiWhite dark:bg-semiWhite dark:text-semiBlack"
            onClick={() => verifyPasswordHandler()}
          >
            Join
          </button>
        </div>
      </div>
    );
  };

  return (
    <RoomPasswrodContext.Provider
      value={{
        passwordComponent,
        setPasswordComponent,
        roomID,
        setRoomID,
      }}
    >
      {children}
      {passwordComponent && <PasswordComponent />}
    </RoomPasswrodContext.Provider>
  );
};

export default RoomPasswrodContextProvider;
