import { useEffect, useRef } from "react";
import "./Projects.css";
import { useNavigate } from "react-router-dom";

/* GIF */
import IntroGif from "../assets/projects/Intro.gif";

/* IMMAGINI */
import AccaMagazine from "../assets/home/AccaMagazine.png";
import LiberaUscita from "../assets/home/LiberaUscita.jpg";
import NoteKiller from "../assets/home/NoteKiller.PNG";
import OverExposed from "../assets/home/OverExposed.jpg";
import HubStudios from "../assets/home/HubStudios.png";

function Projects() {
  const navigate = useNavigate();

  const projects = [
    { img: LiberaUscita, name: "Libera Uscita" },
    { img: AccaMagazine, name: "Acca Magazine" },
    { img: NoteKiller, name: "Note Killer" },
    { img: OverExposed, name: "Over Exposed" },
    { img: HubStudios, name: "Hub Studios" },
  ];

  /* =========================
     CURSOR TRAIL
  ========================= */
  const pointsRef = useRef([]);
  const containerRef = useRef(null);
  const rafRef = useRef(null);

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
    <div className="projects-page">

      {/* CURSOR TRAIL */}
      <div className="cursor-glow-trail" ref={containerRef} />

      {/* WRAPPER CENTRALE */}
      <div className="projects-wrapper">

        {/* NAVBAR */}
        <nav className="projects-nav">

          <div className="back" onClick={() => navigate("/")}>
            ←
          </div>

          <div className="title">
            Gabriele's Portfolio 2026
          </div>

          <div className="nav-links">
            <span className="active" onClick={() => navigate("/")}>
              Home
            </span>
            <span>Packaging</span>
            <span>Contact</span>
          </div>

        </nav>

        {/* GIF */}
        <div className="intro-gif">
          <img src={IntroGif} alt="Intro" />

          <div className="gif-label">
            Check this out - HubStudios video.
          </div>
        </div>

        {/* PICK TEXT */}
        <div className="pick-text">
          Pick your favorite.
        </div>

        {/* GRID */}
        <div className="projects-grid">
          {projects.map((p, i) => (
            <div className="project-card" key={i}>
              <img src={p.img} alt={p.name} />
              <div className="project-name">{p.name}</div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Projects;