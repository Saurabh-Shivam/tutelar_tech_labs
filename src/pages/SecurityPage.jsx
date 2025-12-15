import { AnimatePresence, motion } from "motion/react";
import { Navbar } from "../components/Navbar";
import { PageBackground } from "../components/PageBackground";
import { Footer } from "../components/Footer";
import { AboutSection } from "../components/AboutSection";
import { PartnersSection } from "../components/PartnersSection";
import { pagesData } from "../data/pagesData";
import { useEffect } from "react";
import { ScrollToTop } from "../components/ScrollToTop";

const gridVariants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const imageVariants = {
  initial: { scale: 0.8, opacity: 0, y: 10 },
  animate: {
    scale: 1,
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

export function SecurityPage({ pageKey }) {
  const data = pagesData[pageKey];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  if (!data) {
    return (
      <div className="min-h-screen bg-black text-white">
        <Navbar />
        <div className="pt-32 px-6 max-w-5xl mx-auto">
          <p className="text-xl text-gray-300">Content coming soon.</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="relative min-h-screen text-white overflow-hidden">
      <PageBackground />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-slate-950/14 to-black/45" />
      <Navbar />

      <motion.main
        className="relative max-w-6xl mx-auto px-6 pt-32 pb-20 space-y-12 z-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.div className="text-center space-y-4">
          <motion.p
            className="text-cyan-300 uppercase tracking-[0.25em] text-xs md:text-sm"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          >
            {data.subtitle}
          </motion.p>

          <motion.h1
            className="text-4xl md:text-5xl font-extrabold tracking-tight"
            initial={{ scale: 0.9, filter: "blur(6px)" }}
            animate={{
              scale: [0.9, 1.08, 1],
              filter: ["blur(6px)", "blur(2px)", "blur(0px)"],
            }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            {data.title}
          </motion.h1>
        </motion.div>

        <motion.section
          className="bg-white/5 border border-white/10 rounded-2xl p-8 shadow-lg shadow-cyan-500/10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
        >
          <div className="space-y-4 text-lg text-gray-200 leading-relaxed">
            {data.details.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </motion.section>

        <AnimatePresence>
          <motion.div
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            variants={gridVariants}
            initial="initial"
            animate="animate"
          >
            {data.images.map((image, idx) => (
              <motion.div
                key={image.alt}
                className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5"
                variants={imageVariants}
                whileHover={{
                  scale: 1.08,
                  boxShadow: "0 20px 50px rgba(34,211,238,0.2)",
                  filter: "saturate(1.05)",
                  opacity: 1,
                  zIndex: 10,
                }}
                whileTap={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 220, damping: 20 }}
                style={{ transformOrigin: "50% 50%" }}
              >
              <motion.img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="h-64 w-full object-cover"
                initial={{ scale: 1.02 }}
                animate={{ scale: [1.02, 0.98, 1] }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
              />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </motion.main>

      <section className="relative z-10">
        <PartnersSection />
      </section>

      <section className="relative z-10">
        <AboutSection />
      </section>

      <motion.div
        className="relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
      >
        <Footer />
      </motion.div>
      <ScrollToTop />
    </div>
  );
}
