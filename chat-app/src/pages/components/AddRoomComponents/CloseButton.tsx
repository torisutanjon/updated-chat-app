import { ImageButton } from "../Buttons";
import { useThemeContext, useAddRoomContext } from "@/pages/hooks";
import { crossDark, crossLight } from "@/pages/assets";

const CloseButton = () => {
  const { theme } = useThemeContext();
  const { setAddRoom } = useAddRoomContext();
  return (
    <ImageButton
      buttonType="button"
      buttonStyle="absolute right-2 top-2 flex h-4 w-4 items-center justify-center "
      onClick={() => setAddRoom(false)}
      image={theme ? crossDark : crossLight}
      imageStyle="relative h-4/5 w-4/5"
      imagePriority
    />
  );
};

export default CloseButton;
