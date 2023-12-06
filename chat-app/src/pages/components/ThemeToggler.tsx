import Image from "next/image";
import { darkMode, lightMode } from "@/pages/assets";
import { useThemeContext } from "@/pages/hooks";

const ThemeToggler = () => {
  const { theme, changeThemeHandler } = useThemeContext();
  return (
    <button
      className="relative flex h-6 w-6 items-center justify-center"
      onClick={() => changeThemeHandler()}
    >
      <Image
        src={theme === "dark" ? lightMode : darkMode}
        alt=""
        className="relative h-4/5 w-4/5"
      />
    </button>
  );
};

export default ThemeToggler;
