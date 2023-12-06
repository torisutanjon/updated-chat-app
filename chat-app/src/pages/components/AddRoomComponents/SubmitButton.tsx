import { useAddRoomContext, useLoadingContext } from "@/pages/hooks";
import { api } from "@/utils/api";

const SubmitButton = () => {
  const { room, roomType, setAddRoom } = useAddRoomContext();
  const { setIsLoadingState } = useLoadingContext();
  const addRoom = api.room.addRoom.useMutation({
    onSuccess: (res) => {
      setIsLoadingState(false);
      setAddRoom(false);
      window.alert(res.message);
    },
    onError: (err) => {
      setIsLoadingState(false);
      window.alert(err.message);
    },
  });
  const addRoomHandler = () => {
    setIsLoadingState(true);
    if (roomType === "public") {
      if (room.roomName === "") return window.alert("Room name is required!");
      addRoom.mutate({
        roomName: room.roomName,
        roomType: roomType,
      });
    } else {
      if (Object.values(room).some((value) => value === ""))
        return window.alert("Room name and password are required!");
      addRoom.mutate({
        roomName: room.roomName,
        roomType: roomType,
        roomPassword: room.roomPassword,
      });
    }
  };
  return (
    <button
      className="dark:bg-semiViolet relative mx-auto mt-8 h-7 w-24 rounded-full bg-lightSemiViolet text-xs text-white/75"
      onClick={() => void addRoomHandler()}
    >
      Add Room
    </button>
  );
};

export default SubmitButton;
