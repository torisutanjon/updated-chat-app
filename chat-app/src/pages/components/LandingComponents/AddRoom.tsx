import { useAddRoomContext } from "@/pages/hooks";

import {
  CloseButton,
  RoomName,
  RoomType,
  RoomPassword,
  SubmitButton,
  SubmitLoading,
} from "../AddRoomComponents";
const DisplayAddRoom = () => {
  const { addRoom } = useAddRoomContext();
  return (
    addRoom && (
      <div className="fixed left-0 top-0 z-10 flex h-screen w-screen items-center justify-center bg-black/5 dark:bg-white/5">
        <div className="simple-box-shadow relative flex w-2/3 flex-col items-start justify-start rounded-lg bg-white  px-4 py-6 dark:bg-semiBlack sm:w-96">
          <CloseButton />
          <RoomName />
          <RoomType />
          <RoomPassword />
          <SubmitButton />
        </div>
        <SubmitLoading />
      </div>
    )
  );
};

export default DisplayAddRoom;
