import { api } from "@/utils/api";
import { NotificationButton } from "./index";

const CheckNotification = () => {
  const { data, isLoading } = api.notification.getNotifications.useQuery();
  return !isLoading && data ? (
    <NotificationButton
      hasUnread={data.some((notificaiton) =>
        notificaiton.read === false ? true : false,
      )}
    />
  ) : (
    <NotificationButton hasUnread={false} />
  );
};

export default CheckNotification;
