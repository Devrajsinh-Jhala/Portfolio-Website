"use client";
import { useTheme } from "next-themes";
import React from "react";
import imd from "@/public/assets/imd.png";
import imddark from "@/public/assets/imddark.png";

type Props = {};

const IMDImageToggler = (props: Props) => {
  const { theme } = useTheme();
  return theme === "light" ? (
    <img
      title="India Meterological Department"
      alt="India Meterological Department"
      src={imd.src}
      className="w-[70px] h-[70px]  object-contain"
    />
  ) : (
    <img
      title="India Meterological Department"
      alt="India Meterological Department"
      src={imddark.src}
      className="w-[70px] h-[70px]  object-contain"
    />
  );
};

export default IMDImageToggler;
