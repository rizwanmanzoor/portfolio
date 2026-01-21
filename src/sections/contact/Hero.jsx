import { motion } from 'motion/react';
import { AnimatedText } from '@/components/ui/AnimatedText';
import { Mail, Phone, MapPin, Linkedin, Github, ArrowUpRight, Smartphone } from 'lucide-react';
import ContactForm from './ContactForm';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'rizwanmanzoor200@gmail.com',
    href: 'mailto:rizwanmanzoor200@gmail.com'
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+92 345 4455148',
    href: 'tel:+923454455148'
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Lahore, Pakistan',
    href: null
  }
];

const socialLinks = [
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/rizwan-manzoor'
  },
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://www.github.com/rizwanmanzoor'
  },
  {
    icon: Smartphone,
    label: 'WhatsApp',
    href: 'https://wa.me/923454455148'
  }
];

export default function Hero() {
  return (
    <section className="pt-32 pb-10 md:pb-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-20 left-1/4 w-150 h-150 bg-accent/5 rounded-full blur-[200px]" />

      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(#3EE27A 1px, transparent 1px), linear-gradient(90deg, #3EE27A 1px, transparent 1px)`,
            backgroundSize: "100px 100px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Info */}
          <div>
            <AnimatedText>
              <span
                className="text-accent text-sm uppercase tracking-[0.3em] font-accent"
              >
                Get in Touch
              </span>
            </AnimatedText>

            <AnimatedText delay={0.1}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl text-white mt-6 leading-tight max-w-4xl font-heading">
                Let's{" "}
                <span className="relative inline-block">
                  <span className="text-accent">build</span>
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
                something great
              </h1>
            </AnimatedText>

            <AnimatedText delay={0.2}>
              <p
                className="text-gray-400 text-lg mt-8 max-w-lg font-body"
              >
                Have a project in mind? I would love to hear about it. Drop me a
                message and let's discuss how we can work together.
              </p>
            </AnimatedText>

            {/* Contact info */}
            <div className="mt-12 space-y-6">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  {item.href ? (
                    <a
                      href={item.href}
                      className="flex items-center gap-4 group"
                    >
                      <div className="w-12 h-12 rounded-2xl bg-white/5 border border-accent/30 flex items-center justify-center group-hover:bg-accent/10 transition-all duration-300">
                        <item.icon className="w-5 h-5 text-gray-400 group-hover:text-accent transition-colors" />
                      </div>
                      <div>
                        <p
                          className="text-gray-500 group-hover:text-accent text-sm font-accent"
                        >
                          {item.label}
                        </p>
                        <p
                          className="text-white group-hover:text-accent transition-colors font-body"
                        >
                          {item.value}
                        </p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-white/5 border border-accent/30 flex items-center justify-center">
                        <item.icon className="w-5 h-5 text-gray-400" />
                      </div>
                      <div>
                        <p
                          className="text-gray-500 text-sm font-accent"
                        >
                          {item.label}
                        </p>
                        <p
                          className="text-white font-body"
                        >
                          {item.value}
                        </p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-12 pt-8 border-t border-white/10"
            >
              <p
                className="text-gray-200 text-md mb-4 font-accent"
              >
                Find me on
              </p>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 px-5 py-3 rounded-full bg-white/5 border hover:bg-accent/10 border-accent/30 transition-all duration-300"
                  >
                    <social.icon className="w-5 h-5 text-gray-400 group-hover:text-accent transition-colors" />
                    <span
                      className="text-gray-300 group-hover:text-white transition-colors"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      {social.label}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-gray-500 group-hover:text-accent transition-colors animate-pulse" />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="relative"
          >
            {/* Form card */}
            <div className="relative">
              {/* Decorative border */}
              <div className="absolute -inset-px bg-linear-to-br from-accent/30 via-transparent to-secondary/30 rounded-3xl" />

              <div className="relative bg-[#0f0f0f] rounded-3xl p-4 lg:p-10 border border-white/5">
                <h2
                  className="text-2xl text-white mb-8 font-accent"
                >
                  Send a Message
                </h2>
                <ContactForm />
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 border border-accent/20 rounded-2xl -z-10" />
            <div className="absolute -bottom-4 -left-4 w-28 h-28 border border-secondary/20 rounded-2xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
