import React from "react";
import myImage from "@/public/Devraj.jpeg";
import Image from "next/image";
import { Sarina } from "next/font/google";
import CertificateComponent from "@/components/CertificateComponent";
import { certificateData } from "@/public/certificateData";
import ResearchComponent from "@/components/ResearchComponent";
import { researchData } from "@/public/researchData";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata = {
  title: "About Me | Devrajsinh Jhala",
  description:
    "This is the about section of my portfloio where you can get to know me better.",
};

const sarina = Sarina({
  weight: "400",
  subsets: ["latin"],
});

type Props = {};
const About = (props: Props) => {
  return (
    <section className="my-10 max-w-4xl mx-auto">
      <section className="flex flex-col items-center justify-center space-y-5">
        <div className="relative w-28 h-28 border border-foreground rounded-full">
          <Image
            src={myImage.src}
            fill
            priority
            className="rounded-full p-1"
            alt="Devraj's Image"
          />
        </div>
        <div className={sarina.className}>
          <p className="text-2xl">
            &quot;Building is the actual way of learning&quot;
          </p>
        </div>

        {/* Statistics Section */}
        <section className="flex  items-center justify-between space-x-10">
          <div className=" border rounded-md border-foreground flex w-56 flex-col justify-center items-center p-2">
            <p className="text-lg font-extrabold">630+</p>
            <p className="text-sm">Total Github Contributions</p>
          </div>
          <div className=" border rounded-md border-foreground flex w-56 flex-col justify-center items-center p-2">
            <p className="text-lg font-extrabold">32</p>
            <p className="text-sm">Hashnode Followers</p>
          </div>
          <div className=" border rounded-md border-foreground flex w-56 flex-col justify-center items-center p-2">
            <p className="text-lg font-extrabold">1600+</p>
            <p className="text-sm">Total Hashnode Blog Views</p>
          </div>
        </section>
        <section>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href={
              "https://drive.google.com/file/d/115iOa5FOo7f3Nqox3RmrEaO00KN4aE9f/view?usp=sharing"
            }
          >
            <Button variant={"default"}>View CV</Button>
          </Link>
        </section>
      </section>

      {/* My paragraph */}
      <section className="my-10 flex flex-col text-start space-y-5">
        <p className="">
          Hello! I am Devraj Jhala, a front end full stack developer hailing
          from India. I am currently a final year student pursuing a
          Bachelor&apos;s degree in Computer Science and Engineering. I have
          interned in various positions such as front end developer and full
          stack developer in startups and mid-sized companies. I really enjoy
          working with Next.js, Tailwind, TypeScript to build UI components and
          interfaces.
        </p>

        <p>
          My interest in web development started in my 2nd year of college when
          I built my first project - a simple portfolio website using HTML, CSS
          and JS which I must admit, I learned by watching and copying the code
          from YouTube tutorials!😅.
        </p>

        <p>
          I soon realized that what I had learned so far was just a small
          fraction of the vast ocean of knowledge in the field. Motivated to
          expand my skill set, I delved into React, Redux, TypeScript, and API
          development. As a front-end developer, it was crucial for me to
          understand API management and work with databases like MySQL,
          PostgreSQL, and Firebase. Eventually, I discovered the power
          ofNext.js, and it revolutionized my approach to building and
          developing full-stack applications. The ease with which Next.js
          enables development is truly remarkable.
        </p>

        <p>
          Apart from all these, I really love to share my learning and hence I
          write blogs on Hashnode. Though not regularly but I try to 😅. If you
          are reading this, I really appreciate your time in reading and giving
          me your valuable time. If you have any questions, feel free to reach
          out to me on LinkedIn or Twitter. Also if you want to check out my
          other projects, feel free to visit my GitHub.
        </p>
      </section>

      {/* My Certificates */}
      <section className="my-10">
        <p className="text-2xl font-bold">My Certificates</p>
        <p className="mt-1 mb-5">
          I did many internships and participated in many contests, courses,
          tests and got certified for the same. You can find some of the
          certificates below.
        </p>
        <section className="grid grid-cols-1 w-full sm:grid-cols-2 self-center gap-2">
          {certificateData.map((certificate, i) => (
            <CertificateComponent
              key={i}
              image={certificate.image}
              name={certificate.name}
              issueDate={certificate.issueDate}
              issueName={certificate.issueName}
              link={certificate.link}
            />
          ))}
        </section>
      </section>

      {/* Research Paper */}
      <section>
        <p className="text-2xl font-bold">Research Work</p>
        <p className="mt-1 mb-5">
          Besides pursuing the development journey, I have also got chance to
          publish several papers on the role of machine learning and deep
          learning in many arenas under the guidance of my professors. Some of
          my published papers are below.
        </p>
        <section className="grid grid-cols-1 w-full sm:grid-cols-2 self-center gap-2">
          {researchData.map((research, i) => (
            <ResearchComponent
              key={i}
              conferenceName={research.conferenceName}
              paperLink={research.paperLink}
              publishedDate={research.publishedDate}
              status={research.status}
            />
          ))}
        </section>
      </section>
    </section>
  );
};
export default About;
