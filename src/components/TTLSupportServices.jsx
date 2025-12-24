import { motion } from "framer-motion";
import { useState } from "react";
import { AnimatedSection } from "./AnimatedSection";
import {
  Shield,
  Lock,
  Activity,
  AlertTriangle,
  Bug,
  ShieldCheck,
  UserCog,
  PenTool,
  Calendar,
  ClipboardCheck,
  Rocket,
  Cloud,
  Key,
  Database,
  Sliders,
  FileText,
} from "lucide-react";

const tabs = [
  {
    id: "resident",
    label: "Resident Engineer Services",
    icon: UserCog,
    content:
      "We provide OEM Certified Tech support Engineers on site to provide Security services across Network Security, Endpoint Security, Cloud Firewall deployments. We conduct Monthly and quarterly reviews and provide best practices recommendations.",
    bullets: [
      "Onsite coverage across network, endpoint and cloud security",
      "Monthly and quarterly service reviews with actionable insights",
      "Runbooks, SOPs and knowledge transfer embedded in delivery",
      "Outcome focus: reduced downtime and faster incident resolution",
    ],
  },
  {
    id: "design",
    label: "Design Review",
    icon: PenTool,
    content:
      "We provide high level and low level Design reviews for the Network Security implementations, SOC Deployments. We provide Security framework for the organisations to adopt to protect against the sophisticated threats.",
    bullets: [
      "HLD and LLD reviews aligned to Zero Trust principles",
      "Threat modeling and SOC integration guidance",
      "Reference architectures and security control mapping",
      "Compliance-aligned recommendations and risk registers",
    ],
  },
  {
    id: "amc",
    label: "Annual Maintenance Contract",
    icon: Calendar,
    content:
      "Annual maintenance coverage provides access to vendor-supported services, software updates, threat intelligence, and technical support that minimizes operational risk. We perform BCP activities to ensure business continuity for the Enterprise we serve. Our approach is outcome based ie Reduced downtime through timely support and proactive updates.",
    bullets: [
      "Proactive updates and vendor-backed technical support",
      "Threat intelligence advisories and vulnerability guidance",
      "BCP drills and DR validation for business continuity",
      "SLA-driven response windows and performance reporting",
    ],
  },
  {
    id: "bpa",
    label: "Best Practices Assessment",
    icon: ClipboardCheck,
    content:
      "Audit the configurations of existing security Stack and provide recommendations based on the Vendors’ blueprint. Identify configuration gaps, security risks, and optimization suggestions. Improve performance, user experience, and operational efficiency. We provide Documentation and checklist to adopt to the Best practices configuration.",
    bullets: [
      "Blueprint alignment across firewall, endpoint, IAM, cloud",
      "Configuration gap analysis and hardening recommendations",
      "Performance tuning and user experience improvements",
      "Deliverables: documentation, checklists and remediation plans",
    ],
  },
  {
    id: "implementation",
    label: "Project Implementation",
    icon: Rocket,
    content:
      "End-to-end implementation services ensuring seamless integration of security solutions. We manage the entire lifecycle from planning and architecture to deployment and fine-tuning, ensuring your security infrastructure is robust, compliant, and aligned with business objectives.",
    bullets: [
      "Plan, build, test, deploy with full stakeholder alignment",
      "Integration, policy design and post-deployment tuning",
      "Runbooks, handover and administrator training",
      "KPIs tracked: time-to-value, MTTR, coverage and compliance",
    ],
  },
  {
    id: "compliance",
    label: "Compliance Audit Services",
    icon: ShieldCheck,
    content:
      "We provide continuous visibility, configuration assessment, and risk management for SaaS applications. It helps regulated entities meet cybersecurity, governance, and risk management requirements by ensuring secure configuration, access control, data protection, and continuous monitoring of SaaS platforms.",
    bullets: [
      "SaaS posture management and configuration baselines",
      "Access control verification and privilege reviews",
      "Data protection policies and encryption guidance",
      "Continuous monitoring with audit-ready evidence",
    ],
  },
  {
    id: "access",
    label: "Access Control Governance",
    icon: Key,
    content:
      "Detects excessive privileges, dormant users, and shared accounts. We help enforce least-privilege principles and ensure that access rights are properly managed and audited.",
    bullets: [
      "Least-privilege enforcement and role reviews",
      "Dormant and orphan account remediation",
      "JIT access and approval workflows",
      "Separation of duties validation and attestations",
    ],
  },
  {
    id: "data",
    label: "Data Exposure Monitoring",
    icon: Database,
    content:
      "Identifies public or external sharing of sensitive customer and transactional data. We monitor data flows to prevent unauthorized leakage and ensure data sovereignty and privacy compliance.",
    bullets: [
      "External sharing detection and DLP policy alignment",
      "Public bucket and repository exposure scans",
      "Sensitive data classification and tagging",
      "Remediation workflows with audit trails",
    ],
  },
  {
    id: "control",
    label: "Continuous Control Monitoring",
    icon: Sliders,
    content:
      "Supports regulatory requirement for ongoing security posture assessment. We provide real-time insights into your security controls, ensuring they remain effective and compliant with evolving standards.",
    bullets: [
      "Control library, automation and telemetry",
      "Dashboards and alerting for posture drift",
      "Periodic control attestation and evidence capture",
      "Alignment to CIS, NIST and regulatory mandates",
    ],
  },
  {
    id: "audit",
    label: "Audit & Evidence Readiness",
    icon: FileText,
    content:
      "Generates audit logs and risk reports to streamline compliance processes. We ensure you are always audit-ready with comprehensive documentation and evidence of your security posture.",
    bullets: [
      "Centralized audit logs and immutable records",
      "Risk reports and control effectiveness summaries",
      "Traceability to policies and procedures",
      "Regulatory mapping and audit support",
    ],
  },
];

