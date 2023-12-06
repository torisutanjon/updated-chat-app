import Image from "next/image";
import { chatHead } from "../assets";
import { useRouter } from "next/router";

const ComposeMessageButton = () => {
  const router = useRouter();
  return (
    <button
      type="button"
      className="fixed bottom-8 left-16 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-lightSemiViolet transition-all md:left-24 lg:h-12 lg:w-12"
      onClick={() => void router.push("/create-chat")}
    >
      <Image src={chatHead} alt="" className="relative h-2/3 w-2/3" />
    </button>
  );
};

export default ComposeMessageButton;
