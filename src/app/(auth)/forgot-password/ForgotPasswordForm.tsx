"use client";
import RButton from "@/components/ReusableComponents/RButton";
import RInput from "@/components/ReusableComponents/RInput/page";
import React, { useState } from "react";

const ForgotPasswordForm = () => {
  const [{ email }, setLoginFormData] = useState({
    email: "",
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
      <div className="w-full">
        <RButton
          onRButtonClick={() => {}}
          title="SEND A RECOVERY LINK"
          className="w-full bg-[#848fac]"
        />
      </div>
    </div>
  );
};

export default ForgotPasswordForm;
