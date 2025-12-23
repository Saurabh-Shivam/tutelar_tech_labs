import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function MatrixRain() {
  const [columns, setColumns] = useState([]);

  useEffect(() => {
    const updateColumns = () => {
      const columnCount = Math.min(36, Math.floor(window.innerWidth / 24));
      const newColumns = Array.from({ length: columnCount }, (_, i) => ({
        id: i,
        delay: Math.random() * 2,
        speed: 0.6 + Math.random() * 0.6,
        chars: Array.from({ length: 18 }, () => 
          Math.random() > 0.5 ? '0' : '1'
        ),
      }));
      setColumns(newColumns);
    };

    updateColumns();
    window.addEventListener('resize', updateColumns);
    return () => window.removeEventListener('resize', updateColumns);
  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden z-0"
      style={{ contain: 'layout paint', backfaceVisibility: 'hidden', transform: 'translateZ(0)' }}
    >
      {columns.map((column) => (
        <motion.div
          key={column.id}
          className="absolute top-0 text-cyan-400/35 text-xs md:text-sm font-mono"
          style={{
            left: `${(column.id * 100) / columns.length}%`,
            willChange: 'transform',
            transform: 'translateZ(0)',
          }}
          initial={{ y: '-100vh' }}
          animate={{ y: '200vh' }}
          transition={{
            duration: 12 / column.speed,
            repeat: Infinity,
            delay: column.delay,
            ease: 'linear',
          }}
        >
          {column.chars.map((char, idx) => (
            <div
              key={idx}
              className="mb-1"
              style={{
                opacity: 1.3 - idx * 0.05,
                textShadow: '0 0 1px rgba(10, 188, 249, 0.35)',
              }}
            >
              {char}
            </div>
          ))}
        </motion.div>
      ))}
    </div>
  );
}
