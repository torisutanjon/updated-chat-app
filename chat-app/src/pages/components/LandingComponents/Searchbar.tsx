import { useRouter } from "next/router";

const SearchBar = () => {
  const router = useRouter();
  return (
    <input
      type="text"
      className="relative mt-2 h-9 w-4/5 cursor-pointer rounded-full bg-lightSemiViolet pl-6 text-xs text-white outline-none transition-all sm:w-3/4 lg:w-1/2"
      value="Search ..."
      onClick={() => void router.push("/search-chat")}
      readOnly
    />
  );
};

export default SearchBar;
