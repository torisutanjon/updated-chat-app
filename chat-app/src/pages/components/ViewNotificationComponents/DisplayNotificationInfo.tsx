import { useParseParams } from "@/pages/hooks/useNotificationHooks";
import Image from "next/image";
import { BackButton } from "../index";
import { RenderAction } from "./index";
import type { IUserProps } from "@/utils/interfaces";

const DisplayNotificationInfo = ({ data }: IUserProps) => {
  const { notification } = useParseParams();
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-start bg-white dark:bg-semiBlack">
      <Image
        src={notification.image}
        alt=""
        height={120}
        width={120}
        className="relative mt-28 h-24 w-24 rounded-full"
      />
      <div className="relative mt-12 flex w-4/5 items-center justify-center bg-white text-center dark:bg-semiBlack">
        <p className="relative text-2xl font-bold text-semiBlack/75 dark:text-semiLightWhite/95">
          {notification.senderName}
        </p>
      </div>
      <div className="relative mt-4 flex w-4/5 items-center justify-center text-center">
        <p className="text-lg text-semiBlack/75 dark:text-semiLightWhite/95">
          {notification.message}
        </p>
      </div>
      <RenderAction data={data} />
      <div className="absolute bottom-6 left-6 h-6 w-6">
        <BackButton linkTo="/notifications" />
      </div>
    </div>
  );
};

export default DisplayNotificationInfo;
