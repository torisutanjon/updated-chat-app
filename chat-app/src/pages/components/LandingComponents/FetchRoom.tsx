import { api } from "@/utils/api";
import { RoomList } from "./index";
import { RoomPasswrodContextProvider } from "@/pages/context";
const FetchRoom = () => {
  const { data, isLoading } = api.room.getAllRooms.useQuery();
  return isLoading ? (
    <p className="font-medium text-semiBlack/50 dark:text-semiLightWhite/50">
      fetching chats...
    </p>
  ) : data === undefined ? (
    <p className="font-medium text-semiBlack/50">No Chats</p>
  ) : (
    <div className="relative h-full w-full overflow-auto">
      <RoomPasswrodContextProvider>
        <RoomList data={data} />
      </RoomPasswrodContextProvider>
    </div>
  );
};

export default FetchRoom;
