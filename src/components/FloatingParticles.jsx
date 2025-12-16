import { motion } from 'motion/react';
import { useMemo } from 'react';

export function FloatingParticles({ count = 80 }) {
  const particles = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 12 + 8,
      delay: Math.random() * 0,
      driftX: Math.random() * 20 - 10, // Precomputed x drift value
    }));
  }, [count]);

  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      style={{ contain: 'layout paint', backfaceVisibility: 'hidden', transform: 'translateZ(0)' }}
    >
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute bg-white/35 rounded-full"
          style={{
            width: particle.size,
            height: particle.size,
            top: `${particle.y}%`,
            left: `${particle.x}%`,
            willChange: 'transform, opacity',
            transform: 'translateZ(0)',
          }}
          animate={{
            y: [0, -16, 0],
            x: [particle.driftX, 0],
            opacity: [0.18, 0.4, 0.18],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
