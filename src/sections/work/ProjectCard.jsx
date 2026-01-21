import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

export default function ProjectCard({ project, index }) {
  return (
    <motion.a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -12 }}
      className="group block relative rounded-3xl overflow-hidden bg-primary"
    >
      {/* Image container */}
      <div className="aspect-4/3 overflow-hidden">
        <motion.img
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-primary via-primary/40 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />
      </div>

      {/* Content overlay */}
      <div className="absolute inset-0 flex flex-col justify-end px-4 py-2">
        {/* Description */}
        {/* <p
          className="text-gray-200 text-md font-medium line-clamp-2 opacity-0 font-body group-hover:opacity-100 transition-opacity duration-300"
        >
          {project.description}
        </p> */}

        {/* Title */}
        <h3
          className="text-xl lg:text-3xl text-white font-semibold mb-2 font-accent group-hover:text-accent transition-colors duration-300"
        >
          {project.title}
        </h3>

        {/* Category badge */}
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center w-fit px-3 py-1 font-accent rounded-full text-xs bg-accent/10 text-accent border border-accent/20 mb-3"
        >
          {project.category}
        </motion.span>
      </div>

      {/* Arrow indicator */}
      <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 group-hover:bg-accent">
        <ArrowUpRight className="w-4 h-4 text-white group-hover:text-primary animate-bounce" />
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-accent to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
    </motion.a>
  );
}
