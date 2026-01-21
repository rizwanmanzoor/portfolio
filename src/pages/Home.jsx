import { Helmet } from "react-helmet-async";
import { Hero, About, Services, FeaturedWork, Testimonials, CTA } from "@/sections/home";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Frontend & Web Developer in Lahore | Rizwan Manzoor</title>
        <meta
          name="description"
          content="Rizwan Manzoor is a Frontend & Web Developer in Lahore, Pakistan, specializing in React, Tailwind CSS, UI/UX design, WordPress, and WooCommerce for modern businesses."
        />
        <link rel="canonical" href="https://rizwanmanzoor.netlify.app/" />
      </Helmet>

      <Hero />
      <About />
      <Services />
      <FeaturedWork />
      <Testimonials />
      <CTA />
    </>
  );
}
