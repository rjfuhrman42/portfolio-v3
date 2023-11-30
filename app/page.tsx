import JobEntry from "@/components/JobEntry";
import Navbar from "@/components/Navbar";
import ProjectEntry from "@/components/ProjectEntry";
import Link from "next/link";

export default function Home() {
  const jobEntries = [
    {
      company: "Township",
      title: "Software Engineer",
      startDate: "Apr. 2022",
      endDate: "Nov. 2023",
      description:
        "Hired on as a Junior Engineer and grew into a mid-level engineer role. Worked largely on React Native Bluetooth apps for iOS and Android, with some interlude into building client marketing sites with Next.js.",
    },
    {
      company: "USAF, 402nd Software Engineering Squadron",
      title: "Computer Scientist",
      startDate: "May 2020",
      endDate: "Mar. 2022",
      description:
        "Part of the independent verification and validation team. Worked with a team of 5 to test internal applications and websites. Recommended changes and fixes.",
    },
  ];

  const projectEntries = [
    {
      title: "React Games List",
      description:
        "Bringing web engineering fire-power to where it's needed in the company, from growth to product.",
    },
    {
      title: "FreeCodeCamp Nashville Website",
      description:
        "Bringing web engineering fire-power to where it's needed in the company, from growth to product.",
    },
    {
      title: "Danganronpa 2 Fan Card Game",
      description:
        "Bringing web engineering fire-power to where it's needed in the company, from growth to product.",
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-darkest-blue">
      <div className="max-w-2xl py-8 md:py-16 px-6 lg:px-0 flex flex-col items-center justify-center">
        <Navbar />
        {/* ------------------ Hero Section ------------------ */}
        <div className="w-full pt-16 pb-12">
          <div className="pb-11">
            <h1 className="text-accent-green">Hi, I&apos;m Reid.</h1>
            <h1>A Software engineer based in new york.</h1>
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
          <h2 className="text-accent-red">Where I&apos;ve worked</h2>
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
            href={"/Reid_Fuhrman_Resume_2023.pdf"}
            target="_blank"
            rel="noopener noreferrer"
            className="text-center w-full block sm:text-right font-heading-tall text-accent-yellow hover:text-accent-orange"
          >
            Looking for my resume? Click here.
          </Link>
        </div>
        {/* ------------------ Projects Section ------------------ */}
        <div className="w-full py-16" id="projects">
          <h2 className="text-accent-blue w-48">Some Personal Projects</h2>
          <div className="flex flex-col gap-y-12 py-12">
            {projectEntries.map((entry) => {
              return (
                <ProjectEntry
                  key={entry.title}
                  title={entry.title}
                  description={entry.description}
                  image="/images/placeholder.png"
                />
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
