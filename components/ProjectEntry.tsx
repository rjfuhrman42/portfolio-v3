import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  image?: string;
  title: string;
  description: string;
  accentColor?: string;
  url: string;
};

function ProjectEntry({
  image,
  title,
  description,
  accentColor = "bg-darkest-blue",
  url,
}: Props) {
  return (
    <Link href={url} target="_blank" rel="noopener noreferrer">
      <div className="flex flex-col xs:flex-row justify-between w-full bg-dark-blue p-6 gap-x-8 md:max-h-36">
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
          <p className="pr-4 md:text-base">{description}</p>
        </div>
      </div>
    </Link>
  );
}

export default ProjectEntry;
