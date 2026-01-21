import { motion } from "motion/react";
import {
  AnimatedText,
  AnimatedLine,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/AnimatedText";
import { Code2, Palette, Zap, Layers, LineChart, Wrench } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "UI/UX & Frontend Engineering",
    description:
      "Pixel-perfect interfaces built with React, Next.js, and modern frameworks that deliver seamless user experiences.",
    color: "#3EE27A",
  },
  {
    icon: Palette,
    title: "Website & Brand Redesign",
    description:
      "Transform outdated websites into modern, conversion-focused platforms that reflect your brand's true potential.",
    color: "#3EE27A",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description:
      "Speed up your website with Core Web Vitals optimization, ensuring faster loads and better search rankings.",
    color: "#3EE27A",
  },
  {
    icon: Layers,
    title: "Figma to Production Code",
    description:
      "Bring your designs to life with clean, semantic, and maintainable code that scales with your business.",
    color: "#3EE27A",
  },
  {
    icon: LineChart,
    title: "Conversion-Focused Interfaces",
    description:
      "Strategic UI patterns and UX psychology to guide visitors toward taking action and becoming customers.",
    color: "#3EE27A",
  },
  {
    icon: Wrench,
    title: "Long-Term Product Support",
    description:
      "Ongoing maintenance, updates, and improvements to keep your digital product running at its best.",
    color: "#3EE27A",
  },
];

export default function Services() {
  return (
    <section className="py-16 bg-primary relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 bg-accent/5 rounded-full blur-[200px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-20">
          <AnimatedText>
            <span className="text-accent text-sm uppercase tracking-[0.3em] font-accent">
              Services
            </span>
          </AnimatedText>

          <AnimatedText delay={0.1}>
            <h2 className="text-[2.5rem] lg:text-6xl text-white leading-snug md:leading-tight font-heading">
              Solutions that drive{" "}
              <span className="text-gray-400">growth</span>
            </h2>
          </AnimatedText>

          <div className="flex justify-center md:justify-end mr-9">
            <AnimatedLine
            delay={0.2}
            className="h-px bg-linear-to-l from-accent to-transparent w-32"
          />
          </div>

          <AnimatedText delay={0.2}>
            <p className="text-gray-400 text-sm md:text-lg mt-6 font-body">
              I don't just deliver services. I deliver outcomes. Every solution
              is crafted to help your business build trust, improve conversions,
              and grow.
            </p>
          </AnimatedText>
        </div>

        {/* Services grid */}
        <StaggerContainer
          staggerDelay={0.1}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <StaggerItem key={service.title}>
              <motion.div
                whileHover={{ y: -8 }}
                className="group relative rounded-3xl p-[1.5px] overflow-hidden"
              >
                {/* 🔥 Animated Border */}
                <div className="absolute -inset-px bg-linear-to-br from-accent/50 via-transparent to-secondary/50 rounded-3xl" />

                {/* Card Content */}
                <div className="relative bg-black rounded-3xl p-8 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-accent/10">
                  {/* Icon */}
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300"
                    style={{ backgroundColor: `${service.color}15` }}
                  >
                    <service.icon
                      className="w-7 h-7 transition-colors duration-300"
                      style={{ color: service.color }}
                    />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl text-white/90 font-semibold mb-3 font-body">
                    {service.title}
                  </h3>

                  <p className="text-gray-500 leading-relaxed font-body">
                    {service.description}
                  </p>

                  {/* Bottom hover accent */}
                  <div className="absolute bottom-0 left-8 right-8 h-0.5 bg-linear-to-r from-transparent via-accent to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
