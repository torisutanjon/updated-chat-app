import { useThemeContext, useAddRoomContext } from "@/pages/hooks";
const RoomName = () => {
  const { theme } = useThemeContext();
  const { room, setRoom } = useAddRoomContext();

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setRoom((prevState) => ({ ...prevState, [name]: value }));
  };
  return (
    <>
      <p className="mt-8 text-sm text-lightSemiViolet dark:text-semiWhite/75">
        Room Name:
      </p>
      <input
        type="text"
        className={
          theme
            ? "relative mt-4 h-8 w-full border-b-[1px] border-semiWhite/75 bg-transparent pl-2 text-xs text-semiWhite/75 outline-none"
            : "relative mt-4 h-8 w-full rounded-md border-[1px] border-lightSemiViolet pl-2 text-xs text-semiBlack/75 outline-none"
        }
        name="roomName"
        value={room.roomName}
        onChange={onChangeHandler}
      />
    </>
  );
};

export default RoomName;
