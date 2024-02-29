import React from "react";
import hero from "@/public/Devraj.jpeg";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Sarina } from "next/font/google";
import acm from "@/public/assets/acm.png";
import hirable from "@/public/assets/hirable.png";
import devocode from "@/public/assets/devcode.png";
import tedx from "@/public/assets/tedx.png";
import IMDImageToggler from "@/components/IMDImageToggler";

import Link from "next/link";

const sarina = Sarina({
  weight: "400",
  subsets: ["latin"],
});

type Props = {};

const HeroSection = (props: Props) => {
  return (
    <section className=" my-16 px-5 lg:px-0 lg:flex-row flex flex-col-reverse items-center justify-between">
      <section className="px-5 lg:px-0">
        <div className="flex flex-col lg:items-start justify-start">
          <p className="text-sm text-center lg:text-start">Hello I am</p>
          <div className=" text-xl sm:text-5xl text-center font-bold ">
            <p className={sarina.className}>Devrajsinh Jhala</p>
          </div>
          <p className="max-w-lg mt-2 text-md text-center lg:text-start ">
            Front End Full Stack Developer specializing in React.js, Next.js and
            TypeScript. I have over <b>2 years </b>of experience in building and
            developing web applications for various start-ups and organizations.
          </p>
          <div className="flex items-center mt-7 justify-center space-x-4 sm:space-x-8">
            <Link
              target="_blank"
              href={
                "https://drive.google.com/file/d/1_gVcqBLMVXw9Oe--4QUT-S-kZ-lFoJ7l/view?usp=sharing"
              }
            >
              <Button>View Resume</Button>
            </Link>
            <Link target="_blank" href={"mailto:jhaladevrajsinh11@gmail.com"}>
              <Button variant={"secondary"}>Contact Me</Button>
            </Link>
          </div>
          <section className="my-5 text-center lg:text-start">
            <p>Organizations I have worked with: </p>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <img
                title="Hirable"
                alt="Hirable"
                src={hirable.src}
                className="w-[70px] h-[70px] object-contain"
              />
              <img
                title="TEDxPDEU Student Chapter"
                alt="Tedx"
                src={tedx.src}
                className="w-[70px] h-[70px]  object-contain"
              />
              <img
                title="ACM PDEU Student Chapter"
                alt="ACM"
                src={acm.src}
                className="w-[70px] h-[70px]  object-contain"
              />
              <img
                title="Devcode"
                alt="Devcode"
                src={devocode.src}
                className="w-[70px] h-[70px]  object-contain"
              />

              <IMDImageToggler />
            </div>
          </section>
        </div>
      </section>
      {/* Image */}
      <section>
        <div className="relative h-[180px] w-[180px] sm:h-[350px] mb-10 lg:mb-0 sm:w-[350px] border dark:border-white border-black rounded-full">
          <Image
            className="rounded-full p-2"
            src={hero.src}
            fill
            priority
            alt="Devraj's Image"
          />
        </div>
      </section>
    </section>
  );
};

export default HeroSection;
