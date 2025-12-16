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
    <section id="partnership" className="section py-20 dark:text-white text-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
            Our Partners
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 items-center justify-items-center">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="px-8 py-6 rounded-lg dark:bg-white/5 bg-black/5 border border-[#0ABCF9]/20 backdrop-blur-sm w-full flex items-center justify-center"
            >
              <img
                src="data:image/png;base64,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"
                alt="Palo Alto Networks"
                className="h-16 w-auto object-contain"
                loading="lazy"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="px-8 py-6 rounded-lg dark:bg-white/5 bg-black/5 border border-[#0ABCF9]/20 backdrop-blur-sm w-full flex items-center justify-center"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg"
                alt="AWS"
                className="h-16 w-auto object-contain"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
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
                className="flex-shrink-0 px-8 py-4 rounded-lg dark:bg-white/5 bg-black/5 border border-[#0ABCF9]/20 backdrop-blur-sm"
              >
                <span className="dark:text-gray-300 text-gray-700 whitespace-nowrap text-lg">
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
