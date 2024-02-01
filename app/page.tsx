import Footer from "@/components/Footer";
import JobEntry from "@/components/JobEntry";
import Navbar from "@/components/Navbar";
import ProjectEntry from "@/components/ProjectEntry";
import Link from "next/link";
import { jobEntries } from "@/data/jobEntries";

export default function Home() {
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
      <div className="max-w-2xl pt-8 md:pt-16 pb-4 px-4 xs:px-6 lg:px-0 flex flex-col items-center justify-center">
        <Navbar />

        {/* ------------------ Hero Section ------------------ */}
        <div className="w-full pt-16 pb-12">
          <div className="pb-11 xs:w-3/4">
            <h1 className="text-accent-green md:text-5xl">
              Hi, I&apos;m Reid.
            </h1>
            <h1 className="md:text-5xl">
              A Software Engineer based in New York.
            </h1>
          </div>
          <p>
            I’m Reid Fuhrman, a software engineer based in Brooklyn, New York.
            I&apos;m passionate about helping people building beautiful, useful
            things on the web. Most recently i&apos;ve had the privelege of
            working at Township, a design and development agency where I was
            exposed to a wide variety of clients from varying industries and
            helped bring their products to life.
            <br></br>
            <br></br>My main focus today is continuing to grow my frontend
            expertise while actively seeking out opportunities to learn and grow
            my backend skillset.
            <br></br>
            <br></br>While not coding, you can find me practicing guitar,
            cooking a new recipe in my wok, or riding my fixed gear bike through
            the (terrifying(fun)) streets of NYC.
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
            className="text-center w-full block sm:text-right font-heading-tall text-accent-yellow hover:text-accent-orange"
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

        {/* ------------------ Footer ------------------ */}
        <div id="contact" className="w-full">
          <Footer />
        </div>
      </div>
    </main>
  );
}
