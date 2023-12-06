import { crossDark, crossLight } from "../assets";
import Image from "next/image";
import { api } from "@/utils/api";
import { useThemeContext } from "../hooks";
import type { IViewRoomProps } from "@/utils/interfaces";

const ViewRooms = ({ setViewRoomComponent }: IViewRoomProps) => {
  const { data, status } = api.room.getAllRooms.useQuery();
  const { theme } = useThemeContext();
  if (status === "loading")
    return (
      <div className="absolute left-0 top-0 z-10 flex h-screen w-screen items-center justify-center bg-semiWhite/25 dark:bg-semiBlack/25">
        <h2 className="w-full text-center font-medium text-semiBlack/75 dark:text-semiWhite">
          Fetching Rooms...
        </h2>
      </div>
    );

  if (status === "error")
    return (
      <h2 className="w-full text-center font-medium text-semiBlack/75 dark:text-semiWhite">
        Error Fetching rooms
      </h2>
    );

  return (
    <div className="fixed left-0 top-0 z-10 flex h-screen w-screen items-center justify-center">
      <div className="dark:border-semiViolet relative flex h-64 w-52 flex-col items-center justify-start overflow-hidden rounded-md border-[1px] border-lightSemiViolet bg-white dark:border-semiLightWhite/75 dark:bg-semiBlack">
        <div className="dark:bg-semiViolet relative flex h-10 w-full items-center justify-center bg-lightSemiViolet dark:bg-semiLightWhite/75">
          <button
            className="absolute right-1 top-1 flex h-4 w-4 items-center justify-center rounded-sm border-[1px] border-semiWhite dark:border-semiBlack"
            onClick={() => setViewRoomComponent(<></>)}
          >
            <Image
              src={theme ? crossLight : crossDark}
              alt=""
              className="relative h-4/5 w-4/5"
            />
          </button>
          <p className="text-sm text-white/75 dark:text-semiBlack">Rooms</p>
        </div>
        <div className="relative mt-2 h-48 w-3/4 overflow-auto">
          {data ? (
            data.map((room, key) => {
              return <RoomContainer key={key} name={room.roomName} />;
            })
          ) : (
            <h2 className="w-full text-center font-medium text-semiBlack/75 dark:text-semiWhite">
              Checking rooms...
            </h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default ViewRooms;

const RoomContainer = ({ name }: { name: string }) => {
  return (
    <div className="dark:border-semiViolet dark:hover:bg-semiViolet relative mx-auto mt-2 flex h-8 w-4/5 items-center justify-center border-[1px] border-lightSemiViolet dark:border-none dark:bg-semiWhite">
      <p className="text-xs font-medium text-semiBlack/60 dark:text-semiBlack/75">
        {name}
      </p>
    </div>
  );
};
