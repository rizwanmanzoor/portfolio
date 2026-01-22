import { motion } from "motion/react";
import { AnimatedText, AnimatedLine } from "@/components/ui/AnimatedText";

const points = [
  {
    title: "Design Clarity",
    desc: "Clean, purposeful interfaces",
  },
  { title: "Performance", desc: "Lightning-fast experiences" },
  { title: "Usability", desc: "Intuitive user journeys" },
  { title: "Results", desc: "Conversion-focused approach" },
];

export default function About() {
  return (
    <section className="section-padding bg-primary relative overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-secondary/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image/Visual */}
          <AnimatedText>
            <div className="relative">
              {/* Main image container */}
              <div className="relative aspect-4/5 rounded-3xl overflow-hidden">
                <img
                  src="./pic.webp"
                  alt="Rizwan Manzoor"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-linear-to-t from-primary via-transparent to-transparent" />
              </div>

              {/* Floating card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="absolute -right-4 bottom-12 bg-primary border border-white/10 rounded-2xl p-6 backdrop-blur-xl"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/20 border border-accent/50 flex items-center justify-center">
                    <span className="text-accent text-xl">✓</span>
                  </div>
                  <div>
                    <p className="text-white font-semibold font-body">
                      Microsoft Certified
                    </p>
                    <p className="text-gray-400 text-sm text-center font-body">
                      (MCSA)
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border border-accent/30 rounded-3xl" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 border border-secondary/30 rounded-3xl" />
            </div>
          </AnimatedText>

          {/* Right - Content */}
          <div className="space-y-8">
            <AnimatedText>
              <span className="text-accent text-sm uppercase tracking-[0.3em] font-accent">
                About Me
              </span>
            </AnimatedText>

            <AnimatedText delay={0.1}>
              <h2 className="text-[2.5rem] lg:text-5xl text-white leading-snug md:leading-tight font-heading">
                I don't just build websites.
                <br />
                <span className="text-gray-400">I build growth engines.</span>
              </h2>
            </AnimatedText>

            <AnimatedLine
              delay={0.2}
              className="h-px bg-linear-to-r from-accent to-transparent w-32"
            />

            <AnimatedText delay={0.3}>
              <p className="text-gray-400 text-lg leading-relaxed font-body">
                With over 7+ years of experience, I've learned that great
                websites aren't just about beautiful pixels, they're about
                understanding business goals, user psychology, and the subtle
                art of turning visitors into customers.
              </p>
            </AnimatedText>

            <AnimatedText delay={0.4}>
              <p className="text-gray-400 text-lg leading-relaxed font-body">
                I specialize in Real Estate, Healthcare, Finance, E-Commerce,
                and SaaS platforms industries where trust, clarity, and
                performance make the difference between a bounce and a
                conversion.
              </p>
            </AnimatedText>

            {/* Philosophy points */}
            <AnimatedText delay={0.5}>
              <div className="grid grid-cols-2 gap-6 pt-8">
                {points.map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + i * 0.1 }}
                    className="space-y-2"
                  >
                    <h4 className="text-white font-semibold font-body">
                      {item.title}
                    </h4>
                    <p className="text-gray-500 text-sm font-body">
                      {item.desc}
                    </p>
                    <AnimatedLine
                      delay={0.2}
                      className="h-px bg-linear-to-r from-accent to-transparent w-32"
                    />
                  </motion.div>
                ))}
              </div>
            </AnimatedText>
          </div>
        </div>
      </div>
    </section>
  );
}
