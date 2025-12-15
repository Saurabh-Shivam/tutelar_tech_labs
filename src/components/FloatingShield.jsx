import { motion } from 'motion/react';
import { Shield } from 'lucide-react';

// A subtle, looping shield that drifts across the background.
export function FloatingShield() {
  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-0 opacity-40 mix-blend-screen"
      style={{ willChange: 'transform', transform: 'translateZ(0)' }}
      initial={{ x: '-18%', y: '-6%', rotate: -4, scale: 1.08 }}
      animate={{ x: '14%', y: '16%', rotate: 4, scale: 1.04 }}
      transition={{ duration: 10, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
    >
      <motion.div
        className="absolute left-1/4 top-1/4"
        style={{ willChange: 'transform, opacity', transform: 'translateZ(0)' }}
        initial={{ opacity: 0.32, scale: 1.02 }}
        animate={{ opacity: [0.28, 0.42, 0.28], scale: [1.02, 1.12, 1.02] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      >
        <Shield className="w-[380px] h-[380px] text-cyan-200 drop-shadow-[0_0_44px_rgba(0,188,249,0.45)] blur-[0.2px]" />
      </motion.div>
    </motion.div>
  );
}
