"use client";

import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";

export default function PageLoader({ children }) {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  // Initial load
  useEffect(() => {
    let p = 0;
    const interval = setInterval(() => {
      p += 6;
      setProgress(p);
      if (p >= 100) {
        clearInterval(interval);
        setLoading(false);
      }
    }, 40);

    return () => clearInterval(interval);
  }, []);

  // Route change loader
  useEffect(() => {
    if (!loading) {
      setLoading(true);
      setProgress(30);
      setTimeout(() => {
        setProgress(100);
        setTimeout(() => setLoading(false), 300);
      }, 400);
    }
  }, [location]);

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-9999 flex flex-col items-center justify-center bg-accent text-white"
          >
            {/* Soft Gold Glow */}
            <div className="absolute inset-0 bg-radial from-primary/20 via-transparent to-transparent pointer-events-none" />

            {/* Logo */}
            <motion.img
              src="/logo.png"
              alt="Rizwan Manzoor"
              className="h-18 mb-4 relative z-10 brightness-0 invert"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />

            {/* Progress Container */}
            <div className="relative z-10 w-72">
              <div className="h-1.5 w-full bg-white/15 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-white"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ ease: "easeOut", duration: 0.4 }}
                />
              </div>

              {/* Progress Text */}
              <motion.p
                className="mt-6 text-sm tracking-[0.3em] text-white/80 text-center uppercase"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Loading {progress}%
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div
        className={`transition-opacity duration-700 ${
          loading ? "opacity-0" : "opacity-100"
        }`}
      >
        {children}
      </div>
    </>
  );
}
