import { motion } from 'motion/react';
import { useState } from 'react';
import { AnimatedSection } from './AnimatedSection';
import { Mail, Phone, MapPin } from 'lucide-react';

export function ContactCTASection() {
  const [status, setStatus] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    setStatus('Thanks! We will respond within one business day.');
    setTimeout(() => setStatus(''), 5000);
  };

  return (
    <section id="contact" className="section contact py-20 text-white relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-[#0ABCF9] opacity-20 blur-[150px] rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#6A4DFB] opacity-20 blur-[150px] rounded-full" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 z-10">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] items-start">
          <AnimatedSection className="contact-info space-y-4">
            <motion.h3
              className="text-4xl font-bold"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              Let's talk
            </motion.h3>
            <motion.p
              className="muted text-gray-300 text-lg leading-relaxed"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.05 }}
            >
              Tell us about your project and security needs. We&apos;ll respond within one business day.
            </motion.p>

            <motion.div
              className="contact-meta space-y-3 text-gray-200"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-cyan-400" />
                <div><strong>Email:</strong> support@tutelartechlabs.com</div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-cyan-400" />
                <div><strong>Phone:</strong> +91 789 249 6283</div>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-cyan-400" />
                <div><strong>Location:</strong> Remote / India</div>
              </div>
            </motion.div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <motion.form
              onSubmit={onSubmit}
              className="contact-form rounded-2xl border border-white/10 bg-[#0D0F1A] p-8 shadow-xl shadow-cyan-500/10 space-y-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              noValidate
            >
              <label className="flex flex-col text-left gap-2">
                <span className="text-sm text-gray-300">Name</span>
                <input
                  type="text"
                  name="name"
                  required
                  className="rounded-md border border-white/10 bg-black px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </label>
              <label className="flex flex-col text-left gap-2">
                <span className="text-sm text-gray-300">Email</span>
                <input
                  type="email"
                  name="email"
                  required
                  className="rounded-md border border-white/10 bg-black px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </label>
              <label className="flex flex-col text-left gap-2">
                <span className="text-sm text-gray-300">Message</span>
                <textarea
                  name="message"
                  rows="6"
                  required
                  className="rounded-md border border-white/10 bg-black px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                ></textarea>
              </label>

              <div className="form-actions flex items-center gap-4">
                <motion.button
                  type="submit"
                  className="btn primary px-5 py-2 rounded-md bg-gradient-to-r from-[#0ABCF9] to-[#6A4DFB] text-white font-semibold shadow-lg shadow-cyan-500/30 hover:scale-105 transition-transform"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Send message
                </motion.button>
                <div
                  id="formStatus"
                  className="form-status text-sm text-cyan-300"
                  aria-live="polite"
                >
                  {status}
                </div>
              </div>
            </motion.form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
