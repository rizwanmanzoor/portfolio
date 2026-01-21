import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { AnimatedText, AnimatedLine } from "@/components/ui/AnimatedText";
import { ArrowRight } from "lucide-react";

const industries = [
  "Real Estate",
  "Healthcare",
  "Finance",
  "E-Commerce",
  "SaaS",
];

export default function CTA() {
  return (
    <section className="pt-16 pb-10 bg-primary relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 bg-accent/10 rounded-full blur-[200px]" />
      </div>

      {/* Animated lines */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 w-full h-px bg-linear-to-r from-transparent via-accent to-transparent"
        />
        <motion.div
          animate={{ x: ["100%", "-100%"] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-3/4 w-full h-px bg-linear-to-r from-transparent via-secondary to-transparent"
        />
      </div>

      <div className="max-w-5xl mx-auto px-6 lg:px-12 relative z-10 text-center">
        <AnimatedText>
          <span className="text-accent text-sm uppercase tracking-[0.3em] font-accent">
            Let's Connect
          </span>
        </AnimatedText>

        <AnimatedText delay={0.1}>
          <h2 className="text-[2.5rem] lg:text-5xl text-white leading-tight font-heading">
            Ready to transform your
            <br />
            <span className="text-gray-400">digital presence?</span>
          </h2>
        </AnimatedText>

        <div className="max-w-lg mx-auto flex justify-center mt-3">
          <AnimatedLine
            delay={0.2}
            className="h-px bg-linear-to-r from-accent to-transparent w-32"
          />
        </div>

        <AnimatedText delay={0.2}>
          <p className="text-gray-400 text-sm md:text-md mt-8 max-w-2xl mx-auto font-body">
            Whether you're launching a new platform, modernizing an existing
            site, or need a developer who understands both design and business
            impact, let's talk.
          </p>
        </AnimatedText>

        <AnimatedText delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 px-10 py-5 font-body bg-accent text-primary rounded-full font-semibold text-lg hover:bg-[#2fd068] transition-all duration-300"
            >
              Start a Conversation
              <motion.div
                animate={{ x: [0, 6, 0] }}
                transition={{ duration: 1.7, repeat: Infinity }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            </Link>
          </div>
        </AnimatedText>

        {/* Trust indicators */}
        <AnimatedText delay={0.4}>
          <div className="mt-20 max-w-3xl mx-auto pt-12 border-t border-white/10">
            <p className="text-gray-500 text-sm mb-6 font-body">
              Trusted by companies across industries
            </p>

            <div className="marquee">
              <div className="marquee-track">
                {[...industries, ...industries].map((industry, index) => (
                  <span
                    key={index}
                    className="text-gray-400 text-lg font-accent whitespace-nowrap"
                  >
                    {industry}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </AnimatedText>
      </div>
    </section>
  );
}
