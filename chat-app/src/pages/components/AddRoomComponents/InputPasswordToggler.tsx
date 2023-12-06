import type { IInputPasswordTogglerProps } from "@/utils/interfaces";

const InputPasswordToggler = ({
  setShowPassword,
}: IInputPasswordTogglerProps) => {
  return (
    <>
      <input
        type="checkbox"
        className="dark:accent-semiViolet relative ml-6 h-4 w-4 cursor-pointer border-none accent-lightSemiViolet outline-none"
        onClick={() => setShowPassword((prevState) => !prevState)}
      />
      <p className="ml-1 text-xs text-lightSemiViolet dark:text-semiWhite/75">
        Show Password
      </p>
    </>
  );
};

export default InputPasswordToggler;
