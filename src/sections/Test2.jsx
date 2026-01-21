import { useEffect, useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  ArrowRight,
  Download,
  Send,
} from "lucide-react";
import PIC from "../assets/profile-pic.webp";

export default function Test2() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const user = {
    name: "Rizwan Manzoor",
    role: "Senior Frontend & UI Engineer",
    tagline:
      "I help businesses build fast, scalable and conversion‑focused web interfaces.",
    location: "Lahore, Pakistan",
    email: "rizwanmanzoor200@gmail.com",
    phone: "+92 345 4455148",
    resume: "/resume.pdf",
    github: "https://github.com/rizwanmanzoor",
    linkedin: "https://www.linkedin.com/in/rizwan-manzoor/",
  };

  return (
    <main className="bg-background text-foreground">
      {/* HERO */}
      <section className="section-padding min-h-screen flex items-center">
        <div className="container text-center">
          <div
            className={`transition-all duration-700 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <img
              src={PIC}
              alt={user.name}
              className="w-40 h-40 mx-auto rounded-full object-cover border-soft mb-8"
            />

            <h1 className="text-5xl md:text-6xl font-heading mb-4">
              {user.name}
            </h1>

            <p className="uppercase tracking-widest text-sm text-muted mb-4">
              {user.role}
            </p>

            <p className="max-w-2xl mx-auto text-lg text-muted mb-10">
              {user.tagline}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`mailto:${user.email}`}
                className="inline-flex items-center justify-center gap-2 bg-black text-white px-8 py-4 rounded-xl font-semibold hover:opacity-90"
              >
                <Send size={18} /> Contact Me
              </a>

              <a
                href={user.resume}
                download
                className="inline-flex items-center justify-center gap-2 border-soft px-8 py-4 rounded-xl font-semibold"
              >
                <Download size={18} /> Download CV
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="section-padding bg-light">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-heading mb-6">About Me</h2>
            <p className="text-muted leading-relaxed mb-4">
              I am a senior frontend developer with over 6 years of experience
              delivering production‑grade interfaces across logistics, healthcare,
              education and e‑commerce platforms.
            </p>
            <p className="text-muted leading-relaxed">
              My strength lies in transforming complex requirements into clean,
              intuitive user experiences with scalable and maintainable code.
            </p>
          </div>

          <div className="space-y-4 text-muted">
            <div className="flex items-center gap-3">
              <MapPin size={18} /> {user.location}
            </div>
            <div className="flex items-center gap-3">
              <Mail size={18} /> {user.email}
            </div>
            <div className="flex items-center gap-3">
              <Phone size={18} /> {user.phone}
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-heading mb-4">
              Selected Work
            </h2>
            <p className="text-muted max-w-xl mx-auto">
              A curated selection of projects focused on performance, usability
              and business impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="border-soft rounded-2xl p-6 hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold mb-2">
                  Enterprise Web Application
                </h3>
                <p className="text-muted mb-4">
                  Designed and developed a scalable frontend architecture with
                  pixel‑perfect UI and optimized performance.
                </p>
                <a
                  href={user.github}
                  className="inline-flex items-center gap-2 font-semibold"
                >
                  View Case Study <ArrowRight size={16} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="section-padding bg-light">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-heading mb-4">
            Let’s Work Together
          </h2>
          <p className="text-muted max-w-xl mx-auto mb-8">
            Available for freelance and contract opportunities. I respond within
            24 hours.
          </p>

          <div className="flex justify-center gap-6">
            <a
              href={user.github}
              className="border-soft p-4 rounded-xl"
            >
              <Github />
            </a>
            <a
              href={user.linkedin}
              className="border-soft p-4 rounded-xl"
            >
              <Linkedin />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
