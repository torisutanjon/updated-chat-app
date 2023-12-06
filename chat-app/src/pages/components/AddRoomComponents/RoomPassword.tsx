import { useAddRoomContext, useThemeContext } from "@/pages/hooks";
import { useState } from "react";
import { InputPasswordToggler } from "./index";
const RoomPassword = () => {
  const { theme } = useThemeContext();
  const { roomType, room, setRoom } = useAddRoomContext();

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setRoom((prevState) => ({ ...prevState, [name]: value }));
  };

  const [showPassword, setShowPassword] = useState(false);
  return (
    roomType === "private" && (
      <>
        <p className="mt-4 text-sm text-lightSemiViolet dark:text-semiWhite/75">
          Password:
        </p>
        <input
          type={showPassword ? "text" : "password"}
          className={
            theme
              ? "relative mt-4 h-8 w-full border-b-[1px] border-semiWhite/75 bg-transparent pl-2 text-xs text-semiWhite/75 outline-none"
              : "relative mt-4 h-8 w-full rounded-md border-[1px] border-lightSemiViolet pl-2 text-xs text-semiBlack/75 outline-none"
          }
          name="roomPassword"
          value={room.roomPassword}
          onChange={onChangeHandler}
        />
        <div className="relative mt-2 flex w-full flex-row items-center justify-center">
          <InputPasswordToggler setShowPassword={setShowPassword} />
        </div>
      </>
    )
  );
};

export default RoomPassword;
