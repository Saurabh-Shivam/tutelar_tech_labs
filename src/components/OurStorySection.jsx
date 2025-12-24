import { motion } from 'framer-motion';
import { useState } from 'react';
import { AnimatedSection } from './AnimatedSection';

const tabs = [
  {
    id: 'who',
    label: 'Who We Are',
    content: 'We are a team of experienced professionals passionate about cybersecurity and digital transformation. Our mission is to help companies transform IT services safe and secure.',
  },
  {
    id: 'mission',
    label: 'Our Mission',
    content: 'Trusted advisor to our customers and Partner of choice for our OEMs.',
  },
  {
    id: 'vision',
    label: 'Our Vision',
    content: 'To be a Leader in Cybersecurity and Digital Transformation Delivering Trust at Scale.',
  },
];

export function OurStorySection() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <section id="our-story" className="section py-20 dark:text-white text-black">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Our Story
          </h2>
          <p className="text-center dark:text-gray-400 text-gray-700 max-w-3xl mx-auto mb-12">
            Discover our journey, mission, and vision that drive our commitment to cybersecurity.
          </p>
        </AnimatedSection>

        <div className="mt-12">
          <AnimatedSection>
            <div className="flex flex-col md:flex-row gap-10">
              {/* Tabs */}
              <div className="flex md:flex-col gap-4 md:w-1/4 w-full">
                {tabs.map((tab) => (
                  <motion.button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`
                      px-6 py-3 rounded-lg font-semibold transition-all border
                      ${activeTab === tab.id 
                        ? 'bg-cyan-500 text-black border-cyan-500' 
                        : 'dark:border-gray-700 border-black/20 dark:text-gray-300 text-gray-700 hover:border-cyan-400 hover:text-cyan-600 dark:hover:text-cyan-400'
                      }
                    `}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{ willChange: 'transform', transform: 'translateZ(0)' }}
                  >
                    {tab.label}
                  </motion.button>
                ))}
              </div>

              {/* Content */}
              <div className="flex-1">
                {tabs.map((tab) => (
                  <motion.div
                    key={tab.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: activeTab === tab.id ? 1 : 0,
                      y: activeTab === tab.id ? 0 : 20,
                    }}
                    transition={{ duration: 0.4 }}
                    className={activeTab === tab.id ? 'block' : 'hidden'}
                    style={{ willChange: 'transform, opacity', transform: 'translateZ(0)' }}
                  >
                    <div className="dark:bg-[#0D0F1A] bg-white p-8 rounded-xl border dark:border-white/10 border-black/10 shadow-xl">
                      <motion.p
                        key={activeTab}
                        initial={{ scale: 0.3, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{
                          duration: 0.6,
                          ease: [0.25, 0.1, 0.25, 1],
                        }}
                        className="dark:text-gray-300 text-gray-700 leading-relaxed text-lg"
                        style={{ willChange: 'transform, opacity', transform: 'translateZ(0)' }}
                      >
                        {tab.content}
                      </motion.p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
