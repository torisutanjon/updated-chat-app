import { useRouter } from "next/router";
import { NotificationDataContainer } from "./index";
import type { INotificationProps } from "@/utils/interfaces";
interface IProps {
  notification: INotificationProps;
}

const NotificationNavigator = ({ notification }: IProps) => {
  const router = useRouter();
  console.log(notification);
  const handleNavigate = () => {
    const query = encodeURIComponent(JSON.stringify(notification));

    // Push the route with the query parameter
    void router.push({
      pathname: "/view-notification",
      query: { notification: query },
    });

    // Replace the current URL without adding a new entry to the history
    void router.replace({
      pathname: "/view-notification",
      query: { notification: query },
    });
  };

  return (
    <div
      className={`relative flex h-16 w-full flex-row items-center justify-center hover:bg-lightSemiViolet/25 ${
        notification.read === false &&
        "bg-semiBlack/25 dark:bg-semiLightWhite/25"
      }`}
      onClick={() => handleNavigate()}
    >
      <NotificationDataContainer notification={notification} />
    </div>
  );
};

export default NotificationNavigator;
