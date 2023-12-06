import { PageContainer, BackButton, IsAuth } from "./components";
import Head from "next/head";
import { FetchNotification } from "./components/NotificationComponents";

const Notification = () => {
  return (
    <PageContainer>
      <Head>
        <title>Notifications</title>
      </Head>
      <div className="relative flex h-full w-full flex-col bg-white dark:bg-semiBlack">
        <div className="relative h-full w-full flex-col transition-all sm:m-auto sm:h-5/6 sm:w-11/12 xl:w-5/6">
          <div className="dark:bg-semiViolet absolute left-0 top-0 flex h-16 w-full flex-row items-center justify-between bg-lightSemiViolet px-4 sm:rounded-xl sm:px-8">
            <p className="text-white sm:text-xl">Notifications</p>
          </div>
          <FetchNotification />
          <div className="relative mb-12 ml-6">
            <BackButton linkTo="/landing" />
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default IsAuth(Notification);
