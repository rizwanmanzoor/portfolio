import { Hero } from "@/sections/contact";
import { Helmet } from "react-helmet-async";

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact Web Developer in Lahore | Rizwan Manzoor</title>
        <meta
          name="description"
          content="Contact Rizwan Manzoor, a professional web developer in Lahore, Pakistan, for React, UI/UX, WordPress, and WooCommerce development services."
        />
        <link
          rel="canonical"
          href="https://rizwanmanzoor.netlify.app/contact"
        />
      </Helmet>
      
      <div className="bg-[#0f0f0f] min-h-screen">
        <Hero />
      </div>
    </>
  );
}
