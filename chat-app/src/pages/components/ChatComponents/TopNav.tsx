import { arrowLeft } from "@/pages/assets";
import Image from "next/image";
import { useRouter } from "next/router";
import { useSocketEmitters } from "@/pages/hooks";

const TopNav = ({ roomName }: { roomName: string | undefined }) => {
  const router = useRouter();
  const { leaveRoom } = useSocketEmitters();
  const leaveRoomHandler = () => {
    if (roomName) {
      leaveRoom(roomName);
      void router.push("/landing");
    }
  };

  return (
    <div className="relative flex h-[10%] w-full flex-row items-center justify-between px-4">
      <div className="relative flex flex-row items-center justify-center">
        <button className="relative h-4 w-4" onClick={() => leaveRoomHandler()}>
          <Image src={arrowLeft} alt="" className="relative h-full w-full" />
        </button>
        <p className="md: ml-2 text-sm text-semiBlack/75 dark:text-semiWhite">
          {roomName}
        </p>
      </div>
    </div>
  );
};

export default TopNav;
