import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { schedule } from '../data';

const typeConfig = {
  general: { color: 'bg-white/10 text-white/60', dot: 'bg-white/40', border: 'border-white/10' },
  keynote: { color: 'bg-cyan-400/15 text-cyan-400', dot: 'bg-cyan-400', border: 'border-cyan-400/30' },
  competition: { color: 'bg-violet-400/15 text-violet-400', dot: 'bg-violet-400', border: 'border-violet-400/30' },
  workshop: { color: 'bg-amber-400/15 text-amber-400', dot: 'bg-amber-400', border: 'border-amber-400/30' },
  cultural: { color: 'bg-pink-400/15 text-pink-400', dot: 'bg-pink-400', border: 'border-pink-400/30' },
};

const typeLabel = {
  general: 'General',
  keynote: 'Keynote',
  competition: 'Competition',
  workshop: 'Workshop',
  cultural: 'Cultural',
};

export default function Schedule() {
  const [activeDay, setActiveDay] = useState(0);

  return (
    <section id="schedule" className="relative section-pad overflow-hidden">
      <div className="absolute inset-0 grid-dots opacity-15 pointer-events-none" />
      <div className="absolute left-1/4 top-1/4 w-[500px] h-[300px] bg-indigo-900/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <SectionHeading
          tag="Schedule"
          title="Mission Timeline"
          subtitle="Two days of packed action. Here's your flight plan for IGNITO 2026."
        />

        {/* Legend */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {Object.entries(typeLabel).map(([type, label]) => {
            const cfg = typeConfig[type];
            return (
              <div key={type} className="flex items-center gap-1.5 text-xs text-white/50">
                <span className={`w-2 h-2 rounded-full ${cfg.dot}`} />
                {label}
              </div>
            );
          })}
        </div>

        {/* Day tabs */}
        <div className="flex gap-2 mb-8 glass-card border border-white/10 p-1.5 rounded-2xl w-fit mx-auto">
          {schedule.map((day, idx) => (
            <button
              key={day.day}
              onClick={() => setActiveDay(idx)}
              className={`px-6 py-2 rounded-xl text-sm font-semibold font-orbitron transition-all duration-300 ${
                activeDay === idx
                  ? 'bg-gradient-to-r from-violet-600 to-cyan-500 text-white shadow-neon-cyan'
                  : 'text-white/50 hover:text-white'
              }`}
            >
              Day {idx + 1}
            </button>
          ))}
        </div>

        {/* Timeline */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeDay}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
          >
            <div className="mb-6 text-center">
              <span className="font-orbitron text-sm text-cyan-400 tracking-widest">
                {schedule[activeDay].day}
              </span>
            </div>

            <div className="relative">
              {/* Vertical connector */}
              <div className="absolute left-[7px] md:left-[calc(50%-1px)] top-0 bottom-0 w-0.5 timeline-connector" />

              <div className="space-y-4">
                {schedule[activeDay].events.map((event, idx) => {
                  const cfg = typeConfig[event.type];
                  const isRight = idx % 2 === 0;

                  return (
                    <motion.div
                      key={`${activeDay}-${idx}`}
                      initial={{ opacity: 0, x: isRight ? -20 : 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05, duration: 0.4 }}
                      className={`relative flex gap-4 md:gap-0 ${
                        isRight ? 'md:flex-row' : 'md:flex-row-reverse'
                      }`}
                    >
                      {/* Dot */}
                      <div className="absolute left-0 md:left-1/2 top-4 -translate-x-0 md:-translate-x-1/2 z-10">
                        <span className={`block w-3.5 h-3.5 rounded-full border-2 border-[#03010D] ${cfg.dot} shadow-lg`} />
                      </div>

                      {/* Card */}
                      <div className={`ml-8 md:ml-0 md:w-[46%] ${isRight ? 'md:pr-8' : 'md:pl-8'} ${isRight ? '' : 'md:ml-auto'}`}>
                        <div className={`glass-card border ${cfg.border} p-4 hover:scale-[1.02] transition-transform duration-200`}>
                          <div className="flex items-start justify-between gap-2 mb-1">
                            <h4 className="font-orbitron text-xs font-bold text-white leading-snug">{event.title}</h4>
                            <span className={`text-xs px-2 py-0.5 rounded-full shrink-0 ${cfg.color}`}>
                              {typeLabel[event.type]}
                            </span>
                          </div>
                          <div className="flex items-center gap-3 text-xs text-white/40 mt-1">
                            <span className="font-mono text-cyan-400">{event.time}</span>
                            <span className="flex items-center gap-1">
                              <MapPin size={10} />
                              {event.location}
                            </span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
