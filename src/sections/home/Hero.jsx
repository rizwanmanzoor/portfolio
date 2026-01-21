import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { AnimatedText, AnimatedLine } from "@/components/ui/AnimatedText";
import {
  ArrowRight,
  ArrowDownRight,
  Code2,
  Palette,
  Zap,
  Globe,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden bg-primary">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(#3EE27A 1px, transparent 1px), linear-gradient(90deg, #3EE27A 1px, transparent 1px)`,
            backgroundSize: "100px 100px",
          }}
        />
      </div>

      <div className="absolute top-20 left-1/4 w-150 h-150 bg-accent/5 rounded-full blur-[200px]" />

      {/* Floating accent shapes */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-[15%] w-32 h-32 rounded-full bg-accent/10 blur-3xl"
      />
      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [0, -5, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 left-[10%] w-48 h-48 rounded-full bg-secondary/20 blur-3xl"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-32 pb-0 lg:py-32">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left content */}
          <div className="lg:col-span-7 space-y-8">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/5"
            >
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-accent text-sm font-medium tracking-wide font-body">
                Available for Projects
              </span>
            </motion.div>

            {/* Main headline */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl text-white leading-[1.3] lg:leading-[1.1] tracking-tight font-heading"
            >
              Building websites that{" "}
              <span className="relative inline-block">
                <span className="text-accent font-accent">convert</span>
                <motion.svg
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 0.8 }}
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 200 12"
                  fill="#3EE27A"
                >
                  <path
                    d="M2 8C50 2 150 2 198 8"
                    stroke="accent"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </motion.svg>
              </span>{" "}
              visitors into customers
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-400 max-w-xl leading-relaxed font-body"
            >
              Frontend Developer & Brand Growth Partner with 7+ years crafting
              high-performance interfaces that build trust and drive real
              business results.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <Link
                to="/work"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-accent font-body text-primary rounded-full font-semibold text-lg hover:bg-[#2fd068] transition-all duration-300"
              >
                View My Work
                <motion.div
                  animate={{ x: [0, 6, 0] }}
                  transition={{ duration: 1.7, repeat: Infinity }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </Link>
              <Link
                to="/contact"
                className="group hidden md:inline-flex items-center gap-3 px-8 py-4 font-body border border-white/20 text-white rounded-full font-semibold text-lg hover:border-accent hover:text-accent transition-all duration-300"
              >
                Let's Work Together
              </Link>
            </motion.div>
          </div>

          {/* Right side - Stats card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-5"
          >
            <div className="relative">
              {/* Decorative border */}
              <div className="absolute -inset-px bg-linear-to-br from-accent/50 via-transparent to-secondary/50 rounded-3xl" />

              <div className="relative bg-primary rounded-3xl px-4 py-8 md:px-8 space-y-8">
                <div className="space-y-6">
                  {/* Floating badges */}
                  <div className="flex justify-center md:justify-start flex-wrap gap-3">
                    <motion.div
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="flex items-center gap-2 px-4 py-2 bg-background rounded-xl border border-border shadow-sm"
                    >
                      <Code2 size={18} className="text-accent" />
                      <span className="font-sub-heading font-medium text-sm">
                        React & Next.js
                      </span>
                    </motion.div>
                    <motion.div
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                      className="flex items-center gap-2 px-4 py-2 bg-background rounded-xl border border-border shadow-sm"
                    >
                      <Palette size={18} className="text-accent" />
                      <span className="font-sub-heading font-medium text-sm">
                        WordPress
                      </span>
                    </motion.div>
                    <motion.div
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                      className="flex items-center gap-2 px-4 py-2 bg-background rounded-xl border border-border shadow-sm"
                    >
                      <Globe size={18} className="text-accent" />
                      <span className="font-sub-heading font-medium text-sm">
                        Figma to Code
                      </span>
                    </motion.div>
                    <motion.div
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                      className="flex items-center gap-2 px-4 py-2 bg-background rounded-xl border border-border shadow-sm"
                    >
                      <Zap size={18} className="text-accent" />
                      <span className="font-sub-heading font-medium text-sm">
                        Performance
                      </span>
                    </motion.div>
                  </div>

                  {/* Code snippet visual */}
                  <div className="rounded-xl border border-accent/30 bg-black p-6 font-mono text-sm">
                    <div className="flex gap-2 mb-4">
                      <span className="w-3 h-3 rounded-full bg-[#EF4343B2]" />
                      <span className="w-3 h-3 rounded-full bg-[#FC8F36B2]" />
                      <span className="w-3 h-3 rounded-full bg-accent/70" />
                    </div>
                    <code className="text-background/80">
                      <span className="text-accent">const</span>{" "}
                      <span className="text-background">developer</span> = {"{"}
                      <br />
                      <span className="ml-4 text-background/60">
                        name:
                      </span>{" "}
                      <span className="text-accent">'Rizwan'</span>,
                      <br />
                      <span className="ml-4 text-background/60">
                        focus:
                      </span>{" "}
                      <span className="text-accent">'Results'</span>,
                      <br />
                      <span className="ml-4 text-background/60">
                        delivery:
                      </span>{" "}
                      <span className="text-accent">'Exceptional'</span>
                      <br />
                      {"}"};
                    </code>
                  </div>
                </div>

                <div className="absolute -z-10 top-0 -right-0.5 w-full h-full bg-accent/50 rounded-3xl" />

                {/* Stats */}
                <div className="pt-6 border-t border-white/10">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <span className="text-4xl font-bold text-accent font-accent">
                        7<sup className="font-heading"> +</sup>
                      </span>
                      <p className="text-gray-400 text-sm font-body">
                        Years Experience
                      </p>
                      <AnimatedLine
                        delay={0.2}
                        className="h-px bg-linear-to-r from-accent to-transparent w-32"
                      />
                    </div>
                    <div className="space-y-2">
                      <span className="text-4xl font-bold text-white font-heading">
                        20<sup>+</sup>
                      </span>
                      <p className="text-gray-400 text-sm font-body">
                        Projects Delivered
                      </p>
                      <AnimatedLine
                        delay={0.2}
                        className="h-px bg-linear-to-r from-accent to-transparent w-32"
                      />
                    </div>
                    <div className="space-y-2">
                      <span className="text-4xl font-bold text-white font-heading">
                        5<sup>+</sup>
                      </span>
                      <p className="text-gray-400 text-sm font-body">
                        Industries Served
                      </p>
                      <AnimatedLine
                        delay={0.2}
                        className="h-px bg-linear-to-r from-accent to-transparent w-32"
                      />
                    </div>
                    <div className="space-y-2">
                      <span className="text-4xl font-bold text-accent font-accent">
                        100%
                      </span>
                      <p className="text-gray-400 text-sm font-body">
                        Client Satisfaction
                      </p>
                      <AnimatedLine
                        delay={0.2}
                        className="h-px bg-linear-to-r from-accent to-transparent w-32"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="hidden absolute bottom-12 left-1/2 -translate-x-1/2 md:flex flex-col items-center gap-2"
        >
          <span className="text-gray-500 text-sm tracking-widest uppercase font-accent">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDownRight className="w-5 h-5 text-accent" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
