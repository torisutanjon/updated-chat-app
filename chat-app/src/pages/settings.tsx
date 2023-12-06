import { PageContainer, IsAuth } from "./components";
import Head from "next/head";
import { useRouter } from "next/router";
import { leftArrowDark } from "./assets";
import Image from "next/image";
import { signOut } from "next-auth/react";

const Account = () => {
  const router = useRouter();
  return (
    <PageContainer>
      <Head>
        <title>Settings</title>
      </Head>
      <div className="relative flex h-full w-full items-center justify-center bg-white dark:bg-semiBlack ">
        <div className="relative flex h-full w-full flex-col transition-all sm:m-auto sm:h-5/6 sm:w-11/12 xl:w-5/6">
          <div className="relative flex h-16 w-full flex-row items-center justify-between bg-lightSemiViolet px-4 sm:rounded-xl sm:px-8">
            <p className="text-white sm:text-xl">Settings</p>
          </div>
          <div
            className="relative mt-6 flex h-14 w-full cursor-pointer items-center justify-start border-b-[1px] border-b-semiBlack/60 dark:border-b-semiLightWhite/60"
            onClick={() => void router.push("/account-settings")}
          >
            <p className="ml-4 text-semiBlack/60 dark:text-semiLightWhite/60">
              Account Settings
            </p>
          </div>
          <div
            className="relative flex h-14 w-full cursor-pointer items-center justify-start border-b-[1px] border-b-semiBlack/60 dark:border-b-semiLightWhite/60"
            onClick={() => void router.push("/appearance")}
          >
            <p className="ml-4 text-semiBlack/60 dark:text-semiLightWhite/60">
              Appearance
            </p>
          </div>
          <div
            className="relative flex h-14 w-full items-center justify-start border-b-[1px] border-b-semiBlack/60 dark:border-b-semiLightWhite/60"
            onClick={() => void signOut({ callbackUrl: "/" })}
          >
            <p className="ml-4 text-semiRed dark:text-semiRed/60">Log Out</p>
          </div>
          <button
            type="button"
            className="absolute bottom-4 left-4 h-6 w-6"
            onClick={() => void router.push("/landing")}
          >
            <Image
              src={leftArrowDark}
              alt=""
              className="relative h-full w-full"
            />
          </button>
        </div>
      </div>
    </PageContainer>
  );
};

export default IsAuth(Account);
