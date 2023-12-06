import { useRouter } from "next/router";
import Image from "next/image";
import { leftArrowLight, leftArrowDark } from "../assets";
import { useThemeContext } from "../hooks";

const BackButton = ({ linkTo }: { linkTo: string }) => {
  const router = useRouter();
  const { theme } = useThemeContext();
  return (
    <button
      className="absolute bottom-4 left-4 flex h-6 w-6 items-center justify-center"
      onClick={() => void router.push(linkTo)}
    >
      <Image
        src={theme ? leftArrowDark : leftArrowLight}
        alt=""
        className="relative h-full w-full"
      />
    </button>
  );
};

export default BackButton;
