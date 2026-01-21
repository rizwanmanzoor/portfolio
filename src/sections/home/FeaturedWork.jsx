import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  AnimatedText,
  AnimatedLine,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/AnimatedText";
import { ArrowUpRight, ArrowRight } from "lucide-react";

const featuredProjects = [
  {
    title: "The Brands Kingdom",
    category: "E-Commerce",
    url: "https://thebrandskingdom.com",
    image:
      "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&q=80",
    description: "Fashion e-commerce with performance-optimized storefront",
  },
  {
    title: "RealREPP",
    category: "SaaS & Platforms",
    url: "https://realrepp.com",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80",
    description: "AI-powered recruitment platform interface",
  },
  {
    title: "LDM Management Ltd",
    category: "Real Estate & Property",
    url: "https://ldmmanagementltd.co.uk",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
    description: "UK property management portal redesign",
  },
  {
    title: "Nishma Health Assist",
    category: "Healthcare",
    url: "https://nishmahealthassist.com",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    description: "Healthcare platform with patient-centric design",
  },
];

export default function FeaturedWork() {
  return (
    <section className="section-padding bg-primary relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(#3EE27A 1px, transparent 1px), linear-gradient(90deg, #3EE27A 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16">
          <div>
            <AnimatedText>
              <span className="text-accent text-sm uppercase tracking-[0.3em] font-accent">
                Featured Work
              </span>
            </AnimatedText>

            <AnimatedText delay={0.1}>
              <h2 className="text-[2.5rem] lg:text-6xl text-white mt-4 leading-tight font-heading">
                Projects that made
                <br />
                <span className="text-gray-400">an impact</span>
              </h2>
            </AnimatedText>

            <AnimatedLine
              delay={0.2}
              className="h-px bg-linear-to-r from-accent to-transparent w-32"
            />
          </div>

          <AnimatedText delay={0.2}>
            <Link
              to="/work"
              className="group inline-flex items-center gap-2 font-body text-accent mt-8 lg:mt-0 hover:gap-4 transition-all duration-300"
            >
              View All Work
              <motion.div
                animate={{ x: [0, 6, 0] }}
                transition={{ duration: 1.7, repeat: Infinity }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            </Link>
          </AnimatedText>
        </div>

        {/* Projects grid */}
        <StaggerContainer
          staggerDelay={0.15}
          className="grid md:grid-cols-2 gap-8"
        >
          {featuredProjects.map((project, index) => (
            <StaggerItem key={project.title}>
              <motion.a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -8 }}
                className="group block relative rounded-3xl overflow-hidden bg-white/5"
              >
                {/* Image */}
                <div className="aspect-16/10 overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-primary via-primary/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 px-4 py-6 bg-linear-to-t from-primary via-primary/50 to-transparent">
                  <span className="text-accent text-md font-medium tracking-wide font-accent">
                    {project.category}
                  </span>
                  <h3 className="text-3xl md:text-4xl text-white  mb-2 group-hover:text-accent transition-colors leading-tight font-heading">
                    {project.title}
                  </h3>
                  <p className="text-gray-200 text-sm font-body">
                    {project.description}
                  </p>
                </div>

                {/* Arrow indicator */}
                <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:bg-accent">
                  <ArrowUpRight className="w-6 h-6 animate-pulse text-white group-hover:text-primary" />
                </div>
              </motion.a>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
