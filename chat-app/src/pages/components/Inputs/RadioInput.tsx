import type { IRadioInputProps } from "@/utils/interfaces";

const RadioInput = ({
  className,
  value,
  checked,
  onChange,
}: IRadioInputProps) => {
  return (
    <input
      type="radio"
      className={className}
      value={value}
      checked={checked}
      onChange={onChange}
    />
  );
};

export default RadioInput;
