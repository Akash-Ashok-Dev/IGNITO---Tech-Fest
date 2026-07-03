import { motion } from 'framer-motion';
import { MessageSquareQuote, X as XIcon } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { speakers } from '../data';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Speakers() {
  return (
    <section id="speakers" className="relative section-pad overflow-hidden">
      <div className="absolute right-0 top-1/4 w-[400px] h-[400px] bg-pink-900/8 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute left-0 bottom-0 w-[300px] h-[300px] bg-cyan-900/8 blur-[80px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeading
          tag="Speakers"
          title="Cosmic Visionaries"
          subtitle="Learn from industry pioneers, researchers, and entrepreneurs who are building the future. Our speakers bring insights from the frontier of technology and space."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {speakers.map((speaker) => (
            <motion.div
              key={speaker.id}
              variants={cardVariants}
              className="glass-card border border-white/10 hover:border-white/25 p-6 flex flex-col items-center text-center gap-4 group hover:shadow-glass transition-all duration-400 cursor-default"
            >
              {/* Avatar */}
              <div className="relative">
                <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${speaker.color} flex items-center justify-center text-white font-orbitron font-bold text-xl shadow-lg`}>
                  {speaker.initials}
                </div>
                {/* Ring */}
                <div className="absolute -inset-1 rounded-full border border-white/10 group-hover:border-white/30 transition-colors duration-300" />
                <div className="absolute -inset-3 rounded-full border border-white/5 group-hover:border-white/10 transition-colors duration-300" />
                {/* Orbiting dot */}
                <motion.div
                  className="absolute top-0 left-1/2 w-2 h-2 rounded-full bg-cyan-400 -translate-x-1/2 -translate-y-1/2"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                  style={{ transformOrigin: '0 52px' }}
                />
              </div>

              {/* Info */}
              <div>
                <h3 className="font-orbitron text-sm font-bold text-white group-hover:text-cyan-300 transition-colors duration-300 mb-1">
                  {speaker.name}
                </h3>
                <p className="text-white/50 text-xs mb-3 leading-snug">{speaker.role}</p>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-white/60">
                  <MessageSquareQuote size={10} className="text-cyan-400" />
                  {speaker.topic}
                </div>
              </div>

              {/* Social */}
              <div className="flex items-center gap-1.5 text-white/30 text-xs mt-auto">
                <XIcon size={11} className="text-sky-400" />
                <span>{speaker.social}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Quote banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-12 glass-card border border-violet-400/20 p-8 md:p-12 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-violet-900/20 via-transparent to-cyan-900/20 pointer-events-none" />
          <div className="text-5xl mb-4 opacity-30 font-orbitron text-violet-400">"</div>
          <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed italic relative z-10">
            The cosmos is full of unexplored frontiers. Technology is our rocket — curiosity is our fuel. IGNITO brings both together.
          </p>
          <p className="text-sm text-cyan-400 font-semibold mt-4">— Dr. Asha Mehta, Senior Scientist, ISRO</p>
        </motion.div>
      </div>
    </section>
  );
}
