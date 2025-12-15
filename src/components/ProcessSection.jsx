import { motion } from 'motion/react';
import { Search, BarChart3, Shield, Eye } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';

const steps = [
  {
    icon: <Search className="w-10 h-10 text-cyan-400" />,
    title: 'Discovery',
    description: 'Comprehensive assessment of your digital infrastructure and security vulnerabilities',
  },
  {
    icon: <BarChart3 className="w-10 h-10 text-cyan-400" />,
    title: 'Analysis',
    description: 'Deep dive into threat patterns, risk factors, and security gaps',
  },
  {
    icon: <Shield className="w-10 h-10 text-cyan-400" />,
    title: 'Protection',
    description: 'Deploying robust security solutions to safeguard your digital ecosystem',
  },
  {
    icon: <Eye className="w-10 h-10 text-cyan-400" />,
    title: 'Monitoring',
    description: 'Continuous monitoring and proactive threat detection for total peace of mind',
  },
];

export function ProcessSection() {
  return (
    <section id="process" className="section py-20 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Our Process
          </h2>
          <p className="text-center text-gray-400 max-w-3xl mx-auto mb-12">
            A streamlined and effective approach to securing your organization.
          </p>
        </AnimatedSection>

        <div className="relative">
          {/* Timeline Vertical Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full border-l border-white/10"></div>

          <div className="grid md:grid-cols-2 gap-12 mt-12">
            {steps.map((step, index) => (
              <AnimatedSection key={index} delay={index * 0.2}>
                <motion.div
                  className="relative p-8 rounded-xl bg-black border border-white/10 hover:border-cyan-500/40 hover:shadow-xl hover:shadow-cyan-500/10 transition-all"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  {/* Connector Dot */}
                  <div
                    className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-cyan-500"
                    style={{ top: '-1.5rem' }}
                  ></div>

                  {/* Content */}
                  <div className="flex flex-col gap-4">
                    <div className="text-cyan-500">{step.icon}</div>
                    <h3 className="text-2xl font-semibold">{step.title}</h3>
                    <p className="text-gray-400">{step.description}</p>
                  </div>

                  {/* Arrow Animation */}
                  {index < steps.length - 1 && (
                    <motion.div
                      className="absolute bottom-4 right-4"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-6 h-6 text-cyan-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14m-7-7l7 7-7 7" />
                        </svg>
                      </motion.div>
                    </motion.div>
                  )}
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
