// src/sections/Hero.jsx

import { useEffect, useRef } from "react";
import "./Hero.css";

function Hero() {
  const pointsRef = useRef([]);
  const containerRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    const points = pointsRef.current;

    const addPoint = (x, y) => {
      points.push({ x, y, life: 1 });
      if (points.length > 25) points.shift(); // limita la scia
    };

    const handleMouseMove = (e) => {
      addPoint(e.clientX, e.clientY);
    };

    const animate = () => {
        const container = containerRef.current;
        if (!container) return;

        // fade lento
        for (let i = 0; i < points.length; i++) {
            points[i].life -= 0.015; // 👈 più durata
        }

        // rimuovi morti
        while (points.length && points[0].life <= 0) {
            points.shift();
        }

        // render
        container.innerHTML = points
        .map((p, i) => {
            const scale = p.life;
            const stretchX = 1 + Math.sin(i * 0.5) * 0.6;
            const stretchY = 1 + Math.cos(i * 0.5) * 0.6;
            const rotation = Math.sin(i * 0.3) * 45;

            return `
            <div class="trail-blob"
                style="
                left: ${p.x}px;
                top: ${p.y}px;
                opacity: ${p.life};
                transform:
                    translate(-50%, -50%)
                    scale(${scale * stretchX}, ${scale * stretchY})
                    rotate(${rotation}deg);
                ">
            </div>
            `;
        })
        .join("");

        rafRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <section className="hero">
      {/* CURSOR TRAIL LAYER */}
      <div className="cursor-glow-trail" ref={containerRef} />

      {/* TOP GALLERY */}
      <div className="top-gallery">
        <div className="gallery-item">Project 1</div>
        <div className="gallery-item">Project 2</div>
        <div className="gallery-item">Project 3</div>
        <div className="gallery-item">Project 4</div>
        <div className="gallery-item">Project 5</div>
        <div className="gallery-item">Project 6</div>
        <div className="gallery-item">Project 7</div>
      </div>

      {/* CENTER */}
      <div className="hero-content">
        <p className="welcome-text">
          Welcome <span>to</span>
        </p>

        <h1 className="main-title">GABRIELE'S PORTFOLIO</h1>

        <button className="enter-btn">Enter</button>
      </div>

      {/* FOOTER */}
      <footer className="hero-footer">
        <span>Portfolio 2026</span>
        <span>Graphic Designer</span>
        <span>Gabriele Di Mauro</span>
      </footer>
    </section>
  );
}

export default Hero;