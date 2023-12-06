import Image from "next/image";
import { bell } from "../../assets";
import { useRouter } from "next/navigation";

const NotificationButton = ({ hasUnread }: { hasUnread: boolean }) => {
  const router = useRouter();
  return (
    <button
      className="fixed bottom-8 right-16 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-lightSemiViolet transition-all md:right-24 lg:h-12 lg:w-12"
      onClick={() => void router.push("/notifications")}
    >
      <div className="relative flex h-full w-full items-center justify-center">
        <Image src={bell} alt="" className="relative h-2/3 w-2/3" />
        {hasUnread && (
          <div className="absolute bottom-0 right-1 h-3 w-3 rounded-full bg-red-500"></div>
        )}
      </div>
    </button>
  );
};

export default NotificationButton;
