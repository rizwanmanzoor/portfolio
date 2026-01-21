import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import ProjectCard from "./ProjectCard";

const allProjects = [
  // Real Estate & Construction
  {
    title: "Jasr Alvida",
    category: "Real Estate",
    url: "https://jasralvida.com/",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    description:
      "Luxury real estate development platform with immersive property showcases",
  },
  {
    title: "Sama Al Furat Group",
    category: "Real Estate",
    url: "https://samaalfuratgroup.com/",
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
    description: "Premium construction and development company website",
  },
  {
    title: "Barota",
    category: "Real Estate",
    url: "http://barota.com/",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    description: "Modern real estate platform with advanced property search",
  },
  {
    title: "Jinnah Square",
    category: "Real Estate",
    url: "https://jinnahsquare.pk",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
    description: "Residential and commercial property development showcase",
  },
  {
    title: "LDM Management Ltd",
    category: "Real Estate",
    url: "https://ldmmanagementltd.co.uk",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
    description: "UK property management portal with tenant services",
  },
  {
    title: "IPC London",
    category: "Real Estate",
    url: "https://ipclondon.co.uk",
    image:
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80",
    description: "London lettings and property management services",
  },
  // Finance & Investment
  {
    title: "Fund & Grow",
    category: "Finance",
    url: "https://fundandgrow.com",
    image:
      "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?w=800&q=80",
    description: "Business funding solutions with conversion-optimized UX",
  },
  {
    title: "Kaydem Credit Help",
    category: "Finance",
    url: "https://kaydemcredithelp.com",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
    description: "Credit assistance platform with clear user journey",
  },
  // Healthcare
  {
    title: "Nishma Health Assist",
    category: "Healthcare",
    url: "https://nishmahealthassist.com",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    description: "Healthcare platform with patient-centric design approach",
  },
  {
    title: "MedOral RCM",
    category: "Healthcare",
    url: "https://medoralrcm.com",
    image:
      "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&q=80",
    description: "Medical billing platform with streamlined workflows",
  },
  // SaaS & Platforms
  {
    title: "RealREPP",
    category: "SaaS",
    url: "https://realrepp.com",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80",
    description: "AI-powered recruitment platform with intuitive dashboard",
  },
  {
    title: "GoCompare Parking",
    category: "SaaS",
    url: "https://gocompareparking.co.uk",
    image:
      "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=800&q=80",
    description: "UK airport parking comparison with seamless booking flow",
  },
  // E-Commerce
  {
    title: "The Brands Kingdom",
    category: "E-Commerce",
    url: "https://thebrandskingdom.com",
    image:
      "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&q=80",
    description: "Fashion e-commerce with performance-optimized storefront",
  },
  // Corporate / Services
  {
    title: "Trydnt Services",
    category: "Corporate",
    url: "http://trydntservices.com/",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    description: "Professional services website with clean corporate design",
  },
];

const categories = [
  "All",
  "Real Estate",
  "Finance",
  "Healthcare",
  "SaaS",
  "E-Commerce",
  "Corporate",
];

export default function ProjectGrid() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? allProjects
      : allProjects.filter((p) => p.category === activeCategory);

  return (
    <div>
      {/* Filter tabs */}
      {/* <div className="hidden lg:flex justify-center gap-3 mb-16"> */}
      <div className="hidden">
        {categories.map((category) => (
          <motion.button
            key={category}
            onClick={() => setActiveCategory(category)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-6 py-3 rounded-full text-sm font-medium font-body transition-all duration-300 cursor-pointer ${
              activeCategory === category
                ? "bg-accent text-primary border border-accent"
                : "bg-primary text-gray-400 hover:bg-primary hover:text-white border border-white/20 hover:border-secondary backdrop-blur-xl"
            }`}
          >
            {category}
          </motion.button>
        ))}
      </div>

      {/* Projects grid */}
      <motion.div
        layout
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index % 6}
            />
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Empty state */}
      {filteredProjects.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-20"
        >
          <p
            className="text-gray-400 font-body"
          >
            No projects found in this category.
          </p>
        </motion.div>
      )}
    </div>
  );
}