export function TTLSupportServices() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <section
      id="ttl-support"
      className="section py-20 dark:text-white text-black bg-gray-50 dark:bg-[#080a14]"
    >
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Support Services
          </h2>
          <p className="text-center dark:text-gray-400 text-gray-700 max-w-3xl mx-auto mb-12">
            Comprehensive security services designed to protect, optimize, and
            empower your enterprise.
          </p>
        </AnimatedSection>

        <div className="mt-12">
          <AnimatedSection>
            <div className="flex flex-col md:flex-row gap-10">
              {/* Tabs */}
              <div className="flex md:flex-col gap-2 md:w-1/3 w-full overflow-x-auto md:overflow-visible pb-4 md:pb-0">
                {tabs.map((tab) => (
                  <motion.button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`
                      px-6 py-4 rounded-lg font-semibold transition-all border text-left min-w-max md:min-w-0
                      ${
                        activeTab === tab.id
                          ? "bg-cyan-500 text-black border-cyan-500 shadow-lg shadow-cyan-500/20"
                          : "dark:border-gray-800 border-gray-200 dark:bg-white/5 bg-white dark:text-gray-400 text-gray-600 hover:border-cyan-400/50 hover:text-cyan-600 dark:hover:text-cyan-400"
                      }
                    `}
                    whileHover={{ scale: 1.02, x: 5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {tab.label}
                  </motion.button>
                ))}
              </div>

              {/* Content */}
              <div className="flex-1 min-h-[400px]">
                {tabs.map(
                  (tab) =>
                    activeTab === tab.id && (
                      <motion.div
                        key={tab.id}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.4 }}
                        className="h-full flex flex-col gap-6"
                      >
                        {/* Heading Div */}
                        <motion.div
                          initial={{ scale: 0.5, opacity: 0, y: 50 }}
                          animate={{ scale: 1, opacity: 1, y: 0 }}
                          transition={{
                            type: "spring",
                            stiffness: 260,
                            damping: 20,
                            delay: 0.1,
                          }}
                          className="flex flex-col items-center justify-center p-6 text-center"
                        >
                          <div className="mb-4 relative">
                            <motion.div
                              animate={{ y: [0, -10, 0] }}
                              transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                ease: "easeInOut",
                              }}
                            >
                              <tab.icon className="w-16 h-16 text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]" />
                            </motion.div>
                          </div>
                          <h3 className="text-3xl font-bold text-cyan-500 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
                            {tab.label}
                          </h3>
                        </motion.div>

                        {/* Details Div */}
                        <div className="relative flex-1 group rounded-2xl overflow-hidden p-[2px]">
                          {/* Rotating Border Glow */}
                          <motion.div
                            className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0_340deg,#06b6d4_360deg)] opacity-70"
                            animate={{ rotate: 360 }}
                            transition={{
                              duration: 4,
                              repeat: Infinity,
                              ease: "linear",
                            }}
                          />
                          
                          {/* Inner Content Container */}
                          <div className="relative h-full dark:bg-[#0D0F1A]/90 bg-white/90 backdrop-blur-md p-8 md:p-12 rounded-2xl border dark:border-cyan-400/20 border-cyan-400/20 flex flex-col justify-center items-center text-center">
                            {/* Grid Background */}
                            <div
                              className="absolute inset-0 opacity-[0.05] dark:opacity-[0.1] rounded-2xl overflow-hidden"
                              style={{
                                backgroundImage: `linear-gradient(#06b6d4 1px, transparent 1px), linear-gradient(90deg, #06b6d4 1px, transparent 1px)`,
                                backgroundSize: "40px 40px",
                              }}
                            />

                            {/* Floating Security Elements (Background) */}
                            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-2xl">
                              <motion.div
                                className="absolute top-10 right-10 text-cyan-400/10"
                                animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
                                transition={{
                                  duration: 5,
                                  repeat: Infinity,
                                  ease: "easeInOut",
                                }}
                              >
                                <Shield size={100} />
                              </motion.div>
                              <motion.div
                                className="absolute bottom-10 left-10 text-cyan-400/10"
                                animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
                                transition={{
                                  duration: 7,
                                  repeat: Infinity,
                                  ease: "easeInOut",
                                  delay: 1,
                                }}
                              >
                                <Lock size={80} />
                              </motion.div>
                            </div>

                            <div className="relative z-10 max-w-2xl mx-auto">
                              <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="dark:text-gray-200 text-gray-800 leading-relaxed text-lg md:text-xl font-medium tracking-wide"
                              >
                                {tab.content}
                              </motion.p>
                              {tab.bullets && (
                                <ul className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-3 text-left mx-auto max-w-3xl">
                                  {tab.bullets.map((item, idx) => (
                                    <li
                                      key={idx}
                                      className="dark:text-gray-300 text-gray-700 text-base flex items-start gap-2"
                                    >
                                      <span className="text-cyan-400 mt-1">•</span>
                                      {item}
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )
                )}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
