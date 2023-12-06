import { profileLight } from "../assets";
import Image from "next/image";

interface UserTypes {
  name: string;
}

const UserContainer = ({ name }: UserTypes) => {
  return (
    <div className="dark:bg-semiLightWhite relative mx-auto my-[1px] flex h-14 w-full flex-row items-center justify-center rounded-sm bg-lightSemiViolet">
      <Image src={profileLight} alt="" className="relative ml-2 h-8 w-6 " />
      <p className="ml-4 mt-2 w-full truncate text-sm text-white/75 dark:text-semiBlack/75">
        {name}
      </p>
    </div>
  );
};

export default UserContainer;
