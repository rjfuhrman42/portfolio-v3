import JobEntry from "@/components/JobEntry";
import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function Home() {
  const jobEntries = [
    {
      company: "Township",
      title: "Software Engineer",
      startDate: "2022",
      endDate: "2023",
      description:
        "Bringing web engineering fire-power to where it's needed in the company, from growth to product.",
    },
    {
      company: "USAF, 402nd Software Engineering Squadron",
      title: "Computer Scientist",
      startDate: "2020",
      endDate: "2022",
      description:
        "Bringing web engineering fire-power to where it's needed in the company, from growth to product.",
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-darkest-blue">
      <div className="max-w-xl py-8 md:py-16 px-4 lg:px-0 flex flex-col items-center justify-center">
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
          <div className="pt-6 pb-12">
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
            href={"/resume"}
            className="font-heading-tall text-lg text-accent-yellow hover:text-accent-orange"
          >
            Looking for my resume? Click here.
          </Link>
          {/* <Link
            href={"/resume"}
            className="block font-heading-tall text-lg text-accent-yellow hover:text-accent-orange md:hidden"
          >
            Looking for my resume? Click here.
            <p className="text-center font-heading-tall w-full py-2">&uarr;</p>
          </Link> */}
        </div>
      </div>
    </main>
  );
}
