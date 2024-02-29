"use client";
import React, { useEffect, useState } from "react";
import { ModeToggle } from "./ToggleDarkMode";
import Link from "next/link";
import { Meie_Script } from "next/font/google";
import { FiMenu } from "react-icons/fi";

export const meieScript = Meie_Script({
  weight: "400",
  subsets: ["latin"],
});

type Props = {};

const Navbar = (props: Props) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

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

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  useEffect(() => {
    // Add an event listener to handle scroll and close the dropdown
    const handleScroll = () => {
      closeDropdown();
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="my-5 lg:px-0 px-2 flex items-center justify-between ">
      <div className={meieScript.className}>
        <Link href={"/"}>
          <p className="font-extrabold text-[26px] sm:text-[35px]">D.J.</p>
        </Link>
      </div>
      <div className="lg:hidden">
        <FiMenu className="text-2xl cursor-pointer" onClick={toggleDropdown} />
        {isDropdownOpen && (
          <div className="absolute z-10 top-16 right-0 bg-primary-foreground left-0 w-full border rounded shadow-md p-2">
            <ul className="flex flex-col items-center space-y-2">
              {navigationLinks.map((navigationLink, i) => (
                <Link key={i} href={navigationLink.link}>
                  <li
                    className="cursor-pointer"
                    onClick={() => setDropdownOpen(false)}
                  >
                    {navigationLink.name}
                  </li>
                </Link>
              ))}
              <ModeToggle />
            </ul>
          </div>
        )}
      </div>
      <div className="hidden lg:flex items-center justify-center mx-5">
        <ul className="flex items-center justify-center mx-5">
          {navigationLinks.map((navigationLink, i) => (
            <Link key={i} href={navigationLink.link}>
              <li className="mx-5">{navigationLink.name}</li>
            </Link>
          ))}
        </ul>
        <ModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
