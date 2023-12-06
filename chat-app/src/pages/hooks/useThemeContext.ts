import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContextProvider";

const useThemeContext = () => {
  const { theme, changeThemeHandler } = useContext(ThemeContext);
  return { theme, changeThemeHandler };
};

export default useThemeContext;
