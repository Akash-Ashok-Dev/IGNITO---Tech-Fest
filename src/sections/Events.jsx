import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Users, Trophy, Tag } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { events } from '../data';

const colorMap = {
  cyan: {
    badge: 'bg-cyan-400/15 text-cyan-400 border-cyan-400/30',
    icon: 'text-cyan-400',
    glow: 'hover:border-cyan-400/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.2)]',
    tag: 'bg-cyan-400/10 text-cyan-400',
  },
  purple: {
    badge: 'bg-violet-400/15 text-violet-400 border-violet-400/30',
    icon: 'text-violet-400',
    glow: 'hover:border-violet-400/50 hover:shadow-[0_0_30px_rgba(124,58,237,0.2)]',
    tag: 'bg-violet-400/10 text-violet-400',
  },
  gold: {
    badge: 'bg-amber-400/15 text-amber-400 border-amber-400/30',
    icon: 'text-amber-400',
    glow: 'hover:border-amber-400/50 hover:shadow-[0_0_30px_rgba(245,158,11,0.2)]',
    tag: 'bg-amber-400/10 text-amber-400',
  },
  pink: {
    badge: 'bg-pink-400/15 text-pink-400 border-pink-400/30',
    icon: 'text-pink-400',
    glow: 'hover:border-pink-400/50 hover:shadow-[0_0_30px_rgba(236,72,153,0.2)]',
    tag: 'bg-pink-400/10 text-pink-400',
  },
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Events() {
  const [filter, setFilter] = useState('All');
  const categories = ['All', ...new Set(events.map(e => e.category))];

  const filtered = filter === 'All' ? events : events.filter(e => e.category === filter);

  return (
    <section id="events" className="relative section-pad overflow-hidden">
      <div className="absolute right-0 top-1/3 w-[400px] h-[400px] bg-cyan-800/8 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeading
          tag="Events"
          title="Stellar Events"
          subtitle="Handcrafted experiences across technology, design, and innovation. Choose your orbit."
        />

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 border ${
                filter === cat
                  ? 'bg-gradient-to-r from-violet-600 to-cyan-500 text-white border-transparent shadow-neon-cyan'
                  : 'glass-card border-white/10 text-white/60 hover:text-white hover:border-white/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Events grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filtered.map((event) => {
            const c = colorMap[event.color] || colorMap.cyan;
            return (
              <motion.div
                key={event.id}
                variants={cardVariants}
                className={`event-card glass-card border border-white/10 ${c.glow} p-6 flex flex-col gap-4 cursor-default`}
              >
                {/* Header */}
                <div className="flex items-start justify-between gap-3">
                  <div className="text-4xl leading-none">{event.icon}</div>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${c.badge}`}>
                    {event.category}
                  </span>
                </div>

                {/* Title & desc */}
                <div>
                  <h3 className="font-orbitron text-base font-bold text-white mb-2">{event.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed line-clamp-3">{event.description}</p>
                </div>

                {/* Meta */}
                <div className="space-y-1.5 text-xs text-white/40">
                  <div className="flex items-center gap-2">
                    <Calendar size={12} className={c.icon} />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={12} className={c.icon} />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users size={12} className={c.icon} />
                    <span>{event.participants} Participants</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {event.tags.map(t => (
                    <span key={t} className={`px-2 py-0.5 rounded text-xs ${c.tag}`}>{t}</span>
                  ))}
                </div>

                {/* Prize + CTA */}
                <div className="flex items-center justify-between mt-auto pt-3 border-t border-white/10">
                  <div className="flex items-center gap-1.5">
                    <Trophy size={13} className="text-amber-400" />
                    <span className="text-amber-400 text-xs font-bold">{event.prize}</span>
                  </div>
                  <button className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs text-white/70 hover:text-white border border-white/10 hover:border-white/30 transition-all duration-200">
                    Learn More →
                  </button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
