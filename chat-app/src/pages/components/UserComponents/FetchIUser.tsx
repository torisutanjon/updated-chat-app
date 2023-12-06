import { api } from "@/utils/api";
import { useRouter } from "next/router";
import Image from "next/image";
import { useThemeContext } from "@/pages/hooks";
import { profileDark, profileLight } from "@/pages/assets";
import { RenderAction } from "./index";
const FetchUser = () => {
  const router = useRouter();
  const params = router.query;
  const { data, isLoading } = api.user.getUserInfo.useQuery({
    userid:
      params.id && typeof params.id === "string" ? params.id : params.id![0]!,
  });
  const { theme } = useThemeContext();
  return isLoading ? (
    <div className="absolute left-0 top-0 flex h-screen w-screen items-center justify-center bg-white dark:bg-semiBlack">
      <p className="text-xl text-semiGray">Fetching user info...</p>
    </div>
  ) : (
    data && (
      <>
        <Image
          src={
            data.data.image
              ? data.data.image
              : theme
              ? profileDark
              : profileLight
          }
          alt=""
          className={`relative ${
            data.data.image ? "h-24 w-24 rounded-full" : "h-20 w-16"
          }`}
          height={120}
          width={120}
          priority
        />
        <p className="my-6 text-2xl font-bold text-lightSemiViolet dark:text-semiLightWhite">
          {params.name}
        </p>
        <RenderAction
          data={{
            id: data.data.id,
            friend: data.friend,
            image: data.data.image,
            name: data.data.name ? data.data.name : "No name",
          }}
        />
      </>
    )
  );
};

export default FetchUser;
