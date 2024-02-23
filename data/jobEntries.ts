export type JobProps = {
    company: string;
    title: string;
    url?: string;
    startDate: string;
    endDate: string;
    description: string;
  };

export const jobEntries = [
    {
      company: "Township",
      title: "Software Engineer",
      url: "https://www.township.agency/",
      startDate: "Apr. 2022",
      endDate: "Nov. 2023",
      description:
        "Small design and dev agency where I worked largely on React Native Bluetooth apps for iOS and Android, with some interlude into building client marketing sites with Next.js, TailwindCSS, and Contentful CMS.",
    },
    {
      company: "USAF",
      title: "Computer Scientist",
      startDate: "May 2020",
      endDate: "Mar. 2022",
      description:
        "Part of the independent verification and validation team. Worked with a team of 5 to test internal applications and websites. Recommended changes and fixes.",
    },
  ];