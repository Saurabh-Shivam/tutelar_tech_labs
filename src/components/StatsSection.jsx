import { motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { AnimatedSection } from './AnimatedSection';

const stats = [
  { label: 'Threats Blocked', target: 500, suffix: 'K+' },
  { label: 'Clients Protected', target: 35, suffix: '+' },
  { label: 'Global Coverage', target: 15, suffix: '+ ' },
  {
  label: 'Support Score',
  target: 100,           // animates to 100
  display: '24/7',       // optional custom display if you want text instead of final number
  suffix: '%'
},

];

function StatCard({ label, target, suffix, delay = 0 }) {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            const duration = 1200; // ms
            const start = performance.now();
            const startVal = 0;

            const animate = (now) => {
              const progress = Math.min((now - start) / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
              const current = startVal + (target - startVal) * eased;
              setValue(current);
              if (progress < 1) requestAnimationFrame(animate);
            };

            requestAnimationFrame(animate);
          }
        });
      },
      { threshold: 0.35 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [target]);

  // Format number nicely
  const formatted =
    target % 1 === 0
      ? Math.round(value).toLocaleString()
      : value.toFixed(1);

  return (
    <motion.div
      ref={ref}
      className="p-8 dark:bg-[#0D0F1A] bg-white rounded-xl border dark:border-white/10 border-black/10 shadow-xl dark:shadow-cyan-500/5 shadow-black/10 hover-lift"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ scale: 1.03, y: -6 }}
      whileTap={{ scale: 0.97 }}
    >
      <motion.h3
        className="text-4xl font-bold text-cyan-400 mb-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: delay + 0.2 }}
      >
        {formatted}
        {suffix}
      </motion.h3>
      <p className="dark:text-gray-400 text-gray-700">{label}</p>
    </motion.div>
  );
}

export function StatsSection() {
  return (
    <section className="section py-20 dark:text-white text-black">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Our Impact in Numbers
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {stats.map((stat, index) => (
            <AnimatedSection key={stat.label} delay={index * 0.1}>
              <StatCard
                label={stat.label}
                target={stat.target}
                suffix={stat.suffix}
                delay={index * 0.1}
              />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
