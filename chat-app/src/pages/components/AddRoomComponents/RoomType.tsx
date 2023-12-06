import { useAddRoomContext } from "@/pages/hooks";

const RoomType = () => {
  const { roomType, setRoomType } = useAddRoomContext();
  const radioChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setRoomType(value);
  };
  return (
    <>
      <p className="mt-4 text-sm text-lightSemiViolet dark:text-semiWhite/75">
        Type:
      </p>
      <div className="relative mt-2 flex h-8 w-full flex-row items-center justify-center">
        <input
          type="radio"
          className="color-[#BE90D4] dark:accent-semiViolet relative h-4  w-4 cursor-pointer border-none accent-lightSemiViolet outline-none"
          value="public"
          checked={roomType === "public" && true}
          onChange={radioChangeHandler}
        />
        <p className="ml-1 text-xs text-lightSemiViolet dark:text-semiWhite/75">
          Public
        </p>
        <input
          type="radio"
          className="dark:accent-semiViolet relative ml-6 h-4 w-4 cursor-pointer border-none accent-lightSemiViolet outline-none"
          value="private"
          checked={roomType === "private" && true}
          onChange={radioChangeHandler}
        />
        <p className="ml-1 text-xs text-lightSemiViolet dark:text-semiWhite/75">
          Private
        </p>
      </div>
    </>
  );
};

export default RoomType;
