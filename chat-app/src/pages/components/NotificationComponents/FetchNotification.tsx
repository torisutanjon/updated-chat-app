import { api } from "@/utils/api";
import { NotificationList } from "./index";

const FetchNotification = () => {
  const { data, isLoading } = api.notification.getNotifications.useQuery();
  return (
    <div className="relative h-full w-full overflow-y-auto py-8 pt-20">
      {!isLoading && data ? (
        <NotificationList data={data} />
      ) : (
        <div className="relative flex h-full w-full items-center justify-center">
          <p className="text-sm text-semiBlack/75">Loading Notifications...</p>
        </div>
      )}
    </div>
  );
};

export default FetchNotification;
