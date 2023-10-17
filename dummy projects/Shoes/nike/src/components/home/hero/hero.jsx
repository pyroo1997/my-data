import React from "react";
import Banner from "./Banner/Banner";
import { Skeleton } from "@mui/material";

export default function Hero() {
  return (
    <div>
      <Banner />
      <div className="w-[60%] mx-auto h-[40%]">
        <h1 className="pt-14 pb-4 text-2xl text-center">
          Cushioning for Your Miles
        </h1>
        <p className="w-[50%] text-center mx-auto pb-16 text-gray-600">
          A lightweight Nike Zoomx midsole is combined with increased stack
          heights to help provide coushioning during extended stretches of
          running.
        </p>
      </div>
    </div>
  );
}
