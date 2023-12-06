import React, { createContext, useState, useEffect } from "react";
import type { IThemeContext } from "@/utils/interfaces";

export const ThemeContext = createContext<IThemeContext>({
  theme: "",
  changeThemeHandler: () => ({}),
});

const ThemeContextProvider = ({ children }: { children: JSX.Element }) => {
  const [theme, setTheme] = useState("");

  const changeThemeHandler = () => {
    const newTheme = theme === "dark" ? "" : "dark";
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  useEffect(() => {
    const lsTheme = localStorage.getItem("theme");
    setTheme(lsTheme ? lsTheme : "");
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, changeThemeHandler }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
