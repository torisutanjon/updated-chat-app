import {
  PageContainer,
  DisplayLoading,
  BackButton,
  IsAuth,
} from "@/pages/components";
import Head from "next/head";
import { FetchData } from "./components/SendVerificationComponents";
import { LoadingContextProvider } from "./context";

const SendVerification = () => {
  return (
    <LoadingContextProvider>
      <PageContainer>
        <Head>
          <title>Verify Email</title>
        </Head>
        <main className="relative flex h-full w-full flex-col items-center justify-center bg-white dark:bg-semiBlack">
          <FetchData />
          <BackButton linkTo="/account-settings" />
          <DisplayLoading />
        </main>
      </PageContainer>
    </LoadingContextProvider>
  );
};

export default IsAuth(SendVerification);
