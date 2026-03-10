import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-blue-400/10 bg-gradient-to-b from-transparent to-slate-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img src="/logo.jpeg" alt="The Bridge" className="h-10 w-auto object-contain" />
              <span className="font-bold text-white">The Bridge</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Empowering Nigerian students and NYSC corpers to achieve their dreams through quality education and opportunities.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-white">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: 'Home', href: '/#home' },
                { label: 'Cookies Policy', href: '/cookies-policy' },
                { label: 'Privacy Policy', href: '/privacy-policy' },
                { label: 'Terms of Use', href: '/terms-of-use' },
              ].map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-white">Resources</h4>
            <ul className="space-y-2">
              {[
                { label: 'Blog', href: '/blog' },
                { label: 'FAQ', href: '/faq' },
                { label: 'Support', href: '#' },
              ].map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-white">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-400 text-sm">
                <Mail size={16} className="text-cyan-400" />
                <span>info@thebridge.ng</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400 text-sm">
                <Phone size={16} className="text-cyan-400" />
                <span>+234 (0) 800 000 0000</span>
              </li>
              <li className="flex items-start gap-2 text-gray-400 text-sm">
                <MapPin size={16} className="text-cyan-400 flex-shrink-0 mt-0.5" />
                <span>Lagos, Nigeria</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-400/10 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
            <p className="text-gray-500 text-sm">
              © {currentYear} The Bridge. All rights reserved.
            </p>

            <div className="flex items-center gap-6">
              {[
                { icon: Linkedin, label: 'LinkedIn' },
                { icon: Twitter, label: 'Twitter' },
                { icon: Facebook, label: 'Facebook' },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  className="w-10 h-10 rounded-lg glass-effect flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-400/50 transition-all duration-300 group"
                >
                  <Icon size={18} className="group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}