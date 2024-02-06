import { Grid } from "@mui/material";
import Image from "next/image";
import React from "react";
import LoginForm from "./LoginForm";
import RAuthImage from "@/components/ReusableComponents/RAuthImage/page";

const Login = () => {
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
                Welcome Back to As-Tx
              </span>
              <span className="text-[#848fac] text-[14px]">
                Sign in your account
              </span>
            </div>
            <LoginForm />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Login;
