import { motion } from 'motion/react';
import { Lock } from 'lucide-react';
import { useMemo } from 'react';

// Soft, low-opacity floating locks to complement the shield.
export function FloatingLocks() {
  const locks = useMemo(() => {
    return Array.from({ length: 6 }, (_, i) => ({
      id: i,
      size: 110 + Math.random() * 40,
      top: Math.random() * 70 + 10,
      left: Math.random() * 80 + 5,
      delay: Math.random() * 3,
      duration: 10 + Math.random() * 6,
    }));
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10"
      style={{ contain: 'layout paint', backfaceVisibility: 'hidden', transform: 'translateZ(0)' }}
    >
      {locks.map((lock) => (
        <motion.div
          key={lock.id}
          className="absolute text-cyan-200/50"
          style={{
            top: `${lock.top}%`,
            left: `${lock.left}%`,
            width: lock.size,
            height: lock.size,
            willChange: 'transform, opacity',
            transform: 'translateZ(0)',
          }}
          initial={{ opacity: 0.18, scale: 0.9, y: 8 }}
          animate={{ opacity: [0.12, 0.22, 0.12], scale: [0.9, 1.05, 0.92], y: [8, -6, 8] }}
          transition={{
            duration: lock.duration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: lock.delay,
          }}
        >
          <Lock className="w-full h-full drop-shadow-[0_0_18px_rgba(0,188,249,0.26)]" />
        </motion.div>
      ))}
    </div>
  );
}
