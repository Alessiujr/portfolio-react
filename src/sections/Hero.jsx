import { useEffect, useRef } from "react";
import "./Hero.css";
import { useNavigate } from "react-router-dom";

/* IMMAGINI */
import AccaMagazine from "../assets/home/AccaMagazine.png";
import LiberaUscita from "../assets/home/LiberaUscita.jpg";
import NoteKiller from "../assets/home/NoteKiller.PNG";
import OverExposed from "../assets/home/OverExposed.jpg";
import HubStudios from "../assets/home/HubStudios.png";

function Hero() {
  const navigate = useNavigate();

  const pointsRef = useRef([]);
  const containerRef = useRef(null);
  const rafRef = useRef(null);

  const projects = [
    { img: AccaMagazine, name: "AccaMagazine" },
    { img: LiberaUscita, name: "Libera Uscita" },
    { img: NoteKiller, name: "Note Killer" },
    { img: OverExposed, name: "OverExposed" },
    { img: HubStudios, name: "HubStudios." },
  ];

  useEffect(() => {
    const points = pointsRef.current;

    const addPoint = (x, y) => {
      points.push({ x, y, life: 1 });
      if (points.length > 25) points.shift();
    };

    const handleMouseMove = (e) => {
      addPoint(e.clientX, e.clientY);
    };

    const animate = () => {
      const container = containerRef.current;
      if (!container) return;

      for (let i = 0; i < points.length; i++) {
        points[i].life -= 0.015;
      }

      while (points.length && points[0].life <= 0) {
        points.shift();
      }

      container.innerHTML = points
        .map((p, i) => {
          const scale = p.life;
          const stretchX = 1 + Math.sin(i * 0.5) * 0.6;
          const stretchY = 1 + Math.cos(i * 0.5) * 0.6;
          const rotation = Math.sin(i * 0.3) * 45;

          return `
            <div class="trail-blob"
              style="
                left:${p.x}px;
                top:${p.y}px;
                opacity:${p.life};
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

      {/* CURSOR TRAIL */}
      <div className="cursor-glow-trail" ref={containerRef} />

      {/* TOP GALLERY */}
      <div className="top-gallery-wrapper">
        <div className="top-gallery">
          {projects.concat(projects).map((project, index) => (
            <div className="gallery-item" key={index}>
              <img src={project.img} alt={project.name} />

              <div className="gallery-title">
                {project.name}
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* CENTER */}
      <div className="hero-content">
        <p className="welcome-text">
          Welcome <span>to</span>
        </p>

        <h1 className="main-title">
          GABRIELE'S PORTFOLIO
        </h1>

        <button
          className="enter-btn"
          onClick={() => navigate("/projects")}
        >
          Enter
        </button>
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