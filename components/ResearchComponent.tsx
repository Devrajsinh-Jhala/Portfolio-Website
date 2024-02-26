import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

type Props = {
  conferenceName: string;
  publishedDate: string;
  paperLink: string;
  status: string;
};
const ResearchComponent = ({
  conferenceName,
  paperLink,
  status,
  publishedDate,
}: Props) => {
  return (
    <section className="flex col-span-1 bg-muted-foreground/20 flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-4 p-3 rounded-lg shadow">
      <div className="flex items-center gap-3">
        <div className="flex flex-col">
          <h3 className="font-semibold text-sm">{conferenceName}</h3>
          <h3 className="text-xs">{status}</h3>
        </div>
      </div>
      <div className="flex items-center gap-5 text-sm justify-between">
        <p className="text-sm">{publishedDate}</p>
        <Link href={paperLink} rel="noopener noreferrer" target="_blank">
          <Button variant={"default"}>View Paper</Button>
        </Link>
      </div>
    </section>
  );
};
export default ResearchComponent;
