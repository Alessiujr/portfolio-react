import { useEffect, useRef } from "react";
import "../layouts/Projects.css";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

/* VIDEO */
import IntroVideo from "../assets/projects/Intro.mp4";

/* IMMAGINI */
import AccaMagazine from "../assets/home/AccaMagazine.png";
import MilanoScannerWeek from "../assets/home/mdw26.png";
import LiberaUscita from "../assets/home/LiberaUscita.jpg";
import NoteKiller from "../assets/home/NoteKiller.PNG";
import OverExposed from "../assets/home/OverExposed.jpg";
import HubStudios from "../assets/home/HubStudios.png";
import AttaccoManoide from "../assets/home/Mano1.png";
import MosaicoFestival from "../assets/home/MosaicoFestival.png";

function Projects() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Gabriele's Projects";
  }, []);

  const projects = [
    {
      img: LiberaUscita,
      name: "Libera Uscita",
      subtitle: "Gabriele Di Mauro - Simone Sanfilippo",
      path: "/libera-uscita",
    },
    {
      img: MilanoScannerWeek,
      name: "MDW 2026",
      subtitle: "Milano Scanner Week 2026",
      path: "/mdw-26",
    },
    {
      img: AttaccoManoide,
      name: "Attacco Manoide",
      subtitle: "Gabriele Di Mauro",
      path: "/attacco-manoide",
    },

    {
      img: NoteKiller,
      name: "Note Killer",
      subtitle: "Instagram Setup",
      path: "/note-killer",
    },
    {
      img: OverExposed,
      name: "OverExposed",
      subtitle: "Gabriele Di Mauro - Simone Sanfilippo - Luca Gentile",
      path: "/over-exposed",
    },
    {
      img: HubStudios,
      name: "HubStudios.",
      subtitle: "Ready to inspire the new generation",
    },

    {
      img: MosaicoFestival,
      //name: "Mosaico Festival",
      //subtitle: "5 - 10 August 2025",
      path: "/mosaico-festival",
    },
    {
      img: AccaMagazine,
      name: "Acca Magazine",
      subtitle: "Think, Read, Share.",
    },
  ];

  const pointsRef = useRef([]);
  const containerRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    const points = pointsRef.current;

    const addPoint = (x, y) => {
      points.push({ x, y, life: 1 });
      if (points.length > 25) points.shift();
    };

    const handleMouseMove = (e) => addPoint(e.clientX, e.clientY);

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

      <div className="cursor-glow-trail" ref={containerRef} />

      {/* NAVBAR FULL-WIDTH */}
      <Navbar active="projects" />

      <div className="projects-wrapper">

        {/* VIDEO */}
        <div className="intro-gif">
          <video autoPlay muted loop>
            <source src={IntroVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="gif-label">Check this out - HubStudios video.</div>
        </div>

        <div className="pick-text">Pick your favorite.</div>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <div
              key={i}
              className="project-card"
              onClick={() => p.path && navigate(p.path)}
            >
              <img src={p.img} alt={p.name} />
              <div className="project-text">
                <div className="project-name">{p.name}</div>
                <div className="project-subtitle">{p.subtitle}</div>
              </div>
            </div>
          ))}
        </div>

      </div>

      <Footer />
    </div>
  );
}

export default Projects;