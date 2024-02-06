import Image from "next/image";
import React from "react";

const RAuthImage = () => {
  return (
    <div className="relative h-[100%]">
      <Image
        src={"/logo.png"}
        alt="logo"
        height={200}
        width={200}
        className="absolute right-8 top-11 w-[172px]"
      />
      <p className="absolute  bottom-28 text-4xl text-center text-white">
        Simplicity and Transparency at your fingertips.
      </p>
      <Image
        src={"/dots.png"}
        alt="***"
        height={100}
        width={100}
        className="absolute left-[50%] translate-x-[-50%] bottom-20"
      />
    </div>
  );
};

export default RAuthImage;
