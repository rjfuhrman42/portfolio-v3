import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-darkest-blue">
      <div className="max-w-xl py-16 flex flex-col items-center justify-center">
        <Navbar />
        {/* ------------------ Hero Section ------------------ */}
        <div className="w-full px-4 py-16 lg:px-0">
          <div className="pb-11">
            <h1 className="text-accent-green">Hi, I&apos;m Reid.</h1>
            <h1 className="">A Software engineer based in new york.</h1>
          </div>
          <p className="">
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
      </div>
    </main>
  );
}
