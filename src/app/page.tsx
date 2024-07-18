import Image from "next/image";
import Hero from "./sections/page";
import Projects from "./sections/projects/page";
import Technologies from "./sections/technologies/page";

export default function Home() {
  return (
    <>
      <main className=" h-screen max-sm:mt-20">
        <Hero />
      </main>
      <section
        className=" max-sm:-mt-40  lg:-mt-36 2xl:mt-44 pb-20 bg-gray-100 "
        id="projects"
      >
        <Projects />
      </section>
      <section className="py-10 bg-gray-900 text-gray-100">
        <Technologies />
      </section>
    </>
  );
}
