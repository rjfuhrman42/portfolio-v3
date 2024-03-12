import dayjs from "dayjs";
import { getSortedPostsData } from "@/lib/posts";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export default async function Page() {
  const allPostsData = getSortedPostsData();

  return (
    <>
      <div className="flex min-h-screen flex-col items-center overflow-x-hidden">
        <div className="container max-w-3xl px-6 xs:px-12 pt-6 flex flex-col items-center justify-center">
          {/* ------------------ Blog Posts Section ------------------ */}
          <Navbar />
          <div className="w-full py-16" id="projects">
            <h1 className="text-accent-pink dark:text-accent-teal !text-5xl !font-body font-bold normal-case w-64">
              Latest posts
            </h1>
            <div className="flex flex-col gap-y-12 py-12">
              {allPostsData.map(({ slug, date, title }) => (
                <Link href={`/blog/${slug}`} key={slug}>
                  <p className="">{title}</p>
                  <p className="text-base pt-2 sm:text-lg">
                    {dayjs(date).format("MMMM D, YYYY")}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
