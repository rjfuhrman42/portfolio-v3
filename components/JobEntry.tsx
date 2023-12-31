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
      <div className="w-1/3">
        <p>
          {startDate} - {endDate}
        </p>
      </div>
      <div className="flex flex-col flex-1 gap-y-2">
        <p className="text-tan font-body text-xl">{company}</p>
        <p className="text-dark-gray font-heading">{title}</p>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default JobEntry;
