import {
  IsAuth,
  PageContainer,
  BackButton,
  DisplayLoading,
} from "../components";
import { FetchUser } from "../components/UserComponents";
import Head from "next/head";
import { LoadingContextProvider } from "../context";
const ViewUserProfile = () => {
  return (
    <LoadingContextProvider>
      <PageContainer>
        <Head>
          <title>ChatApp by Tristan John P. Girao</title>
        </Head>
        <main className="relative flex h-full w-full flex-col items-center justify-center bg-white dark:bg-semiBlack">
          <FetchUser />
          <BackButton linkTo="/search-chat" />
          <DisplayLoading />
        </main>
      </PageContainer>
    </LoadingContextProvider>
  );
};

export default IsAuth(ViewUserProfile);
