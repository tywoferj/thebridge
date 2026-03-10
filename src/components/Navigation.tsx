import { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  onApplyClick: () => void;
}

export default function Navigation({ onApplyClick }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '/#home' },
    { label: 'Features', href: '/#features' },
    { label: 'Pathways', href: '/#pathways' },
    { label: 'LMS', href: '/#lms' },
    { label: 'About', href: '/about' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-lg bg-gradient-to-b from-slate-950/80 via-blue-950/60 to-transparent border-b border-blue-400/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <a href="/#home" className="flex items-center gap-2 group cursor-pointer">
            <img src="/logo.jpeg" alt="The Bridge" className="h-10 w-auto object-contain" />
            <span className="font-bold text-xl text-white hidden sm:block">The Bridge</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-300 hover:text-white transition-colors duration-300 text-sm font-medium relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-accent group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={onApplyClick}
              className="relative px-6 py-2.5 font-semibold text-white rounded-lg overflow-hidden group transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-gradient-accent"></div>
              <span className="relative flex items-center gap-2">
                Apply
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:text-cyan-400 transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 space-y-3 animate-fade-in-down">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block text-gray-300 hover:text-white hover:bg-blue-400/10 px-4 py-2 rounded-lg transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={() => {
                onApplyClick();
                setIsOpen(false);
              }}
              className="w-full px-4 py-2 bg-gradient-accent text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
            >
              Apply
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}

import { ArrowRight } from 'lucide-react';