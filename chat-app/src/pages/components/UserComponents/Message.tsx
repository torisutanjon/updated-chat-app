import { useRouter } from "next/router";
import type { IUserProps } from "@/utils/interfaces";

const Message = ({ data }: IUserProps) => {
  const router = useRouter();
  return (
    <button
      className="text-lightborder-lightSemiViolet relative h-8 w-40 rounded-md border-2 border-lightSemiViolet text-sm text-lightSemiViolet dark:border-semiWhite/75 dark:text-semiWhite/75 "
      onClick={() =>
        void router.push({
          pathname: `/chat/${data.id}`,
        })
      }
    >
      Message
    </button>
  );
};

export default Message;
