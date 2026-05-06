import { useLocation, useNavigate } from "react-router-dom";
import { useContact } from "../context/ContactContext";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();
  const { openContact } = useContact();

  return (
    <nav className="navbar">
      {/* LEFT */}
      <div className="nav-left">
        <button className="back-btn" title="Back" onClick={() => navigate(-1)}>
          <span>←</span>
        </button>
      </div>

      {/* CENTER */}
      <div className="nav-center">
        <span className="portfolio-title">Gabriele's Portfolio</span>
        <span className="portfolio-year">2026</span>
      </div>

      {/* RIGHT */}
      <div className="nav-right">
        <button
          className="home-btn"
          onClick={() => navigate("/")}
          title="Home"
        >
          <span className="nav-icon">⌂</span>
          <span>Home</span>
        </button>

        <button
          className="nav-btn"
          onClick={() => navigate("/projects")}
          title="Packaging Projects"
        >
          <span className="nav-icon">◆</span>
          <span>Packaging</span>
        </button>

        <button
          className="nav-btn"
          onClick={openContact}
          title="Get in touch"
        >
          <span className="nav-icon">✉</span>
          <span>Contact</span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;