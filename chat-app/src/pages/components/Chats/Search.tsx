import { useSearchContext } from "@/pages/hooks";
const Search = () => {
  const { search, setSearch } = useSearchContext();
  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearch(value);
  };
  return (
    <input
      type="text"
      className="relative ml-4 h-8 w-3/4 border-b-[2px] border-semiBlack/25 pl-3 text-sm text-semiBlack/75 outline-none dark:border-semiLightWhite/60 dark:bg-semiBlack dark:text-semiLightWhite/75 "
      placeholder="Search ..."
      value={search}
      onChange={onChangeHandler}
    />
  );
};

export default Search;
