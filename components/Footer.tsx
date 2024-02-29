import React from "react";
import Link from "next/link";
import { Meie_Script } from "next/font/google";
import { socials } from "@/public/socialNetworks";

export const meieScript = Meie_Script({
  weight: "400",
  subsets: ["latin"],
});

type Props = {};
const Footer = (props: Props) => {
  return (
    <footer className=" flex px-10 lg:px-0 lg:flex-row flex-col space-y-3 lg:space-y-0 mt-14 mb-5 items-center justify-between">
      <div className={meieScript.className}>
        <Link href={"/"}>
          <p className="font-extrabold text-[30px]">Devrajsinh</p>
        </Link>
      </div>
      <div>
        <ul className="flex items-center justify-center space-x-10">
          {socials.map((social, i) => {
            const Icon = social.symbol;
            return (
              <Link
                rel="noopener noreferrer"
                target="_blank"
                href={social.link}
                key={i}
              >
                <div className="flex items-center justify-center space-x-2">
                  {/* Image */}
                  <Icon className="w-4 h-4" />
                  {/* Name */}
                  <p className=" text-sm font-semibold">{social.name}</p>
                </div>
              </Link>
            );
          })}
        </ul>
      </div>
    </footer>
  );
};
export default Footer;
