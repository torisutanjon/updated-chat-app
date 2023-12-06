import { useRouter } from "next/router";
import { TopNav, OutPuts, Inputs } from "./index";
import { api } from "@/utils/api";
import { useSession } from "next-auth/react";
import { useEffect, useMemo, useCallback } from "react";
import { useSocketEmitters } from "@/pages/hooks";

const FetchChat = () => {
  const { data: session } = useSession();
  const { joinRoom } = useSocketEmitters();
  const router = useRouter();
  const { id } = router.query;
  const decodedID = decodeURIComponent(
    id ? (typeof id === "string" ? id : id[0]!) : "",
  );
  const { data, isLoading } = api.room.getChatById.useQuery({
    id: decodedID,
  });

  const memoizedData = useMemo(() => data, [data]);
  const memoizedSession = useMemo(() => session, [session]);
  const memoizedJoinRoom = useCallback(
    () => joinRoom(data!.roomName),
    [joinRoom, data],
  );

  // const memoizedWatchReponse = useCallback(
  //   () => watchResponse(),
  //   [watchResponse],
  // );

  useEffect(() => {
    if (!isLoading && memoizedData && memoizedSession) {
      memoizedJoinRoom();
      // memoizedWatchReponse();
    }
  }, [
    isLoading,
    // memoizedWatchReponse,
    memoizedData,
    memoizedSession,
    memoizedJoinRoom,
  ]);

  return !isLoading && data && session ? (
    <div className="relative flex h-full w-full flex-col items-start justify-start">
      <TopNav
        roomName={
          data.roomType === "peer"
            ? data.alternativeRoomNames.filter(
                (name) => name !== session.user.name,
              )[0]
            : data.roomName
        }
      />
      <OutPuts />
      <Inputs room={data.roomName} />
    </div>
  ) : (
    <></>
  );
};

export default FetchChat;
