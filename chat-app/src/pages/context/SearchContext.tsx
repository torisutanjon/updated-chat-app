import { createContext, useState } from "react";
import type { ISearchContext } from "@/utils/interfaces";

export const SearchContext = createContext<ISearchContext>({
  search: "",
  setSearch: () => String,
});

const SearchContextProvider = ({ children }: { children: JSX.Element }) => {
  const [search, setSearch] = useState("");
  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContextProvider;
