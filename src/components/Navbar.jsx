import { motion } from "motion/react";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Shield, Menu, X } from "lucide-react";

export function Navbar() {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openMobileDropdown, setOpenMobileDropdown] = useState(null);
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
    }, 350);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", id: "home" },
    {
      label: "Services",
      dropdown: [
        {
          label: "Enterprise Security",
          url: "/enterprise-security",
          newTab: false,
        },
        { label: "IAM", url: "/iam", newTab: false },
        { label: "SOC Services", url: "/soc-services", newTab: false },
        {
          label: "Cybersecurity Services",
          url: "/cybersecurity-services",
          newTab: false,
        },
        { label: "IOT", url: "/iot-security", newTab: false },
        { label: "Data Security", url: "/data-security", newTab: false },
        {
          label: "Application Security",
          url: "/application-security",
          newTab: false,
        },
        { label: "Cloud Security", url: "/cloud-security", newTab: false },
      ],
    },
    {
      label: "Products",
      dropdown: [
        {
          label: "Next-Generation Firewall (NGFW)",
          url: "/ngfw",
          newTab: false,
        },
        { label: "SASE / ZTNA", url: "/sase-ztna", newTab: false },
        { label: "XDR", url: "/xdr", newTab: false },
        { label: "SOAR", url: "/soar", newTab: false },
        { label: "SIEM", url: "/siem", newTab: false },
        { label: "CNAPP", url: "/cnapp", newTab: false },
        { label: "DevSecOps Integration", url: "/devsecops", newTab: false },
        { label: "DLP & Email DLP", url: "/dlp", newTab: false },
        { label: "DSPM", url: "/dspm", newTab: false },
        { label: "OT/IoT Security", url: "/ot-iot-security", newTab: false },
        { label: "IAM", url: "/iam-product", newTab: false },
      ],
    },
    { label: "Partnership", id: "partnership" },
    { label: "About", id: "about" },
    { label: "Career", url: "/career", newTab: false },
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
          ? "bg-black/80 backdrop-blur-lg border-b border-white/10"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
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
        >
          <Shield className="w-7 h-7 text-cyan-400" />
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
                  >
                    {item.label}
                  </motion.button>

                  {openDropdown === item.label && (
                    <motion.div
                      className="absolute left-0 top-full mt-1 w-60 rounded-lg bg-black/95 border border-white/10 shadow-lg shadow-black/40 backdrop-blur-xl py-3 z-50"
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      onMouseEnter={() => openDropdownWithLabel(item.label)}
                      onMouseLeave={closeDropdownWithDelay}
                    >
                      {item.dropdown.map((subItem) => (
                        <a
                          key={subItem.label}
                          href={subItem.url}
                          target={subItem.newTab ? "_blank" : undefined}
                          rel={
                            subItem.newTab ? "noopener noreferrer" : undefined
                          }
                          onClick={(e) => handleNavClick(e, subItem)}
                          className="block w-full text-left px-4 py-2 text-sm hover:bg-white/5 hover:text-cyan-400 transition-colors"
                        >
                          {subItem.label}
                        </a>
                      ))}
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
          >
            Get in touch
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
            className="absolute top-full left-0 w-full bg-black/90 backdrop-blur-lg shadow-lg border-t border-white/10 md:hidden"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
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
                      >
                        {item.label}
                        <span className="text-sm text-gray-400">
                      {openMobileDropdown === item.label ? "-" : "+"}
                        </span>
                      </motion.button>

                      {openMobileDropdown === item.label && (
                        <div className="mt-3 flex flex-col gap-2 px-2">
                          {item.dropdown.map((subItem) => (
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
                          ))}
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
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
