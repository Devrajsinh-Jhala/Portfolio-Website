import React from "react";
import { ModeToggle } from "./ToggleDarkMode";
import Link from "next/link";
import { Meie_Script } from "next/font/google";

export const meieScript = Meie_Script({
  weight: "400",
  subsets: ["latin"],
});

type Props = {};

const Navbar = (props: Props) => {
  const navigationLinks = [
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Blogs",
      link: "/blogs",
    },
    {
      name: "Projects",
      link: "/projects",
    },
  ];
  return (
    <nav className="my-5 flex items-center justify-between ">
      <div className={meieScript.className}>
        <Link href={"/"}>
          <p className="font-extrabold text-[35px]">D.J.</p>
        </Link>
      </div>
      <div className="flex items-center justify-center mx-5">
        <ul className="flex items-center justify-center mx-5">
          {navigationLinks.map((navigationLink, i) => (
            <Link key={i} href={navigationLink.link}>
              <li className="mx-5">{navigationLink.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <ModeToggle />
    </nav>
  );
};

export default Navbar;
