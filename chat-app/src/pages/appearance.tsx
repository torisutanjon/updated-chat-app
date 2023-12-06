import { PageContainer, IsAuth } from "./components";
import { useThemeContext } from "./hooks";
import { leftArrowDark } from "./assets";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";

const AppearanceSettings = () => {
  const { theme, changeThemeHandler } = useThemeContext();
  const router = useRouter();
  return (
    <PageContainer>
      <Head>
        <title>Appearance</title>
      </Head>
      <div className="relative flex h-full w-full items-center justify-center  bg-white dark:bg-semiBlack">
        <div className="relative flex h-full w-full flex-col transition-all sm:m-auto sm:h-5/6 sm:w-11/12 sm:rounded-xl xl:w-5/6">
          <div className="dark:bg-semiViolet relative flex h-16 w-full flex-row items-center justify-between bg-lightSemiViolet px-4 sm:rounded-xl sm:px-8">
            <p className="text-white sm:text-xl">Appearance</p>
          </div>
          <div className="relative mt-6 flex h-14 w-full flex-row items-center justify-between border-b-[1px] border-b-semiBlack px-4 dark:border-b-semiLightWhite">
            <p className="text-semiBlack/60 dark:text-semiLightWhite/60">
              Dark Mode
            </p>
            <div className="relative flex flex-row items-center justify-center">
              <p className="mr-2 text-xs font-medium text-semiBlack/50 dark:text-semiLightWhite/60">
                Off
              </p>
              <label className="switch">
                <input
                  type="checkbox"
                  onChange={changeThemeHandler}
                  checked={theme === "dark" ? true : false}
                />
                <span className="slider round border-semiBlack dark:border-semiLightWhite "></span>
              </label>
              <p className="ml-2 text-xs font-medium text-semiBlack/50 dark:text-semiLightWhite/60">
                On
              </p>
            </div>
          </div>
          <button
            type="button"
            className="absolute bottom-4 left-4 flex h-6 w-6 items-center justify-center"
            onClick={() => void router.push("/settings")}
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

export default IsAuth(AppearanceSettings);
