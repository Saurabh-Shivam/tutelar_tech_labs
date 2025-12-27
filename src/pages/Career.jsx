import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { PageBackground } from "../components/PageBackground";
import { PartnersSection } from "../components/PartnersSection";
import { useEffect, useState, useRef } from "react";
import { ScrollToTop } from "../components/ScrollToTop";
import {
  Shield,
  Lock,
  Server,
  Cloud,
  Code,
  Globe,
  Briefcase,
  CheckCircle2,
  MapPin,
  DollarSign,
  Clock,
  ChevronDown,
  ChevronUp,
  Send,
  User,
  Mail,
  Phone,
  MessageSquare,
  Link,
  Linkedin,
} from "lucide-react";
import { AnimatedSection } from "../components/AnimatedSection";
import { GlowingButton } from "../components/GlowingButton";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const whatWeDo = [
  {
    title: "Perimeter Security Implementation & Migration",
    description:
      "Designing and deploying next-generation firewalls and network protections.",
    icon: Shield,
  },
  {
    title: "Security Profile & Policy Deployment",
    description:
      "Creating and enforcing robust security configurations across environments.",
    icon: Lock,
  },
  {
    title: "Endpoint Protection Solutions",
    description:
      "Implementing solutions such as EDR (Endpoint Detection & Response) and DLP (Data Loss Prevention) to secure user devices.",
    icon: Server,
  },
  {
    title: "SIEM & SOAR Architecture",
    description:
      "Designing and building scalable SIEM and SOAR platforms for automated threat management.",
    icon: Globe,
  },
  {
    title: "DevSecOps Transformation",
    description:
      "Integrating security into every stage of the software development lifecycle.",
    icon: Code,
  },
  {
    title: "Cloud Security & Transformation",
    description:
      "Securing cloud environments during and after migration, across multi-cloud or hybrid infrastructures.",
    icon: Cloud,
  },
];

const openings = [
  {
    title: "Network Security Associate",
    description:
      "We are seeking a Network Security Engineer to our team. The successful candidate will be responsible for implementing and supporting the company's client.",
    responsibilities: [
      "Act as a domain expert and consultant with business, systems, networks, and outside entities on currently defined security posture.",
      "Implement network security services using various configuration management tools and scripting languages.",
      "Assist defining security best practices, security policies, and security improvement initiatives.",
      "Assist in the development and implementation of network security policies and procedures to ensure the client's network security is robust and up-to-date.",
      "Configure, install and maintain network security devices such as firewall, management server and related security services",
    ],
    requirements: [
      "Strong understanding of TCP/IP networking and related protocols.",
      "Basic understanding of network devices such as routers, switches, firewalls, and VPNs.",
      "Good written and verbal communication skills is a must",
      "Experience working in a Microsoft Windows environment.",
      "Excellent communication, problem-solving, and analytical skills.",
      "Willingness to learn new technologies and tools in a fast-paced environment.",
    ],
    details: {
      salary: "2.5-4 lakhs per annum",
      probation: "4-6 Months",
      location: "Bangalore during training period and Madurai ODC",
    },
  },
   {
    title: "Security Analyst",
    description:
      "Own end-to-end security delivery across enterprise environments. Hands-on work across EDR, SIEM, and security orchestration, with a focus on incident handling and operational ownership.",
    responsibilities: [
      "Deploy and maintain EDR and SIEM solutions for customers.",
      "Deploy and maintain security orchestration platforms for customers.",
      "Support customers in handling and investigating security incidents.",
      "Implement and drive security best practices to improve security posture.",
    ],
    requirements: [
      "Basic understanding of cybersecurity concepts.",
      "Strong written and verbal communication skills.",
      "Relevant IT or security education or industry exposure preferred.",
      "Analytical mindset to solve ambiguous security and operational problems.",
      "Comfortable working in a team driven environment.",
    ],
    details: {
      salary: "2.5-4 lakhs per annum",
      probation: "4-6 Months",
      location: "Bangalore during training period and Madurai ODC",
    },
  },
  {
    title: "Cloud Security Associate",
    description:
      "Work closely with DevOps and application teams to embed security into delivery pipelines and cloud-native environments.",
    responsibilities: [
      "Partner with DevOps and application teams to integrate security controls into CI/CD pipelines.",
      "Support API-driven automation for cloud security platforms, SIEM/XDR, ticketing, and monitoring tools.",
      "Help secure cloud environments across identity, networking, workloads, and data protection.",
      "Support CSPM, CWPP, CIEM, and container security tooling.",
      "Review configurations, validate posture, and help fix misconfigurations.",
      "Assist in vulnerability fixes and cloud security incident investigations.",
      "Maintain runbooks and documentation for cloud security workflows.",
    ],
    requirements: [
      "Basic understanding of cybersecurity and cloud security concepts.",
      "Good written and verbal communication skills.",
      "Relevant IT or security education or industry exposure preferred.",
      "Analytical mindset for solving complex security problems.",
      "Self-driven and comfortable working in cross-team environments.",
    ],
    details: {
      salary: "2.5-4 lakhs per annum",
      probation: "4-6 Months",
      location: "Bangalore during training period and Madurai ODC",
    },
  },
];

