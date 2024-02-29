import { CertificateType } from "@/typings";
import googleCloud from "@/public/assets/googleCloud.png"
import nptel from "@/public/assets/nptel.jpg"
import hirable from "@/public/assets/hirable.png"
import udemy from "@/public/assets/udemy.png"
import devcode from "@/public/assets/devcode.png"
import imd from "@/public/assets/imd.png"

export const certificateData: CertificateType[] = [
    {
        image: googleCloud.src,
        name: "Google Cloud Certificates",
        issueDate: "Oct 2021",
        issueName: "Google for Developer",
        link: "https://www.cloudskillsboost.google/public_profiles/f3f10901-ad01-4a5a-b147-16c5d42e1cf6"
    },
    {
        image: hirable.src,
        name: "Hirable Internship Certificate",
        issueDate: "August 2022",
        issueName: "Hirable",
        link: "https://drive.google.com/file/d/1MiBEDEsAxqBFJdbC48t18rIOZZIM5Y5z/view"
    },
    {
        image: nptel.src,
        name: "Software Project Management",
        issueDate: "Oct 2022",
        issueName: "NPTEL",
        link: "https://drive.google.com/file/d/1wmVYnozhX9k4tlqI-gzadPdicx3vte0w/view?usp=sharing"
    },
    {
        image: udemy.src,
        name: "tRPC, NextJS and Prisma",
        issueDate: "May 2023",
        issueName: "Udemy",
        link: "https://drive.google.com/file/d/1Cts23s4GFdUdiUvhHGTFp8MQMjD0qZv-/view?usp=sharing"
    },
    {
        image: devcode.src,
        name: "Devocode Internship Certificate",
        issueDate: "Apr 2023",
        issueName: "Devode",
        link: "https://drive.google.com/file/d/1TkyY4_673sToTGk5uLHHx8JM2YbXqxvX/view"
    },
    {
        image: imd.src,
        name: "Research Internship Certificate",
        issueDate: "June 2023",
        issueName: "India Meterological Department",
        link: "https://drive.google.com/file/d/1_efTG_yeATNUg09NmKg9fpy7zBuoI66m/view?usp=sharing"
    },
]