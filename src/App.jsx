import StarField from './components/StarField';
import CursorTrail from './components/CursorTrail';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Events from './sections/Events';
import Competitions from './sections/Competitions';
import Speakers from './sections/Speakers';
import Schedule from './sections/Schedule';
import Contact from './sections/Contact';

export default function App() {
  return (
    <div className="relative min-h-screen bg-space-black font-inter overflow-x-hidden cursor-none">
      {/* Animated starfield canvas — fixed background */}
      <StarField />

      {/* Comet cursor trail */}
      <CursorTrail />

      {/* Sticky navigation */}
      <Navbar />

      {/* Main content */}
      <main>
        <Hero />
        <About />
        <Events />
        <Competitions />
        <Speakers />
        <Schedule />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
