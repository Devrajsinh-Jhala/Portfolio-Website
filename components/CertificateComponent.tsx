import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

type Props = {
  image: string;
  name: string;
  issueName: string;
  issueDate: string;
  link: string;
};
const CertificateComponent = ({
  image,
  name,
  issueDate,
  issueName,
  link,
}: Props) => {
  return (
    <section className="flex col-span-1 bg-muted-foreground/20 flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-4 p-3 rounded-lg shadow">
      <div className="flex items-center gap-3">
        <div className="relative flex bg-white rounded-md items-center object-contain w-10 h-10 justify-center">
          <Image
            src={image}
            alt={name}
            className="bg-white object-contain rounded-md"
            fill
            loading="lazy"
          />
        </div>
        <div className="flex flex-col">
          <h3 className="font-semibold text-xs">{name}</h3>
          <h3 className="text-[10px]">{issueName}</h3>
        </div>
      </div>
      <div className="flex items-center gap-5 text-sm justify-between">
        <p className="text-sm">{issueDate}</p>
        <Link href={link} rel="noopener noreferrer" target="_blank">
          <Button variant={"default"}>View</Button>
        </Link>
      </div>
    </section>
  );
};
export default CertificateComponent;
