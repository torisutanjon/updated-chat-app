import { EmailVerifyButton } from "./index";
import type { IAccountInfoProps } from "@/utils/interfaces";

const AccountInfo = ({ data }: IAccountInfoProps) => {
  return (
    <div className="relative flex w-full flex-col items-start justify-start px-4">
      <div className="relative mt-8 flex h-10 flex-col items-start justify-start sm:mt-12 lg:col-span-1">
        <p className="text- text-lightSemiViolet dark:text-semiWhite ">Name</p>
        <p className="text-sm text-semiBlack/60 dark:text-semiWhite/50 sm:text-base">
          {data.name}
        </p>
      </div>
      <div className="relative mt-8 flex h-10 flex-col items-start justify-start sm:mt-12 lg:col-span-1">
        <p className="text-lg text-lightSemiViolet dark:text-semiWhite">
          Username:
        </p>
        <p className="text-sm text-semiBlack/60 dark:text-semiWhite/50 sm:text-base">
          {data.username ? data.username : "No username"}
        </p>
      </div>
      <div className="relative mt-8 flex h-24 flex-col items-start justify-start sm:mt-12 lg:col-span-1">
        <p className="text-lg text-lightSemiViolet dark:text-semiWhite">
          Email:
        </p>
        <p className="text-sm text-semiBlack/60 dark:text-semiWhite/50 sm:text-base">
          {data.email}
        </p>
        {!data.emailVerified && <EmailVerifyButton />}
      </div>
    </div>
  );
};

export default AccountInfo;
