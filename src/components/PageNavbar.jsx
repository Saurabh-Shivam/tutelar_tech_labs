import { motion } from 'motion/react';
import { Shield } from 'lucide-react';

export function PageNavbar() {
  return (
    <motion.header
      className="fixed top-0 left-0 w-full z-40 bg-black/80 backdrop-blur-xl border-b border-white/10"
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <motion.a
          href="/"
          className="flex items-center gap-2 cursor-pointer"
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Shield className="w-7 h-7 text-cyan-400" />
          <span className="text-lg md:text-xl font-semibold">Tutelar Tech Labs</span>
        </motion.a>

        <motion.a
          href="/"
          className="text-sm md:text-base text-gray-200 hover:text-cyan-400 transition-colors"
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Home
        </motion.a>
      </div>
    </motion.header>
  );
}

