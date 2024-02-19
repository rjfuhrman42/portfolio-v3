import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  image?: string;
  title: string;
  description: string;
  technologies?: string[];
  accentColor?: string;
  url: string;
};

function ProjectEntry({
  image,
  title,
  description,
  technologies,
  accentColor = "bg-darkest-blue",
  url,
}: Props) {
  return (
    <Link href={url} target="_blank" rel="noopener noreferrer">
      <div className="flex flex-col xs:flex-row justify-between w-full bg-dark-blue p-6 gap-x-8 md:min-h-36">
        <div
          className={`relative ${accentColor} h-20 xs:w-20 w-full mb-4 xs:mb-0 self-center`}
        >
          {image && (
            <Image
              className="p-2"
              src={image}
              alt="Project Image"
              fill
              objectFit="contain"
            />
          )}
        </div>
        <div className="flex flex-1 flex-col gap-y-2">
          <p className="text-tan font-body text-lg md:text-xl">{title}</p>
          {technologies && (
            <div className="flex flex-row flex-wrap gap-1 py-1 md:py-0">
              {technologies?.map((name, index) => {
                return (
                  <div key={index} className="px-1 py-0.5 bg-darkest-blue">
                    <p className="px-1 text-sm md:text-lg">{name}</p>
                  </div>
                );
              })}
            </div>
          )}
          <p className="pr-4 md:text-xl">{description}</p>
        </div>
      </div>
    </Link>
  );
}

export default ProjectEntry;
