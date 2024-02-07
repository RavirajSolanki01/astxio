"use client";
import { Grid } from "@mui/material";
import Image from "next/image";
import React from "react";
import {
  Mail as EmailIcon,
  Call as CallIcon,
  LocationOn as LocationOnIcon,
} from "@mui/icons-material";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathName = usePathname();

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
    <div className="  mt-10 bg-[#eaeaea] flex flex-col">
      <div className="py-[60px] px-[50px]">
        <Grid container>
          <Grid item sm={4}>
            <Image
              alt="logo"
              src={"/logo.png"}
              height={500}
              width={500}
              className="w-[129px]"
            />
            <p className="text-[#273567] mt-4">
              {
                "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown."
              }
            </p>
          </Grid>
          <Grid item sm={4}>
            <div className="flex justify-center">
              <div className="">
                <span className="font-bold underline underline-offset-8 decoration-2 decoration-[#0097cb]">
                  Resources
                </span>
                <ul>
                  <li className="my-2 text-[#273567]">Terms & Conditions</li>
                  <li className="my-2 text-[#273567]">Privacy policy</li>
                  <li className="my-2 text-[#273567]">FAQs</li>
                </ul>
              </div>
            </div>
          </Grid>
          <Grid item sm={4}>
            <div className="flex justify-center">
              <div className="">
                <span className="font-bold underline underline-offset-8 decoration-2 decoration-[#0097cb]">
                  Contact us
                </span>
                <ul>
                  <li className="my-2 flex items-center gap-2 text-[#273567]">
                    {" "}
                    <EmailIcon /> abcd@gmail.com
                  </li>
                  <li className="my-2 flex items-center gap-2 text-[#273567]">
                    {" "}
                    <CallIcon /> 987654321
                  </li>
                  <li className="my-2 flex items-center gap-2 text-[#273567]">
                    <LocationOnIcon /> abcdef345.xyz,london
                  </li>
                </ul>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
      <div className="bg-black text-white h-[62px] flex items-center justify-center">
        {" "}
        &copy; 2022-2023 AS-TX Ltd
      </div>
    </div>
  );
};

export default Footer;
