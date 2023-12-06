import Image from "next/image";
import { type StaticImageData } from "next/image";

interface IProps {
  buttonType: "button" | "submit" | "reset" | undefined;
  buttonStyle: string;
  onClick: () => void;
  imageStyle: string;
  image: StaticImageData;
  imagePriority: boolean;
}

const ImageButton = ({
  buttonType,
  buttonStyle,
  onClick,
  image,
  imageStyle,
  imagePriority,
}: IProps) => {
  return (
    <button type={buttonType} className={buttonStyle} onClick={onClick}>
      <Image
        src={image}
        alt=""
        className={imageStyle}
        priority={imagePriority}
      />
    </button>
  );
};

export default ImageButton;
