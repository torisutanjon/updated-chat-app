import { addDark } from "@/pages/assets";
import { ImageButton } from "../Buttons";
import { useAddRoomContext } from "@/pages/hooks";
const AddButton = () => {
  const { setAddRoom } = useAddRoomContext();
  return (
    <ImageButton
      buttonType={"button"}
      buttonStyle={
        "relative flex h-6 w-6 items-center justify-center sm:ml-6 sm:h-8 sm:w-8 transition-all"
      }
      onClick={() => setAddRoom(true)}
      imageStyle={"relative h-full w-full"}
      image={addDark}
      imagePriority
    />
  );
};

export default AddButton;
