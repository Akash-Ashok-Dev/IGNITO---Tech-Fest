import { useState, useEffect } from 'react';
import { eventDate } from '../data';

function Digit({ value, label }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <div className="relative w-16 h-16 md:w-20 md:h-20 glass-card flex items-center justify-center
                      border border-cyan-400/30 shadow-neon-cyan overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-violet-500/10" />
        <span className="font-orbitron text-2xl md:text-3xl font-bold text-cyan-400 tabular-nums z-10">
          {String(value).padStart(2, '0')}
        </span>
      </div>
      <span className="text-white/50 text-xs uppercase tracking-widest font-medium">{label}</span>
    </div>
  );
}

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calc = () => {
      const diff = eventDate - new Date();
      if (diff <= 0) return setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };
    calc();
    const id = setInterval(calc, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex items-center gap-3 md:gap-4" aria-label="Countdown to IGNITO">
      <Digit value={timeLeft.days} label="Days" />
      <span className="font-orbitron text-2xl text-cyan-400/60 mb-5">:</span>
      <Digit value={timeLeft.hours} label="Hours" />
      <span className="font-orbitron text-2xl text-cyan-400/60 mb-5">:</span>
      <Digit value={timeLeft.minutes} label="Mins" />
      <span className="font-orbitron text-2xl text-cyan-400/60 mb-5">:</span>
      <Digit value={timeLeft.seconds} label="Secs" />
    </div>
  );
}
