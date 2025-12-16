import { motion } from "motion/react";
import { AnimatedSection } from "./AnimatedSection";
import { Cpu, Server, Database, CheckCircle2 } from "lucide-react";

export function AboutSection() {
  const differentiators = [
    "Domain-Focused Expertise with continuous tracking of evolving threats and compliance needs.",
    "Tailored Security Solutions aligned to each client’s risk posture, infrastructure, and business goals.",
    "Trusted by OEMs and Enterprises through strong partnerships with leading cybersecurity vendors.",
    "Global Delivery Model supporting multi-region implementations and managed services.",
    "End-to-End Ownership from assessment and PoC to deployment and post-sales support.",
  ];

  return (
    <section id="about" className="relative py-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#6A4DFB] opacity-20 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#00FFB4] opacity-20 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Text */}
          <AnimatedSection>
            <p className="text-cyan-300 uppercase tracking-[0.35em] text-xs mb-4">
              Services Redefined
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              One Partner.
              <span className="block text-cyan-400 mt-2">
                End-to-End Cybersecurity.
              </span>
            </h2>

            <p className="dark:text-gray-300 text-gray-800 text-lg leading-relaxed max-w-xl mb-12">
              Tutelar Tech Labs, headquartered in Bangalore with a regional office
              in Madurai, was founded in 2022 to deliver specialized cybersecurity
              and network solutions. We secure enterprise environments through
              deep domain expertise, advanced technology integration, and a
              customer-centric approach.
            </p>

            {/* What sets us apart */}
            <div className="mb-14">
              <h4 className="text-2xl font-semibold mb-6">
                What Sets Us Apart
              </h4>

              <div className="space-y-5">
                {differentiators.map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-xl dark:bg-white/5 bg-black/5 dark:border-white/10 border-black/10 hover:border-cyan-400/40 transition-colors"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <CheckCircle2 className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <p className="dark:text-gray-300 text-gray-900 leading-relaxed">
                      {item}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Goal */}
            <div className="max-w-xl">
              <h4 className="text-2xl font-semibold mb-3">Our Goal</h4>
              <p className="dark:text-gray-300 text-gray-900 leading-relaxed">
                We act as a strategic partner, helping organizations build
                resilient, compliant, and future-ready security ecosystems that
                evolve with their business.
              </p>
            </div>
          </AnimatedSection>

          {/* Right side - Visuals */}
          <AnimatedSection>
            <div className="grid grid-cols-3 gap-10 mb-16">
              {[Cpu, Server, Database].map((Icon, index) => (
                <motion.div
                  key={index}
                  className="flex justify-center items-center w-24 h-24 rounded-full dark:bg-black bg-white dark:border-white/10 border-black/10 shadow-xl dark:shadow-cyan-500/10 shadow-black/10"
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <Icon className="w-10 h-10 text-cyan-400" />
                </motion.div>
              ))}
            </div>

            {/* Radar */}
            <div className="relative w-full h-64 dark:bg-gradient-to-b dark:from-[#0B0D17] dark:to-[#090b11] bg-gradient-to-b from-white to-slate-100 border border-cyan-500/30 rounded-xl overflow-hidden shadow-2xl dark:shadow-cyan-500/20 shadow-black/10">
              {/* Rings */}
              <div className="absolute inset-0 flex items-center justify-center">
                {[1, 2, 3, 4].map((ring) => (
                  <div
                    key={ring}
                    className="absolute rounded-full border border-cyan-400/30"
                    style={{
                      width: `${ring * 25}%`,
                      height: `${ring * 25}%`,
                    }}
                  />
                ))}
              </div>

              {/* Crosshair */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-px h-full bg-cyan-400/20" />
                <div className="absolute w-full h-px bg-cyan-400/20" />
              </div>

              {/* Pulse */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="w-8 h-8 rounded-full bg-cyan-400/60 blur-sm" />
                <div className="absolute w-4 h-4 rounded-full bg-cyan-400" />
              </motion.div>

              {/* Sweep */}
              <motion.div
                className="absolute inset-0"
                style={{
                  background:
                    "conic-gradient(from 0deg, transparent 0deg, rgba(10,188,249,0.5) 30deg, rgba(10,188,249,0.7) 35deg, rgba(10,188,249,0.5) 40deg, transparent 50deg)",
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
