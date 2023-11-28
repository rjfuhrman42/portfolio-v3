import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-darkest-blue">
      <div className="max-w-xl py-16 flex flex-col items-center justify-center">
        <div className="w-full">
          <div className="pb-11">
            <h1 className="text-accent-green">Hi, I&apos;m Reid.</h1>
            <h1 className="">A Software engineer based in new york.</h1>
          </div>
          <p className="">
            I’m Reid Fuhrman, a software engineer based in Brooklyn, New York.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            vestibulum arcu id mauris ullamcorper maximus. Nam consequat odio eu
            sollicitudin porttitor. Pellentesque maximus eget est vitae tempus.
            Ut sodales ipsum quis urna malesuada, in vehicula lectus pretium.
            Sed faucibus aliquet dui ac vehicula. In sed justo risus.
          </p>
        </div>
      </div>
    </main>
  );
}
