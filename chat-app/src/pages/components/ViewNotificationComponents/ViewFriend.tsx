import { useRouter } from "next/router";
import type { IUserProps } from "@/utils/interfaces";

const ViewFriend = ({ data }: IUserProps) => {
  const router = useRouter();
  return (
    <button
      type="button"
      className="relative mt-16 h-8 w-40 rounded-sm bg-semiBlack text-xs text-semiWhite dark:bg-semiLightWhite/60 dark:text-semiBlack"
      onClick={() =>
        void router.push({
          pathname: `/user/${data.name}`,
          query: { id: data.id },
        })
      }
    >
      View Friend
    </button>
  );
};

export default ViewFriend;
