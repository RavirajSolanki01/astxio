import { Grid } from "@mui/material";
import React from "react";
import RAuthImage from "@/components/ReusableComponents/RAuthImage/page";
import ForgotPasswordForm from "./ForgotPasswordForm";

const ForgotPassword = () => {
  return (
    <div className="h-screen">
      <Grid container className="h-full">
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          className="bg-[url('/login.png')] h-screen bg-center  max-[900px]:hidden"
        >
          <RAuthImage />
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <div className="h-[100%] w-[100%] flex justify-center flex-col px-8 sm:px-12">
            <div className="flex flex-col gap-2 mb-5">
              <span className="text-[#273567] text-left text-3xl font-bold">
                Forgot Password
              </span>
              <span className="text-[#848fac] text-[14px]">
              No worries, we’ll send a recovery link to your email.
              </span>
            </div>
            <ForgotPasswordForm />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default ForgotPassword;
