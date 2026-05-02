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
        <button className="back-btn" onClick={() => navigate(-1)}>
          ←
        </button>
      </div>

      {/* CENTER */}
      <div className="nav-center">
        Gabriele's Portfolio 2026
      </div>

      {/* RIGHT */}
      <div className="nav-right">

        {/* HOME (UNICO DIVERSO) */}
        <button
          className="home-btn"
          onClick={() => navigate("/")}
        >
          Home
        </button>

        {/* PACKAGING (SEMPRE UGUALE) */}
        <button
          className="nav-btn"
          onClick={() => navigate("/projects")}
        >
          Packaging
        </button>

        {/* CONTACT (SEMPRE UGUALE + MODALE) */}
        <button
          className="nav-btn"
          onClick={openContact}
        >
          Contact
        </button>

      </div>
    </nav>
  );
}

export default Navbar;