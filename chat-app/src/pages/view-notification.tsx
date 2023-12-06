import { PageContainer, DisplayLoading, IsAuth } from "./components";
import Head from "next/head";
import { FetchUserInfo } from "./components/ViewNotificationComponents";
const ViewNotification = () => {
  return (
    <PageContainer>
      <Head>
        <title>Friend Request</title>
      </Head>
      <FetchUserInfo />
      <DisplayLoading />
    </PageContainer>
  );
};

export default IsAuth(ViewNotification);
