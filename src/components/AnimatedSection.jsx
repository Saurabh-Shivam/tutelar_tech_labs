import { motion } from 'motion/react';
import { useRef } from 'react';

export function AnimatedSection({ children, className = '', delay = 0 }) {
  const ref = useRef(null);
  // Stable random offset for "jumbled" entrance.
  const randomOffset = useRef(null);
  if (!randomOffset.current) {
    const options = [
      { x: -60, y: 20 },
      { x: 60, y: 20 },
      { x: 0, y: 60 },
      { x: -40, y: -20 },
      { x: 40, y: -20 },
    ];
    randomOffset.current = options[Math.floor(Math.random() * options.length)];
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: randomOffset.current.x, y: randomOffset.current.y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ amount: 0.2, margin: '-10% 0px' }}
      transition={{ duration: 0.8, delay, ease: [0.25, 0.1, 0.25, 1] }}
      style={{ willChange: 'transform, opacity', transform: 'translateZ(0)' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
