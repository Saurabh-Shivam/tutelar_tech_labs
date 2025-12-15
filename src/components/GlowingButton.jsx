import { motion } from 'motion/react';

export function GlowingButton({ 
  children, 
  variant = 'primary', 
  onClick,
  className = '' 
}) {
  const isPrimary = variant === 'primary';
  
  return (
    <motion.button
      onClick={onClick}
      className={`
        relative px-6 py-3 rounded-full font-semibold transition-all
        ${isPrimary ? 'bg-[#0ABCF9] text-black' : 'border border-[#0ABCF9] text-[#0ABCF9] bg-transparent'}
        hover:scale-105 active:scale-95
        ${className}
      `}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}

      {/* Glow effect layer */}
      <motion.span
        className="absolute inset-0 rounded-full blur-xl -z-10"
        style={{
          background: isPrimary 
            ? '#0ABCF9' 
            : '#0ABCF9',
        }}
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.button>
  );
}

