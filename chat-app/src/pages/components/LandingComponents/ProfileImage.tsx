import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/router";
const ProfileImage = () => {
  const { data: session } = useSession();
  const router = useRouter();
  return session?.user.image ? (
    <button
      type="button"
      className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full transition sm:mr-6"
      onClick={() => void router.push("/settings")}
    >
      <Image
        src={session?.user.image}
        height={32}
        width={32}
        alt=""
        className="relative h-full w-full"
      />
    </button>
  ) : (
    <button
      type="button"
      className="relative h-10 w-10 rounded-full bg-lightSemiViolet text-lg text-white"
      onClick={() => void router.push("/account-settings")}
    >
      {session?.user.name?.charAt(0)}
    </button>
  );
};

export default ProfileImage;
