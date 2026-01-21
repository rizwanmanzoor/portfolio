import CTA from "../sections/home/CTA";
import { Helmet } from "react-helmet-async";
import { Hero, Projects } from "@/sections/work";

export default function Work() {
  return (
    <>
      <Helmet>
        <title>Portfolio | Web & Frontend Projects – Rizwan Manzoor</title>
        <meta
          name="description"
          content="Browse real-world frontend, React, UI/UX, and WordPress projects delivered by Rizwan Manzoor for startups and businesses worldwide."
        />
        <link
          rel="canonical"
          href="https://rizwanmanzoor.netlify.app/work"
        />
      </Helmet>
      
      <Hero />
      <Projects />
      <CTA />
    </>
  );
}
