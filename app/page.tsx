import Footer from "@/components/Footer";
import JobEntry from "@/components/JobEntry";
import Navbar from "@/components/Navbar";
import ProjectEntry from "@/components/ProjectEntry";
import Link from "next/link";
import { jobEntries } from "@/data/jobEntries";

import { getSortedPostsData } from "../lib/posts";

export default async function Home() {
  const allPostsData = getSortedPostsData();

  const projectEntries = [
    {
      title: "Vayda Website",
      description: "Marketing site with Contenful integration.",
      image: "/green-leaf.png",
      technologies: ["Next.js", "TailwindCSS", "Contentful CMS", "GraphQL"],
      accentColor: "bg-accent-green",
      url: "https://www.vayda.com/",
    },
    {
      title: "FluidLogic Website",
      description: "Marketing and Ecommerce site. Contenful integration.",
      image: "/water-drop-icon.webp",
      technologies: ["Next.js", "TailwindCSS", "Contentful CMS", "GraphQL"],
      accentColor: "bg-darkest-blue",
      url: "https://www.fluidlogic.com/",
    },
    {
      title: "COVID School Data Hub",
      description:
        "A hub for COVID-19 data related to schools and learning modes.",
      image: "/surgical-mask.png",
      technologies: ["Next.js", "TailwindCSS", "D3.js", "Contentful CMS"],
      accentColor: "bg-accent-orange",
      url: "https://www.covidschooldatahub.com/",
    },
    {
      title: "React Games List",
      description: "Think Letterboxd for video games.",
      image: "/react-games-list.png",
      technologies: ["React", "CSS", "Firebase", "RAWG API"],
      accentColor: "bg-tan",
      url: "https://react-games-list.web.app/",
    },
    {
      title: "FreeCodeCamp Nashville Website",
      description:
        "The FreeCodeCamp Nashville meetup group site. A hub for events and would-be members.",
      image: "/fcc_secondary_small.png",
      technologies: ["Gatsby", "Netlify", "Meetup API", "FaunaDB"],
      accentColor: "bg-accent-yellow",
      url: "https://www.nashvillefcc.com/",
    },
    {
      title: "Danganronpa 2 Fan Card Game",
      description:
        "A fun themed pick-up card game based on the Danganronpa 2 visual novel.",
      image: "/mini-mono.png",
      technologies: ["HTML", "CSS", "JavaScript"],
      accentColor: "bg-accent-pink",
      url: "https://dangan2-memory-game.web.app/",
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="max-w-[38rem] pt-8 md:pt-16 pb-4 px-4 xs:px-6 lg:px-0 flex flex-col items-center justify-center">
        <Navbar />

        {/* ------------------ Hero Section ------------------ */}
        <div className="w-full pt-16 md:pt-20 pb-12">
          <div className="pb-11 flex flex-col items-start w-full">
            <h1 className="cycleText md:text-5xl xs:w-3/4">
              Hi, I&apos;m Reid.
            </h1>
            <h1 className="text-accent-blue text-xl w-3/4 md:text-2xl md:w-full">
              A Software Engineer based in New York.
            </h1>
          </div>
          <p>
            I&apos;m Reid Fuhrman, a software engineer who specializes in
            front-end and mobile development.
            <br></br>
            <br></br>
            I&apos;m experienced in using React, Next.js, TypeScript, and
            TailwindCSS to build websites and web apps for businesses that are
            beautiful, user-friendly, and functional. More recently, I&apos;ve
            also been using React Native to build cross-platform mobile apps
            that focus on interacting with Bluetooth wearable devices.
            <br></br>
            <br></br>
            While not coding, you can find me cooking a new recipe in my wok,
            practicing guitar, or riding my fixed gear bike through the
            (terrifying(fun)) streets of NYC.
          </p>
        </div>

        {/* ------------------ Work Section ------------------ */}
        <div className="w-full py-16" id="work">
          <h2 className="text-accent-pink">Where I&apos;ve worked</h2>
          <div className="pt-12 py-16">
            {jobEntries.map((entry) => {
              return (
                <JobEntry
                  key={entry.company}
                  company={entry.company}
                  title={entry.title}
                  url={entry.url}
                  startDate={entry.startDate}
                  endDate={entry.endDate}
                  description={entry.description}
                />
              );
            })}
          </div>
          <Link
            href={"/Reid_Fuhrman_resume.pdf"}
            target="_blank"
            rel="noopener noreferrer"
            className="text-center w-full block sm:text-right font-heading-tall text-accent-orange hover:text-accent-red dark:text-accent-yellow hover:dark:text-accent-orange"
          >
            Looking for my resume? Click here.
          </Link>
        </div>

        {/* ------------------ Projects Section ------------------ */}
        <div className="w-full py-16" id="projects">
          <h2 className="text-accent-blue w-64">
            Some Projects i&apos;ve Worked On
          </h2>
          <div className="flex flex-col gap-y-12 py-12">
            {projectEntries.map((entry) => {
              return (
                <ProjectEntry
                  key={entry.title}
                  title={entry.title}
                  description={entry.description}
                  image={entry.image}
                  technologies={entry?.technologies}
                  accentColor={entry?.accentColor}
                  url={entry.url}
                />
              );
            })}
          </div>
        </div>

        {/* ------------------ Blog Posts Section ------------------ */}
        <div className="w-full py-16" id="projects">
          <h2 className="text-accent-teal w-64">Blog posts</h2>
          <div className="flex flex-col gap-y-12 py-12">
            {allPostsData.map(({ slug, date, title }) => (
              <Link href={`/blog/${slug}`} key={slug}>
                <p>{title}</p>
                <br />
                {date}
              </Link>
            ))}
          </div>
        </div>

        {/* ------------------ Footer ------------------ */}
        <div id="contact" className="w-full">
          <Footer />
        </div>
      </div>
    </main>
  );
}
