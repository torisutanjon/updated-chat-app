import { api } from "@/utils/api";
import { FriendList } from "./index";
const FetchFriends = () => {
  const { data, isLoading } = api.user.getFriends.useQuery();
  return (
    <div className="relative flex h-full w-1/5 flex-col items-center justify-start border-2 border-semiGray/25  md:w-1/3">
      <p className="relative text-sm font-medium text-semiBlack/50 dark:text-semiLightWhite/75">
        Friends
      </p>
      {!isLoading && data ? (
        <div className="relative mt-4 h-5/6 w-full overflow-y-auto">
          <FriendList data={data} />
        </div>
      ) : (
        <div className="relative mt-4 flex h-5/6 w-full items-center justify-center">
          <div className="relative flex flex-col items-center justify-center text-xs font-medium text-semiBlack/50 dark:text-semiLightWhite/75">
            <p>No</p>
            <p>Friends</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default FetchFriends;
