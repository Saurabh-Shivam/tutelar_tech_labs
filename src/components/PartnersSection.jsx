import { motion } from 'motion/react';

export function PartnersSection() {
  const partners = [
    'Flipkart',
    'Swiggy',
    'Razorpay',
    'Hexaware',
    'Groww',
    'APCOPS',
    'Collabera',
    'Freshworks',
    'MPL',
    'AGS Health',
    'Agnee Infotech',
    'Vishwasamudra',
  ];

  // Duplicate partners for seamless loop
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section id="partnership" className="section py-20 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Trusted by Leading Organizations
        </h2>

        <div className="overflow-hidden">
          <motion.div
            className="flex gap-10 whitespace-nowrap"
            animate={{
              x: ['0%', '-50%'],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            {duplicatedPartners.map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0 px-8 py-4 rounded-lg bg-white/5 border border-[#0ABCF9]/20 backdrop-blur-sm"
              >
                <span className="text-gray-300 whitespace-nowrap text-lg">
                  {partner}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
