import { PageContainer, IsAuth, DisplayLoading } from "@/pages/components";
import Head from "next/head";
import { VerifyEmailButton } from "../components/VerifyEmailComponents";
import { useCheckEmailVerification } from "../hooks";

const VerifyEmail = () => {
  useCheckEmailVerification();
  return (
    <PageContainer>
      <Head>
        <title>Verify Email</title>
      </Head>
      <main className="relative flex h-full w-full flex-col items-center justify-center bg-white dark:bg-semiBlack">
        <div className="dark:bg-semiViolet absolute top-0 flex h-16 w-full flex-row items-center justify-between bg-lightSemiViolet px-4">
          <p className="self-center text-white">Verify Email</p>
        </div>
        <p className="text-2xl text-semiBlack dark:text-semiWhite">
          Click to verify email
        </p>
        <VerifyEmailButton />
        <DisplayLoading />
      </main>
    </PageContainer>
  );
};

export default IsAuth(VerifyEmail);
