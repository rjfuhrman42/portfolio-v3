import React from "react";

type Props = {
  image: string;
  title: string;
  description: string;
};

function ProjectEntry({ image, title, description }: Props) {
  return (
    <div className="flex flex-row justify-between w-full bg-dark-blue p-6 gap-x-8 max-h-32">
      <div className="h-24 w-24 bg-accent-teal self-center"></div>
      <div className="flex flex-1 flex-col gap-y-2">
        <p className="text-tan font-body text-xl">{title}</p>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ProjectEntry;
