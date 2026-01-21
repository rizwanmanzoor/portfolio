import { motion } from "motion/react";
import { AnimatedText, AnimatedLine } from "@/components/ui/AnimatedText";

const industries = ['Real Estate', 'Healthcare', 'Finance', 'E-Commerce', 'SaaS'];

export default function Hero() {
  return (
    <section className="pt-32 pb-10 md:pb-20 relative overflow-hidden">
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

      {/* Background elements */}
      <div className="absolute top-0 right-0 w-125 h-125 bg-accent/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-100 h-100 bg-secondary/10 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left content */}
          <div className="lg:col-span-7 space-y-8">
            <AnimatedText>
              <span className="text-accent text-sm uppercase tracking-[0.3em] font-accent">
                Portfolio
              </span>
            </AnimatedText>

            <AnimatedText delay={0.1}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl text-white mt-6 leading-tight max-w-4xl font-heading">
                Work that{" "}
                <span className="relative inline-block">
                  <span className="text-accent">speaks</span>
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
                <br />
                <span className="text-gray-500">for itself</span>
              </h1>
            </AnimatedText>

            <AnimatedText delay={0.2}>
              <p className="text-gray-400 text-lg mt-8 max-w-2xl font-body">
                A curated selection of projects across Real Estate, Healthcare,
                Finance, E-Commerce, and SaaS. Each designed to build trust and
                drive conversions.
              </p>
            </AnimatedText>
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

              <div className="relative bg-primary rounded-3xl p-8 space-y-8">
                {/* Industries */}
                <div className="pt-6 border-t border-white/10">
                  <p className="text-gray-500 text-xs uppercase tracking-widest mb-4 font-accent">Industries</p>
                  <div className="flex flex-wrap gap-2">
                    {industries.map((industry) => (
                      <span
                        key={industry}
                        className="px-3 py-1 rounded-full font-body text-xs text-gray-300 bg-white/5 border border-white/10"
                      >
                        {industry}
                      </span>
                    ))}
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
      </div>
    </section>
  );
}
