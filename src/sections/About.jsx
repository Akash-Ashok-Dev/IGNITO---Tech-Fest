import { motion } from 'framer-motion';
import { Satellite, Cpu, FlaskConical, Users } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';

const pillars = [
  {
    icon: Satellite,
    title: 'Innovation',
    desc: "Push the boundaries of what's possible. Build, break, and rebuild better.",
    color: 'text-cyan-400',
    bg: 'bg-cyan-400/10',
    border: 'border-cyan-400/20',
  },
  {
    icon: Cpu,
    title: 'Technology',
    desc: 'From AI to robotics, explore the cutting-edge tech shaping tomorrow.',
    color: 'text-violet-400',
    bg: 'bg-violet-400/10',
    border: 'border-violet-400/20',
  },
  {
    icon: FlaskConical,
    title: 'Research',
    desc: 'Discover, question, and present ideas that challenge the status quo.',
    color: 'text-amber-400',
    bg: 'bg-amber-400/10',
    border: 'border-amber-400/20',
  },
  {
    icon: Users,
    title: 'Community',
    desc: 'Connect with like-minded explorers, mentors, and industry leaders.',
    color: 'text-pink-400',
    bg: 'bg-pink-400/10',
    border: 'border-pink-400/20',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function About() {
  return (
    <section id="about" className="relative section-pad overflow-hidden">
      {/* Accent glow */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-violet-800/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeading
          tag="About IGNITO"
          title="Launch Into the Future"
          subtitle="IGNITO is not just a fest — it's a launchpad for the next generation of innovators, engineers, and dreamers. Themed around the cosmos, we explore the infinite frontier of technology."
        />

        {/* Main content */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="font-orbitron text-2xl font-bold text-white mb-4">
              Our <span className="gradient-text">Mission</span>
            </h3>
            <p className="text-white/60 leading-relaxed mb-4">
              IGNITO was born from a simple idea: technology is the new frontier. Just as humanity reached for the stars, we believe the next giant leap is through code, circuits, and creativity.
            </p>
            <p className="text-white/60 leading-relaxed mb-6">
              Every year, we bring together students, professionals, and visionaries to compete, collaborate, and celebrate the spirit of innovation. The cosmos is our canvas — and technology is our rocket.
            </p>
            <div className="flex flex-wrap gap-3">
              {['ISRO Partners', 'IEEE Supported', 'Industry Mentors', '30+ Colleges'].map(tag => (
                <span key={tag} className="px-3 py-1 glass-card border border-white/10 text-xs text-white/60 rounded-full">
                  ✦ {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Visual: Planet ring system */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex items-center justify-center"
          >
            <div className="relative w-64 h-64">
              {/* Outer ring */}
              <div className="absolute inset-0 rounded-full border border-violet-500/20 animate-spin-slow" />
              <div className="absolute inset-4 rounded-full border border-cyan-500/15 animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '15s' }} />
              <div className="absolute inset-8 rounded-full border border-amber-500/10 animate-spin-slow" style={{ animationDuration: '25s' }} />

              {/* Orbiting dots */}
              {[0, 90, 180, 270].map((deg, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 rounded-full bg-cyan-400 shadow-neon-cyan"
                  style={{
                    top: '50%',
                    left: '50%',
                    transformOrigin: '0 0',
                  }}
                  animate={{ rotate: [deg, deg + 360] }}
                  transition={{ duration: 8, repeat: Infinity, ease: 'linear', delay: i * 0.5 }}
                >
                  <span className="absolute w-2 h-2 rounded-full bg-cyan-400 -translate-x-1/2 -translate-y-1/2" style={{ marginLeft: '-120px' }} />
                </motion.div>
              ))}

              {/* Center planet */}
              <div className="absolute inset-16 rounded-full bg-gradient-to-br from-violet-600 to-indigo-900 shadow-neon-purple flex items-center justify-center">
                <span className="font-orbitron text-lg font-black text-white tracking-wider">2026</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Pillars */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {pillars.map(({ icon: Icon, title, desc, color, bg, border }) => (
            <motion.div
              key={title}
              variants={cardVariants}
              className={`glass-card p-6 border ${border} group hover:scale-105 transition-transform duration-300 cursor-default`}
            >
              <div className={`w-12 h-12 rounded-xl ${bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <Icon size={22} className={color} />
              </div>
              <h4 className={`font-orbitron text-sm font-bold ${color} mb-2`}>{title}</h4>
              <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
