"use client";
import Image from "next/image";
import React from "react";
import RButton from "../ReusableComponents/RButton";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {
  const pathName = usePathname();
  const router = useRouter();

  const navLinks = [
    {
      href: "/",
      title: "Browse Properties",
    },
    {
      href: "/valuation",
      title: "Valuation",
    },
    {
      href: "/market-insights",
      title: "Market Insights",
    },
    {
      href: "/about-us",
      title: "About us",
    },
    {
      href: "/example",
      title: "Example",
    },
    {
      href: "/live",
      title: "Live",
    },
  ];

  if (!navLinks.map((item) => item.href as string).includes(pathName)) return;

  return (
    <div>
      <div className="px-[50px] py-[20px] flex items-center justify-between border-b-[1px] border-[#2735674d]">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Next.js Logo"
            width={129}
            height={46}
            priority
          />
        </Link>

        <div className="flex gap-2">
          <RButton
            onRButtonClick={() => router.push("/login")}
            title="List my property"
          />
          <RButton
            onRButtonClick={() => router.push("/login")}
            title="Login"
            outline
          />
        </div>
      </div>
      <div className="flex gap-[20px] px-[50px] py-[20px]">
        {navLinks.map(({ href, title }, key) => (
          <Link
            key={key}
            href={href}
            className={`transition duration-100 ${
              pathName === href
                ? "text-black underline underline-offset-8 decoration-1 decoration-[#0097cb]"
                : "text-[#848fac]"
            }`}
          >
            {title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
