import { useLocation, useNavigate } from "react-router-dom";
import { useContact } from "../context/ContactContext";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { openContact } = useContact();

  return (
    <nav className="navbar">

      {/* LEFT */}
      <div className="nav-left">
        <button className="back-btn" onClick={() => navigate(-1)}>
          ←
        </button>
      </div>

      {/* CENTER TITLE */}
      <div className="nav-center">
        Gabriele's Portfolio 2026
      </div>

      {/* RIGHT LINKS */}
      <div className="nav-right">

        {/* HOME → ROSSO OVALE SEMPRE */}
        <button
          className="home-btn"
          onClick={() => navigate("/")}
        >
          Home
        </button>

        {/* PROJECTS → ATTIVO ROSSO OVALE */}
        <button
          className={`nav-btn ${
            location.pathname === "/projects" ? "active" : ""
          }`}
          onClick={() => navigate("/projects")}
        >
          Projects
        </button>

        {/* CONTACT → APRE MODALE */}
        <button className="nav-btn contact-btn" onClick={openContact}>
          Contact
        </button>

      </div>
    </nav>
  );
}

export default Navbar;