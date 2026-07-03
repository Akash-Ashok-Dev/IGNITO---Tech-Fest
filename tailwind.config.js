/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        space: {
          black: '#03010D',
          deep: '#070415',
          purple: '#6B21A8',
          violet: '#7C3AED',
          blue: '#1D4ED8',
          cyan: '#06B6D4',
          gold: '#F59E0B',
          pink: '#EC4899',
          nebula: '#4C1D95',
        }
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'twinkle': 'twinkle 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          'from': { textShadow: '0 0 10px #06B6D4, 0 0 20px #06B6D4, 0 0 40px #06B6D4' },
          'to': { textShadow: '0 0 20px #7C3AED, 0 0 40px #7C3AED, 0 0 80px #7C3AED' },
        },
        twinkle: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.3 },
        },
      },
      backgroundImage: {
        'nebula-gradient': 'radial-gradient(ellipse at center, #1a0533 0%, #03010D 70%)',
        'cosmic-gradient': 'linear-gradient(135deg, #03010D 0%, #0f0626 50%, #03010D 100%)',
        'glow-cyan': 'radial-gradient(circle, rgba(6,182,212,0.2) 0%, transparent 70%)',
        'glow-purple': 'radial-gradient(circle, rgba(124,58,237,0.2) 0%, transparent 70%)',
      },
      boxShadow: {
        'neon-cyan': '0 0 15px rgba(6,182,212,0.5), 0 0 30px rgba(6,182,212,0.3)',
        'neon-purple': '0 0 15px rgba(124,58,237,0.5), 0 0 30px rgba(124,58,237,0.3)',
        'neon-gold': '0 0 15px rgba(245,158,11,0.5), 0 0 30px rgba(245,158,11,0.3)',
        'glass': '0 8px 32px rgba(0,0,0,0.5)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
