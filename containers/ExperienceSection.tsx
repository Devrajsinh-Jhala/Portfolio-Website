import React from "react";
type Props = {};
const ExperienceSection = (props: Props) => {
  return (
    <section className="my-10 px-5 lg:px-0">
      <p className="text-3xl font-bold mb-5">Experience</p>
      <ol className="relative border-s border-muted-foreground/50">
        {/* IMD Research Intern */}
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            June 2023 to August 2023
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Research Intern at IMD
          </h3>
          <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            Worked on contributing to the Rainfall Estimation using the
            customized dynamic Z-R relationship based on echo for Bhopal.Worked
            on visualizing and segregating clouds from the radar image and
            estimating rainfall from it using Marshal-Palmer Equation.Worked on
            a function which will be used to find wind-velocity at any given
            point in radar range.
          </p>
          <a
            href="https://drive.google.com/file/d/1_efTG_yeATNUg09NmKg9fpy7zBuoI66m/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
          >
            Certificate{" "}
            <svg
              className="w-3 h-3 ms-2 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </li>

        {/* Core Member ACM */}
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            June 2023
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            ACM Core Team Member - Web Development
          </h3>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            Responsible for building the ACM PDEU Student Chapter website having
            fully functional blog and Event information
          </p>
        </li>

        {/* Devcode */}
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            April 2023 to May 2023
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Full Stack Developer Intern at Devcode
          </h3>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            Responsible for integrating the REST APIs in the front-end built on
            React and managing state of the application via Redux along with
            upgrading the User Interface using TailwindCS
          </p>
          <a
            href="https://drive.google.com/file/d/1TkyY4_673sToTGk5uLHHx8JM2YbXqxvX/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700 mt-4"
          >
            Certificate{" "}
            <svg
              className="w-3 h-3 ms-2 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </li>
        {/* Website Manager TEDxPDEU */}
        <li className=" mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            March 2023
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Website Development Manager at TEDxPDEU
          </h3>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            Led the team that built the website for TEDxPDEU Event 2023.
            Consisted of 3 members the website built was crucial for the success
            of the event as more than 90% leads came from the website only.
          </p>
        </li>
        {/* Hirable */}
        <li className=" mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            June 2022 to August 2022
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Front End Developer Intern at Hirable
          </h3>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            Built the front end of 5 landing pages for the company and 2 admin
            dashboards in Next.js, TailwindCSS.Achieved 75% decrease in loading
            time of the site via image optimizations and implemented incremental
            server regeneration.
          </p>
          <a
            href="https://drive.google.com/file/d/1MiBEDEsAxqBFJdbC48t18rIOZZIM5Y5z/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700 mt-4"
          >
            Certificate{" "}
            <svg
              className="w-3 h-3 ms-2 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </li>
      </ol>
    </section>
  );
};
export default ExperienceSection;
