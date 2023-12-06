import type { GetServerSideProps } from "next";
import { getServerAuthSession } from "@/server/auth";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

const IsAuth = <P extends object>(Component: React.ComponentType<P>) => {
  const AuthRoute: React.FC<P> = (props) => {
    const router = useRouter();
    const { status } = useSession({
      required: true,
      onUnauthenticated() {
        void router.push("/");
      },
    });

    if (status === "loading") return <h2>Checking session please wait...</h2>;
    return <Component {...props} />;
  };
  return AuthRoute;
};

export default IsAuth;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const session = await getServerAuthSession(ctx);
  if (!session)
    return {
      redirect: {
        destination: "/",
      },
      props: { session },
    };
  return {
    props: { session },
  };
};
