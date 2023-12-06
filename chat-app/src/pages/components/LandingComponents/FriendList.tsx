import Image from "next/image";
import { useRouter } from "next/router";
import type { IFriendListProps } from "@/utils/interfaces";

const FriendList = ({ data }: IFriendListProps) => {
  const router = useRouter();
  return data.map((friend, key) => {
    return (
      <button
        key={key}
        type="button"
        className="relative mx-auto mt-2 flex h-10 w-10 items-center justify-center lg:w-40 lg:justify-start lg:rounded-sm lg:bg-semiBlack/75 lg:px-2 lg:dark:bg-white/90 xl:w-48"
        onClick={() =>
          void router.push({
            pathname: `/user/${friend.name}`,
            query: { id: friend.id },
          })
        }
      >
        {friend.image ? (
          <Image
            src={friend.image}
            height={120}
            width={120}
            alt=""
            className="relative h-9 w-9 rounded-full"
          />
        ) : (
          <button
            type="button"
            className="relative h-4/5 w-4/5 rounded-full bg-lightSemiViolet text-sm text-semiWhite"
          >
            {friend.name?.charAt(0)}
          </button>
        )}
        <p className="ml-2 hidden truncate text-xs text-semiLightWhite/60 dark:text-semiBlack/75 lg:block">
          {friend.name}
        </p>
      </button>
    );
  });
};

export default FriendList;
