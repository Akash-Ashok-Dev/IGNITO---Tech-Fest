# 🚀 IGNITO — Space-Themed Techfest Website

<div align="center">

![IGNITO Banner](https://img.shields.io/badge/IGNITO-Techfest%202026-blueviolet?style=for-the-badge&logo=rocket&logoColor=white)
![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)

**A premium, fully responsive space-themed techfest website built as part of a frontend developer selection assignment.**

[Live Demo](#) · [Report Bug](#) · [Request Feature](#)

</div>

---

## 🌌 Overview

**IGNITO** is the annual techfest themed around the cosmos — where technology meets the universe. This project is a frontend implementation submitted as part of a developer selection/interview process, showcasing creativity, responsiveness, animations, and overall user experience.

The design draws from deep space aesthetics — dark nebula backgrounds, glowing neon elements, glassmorphism cards, animated starfields, and smooth Framer Motion transitions throughout.

---

## ✨ Features

- 🌟 **Animated Starfield** — Canvas-based twinkling stars with shooting star effects (fixed background)
- 🌠 **Comet Cursor Trail** — A glowing trail follows your cursor, fading over time in the IGNITO gradient (cyan → violet → pink)
- ⏳ **Live Countdown Timer** — Real-time countdown to event day (Aug 15, 2026)
- 🪐 **Hero Section** — Full-screen with orbital planet ring animation, stats grid, and dual CTAs
- 🔭 **About Section** — Mission statement with an animated orbiting planet visual
- 🎟️ **Events Section** — 6 event cards with category filter tabs and hover glow effects
- 🏆 **Competitions Section** — 6 competition cards with difficulty badges, prize pool, and register buttons
- 🎤 **Speakers Section** — Speaker cards with gradient avatars and orbiting dot animation
- 📅 **Schedule Section** — Two-day animated timeline with tab-switching and color-coded event types
- 📬 **Contact Section** — Contact form with loading + success states, info cards, and venue placeholder
- 📱 **Fully Responsive** — Mobile-first design with hamburger nav and responsive grids
- 🎨 **Glassmorphism UI** — Cards with `backdrop-blur` and subtle neon borders throughout

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 |
| Build Tool | Vite 8 |
| Styling | Tailwind CSS v3 |
| Animations | Framer Motion |
| Icons | Lucide React |
| Fonts | Google Fonts — Orbitron & Inter |

---

## 📁 Project Structure

```
ignito/
├── public/
├── src/
│   ├── components/
│   │   ├── CursorTrail.jsx     # Comet cursor effect (canvas)
│   │   ├── StarField.jsx       # Animated starfield background (canvas)
│   │   ├── Navbar.jsx          # Sticky glassmorphism navbar
│   │   ├── Footer.jsx          # Footer with links & socials
│   │   ├── CountdownTimer.jsx  # Live countdown to event date
│   │   └── SectionHeading.jsx  # Reusable section heading component
│   ├── sections/
│   │   ├── Hero.jsx            # Hero section
│   │   ├── About.jsx           # About IGNITO
│   │   ├── Events.jsx          # Events grid with filter
│   │   ├── Competitions.jsx    # Competitions cards
│   │   ├── Speakers.jsx        # Speaker profiles
│   │   ├── Schedule.jsx        # Two-day event timeline
│   │   └── Contact.jsx         # Contact form & info
│   ├── data/
│   │   └── index.js            # All dummy data (events, competitions, speakers, schedule)
│   ├── App.jsx                 # Root component
│   ├── main.jsx                # React entry point
│   └── index.css               # Global styles + Tailwind layers
├── index.html                  # HTML shell with SEO meta tags
├── tailwind.config.js          # Tailwind theme (space palette, animations)
├── vite.config.js
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js ≥ 18
- npm ≥ 9

### Installation & Development

```bash
# 1. Clone the repository
git clone https://github.com/your-username/ignito-techfest.git
cd ignito-techfest

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
# Output is in the /dist folder
```

### Preview Production Build

```bash
npm run preview
```

---

## 🌐 Deployment

### Vercel (Recommended)

```bash
npm i -g vercel
vercel --prod
```

### Netlify

1. Run `npm run build`
2. Drag & drop the `/dist` folder onto [netlify.com/drop](https://app.netlify.com/drop)

Or connect your GitHub repository to Vercel/Netlify for automatic deployments on every push.

---

## 🎨 Design System

| Token | Value | Usage |
|---|---|---|
| Space Black | `#03010D` | Page background |
| Cosmic Violet | `#7C3AED` | Primary accent |
| Nebula Cyan | `#06B6D4` | Secondary accent, borders |
| Star Gold | `#F59E0B` | Prize amounts, highlights |
| Cosmic Pink | `#EC4899` | Tertiary accent |

**Fonts:** `Orbitron` (headings, futuristic feel) · `Inter` (body text, readability)

---

## 📝 Assignment Context

> This project was built as part of a **frontend developer selection process** for the IGNITO Techfest team.
>
> **Requirements fulfilled:**
> - ✅ React + Vite + Tailwind CSS stack
> - ✅ Home, Events, Competitions, Contact sections
> - ✅ Additional sections: About, Speakers, Schedule
> - ✅ Dummy data for all sections
> - ✅ Responsive design
> - ✅ Creative animations & interactions
> - ✅ Premium UX with space theme
> - ✅ Production build verified (zero errors)

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](./LICENSE) file for details.

---

<div align="center">

Made with 🚀 by **Akash Ashok** for IGNITO Techfest 2026

</div>
