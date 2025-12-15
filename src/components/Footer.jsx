import { motion } from 'motion/react';
import { Shield, Twitter, Linkedin, Github, Mail } from 'lucide-react';

export function Footer() {
  const links = {
    product: ['Features', 'Security', 'Pricing', 'Enterprise'],
    company: ['About Us', 'Careers', 'Press', 'Partners'],
    resources: ['Blog', 'Documentation', 'Support', 'Community'],
    legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'GDPR'],
  };

  const socialLinks = [
    { icon: <Twitter className="w-5 h-5" />, label: 'Twitter', href: '#' },
    { icon: <Linkedin className="w-5 h-5" />, label: 'LinkedIn', href: '#' },
    { icon: <Github className="w-5 h-5" />, label: 'GitHub', href: '#' },
    { icon: <Mail className="w-5 h-5" />, label: 'Email', href: 'mailto:contact@tutelartechlabs.com' },
  ];

  return (
    <footer className="relative bg-black border-t border-white/10 py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Shield className="w-8 h-8 text-cyan-400" />
              <span className="text-2xl font-bold">Tutelar Tech Labs</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Advanced cybersecurity solutions protecting your digital future with cutting-edge technology and expert insights.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="p-3 bg-[#0D0F1A] border border-white/10 rounded-lg hover:border-cyan-500/40 hover:bg-cyan-500/10 transition-all"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              {links.product.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {links.company.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              {links.resources.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Tutelar Tech Labs. All rights reserved.
          </p>
          <div className="flex gap-6">
            {links.legal.map((link, index) => (
              <motion.a
                key={index}
                href="#"
                className="text-gray-400 hover:text-cyan-400 text-sm transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                {link}
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative bottom glow */}
      <div className="absolute bottom-0 left-1/4 w-96 h-32 bg-[#0ABCF9] opacity-10 blur-[100px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-32 bg-[#6A4DFB] opacity-10 blur-[100px]" />
    </footer>
  );
}
