import { motion } from 'framer-motion';
import { Twitter, Linkedin, Github, Mail } from 'lucide-react';

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
    <footer className="relative dark:bg-black bg-white border-t dark:border-white/10 border-black/10 py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-60 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              {/* <img
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMPDxAQDxAVFQ8WEBEQFhEVEBYQFRIVFRcYFhgVFxYYHygiGBolHxgVITEhJikrLi4uGSszODMtNygtLy8BCgoKDg0OGhAQFy0dHh0tKysuLTA3KyssLSswLjcuLS0tNy0tLS0tNjItNy8tLS8tLzctLS0tNy0uLS0tLS0tK//AABEIAMgAyAMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABgcDBAUBAgj/xABCEAABAwIDBQQGCAQFBQEAAAABAAIDBBEFEiEGEzFBUSJhgZEHMlJxkrEUFSNCU6HB0WJysuEzY6Lw8SRzgsLSFv/EABkBAQEBAQEBAAAAAAAAAAAAAAABAgQDBf/EACYRAQEAAgEEAQQCAwAAAAAAAAABAhEDBBIhMUEiUWGBBaETMkL/2gAMAwEAAhEDEQA/ALxREQfLmgixFwvncN9lvwhZEQY9w32W/CE3DfZb8IWREGPcN9lvwhNw32W/CFkRBj3DfZb8ITcN9lvwhZEQY9w32W/CE3DfZb8IWREGPcN9keQXxIxjQXODQ0akkAALMuPtXROnpJGsPaHbt7WXWyNYSXKS10YRG9oczI5p4EAEFZNy32W/CFX2wWKmOYwOPYf6o6PH76+SsRSXb05+G8Wfa+Nw32W/CE3DfZb8IWRFXix7hvst+EJuG+y34QsiIMe4b7LfhCbhvst+ELIiD5a0AWAsF9IiAiIgIiICIiAiIgIiIPF4421PBern47Tvlp5GR+sQLDrY6hFxm7JWaLEoXGzZmE9A8XW1dVTPQys9aJ497Cs+G7QTUxFnFzObHajw6LHc+hl0G5vDLaz0XNwXGI6tmZhs4WzMPFq6S2+fljcbq+1TbQUxoq4lmgDxKz3E38uIVqUk4kjZI3g5ocPEXUP9JVFeOKcDVpyO9zuH5/NdTYOq3lEwc2F0flqPyIWZ4rt57/k4cc/meEiREWnCIiICIiAiIgIiICIiAiIg8XqL4keGgkkADUkmwCD6XjnAcSo3ie1LW3bAMx9s6DwHNRitxKWY3keT3XsB4LNykdnF0PJn5viJ3U43BH60rb9Bd3yXPl2ugHAPPub+5UHKxPKz3124/wAdxz3bU4O2kHNj/hH7rSrsSw+qFpLsdyfkII8Rf81DnFYXlTurc6LCXeNsdZ28w6oZIx2ZhGZrh6srDy+Ss2iqWzRskYey5ocPFQuanFRgzHffiuQe5riCPL5Ld9HFWXwSRE+o+47g7X5g+a1PFcfUzvw7/nG6rtbS0m+pJ2c925w97e0Pkoz6L57tqI+jmP8AMEfoFOXC4tyVe+j5u7rqqLo1w+F9v1K1fbw47viyx/axERFXMIiICIiAiIgIiICIiDxEWGqqGxMc9xsALoSb8R8V1YyBhe82HTmT0Cg+L4w+oOptHyYOHj1XtdVSVkugJ5NYOQXbwvZdos6c5nccg4D3nmsXd9PqceHH007uT/ZFqakklNo2Fx7hp/Ze4jQPgc1slg4jNYG9grKiiawANaAOgFgoNtm+9Tboxv6qXHUevB1mXLydutRwHFSXZfAo6iJ0kwJ7VhZ1uHHh3qMPKsfZeLJSQjq3N8RupjN1vruS4cf03VrUk2Opjwzj3P8A3XOqdg2H/DmcO5zQ75WUyXjnAC5Nh1XpqPl49Tyz/pGI8OdR4ZUxyuB7MpBF7WcNPFcn0dSiOOrleQ2Mbu5PAWzXW1tttBEYHQRPDnuIBy6gAa8eCgkc0r2inYSWl98gHrONhy48lm3y7OLjyz4su7x3VcWEYgKmFszRZri6wPGwcR+iiOzbMuNVoHC0h83NKlWz1Caelhid6zW6+86n5qO7NszYviL/AGbN8yP/AJWnDjqd2vSaIiKvFjmvldl9bKbe9fNJOJI2SDg5ocPEXWZcXZWW8MsR4w1M8PgHlzf9LmoO"
                alt="Tutelar Tech Labs logo"
                className="h-20 w-10 object-contain block"
              /> */}
              <span className="text-2xl font-bold">Tutelar Tech Labs</span>
            </div>
            <p className="dark:text-gray-400 text-gray-600 mb-6 max-w-md">
              Advanced cybersecurity solutions protecting your digital future with cutting-edge technology and expert insights.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="p-3 dark:bg-[#0D0F1A] bg-black/5 border dark:border-white/10 border-black/10 rounded-lg hover:border-cyan-500/40 hover:dark:bg-cyan-500/10 hover:bg-black/10 transition-all"
                  style={{ willChange: 'transform', transform: 'translateZ(0)' }}
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
          {/* <div>
            <h4 className="text-lg font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              {links.product.map((link, index) => (
                <li key={index}>
                  <a href="#" className="dark:text-gray-400 text-gray-700 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div> */}

          {/* Company Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {links.company.map((link, index) => (
                <li key={index}>
                  <a href="#" className="dark:text-gray-400 text-gray-700 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
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
                  <a href="#" className="dark:text-gray-400 text-gray-700 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t dark:border-white/10 border-black/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="dark:text-gray-400 text-gray-700 text-sm">
            © {new Date().getFullYear()} Tutelar Tech Labs. All rights reserved.
          </p>
          <div className="flex gap-6">
            {links.legal.map((link, index) => (
              <motion.a
                key={index}
                href="#"
                className="dark:text-gray-400 text-gray-700 hover:text-cyan-600 dark:hover:text-cyan-400 text-sm transition-colors"
                whileHover={{ scale: 1.05 }}
                style={{ willChange: 'transform, opacity', transform: 'translateZ(0)' }}
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
