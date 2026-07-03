import { motion } from 'framer-motion';
import { ChevronDown, Rocket, Zap, Globe } from 'lucide-react';
import CountdownTimer from '../components/CountdownTimer';
import { stats } from '../data';

const floatVariants = {
  animate: {
    y: [0, -18, 0],
    transition: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
  },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden section-pad"
    >
      {/* Background nebula orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-violet-700/15 blur-[120px] nebula-orb pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-cyan-700/10 blur-[100px] nebula-orb pointer-events-none" style={{ animationDelay: '4s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-indigo-900/10 blur-[160px] pointer-events-none" />

      {/* Grid dots overlay */}
      <div className="absolute inset-0 grid-dots opacity-30 pointer-events-none" />

      <div className="relative z-10 text-center max-w-5xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass-card border border-cyan-400/30 text-cyan-400 text-xs font-semibold tracking-widest uppercase mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          Aug 15–16, 2026 &nbsp;·&nbsp; Annual Techfest
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-orbitron text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-wider mb-2"
        >
          <span className="gradient-text animate-glow">IGNITO</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="font-orbitron text-base md:text-xl text-white/50 tracking-[0.4em] uppercase mb-6"
        >
          Where Tech Meets the Cosmos
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-white/60 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-10"
        >
          Blast off into a universe of innovation, competition, and discovery.
          Join the brightest minds for India's most electrifying space-themed techfest.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-14"
        >
          <a href="#events" onClick={(e) => { e.preventDefault(); document.getElementById('events')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="btn-primary font-orbitron text-xs tracking-widest"
          >
            <Rocket size={16} />
            Explore Events
          </a>
          <a href="#competitions" onClick={(e) => { e.preventDefault(); document.getElementById('competitions')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="btn-outline font-orbitron text-xs tracking-widest"
          >
            <Zap size={16} />
            Competitions
          </a>
        </motion.div>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="flex flex-col items-center gap-3 mb-16"
        >
          <p className="text-white/40 text-xs font-medium tracking-widest uppercase">Launching In</p>
          <CountdownTimer />
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9 + i * 0.1 }}
              className="glass-card p-4 text-center border border-white/10 hover:border-cyan-400/30 transition-all duration-300"
            >
              <div className="font-orbitron text-xl font-bold gradient-text-gold">{stat.value}</div>
              <div className="text-white/50 text-xs mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Floating rocket */}
      <motion.div
        variants={floatVariants}
        animate="animate"
        className="absolute right-8 top-1/3 hidden xl:block opacity-20"
        aria-hidden="true"
      >
        <Globe size={180} className="text-violet-400" strokeWidth={0.5} />
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  );
}