export function CareerPage() {
  const [expandedJob, setExpandedJob] = useState(null);
  const [selectedJob, setSelectedJob] = useState("");
  const [isSending, setIsSending] = useState(false);
  const formRef = useRef(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const toggleJob = (index) => {
    setExpandedJob(expandedJob === index ? null : index);
  };

  const handleApply = (jobTitle) => {
    setSelectedJob(jobTitle);
    const formElement = document.getElementById("application-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    if (isSending) return;

    const serviceID = import.meta.env.VITE_EMAILJS_CAREER_SERVICE_ID;
    const contactTemplateID = import.meta.env.VITE_EMAILJS_CAREER_CONTACT_TEMPLATE_ID;
    const replyTemplateID = import.meta.env.VITE_EMAILJS_CAREER_REPLY_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_CAREER_PUBLIC_KEY;

    if (!serviceID || !contactTemplateID || !replyTemplateID || !publicKey) {
      toast.error("EmailJS configuration missing.");
      console.error("Missing env vars:", { serviceID, contactTemplateID, replyTemplateID, publicKey });
      return;
    }

    setIsSending(true);

    try {
        // 1. Send Application to Company
        await emailjs.sendForm(serviceID, contactTemplateID, formRef.current, {
            publicKey: publicKey,
        });
        
        toast.success("Application sent successfully!", {
            position: "top-right",
            theme: "dark",
        });

        // 2. Send Auto-Reply to Applicant
        // We try this, but if it fails, we don't want to tell the user their application failed.
        try {
            const templateParams = {
                user_name: formRef.current.user_name.value,
                user_email: formRef.current.user_email.value,
                user_phone: formRef.current.user_phone.value,
                post_name: formRef.current.post_name.value,
                message: formRef.current.message.value,
                resume_link: formRef.current.resume_link.value,
                linkedin_link: formRef.current.linkedin_link.value,
                to_email: formRef.current.user_email.value,
                reply_to: formRef.current.user_email.value,
            };
            
            console.log("Sending auto-reply with params:", templateParams);
            await emailjs.send(serviceID, replyTemplateID, templateParams, {
                publicKey: publicKey,
            });
        } catch (replyErr) {
            console.error("Auto-reply failed:", replyErr);
        }

        formRef.current.reset();
        setSelectedJob("");

    } catch (err) {
        console.error("EmailJS Error:", err);
        toast.error("Failed to send application. Please try again.", {
            position: "top-right",
            theme: "dark",
        });
    } finally {
        setIsSending(false);
    }
  };

  return (
    <div className="relative min-h-screen dark:text-white text-black overflow-hidden bg-gray-50 dark:bg-[#080a14]">
      <PageBackground />
      <ToastContainer autoClose={3000} position="top-right" theme="dark" />
      {/* Overlay for better text readability */}
      <div className="pointer-events-none absolute inset-0 dark:bg-gradient-to-b dark:from-black/30 dark:via-slate-950/14 dark:to-black/45 bg-gradient-to-b from-white/40 via-slate-200/20 to-white/50" />
      <Navbar />

      <ScrollToTop />

      <main className="relative z-10 pt-32 pb-20 space-y-20">
        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-6 text-center">
          <AnimatedSection>
            <motion.p
              className="text-cyan-500 uppercase tracking-[0.3em] text-sm font-bold mb-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              Join Our Mission
            </motion.p>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600">
              Career Programs
            </h1>
            <div className="max-w-4xl mx-auto dark:bg-white/5 bg-white p-8 md:p-12 rounded-2xl border dark:border-white/10 border-black/5 shadow-xl backdrop-blur-sm">
              <h2 className="text-2xl font-bold mb-4 text-cyan-400">
                Who We Are
              </h2>
              <p className="text-lg dark:text-gray-300 text-gray-700 leading-relaxed">
                We are a team of experienced professionals passionate about
                creating profound impact in the area of cybersecurity and IT
                services by partnering with the best of the OEMs and to help
                companies transform IT services safely and securely.
              </p>
            </div>
          </AnimatedSection>
        </section>

        {/* What We Do Section */}
        <section className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              What We Do
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {whatWeDo.map((item, index) => (
                <motion.div
                  key={index}
                  className="p-6 rounded-xl dark:bg-[#0D0F1A] bg-white border dark:border-cyan-500/20 border-cyan-500/10 shadow-lg hover:shadow-cyan-500/20 transition-all group"
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center mb-4 group-hover:bg-cyan-500/20 transition-colors">
                    <item.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 dark:text-gray-100 text-gray-900">
                    {item.title}
                  </h3>
                  <p className="dark:text-gray-400 text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </section>

        {/* Job Openings Section */}
        <section className="max-w-5xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Current Openings
            </h2>
            <div className="space-y-6">
              {openings.map((job, index) => (
                <motion.div
                  key={index}
                  className="rounded-2xl overflow-hidden border dark:border-white/10 border-black/10 dark:bg-[#0D0F1A] bg-white shadow-xl"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <div
                    onClick={() => toggleJob(index)}
                    className="p-6 md:p-8 cursor-pointer flex justify-between items-center hover:bg-white/5 transition-colors"
                  >
                    <div>
                      <h3 className="text-2xl font-bold text-cyan-400 mb-2">
                        {job.title}
                      </h3>
                      <p className="dark:text-gray-400 text-gray-600 max-w-2xl">
                        {job.description}
                      </p>
                    </div>
                    <div className="ml-4 flex-shrink-0">
                      {expandedJob === index ? (
                        <ChevronUp className="w-6 h-6 text-cyan-400" />
                      ) : (
                        <ChevronDown className="w-6 h-6 text-gray-400" />
                      )}
                    </div>
                  </div>

                  <AnimatePresence>
                    {expandedJob === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden bg-black/5 dark:bg-black/20"
                      >
                        <div className="p-6 md:p-8 space-y-8 border-t dark:border-white/10 border-black/10">
                          {/* Responsibilities */}
                          <div>
                            <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                              <Briefcase className="w-5 h-5 text-cyan-400" />
                              Responsibilities
                            </h4>
                            <ul className="space-y-3">
                              {job.responsibilities.map((resp, i) => (
                                <li
                                  key={i}
                                  className="flex items-start gap-3 dark:text-gray-300 text-gray-700"
                                >
                                  <CheckCircle2 className="w-5 h-5 text-cyan-500/50 flex-shrink-0 mt-0.5" />
                                  <span>{resp}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Requirements */}
                          <div>
                            <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                              <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                              Requirements
                            </h4>
                            <ul className="space-y-3">
                              {job.requirements.map((req, i) => (
                                <li
                                  key={i}
                                  className="flex items-start gap-3 dark:text-gray-300 text-gray-700"
                                >
                                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2.5 flex-shrink-0" />
                                  <span>{req}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Details Grid */}
                          <div className="grid md:grid-cols-3 gap-4 pt-4">
                            <div className="p-4 rounded-lg dark:bg-white/5 bg-white border dark:border-white/10 border-black/10 flex items-center gap-3">
                              <DollarSign className="w-8 h-8 text-green-400" />
                              <div>
                                <p className="text-xs text-gray-500 uppercase tracking-wider">
                                  Salary
                                </p>
                                <p className="font-semibold">
                                  {job.details.salary}
                                </p>
                              </div>
                            </div>
                            <div className="p-4 rounded-lg dark:bg-white/5 bg-white border dark:border-white/10 border-black/10 flex items-center gap-3">
                              <Clock className="w-8 h-8 text-orange-400" />
                              <div>
                                <p className="text-xs text-gray-500 uppercase tracking-wider">
                                  Probation
                                </p>
                                <p className="font-semibold">
                                  {job.details.probation}
                                </p>
                              </div>
                            </div>
                            <div className="p-4 rounded-lg dark:bg-white/5 bg-white border dark:border-white/10 border-black/10 flex items-center gap-3">
                              <MapPin className="w-8 h-8 text-red-400" />
                              <div>
                                <p className="text-xs text-gray-500 uppercase tracking-wider">
                                  Location
                                </p>
                                <p className="font-semibold text-sm">
                                  {job.details.location}
                                </p>
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex justify-end pt-4">
                            <GlowingButton onClick={() => handleApply(job.title)}>
                                Apply Now
                            </GlowingButton>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </section>

        {/* Application Form Section */}
        <section id="application-form" className="max-w-3xl mx-auto px-6 pb-12">
          <AnimatedSection>
            <div className="dark:bg-[#0D0F1A] bg-white p-8 md:p-10 rounded-3xl border dark:border-cyan-500/30 border-cyan-500/20 shadow-2xl relative overflow-hidden">
                {/* Background decorative elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
                
              <div className="relative z-10">
                  <h2 className="text-3xl font-bold text-center mb-2">
                    Apply Now
                  </h2>
                  <p className="text-center dark:text-gray-400 text-gray-600 mb-8">
                    Interested in joining our team? Send us your details.
                  </p>

                  <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
                    {/* Selected Job Title (Read Only) */}
                    <div className="space-y-2">
                        <label className="text-sm font-medium ml-1">Position Applied For</label>
                        <div className="relative">
                            <Briefcase className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                            <input
                                type="text"
                                name="post_name"
                                value={selectedJob}
                                readOnly
                                placeholder="Select a job from the list above"
                                className="w-full pl-10 pr-4 py-3 rounded-xl dark:bg-black/40 bg-gray-50 border dark:border-white/10 border-gray-200 text-cyan-500 font-semibold focus:outline-none cursor-not-allowed"
                            />
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium ml-1">Full Name</label>
                        <div className="relative">
                          <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                          <input
                            type="text"
                            name="user_name"
                            required
                            placeholder="Your Name"
                            className="w-full pl-10 pr-4 py-3 rounded-xl dark:bg-black/40 bg-gray-50 border dark:border-white/10 border-gray-200 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-all"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium ml-1">Email Address</label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                          <input
                            type="email"
                            name="user_email"
                            required
                            placeholder="yourmail@example.com"
                            className="w-full pl-10 pr-4 py-3 rounded-xl dark:bg-black/40 bg-gray-50 border dark:border-white/10 border-gray-200 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-all"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium ml-1">Phone Number</label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                        <input
                          type="tel"
                          name="user_phone"
                          required
                          placeholder="+91 98765 43210"
                          className="w-full pl-10 pr-4 py-3 rounded-xl dark:bg-black/40 bg-gray-50 border dark:border-white/10 border-gray-200 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium ml-1">Google Drive Resume Link <span className="text-red-500">*</span></label>
                      <div className="relative">
                        <Link className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                        <input
                          type="url"
                          name="resume_link"
                          required
                          placeholder="https://drive.google.com/file/d/..."
                          className="w-full pl-10 pr-4 py-3 rounded-xl dark:bg-black/40 bg-gray-50 border dark:border-white/10 border-gray-200 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium ml-1">LinkedIn Profile Link <span className="text-gray-500 text-xs">(Optional)</span></label>
                      <div className="relative">
                        <Linkedin className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                        <input
                          type="url"
                          name="linkedin_link"
                          placeholder="https://linkedin.com/in/..."
                          className="w-full pl-10 pr-4 py-3 rounded-xl dark:bg-black/40 bg-gray-50 border dark:border-white/10 border-gray-200 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-all"
                        />
                      </div>
                    </div>



                    <div className="space-y-2">
                      <label className="text-sm font-medium ml-1">Message / Cover Letter</label>
                      <div className="relative">
                        <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                        <textarea
                          name="message"
                          rows={4}
                          required
                          placeholder="Tell us about your experience/projects..."
                          className="w-full pl-10 pr-4 py-3 rounded-xl dark:bg-black/40 bg-gray-50 border dark:border-white/10 border-gray-200 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-all resize-none"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isSending}
                      className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSending ? (
                        "Sending..."
                      ) : (
                        <>
                            <Send className="w-5 h-5" />
                            Submit Application
                        </>
                      )}
                    </button>
                  </form>
              </div>
            </div>
          </AnimatedSection>
        </section>
      </main>

      <section className="relative z-10">
        <PartnersSection />
      </section>

      <motion.div
        className="relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
      >
        <Footer />
      </motion.div>
    </div>
  );
}