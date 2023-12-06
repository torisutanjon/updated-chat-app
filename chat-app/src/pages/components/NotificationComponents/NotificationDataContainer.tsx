import Image from "next/image";
import { momentFromNow } from "@/utils/dateFormatter";
import { api } from "@/utils/api";
import type { INotificationProps } from "@/utils/interfaces";

interface IProps {
  notification: INotificationProps;
}
const NotificationDataContainer = ({ notification }: IProps) => {
  api.notification.notificationRead.useQuery({ id: notification.id });

  return (
    <>
      <Image
        src={notification.image}
        alt=""
        height={120}
        width={120}
        className="relative h-12 w-12 rounded-full"
      />
      <div className="relative ml-4 flex h-5/6 w-4/6 flex-col items-start justify-start">
        <div className="relative flex h-4/6 w-full items-start justify-start">
          <p className="text-xs text-semiBlack/75 dark:text-semiWhite/75">
            <span className="font-bold">{notification.senderName}</span>
            &nbsp;
            {notification.message}
          </p>
        </div>
        <div className="relative flex h-2/6 w-full items-start justify-start">
          <p className="text-xxs text-semiBlack/75 dark:text-semiWhite/75">
            {momentFromNow(notification.timeSent)}
          </p>
        </div>
      </div>
    </>
  );
};

export default NotificationDataContainer;
