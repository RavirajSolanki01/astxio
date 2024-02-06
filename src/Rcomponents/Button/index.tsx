"use client";
import { useRouter } from "next/navigation";
import { ButtonHTMLAttributes } from "react";

interface IAction {
  type: string;
  url: string;
}

interface BtnProps extends ButtonHTMLAttributes<any> {
  title: string;
  action: IAction;
  outline: boolean;
}

export default function Button({
  className,
  children,
  title,
  action,
  type,
  outline,
  ...rest
}: BtnProps) {
  const router = useRouter();

  const onClick = async () => {
    if (action.type === "call") {
      router.push(action.url);
    }
  };

  return (
    <button
      {...rest}
      type={type}
      className={`${className} h-[44px] rounded-[8px] px-[16px] py-[10px] w-[100%] ${
        outline
          ? "bg-[#fafafa] text-[rgb(20,29,64)] outline outline-1 outline-[rgb(20,29,64)]"
          : "bg-[rgb(20,29,64)] text-[#fafafa]"
      }`}
      onClick={onClick}
    >
      {title}
      {children}
    </button>
  );
}
