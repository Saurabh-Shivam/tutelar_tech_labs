import { motion } from "framer-motion";
import { FloatingParticles } from "./FloatingParticles";
import { GlowingButton } from "./GlowingButton";
import { Shield, Lock, Zap } from "lucide-react";
import { useMemo } from "react";

export function HeroSection() {
  const randomOffset = useMemo(() => {
    const options = [
      { x: -80, y: 30 },
      { x: 80, y: 30 },
      { x: -50, y: -30 },
      { x: 50, y: -30 },
      { x: 0, y: 80 },
    ];
    return options[Math.floor(Math.random() * options.length)];
  }, []);

  const headingWords = useMemo(() => {
    const words = ["Security", "Engineered", "for", "Modern", "Enterprises"];

    const offsets = [
      { x: -50, y: 18 },
      { x: 30, y: -30 },
      { x: 20, y: 26 },
      { x: -20, y: -22 },
      { x: 40, y: 12 },
      { x: -12, y: 32 },
    ];
    return words.map((word, i) => ({
      word,
      offset: offsets[i % offsets.length],
      delay: 0.12 * i,
    }));
  }, []);

  const cyberNodes = useMemo(() => {
    return Array.from({ length: 14 }, (_, i) => ({
      id: i,
      size: Math.random() * 6 + 4,
      top: Math.random() * 100,
      left: Math.random() * 100,
      duration: 4 + Math.random() * 3,
      delay: Math.random() * 2,
    }));
  }, []);

  return (
    <section
      id="home"
      className="section relative min-h-[110vh] flex items-center justify-center overflow-hidden bg-[linear-gradient(180deg,rgba(255,255,255,0.95)_0%,rgba(245,245,245,0.96)_100%)] dark:bg-[linear-gradient(180deg,rgba(8,10,20,0.85)_0%,rgba(6,8,14,0.88)_100%)]"
    >
      {/* Background gradients */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#0ABCF9] opacity-20 blur-[72px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#6A4DFB] opacity-20 blur-[72px] rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#00FFB4] opacity-10 blur-[64px] rounded-full" />
      </div>

      {/* Local hero grid to ensure visibility on first section */}
      <motion.div
        className="pointer-events-none absolute inset-0 mix-blend-screen dark:opacity-25 opacity-15"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "120px 120px, 56px 56px, 56px 56px",
          willChange: "background-position",
          transform: "translateZ(0)",
          contain: "layout paint",
        }}
        animate={{
          backgroundPosition: [
            "0px 0px,0px 0px,0px 0px",
            "32px 48px,22px 22px,44px 44px",
          ],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />

      {/* Scanning aurora */}
      <motion.div
        className="pointer-events-none absolute inset-x-0 top-1/3 h-44 bg-gradient-to-r from-transparent via-white/18 to-transparent blur-xl mix-blend-screen"
        style={{
          willChange: "transform",
          transform: "translateZ(0)",
          contain: "layout paint",
        }}
        animate={{ x: ["-20%", "120%"] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating cyber nodes */}
      <motion.div
        className="pointer-events-none absolute inset-0"
        style={{ willChange: "opacity", transform: "translateZ(0)" }}
        animate={{ opacity: [0.35, 0.7, 0.35] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        {cyberNodes.map((node) => (
          <motion.span
            key={node.id}
            className="absolute rounded-full bg-[#0ABCF9]"
            style={{
              width: node.size,
              height: node.size,
              top: `${node.top}%`,
              left: `${node.left}%`,
              boxShadow: "0 0 8px #0ABCF9, 0 0 12px rgba(255,255,255,0.32)",
              willChange: "transform, opacity",
              transform: "translateZ(0)",
            }}
            animate={{
              y: [0, -8, 0],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: node.duration + 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: node.delay,
            }}
          />
        ))}
      </motion.div>

      <FloatingParticles count={40} />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-16 md:pt-24">
        <motion.div
          style={{
            willChange: "transform, opacity",
            transform: "translateZ(0)",
          }}
          initial={{
            opacity: 0,
            x: randomOffset.x,
            y: randomOffset.y,
            rotate: -2,
          }}
          animate={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
          transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 flex flex-wrap justify-center gap-2">
            {headingWords.map(({ word, offset, delay }) => (
              <motion.span
                key={word + delay}
                style={{
                  willChange: "transform, opacity",
                  transform: "translateZ(0)",
                  display: "inline-block",
                }}
                initial={{ opacity: 0, x: offset.x, y: offset.y, rotate: -2 }}
                animate={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
                transition={{
                  duration: 1.1,
                  ease: [0.22, 0.12, 0.18, 1],
                  delay,
                }}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <p className="text-lg md:text-xl text-gray-500 mb-10">
            Protecting your digital infrastructure with AI-powered security,
            expert monitoring, and enterprise-level solutions.
          </p>

          <div className="flex justify-center gap-6">
            <GlowingButton
              onClick={() => {
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Get Started
            </GlowingButton>
            <GlowingButton
              variant="outline"
              onClick={() => {
                document
                  .getElementById("ttl-support")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Learn More
            </GlowingButton>
          </div>
        </motion.div>

        {/* Feature Icons */}
        <div className="flex justify-center gap-12 mt-20 mb-24">
          <motion.div
            className="flex flex-col items-center gap-2 relative z-10"
            style={{
              willChange: "transform, opacity",
              transform: "translateZ(0)",
            }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -6, scale: 1.12 }}
            transition={{ type: "spring", stiffness: 240, damping: 14 }}
          >
            <Shield className="w-10 h-10 text-[#0ABCF9]" />
            <span className="text-sm text-gray-400">Protection</span>
          </motion.div>

          <motion.div
            className="flex flex-col items-center gap-2 relative z-10"
            style={{
              willChange: "transform, opacity",
              transform: "translateZ(0)",
            }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            whileHover={{ y: -6, scale: 1.12 }}
            whileTap={{ scale: 0.95 }}
          >
            <Lock className="w-10 h-10 text-[#6A4DFB]" />
            <span className="text-sm text-gray-400">Security</span>
          </motion.div>

          <motion.div
            className="flex flex-col items-center gap-2 relative z-10"
            style={{
              willChange: "transform, opacity",
              transform: "translateZ(0)",
            }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            whileHover={{ y: -6, scale: 1.12 }}
            whileTap={{ scale: 0.95 }}
          >
            <Zap className="w-10 h-10 text-[#00FFB4]" />
            <span className="text-sm text-gray-400">Speed</span>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 pointer-events-none"
        style={{ willChange: "transform", transform: "translateZ(0)" }}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-[#0ABCF9] rounded-full flex justify-center pt-2">
          <motion.div
            className="w-1.5 h-1.5 bg-[#0ABCF9] rounded-full"
            style={{ willChange: "transform", transform: "translateZ(0)" }}
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
