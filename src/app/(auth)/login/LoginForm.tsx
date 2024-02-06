"use client";
import RButton from "@/components/ReusableComponents/RButton";
import RInput from "@/components/ReusableComponents/RInput/page";
import { Checkbox, FormControlLabel } from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";

const LoginForm = () => {
  const [{ email, password, remember }, setLoginFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  return (
    <div className="w-full flex flex-col gap-5">
      <RInput
        label="Email"
        onChange={(value) =>
          setLoginFormData((pre) => ({ ...pre, email: value }))
        }
        value={email}
      />
      <RInput
        label="Password"
        onChange={(value) =>
          setLoginFormData((pre) => ({ ...pre, password: value }))
        }
        value={password}
        type="password"
      />

      <div className="flex justify-between items-start mt-[-10px] text-sm">
        <FormControlLabel
          control={<Checkbox />}
          label={<span className="text-sm">Remember me</span>}
          className="mt-[-5px]"
        />
        <Link href={"/forgot-password"} className="text-[#848fac]">
          Forgot Password ?
        </Link>
      </div>
      <div className="w-full">
        <RButton
          onRButtonClick={() => {}}
          title="Login"
          className="w-full bg-[#848fac]"
        />
      </div>
      <div className="text-sm">
        <span>{"Don't have an account? "}</span>
        <Link href={"/register"} className="text-[#0097cb]">
          Sign up
        </Link>
      </div>
    </div>
  );
};

export default LoginForm;
