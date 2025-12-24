import { useState } from "react";
import { motion } from "motion/react";
import { AnimatedSection } from "./AnimatedSection";
import { Shield, Brain, Bot, Lock, Cpu, Gauge } from "lucide-react";

// Orbit labels placed around the circle
const orbitItems = [
  "Annual maintenance contract",
  "Design review ",
  "Best practices assessment reviews",
  "Resident engineer services",
  "Paloalto Implementation",
  "Bespoke Services",
];

// Inner ring segments
const coreSegments = [
  "Maintenance",
  "Planning",
  "Analysis",
  "Onsite Support",
  "Implementation",
  "Services On Demand",
];

// DETAILS (NEW)
const details = {
  "Annual maintenance contract": "Comprehensive upkeep and lifecycle support.",
  "Design review ": "Architecture validation and risk analysis.",
  "Best practices assessment reviews":
    "Security posture benchmarking and audits.",
  "Resident engineer services": "Onsite implementation and troubleshooting.",
  "Paloalto Implementation": "Deployment and tuning aligned to compliance.",
  "Bespoke Services": "Custom security engagements and solutions.",
};

// ICON MAPPING (NEW)
const iconFor = (label) => {
  if (label.includes("Bespoke")) return Brain;
  if (label.includes("Paloalto")) return Lock;
  if (label.includes("Resident")) return Bot;
  if (label.includes("Design")) return Cpu;
  return Gauge;
};

export function ServicesSection() {
  const [active, setActive] = useState(null);

  return (
    <section id="services" className="section services py-20 text-white pb-60">
      <div className="container max-w-6xl mx-auto px-6 flex flex-col items-center gap-60">
        <AnimatedSection>
          <div className="flex flex-col items-center text-center gap-3">
            <h2 className="text-4xl md:text-5xl font-bold">
              TTL Support Services
            </h2>
            <p className="section-sub text-gray-400 text-lg">
              Security-first engineering, managed services, and expert guidance.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.05}>
          <div className="relative w-full max-w-4xl aspect-square mx-auto flex items-center justify-center">
            {/* Outer pulsing glow */}
            <motion.div
              className="absolute inset-6 rounded-full bg-gradient-to-r from-[#0ABCF9]/10 via-transparent to-[#6A4DFB]/10 blur-3xl"
              animate={{
                opacity: [0.35, 0.6, 0.35],
                scale: [0.98, 1.03, 0.98],
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Animated orbit labels */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              animate={{ rotate: 360 }}
              transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
            >
              {orbitItems.map((label, idx) => {
                const angle = (360 / orbitItems.length) * idx;
                const radius = 200;
                const Icon = iconFor(label);

                return (
                  <div
                    key={label}
                    className="absolute"
                    style={{
                      transform: `rotate(${angle}deg) translate(${radius}px)`,
                    }}
                  >
                    <motion.button
                      onClick={() => setActive(label)}
                      className="flex items-center justify-center gap-2
                                 w-28 h-28 md:w-32 md:h-32
                                 rounded-full border border-cyan-400/40
                                 bg-white/5 backdrop-blur-sm
                                 shadow-lg shadow-cyan-500/20
                                 text-center text-sm md:text-base
                                 text-gray-100 px-3 leading-snug"
                      animate={{ rotate: [-angle, -angle - 360] }}
                      transition={{
                        duration: 26,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    >
                      <Icon className="w-12 h-5 text-cyan-400" />
                      <span>{label}</span>
                    </motion.button>
                  </div>
                );
              })}
            </motion.div>

            {/* Inner rotating ring (UNCHANGED) */}
            <motion.div
              className="absolute w-[68%] aspect-square rounded-full border border-white/10 bg-[#0F111D] shadow-xl shadow-cyan-500/10 overflow-hidden"
              animate={{ rotate: -360 }}
              transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
            >
              {coreSegments.map((seg, idx) => (
                <div
                  key={seg}
                  className="absolute inset-0 flex items-center justify-center hover-lift"
                  style={{
                    transform: `rotate(${
                      (360 / coreSegments.length) * idx
                    }deg)`,
                  }}
                >
                  <div className="w-[50%] origin-right border-l border-white/10 pl-4 text-lg font-semibold text-white">
                    {seg}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Center label → DETAILS ON CLICK */}
            <div className="relative z-10 flex flex-col items-center justify-center w-60 h-44 rounded-full bg-black border border-white/20 shadow-lg shadow-cyan-500/15 text-center px-4">
              {active ? (
                <>
                  {(() => {
                    const Icon = iconFor(active);
                    return <Icon className="w-10 h-10 text-cyan-400 mb-2" />;
                  })()}
                  <div className="text-sm font-semibold">{active}</div>
                  <div className="text-xs text-gray-400 mt-1">
                    {details[active]}
                  </div>
                </>
              ) : (
                <>
                  <div className="text-sm uppercase tracking-[0.2em] text-gray-400">
                    Services
                  </div>
                  <div className="text-xl font-bold">On Demand</div>
                </>
              )}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
