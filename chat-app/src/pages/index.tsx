import Head from "next/head";
import { PageContainer, LogoText } from "@/pages/components";
import { LoginButton } from "./components/IndexComponents";
export default function Home() {
  return (
    <PageContainer>
      <Head>
        <title>ChatApp by Tristan John P. Girao</title>
      </Head>
      <main className="relative my-auto flex h-full w-full flex-col items-start justify-center bg-white dark:bg-semiBlack">
        <div className="relative flex w-1/2 flex-col items-end justify-end font-bold text-semiGray dark:text-semiWhite lg:mb-4">
          <p className="text-2xl sm:text-3xl lg:text-4xl">Welcome</p>
          <p className="sm:text-xl lg:mt-4 lg:text-2xl">to</p>
        </div>
        <div className="relative mx-auto">
          <LogoText textSize="text-5xl sm:text-6xl" />
        </div>
        <div className="mx-auto mt-24 flex flex-col items-center justify-center sm:mt-16 sm:flex-row">
          <LoginButton />
        </div>
        <p className="absolute bottom-6 self-center text-xxs text-semiBlack dark:text-semiWhite sm:text-xs">
          Tristan John P. Girao &copy; 2023
        </p>
      </main>
    </PageContainer>
  );
}
