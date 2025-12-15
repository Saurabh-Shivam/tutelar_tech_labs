import { motion } from 'motion/react';
import { AnimatedSection } from './AnimatedSection';
import { Cpu, Server, Database } from 'lucide-react';

export function AboutSection() {
  return (
    <section id="about" className="section relative py-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#6A4DFB] opacity-20 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#00FFB4] opacity-20 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Text content */}
          <AnimatedSection>
            <p className="text-cyan-300 uppercase tracking-[0.3em] text-xs mb-3">
              Services Redefined
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              One Partner. End-to-End Cybersecurity.
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Tutelar Tech Labs, headquartered in Bangalore with a regional office in Madurai, was founded in 2022 to deliver specialized cybersecurity and network solutions. We secure enterprise environments through deep domain expertise, advanced technology integration, and a customer-centric approach.
            </p>

            <div className="space-y-8">
              <div>
                <h4 className="text-2xl font-semibold mb-2">What Sets Us Apart</h4>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Domain-Focused Expertise: We track evolving threats and regulatory needs across sectors.</li>
                  <li>Tailored Security Solutions: Architected to each client’s risk posture, infrastructure, and goals.</li>
                  <li>Trusted by OEMs and Clients: Strong partnerships with top-tier cybersecurity OEMs.</li>
                  <li>Global Delivery Model: Implementations and services delivered across geographies.</li>
                  <li>End-to-End Project Ownership: From assessment and PoC to deployment and post-sales support.</li>
                </ul>
              </div>

              <div>
                <h4 className="text-2xl font-semibold mb-2">Our Goal</h4>
                <p className="text-gray-300">
                  We act as a strategic partner—helping clients build resilient, compliant, and future-ready security ecosystems.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Right side - Animated icons */}
          <AnimatedSection>
            <div className="grid grid-cols-3 gap-10">
              {[Cpu, Server, Database].map((Icon, index) => (
                <motion.div
                  key={index}
                  className="flex justify-center items-center w-24 h-24 rounded-full bg-black border border-white/10 shadow-xl shadow-cyan-500/5 hover-lift"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <Icon className="w-10 h-10 text-cyan-400" />
                </motion.div>
              ))}
            </div>

            {/* Cyber radar animation */}
            <div className="mt-16 relative w-full h-64 bg-gradient-to-b from-[#0B0D17] to-[#090b11] border border-cyan-500/30 rounded-xl overflow-hidden shadow-2xl shadow-cyan-500/20">
              {/* Radar concentric circles */}
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

              {/* Center crosshair */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-1 h-full bg-cyan-400/20" />
                <div className="absolute w-full h-1 bg-cyan-400/20" />
              </div>

              {/* Pulsating center */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="w-8 h-8 rounded-full bg-cyan-400/60 blur-sm" />
                <div className="absolute w-4 h-4 rounded-full bg-cyan-400" />
              </motion.div>

              {/* Sweeping radar arc - more visible */}
              <motion.div
                className="absolute inset-0"
                style={{
                  background:
                    'conic-gradient(from 0deg, transparent 0deg, rgba(10,188,249,0.4) 30deg, rgba(10,188,249,0.6) 35deg, rgba(10,188,249,0.4) 40deg, transparent 50deg)',
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              />

              {/* Radar blips (targets) */}
              {[
                { angle: 45, distance: 30, delay: 0 },
                { angle: 120, distance: 50, delay: 0.5 },
                { angle: 200, distance: 40, delay: 1 },
                { angle: 280, distance: 60, delay: 1.5 },
              ].map((blip, idx) => {
                const x = 50 + Math.cos((blip.angle * Math.PI) / 180) * blip.distance;
                const y = 50 + Math.sin((blip.angle * Math.PI) / 180) * blip.distance;
                return (
                  <motion.div
                    key={idx}
                    className="absolute w-3 h-3 rounded-full bg-cyan-400"
                    style={{
                      left: `${x}%`,
                      top: `${y}%`,
                      transform: 'translate(-50%, -50%)',
                      boxShadow: '0 0 8px rgba(10,188,249,0.8), 0 0 16px rgba(10,188,249,0.4)',
                    }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                      opacity: [0, 1, 1, 0],
                      scale: [0, 1.2, 1, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: blip.delay,
                      ease: "easeInOut",
                    }}
                  />
                );
              })}

              {/* Range markers (top, right, bottom, left) */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 text-cyan-400/40 text-xs font-mono">N</div>
              <div className="absolute right-2 top-1/2 -translate-y-1/2 text-cyan-400/40 text-xs font-mono">E</div>
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-cyan-400/40 text-xs font-mono">S</div>
              <div className="absolute left-2 top-1/2 -translate-y-1/2 text-cyan-400/40 text-xs font-mono">W</div>

              {/* Soft grid overlay */}
              <motion.div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, rgba(10,188,249,0.08) 1px, transparent 1px), linear-gradient(rgba(10,188,249,0.08) 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
                animate={{
                  backgroundPosition: ["0px 0px", "40px 40px", "80px 0px", "0px 0px"],
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
