import Image from "next/image";
import { loadingLight } from "../assets";

const LoadingComponent = () => {
  return (
    <div className="fixed left-0 top-0 z-10 flex h-screen w-screen items-center justify-center bg-semiWhite/50 dark:bg-semiBlack/50">
      <Image src={loadingLight} alt="" className="relative h-24 w-24" />
    </div>
  );
};

export default LoadingComponent;
