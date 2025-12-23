import { motion } from 'framer-motion';
import { useMemo } from "react";

export function PageBackground() {
  const dots = useMemo(() => {
    return Array.from({ length: 70 }, (_, idx) => ({
      id: idx,
      top: (idx * 60) % 720,
      left: (idx * 55) % 1280,
      duration: 3.6 + (idx % 2),
      delay: idx * 0.12,
    }));
  }, []);

  const comets = useMemo(() => {
    return Array.from({ length: 6 }, (_, idx) => ({
      id: idx,
      top: (idx * 110 + 40) % 700,
      left: -160 + idx * 40,
      rotate: -8 + idx * 1.5,
      duration: 5 + idx * 0.6,
      delay: idx * 0.9,
    }));
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-gradient-to-b from-[#052133] via-[#082f42] to-[#02060a]"
      style={{ contain: "layout paint", backfaceVisibility: "hidden", transform: "translateZ(0)" }}
    >
      {/* Soft glow blobs */}
      <motion.div
        className="absolute w-80 h-80 bg-cyan-300/55 blur-[80px] left-10 top-16 rounded-full"
        style={{ willChange: "transform", transform: "translateZ(0)" }}
        animate={{ x: [0, 36, -26, 0], y: [0, -26, 14, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-96 h-96 bg-blue-300/50 blur-[92px] right-[-40px] top-32 rounded-full"
        style={{ willChange: "transform", transform: "translateZ(0)" }}
        animate={{ x: [0, -30, 16, 0], y: [0, 32, -18, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
          className="absolute w-72 h-72 bg-emerald-300/40 blur-[68px] left-1/2 bottom-0 rounded-full"
        style={{ willChange: "transform", transform: "translateZ(0)" }}
        animate={{ x: [0, 22, -28, 0], y: [0, -38, 24, 0] }}
        transition={{ duration: 19, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating dots */}
      {dots.map((dot) => (
        <motion.div
          key={`dot-${dot.id}`}
          className="absolute w-1 h-1 bg-cyan-100 rounded-full"
          style={{
            top: `${dot.top}px`,
            left: `${dot.left}px`,
            boxShadow: "0 0 8px rgba(67,217,255,0.55)",
            willChange: "transform, opacity",
            transform: "translateZ(0)",
          }}
          animate={{
            opacity: [0.25, 0.9, 0.35],
            scale: [0.95, 1.5, 1],
            y: [0, -10, 0],
          }}
          transition={{
            duration: dot.duration,
            repeat: Infinity,
            delay: dot.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Passing comets */}
      {comets.map((comet) => (
        <motion.div
          key={`comet-${comet.id}`}
          className="absolute h-[3px] w-48 bg-gradient-to-r from-transparent via-cyan-200 to-white/90 rounded-full blur-[1px]"
          style={{
            top: `${comet.top}px`,
            left: `${comet.left}px`,
            rotate: `${comet.rotate}deg`,
            willChange: "transform, opacity",
            transform: "translateZ(0)",
          }}
          animate={{
            x: [0, 1440],
            opacity: [0, 1, 0],
            scaleX: [0.9, 1.15, 1.0],
          }}
          transition={{
            duration: comet.duration + 5,
            repeat: Infinity,
            delay: comet.delay,
            ease: "linear",
          }}
        />
      ))}

      {/* Central encryption lock */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="relative flex items-center justify-center"
          style={{
            willChange: "transform, opacity",
            transform: "translateZ(0)",
          }}
          initial={{ scale: 0.9, opacity: 0.8 }}
          animate={{ scale: [0.9, 1.05, 1], opacity: [0.85, 1, 0.9] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.div
            className="absolute w-80 h-80 rounded-full border border-cyan-300/40 shadow-[0_0_28px_rgba(34,211,238,0.22)]"
            style={{ willChange: "transform", transform: "translateZ(0)" }}
            animate={{ rotate: 360 }}
            transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute w-56 h-56 rounded-full border border-white/15 bg-white/5 backdrop-blur-sm"
            style={{ willChange: "transform", transform: "translateZ(0)" }}
            animate={{ rotate: -360 }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute w-96 h-96 rounded-full bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.12),transparent_65%)] blur-[90px]"
            style={{
              willChange: "transform, opacity",
              transform: "translateZ(0)",
            }}
            animate={{
              scale: [0.95, 1.08, 0.98, 1],
              opacity: [0.4, 0.7, 0.5, 0.65],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            className="w-24 h-24 text-cyan-200 drop-shadow-[0_0_12px_rgba(34,211,238,0.45)]"
            style={{ willChange: "transform", transform: "translateZ(0)" }}
            initial={{ scale: 0.92 }}
            animate={{ scale: [0.92, 1.04, 0.98], rotate: [0, 3, -3, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="14" y="28" width="36" height="26" rx="6" ry="6" />
            <path d="M22 28v-6a10 10 0 0 1 20 0v6" />
            <circle cx="32" cy="41" r="3" />
            <path d="M32 44v6" />
          </motion.svg>
        </motion.div>
      </div>

      {/* Nebula haze layers */}
      <motion.div
        className="absolute w-[900px] h-[900px] bg-[radial-gradient(circle_at_center,rgba(67,217,255,0.14),transparent_65%)] blur-[120px] left-[-200px] top-[120px]"
        style={{ willChange: "transform, opacity", transform: "translateZ(0)" }}
        animate={{ scale: [1, 1.08, 0.96, 1], opacity: [0.4, 0.65, 0.45, 0.6] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-[780px] h-[780px] bg-[radial-gradient(circle_at_center,rgba(120,255,214,0.12),transparent_65%)] blur-[110px] right-[-140px] top-[200px]"
        style={{ willChange: "transform, opacity", transform: "translateZ(0)" }}
        animate={{
          scale: [1.02, 0.94, 1.06, 1],
          opacity: [0.35, 0.58, 0.42, 0.55],
        }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-[640px] h-[640px] bg-[radial-gradient(circle_at_center,rgba(46,170,255,0.15),transparent_70%)] blur-[100px] left-[30%] bottom-[-120px]"
        style={{ willChange: "transform, opacity", transform: "translateZ(0)" }}
        animate={{
          scale: [0.96, 1.07, 0.98, 1],
          opacity: [0.38, 0.62, 0.4, 0.58],
        }}
        transition={{ duration: 17, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
