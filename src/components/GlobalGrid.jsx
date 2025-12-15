import { motion } from 'motion/react';
import { useMemo } from 'react';

// A subtle animated grid/dots overlay applied site-wide.
export function GlobalGrid() {
  const dots = useMemo(() => {
    return Array.from({ length: 36 }, (_, i) => ({
      id: i,
      size: Math.random() * 4 + 2,
      top: Math.random() * 100,
      left: Math.random() * 100,
      delay: Math.random() * 3,
      duration: 6 + Math.random() * 4,
    }));
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 opacity-35">
      {/* Grid lines + tiny dots */}
      <motion.div
        className="absolute inset-0 mix-blend-screen"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px)',
          backgroundSize: '120px 120px, 56px 56px, 56px 56px',
          willChange: 'background-position',
          transform: 'translateZ(0)',
        }}
        animate={{
          backgroundPosition: ['0px 0px,0px 0px,0px 0px', '40px 60px,28px 28px,56px 56px'],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
      />

      {/* Floating cyan dots across all sections */}
      <motion.div
        className="absolute inset-0"
        style={{ willChange: 'opacity', transform: 'translateZ(0)' }}
        animate={{ opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      >
        {dots.map((dot) => (
          <motion.span
            key={dot.id}
            className="absolute rounded-full bg-[#0ABCF9]"
            style={{
              width: dot.size,
              height: dot.size,
              top: `${dot.top}%`,
              left: `${dot.left}%`,
              boxShadow: '0 0 14px #0ABCF9, 0 0 20px rgba(0,188,249,0.45)',
              willChange: 'transform, opacity',
              transform: 'translateZ(0)',
            }}
            animate={{
              y: [0, -10, 0],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: dot.duration,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: dot.delay,
            }}
          />
        ))}
      </motion.div>
    </div>
  );
}

