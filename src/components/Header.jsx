import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowUpRight, Phone, Linkedin, Github, Mail, Smartphone } from "lucide-react";

const navLinks = [
  { name: "Home", page: "/" },
  { name: "Work", page: "/work" },
  { name: "Contact", page: "/contact" },
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
    icon: Mail,
    label: 'Email',
    href: 'mailto:rizwanmanzoor200@gmail.com'
  },
  {
    icon: Smartphone,
    label: 'WhatsApp',
    href: 'https://wa.me/923454455148'
  }
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const currentPageName = location.pathname;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const isHomePage = currentPageName === "/";

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-primary/90 backdrop-blur-xl border-b border-white/5"
          : ""
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="relative flex items-center z-50">
          <motion.span
            whileHover={{ scale: 1.02 }}
            className="text-4xl md:text-[2.5rem] leading-10 font-heading tracking-wide transition-colors"
          >
            RIZWAN
          </motion.span>

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
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink key={link.page} to={link.page} className="relative group">
              <span
                className={`text-md tracking-wide transition-colors font-accent ${
                  currentPageName === link.page
                    ? "text-accent font-medium"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {link.name}
              </span>

              <span
                className={`absolute -bottom-1 left-0 w-full h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left ${
                  currentPageName === link.page ? "scale-x-100" : ""
                }`}
              />
            </NavLink>
          ))}

          {/* CTA Button */}
          <a
            href="https://wa.me/923454455148"
            target="_blank"
            title="Let's Talk on WhatsApp"
            className="group flex items-center gap-2 px-6 py-2.5 rounded-full font-body border border-accent/30 text-accent hover:bg-accent hover:text-primary transition-all duration-300"
          >
            <span className="text-sm font-medium">Let's Talk</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden p-2 text-white"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-primary min-h-screen"
          >
            <div className="max-w-7xl mx-auto bg-primary px-6">
              <nav className="h-[80vh] flex flex-col items-center justify-center gap-8">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.page}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                  >
                    <NavLink
                      to={link.page}
                      className={`text-6xl font-heading ${
                        currentPageName === link.page
                          ? "text-accent"
                          : "text-white hover:text-accent"
                      } transition-colors`}
                    >
                      {link.name}
                    </NavLink>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="mt-8"
                >
                  <a
                    title="Let's Talk on Phone"
                    href="tel: +923454455148"
                    className="px-6 py-2.5 flex items-center gap-2 rounded-lg bg-accent hover:bg-[#8ae63f] text-black font-semibold text-lg transition-all duration-300"
                  >
                    <Phone className="w-5 h-5" />
                    (+92) 345-4455-148
                  </a>
                </motion.div>

                {/* Social links */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="mt-12 pt-8 border-t border-white/10"
                >
                  <p className="text-gray-200 text-md text-center mb-4 font-accent">
                    Find me on
                  </p>
                  <div className="flex flex-wrap gap-4">
                    {socialLinks.map((social) => (
                      <a
                        key={social.label}
                        title={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-3 px-5 py-3 rounded-full bg-white/5 border hover:bg-accent/10 border-accent/30 transition-all duration-300"
                      >
                        <social.icon className="w-5 h-5 text-gray-400 group-hover:text-accent transition-colors" />
                      </a>
                    ))}
                  </div>
                </motion.div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
