import { useEffect, useRef } from 'react';

// Matches the IGNITO heading gradient: cyan-400 → violet-400 → pink-400
// Each point in the trail gets a colour interpolated across this palette
const GRADIENT_STOPS = [
  { r: 34,  g: 211, b: 238 },  // cyan-400   (#22d3ee)
  { r: 167, g: 139, b: 250 },  // violet-400 (#a78bfa)
  { r: 244, g: 114, b: 182 },  // pink-400   (#f472b6)
];

function lerpColor(stops, t) {
  // t in [0,1]: spread evenly across gradient stops
  const scaled = t * (stops.length - 1);
  const idx    = Math.min(Math.floor(scaled), stops.length - 2);
  const frac   = scaled - idx;
  const a = stops[idx];
  const b = stops[idx + 1];
  return {
    r: Math.round(a.r + (b.r - a.r) * frac),
    g: Math.round(a.g + (b.g - a.g) * frac),
    b: Math.round(a.b + (b.b - a.b) * frac),
  };
}

const TRAIL_LIFETIME = 600; // ms — how long a point lives after it's added
const MAX_POINTS = 120;

export default function CursorTrail() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx    = canvas.getContext('2d');
    let animId;

    // Each entry: { x, y, born: timestamp }
    const points = [];

    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const onMove = (e) => {
      points.push({ x: e.clientX, y: e.clientY, born: performance.now() });
      if (points.length > MAX_POINTS) points.shift();
    };
    window.addEventListener('mousemove', onMove);

    const draw = () => {
      const now = performance.now();

      // Expire old points
      while (points.length && now - points[0].born > TRAIL_LIFETIME) {
        points.shift();
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (points.length < 2) {
        animId = requestAnimationFrame(draw);
        return;
      }

      // Draw segment by segment
      for (let i = 1; i < points.length; i++) {
        const p0 = points[i - 1];
        const p1 = points[i];

        // t_pos: 0 = tail (oldest), 1 = head (newest) — position along trail
        const tPos  = i / points.length;

        // t_age: how "alive" the head point is (1 = just born, 0 = expired)
        const tAge  = Math.max(0, 1 - (now - p1.born) / TRAIL_LIFETIME);

        // Combined alpha: fade by position AND by age
        const alpha = Math.pow(tPos, 1.4) * Math.pow(tAge, 0.6);

        if (alpha < 0.01) continue;

        const { r, g, b } = lerpColor(GRADIENT_STOPS, tPos);
        const lineWidth   = tPos * 2.5;

        // Glow pass (blurred, wide)
        ctx.beginPath();
        ctx.moveTo(p0.x, p0.y);
        ctx.lineTo(p1.x, p1.y);
        ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${alpha * 0.4})`;
        ctx.lineWidth   = lineWidth * 5;
        ctx.lineCap     = 'round';
        ctx.lineJoin    = 'round';
        ctx.filter      = 'blur(5px)';
        ctx.stroke();

        // Sharp inner line
        ctx.beginPath();
        ctx.moveTo(p0.x, p0.y);
        ctx.lineTo(p1.x, p1.y);
        ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${alpha * 0.9})`;
        ctx.lineWidth   = lineWidth;
        ctx.filter      = 'none';
        ctx.stroke();
      }

      // Glowing head dot at the newest point
      const head = points[points.length - 1];
      if (head) {
        const tAge  = Math.max(0, 1 - (now - head.born) / TRAIL_LIFETIME);
        const { r, g, b } = lerpColor(GRADIENT_STOPS, 1); // pink at head

        // Bloom
        ctx.beginPath();
        ctx.arc(head.x, head.y, 10, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${0.35 * tAge})`;
        ctx.filter    = 'blur(6px)';
        ctx.fill();

        // Core
        ctx.beginPath();
        ctx.arc(head.x, head.y, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 240, 255, ${tAge})`;
        ctx.filter    = 'none';
        ctx.fill();
      }

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-[9999]"
      aria-hidden="true"
    />
  );
}
