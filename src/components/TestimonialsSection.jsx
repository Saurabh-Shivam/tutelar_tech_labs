import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { AnimatedSection } from "./AnimatedSection";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Girisha R",
    role: "Enterprise Programs, to Vidur Ramnarayan",
    content:
      "Thank you team for flawless support. We stayed in good shape with zero observed maintenance impact—customer preference as usual.",
  },
  {
    name: "Narasimha Meladi",
    role: "Security Lead",
    content:
      "I extend my regards to your team—Prabhu and Seenu—for exceptional support and technical expertise on Palo Alto products. The PoC was well executed with all use cases and reports.",
  },
  {
    name: "Sachin Warad",
    role: "Program Manager",
    content:
      "Appreciation for the first Panorama to SCM migration—it was very well planned and executed. Amazing job, Tutelar team!",
  },
  {
    name: "Apth Prabhu M",
    role: "Infosec Lead",
    content:
      "Arun’s work on Cortex XDR drove adoption, validated incidents with Infosec, and solved gaps through automation, dashboards, and BIOC rules—streamlining operations significantly.",
  },
  {
    name: "Selva / Arun",
    role: "Customer Collaboration",
    content:
      "Arun was instrumental in ensuring success of the Cortex XDR solution—resolving issues with TAC, highlighting new versions, and enabling faster, smarter responses.",
  },
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section py-20 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            What Our Clients Say
          </h2>
        </AnimatedSection>

        <div className="relative flex flex-col items-center gap-12">
          {/* Testimonial Card */}
          <motion.div
            className="max-w-3xl bg-black border border-white/10 p-10 rounded-2xl shadow-xl shadow-cyan-500/5 text-center"
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Stars */}
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 text-yellow-400 fill-yellow-400"
                />
              ))}
            </div>

            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              {testimonials[currentIndex].content}
            </p>

            <h4 className="text-xl font-semibold">
              {testimonials[currentIndex].name}
            </h4>
            <p className="text-gray-500">{testimonials[currentIndex].role}</p>
          </motion.div>

          {/* Indicators */}
          <div className="flex gap-4">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-[#0ABCF9] w-8"
                    : "bg-gray-600 hover:bg-gray-500 w-3"
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
