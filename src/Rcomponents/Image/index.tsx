import Image from "next/image";
import React, { HTMLAttributes } from "react";

interface ImageComponentProps extends HTMLAttributes<any> {
  src: string;
  alt?: string;
}

const ImageComponent: React.FC<ImageComponentProps> = ({
  src,
  alt = "img",
  className,
}) => {
  return (
    <Image className={className} alt={alt} src={src} width={350} height={350} />
  );
};

export default ImageComponent;
