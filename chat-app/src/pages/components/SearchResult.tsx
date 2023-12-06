import { type Session } from "next-auth";
import { useRouter } from "next/router";
import { usePasswordContext } from "../hooks";
import type { ISearch } from "@/utils/interfaces";

interface SearchResultTypes {
  data: ISearch;
  session: Session;
}

const SearchResult = ({ data, session }: SearchResultTypes) => {
  const router = useRouter();
  const { setPasswordComponent } = usePasswordContext();
  return (
    <div
      className="relative mx-auto flex h-14 w-4/5 cursor-pointer flex-row items-center justify-start overflow-hidden border-b-[1px] border-semiBlack/25 px-2 transition-all dark:border-semiWhite/25 lg:w-1/2"
      onClick={() =>
        data.data.type === "user"
          ? void router.push({
              pathname: `/user/${"name" in data.data && data.data.name}`,
              query: { id: data.data.id },
            })
          : data.data.type === "room" &&
            ("roomType" in data.data && data.data.roomType !== "private"
              ? void router.push(`/chat/${data.data.id}`)
              : setPasswordComponent(true))
      }
    >
      <div className="relative flex h-full w-2/3 items-center justify-start overflow-hidden">
        <p className="truncate text-sm text-semiBlack/60 dark:text-semiLightWhite/75">
          {"name" in data.data ? data.data.name : data.data.roomName}
        </p>
      </div>
      <div className="relative flex h-full w-1/3 items-center justify-start overflow-hidden">
        {"friends" in data.data &&
          data.data.friends.find((id) => id === session.user.id) && (
            <div className="relative ml-1 mt-1 flex h-4 w-14 items-center justify-center rounded-full bg-lightSemiViolet text-xxs text-white">
              Friends
            </div>
          )}
      </div>
    </div>
  );
};

export default SearchResult;
