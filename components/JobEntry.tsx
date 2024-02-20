import React from "react";

type Props = {
  company: string;
  title: string;
  startDate: string;
  endDate: string;
  description: string;
};

function JobEntry({ company, title, startDate, endDate, description }: Props) {
  return (
    <div className="flex flex-row py-4 w-full">
      <div className="flex flex-col flex-1 gap-y-2">
        <div className="flex flex-row">
          <div className="flex flex-col">
            <p className="text-dark-gray dark:text-tan text-2xl font-headers">
              {title}
            </p>
            <p className="text-accent-blue dark:text-accent-green text-sm font-heading-tall pt-2">
              {company}
            </p>
          </div>
          <p className="ml-auto w-1/4 sm:w-auto">
            {startDate} - {endDate}
          </p>
        </div>

        <p className="sm:w-3/4">{description}</p>
      </div>
    </div>
  );
}

export default JobEntry;
