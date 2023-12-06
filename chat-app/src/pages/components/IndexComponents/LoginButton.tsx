import { type GetServerSideProps } from "next";
import { getServerAuthSession } from "@/server/auth";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

const LoginButton = () => {
  const { data: session } = useSession();
  const router = useRouter();
  return session ? (
    <button
      className="relative h-9 w-56 self-center rounded-lg bg-semiBlack text-xs text-semiWhite dark:bg-semiWhite dark:text-semiBlack sm:mr-6 lg:text-sm"
      onClick={() => router.push("/landing")}
    >
      {"Let's Go!"}
    </button>
  ) : (
    <button
      className="relative h-9 w-56 self-center rounded-lg bg-semiBlack text-xs text-semiWhite dark:bg-semiWhite dark:text-semiBlack sm:mr-6 lg:text-sm"
      onClick={() => void signIn()}
    >
      Continue with Google
    </button>
  );
};

export default LoginButton;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const session = await getServerAuthSession(ctx);

  return {
    props: { session },
  };
};
