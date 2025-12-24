import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { AnimatedSection } from "./AnimatedSection";
import { Mail, Phone, MapPin } from "lucide-react";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function ContactCTASection() {
  const [status, setStatus] = useState("");
  const form = useRef(null);

  // Initialize EmailJS once
  useEffect(() => {
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    if (!publicKey) {
      console.error("Public Key not found in env");
      return;
    }
    emailjs.init(publicKey);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const contactTemplateID = import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID;
    const replyTemplateID = import.meta.env.VITE_EMAILJS_REPLY_TEMPLATE_ID;
    const toastTime = import.meta.env.VITE_EMAILJS_TOAST_TIME || 3000;

    if (!serviceID || !contactTemplateID || !replyTemplateID) {
      console.error("Template IDs or Service ID missing");
      return;
    }

    // 1. Send email to you
    emailjs
      .sendForm(serviceID, contactTemplateID, form.current)
      .then(() => {
        // 2. Send auto reply to the user
        emailjs.sendForm(serviceID, replyTemplateID, form.current);

        form.current.reset();
        toast.success("Message sent!", {
          position: "top-right",
          autoClose: toastTime,
          theme: "dark",
        });

        setStatus("Sent. I'll connect.");
        setTimeout(() => setStatus(""), 4000);
      })
      .catch((err) => {
        console.error("EmailJS Error:", err);
        toast.error("Try again?", {
          position: "top-right",
          autoClose: 3000,
          theme: "dark",
        });
      });
  };

  return (
    <>
      <ToastContainer />

      <section
        id="contact"
        className="section contact py-20 dark:text-white text-black relative overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/3 w-96 h-96 opacity-20 blur-[150px] rounded-full" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 opacity-20 blur-[150px] rounded-full" />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 z-10">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] items-start">
            {/* Left: Contact Info */}
            <AnimatedSection className="contact-info space-y-4">
              <motion.h3
                className="text-4xl font-bold"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                Let's talk
              </motion.h3>

              <motion.p
                className="muted dark:text-gray-300 text-gray-700 text-lg"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 }}
              >
                Drop your idea or problem. I'll take it from there.
              </motion.p>

              <motion.div
                className="space-y-3 dark:text-gray-200 text-gray-700"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5" />
                  <div>
                    <strong>Email:</strong> sales@tutelartechlabs.com
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5" />
                  <div>
                    <strong>Phone:</strong> +91 9019189116
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5" />
                  <div>
                    <strong>Location:</strong> Remote / India
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>

            {/* Right: Contact Form */}
            <AnimatedSection delay={0.1}>
              <motion.form
                ref={form}
                onSubmit={sendEmail}
                className="rounded-2xl border dark:border-white/10 border-black/10 dark:bg-[#0D0F1A] bg-white p-8 shadow-xl space-y-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                noValidate
              >
                <label className="flex flex-col gap-2">
                  <span className="text-sm">Name</span>
                  <input
                    type="text"
                    name="name"
                    required
                    className="rounded-md border dark:border-white/10 border-black/10 px-3 py-2 dark:bg-black bg-white text-black dark:text-white focus:ring-2"
                  />
                </label>

                <label className="flex flex-col gap-2">
                  <span className="text-sm">Email</span>
                  <input
                    type="email"
                    name="email"
                    required
                    className="rounded-md border dark:border-white/10 border-black/10 px-3 py-2 dark:bg-black bg-white text-black dark:text-white focus:ring-2"
                  />
                </label>

                <label className="flex flex-col gap-2">
                  <span className="text-sm">Message</span>
                  <textarea
                    name="message"
                    rows="6"
                    required
                    className="rounded-md border dark:border-white/10 border-black/10 px-3 py-2 dark:bg-black bg-white text-black dark:text-white focus:ring-2"
                  ></textarea>
                </label>

                <div className="form-actions flex items-center gap-4">
                  <motion.button
                    type="submit"
                    className="btn primary px-5 py-2 rounded-md bg-gradient-to-r from-[#0ABCF9] to-[#6A4DFB] text-white font-semibold shadow-lg hover:scale-105"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Send message
                  </motion.button>

                  <div className="text-sm text-cyan-300">{status}</div>
                </div>
              </motion.form>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
