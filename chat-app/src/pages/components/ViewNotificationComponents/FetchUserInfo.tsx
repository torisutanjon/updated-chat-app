import { useGetSenderInfo } from "@/pages/hooks/useNotificationHooks";
import { DisplayNotificationInfo } from "./index";
const FetchUserInfo = () => {
  const { data, isLoading } = useGetSenderInfo();
  return !isLoading && data ? (
    <DisplayNotificationInfo
      data={{
        id: data.data.id,
        friend: data.friend,
        image: data.data.image,
        name: data.data.name ? data.data.name : "No name",
      }}
    />
  ) : (
    <div className="relative flex h-full w-full flex-col items-center justify-center bg-white dark:bg-semiBlack">
      <p className="font-medium text-semiLightWhite/75">Loading ...</p>
    </div>
  );
};

export default FetchUserInfo;
