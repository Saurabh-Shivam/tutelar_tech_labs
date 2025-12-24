import { motion } from 'motion/react';

import flipkartLogo from '../images/flipkart.png';
import razorpayLogo from '../images/Razorpay.png';
import hexawareLogo from '../images/Hexaware.png';
import growwLogo from '../images/groww.jpg';
import apcopsLogo from '../images/apcops.png';
import collaberaLogo from '../images/collabera.png';
import swiggyLogo from '../images/swiggy.png';
import freshworksLogo from '../images/Freshworks.png';
import mplLogo from '../images/mpl.png';
import f5Logo from '../images/F5.png';
import vishwasamudraLogo from '../images/Vishwasamudra.png';
import paloAltoLogo from '../images/palo alto.png';
import awsLogo from '../images/aws.png';

export function PartnersSection() {
  const partners = [
    { name: 'Flipkart', logo: flipkartLogo },
    { name: 'Swiggy', logo: swiggyLogo },
    { name: 'Razorpay', logo: razorpayLogo },
    { name: 'Hexaware', logo: hexawareLogo },
    { name: 'Groww', logo: growwLogo },
    { name: 'APCOPS', logo: apcopsLogo },
    { name: 'Collabera', logo: collaberaLogo },
    { name: 'Freshworks', logo: freshworksLogo },
    { name: 'MPL', logo: mplLogo },
    // { name: 'F5', logo: f5Logo },
    // { name: 'Agnee Infotech', logo: 'https://ui-avatars.com/api/?name=Agnee+Infotech&background=0ABCF9&color=fff' },
    { name: 'Vishwasamudra', logo: vishwasamudraLogo },
  ];

  // Duplicate partners for seamless loop
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section id="partnership" className="section py-20 dark:text-white text-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 dark:text-white text-black">
            Our Partners
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 items-center justify-items-center">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="p-2 rounded-lg bg-gray-50 border border-[#0ABCF9]/20 w-full flex items-center justify-center h-32"
            >
              <img
                src={paloAltoLogo}
                alt="Palo Alto Networks"
                className="w-full h-full object-contain mix-blend-multiply"
                loading="lazy"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-2 rounded-lg bg-gray-50 border border-[#0ABCF9]/20 w-full flex items-center justify-center h-32"
            >
              <img
                src={awsLogo}
                alt="AWS"
                className="w-full h-full object-contain mix-blend-multiply"
                loading="lazy"
              />
            </motion.div>
             <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-2 rounded-lg bg-gray-50 border border-[#0ABCF9]/20 w-full flex items-center justify-center h-32"
            >
              <img
                src={f5Logo}
                alt="F5 Networks"
                className="w-full h-full object-contain mix-blend-multiply"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 dark:text-white text-black">
          Trusted by Leading Organizations
        </h2>

        <div className="overflow-hidden">
          <motion.div
            className="flex gap-10 whitespace-nowrap w-max"
            animate={{
              x: ['0%', '-50%'],
            }}
            transition={{
              duration: 100,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            {duplicatedPartners.map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0 p-1 rounded-lg bg-gray-50 border border-[#0ABCF9]/20 w-48 h-28 flex items-center justify-center overflow-hidden"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-full h-full object-contain mix-blend-multiply"
                  onError={(e) => {
                     // Fallback to text if image fails
                     e.target.style.display = 'none';
                     e.target.parentElement.innerText = partner.name;
                     e.target.parentElement.classList.remove('p-1');
                     e.target.parentElement.classList.add('p-4', 'text-black', 'text-lg', 'font-semibold', 'text-wrap', 'text-center');
                  }}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}