import { motion } from 'framer-motion';
import { Trophy, Users, Calendar, ChevronRight, Layers } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { competitions } from '../data';

const difficultyColor = {
  Advanced: 'text-red-400 bg-red-400/10 border-red-400/30',
  Intermediate: 'text-amber-400 bg-amber-400/10 border-amber-400/30',
  Open: 'text-green-400 bg-green-400/10 border-green-400/30',
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

export default function Competitions() {
  return (
    <section id="competitions" className="relative section-pad overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 grid-dots opacity-20 pointer-events-none" />
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[600px] h-[300px] bg-violet-900/15 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeading
          tag="Competitions"
          title="Battle for the Stars"
          subtitle="From code wars to startup pitches, prove your mettle in our galactic arenas. Six unique competitions, one cosmic leaderboard."
        />

        {/* Prize pool highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-6 mb-12"
        >
          {[
            { label: 'Total Prize Pool', value: '₹5,00,000+', icon: '🏆' },
            { label: 'Competitions', value: '6 Events', icon: '⚡' },
            { label: 'Registration', value: 'Free & Open', icon: '🚀' },
          ].map(item => (
            <div key={item.label} className="glass-card border border-white/10 px-6 py-4 text-center min-w-[180px] hover:border-amber-400/30 transition-all duration-300">
              <div className="text-2xl mb-1">{item.icon}</div>
              <div className="font-orbitron text-xl font-bold gradient-text-gold">{item.value}</div>
              <div className="text-white/40 text-xs mt-1">{item.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Competitions grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {competitions.map((comp) => (
            <motion.div
              key={comp.id}
              variants={cardVariants}
              className="glass-card border border-white/10 hover:border-violet-400/40 hover:shadow-[0_0_40px_rgba(124,58,237,0.15)] transition-all duration-300 p-6 flex flex-col gap-4 group cursor-default"
            >
              {/* Header */}
              <div className="flex items-start justify-between">
                <span className="text-3xl">{comp.icon}</span>
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${difficultyColor[comp.difficulty] || difficultyColor.Open}`}>
                  {comp.difficulty}
                </span>
              </div>

              {/* Title */}
              <div>
                <span className="text-xs text-violet-400 font-medium tracking-wide uppercase mb-1 block">{comp.category}</span>
                <h3 className="font-orbitron text-base font-bold text-white group-hover:text-violet-300 transition-colors duration-300">
                  {comp.title}
                </h3>
              </div>

              <p className="text-white/50 text-sm leading-relaxed">{comp.description}</p>

              {/* Rounds */}
              <div>
                <div className="flex items-center gap-1.5 text-xs text-white/40 mb-2">
                  <Layers size={12} className="text-violet-400" />
                  <span>Rounds</span>
                </div>
                <div className="flex items-center gap-1 flex-wrap">
                  {comp.rounds.map((round, idx) => (
                    <div key={round} className="flex items-center gap-1">
                      <span className="text-xs text-white/60 bg-white/5 px-2 py-0.5 rounded">{round}</span>
                      {idx < comp.rounds.length - 1 && <ChevronRight size={10} className="text-white/20" />}
                    </div>
                  ))}
                </div>
              </div>

              {/* Meta */}
              <div className="grid grid-cols-2 gap-2 text-xs text-white/40">
                <div className="flex items-center gap-1.5">
                  <Users size={11} className="text-violet-400" />
                  <span>Team: {comp.teamSize}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Calendar size={11} className="text-violet-400" />
                  <span>By {comp.deadline.split(',')[0]}</span>
                </div>
              </div>

              {/* Prize + Register */}
              <div className="flex items-center justify-between pt-3 border-t border-white/10 mt-auto">
                <div className="flex items-center gap-1.5">
                  <Trophy size={13} className="text-amber-400" />
                  <span className="text-amber-400 font-bold text-xs">{comp.prize}</span>
                </div>
                <button className="px-4 py-1.5 rounded-lg bg-gradient-to-r from-violet-600/80 to-cyan-600/80 text-white text-xs font-semibold hover:from-violet-600 hover:to-cyan-500 transition-all duration-300 hover:shadow-neon-purple">
                  Register
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
