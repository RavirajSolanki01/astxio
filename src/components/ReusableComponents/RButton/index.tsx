import React from "react";

interface RButtonProps {
  title: string;
  onRButtonClick: () => void;
  outline?: boolean;
  className?: string;
}

const RButton: React.FC<RButtonProps> = ({
  onRButtonClick,
  title,
  outline = false,
  className = "",
}) => {
  return (
    <button
      onClick={onRButtonClick}
      className={`${className} h-[44px] rounded-[8px] px-[16px] py-[10px] ${
        outline
          ? "bg-[#fafafa] text-[rgb(20,29,64)] outline outline-1 outline-[rgb(20,29,64)]"
          : "bg-[rgb(20,29,64)] text-[#fafafa]"
      }`}
    >
      {title}
    </button>
  );
};

export default RButton;
