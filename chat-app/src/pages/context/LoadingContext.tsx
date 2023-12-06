import { createContext, useState } from "react";
import type { ILoadingContext } from "@/utils/interfaces";

export const LoadingContext = createContext<ILoadingContext>({
  isLoadingState: false,
  setIsLoadingState: () => Boolean,
});

const LoadingContextProvider = ({ children }: { children: JSX.Element }) => {
  const [isLoadingState, setIsLoadingState] = useState(false);
  return (
    <LoadingContext.Provider value={{ isLoadingState, setIsLoadingState }}>
      {children}
    </LoadingContext.Provider>
  );
};

export default LoadingContextProvider;
