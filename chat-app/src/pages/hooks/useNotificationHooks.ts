import { useRouter } from "next/router";
import { useEffect } from "react";
import { api } from "@/utils/api";
import type { INotification } from "@/utils/interfaces";

export const useParseParams = () => {
  const router = useRouter();
  const { query } = router;
  const notificationParam = Array.isArray(query.notification)
    ? query.notification.join(",")
    : query.notification;

  const decodedParam = notificationParam
    ? decodeURIComponent(notificationParam)
    : "";

  const notification = JSON.parse(decodedParam) as INotification;

  return { notification };
};

export const useGetSenderInfo = () => {
  const { notification } = useParseParams();
  const { data, isLoading } = api.user.getUserInfo.useQuery({
    userid: notification.from,
  });

  return { data, isLoading };
};

export const useNotificationReadUpdate = () => {
  const { notification } = useParseParams();
  const { data, isLoading } = useGetSenderInfo();

  const notificationRead = api.notification.notificationRead.useMutation({
    onError: (err) => {
      console.log(err.message);
    },
  });

  useEffect(() => {
    if (!isLoading && data)
      notificationRead.mutate({
        id: notification.id,
      });
  }, [data]);
};
