import { motion } from 'framer-motion';

export default function SectionHeading({ tag, title, subtitle, center = true }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6 }}
      className={`mb-14 ${center ? 'text-center' : ''}`}
    >
      {tag && (
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase
                         bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          {tag}
        </span>
      )}
      <h2 className="font-orbitron text-3xl md:text-4xl lg:text-5xl font-bold gradient-text mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className={`text-white/60 text-base md:text-lg max-w-2xl leading-relaxed ${center ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
      {/* Decorative line */}
      <div className={`mt-6 flex items-center gap-3 ${center ? 'justify-center' : ''}`}>
        <div className="h-px w-16 bg-gradient-to-r from-transparent to-cyan-400" />
        <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-neon-cyan" />
        <div className="h-px w-16 bg-gradient-to-l from-transparent to-violet-400" />
      </div>
    </motion.div>
  );
}
