import { motion } from "motion/react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { PageBackground } from "../components/PageBackground";
import { AboutSection } from "../components/AboutSection";
import { PartnersSection } from "../components/PartnersSection";
import { useEffect } from "react";
import { ScrollToTop } from "../components/ScrollToTop";

export function CareerPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="relative min-h-screen text-white overflow-hidden">
      <PageBackground />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-slate-950/14 to-black/45" />
      <Navbar />

      <ScrollToTop />

      <main className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-20 space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-6"
        >
          <motion.p
            className="text-cyan-300 uppercase tracking-[0.3em] text-xs md:text-sm"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          >
            Careers at Tutelar
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
            Build the future of cybersecurity with us
          </motion.h1>
          <motion.p
            className="text-lg text-gray-200 leading-relaxed max-w-3xl"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          >
            Join a team that blends deep domain expertise with relentless
            innovation. We’re always looking for engineers, analysts, and
            creators who want to ship secure, high-impact solutions for our
            customers worldwide.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid gap-6 md:grid-cols-3"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          {[
            {
              title: "Security Engineering",
              text: "Design and build defenses across network, cloud, and applications.",
            },
            {
              title: "Threat & SOC",
              text: "Hunt threats, respond to incidents, and operationalize detection.",
            },
            {
              title: "DevSecOps",
              text: "Embed security into CI/CD, automation, and runtime protection.",
            },
          ].map((role) => (
            <motion.div
              key={role.title}
              className="p-6 rounded-2xl border border-white/10 bg-white/5 shadow-lg shadow-cyan-500/10"
              whileHover={{ scale: 1.03 }}
            >
              <h3 className="text-xl font-semibold mb-2">{role.title}</h3>
              <p className="text-gray-200">{role.text}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6 shadow-lg shadow-cyan-500/10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.25 }}
        >
          <div>
            <h3 className="text-2xl font-semibold mb-2">
              We’d love to meet you
            </h3>
            <p className="text-gray-200">
              Share your profile or ask about open roles. We’ll reach out soon.
            </p>
          </div>
          <motion.a
            href="/#contact"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in touch
          </motion.a>
        </motion.div>
      </main>

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
    </div>
  );
}
