import { NotificationNavigator } from "./index";
import type { INotificationProps } from "@/utils/interfaces";
interface IProps {
  data: INotificationProps[];
}

const NotificationList = ({ data }: IProps) => {
  return data.map((notification, key) => {
    return <NotificationNavigator notification={notification} key={key} />;
  });
};

export default NotificationList;
