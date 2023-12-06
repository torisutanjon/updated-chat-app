import {
  PageContainer,
  BackButton,
  DisplayLoading,
  IsAuth,
} from "./components";
import React from "react";
import Head from "next/head";
import {
  UpdateFields,
  UpdateButton,
} from "./components/UpdateAccountComponents";
import { UpdateAccountContextProvider } from "./context";

const UpdateAccount = () => {
  return (
    <UpdateAccountContextProvider>
      <PageContainer>
        <Head>
          <title>Update Account</title>
        </Head>
        <main className="relative flex h-full w-full items-center justify-center  bg-white dark:bg-semiBlack">
          <div className="relative flex h-full w-full flex-col items-center justify-start bg-white dark:bg-semiBlack  sm:m-auto sm:h-5/6 sm:w-11/12 xl:w-5/6">
            <div className="dark:bg-semiViolet relative flex h-16 w-full items-center bg-lightSemiViolet sm:rounded-xl">
              <p className="ml-4 text-white">Update Account</p>
            </div>
            <UpdateFields />
            <UpdateButton />
            <BackButton linkTo="/account-settings" />
            <DisplayLoading />
          </div>
        </main>
      </PageContainer>
    </UpdateAccountContextProvider>
  );
};

export default IsAuth(UpdateAccount);
