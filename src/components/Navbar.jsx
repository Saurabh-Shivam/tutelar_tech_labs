import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X, Moon, Lightbulb, ChevronDown, ChevronRight } from "lucide-react";

export function Navbar() {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openMobileDropdown, setOpenMobileDropdown] = useState(null);
  const [openCategory, setOpenCategory] = useState({});
  const [openMobileCategory, setOpenMobileCategory] = useState({});
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem("theme") || "dark";
    } catch {
      return "dark";
    }
  });
  const closeDropdownTimeout = useRef(null);

  const openDropdownWithLabel = (label) => {
    if (closeDropdownTimeout.current) {
      clearTimeout(closeDropdownTimeout.current);
      closeDropdownTimeout.current = null;
    }
    setOpenDropdown(label);
  };

  const closeDropdownWithDelay = () => { 
    if (closeDropdownTimeout.current) {
      clearTimeout(closeDropdownTimeout.current);
    }
    closeDropdownTimeout.current = setTimeout(() => {
      setOpenDropdown(null);
      setOpenCategory({});
    }, 350);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("dark");
    if (theme === "dark") {
      root.classList.add("dark");
    }
    try {
      localStorage.setItem("theme", theme);
    } catch {}
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const navItems = [
    { label: "Home", id: "home" },
    {
      label: "Services",
      dropdown: [
        {
          label: "Enterprise Security",
          url: "/enterprise-security",
          description: "Comprehensive security solutions for large-scale organizations.",
          newTab: false,
        },
        {
          label: "IAM",
          url: "/iam",
          description: "Identity and Access Management to secure digital identities.",
          newTab: false,
        },
        {
          label: "SOC Services",
          url: "/soc-services",
          description: "24/7 Security Operations Center for real-time monitoring.",
          newTab: false,
        },
        {
          label: "Cybersecurity Services",
          url: "/cybersecurity-services",
          description: "Expert consulting and strategies to strengthen defenses.",
          newTab: false,
        },
        {
          label: "IOT",
          url: "/iot-security",
          description: "Securing Internet of Things devices and networks.",
          newTab: false,
        },
        {
          label: "Data Security",
          url: "/data-security",
          description: "Protecting sensitive data throughout its lifecycle.",
          newTab: false,
        },
        {
          label: "Application Security",
          url: "/application-security",
          description: "Ensuring security within software applications.",
          newTab: false,
        },
        {
          label: "Cloud Security",
          url: "/cloud-security",
          description: "Safeguarding cloud computing environments and data.",
          newTab: false,
        },
      ],
    },
    {
      label: "Products",
      dropdown: [
        {
          label: "Network Security",
          children: [
            {
              label: "NGFW",
              url: "/ngfw",
              description: "Next-Generation Firewall for advanced threat protection.",
              newTab: false,
            },
            {
              label: "SASE & ZTNA",
              url: "/sase-ztna",
              description: "Secure Access Service Edge and Zero Trust Network Access.",
              newTab: false,
            },
            {
              label: "DLP & Email DLP",
              url: "/dlp",
              description: "Data Loss Prevention for endpoints and email systems.",
              newTab: false,
            },
            {
              label: "CASB",
              url: "/cloud-security",
              description: "Cloud Access Security Broker for cloud visibility.",
              newTab: false,
            },
            {
              label: "OT/IoT Security",
              url: "/ot-iot-security",
              description: "Specialized security for operational technology and IoT.",
              newTab: false,
            },
          ],
        },
        {
          label: "Security Operations",
          children: [
            {
              label: "EDR/XDR",
              url: "/xdr",
              description: "Extended Detection and Response for endpoint security.",
              newTab: false,
            },
            {
              label: "SOAR",
              url: "/soar",
              description: "Security Orchestration, Automation and Response.",
              newTab: false,
            },
            {
              label: "SIEM",
              url: "/siem",
              description: "Security Information and Event Management solutions.",
              newTab: false,
            },
            {
              label: "IAM Product",
              url: "/iam-product",
              description: "Robust Identity and Access Management platform.",
              newTab: false,
            },
          ],
        },
        {
          label: "DevSecOps",
          children: [
            {
              label: "DSPM",
              url: "/dspm",
              description: "Data Security Posture Management for cloud data.",
              newTab: false,
            },
            {
              label: "CSPM & CNAPP",
              url: "/cnapp",
              description: "Cloud Security Posture Management and protection.",
              newTab: false,
            },
          ],
        },
      ],
    },
    { label: "Partnership", id: "partnership" },
    { label: "About", id: "about" },
    { label: "Careers", url: "/careers", newTab: false },
  ];

  const handleNavClick = (e, target) => {
    e.preventDefault();
    if (!target) return;

    const targetId = typeof target === "string" ? target : target.id;
    const targetUrl = typeof target === "object" ? target.url : null;
    const openInNewTab = typeof target === "object" && target.newTab;

    if (targetUrl) {
      if (openInNewTab) {
        window.open(targetUrl, "_blank", "noopener,noreferrer");
      } else {
        navigate(targetUrl);
      }
      setIsMobileMenuOpen(false);
      setOpenDropdown(null);
      setOpenMobileDropdown(null);
      return;
    }

    if (targetId === "home") {
      if (window.location.pathname === "/") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        navigate("/");
      }
    } else {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
    setOpenMobileDropdown(null);
  };

  const handleGetStartedClick = (e) => {
    e.preventDefault();
    const contactElement = document.getElementById("contact");
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      navigate("/#contact");
      setTimeout(() => {
        const el = document.getElementById("contact");
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "dark:bg-black/80 bg-white/80 backdrop-blur-lg border-b dark:border-white/10 border-black/10"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      style={{ willChange: 'transform', transform: 'translateZ(0)' }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            if (window.location.pathname === "/") {
              window.scrollTo({ top: 0, behavior: "smooth" });
            } else {
              navigate("/");
            }
          }}
          className="flex items-center gap-2 cursor-pointer"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          whileInView={false}
          style={{ willChange: 'transform, opacity', transform: 'translateZ(0)' }}
        >
          <img
            src="data:image/jpeg;base64,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"
            alt="Tutelar Tech Labs logo"
            className="w-7 h-7 object-contain"
          />
          <motion.span
            className="text-xl font-bold"
            initial={{ y: 0 }}
            animate={{ y: [0, -8, 0, -6, 0, -4, 0] }}
            transition={{
              duration: 1.8,
              repeat: 0,
              ease: "easeOut",
              delay: 0.2,
            }}
          >
            Tutelar Tech Labs
          </motion.span>
        </motion.a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item, index) => {
            if (item.dropdown) {
              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => openDropdownWithLabel(item.label)}
                  onMouseLeave={closeDropdownWithDelay}
                >
                  <motion.button
                    type="button"
                    className="hover:text-cyan-400 transition-colors cursor-pointer flex items-center gap-2"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    style={{ willChange: 'transform, opacity', transform: 'translateZ(0)' }}
                  >
                    {item.label}
                  </motion.button>

                  {openDropdown === item.label && (
                    <motion.div
                      className="absolute left-0 top-full mt-1 w-60 rounded-lg dark:bg-black/95 bg-white border dark:border-white/10 border-black/10 shadow-lg dark:shadow-black/40 shadow-black/10 backdrop-blur-xl py-3 z-50"
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      onMouseEnter={() => openDropdownWithLabel(item.label)}
                      onMouseLeave={closeDropdownWithDelay}
                      style={{ willChange: 'transform, opacity', transform: 'translateZ(0)' }}
                    >
                      {item.dropdown.map((subItem) => {
                        if (subItem.children) {
                          return (
                            <div
                              key={subItem.label}
                              className="relative group/submenu"
                            >
                              <button
                                type="button"
                                className="w-full text-left px-4 py-3 text-sm hover:dark:bg-white/5 hover:bg-black/5 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors flex items-center justify-between"
                              >
                                <span className="font-medium">{subItem.label}</span>
                                <ChevronRight className="w-4 h-4" />
                              </button>

                              {/* Nested Dropdown */}
                              <div className="absolute left-full top-0 w-64 -ml-1 pt-0 hidden group-hover/submenu:block">
                                <motion.div
                                  className="rounded-lg dark:bg-black/95 bg-white border dark:border-white/10 border-black/10 shadow-lg dark:shadow-black/40 shadow-black/10 backdrop-blur-xl py-3 overflow-hidden"
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.2 }}
                                >
                                  {subItem.children.map((childItem) => (
                                    <a
                                      key={childItem.label}
                                      href={childItem.url}
                                      target={childItem.newTab ? "_blank" : undefined}
                                      rel={childItem.newTab ? "noopener noreferrer" : undefined}
                                      onClick={(e) => handleNavClick(e, childItem)}
                                      className="block w-full text-left px-4 py-3 text-sm hover:dark:bg-white/5 hover:bg-black/5 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors group/item"
                                    >
                                      <div className="flex items-center justify-between">
                                        <span className="font-medium">{childItem.label}</span>
                                        <ChevronRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300" />
                                      </div>
                                      {childItem.description && (
                                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-0 max-h-0 opacity-0 group-hover/item:mt-1 group-hover/item:max-h-20 group-hover/item:opacity-100 overflow-hidden transition-all duration-300">
                                          {childItem.description}
                                        </p>
                                      )}
                                    </a>
                                  ))}
                                </motion.div>
                              </div>
                            </div>
                          );
                        }

                        return (
                          <a
                            key={subItem.label}
                            href={subItem.url}
                            target={subItem.newTab ? "_blank" : undefined}
                            rel={
                              subItem.newTab ? "noopener noreferrer" : undefined
                            }
                            onClick={(e) => handleNavClick(e, subItem)}
                            className="block w-full text-left px-4 py-3 text-sm hover:dark:bg-white/5 hover:bg-black/5 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors group"
                          >
                            <div className="flex items-center justify-between">
                              <span className="font-medium">{subItem.label}</span>
                              <ChevronRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                            </div>
                            {subItem.description && (
                              <p className="text-xs text-gray-500 dark:text-gray-400 mt-0 max-h-0 opacity-0 group-hover:mt-1 group-hover:max-h-20 group-hover:opacity-100 overflow-hidden transition-all duration-300">
                                {subItem.description}
                              </p>
                            )}
                          </a>
                        );
                      })}
                    </motion.div>
                  )}
                </div>
              );
            }

            if (item.url) {
              return (
                <motion.a
                  key={item.label}
                  href={item.url}
                  target={item.newTab ? "_blank" : undefined}
                  rel={item.newTab ? "noopener noreferrer" : undefined}
                  onClick={(e) => handleNavClick(e, item)}
                  className="hover:text-cyan-400 transition-colors cursor-pointer"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  style={{ willChange: 'transform, opacity', transform: 'translateZ(0)' }}
                >
                  {item.label}
                </motion.a>
              );
            }

            return (
              <motion.a
                key={item.label}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className="hover:text-cyan-400 transition-colors cursor-pointer"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                style={{ willChange: 'transform, opacity', transform: 'translateZ(0)' }}
              >
                {item.label}
              </motion.a>
            );
          })}

          <motion.button
            onClick={handleGetStartedClick}
            className="px-5 py-2 bg-cyan-500 rounded-full text-black font-semibold hover:bg-cyan-400 transition-all cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{ willChange: 'transform', transform: 'translateZ(0)' }}
          >
            Get in touch
          </motion.button>
          <motion.button
            onClick={toggleTheme}
            className="ml-2 p-2 rounded-full dark:bg-white/10 bg-black/10 border dark:border-white/10 border-black/10 hover:dark:bg-white/20 hover:bg-black/20 transition-all cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            title={theme === "dark" ? "Light mode" : "Dark mode"}
            style={{ willChange: 'transform', transform: 'translateZ(0)' }}
          >
            {theme === "dark" ? (
              <Lightbulb className="w-5 h-5 text-yellow-400" />
            ) : (
              <Moon className="w-5 h-5 text-cyan-600" />
            )}
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="w-7 h-7" />
          ) : (
            <Menu className="w-7 h-7" />
          )}
        </button>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            className="absolute top-full left-0 w-full dark:bg-black/90 bg-white/90 backdrop-blur-lg shadow-lg border-t dark:border-white/10 border-black/10 md:hidden"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ willChange: 'transform, opacity', transform: 'translateZ(0)' }}
          >
            <div className="flex flex-col items-center gap-6 py-6">
              {navItems.map((item, index) => {
                if (item.dropdown) {
                  return (
                    <div key={item.label} className="w-full px-6">
                      <motion.button
                        type="button"
                        onClick={() =>
                          setOpenMobileDropdown(
                            openMobileDropdown === item.label
                              ? null
                              : item.label
                          )
                        }
                        className="w-full text-left text-lg hover:text-cyan-400 transition-colors cursor-pointer flex items-center justify-between"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileTap={{ scale: 0.97 }}
                        style={{ willChange: 'transform, opacity', transform: 'translateZ(0)' }}
                      >
                        {item.label}
                        <span className="text-sm text-gray-400">
                      {openMobileDropdown === item.label ? "-" : "+"}
                        </span>
                      </motion.button>

                      {openMobileDropdown === item.label && (
                        <div className="mt-3 flex flex-col gap-2 px-2">
                          {item.dropdown.map((subItem) => {
                            if (subItem.children) {
                              return (
                                <div key={subItem.label} className="w-full">
                                  <motion.button
                                    type="button"
                                    onClick={() =>
                                      setOpenMobileSubDropdown(
                                        openMobileSubDropdown === subItem.label
                                          ? null
                                          : subItem.label
                                      )
                                    }
                                    className="w-full text-center text-base text-gray-300 hover:text-cyan-400 transition-colors cursor-pointer flex items-center justify-center gap-2"
                                  >
                                    {subItem.label}
                                    <span className="text-xs">
                                      {openMobileSubDropdown === subItem.label
                                        ? "-"
                                        : "+"}
                                    </span>
                                  </motion.button>
                                  {openMobileSubDropdown === subItem.label && (
                                    <div className="mt-2 flex flex-col gap-2 px-2 border-l border-white/10 ml-4">
                                      {subItem.children.map((childItem) => (
                                        <a
                                          key={childItem.label}
                                          href={childItem.url}
                                          target={childItem.newTab ? "_blank" : undefined}
                                          rel={
                                            childItem.newTab
                                              ? "noopener noreferrer"
                                              : undefined
                                          }
                                          onClick={(e) =>
                                            handleNavClick(e, childItem)
                                          }
                                          className="text-center w-full text-sm text-gray-400 hover:text-cyan-400 transition-colors"
                                        >
                                          {childItem.label}
                                        </a>
                                      ))}
                                    </div>
                                  )}
                                </div>
                              );
                            }

                            return (
                              <a
                                key={subItem.label}
                                href={subItem.url}
                                target={subItem.newTab ? "_blank" : undefined}
                                rel={
                                  subItem.newTab
                                    ? "noopener noreferrer"
                                    : undefined
                                }
                                onClick={(e) => handleNavClick(e, subItem)}
                                className="text-center w-full text-base text-gray-300 hover:text-cyan-400 transition-colors"
                              >
                                {subItem.label}
                              </a>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                }

                if (item.url) {
                  return (
                    <motion.a
                      key={item.label}
                      href={item.url}
                      target={item.newTab ? "_blank" : undefined}
                      rel={item.newTab ? "noopener noreferrer" : undefined}
                      onClick={(e) => handleNavClick(e, item)}
                      className="text-lg w-full text-center hover:text-cyan-400 transition-colors cursor-pointer"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {item.label}
                    </motion.a>
                  );
                }

                return (
                  <motion.a
                    key={item.label}
                    href={`#${item.id}`}
                    onClick={(e) => handleNavClick(e, item.id)}
                    className="text-lg w-full text-center hover:text-cyan-400 transition-colors cursor-pointer"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.label}
                  </motion.a>
                );
              })}

              <motion.button
                onClick={handleGetStartedClick}
                className="px-5 py-2 bg-cyan-500 rounded-full text-black font-semibold hover:bg-cyan-400 transition-all cursor-pointer"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navItems.length * 0.1 }}
                whileTap={{ scale: 0.95 }}
              >
                Get in touch
              </motion.button>
              <motion.button
                onClick={toggleTheme}
                className="p-2 rounded-full dark:bg-white/10 bg-black/10 border dark:border-white/10 border-black/10 hover:dark:bg-white/20 hover:bg-black/20 transition-all cursor-pointer"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                whileTap={{ scale: 0.95 }}
                aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              >
                {theme === "dark" ? (
                  <Lightbulb className="w-5 h-5 text-yellow-400" />
                ) : (
                  <Moon className="w-5 h-5 text-cyan-600" />
                )}
              </motion.button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
