import React from "react";
import { skillsData } from "@/public/skillData";
type Props = {};

const TopSkillsContainer = (props: Props) => {
  return (
    <section className="px-10 lg:px-0">
      <p className="text-3xl font-bold">My Top Skills</p>
      <section className="grid grid-cols-2 lg:grid-cols-3 gap-4 my-7">
        {skillsData.map((skillData, i) => {
          const Icon = skillData.Icon;
          return (
            <div
              className="p-4 flex border border-muted-foreground dark:hover:bg-gray-800 hover:bg-slate-100 items-center space-x-5 justify-start rounded-sm"
              key={i}
            >
              {/* Image */}
              <Icon className="w-8 h-8" />
              {/* Name */}
              <p className="text-lg font-semibold">{skillData.name}</p>
            </div>
          );
        })}
      </section>
    </section>
  );
};

export default TopSkillsContainer;
