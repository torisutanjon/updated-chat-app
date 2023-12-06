import { PageContainer, BackButton, IsAuth } from "@/pages/components";
import Head from "next/head";
import { api } from "@/utils/api";
import { signOut } from "next-auth/react";
import {
  AccountInfo,
  UpdateButton,
} from "./components/AccountSetingsComponent";

const AccountSettings = () => {
  //trpc call
  const { data, status, isLoading } = api.account.getUserInfo.useQuery();

  if (status === "error") {
    window.alert("Invalid Session, Please Sign In Again");
    void signOut({ callbackUrl: "/" });
  }

  return (
    <PageContainer>
      <Head>
        <title>Account Settings</title>
      </Head>
      <main className="relative flex h-full w-full items-center justify-center bg-white dark:bg-semiBlack">
        {!isLoading && data && (
          <div className="relative flex h-full w-full flex-col items-center justify-start bg-transparent sm:h-5/6 sm:w-11/12 xl:w-5/6">
            <div className="dark:bg-semiViolet relative flex h-16 w-full flex-row items-center justify-between bg-lightSemiViolet px-4 sm:rounded-xl sm:px-8">
              <p className="text-white sm:text-xl">Account Settings</p>
            </div>
            <AccountInfo data={data} />
            <UpdateButton />
            <BackButton linkTo="/settings" />
          </div>
        )}
      </main>
    </PageContainer>
  );
};

export default IsAuth(AccountSettings);
