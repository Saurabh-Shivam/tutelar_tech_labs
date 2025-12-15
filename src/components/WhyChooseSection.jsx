import { motion } from 'motion/react';
import { Check, Zap, Globe, Users } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';

const features = [
  {
    icon: <Check className="w-10 h-10 text-cyan-400" />,
    title: '99.9% Uptime Guarantee',
    description: 'Uninterrupted protection with industry-leading reliability',
  },
  {
    icon: <Zap className="w-10 h-10 text-cyan-400" />,
    title: 'Real-Time Threat Response',
    description: 'Instant detection and mitigation of security threats',
  },
  {
    icon: <Globe className="w-10 h-10 text-cyan-400" />,
    title: 'Global Cyber Expertise',
    description: 'Experienced security specialists from around the world',
  },
  {
    icon: <Users className="w-10 h-10 text-cyan-400" />,
    title: 'Customer-Centric Approach',
    description: 'We work closely with clients to secure their digital assets',
  },
];

export function WhyChooseSection() {
  return (
    <section id="why-choose-us" className="section py-20 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Why Choose Us
          </h2>
          <p className="text-center text-gray-400 max-w-3xl mx-auto mb-12">
            We deliver high-performance cybersecurity solutions backed by cutting-edge technology and world-class expertise.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-4 gap-10 mt-12">
          {features.map((feature, index) => (
            <AnimatedSection key={index} delay={index * 0.2}>
              <motion.div
                className="p-8 rounded-xl bg-[#0D0F1A] border border-white/10 hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/15 transition-all"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                whileHover={{ scale: 1.06, y: -10, rotate: -1.5 }}
                whileTap={{ scale: 0.97 }}
              >
                <motion.div
                  className="mb-4 inline-flex items-center justify-center"
                  whileHover={{ y: -8, scale: 1.14, rotate: -5 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 16 }}
                >
                  {feature.icon}
                </motion.div>

                <h4 className="text-xl mb-2 text-white">
                  {feature.title}
                </h4>
                <p className="text-gray-400">
                  {feature.description}
                </p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
