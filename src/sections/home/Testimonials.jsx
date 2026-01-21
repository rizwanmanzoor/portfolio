import { motion } from "motion/react";
import {
  AnimatedText,
  StaggerItem,
} from "@/components/ui/AnimatedText";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Rizwan delivers designs that don't just look stunning, they measurably improve performance and conversions. Our bounce rate dropped 40% after the redesign.",
    author: "Sarah Mitchell",
    role: "CEO, Property Management Firm",
    rating: 5,
  },
  {
    quote:
      "Pixel-perfect execution, lightning-fast turnaround. He's become our go-to developer for anything frontend. The attention to detail is remarkable.",
    author: "James Chen",
    role: "CTO, SaaS Startup",
    rating: 5,
  },
  {
    quote:
      "What sets Rizwan apart is his understanding of business goals. He doesn't just code, he thinks strategically about user experience and conversions.",
    author: "Aisha Rahman",
    role: "Marketing Director, Healthcare",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="section-padding bg-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-secondary/5 to-transparent" />

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-accent/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-secondary/5 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-20">
          <AnimatedText>
            <span className="text-accent text-sm uppercase tracking-[0.3em] font-accent">
              Testimonials
            </span>
          </AnimatedText>

          <AnimatedText delay={0.1}>
            <h2 className="text-[2.5rem] lg:text-5xl text-white leading-tight font-heading">
              What clients say
            </h2>
          </AnimatedText>
        </div>

        {/* Testimonials */}
        <div className="testimonial-marquee overflow-hidden">
          <div className="testimonial-track">
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <StaggerItem key={index}>
                <motion.div className="group relative bg-black rounded-3xl p-8 h-full w-90 shrink-0">
                  {/* Quote icon */}
                  <div className="absolute top-8 right-8 opacity-10">
                    <Quote className="w-16 h-16 text-accent" />
                  </div>

                  {/* Rating */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-accent text-accent"
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-gray-300 text-lg leading-relaxed mb-8 font-body">
                    "{testimonial.quote}"
                  </p>

                  {/* Author */}
                  <div className="mt-auto">
                    <div className="w-12 h-0.5 bg-accent mb-4" />
                    <p className="text-white/80 font-semibold font-body">
                      {testimonial.author}
                    </p>
                    <p className="text-gray-500 text-sm font-body">
                      {testimonial.role}
                    </p>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
