import { motion } from 'framer-motion';
import { Rocket, Mail, ExternalLink, Heart, X as XIcon, ArrowUp } from 'lucide-react';

const footerLinks = {
  Explore: ['Home', 'About', 'Events', 'Competitions'],
  Connect: ['Speakers', 'Schedule', 'Contact', 'Register'],
};

const socials = [
  { icon: Heart, href: '#', label: 'Instagram', color: 'hover:text-pink-400' },
  { icon: XIcon, href: '#', label: 'Twitter / X', color: 'hover:text-sky-400' },
  { icon: ExternalLink, href: '#', label: 'GitHub', color: 'hover:text-white' },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative border-t border-white/10 bg-gradient-to-b from-transparent to-black/40 overflow-hidden">
      {/* Nebula glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-violet-700/10 blur-[80px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Rocket size={20} className="text-cyan-400" />
              <span className="font-orbitron font-bold text-xl tracking-widest text-white">IGNITO</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs mb-6">
              The ultimate space-themed techfest. Where brilliant minds launch into orbit and ignite the future through technology and innovation.
            </p>
            <div className="flex items-center gap-1.5 text-white/40 text-sm mb-4">
              <Mail size={14} className="text-cyan-400" />
              <a href="mailto:ignito@techfest.edu" className="hover:text-cyan-400 transition-colors">
                ignito@techfest.edu
              </a>
            </div>
            {/* Socials */}
            <div className="flex items-center gap-3 mt-4">
              {socials.map(({ icon: Icon, href, label, color }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className={`w-9 h-9 glass-card flex items-center justify-center text-white/50 ${color} border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-110`}
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <h4 className="font-orbitron text-xs font-bold uppercase tracking-widest text-cyan-400 mb-4">{group}</h4>
              <ul className="space-y-2.5">
                {links.map(link => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="text-sm text-white/50 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            © 2026 IGNITO Techfest. All rights reserved. Made with 🚀 by the IGNITO Team.
          </p>
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="w-9 h-9 glass-card flex items-center justify-center text-white/50 hover:text-cyan-400 border border-white/10 hover:border-cyan-400/40 hover:shadow-neon-cyan transition-all duration-300 hover:-translate-y-1"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
