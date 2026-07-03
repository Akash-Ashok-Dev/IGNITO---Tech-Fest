import { useEffect, useRef } from 'react';

export default function StarField() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationId;
    let stars = [];
    let shootingStars = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars();
    };

    const initStars = () => {
      stars = [];
      const count = Math.floor((canvas.width * canvas.height) / 3000);
      for (let i = 0; i < count; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1.5 + 0.2,
          alpha: Math.random(),
          delta: (Math.random() - 0.5) * 0.008,
          color: Math.random() > 0.85
            ? `hsl(${Math.random() * 60 + 190}, 80%, 80%)`
            : '#ffffff',
        });
      }
    };

    const spawnShootingStar = () => {
      if (Math.random() < 0.006) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height * 0.5;
        shootingStars.push({ x, y, len: Math.random() * 80 + 40, alpha: 1, speed: Math.random() * 6 + 4 });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw stars
      stars.forEach(s => {
        s.alpha += s.delta;
        if (s.alpha <= 0.1 || s.alpha >= 1) s.delta *= -1;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
        ctx.fillStyle = s.color;
        ctx.globalAlpha = s.alpha;
        ctx.fill();
      });

      // Shooting stars
      ctx.globalAlpha = 1;
      spawnShootingStar();
      shootingStars = shootingStars.filter(ss => ss.alpha > 0);
      shootingStars.forEach(ss => {
        const gradient = ctx.createLinearGradient(ss.x, ss.y, ss.x - ss.len, ss.y + ss.len);
        gradient.addColorStop(0, `rgba(6,182,212,${ss.alpha})`);
        gradient.addColorStop(1, 'rgba(6,182,212,0)');
        ctx.beginPath();
        ctx.moveTo(ss.x, ss.y);
        ctx.lineTo(ss.x - ss.len, ss.y + ss.len);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1.5;
        ctx.stroke();
        ss.x += ss.speed;
        ss.y += ss.speed;
        ss.alpha -= 0.015;
      });

      ctx.globalAlpha = 1;
      animationId = requestAnimationFrame(draw);
    };

    resize();
    draw();

    window.addEventListener('resize', resize);
    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      aria-hidden="true"
    />
  );
}
