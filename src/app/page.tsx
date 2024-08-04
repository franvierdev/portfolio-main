import Image from "next/image";
import Hero from "./sections/page";
import Projects from "./sections/projects/page";
import Technologies from "./sections/technologies/page";
import Contact from "./sections/contact/contact";

export default function Home() {
  return (
    <>
      <main className=" h-screen max-sm:mt-20 ">
        <Hero />
      </main>
      <section
        className=" max-sm:-mt-40  lg:-mt-32 2xl:-mt-56 pb-20 bg-gray-100/10 "
        id="projects"
      >
        <Projects />
      </section>
      <section className="py-10 bg-gray-900 text-gray-100">
        <Technologies />
      </section>
      <section className="" id="contact">
        <Contact />
      </section>
    </>
  );
}
